// Problematica: Crear una copia de un objeto con propiedades anidadas
interface Cloning<T> {
    clone(): T;
}

class Bateria {
    capacidad: number;
}

class Robot implements IRobot {
    clone(): IRobot {
        let newRobot: Robot = { ...this };
        newRobot.bateria = { ...this.bateria };
        return newRobot;
    }
    nombre: string;
    material: string;
    bateria: Bateria;
}

class RobotSolar implements IRobot {
    clone(): IRobot {
        //deconstruccion del objeto this y paso de propiedades
        let newRobot: RobotSolar = { ...this }; 
        return newRobot;
    }
    nombre: string;
    material: string;
    celdaSolar: number;
}

interface IRobot extends Cloning<IRobot> {
    nombre: string;
    material: string;
}

function copyRobot(robot: Robot, nombre: string): Robot {
    let newRobot = robot;
    newRobot.nombre = nombre;
    return newRobot;
}

function copyRobotV2(robot: Robot, nombre: string): Robot {
    let newRobot:Robot = { ...robot, clone: robot.clone};
    newRobot.nombre = nombre;
    newRobot.bateria.capacidad = 100;
    return newRobot;
}

function copyRobotV3(robot: Robot, nombre: string): Robot {
    let newRobot:Robot = { ...robot, clone: robot.clone };
    newRobot.nombre = nombre;
    newRobot.bateria = { ...robot.bateria };
    newRobot.bateria.capacidad = 100;
    return newRobot;
}

function copyRobotV4(robot: IRobot, nombre: string): IRobot {
    let newRobot:IRobot = { ...robot };
    newRobot.nombre = nombre;
    return newRobot;
}

let robot1 = new Robot();
robot1.nombre = "Robot 1";
robot1.bateria = { capacidad: 60 };


let robot2 = copyRobotV4(robot1, "Walle") as Robot;
robot2.bateria.capacidad = 200;

console.log("copyRobotV4", robot1, robot2);

// ¿Como se resuelve?

function copyRobotV5(robot: IRobot, nombre: string): IRobot {
    let newRobot:IRobot = robot.clone();
    newRobot.nombre = nombre;
    return newRobot;
}

let robota = new RobotSolar();
robota.nombre = "Robot A";
robota.material = "Metal";
robota.celdaSolar = 80;

//Conversion explicita de tipo
let robot3 = copyRobotV5(robot1, "Robocop") as Robot;
robot3.bateria.capacidad = 100;
console.log("copyRobotV5", robot1, robot3);

let robotb = <RobotSolar>copyRobotV5(robota, "Terminator");
robotb.celdaSolar = 100;
console.log("copyRobotV5", robota, robotb);

// Funcion generica para clonar cualquier objeto que implemente la interfaz IRobot
// Conversion implicita de tipo
function copyRobotV6<T extends IRobot>(robot: T, nombre: string): T {
    let newRobot:IRobot = robot.clone();
    newRobot.nombre = nombre;
    return <T>newRobot;
}

let robot4 = copyRobotV6(robot1, "Robocop");
robot4.bateria.capacidad = 100;
console.log("copyRobotV6", robot1, robot4);

let robotc = copyRobotV6(robota, "Terminator");
robotc.celdaSolar = 100;
console.log("copyRobotV6", robota, robotc);