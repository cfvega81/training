using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services_interface;

namespace Aire_acondicionado.Implement
{
    internal class CompressorPanasonic: ICompressor
    {
        private bool isOn = false;

        public CompressorPanasonic(IAffectationTemperature affectationTemperatureService)
        {
            this.affectationTemperatureService = affectationTemperatureService;
        }

        public IAffectationTemperature affectationTemperatureService { get; set; }

        public void TurnOn()
        {
            if (!isOn)
            {
                isOn = true;
                affectationTemperatureService.AffectTemperature(1);
                Console.WriteLine("Compressor ON");
            }

        }
        public void TurnOff()
        {
            if (isOn)
            {
                isOn = false;
                affectationTemperatureService.AffectTemperature(0);
                Console.WriteLine("Compressor OFF");
            }
        }
    }
}
