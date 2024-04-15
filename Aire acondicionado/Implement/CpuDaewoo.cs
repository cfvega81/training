using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Aire_acondicionado.Constant;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services_Contratc;

namespace Aire_acondicionado.Implement
{
    //Hereda de ICpu y IFan
    internal class CpuDaewoo : ICpu, IFan
    {

        private readonly IAffectationTemperatureServiceV2 affectationServiceV2;
        private readonly IBlades Blade;
        private readonly ICompressor Compressor;
        private readonly IFan Fan;
        private readonly IThermostat Termostat;
        private readonly IDisposable changedTemperatureSubscription;

        //Constructor
        public CpuDaewoo(IBlades blade, IThermostat thermostat, ICompressor compressor, IAffectationTemperatureServiceV2 affectationServiceV2)
        {

            this.Blade = blade;
            this.Compressor = compressor;
            this.thermostat = thermostat;
            this.affectationServiceV2 = affectationServiceV2;
            //Haciendo uso del método Subscribe almacena los valores de AffectionTemperature en el
            //campo de affectationServiceV2
            this.affectationServiceV2.AffectationTemperatureSubject.Subscribe(AffectionTemperature);
            //Thermostat_TemperatureChangeEvent se suscribe al evento TemperatureChangeEvent de IThermostat
            this.thermostat.TemperatureChangeEvent += Thermostat_TemperatureChangeEvent;

            isOn = false;
            temperature = 20;
            temperetureMax = 30;
            temperatureMin = 15;
        }

        public bool isOn { get; set; }
        public string mode { get; set; }
        public double temperature { get; set; }
        public double temperetureMax { get; set; }
        public double temperatureMin { get; set; }
        public BladeStatus bladeStatus { get; set; }
        public ICompressor compressor { get; set; }
        public IFan fan { get; set; }
        public IBlades blades { get; set; }
        public IThermostat thermostat { get; set; }

        //Método AffectionTemperature que recive el parámetro double temperature
        private void AffectionTemperature (double temperature)
        {
            Console.WriteLine($"Received new temperature: {temperature}");
        }
        //Método Thermostat_TemperatureChangeEvent que recive el parámetro double obj
        private void Thermostat_TemperatureChangeEvent(double obj)
        {
            Console.WriteLine($"Temperature Room {obj}");

            if (obj > temperature)
            {
                Compressor.TurnOn();
            }
            else if (obj < (temperature - 1))
            {
                Compressor.TurnOff();
            }
        }

        public void IncrementTemperature()
        {
            if (temperature < temperetureMax)
            {
                temperature++;
                Console.WriteLine($"Temperature increment: {temperature}");
            }
        }

        public void DecrementTemperature()
        {
            if (temperature > temperetureMax)
            {
                temperature--;
                Console.WriteLine($"Temperature decrement: {temperature}");
            }
        }

        public void ToggleBlades()
        {
            Blade.Mode = Blade.Mode switch
            {
                BladeStatus.DOWN => BladeStatus.MIDDLE,
                BladeStatus.MIDDLE => BladeStatus.UP,
                BladeStatus.UP => BladeStatus.SPIN,
                _ => BladeStatus.DOWN
            };
            Console.WriteLine(Blade.Mode);
        }

        public void TurnOn()
        {
            isOn = true;
            Console.WriteLine("CPU ON");
        }


        public void TurnOff()
        {
            isOn = false;
            //Se desuscribe
            changedTemperatureSubscription.Dispose();
            fan.TurnOff();
            Compressor.TurnOff();
            Console.WriteLine("CPU OFF");
        }


        public void TemperatureChanged(double temperature)
        {
            if (temperature > temperature)
            {
                Compressor.TurnOn();
                Console.WriteLine("Compressor ON");
            }
            else if (temperature < (temperature - 1))
            {
                Compressor.TurnOff();
                Console.WriteLine("Compressor OFF");
            }
        }
    }




}


