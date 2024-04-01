# Readme

## Proyecto template para servicio con calendarización

### Componentes
- .Net Framework 4.7.2
- Microsoft.Extension.Hosting
- Quartz
- Quartz.Extensions.DependencyInjection
- Quartz.Extensions.Hosting
- System.Configuration

### Contenido de Raíz
| Nombre           | Descripción                      |
|------            |-----                             |
| App.config       | Archivo de configuración que contiene configuraciones de la aplicación |
| appsettings.json | Archivo de configuración para el modelo Hosting de Microsoft |
| Program.cs       | Archivo de punto de partida de aplicación |
| ProjectInstaller.cs | Archivo de configuración de instalación por InstallUtil |
| Service1.cs      | Archivo de servicio de windows |

### Contenido de Jobs
| Nombre           | Descripción                      |
|------            |-----                             |
| BuscadorArchivosJob.cs | Job de ejemplo para busqueda de archivos |

## Descripción de código

### App.Config
~~~xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
  <startup> 
    <supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.7.2" />
  </startup>
  <appSettings>
    <add key="cron" value="0 * * ? * *" />
    <add key="folder" value="C:\git-bpd"/>
    <add key="extension" value="*.txt"/>
  </appSettings>
</configuration>
~~~

En la sección ```<appSettings>``` se puede encontrar la llave ```<add key="cron"...``` y esta contiene el valor de la configuración de [CRON](https://www.quartz-scheduler.net/documentation/quartz-3.x/tutorial/crontriggers.html#building-crontriggers) este valor se usa para configurar el intervalo de ejecución del Job.

### appsettings.json
~~~json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    },
    "EventLog": {
      "LogLevel": {
        "Default": "Warning",
        "WindowsService1.Jobs.BuscadorArchivosJob": "Information"
      }
    }
  }
}
~~~
Aquí se configurará el nivel de registro (LogLevel) de los diferentes loggers, para el servicio de windows es necesario usar **EventLog**, este logger por defecto tiene establecido un ```LogLevel = Warning```.

Si se requiere modificar el LogLevel para el Job es necesario agregar el FullNameSpace y definir el nivel deseado, dentro del logger deseado.

El FullNameSpace se compone del namespace y la clase, ejemplo:

~~~cs
namespace WindowsService1.Jobs
{
  public class BuscadorArchivosJob : IJob
  {
    ...
~~~

|||
|----|----|
|**namespace**| WindowsService1.Jobs|
|**classname**| BuscadorArchivosJob|
|**fullnamespace**| WindowsService1.Jobs.BuscadorArchivosJob|


Los ```LogLevel``` hacen referencia al nivel de severidad del mensaje que se está registrando, estos niveles van desde ```Trace``` hasta ```None```, para mas información sobre [LogLevel](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.loglevel?view=dotnet-plat-ext-8.0).

### Service1.cs
~~~cs
public partial class Service1 : ServiceBase
{
  CancellationTokenSource cts;
  Task t;
~~~
El ```CancellationTokenSource``` nos permitirá cancelar todo el arbol de ejecución del servicio, ya que al estar sobre Microsoft Hosting este se ejecutará de manera asíncrona y de no ser cerrado de manera correcta podría dejar un proceso huerfano generando información inconsistente.

~~~cs
protected override void OnStart(string[] args)
{
  cts = new CancellationTokenSource();
  var token = cts.Token;

  t = Task.Factory.StartNew(async () =>
  {
    ...
  }, token);
~~~
Al crear una instancia de ```CancellationTokenSource``` se genera un token de cancelación el cual se enviará al resto de los procesos.

Al iniciar una nueva ```Task``` se le envía el token de cancelación para que mas adelante cuando se quiera cancelar la tarea sea por medio del token de cancelación.

~~~cs
protected override void OnStop()
{
  cts.Cancel();
  t.Wait(cts.Token);
}
~~~
Cuando se ejecuta el metodo ```Cancel()``` del ```CancellationTokenSource``` se envía una señal de cancelación al token de cancelación el cual hace que todos los subprocesos asíncronos cancelen sus actividades y detengan su ejecución.

Una vez que se inicio la cancelación hay que esperar a que finalice, para esto se le dice a la tarea que espere a la señal del token de cancelación usando el método ```Wait``` y enviando el token de cancelación como parámetro.

