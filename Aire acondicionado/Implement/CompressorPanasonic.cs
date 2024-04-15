using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services;
using Aire_acondicionado.Services_Contratc;

namespace Aire_acondicionado.Implement
{   
    // Hereda de la interfas Comprresor
    internal class CompressorPanasonic : ICompressor

    {   
        //Inicio de valores
        private bool isOn = false;
        //Implementación de Timer
        private readonly System.Timers.Timer timer;
        int variation = -1;
        //Almacena  los datos de la interface IAffectationTemperatureService en el campo affectationService
        private readonly IAffectationTemperatureService affectationService;

        //Inyecta la interface IAffectationTemperatureService al constructor CompressorPanasonic
        public CompressorPanasonic(IAffectationTemperatureService affectationService)
        {
            //Hace que el campo affectationService pueda llamar a los métodos de IAffectationTemperatureService
            this.affectationService = affectationService;
            //Crea un timer
            timer = new System.Timers.Timer();
            //Da un intervalo de 1 segundo
            timer.Interval = 1000;
            //Suscribe a timer al evento Elapsed, osea que cada vez que se cumple el intervalo, 
            //se ejecuta el contenido del método Timer_Elapsed
            timer.Elapsed += Timer_Elapsed;
        }

        //Método encendido
        public void TurnOn()
        {
            isOn = true;
            Console.WriteLine("Compressor ON");
            //Inicio el timer
            timer.Start();


        }

        //Metodo apagado
        public void TurnOff()
        {
            if (isOn)
            {
                isOn = false;
                //Le da el valor de 0 al método AffectationTemperature que esta en IAffectationTemperatureService y
                //se puede llamar por el campo affectationService
                affectationService.AffectationTemperature(0);
                Console.WriteLine("Compressor OFF");
                //Para el timer
                timer.Stop();
            }
        }

        //Método Timer_Elapsed
        private void Timer_Elapsed(object? sender, System.Timers.ElapsedEventArgs e)
        {
            //Le manda el valor de variation a AffectationTemperature de la interface
            //IAffectationTemperatureService
            affectationService.AffectationTemperature(variation);
        }

    }
}