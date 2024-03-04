import { CPU_SERVICE, SEND_MESSAGE_SERVICE } from "data";
import { ControlPanel } from "interfaces/control-panel";
import { Cpu } from "interfaces/cpu";
import { SendMessage } from "services-interface/send-message";
import { Subscription } from "rxjs";
import { Inject, Service } from "typedi";
import { DestinyMessage } from "destiny-message";

@Service()
export class ControlPanelSamsung implements ControlPanel {
    cpu: Cpu;
    sendedMessageSubscription: Subscription;
    
    constructor(
        @Inject(CPU_SERVICE) cpu: Cpu,
        @Inject(SEND_MESSAGE_SERVICE) private sendMessageService: SendMessage
    ) {
        this.cpu = cpu;
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Control Panel Samsung initialized' });
    }   

    turnOn(): void {
        this.cpu.turnOn();
    }
    turnOff(): void {
        this.cpu.turnOff();
    }
    incrementTemperature(): void {
        this.cpu.incrementTemperature();
    }
    decrementTemperature(): void {
        this.cpu.decrementTemperature();
    }
    toggleBlades(): void {
        this.cpu.toggleBlades();
    }
}