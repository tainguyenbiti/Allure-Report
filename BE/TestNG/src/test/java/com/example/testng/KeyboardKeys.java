//package com.example.testng;
//
//import org.openqa.selenium.Keys;
//import org.testng.annotations.Test;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//public class KeyboardKeys {
//    @Test
//    public void test() throws InterruptedException {
//
//        System.setProperty("webdriver.chrome.driver", "D:\\Biti_hightech\\SeleniumTesting\\Selenium\\chromedriver-win32\\chromedriver.exe");
//
//        // instantiate the driver
//        WebDriver driver = new ChromeDriver();
//
//        // maximise the window
//        driver.manage().window().maximize();
//
//        // specify the URL of the webpage
//        driver.get("https://www.google.com/");
//
//        // specify the locator of the search box
//        WebElement element = driver.findElement(
//                By.xpath("//*[@id=\"APjFqb\"]"));
//
//        // create an object for the Actions class and pass the driver argument
//        Actions action = new Actions(driver);
//
//        // pass the product name that has to be searched in the website
//        action.sendKeys(element, "Biti").build().perform();
//        action.sendKeys(Keys.ENTER).build().perform();
//
//        WebElement elementTitlePage = driver
//                .findElement(By.cssSelector("a[href*='https://biti.vn']"));
//
//        String url = elementTitlePage.getAttribute("href");
//        System.out.println("Url: "+url);
////        action.click(elementTitlePage).build().perform();
//        driver.get(url);
//        System.out.println("Title: " + driver.getTitle());
//
////        WebElement elementTitlePage = driver
////                .findElement(By.xpath("//*[@id=\"rso\"]/div[7]/div/div/div[1]/div/div/a/div/div/span"));
//
//        // perform a mouse click on the search button
//
//
//
//        Thread.sleep(2000);
//        driver.quit();
//    }
//}
