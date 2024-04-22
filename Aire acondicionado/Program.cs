using System.ComponentModel.Design;
using Aire_acondicionado.Implement;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services_interface;
using AireAcondicionado.Implement;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var host = new HostBuilder()
    .ConfigureServices (services => { 
        services.AddTransient<ICpu, CpuDaewoo>();
        services.AddTransient<ICompressor, CompressorPanasonic>();
        services.AddTransient<IBlades, BladeSamsung>();
        services.AddTransient<IControlPanel, ControlPanelSamsung>();
        services.AddTransient<IRoom, SmallRoom>();
        services.AddTransient<IThermostat, ThermostatSamsung>();
        services.AddTransient<IFan, FanSamsung>();
        services.AddTransient<IAlterTemperatureInterface, AlterTemperature>();
        services.AddTransient<IChangeTemperature, ChangeTemperature>();
        services.AddTransient<IAffectationTemperature, AffectationTemperature>();
       

    })
    .Build();

IFan fan = host.Services.GetService<IFan>();
ICpu cpu = host.Services.GetService<ICpu>();
IRoom room = host.Services.GetService<IRoom>();
IThermostat thersmostate = host.Services.GetService<IThermostat>();
IControlPanel controlPanel = host.Services.GetService<IControlPanel>();
ICompressor compressor = host.Services.GetService<ICompressor>();

controlPanel.TurnOn();






