//package com.example.testng.TestListener;
//
//
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.testng.Assert;
//import org.testng.ITestResult;
//import org.testng.annotations.AfterClass;
//import org.testng.annotations.BeforeClass;
//import org.testng.annotations.Test;
//import org.testng.annotations.Listeners;
//import org.testng.SkipException;
//
//@Listeners(TestListener.class)
//public class ListenerTC {
//
//    WebDriver driver;
//
//    @BeforeClass
//    public void setupDriver() {
//        driver = new BaseSetup().setDriver("chrome", "https://anhtester.com");
//    }
//
//    @Test(priority = 1) //Success Test
//    public void gotoPage() {
//
//    }
//
//    @Test(priority = 2) //Failed Test
//    public void checkTitle() {
//        String expectedTitle = "Anh Tester";
//        String originalTitle = driver.getTitle();
//        Assert.assertEquals(originalTitle, expectedTitle, "Title of the website do not match");
//
//    }
//
//    @Test(priority = 3)  //Skip Test
//    public void skipTest() {
//        throw new SkipException("Skipping The Test Method ");
//    }
//
//    @AfterClass
//    public void closeDriver() {
//        driver.quit();
//    }
//}
