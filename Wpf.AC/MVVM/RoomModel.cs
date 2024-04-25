using System;
using System.Timers; // Asegúrate de tener esta directiva

namespace Wpf.AC.MVVM
{
    // Clase de Modelo de Habitación
    public class RoomModel
    {
        private double temperature;
        private double temperatureMax = 40;
        private double temperatureAffectedOn = 0;
        private System.Timers.Timer timer;

        public double Temperature
        {
            get { return temperature; }
            set
            {
                if (value != temperature)
                {
                    temperature = value;
                    // Aquí puedes agregar la lógica para notificar a la vista sobre cambios en la temperatura
                }
            }
        }

        public RoomModel()
        {
            // Inicializa la lógica de la habitación
            Initialize();
        }

        private void Initialize()
        {
            // Configura el temporizador para subir la temperatura cada segundo
            timer = new System.Timers.Timer();
            timer.Interval = 1000; // 1000 milisegundos = 1 segundo
            timer.AutoReset = true; // Para que el temporizador se reinicie automáticamente después de cada intervalo
            timer.Elapsed += Timer_Elapsed;
            timer.Start();
        }

        private void Timer_Elapsed(object sender, ElapsedEventArgs e)
        {
            IncrementTemperature();
        }

        public void IncrementTemperature()
        {
            if (Temperature < temperatureMax)
            {
                Temperature += (0.5 - temperatureAffectedOn);
                
            }
            else
            {
                
                timer.Stop();
            }
        }
    }
}
