using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MigracionUsuariosAD_CM.Models;

namespace MigracionUsuariosAD_CM.Contracts
{
    public interface IMigracionUsuarioService
    {
        void Execute();
    }

    public interface IUsuariosActiveDirectory
    {
        Users[] GetUsers(DirectoryModel directory);
    }

    public interface IUsuariosRepositorio
    {

    }
}
