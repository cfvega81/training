using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MigracionUsuariosAD_CM.Models
{
    public class ActiveDirectoryModel
    {
        [JsonPropertyName("directories")]
        public DirectoryModel[] Directories { get; set; }
    }
}
