using MigracionUsuariosAD_CM.Entities;
using MigracionUsuariosAD_CM.Models;

namespace MigracionUsuariosAD_CM.Mappers
{
    public static class UsuarioMapper
    {
        public static Usuario Map(this UsuarioADModel @this)
        {
            return new Usuario();
        }


    }
}
