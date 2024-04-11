using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Constant;
using Aire_acondicionado.Interface;

namespace Aire_acondicionado.Implement
{
    internal class CpuDaewoo: ICpu, IFan
    {
        private readonly IBlades Blade;
        private readonly ICompressor Compressor;
        private readonly IFan Fan;
        private readonly IThermostat Termostat;
        private IDisposable changedTemperatureSubscription;
        


        public CpuDaewoo(IBlades blade)
        {
            this.Blade = blade;
            isOn = false;
            temperature = 20;
            temperetureMax = 30;
            temperatureMin = 15;
            
        }

        public bool isOn {get;set;}
        public string mode {get;set;}
        public double temperature {get;set;}
        public double temperetureMax {get;set;}
        public double temperatureMin {get;set;}
        public BladeStatus bladeStatus {get;set;}
        public ICompressor compressor {get;set;}
        public IFan fan { get;set;}
        public IBlades blades {get;set;}
        public IThermostat thermostat {get;set;}

        
        public void IncrementTemperature()
            
        {
            if (temperature < temperetureMax)
            {
                temperature++;
            }
        }
        public void DecrementTemperature()
        {
            if (temperature > temperetureMax)
            {
                temperature++;
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
            if (thermostat != null)
            {
                changedTemperatureSubscription = thermostat.ChangedTemperature.Subscribe(TemperatureChanged);
            }
            Console.WriteLine("CPU ON");
        }


        public void TurnOff()
        {
            isOn = false;
            changedTemperatureSubscription.Dispose();
            fan.TurnOff();
            compressor.TurnOff();
            Console.WriteLine("CPU OFF");
        }
        public void TemperatureChanged(double temperature)
        {
            if (temperature > this.temperature)
            {
                compressor.TurnOn();
            }
            else if (temperature < (this.temperature - 1))
            {
                compressor.TurnOff();
            }
        }
    }

 


}



