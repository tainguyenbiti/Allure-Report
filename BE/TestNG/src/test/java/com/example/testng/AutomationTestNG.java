//package com.example.testng;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.testng.Assert;
//import org.testng.annotations.*;
//
//public class AutomationTestNG {
//
//    public String baseUrl = "https://biti.vn";
//    public WebDriver driver ;
//
//    @Test
//    public void verifyHomepageTitle() throws InterruptedException {
//
//        driver = new ChromeDriver();
//        driver.manage().window().maximize();
//        driver.navigate().to(baseUrl);
//        Thread.sleep(2000);
//        String expectedTitle = "Homepage - Biti Hightech";
//        String actualTitle = driver.getTitle();
//        Assert.assertEquals(actualTitle, expectedTitle);
//
//
//    }
//    @BeforeTest
//    public void beforeTest(){
//        String driverPath = "chromedriver-win64/chromedriver-win64/chromedriver.exe";
//        System.setProperty("webdriver.chrome.driver", driverPath);
//    }
//
//    @AfterTest
//    public void aTest() throws InterruptedException {
//
//        Thread.sleep(2000);
//        driver.quit();
//
//    }
//}