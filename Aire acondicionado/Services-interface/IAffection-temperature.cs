﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Subjects;
using System.Text;
using System.Threading.Tasks;

namespace Aire_acondicionado.Services_interface
{
    public interface IAffectationTemperature
    {
        BehaviorSubject<int> AffectationTemperatureSubject { get; }
        void AffectTemperature(int temperature);
    }
}