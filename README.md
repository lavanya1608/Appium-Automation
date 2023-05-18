# Appium-Automation - theScoreApp for Android using BDD Test with Cucumber Framework

THESCORE, a wholly-owned subsidiary of PENN Entertainment, empowers millions of sports fans
through its digital media and sports betting products. Its media app ‘theScore’ is one of the most
popular in North America, delivering fans highly personalized live scores, news, stats, and betting
information from their favorite teams, leagues, and players.

# Framework Architecture

theScoreApp\src\test\java\features\androidAutomation.feature - all the cucumber features files (files .feature ext) are placed here.

In Cucumber,feature file is a plain text file that contains a high-level description of the software feature to be tested, written in a language called Gherkin. Feature files are used in Behavior-Driven Development (BDD) to define acceptance criteria and test scenarios for a software feature.


theScoreApp\src\test\java\stepDefinitions\stepDefinitions.java - Step defintion are defined under this package for the feature steps.

In Cucumber, a step definition is a piece of code that defines the behavior of a step in a Gherkin scenario. Step definitions are written in a programming language like Java or Ruby and are used to translate the plain English steps in a Gherkin scenario into executable code.


theScoreApp\src\test\java\Test_Runner\Test_Runner.java - Test Runner class

In Cucumber, a test runner is a class that is used to execute Cucumber tests. The test runner class uses JUnit to run the tests and specifies the location of the feature files and step definitions using annotations.

theScoreApp\target\site\cucumber-pretty : Once Step_Definition\stepDefinitions.java file is executed Cucucmber reports are stored in this location in local folder

***Handled Parametrization using Scenario Outline and Examples keywords*** which is supported by cucumber framework A Scenario Outline is a template for a test scenario that contains placeholders for the input values. These placeholders are defined using angle brackets (< >) and are replaced with actual values from the Examples table when the test is run

# Prerequisites
Java Maven Eclipse Eclipse Plugins Maven Cucumber

# Running test
This section explains how to run the automated tests for this system

Select test Runner class file - src/test/java/Test_Runner.java Right Click on Test_Runner.java class and Click Run As > JUnit Test Application

# Test Scenarios


Feature: Validate Leagues tab and Sub - tabs from the selected leagues team in Android app as a guest user 

TC001_Validating user lands on the expected landing page for the League choosen

TC002_Validating Leagues sub- tab page corresponds to the Leagues selected

TC003_Validating back navigation returns user to the previous page correctly


# Test Approach

The test approach for the automation focuses on validating the functionality of the Leagues tab and its sub-tabs in theScoreApp for Android as a guest user. The tests are designed to ensure that the user can navigate to the expected landing page for the selected league, that the sub-tab page corresponds to the selected league, and that the back navigation returns the user to the previous page correctly.


# Test Coverage

The test coverage targets the main user flows within the Leagues tab and its sub-tabs, including selecting a league, viewing results, selecting a sub-tab, and navigating back. The use of scenario outlines and examples allows for testing multiple leagues and sub-tabs with a single test case, increasing the efficiency and coverage of the tests. Overall, this test approach provides comprehensive coverage of the feature being tested
