package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.MobileCapabilityType;
import java.net.URL;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;

@RunWith(Cucumber.class)
public class stepDefinitions {
	private AndroidDriver<AndroidElement> ad;

	/*
	 * This method is used to initialize the Score App for Android. It sets the
	 * desired capabilities for the Android Emulator and launches the app. The
	 * method also interacts with elements on the app’s user interface by clicking
	 * on buttons with specific IDs. At the end of the method, a message is printed
	 * to indicate that the app was launched successfully
	 */

	@Given("^Initialize the theScoreApp$")
	public void initialize_the_theScoreApp() throws Throwable {
		System.out.println("The Score App for Android intializing");
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
		capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Android Emulator");
		capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UIAutomator2");
		capabilities.setCapability("appPackage", "com.fivemobile.thescore");
		capabilities.setCapability("appActivity", "com.fivemobile.thescore.ui.MainActivity");
		AndroidDriver<AndroidElement> ad = new AndroidDriver<AndroidElement>(new URL("http://127.0.0.1:4723/wd/hub"),
				capabilities);
		Thread.sleep(5000);
		ad.findElement(By.id("btn_primary")).click();
		ad.findElement(By.id("btn_primary")).click();
		Thread.sleep(5000);
		ad.findElement(By.id("btn_disallow")).click();
		ad.findElement(By.id("follow_icon")).click();
		ad.findElement(By.id("btn_primary")).click();
		ad.findElement(By.id("btn_primary")).click();
		System.out.println("App Launched Successfully");
	}

	/*
	 * This method is used to navigate to the HOME page of the Score App. It waits
	 * for 5 seconds before clicking on an element with the ID “dismiss_modal”.
	 * After that, a message is printed to indicate that the user is on the HOME
	 * page
	 */
	@Given("^Navigate to theScoreApp HOME page$")
	public void navigate_to_theScoreApp_HOME_page() throws Throwable {
		Thread.sleep(5000);
		ad.findElement(By.id("dismiss_modal")).click();
		System.out.println("User in HOME PAGE");
	}

	/*
	 * This method is used to simulate the user pressing the LEAGUES icon in the
	 * Score App. It clicks on an element with the ID “navigation_leagues” and then
	 * prints a message to indicate that the user is on the Leagues Team Page
	 */

	@When("^user press LEAGUES icon$")
	public void user_press_LEAGUES_icon() throws Throwable {
		ad.findElement(By.id("navigation_leagues")).click();
		System.out.println("User is in Leagues Team Page");
	}

	/*
	 * This method takes a string argument Leagues_team and simulates the user
	 * choosing a team in the Score App. It clicks on an element with the ID
	 * “header_right_text” twice, waiting for 2 seconds in between. Then it clicks
	 * on an element with the text value equal to the value of Leagues_team
	 */

	@When("^choose \"([^\"]*)\"$")
	public void choose(String Leagues_team) throws Throwable {
		ad.findElement(By.id("header_right_text")).click();
		Thread.sleep(2000);
		ad.findElement(By.id("header_right_text")).click();
		Thread.sleep(2000);
		ad.findElement(By.xpath("//android.widget.TextView[@text=Leagues_team]")).click();
	}
	/*
	 * This method simulates the user seeing the results of their actions in the
	 * Score App. It prints a message to indicate that the user is on the selected
	 * Leagues Page
	 */

	@Then("^user sees results$")
	public void user_sees_results() throws Throwable {
		System.out.println("User in the selected Leagues Page");
		Thread.sleep(2000);
	}

	/*
	 * This method takes a string argument Leagues_page and verifies that the user
	 * has landed on the expected landing page for the specified league. It gets the
	 * text value of an element with the tag name “TextView” and assigns it to the
	 * variable leaguesTeamTiltle. Then it uses an Assert statement to check if the
	 * value of leaguesTeamTiltle is equal to the value of Leagues_page
	 */

	@Then("^verify user lands on the expected landing page for the \"([^\"]*)\"$")
	public void verify_user_lands_on_the_expected_landing_page_for_the(String Leagues_page) throws Throwable {
		String leaguesTeamTiltle = ad.findElement(By.xpath("//android.widget.TextView")).getText();
		Assert.assertEquals(leaguesTeamTiltle, Leagues_page);
	}

	/*
	 * This method takes a string argument leagues_SubTab and simulates the user
	 * selecting a sub-tab in the Score App. It clicks on an element with the text
	 * value equal to the value of leagues_SubTab.
	 */

	@Then("^user selects \"([^\"]*)\"$")
	public void user_selects(String leagues_SubTab) throws Throwable {
		ad.findElement(By.xpath("//android.widget.TextView[@text=leagues_SubTab]")).click();
	}

	/*
	 * This method takes a string argument sub_tab_page and verifies that the
	 * selected league corresponds to the selected team. It gets the text value of
	 * an element with the tag name “TextView” and assigns it to the variable
	 * leagues_header. Then it uses an Assert statement to check if the value of
	 * leagues_header is equal to the value of sub_tab_page
	 */

	@Then("^verify Leagues \"([^\"]*)\" corresponds to the Leagues team selected$")
	public void verify_Leagues_corresponds_to_the_Leagues_team_selected(String sub_tab_page) throws Throwable {
		String leagues_header = ad.findElement(By.xpath("//android.widget.TextView")).getText();
		Assert.assertEquals(leagues_header, sub_tab_page);
	}

	/*
	 * This method simulates the user pressing the BACK button in the Score App. It
	 * clicks on an element with the tag name “ImageButton”
	 */

	@Then("^user press BACK button$")
	public void user_press_BACK_button() throws Throwable {
		ad.findElement(By.xpath("//android.widget.ImageButton")).click();
		Thread.sleep(2000);
	}

	/*
	 * This method verifies that pressing the BACK button returns the user to the
	 * previous page correctly.  */

	@Then("^verify back navigation returns user to the previous page correctly$")
	public void verify_back_navigation_returns_user_to_the_previous_page_correctly() throws Throwable {
		String expected_header = ad.findElement(By.id("titleTextView")).getText();
		Assert.assertEquals(expected_header, "Leagues");
	}

}