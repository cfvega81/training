using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Constant;

namespace Aire_acondicionado.Interface
{
    public interface ICpu : ITurnInterface, IAlterTemperatureInterface
    {
        bool IsOn { get; set; }
        string Mode { get; set; } 
        double Temperature { get; set; }
        double TempereturaMax { get; set; }
        double TemperatureMin { get; set; }
        string BladeStatus { get; set; }
        ICompressor Compressor { get; set; }
        IFan Fan { get; set; }
        IThermostat Thermostat { get; set; }

        void ToggleBlades();
    }
}
