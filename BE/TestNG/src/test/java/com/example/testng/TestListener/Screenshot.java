package com.example.testng.TestListener;

import io.qameta.allure.Attachment;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Screenshot {

    public static String filename ;

    public static void captureScreenshot(String methodname, WebDriver driver) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH-mm-ss");
        try {
            File theDir = new File("./ExportData/ListenerScreenshots/");
            if (!theDir.exists()) {
                theDir.mkdirs();
            }
            File source = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            filename = "./ExportData/ListenerScreenshots/" + methodname + " " + dateFormat.format(new Date()) + ".png";
            FileHandler.copy(source, new File(filename));
        }catch (Exception e){
            System.out.println("Exception: " + e.getMessage());
        }
    }

}
