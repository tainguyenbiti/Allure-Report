package com.example.testng.TestListener;

import com.example.testng.ExcelTest.ExcelTest;
import com.google.common.io.Files;
import io.qameta.allure.Allure;
import io.qameta.allure.Attachment;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

public class TestListener implements ITestListener {


    @Override
    public void onTestFailure(ITestResult result) {
        WebDriver driver = BaseSetup.getDriver();
        Screenshot.captureScreenshot(result.getName(), driver);
        InputStream imageAsInputStream = null;
        try {
            imageAsInputStream = Files.asByteSource(new File(Screenshot.filename)).openStream();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Allure.addAttachment("screenshot", imageAsInputStream);
        Allure.addAttachment("Custom Tab Name", "text/html", "<h1>This is a custom tab content</h1>");
    }

    @Override
    public void onTestSuccess(ITestResult result) {
        System.out.println("success: " + result.getName());
    }
}
