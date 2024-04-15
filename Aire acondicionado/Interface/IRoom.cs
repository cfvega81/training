using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aire_acondicionado.Interface
{
    public interface IRoom
    {
        event Action<double> TemperatureChangeEvent;
        double temperatureMax { get;}
        double temperature { get;}
        double temperatureMin { get;}
        IDisposable RoomCreatedSubscription { get; set; }
    }
}
