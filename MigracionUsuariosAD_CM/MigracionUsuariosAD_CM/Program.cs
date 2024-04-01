using System.ServiceProcess;

namespace MigracionUsuariosAD_CM
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var service = new MigracionUsuariosAD_CM_Service();
            ServiceBase.Run(service);
        }
    }
}
