Feature: Validate Leagues tab and Sub - tabs from the selected leagues team in Android app as a guest user 


 Scenario Outline: TC001_Validating user lands on the expected landing page for the League choosen
 
 Given Initialize the theScoreApp
 And Navigate to theScoreApp HOME page
 When user press LEAGUES icon
 And choose "<Leagues_team>"
 Then user sees results
 And verify user lands on the expected landing page for the "<Leagues_page>"
 
 Examples:
  | Leagues_team|Leagues_page|
 | NHL|NHL|
 |NFL|NFL|
 |MLB|MLB|
 |NBA|NBA|
 |NCAA Football|NCAA Football|


  Scenario Outline: TC002_Validating Leagues sub- tab page corresponds to the Leagues selected 
 
 
 Given Initialize the theScoreApp
 And Navigate to theScoreApp HOME page
 When user press LEAGUES icon
 And choose "<Leagues_team>"
 Then user sees results
 And user selects "<leagues_SubTab>"
 Then verify Leagues "<sub_tab_page>" corresponds to the Leagues team selected 
 
 Examples:
 | Leagues_team|leagues_SubTab|sub_tab_page|
 | NHL|STANDINGS|NHL|
 |NFL|LEADERS|NFL|
 |MLB|STANDINGS|MLB|
 |NBA|LEADERS|NBA|
 |NCAA Football|STANDINGS|NCAA Football|
 
 
 
 Scenario Outline: TC003_Validating back navigation returns user to the previous page correctly.
 
 Given Initialize the theScoreApp
 And Navigate to theScoreApp HOME page
  When user press LEAGUES icon
 And choose "<Leagues_team>"
 Then user sees results
 And user selects "<leagues_SubTab>"
 And user press BACK button 
 Then verify back navigation returns user to the previous page correctly
 
 Examples:
 | Leagues_team|leagues_SubTab|
 | NHL|STANDINGS|
 |NFL|LEADERS|
 |MLB|STANDINGS|
 |NBA|LEADERS|
 |NCAA Football|STANDINGS|
 
 
 
 
 
 
 