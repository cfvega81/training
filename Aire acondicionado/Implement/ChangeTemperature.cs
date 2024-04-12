using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Subjects;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Services_interface;

namespace Aire_acondicionado.Implement
{
    internal class ChangeTemperature : IChangeTemperature
    {
        private BehaviorSubject<double> changedTemperatureSubject = new BehaviorSubject<double>(0.0);

        public BehaviorSubject<double> ChangedTemperature => changedTemperatureSubject; void IChangeTemperature.ChangeTemperature(double temperature)
        {
            changedTemperatureSubject.OnNext(temperature);
        }
    }
}