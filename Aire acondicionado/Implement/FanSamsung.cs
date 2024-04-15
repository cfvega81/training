using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Interface;

namespace Aire_acondicionado.Implement
{
    //Hereda de IFan
    internal class FanSamsung : IFan
    {
        private bool isOn = false;

        //Constructor de FanSamsung
        public FanSamsung() 
        { 
            //Al inicial la clase escribe esto, por eso esta en el construtcor
            Console.WriteLine("Fan samsung initalized"); 
        }

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
