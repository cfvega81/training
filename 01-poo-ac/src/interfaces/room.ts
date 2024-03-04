import { Subscription } from "rxjs";

export interface Room {
    temperatureMax: number;
    temperature: number;
    roomCreatedSubscription: Subscription;
}