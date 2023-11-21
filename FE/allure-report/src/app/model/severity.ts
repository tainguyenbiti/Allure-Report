import { ITime } from "./time";

export interface ISeverity {
    name: string;
    severity: string;
    status: string;
    time: ITime;
    uid: string;
}