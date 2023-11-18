//package com.example.testng;
//
//import java.util.concurrent.TimeUnit;
//
//import com.example.testng.TestListener.RecordVideo;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.testng.annotations.AfterClass;
//import org.testng.annotations.AfterTest;
//import org.testng.annotations.BeforeClass;
//import org.testng.annotations.Test;
//
//
//public class RecordVideoCallFunction {
//
//    private WebDriver driver;
//
//    @BeforeClass
//    public void setupClass() throws Exception {
//        System.setProperty("webdriver.chrome.driver", "D:\\Biti_hightech\\SeleniumTesting\\Selenium\\chromedriver-win32\\chromedriver.exe");
//        driver = new ChromeDriver();
//        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
//        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//        driver.manage().window().maximize();
//
//        // Gọi lại hàm startRecord
//        RecordVideo.startRecord("ManageDocument");
//    }
//
//    @Test
//    public void homePage() throws Exception {
//        driver.get("https://anhtester.com");
//        Thread.sleep(2000);
//        driver.findElement(By.id("btn-login")).click();
//    }
//
//    @AfterTest
//    public void tearDownTestCase() throws Exception {
//        Thread.sleep(2000);
//        driver.quit();
//    }
//
//    @AfterClass
//    public void tearDownClass() throws Exception {
//        // Gọi lại hàm startRecord
//        RecordVideo.stopRecord();
//    }
//}
