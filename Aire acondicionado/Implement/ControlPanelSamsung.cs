using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Interface;

namespace Aire_acondicionado.Implement
{
    //Hereda de la interfce IControlPanel y IFan
    internal class ControlPanelSamsung : IControlPanel, IFan
    {
        //Almacena los datos de la interface ICpu en el campo cpu
        private readonly ICpu cpu;

        public ICpu Cpu { get; set; }

        //Inyecta ICpu en ControlPanelSamsung
        public ControlPanelSamsung(ICpu cpu)
        {
            //Llama los métodos de ICpu desde cpu
            this.cpu = cpu;
        }

        public void TurnOn()
        {
            cpu.TurnOn();
        }

        public void TurnOff()
        {
            cpu.TurnOff();
        }

        public void IncrementTemperature()
        {
            cpu.IncrementTemperature();
        }

        public void DecrementTemperature()
        {
            cpu.DecrementTemperature();
        }

        public void ToggleBlades()
        {
            cpu.ToggleBlades();
        }
    }
}