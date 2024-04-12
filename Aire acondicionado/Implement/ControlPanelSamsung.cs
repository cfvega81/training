using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Interface;

namespace Aire_acondicionado.Implement
{
    internal class ControlPanelSamsung : IControlPanel, IFan
    {
        private readonly ICpu cpu;

        public ICpu Cpu { get; set; }

        public ControlPanelSamsung(ICpu cpu)
        {
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