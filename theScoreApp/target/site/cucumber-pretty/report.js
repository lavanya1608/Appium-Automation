$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("androidAutomation.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Leagues tab and Sub - tabs from the selected leagues team in Android app as a guest user",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "TC001_Validating user lands on the expected landing page for the League choosen",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "choose \"\u003cLeagues_team\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify user lands on the expected landing page for the \"\u003cLeagues_page\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;",
  "rows": [
    {
      "cells": [
        "Leagues_team",
        "Leagues_page"
      ],
      "line": 14,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;1"
    },
    {
      "cells": [
        "NHL",
        "NHL"
      ],
      "line": 15,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;2"
    },
    {
      "cells": [
        "NFL",
        "NFL"
      ],
      "line": 16,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;3"
    },
    {
      "cells": [
        "MLB",
        "MLB"
      ],
      "line": 17,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;4"
    },
    {
      "cells": [
        "NBA",
        "NBA"
      ],
      "line": 18,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;5"
    },
    {
      "cells": [
        "NCAA Football",
        "NCAA Football"
      ],
      "line": 19,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "TC001_Validating user lands on the expected landing page for the League choosen",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "choose \"NHL\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify user lands on the expected landing page for the \"NHL\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 49295603000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5009230900,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NHL",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NHL",
      "offset": 56
    }
  ],
  "location": "stepDefinitions.verify_user_lands_on_the_expected_landing_page_for_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "TC001_Validating user lands on the expected landing page for the League choosen",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "choose \"NFL\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify user lands on the expected landing page for the \"NFL\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 48774822600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5008836900,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NFL",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NFL",
      "offset": 56
    }
  ],
  "location": "stepDefinitions.verify_user_lands_on_the_expected_landing_page_for_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "TC001_Validating user lands on the expected landing page for the League choosen",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "choose \"MLB\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify user lands on the expected landing page for the \"MLB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 56550844200,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element \u0027By.id: btn_primary\u0027 does not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-EIQ5J0H\u0027, ip: \u002710.0.0.199\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.fivemobile.thescore.ui...., appPackage: com.fivemobile.thescore, automationName: UIAutomator2, databaseEnabled: false, desired: {appActivity: com.fivemobile.thescore.ui...., appPackage: com.fivemobile.thescore, automationName: UIAutomator2, deviceName: Android Emulator, platformName: android}, deviceApiLevel: 28, deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 9, statBarHeight: 63, takesScreenshot: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: b996de38-5112-4d99-a3c0-d3072a96cdc8\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepDefinitions.stepDefinitions.initialize_the_theScoreApp(stepDefinitions.java:40)\r\n\tat ✽.Given Initialize the theScoreApp(androidAutomation.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MLB",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MLB",
      "offset": 56
    }
  ],
  "location": "stepDefinitions.verify_user_lands_on_the_expected_landing_page_for_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "TC001_Validating user lands on the expected landing page for the League choosen",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "choose \"NBA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify user lands on the expected landing page for the \"NBA\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 53960489300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5011193500,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NBA",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NBA",
      "offset": 56
    }
  ],
  "location": "stepDefinitions.verify_user_lands_on_the_expected_landing_page_for_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "TC001_Validating user lands on the expected landing page for the League choosen",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc001-validating-user-lands-on-the-expected-landing-page-for-the-league-choosen;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "choose \"NCAA Football\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify user lands on the expected landing page for the \"NCAA Football\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 60376236100,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-EIQ5J0H\u0027, ip: \u002710.0.0.199\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.fivemobile.thescore.ui...., appPackage: com.fivemobile.thescore, automationName: UIAutomator2, databaseEnabled: false, desired: {appActivity: com.fivemobile.thescore.ui...., appPackage: com.fivemobile.thescore, automationName: UIAutomator2, deviceName: Android Emulator, platformName: android}, deviceApiLevel: 28, deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 9, statBarHeight: 63, takesScreenshot: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 618b687f-73c0-4ed2-ac78-c036d7592825\n*** Element info: {Using\u003did, value\u003dbtn_primary}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat stepDefinitions.stepDefinitions.initialize_the_theScoreApp(stepDefinitions.java:39)\r\n\tat ✽.Given Initialize the theScoreApp(androidAutomation.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NCAA Football",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NCAA Football",
      "offset": 56
    }
  ],
  "location": "stepDefinitions.verify_user_lands_on_the_expected_landing_page_for_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "TC002_Validating Leagues sub- tab page corresponds to the Leagues selected",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "choose \"\u003cLeagues_team\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user selects \"\u003cleagues_SubTab\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify Leagues \"\u003csub_tab_page\u003e\" corresponds to the Leagues team selected",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;",
  "rows": [
    {
      "cells": [
        "Leagues_team",
        "leagues_SubTab",
        "sub_tab_page"
      ],
      "line": 34,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;1"
    },
    {
      "cells": [
        "NHL",
        "STANDINGS",
        "NHL"
      ],
      "line": 35,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;2"
    },
    {
      "cells": [
        "NFL",
        "LEADERS",
        "NFL"
      ],
      "line": 36,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;3"
    },
    {
      "cells": [
        "MLB",
        "STANDINGS",
        "MLB"
      ],
      "line": 37,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;4"
    },
    {
      "cells": [
        "NBA",
        "LEADERS",
        "NBA"
      ],
      "line": 38,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;5"
    },
    {
      "cells": [
        "NCAA Football",
        "STANDINGS",
        "NCAA Football"
      ],
      "line": 39,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "TC002_Validating Leagues sub- tab page corresponds to the Leagues selected",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "choose \"NHL\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user selects \"STANDINGS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify Leagues \"NHL\" corresponds to the Leagues team selected",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 54472693500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5006639600,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NHL",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STANDINGS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NHL",
      "offset": 16
    }
  ],
  "location": "stepDefinitions.verify_Leagues_corresponds_to_the_Leagues_team_selected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "TC002_Validating Leagues sub- tab page corresponds to the Leagues selected",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "choose \"NFL\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user selects \"LEADERS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify Leagues \"NFL\" corresponds to the Leagues team selected",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 50276929500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5015239100,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NFL",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LEADERS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NFL",
      "offset": 16
    }
  ],
  "location": "stepDefinitions.verify_Leagues_corresponds_to_the_Leagues_team_selected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 37,
  "name": "TC002_Validating Leagues sub- tab page corresponds to the Leagues selected",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "choose \"MLB\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user selects \"STANDINGS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify Leagues \"MLB\" corresponds to the Leagues team selected",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 55693346900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5008050500,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MLB",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STANDINGS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MLB",
      "offset": 16
    }
  ],
  "location": "stepDefinitions.verify_Leagues_corresponds_to_the_Leagues_team_selected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 38,
  "name": "TC002_Validating Leagues sub- tab page corresponds to the Leagues selected",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "choose \"NBA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user selects \"LEADERS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify Leagues \"NBA\" corresponds to the Leagues team selected",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 54105338800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5001687100,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NBA",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LEADERS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NBA",
      "offset": 16
    }
  ],
  "location": "stepDefinitions.verify_Leagues_corresponds_to_the_Leagues_team_selected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "TC002_Validating Leagues sub- tab page corresponds to the Leagues selected",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc002-validating-leagues-sub--tab-page-corresponds-to-the-leagues-selected;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "choose \"NCAA Football\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user selects \"STANDINGS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "verify Leagues \"NCAA Football\" corresponds to the Leagues team selected",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 54667704400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5003709500,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NCAA Football",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STANDINGS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NCAA Football",
      "offset": 16
    }
  ],
  "location": "stepDefinitions.verify_Leagues_corresponds_to_the_Leagues_team_selected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "TC003_Validating back navigation returns user to the previous page correctly.",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "choose \"\u003cLeagues_team\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user selects \"\u003cleagues_SubTab\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user press BACK button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "verify back navigation returns user to the previous page correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;",
  "rows": [
    {
      "cells": [
        "Leagues_team",
        "leagues_SubTab"
      ],
      "line": 55,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;1"
    },
    {
      "cells": [
        "NHL",
        "STANDINGS"
      ],
      "line": 56,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;2"
    },
    {
      "cells": [
        "NFL",
        "LEADERS"
      ],
      "line": 57,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;3"
    },
    {
      "cells": [
        "MLB",
        "STANDINGS"
      ],
      "line": 58,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;4"
    },
    {
      "cells": [
        "NBA",
        "LEADERS"
      ],
      "line": 59,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;5"
    },
    {
      "cells": [
        "NCAA Football",
        "STANDINGS"
      ],
      "line": 60,
      "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 56,
  "name": "TC003_Validating back navigation returns user to the previous page correctly.",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "choose \"NHL\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user selects \"STANDINGS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user press BACK button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "verify back navigation returns user to the previous page correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 52613945600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5012556000,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NHL",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STANDINGS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_press_BACK_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.verify_back_navigation_returns_user_to_the_previous_page_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 57,
  "name": "TC003_Validating back navigation returns user to the previous page correctly.",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "choose \"NFL\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user selects \"LEADERS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user press BACK button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "verify back navigation returns user to the previous page correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 55654747400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5007171000,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NFL",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LEADERS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_press_BACK_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.verify_back_navigation_returns_user_to_the_previous_page_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 58,
  "name": "TC003_Validating back navigation returns user to the previous page correctly.",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "choose \"MLB\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user selects \"STANDINGS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user press BACK button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "verify back navigation returns user to the previous page correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 53973467800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5005393200,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MLB",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STANDINGS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_press_BACK_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.verify_back_navigation_returns_user_to_the_previous_page_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 59,
  "name": "TC003_Validating back navigation returns user to the previous page correctly.",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "choose \"NBA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user selects \"LEADERS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user press BACK button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "verify back navigation returns user to the previous page correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 54090292400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5012404400,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NBA",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LEADERS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_press_BACK_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.verify_back_navigation_returns_user_to_the_previous_page_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 60,
  "name": "TC003_Validating back navigation returns user to the previous page correctly.",
  "description": "",
  "id": "validate-leagues-tab-and-sub---tabs-from-the-selected-leagues-team-in-android-app-as-a-guest-user;tc003-validating-back-navigation-returns-user-to-the-previous-page-correctly.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "Initialize the theScoreApp",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Navigate to theScoreApp HOME page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user press LEAGUES icon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "choose \"NCAA Football\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user selects \"STANDINGS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user press BACK button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "verify back navigation returns user to the previous page correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.initialize_the_theScoreApp()"
});
formatter.result({
  "duration": 50983481000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigate_to_theScoreApp_HOME_page()"
});
formatter.result({
  "duration": 5002628500,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.stepDefinitions.navigate_to_theScoreApp_HOME_page(stepDefinitions.java:47)\r\n\tat ✽.And Navigate to theScoreApp HOME page(androidAutomation.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.user_press_LEAGUES_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NCAA Football",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.choose(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_sees_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STANDINGS",
      "offset": 14
    }
  ],
  "location": "stepDefinitions.user_selects(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.user_press_BACK_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.verify_back_navigation_returns_user_to_the_previous_page_correctly()"
});
formatter.result({
  "status": "skipped"
});
});