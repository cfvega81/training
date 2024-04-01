// Ejemplo Escolar

// interface Turn {
//   on(): void;
//   off(): void;
// }

// interface Change {
//   canChange(): boolean;
//   up(): void;
//   down(): void;
// }

// interface Device extends Turn, Change {
// }

// class AirAconditioner implements Device {
//   constructor(public type: string) { }
//   temp: number = 20;
//   on() {
//     console.log(`${this.type} is on`);
//   }
//   off() {
//     console.log(`${this.type} is off`);
//   }
//   up() {
//     if(this.temp < 30) {
//       this.temp++;
//       console.log(`${this.type} is up to ${this.temp}`);
//     }
//   }
//   down() {
//     if(this.temp > 16) {
//       this.temp--;
//       console.log(`${this.type} is down to ${this.temp}`);
//     }
//   }
//   canChange(): boolean {
//     return this.temp > 16 && this.temp < 30;
//   }
// }

// class Television implements Device {
//   constructor(public type: string) { }
//   volume: number = 50;
//   set(value: number): void {
//     console.log(`${this.type} is set to ${value}`);
//   }  
//   on() {
//     console.log(`${this.type} is on`);
//   }
//   off() {
//     console.log(`${this.type} is off`);
//   }
//   up() {
//     if (this.volume < 100) {
//       this.volume++;
//       console.log(`${this.type} is up to ${this.volume}`);
//     }
//   }
//   down() {
//     if (this.volume > 0) {
//       this.volume--;
//       console.log(`${this.type} is down to ${this.volume}`);
//     }
//   }
//   canChange(): boolean {
//     return this.volume > 0 && this.volume < 100;
//   }
// }

// class RemoteControl {
//   constructor(protected device: Device) { }
//   on() {
//     this.device.on();
//   }
//   off() {
//     this.device.off();
//   }
//   up() {
//     this.device.up();
//   }
//   down() {
//     this.device.down();
//   }
// }

// class AdvancedRemoteControl extends RemoteControl {
//   mute() {
//     while(this.device.canChange()) {
//       this.device.down();
//     }
//   }
// }

// class UniversalRemoteControl extends RemoteControl {
//   scan() {
//     console.log('Scanning...');
//     do {
//       this.device.up();
//     } while(this.device.canChange())
//   }
// }

// const airAconditioner = new AirAconditioner('AirAconditioner');
// const television = new Television('Television');
// let remoteControl = new RemoteControl(airAconditioner);
// remoteControl.on();
// remoteControl.up();
// remoteControl.down();
// remoteControl.off();
// remoteControl = new RemoteControl(television);
// remoteControl.on();
// remoteControl.up();
// remoteControl.down();
// remoteControl.off();

// let advancedRemoteControl = new AdvancedRemoteControl(airAconditioner);
// advancedRemoteControl.on();
// advancedRemoteControl.up();
// advancedRemoteControl.down();
// advancedRemoteControl.mute();
// advancedRemoteControl.off();

// advancedRemoteControl = new AdvancedRemoteControl(television);
// advancedRemoteControl.on();
// advancedRemoteControl.up();
// advancedRemoteControl.down();
// advancedRemoteControl.mute();
// advancedRemoteControl.off();

// let universalRemoteControl = new UniversalRemoteControl(television);
// universalRemoteControl.on();
// universalRemoteControl.scan();


// Ejemplo real
// Dado que tenemos 
//   2 tipos de movimientos que son transferencias y pagos, 
// y 2 tipos de bancos que son HSBC y BBVA, 
// y 2 tipos de cuentas que son ahorro y corriente, 
// y 2 tipos de monedas que son dolares y soles, 
// y 2 tipos de clientes que son personas y empresas
{
  abstract class MovimientosBancarios {
    constructor(protected banco: Banco, protected cuenta: Cuenta) { }
    abstract ejecutar(): void;
  }

  interface Cuenta {
    obtenerReferencia(): string;
  }

  class CuentaBancaria implements Cuenta {
    obtenerReferencia(): string {
      return 'CLABE';
    }
  }

  class TarjetaBancaria implements Cuenta {
    obtenerReferencia(): string {
      return 'Numero de tarjeta';
    }
  }

  class Servicio implements Cuenta {
    obtenerReferencia(): string {
      return 'Referencia de servicio';
    }
  }

  class Transferencia extends MovimientosBancarios {
    ejecutar() {
      let info = this.banco.obtenerInformacion();
      let cuenta = this.cuenta.obtenerReferencia();
      console.log(`Transferencia a ${info} a la cuenta ${cuenta}`);
    }
  }

  class Pago extends MovimientosBancarios {
    ejecutar() {
      let info = this.banco.obtenerInformacion();
      let cuenta = this.cuenta.obtenerReferencia();
      console.log(`Pago a ${info} a la cuenta ${cuenta}`);
    }
  }

  class CargoDomiciliado extends MovimientosBancarios {
    ejecutar() {
      let info = this.banco.obtenerInformacion();
      let cuenta = this.cuenta.obtenerReferencia();
      console.log(`Cargo domiciliado a ${info} a la cuenta ${cuenta}`);
    }
  }

  interface Banco {
    obtenerInformacion(): string;
  }

  class HSBC implements Banco {
    nombre: string = "HSBC";
    obtenerInformacion(): string {
      return `Banco ${this.nombre}`;
    }
  }

  class BBVA implements Banco {
    obtenerInformacion(): string {
      return 'Banco BBVA';
    }
  }

  class Santader implements Banco {
    obtenerInformacion(): string {
      return 'Banco Santander';
    }
  }

  class MegaCable implements Banco {
    obtenerInformacion(): string {
      return 'MegaCable por concepto de Telecomunicaciones';
    }
  } 

  //Uso operacional - casos de pruebas
  let cuentaB = new CuentaBancaria();
  let cuentaT = new TarjetaBancaria();
  let cuentaS = new Servicio();

  let movimientos: MovimientosBancarios = new Transferencia(new HSBC(), cuentaB);
  movimientos.ejecutar();
  movimientos = new Pago(new BBVA(), cuentaT);
  movimientos.ejecutar();
  movimientos = new Transferencia(new BBVA(), cuentaB);
  movimientos.ejecutar();
  movimientos = new Pago(new HSBC(), cuentaB);
  movimientos.ejecutar();
  // Evita la creacion de las clases TransferenciaHSBC, PagosHSBC, TransferenciaBBVA, PagosBBVA

  movimientos = new CargoDomiciliado(new HSBC(), cuentaS);
  movimientos.ejecutar();
  movimientos = new CargoDomiciliado(new BBVA(), cuentaS);
  movimientos.ejecutar();
  // Evita la creacion de las clases CargoDomiciliadoHSBC, CargoDomiciliadoBBVA

  movimientos = new CargoDomiciliado(new MegaCable(), cuentaS);
  movimientos.ejecutar();
  // Evita la creacion de las clases CargoDomiciliadoMegaCable

  movimientos = new CargoDomiciliado(new Santader(), cuentaB);
  movimientos.ejecutar();

}

