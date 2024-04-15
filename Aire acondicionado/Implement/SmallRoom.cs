using System;
using System.Reactive.Linq;
using System.Reactive.Subjects;
using System.Timers;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services;
using Aire_acondicionado.Services_Contratc;

namespace Aire_acondicionado.Implement
{
    //Hereda de IRoom
    internal class SmallRoom : IRoom
    {
        //Crea los campos para obtener los datos de cada Interface
        private readonly IAffectationTemperatureService affectationService;
        private readonly IAffectationTemperatureServiceV2 affectationServiceV2;
        private readonly IThermostat thermostat;
        private IDisposable roomCreatedSubscription;

        //Constates
        private double temperatureMax = 40;
        private double temperatureMin = 15;
        private double temperature = 21;
        private double temperatureAffectedOn = 0;
        private double offset = .5;
        private double variation = 0;

        //Timer
        System.Timers.Timer tmr;

        //Crea el evento TemperatureChangeEvent (Sirve para notificar cambios en temperature a los
        //que esten suscrítos en el
        public event Action<double> TemperatureChangeEvent;

        //Crea la porpiedad Temperature que sirve para que otros accedan a este para solo tener
        //lectura de temperature del cuarto
        public double Temperature => temperature;

        double IRoom.temperatureMax { get;}
        double IRoom.temperature { get;}
        double IRoom.temperatureMin { get;}
        public IDisposable RoomCreatedSubscription { get; set; }

        //Constructor con la inyección de IAffectationTemperatureService y IAffectationTemperatureServiceV2
        public SmallRoom(

            IAffectationTemperatureService affectationService,
            IAffectationTemperatureServiceV2 affectationServiceV2)
        {
            this.affectationService = affectationService;
            this.affectationServiceV2 = affectationServiceV2;

            //AffectationService_AffectationTemperatureEvent se suscribe al evento AffectationTemperatureEvent de affectationService 
            this.affectationService.AffectationTemperatureEvent += AffectationService_AffectationTemperatureEvent;

            Console.WriteLine("Room Small observed");

            //Timer
            tmr = new System.Timers.Timer();
            tmr.Interval = 2000;
            tmr.Elapsed += Tmr_Elapsed;
            tmr.Start();

        }

        //Método AffectationService_AffectationTemperatureEvent toma el 
        private void AffectationService_AffectationTemperatureEvent(double obj)
        {
            //Cambia el valor de variation de la clase SmallRoom por obj
            this.variation = obj;
        }

        //Destructor
        //~SmallRoom()
        //{
        //tmr.Stop();
        //tmr.Dispose();
        //}

        //Método Tmr_Elapsed que se activa cada 2 segundos
        private void Tmr_Elapsed(object? sender, System.Timers.ElapsedEventArgs e)
        {
            //Crea newTemperature sumando el constante de .5 del cuarto y variation que viene del
            //compresor a la temperatura
            var newTemperature = temperature + offset + variation;


            if (newTemperature < temperatureMax && newTemperature > temperatureMin)
            {
                TemperatureChangeEvent?.Invoke(temperature);
                affectationServiceV2.AffectationTemperatureSubject.OnNext(temperature);
            }

        }


        public void Finalize()
        {
            roomCreatedSubscription.Dispose();
            Console.WriteLine("Room Small closed");
        }
    }
}