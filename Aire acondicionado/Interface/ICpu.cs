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
        bool isOn { get; set; }
        string mode { get; set; }
        double temperature { get; set; }
        double temperetureMax { get; set; }
        double temperatureMin { get; set; }
        BladeStatus bladeStatus { get; set; }
        IBlades blades { get; set; }
        ICompressor compressor { get; set; }
        IFan fan { get; set; }
        IThermostat thermostat { get; set; }

        void ToggleBlades();
    }
}