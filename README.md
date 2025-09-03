# QA Automation - Gercep Test (Playwright)

## Scenario A - Open Gercep Page & Check Title
1. Open [https://vcgamers.com/gercep](https://vcgamers.com/gercep)
2. Verify the URL contains `/gercep`
3. Verify the page title contains **"VCGamers"**

---

## Scenario B - Search Bar Interaction
1. On the Gercep page, type **"mobile legends"** in the search bar
2. Press **Enter**
3. Verify at least one search result is visible

---

## Scenario C - Click First Item
1. From the search results, click the **first item/brand**
2. Verify the brand detail page opens (URL changes or brand title is visible)


## **Requirements**
1. [Node.js](https://nodejs.org/en/download/)  
2. Code Editor (in this case, using **Visual Studio Code**)  
3. [Playwright](https://playwright.dev/)

---

## **Setup**
1. **Download and install Node.js**  
   - [Official website](https://nodejs.org/en/download/)

2. **Install Playwright**  
   - Open VS Code → Go to **Extensions**, search and install:  
     `Playwright Test for VSCode`  
   - Or install via terminal:
     ```bash
     npm init playwright@latest
     ```
   - Choose **JavaScript** when prompted.

3. **Create test file**  
   - Inside the `/tests` folder, create a new file.  
     Example: `gercep.spec.js`  
     - The full path will be:  
       ```
       /tests/gercep.spec.js
       ```

---

## **Steps to Run Tests**
1. Ensure all requirements are installed and set up correctly.  
2. Choose the browser for testing inside the **playwright.config.js** file.  
   > Example: using **Firefox** only.
3. Run the specific test file:
   ```bash
   npx playwright test tests/gercep.spec.js --headed

4. After the test finishes, view the test results:

   ```bash
   npx playwright show-report
