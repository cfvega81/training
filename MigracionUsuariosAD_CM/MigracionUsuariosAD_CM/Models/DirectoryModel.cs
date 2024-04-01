using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MigracionUsuariosAD_CM.Models
{
    public class DirectoryModel
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("server")]
        public string Server { get; set; }
        [JsonPropertyName("container")]
        public string Container { get; set; }
    }
}
