﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Subjects;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Services_interface;

namespace Aire_acondicionado.Implement
{
    public class AffectationTemperature : IAffectationTemperature
    {
        public BehaviorSubject<int> AffectationTemperatureSubject { get; private set; }

        public AffectationTemperature()
        {
            AffectationTemperatureSubject = new BehaviorSubject<int>(0);
        }

        public void AffectTemperature(int temperature)
        {
        }
    }
}
