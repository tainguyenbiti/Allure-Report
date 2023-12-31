export interface IRetriesTrend {
    buildOrder: number;
    reportUrl: string;
    reportName: string;
    data: {
        retry: number;
        run: number;
    };
}
export const retriesTrend: IRetriesTrend[] = [
    {
        "buildOrder": 8,
        "reportUrl": "https://allure-framework.github.io/allure-demo/8/",
        "reportName": "Allure Report with history",
        "data": {
            "run": 8,
            "retry": 0
        }
    },
    {
        "buildOrder": 7,
        "reportUrl": "https://allure-framework.github.io/allure-demo/7/",
        "reportName": "Allure Report with history",
        "data": {
            "run": 8,
            "retry": 0
        }
    },
    {
        "buildOrder": 5,
        "reportUrl": "https://allure-framework.github.io/allure-demo/5/",
        "reportName": "Allure Report with history",
        "data": {
            "run": 8,
            "retry": 0
        }
    },
    {
        "buildOrder": 4,
        "reportUrl": "https://allure-framework.github.io/allure-demo/4/",
        "reportName": "Allure Report with history",
        "data": {
            "run": 8,
            "retry": 0
        }
    },
    {
        "buildOrder": 3,
        "reportUrl": "https://allure-framework.github.io/allure-demo/3/",
        "reportName": "Allure Report with history",
        "data": {
            "run": 8,
            "retry": 0
        }
    },
    {
        "buildOrder": 2,
        "reportUrl": "https://allure-framework.github.io/allure-demo/2/",
        "reportName": "Allure Report with history",
        "data": {
            "run": 8,
            "retry": 0
        }
    },
    {
        "buildOrder": 0,
        "reportUrl": "",
        "reportName": "",
        "data": {
            "run": 0,
            "retry": 0
        }
    }
]