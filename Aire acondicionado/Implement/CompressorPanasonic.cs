using System.Reactive.Subjects;
using Aire_acondicionado.Implement;
using Aire_acondicionado.Interface;
using Aire_acondicionado.Services_interface;

internal class CompressorPanasonic : ICompressor
{
    private bool isOn = false;

    public CompressorPanasonic(IAffectationTemperature affectationTemperatureService)
    {
        this.affectationTemperatureService = affectationTemperatureService;

        Console.WriteLine("Compressor Panasonic initialized");
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
