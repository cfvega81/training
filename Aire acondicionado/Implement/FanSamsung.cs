using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Interface;

namespace Aire_acondicionado.Implement
{
    internal class FanSamsung : IFan
    {
        private bool isOn = false;

        public void TurnOn()
        {
            if (!isOn)
            {
                isOn = true;
                Console.WriteLine("Fan ON");
            }

        }
        public void TurnOff()
        {
            if (isOn)
            {
                isOn = false;
                Console.WriteLine("Fan OFF");
            }
        }
    }
}
