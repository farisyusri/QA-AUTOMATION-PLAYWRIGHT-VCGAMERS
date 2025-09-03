# QA Automation - Gercep Test (Playwright)

**-Scenario A - Open Gercep Page & Check Title**
 1 Open https://vcgamers.com/gercep
 2 Verify the URL contains /gercep
 3 Verify the page title contains 'VCGamers'
 
**-Scenario B - Search Bar Interaction**
 1 On the Gercep page, type 'mobile legends' in the search bar
 2 Press Enter
 3 Verify at least one search result is visible
 
**-Scenario C - Click First Item**
 1 From the search results, click the first item/brand
 2 Verify the brand detail page opens (URL changes or brand title is visible)

**Requirements**
1. Node.js
2. Code Editor (on this case im using Visual Studio Code)
3. Playwright

**Setup**
1. Download Node.js on official website (http://nodejs.org/en/download/)
2. Install Playwright on Visual Studio Code ("Playwright Test for VSCode" on extensions or by terminal by typing **npm init playwright@latest**)
     -Choose **Javascript**
3. After Playwright installed, make a new file at **/tests**. In this case, i named the file **gercep.spec.js**. So the path is **/tests/gercep.spec.js**

**Step for testing**
1. Make sure all requirements are installed
2. Choose browser for website test at **playwright.config.js** (In this case im using Firefox)
3. Type **npx playwright test tests/gercep.spec.js --headed** (insert the file path for specific test file)
4. Type **npx playwright show-result** to see the test results of **gercep.spec.js**
