﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aire_acondicionado.Interface
{
    public interface IControlPanel : ITurnInterface, IAlterTemperatureInterface
    {
        ICpu Cpu { get; set; }

        void ToggleBlades();
    }
}