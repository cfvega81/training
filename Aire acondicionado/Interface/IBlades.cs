﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Constant;

namespace Aire_acondicionado.Interface
{
    public interface IBlades
    {
        BladeStatus Mode { get; set; }
    }
}
