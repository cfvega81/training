using MigracionUsuariosAD_CM.Entities;

namespace MigracionUsuariosAD_CM.Contracts
{
    public interface IUsuariosRepositorio
    {
        bool Save(Usuario[] users);
    }
}
