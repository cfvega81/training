using System;
using System.Reactive.Linq;
using System.Reactive.Subjects;
using System.Timers;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services_interface;

namespace Aire_acondicionado.Implement
{
    internal class SmallRoom : IRoom
    {
        private readonly IAffectationTemperature affectationTemperatureService;
        private readonly IChangeTemperature changeTemperatureService;
        private IDisposable roomCreatedSubscription;
        private double temperatureMax = 40;
        private double temperatureMin = 15;
        private double temperature = 25;
        private double temperatureAffectedOn = 0;
        private int offset = 1;
        private readonly IThermostat thermostat;
        System.Timers.Timer tmr;

        public event Action<double> TemperatureChangeEvent;
        public double Temperature => temperature;

        double IRoom.temperatureMax { get; set; }
        double IRoom.temperature { get; set; }
        public IDisposable RoomCreatedSubscription { get; set; }


        public SmallRoom(
            IAffectationTemperature affectationTemperatureService,
            IChangeTemperature changeTemperatureService)
        {
            this.affectationTemperatureService = affectationTemperatureService;
            this.changeTemperatureService = changeTemperatureService;
            Initialize();
            Console.WriteLine("Room Small observed");

            tmr = new System.Timers.Timer();
            tmr.Interval = 1000;
            tmr.Elapsed += Tmr_Elapsed;
            tmr.Start();
        }

        //Destructor
        //~SmallRoom()
        //{
        //tmr.Stop();
        //tmr.Dispose();
        //}

        private void Tmr_Elapsed(object? sender, System.Timers.ElapsedEventArgs e)
        {
            var newTemperature = temperature + offset;
            if (newTemperature < temperatureMax && newTemperature > temperatureMin)
            {
                temperature += (0.5 - temperatureAffectedOn);
                changeTemperatureService.ChangeTemperature(temperature);
                TemperatureChangeEvent?.Invoke(temperature);
            }
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

        }

        public void Finalize()
        {
            roomCreatedSubscription.Dispose();
            Console.WriteLine("Room Small closed");
        }
    }
}