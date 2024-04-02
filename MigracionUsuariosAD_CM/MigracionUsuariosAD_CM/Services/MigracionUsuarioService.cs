using Microsoft.Extensions.Logging;
using MigracionUsuariosAD_CM.Contracts;
using MigracionUsuariosAD_CM.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace MigracionUsuariosAD_CM.Services
{
    public class MigracionUsuarioService : IMigracionUsuarioService
    {
        private readonly ILogger<MigracionUsuarioService> logger;
        private readonly ActiveDirectoryModel activeDirectory;

        public MigracionUsuarioService(ILogger<MigracionUsuarioService> logger, ActiveDirectoryModel activeDirectory)
        {
            this.logger = logger;
            this.activeDirectory = activeDirectory;
        }

        public void Execute()
        {
            logger.LogInformation("Start migration process");
            foreach (var dir in activeDirectory.Directories)
            {
                public class UsuariosActiveDirectory : IUsuariosActiveDirectory { }
                public class UsuariosRepositorio : IUsuariosRepositorio { }
        //Consumir IUsuariosActiveDirectory.GetUsers(DirectoryModel) : Users[]
        //Consumir  .SaveUsers(users: Users[])

           }
        }
    }
}
