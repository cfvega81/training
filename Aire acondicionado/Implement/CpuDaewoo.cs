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
    internal class CpuDaewoo: ICpu
    {
        private readonly IBlades blade;

        public CpuDaewoo(IBlades blade)
        {
            this.blade = blade;
        }

        public bool IsOn { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string Mode { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public double Temperature { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public double TempereturaMax { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public double TemperatureMin { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string BladeStatus { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public ICompressor Compressor { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public IBlades Blades { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public IFan Fan { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public IThermostat Thermostat { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        
        public void DecrementTemperature()
        {
            throw new NotImplementedException();
        }

        public void IncrementTemperature()
        {
            throw new NotImplementedException();
        }

        public void ToggleBlades()
        {
            blade.Mode = blade.Mode switch
            {
                BladeStatus.DOWN => BladeStatus.MIDDLE,
                BladeStatus.MIDDLE => BladeStatus.UP,
                BladeStatus.UP => BladeStatus.SPIN,
                _ => BladeStatus.DOWN
            };
        }

        public void TurnOff()
        {
            throw new NotImplementedException();
        }

        public void TurnOn()
        {
            throw new NotImplementedException();
        }
    }

        
}



