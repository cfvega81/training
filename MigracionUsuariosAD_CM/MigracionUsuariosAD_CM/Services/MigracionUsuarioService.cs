using Microsoft.Extensions.Logging;
using MigracionUsuariosAD_CM.Contracts;
using MigracionUsuariosAD_CM.Models;
using MigracionUsuariosAD_CM.Mappers;
using System.Linq;

namespace MigracionUsuariosAD_CM.Repositories
{
    public class MigracionUsuarioService : IMigracionUsuarioService
    {
        private readonly ILogger<MigracionUsuarioService> logger;
        private readonly ActiveDirectoryModel activeDirectory;
        private readonly IUsuariosActiveDirectory usuariosAD;
        private readonly IUsuariosRepositorio usuariosRepo;

        public MigracionUsuarioService(
            ILogger<MigracionUsuarioService> logger,
            ActiveDirectoryModel activeDirectory,
            IUsuariosActiveDirectory usuariosAD,
            IUsuariosRepositorio usuariosRepo
            )
        {
            this.logger = logger;
            this.activeDirectory = activeDirectory;
            this.usuariosRepo = usuariosRepo;
            this.usuariosAD = usuariosAD;
        }

        public void Execute()
        {
            logger.LogInformation("Start migration process");
            foreach (var directorio in activeDirectory.Directories)
            {
                var usersAD = usuariosAD.GetUsers(directorio);
                var users = usersAD.Select(userAD => userAD.Map()).ToArray();
                if (usuariosRepo.Save(users))
                {
                    logger.LogInformation($"Los usuarios del directorio {directorio.Name} fueron importados");
                }
                else
                {
                    logger.LogWarning($"Ocurrio un error al guardar los usuarios del directorio {directorio.Name}");
                }
            }
        }
    }
}
