using Aire_acondicionado.Interface;
using Aire_acondicionado.Services_interface;
using System.Reactive.Subjects;

public class ThermostatSamsung : IThermostat
{
    private readonly IRoom room;
    public event Action<double> TemperatureChangeEvent;

    private readonly IChangeTemperature changeTemperatureService;
    private IDisposable changedTemperatureSubscription;

    // Utilizamos una variable para almacenar el BehaviorSubject
    private BehaviorSubject<double> changedTemperatureSubject = new BehaviorSubject<double>(20);

    public BehaviorSubject<double> ChangedTemperature => changedTemperatureSubject;

    private string state = "Thermostat OFF";

    public ThermostatSamsung(IChangeTemperature changeTemperatureService, IRoom room)
    {
        this.room = room;
        this.room.TemperatureChangeEvent += Room_TemperatureChangeEvent;
        Console.WriteLine("Thermostat Samsung initialized");

        this.changeTemperatureService = changeTemperatureService;

        InitService();
    }

    private void Room_TemperatureChangeEvent(double temperature)
    {
        TemperatureChangeEvent?.Invoke(temperature);
    }

    private void InitService()
    {
        changedTemperatureSubscription = changeTemperatureService.ChangedTemperature.Subscribe(WhenTemperatureChanged);
    }

    private void WhenTemperatureChanged(double temperature)
    {
        state = "Thermostat ON";
        changedTemperatureSubject.OnNext(temperature);
    }

    public void Finalize()
    {
        changedTemperatureSubscription.Dispose();
        Console.WriteLine("Thermostat Samsung finalized");
    }

    public void ChangeTemperature(double temperature)
    {

    }
}