using Microsoft.Extensions.Logging;
using MigracionUsuariosAD_CM.Contracts;
using Quartz;
using System;
using System.Threading.Tasks;

namespace MigracionUsuariosAD_CM.Jobs
{
    public class MigracionUsuariosJob : IJob
    {
        private readonly ILogger<MigracionUsuariosJob> logger;
        private readonly IMigracionUsuarioService service;

        public MigracionUsuariosJob(ILogger<MigracionUsuariosJob> logger, IMigracionUsuarioService service)
        {
            this.logger = logger;
            this.service = service;
        }

        public Task Execute(IJobExecutionContext context)
        {
            if (context.RefireCount > 10)
            {
                return Task.CompletedTask;
            }
            try
            {
                service.Execute();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error has occuried");
            }
            return Task.CompletedTask;
        }
    }
}
