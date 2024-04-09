using Aire_acondicionado.Implement;
using Aire_acondicionado.Interface;
using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();

services.AddTransient<ICpu, CpuDaewoo>();
services.AddTransient<IBlades, BladeSamsung>();





