using Aire_acondicionado.Interface;
using Aire_acondicionado.Services;

using System.Reactive.Subjects;
using Aire_acondicionado.Services_Contratc;

public class ThermostatSamsung : IThermostat
{
    private readonly IAffectationTemperatureServiceV2 temperatureServiceV2;

    public event Action<double> TemperatureChangeEvent;

    public ThermostatSamsung(IAffectationTemperatureServiceV2 affectationServiceV2)
    {
        this.temperatureServiceV2 = affectationServiceV2;
        this.temperatureServiceV2.AffectationTemperatureSubject.Subscribe(AffectationTemperatureChanged);
        Console.WriteLine("Thermostat Samsung initialized");

    }

    private void AffectationTemperatureChanged(double temperature)
    {
        TemperatureChangeEvent?.Invoke(temperature);
    }

}