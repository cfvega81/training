using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Constant;
using Aire_acondicionado.Interface;

namespace Aire_acondicionado.Implement
{
    internal class BladeSamsung : IBlades
    {
        public BladeStatus Mode { get; set; }

    }
}
