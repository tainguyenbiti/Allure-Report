export interface IDurationTrend {
    buildOrder: number;  // Change the type to number
    reportUrl: string;
    reportName: string;
    data: {
        duration: number;
    }
}

export const durationTrend: IDurationTrend[] = [
    {
        "buildOrder": 8,
        "reportUrl": "https://allure-framework.github.io/allure-demo/8/",
        "reportName": "Allure Report with history",
        "data": {
            "duration": 6356
        }
    },
    {
        "buildOrder": 7,
        "reportUrl": "https://allure-framework.github.io/allure-demo/7/",
        "reportName": "Allure Report with history",
        "data": {
            "duration": 6379
        }
    },
    {
        "buildOrder": 5,
        "reportUrl": "https://allure-framework.github.io/allure-demo/5/",
        "reportName": "Allure Report with history",
        "data": {
            "duration": 6399
        }
    },
    {
        "buildOrder": 4,
        "reportUrl": "https://allure-framework.github.io/allure-demo/4/",
        "reportName": "Allure Report with history",
        "data": {
            "duration": 6476
        }
    },
    {
        "buildOrder": 3,
        "reportUrl": "https://allure-framework.github.io/allure-demo/3/",
        "reportName": "Allure Report with history",
        "data": {
            "duration": 5372
        }
    },
    {
        "buildOrder": 2,
        "reportUrl": "https://allure-framework.github.io/allure-demo/2/",
        "reportName": "Allure Report with history",
        "data": {
            "duration": 6529
        }
    },
    {
        "buildOrder": 0,
        "reportUrl": "",
        "reportName": "",
        "data": {
            "duration": 0
        }
    }

]