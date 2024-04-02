using System.Text.Json.Serialization;

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
