using System.ComponentModel.Design;
using Aire_acondicionado.Implement;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Aire_acondicionado.Services;
using Aire_acondicionado.Services_Contratc;


var host = new HostBuilder()
    .ConfigureServices(services => {
        services.AddTransient<ICpu, CpuDaewoo>();
        services.AddTransient<ICompressor, CompressorPanasonic>();
        services.AddTransient<IBlades, BladeSamsung>();
        services.AddTransient<IControlPanel, ControlPanelSamsung>();
        services.AddTransient<IRoom, SmallRoom>();
        services.AddTransient<IThermostat, ThermostatSamsung>();    
        services.AddTransient<IFan, FanSamsung>();
        services.AddSingleton<IAffectationTemperatureService, AffectationTemperatureService>();
        services.AddSingleton<IAffectationTemperatureServiceV2, AffectationTemperatureServiceV2>();


       
    })
    .Build();

IRoom room = host.Services.GetService<IRoom>();
IControlPanel controlPanel = host.Services.GetService<IControlPanel>();

controlPanel.TurnOn();

controlPanel.IncrementTemperature();
controlPanel.IncrementTemperature();
controlPanel.IncrementTemperature();




Console.ReadLine();