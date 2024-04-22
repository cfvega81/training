using System;
using System.Reactive.Subjects;
using System.Reactive.Disposables;
using Aire_acondicionado.Constant;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services_interface;

namespace AireAcondicionado.Implement
{
    public class ThermostatSamsung : IThermostat
    {
        private readonly IChangeTemperature changeTemperatureService;
        private IDisposable changedTemperatureSubscription;
        public BehaviorSubject<double> ChangedTemperature => new BehaviorSubject<double>(20);
        private string state = "Thermostat OFF";

        public ThermostatSamsung(
            IChangeTemperature changeTemperatureService)
        {
            this.changeTemperatureService = changeTemperatureService;

            InitService();
        }

        private void InitService()
        {
            changedTemperatureSubscription = changeTemperatureService.ChangedTemperature.Subscribe(WhenTemperatureChanged);
        }

        private void WhenTemperatureChanged(double temperature)
        {
            state = "Thermostat ON";
            ChangedTemperature.OnNext(temperature);
        }

        public void ChangeTemperature(double temperature)
        {
            throw new NotImplementedException();
        }

        public void Finalize()
        {
            changedTemperatureSubscription.Dispose();
        }
    }
}
