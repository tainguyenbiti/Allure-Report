export interface ICategoriesTrend {
    buildOrder?: number;  // Change the type to number
    reportUrl?: string;
    reportName?: string;
    data?: {
        productDefects?: number;
    }
}
export const categoriesTrend: ICategoriesTrend[] = [
    {
        "buildOrder": 8,
        "reportUrl": "https://allure-framework.github.io/allure-demo/8/",
        "reportName": "Allure Report with history",
        "data": {}
    },
    {
        "buildOrder": 7,
        "reportUrl": "https://allure-framework.github.io/allure-demo/7/",
        "reportName": "Allure Report with history",
        "data": {}
    },
    {
        "buildOrder": 5,
        "reportUrl": "https://allure-framework.github.io/allure-demo/5/",
        "reportName": "Allure Report with history",
        "data": {
            "productDefects": 2
        }
    },
    {
        "buildOrder": 4,
        "reportUrl": "https://allure-framework.github.io/allure-demo/4/",
        "reportName": "Allure Report with history",
        "data": {
            "productDefects": 2
        }
    },
    {
        "buildOrder": 3,
        "reportUrl": "https://allure-framework.github.io/allure-demo/3/",
        "reportName": "Allure Report with history",
        "data": {
            "productDefects": 1
        }
    },
    {
        "buildOrder": 2,
        "reportUrl": "https://allure-framework.github.io/allure-demo/2/",
        "reportName": "Allure Report with history",
        "data": {}
    },
    {
        "data": {}
    }
]