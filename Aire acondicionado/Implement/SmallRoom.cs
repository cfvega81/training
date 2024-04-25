using System;
using System.Reactive.Linq;
using System.Reactive.Subjects;
using Aire_acondicionado.Constant;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services_interface;
using Microsoft.Extensions.Primitives;

namespace Aire_acondicionado.Implement
{
    internal class SmallRoom : IRoom
    {
        private readonly IAffectationTemperature affectationTemperatureService;
        private readonly IChangeTemperature changeTemperatureService;
        private IDisposable roomCreatedSubscription;
        private double temperatureMax = 40;
        private double temperature = 15;
        private double temperatureAffectedOn = 0;

        double IRoom.temperatureMax {get;set;}
        double IRoom.temperature {get;set;}
        public IDisposable RoomCreatedSubscription {get;set;}

        public SmallRoom(
            IAffectationTemperature affectationTemperatureService,
            IChangeTemperature changeTemperatureService,
            IThermostat thermostate)
        {
            this.affectationTemperatureService = affectationTemperatureService;
            this.changeTemperatureService = changeTemperatureService;
            Initialize();
        }
        private void Initialize()
        {
            roomCreatedSubscription = Observable.Interval(TimeSpan.FromSeconds(2)).Subscribe(_ => Elapsed());
            affectationTemperatureService.AffectationTemperatureSubject.Subscribe(temperature => AffectationTemperatureChanged(temperature));
        }

        private void AffectationTemperatureChanged(double temperature)
        {
            temperatureAffectedOn = temperature;
        }

        private void Elapsed()
        {
            if (temperature < temperatureMax)
            {
                temperature += (0.5 - temperatureAffectedOn);
                changeTemperatureService.ChangeTemperature(temperature);
            }
        }
        public void Finalize()
        {
            roomCreatedSubscription.Dispose();
        }
    }


}
