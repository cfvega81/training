import "reflect-metadata";
import Container from "typedi";
import { AFFECTATION_TEMPERATURE_SERVICE, BLADES_SERVICE, CHANGE_TEMPERATURE_SERVICE, COMPRESSOR_SERVICE, CONTROL_PANEL_SERVICE, CPU_SERVICE, FAN_SERVICE, ROOM_SERVICE, SEND_MESSAGE_SERVICE, THERMOSTAT_SERVICE } from "data";
import { ControlPanelSamsung } from "impl/control-panel-samsung";
import { ThermostatSamsung } from "impl/thermostat-samsung";
import { RoomSmall } from "impl/room-small";
import { FanSamsung } from "impl/fan-samsung";
import { BladesSamsung } from "impl/blades-samsung";
import { CompressorPanasonic } from "impl/compressor-panasonic";
import { ChangeTemperatureService } from "services/change-temperature-service";
import { SendMessageService } from "services/send-message-service";
import { CpuSamsung } from "impl/cpu-samsung";
import { AffectationTemperatureService } from "services/affectation-temperature-service";

Container.set({ id: BLADES_SERVICE, type: BladesSamsung });
Container.set({ id: FAN_SERVICE, type: FanSamsung });
Container.set({ id: ROOM_SERVICE, type: RoomSmall });
Container.set({ id: THERMOSTAT_SERVICE, type: ThermostatSamsung });
Container.set({ id: COMPRESSOR_SERVICE, type: CompressorPanasonic });
Container.set({ id: CPU_SERVICE, type: CpuSamsung });
Container.set({ id: CONTROL_PANEL_SERVICE, type: ControlPanelSamsung });
Container.set({ id: CHANGE_TEMPERATURE_SERVICE, type: ChangeTemperatureService });
Container.set({ id: SEND_MESSAGE_SERVICE, type: SendMessageService });
Container.set({ id: AFFECTATION_TEMPERATURE_SERVICE, type: AffectationTemperatureService });    

module.exports = {};