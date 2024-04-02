using System.Text.Json.Serialization;

namespace MigracionUsuariosAD_CM.Models
{
    public class ActiveDirectoryModel
    {
        [JsonPropertyName("directories")]
        public DirectoryModel[] Directories { get; set; }
    }
}
