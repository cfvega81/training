using MigracionUsuariosAD_CM.Models;

namespace MigracionUsuariosAD_CM.Contracts
{
    public interface IUsuariosActiveDirectory
    {
        UsuarioADModel[] GetUsers(DirectoryModel directory);
    }
}
