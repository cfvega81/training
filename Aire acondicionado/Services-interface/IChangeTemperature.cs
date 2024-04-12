using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reactive.Subjects; 

namespace Aire_acondicionado.Services_interface
{
    public interface IChangeTemperature
    {
        // Para emitir el cambio de temperatura
        BehaviorSubject<double> ChangedTemperature { get; }

        // Para cambiar la temperatura
        void ChangeTemperature(double temperature);
    }
}
