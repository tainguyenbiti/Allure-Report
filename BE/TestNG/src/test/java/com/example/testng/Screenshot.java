//package com.example.testng;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.OutputType;
//import org.openqa.selenium.TakesScreenshot;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.io.FileHandler;
//import org.testng.Assert;
//import org.testng.ITestContext;
//import org.testng.ITestResult;
//import org.testng.Reporter;
//import org.testng.annotations.*;
//
//import java.io.File;
//
//public class Screenshot {
//    public WebDriver driver ;
//    @BeforeTest
//    public void beforeTest() throws Exception {
//        System.setProperty("webdriver.chrome.driver", "D:\\Biti_hightech\\SeleniumTesting\\Selenium\\chromedriver-win32\\chromedriver.exe");
//        driver = new ChromeDriver();
//        driver.get("https://anhtester.com");
//    }
//    @Test(priority = 1)
//    public void homePage() throws Exception {
//        Assert.assertEquals(driver.getTitle(), "Anh Tester - Automation Testing");
//    }
//    @Test(priority = 2)
//    public void login() throws Exception {
//        driver.findElement(By.cssSelector("#btn-login")).click();
//        driver.findElement(By.name("username")).sendKeys("EMAIL");
//        driver.findElement(By.name("password")).sendKeys("PASSWORD");
//        driver.findElement(By.id("login")).click();
//    }
//
//    @AfterMethod
//    public void afterMethod(ITestResult result) throws Exception{
//        if (ITestResult.SUCCESS != result.getStatus()) {
//            try {
//                System.out.println("method name:" + result.getMethod().getMethodName());
//                TakesScreenshot ts = (TakesScreenshot) driver;
//                File source = ts.getScreenshotAs(OutputType.FILE);
//                File theDir = new File("./ExportData/Screenshots/");
//                if (!theDir.exists()) {
//                    theDir.mkdirs();
//                }
//                FileHandler.copy(source, new File("./ExportData/Screenshots/" + result.getName() + ".png"));
//                System.out.println("Đã chụp màn hình: " + result.getName());
//            }
//            catch (Exception e){
//                System.out.println("Exception: " + e.getMessage());
//            }
//        }
//    }
//}
