using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Subjects;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Services_Contratc;

namespace Aire_acondicionado.Services
{
    internal class AffectationTemperatureService : IAffectationTemperatureService
    {
        public event Action<double> AffectationTemperatureEvent;

        public void AffectationTemperature(double temperature)
        {
            AffectationTemperatureEvent?.Invoke(temperature);
        }
    }

    public class AffectationTemperatureServiceV2 : IAffectationTemperatureServiceV2
    {
        public Subject<double> AffectationTemperatureSubject { get; }

        public AffectationTemperatureServiceV2()
        {
            this.AffectationTemperatureSubject = new Subject<double>();
        }
    }
}
