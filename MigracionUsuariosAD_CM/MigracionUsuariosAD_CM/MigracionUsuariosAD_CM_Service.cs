using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MigracionUsuariosAD_CM.Contracts;
using MigracionUsuariosAD_CM.Jobs;
using MigracionUsuariosAD_CM.Models;
using MigracionUsuariosAD_CM.Repositories;
using Quartz;
using System.ServiceProcess;
using System.Threading;
using System.Threading.Tasks;

namespace MigracionUsuariosAD_CM
{
    partial class MigracionUsuariosAD_CM_Service : ServiceBase
    {
        CancellationTokenSource cts;
        Task hostTask;

        public MigracionUsuariosAD_CM_Service()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            cts = new CancellationTokenSource();
            hostTask = Task.Factory.StartNew(StartHostQuartz, cts.Token);
        }

        private async Task StartHostQuartz()
        {
            var hostQuartz = Host.CreateDefaultBuilder()
                .ConfigureServices((ctx, svcs) =>
                {
                    var cronSettings = new CronSettingsModel();
                    ctx.Configuration.GetSection("CronSettings").Bind(cronSettings);

                    var adSettings = new ActiveDirectoryModel();
                    ctx.Configuration.GetSection("ActiveDirectory").Bind(adSettings);
                    svcs.AddSingleton(adSettings);

                    svcs.AddQuartz(cfg =>
                    {
                        cfg.SchedulerId = "BPD-Scheduler";
                        cfg.UseSimpleTypeLoader();
                        cfg.UseInMemoryStore();
                        cfg.UseDefaultThreadPool(tp =>
                        {
                            tp.MaxConcurrency = 1;
                        });

                        cfg.ScheduleJob<MigracionUsuariosJob>(trigger =>
                            trigger.WithIdentity("BPD-Trigger-MigracionUsuarios")
                            .WithCronSchedule(cronSettings.MigracionUsuariosJob)
                        );
                    });

                    svcs.AddTransient<MigracionUsuariosJob>();
                    svcs.AddTransient<IMigracionUsuarioService, MigracionUsuarioService>();
                    svcs.AddTransient<IUsuariosActiveDirectory, UsuariosActiveDirectory>();
                    svcs.AddTransient<IUsuariosRepositorio, SQLServerRepositorio>();

                    svcs.AddQuartzHostedService(cfg =>
                    {
                        cfg.WaitForJobsToComplete = false;
                    });
                })
                .ConfigureLogging((ctx, logging) =>
                {
                    logging.AddEventLog(settings =>
                    {
                        settings.SourceName = nameof(MigracionUsuariosAD_CM_Service);
                    });
                })
                .Build();

            await hostQuartz.RunAsync(cts.Token);
        }

        protected override void OnStop()
        {
            if (cts != null && hostTask != null)
            {
                cts.Cancel();
                hostTask.Wait(cts.Token);
            }
        }
    }
}
