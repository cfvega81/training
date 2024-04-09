using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aire_acondicionado.Interface
{
    public interface Room
    {
        double TemperatureMax { get; set; }
        double Temperature { get; set; }
        IDisposable RoomCreatedSubscription { get; set; } 
    }
}
