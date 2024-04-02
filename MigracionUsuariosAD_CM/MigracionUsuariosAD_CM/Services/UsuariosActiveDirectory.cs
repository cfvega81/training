using MigracionUsuariosAD_CM.Contracts;
using MigracionUsuariosAD_CM.Models;

namespace MigracionUsuariosAD_CM.Repositories
{
    public class UsuariosActiveDirectory : IUsuariosActiveDirectory
    {
        public UsuarioADModel[] GetUsers(DirectoryModel directory)
        {
            throw new System.NotImplementedException();
        }
    }
}
