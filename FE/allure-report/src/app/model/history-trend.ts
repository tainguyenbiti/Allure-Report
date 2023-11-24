import { IStatistic } from "./statistic";

export interface IHistoryTrends {
    buildOrder: number;  // Change the type to number
    reportUrl: string;
    reportName: string;
    data: IStatistic;  // Assuming IStatistic is correctly defined in the "statistic" module
}

export const historyTrends: IHistoryTrends[] = [
    {
        buildOrder: 7,
        reportUrl: "https://allure-framework.github.io/allure-demo/7/",
        reportName: "Allure Report with history",
        data: {
            failed: 0,
            broken: 0,
            skipped: 0,
            passed: 8,
            unknown: 0,
            total: 8
        }
    },
    {
        buildOrder: 5,
        reportUrl: "https://allure-framework.github.io/allure-demo/5/",
        reportName: "Allure Report with history",
        data: {
            failed: 2,
            broken: 0,
            skipped: 0,
            passed: 6,
            unknown: 0,
            total: 8
        }
    },
    {
        buildOrder: 4,
        reportUrl: "https://allure-framework.github.io/allure-demo/4/",
        reportName: "Allure Report with history",
        data: {
            failed: 2,
            broken: 0,
            skipped: 0,
            passed: 6,
            unknown: 0,
            total: 8
        }
    },
    {
        buildOrder: 3,
        reportUrl: "https://allure-framework.github.io/allure-demo/3/",
        reportName: "Allure Report with history",
        data: {
            failed: 1,
            broken: 0,
            skipped: 0,
            passed: 7,
            unknown: 0,
            total: 8
        }
    },
    {
        buildOrder: 2,
        reportUrl: "https://allure-framework.github.io/allure-demo/2/",
        reportName: "Allure Report with history",
        data: {
            failed: 0,
            broken: 0,
            skipped: 0,
            passed: 8,
            unknown: 0,
            total: 8
        }
    },
    {
        buildOrder: 0,  // Provide a default value for buildOrder
        reportUrl: "https://allure-framework.github.io/allure-demo/default/",
        reportName: "Default Report",
        data: {
            failed: 0,
            broken: 0,
            skipped: 0,
            passed: 0,
            unknown: 0,
            total: 0
        }
    }
];
