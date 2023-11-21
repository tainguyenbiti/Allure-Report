import { ITime } from "./time";

export interface IDuration {
    name: string;
    severity: string;
    status: string;
    time: ITime;
    uid: string;
}