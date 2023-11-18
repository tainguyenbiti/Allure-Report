package com.example.testng.ExcelTest;


import com.example.testng.Entity.TeamMember;
import com.example.testng.TestListener.BaseSetup;
import com.example.testng.TestListener.RecordVideo;
import com.example.testng.TestListener.TestListener;
import io.qameta.allure.Allure;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.ITestContext;
import org.testng.annotations.*;

import java.util.ArrayList;
import java.util.List;

@Listeners(TestListener.class)
public class ExcelTest {
    private final ExcelHelpers excel = new ExcelHelpers();
    private WebDriver driver;
    private final List<TeamMember> teamMemberWeb = new ArrayList<>();


    @BeforeTest
    public void setup() throws Exception {
        driver = new BaseSetup().setDriver("chrome","https://rise.fairsketch.com");
        RecordVideo.startRecord("rise");
    }



    @Test (priority = 1,description = "Login")
    public void login() throws InterruptedException {
        driver.findElement(By.name("email")).sendKeys(Keys.chord(Keys.CONTROL,"a"),"admin@demo.com");
        Thread.sleep(1000);
        driver.findElement(By.name("password")).sendKeys(Keys.chord(Keys.CONTROL,"a"),"riseDemo");
        Thread.sleep(1000);
        driver.findElement(By.cssSelector("button[type='submit']")).click();
        Thread.sleep(3000);
    }

    @Test (priority = 2, description = "Choose team members")
    public void teamMembers() throws Exception {
        driver.findElement(By.xpath("//*[@id=\"sidebar-menu\"]/li[12]")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("//*[@id=\"sidebar-menu\"]/li[12]/ul/li[1]/a")).click();
        Thread.sleep(1000);
    }


    @Test (priority = 3)
    public void getTeamMember() {
        List<WebElement> rowsList = driver.findElements(By.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr"));
        List<WebElement> cellsList = null;
        for (WebElement element : rowsList) {
            cellsList = element.findElements(By.tagName("td"));
            TeamMember teamMember = new TeamMember();
                teamMember.setName(cellsList.get(1).getText());
            teamMember.setJobTitle(cellsList.get(2).getText());
            teamMember.setEmail(cellsList.get(3).getText());
            teamMember.setPhone(cellsList.get(4).getText());
            teamMemberWeb.add(teamMember);
        }
    }

    @Test (priority = 4)
    public void readExcelFromResult() throws Exception {
        excel.setExcelFile("src/test/resources/Book1.xlsx", "Sheet1",0);
        List<TeamMember> teams = new ArrayList<>();
        // Đọc data từ file excel
        for (int i = 2; i < 7; i++) {
            TeamMember team = new TeamMember();
            team.setName(excel.getCellData("Name", i));
            team.setJobTitle(excel.getCellData("Job Title", i));
            team.setEmail(excel.getCellData("Email", i));
            team.setPhone(excel.getCellData("Phone", i));
            teams.add(team);
        }
        //Ghi data vào excel
        int col = 2;
        for (TeamMember teamMembers : teamMemberWeb){
            excel.setCellData(teamMembers.getName(), col, 7);
            excel.setCellData(teamMembers.getJobTitle(), col, 8);
            excel.setCellData(teamMembers.getEmail(), col, 9);
            excel.setCellData(teamMembers.getPhone(), col, 10);
            col ++;
        }

        //so sánh 2 danh sách
        Assert.assertEquals(teams,teamMemberWeb);


        Thread.sleep(2000);
    }

    @Test
    public void yourTest() {
        // Your test logic here
    }

    @AfterTest
    public void tearDown() throws Exception{
        RecordVideo.stopRecord();
        driver.quit();
    }
}
