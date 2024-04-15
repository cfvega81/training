using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Subjects;
using System.Text;
using System.Threading.Tasks;

namespace Aire_acondicionado.Services_Contratc
{
    public interface IAffectationTemperatureService
    {
        //Crea el evento AffectationTemperatureEvent que hará saber cuando haya un cambio en temperature
        event Action<double> AffectationTemperatureEvent;
        //Crea el método AffectationTemperature usa a temperature pero no devuelve nada
        void AffectationTemperature(double temperature);
    }

    public interface IAffectationTemperatureServiceV2
    {
        System.Reactive.Subjects.Subject<double> AffectationTemperatureSubject { get; }

    }

}