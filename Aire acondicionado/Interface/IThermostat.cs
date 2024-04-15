using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Aire_acondicionado.Interface
{
    public interface IThermostat 
    {
        event Action<double> TemperatureChangeEvent;
    }
}
