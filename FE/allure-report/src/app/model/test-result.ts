export interface TestResult {
    uid: string;
    name: string;
    children?: TestResult[];
    time?: {
        start: number;
        stop: number;
        duration: number;
    };
    status: string;
}
