
enum Architecture {
    INTEL = 'intel',
    AMD = 'amd'
}

enum Latency {
    LOW = 'low',
    HIGH = 'high'
}

abstract class Motherboard { 
    architecture: Architecture;
    latency: Latency;

    toString(): string {
        return `Motherboard ${this.constructor.name}: ${this.architecture} - ${this.latency}`;
    }
}

class AsusMotherboard implements Motherboard { 
    architecture: Architecture = Architecture.INTEL;
    latency: Latency = Latency.LOW;
}

class MSIMotherboard implements Motherboard { 
    architecture: Architecture = Architecture.AMD;
    latency: Latency = Latency.LOW;
}

class GigabyteMotherboard implements Motherboard {
    architecture: Architecture = Architecture.INTEL;
    latency: Latency = Latency.HIGH;
}

interface CPU { architecture: Architecture; }

class IntelCPU implements CPU {
    architecture: Architecture = Architecture.INTEL;
}

class AMDCPU implements CPU { 
    architecture: Architecture = Architecture.AMD;
}

interface RAM { latency: Latency; }

class KingstonRAM implements RAM { 
    latency: Latency = Latency.LOW;
 }
 
class CorsairRAM implements RAM {
    latency: Latency = Latency.HIGH;
 }


abstract class ComputerFactory {
    abstract createMotherboard(): Motherboard;
    abstract createCPU(): CPU;
    abstract createRAM(): RAM;
}

class AsusComputerFactory extends ComputerFactory {
    createMotherboard(): Motherboard {
        return new AsusMotherboard();
    }
    createCPU(): CPU {
        return new IntelCPU();
    }
    createRAM(): RAM {
        return new KingstonRAM();
    }
}

class MSIComputerFactory extends ComputerFactory {
    createMotherboard(): Motherboard {
        return new MSIMotherboard();
    }
    createCPU(): CPU {
        return new AMDCPU();
    }
    createRAM(): RAM {
        return new KingstonRAM();
    }
}

class GigabyteComputerFactory extends ComputerFactory {
    createMotherboard(): Motherboard {
        return new GigabyteMotherboard();
    }
    createCPU(): CPU {
        return new IntelCPU();
    }
    createRAM(): RAM {
        return new CorsairRAM();
    }
}

class SalesMan {
    public createComputer(computerFactory: ComputerFactory) {
        const motherboard = computerFactory.createMotherboard();
        const cpu = computerFactory.createCPU();
        const ram = computerFactory.createRAM();
        console.log(motherboard, cpu, ram);
    }
}

const asusSalesman = new SalesMan();
asusSalesman.createComputer(new AsusComputerFactory());
const msiSalesman = new SalesMan();
msiSalesman.createComputer(new MSIComputerFactory());
const gigabyteSalesman = new SalesMan();
gigabyteSalesman.createComputer(new GigabyteComputerFactory());

const salesman = new SalesMan();
salesman.createComputer(new AsusComputerFactory());
salesman.createComputer(new MSIComputerFactory());
salesman.createComputer(new GigabyteComputerFactory());

