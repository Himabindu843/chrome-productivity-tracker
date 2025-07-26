## CHROME EXTENSION FOR TIME TRACKING AND PRODUCTIVITY ANALYTICS

- **COMPANY** : CODTECH IT SOLUTIONS
- **NAME** : P HIMABINDU
- **INTERN ID** : CT06DG2711
- **DOMAIN** : FULL STACK WEB DEVELOPMENT
- **DURATION** : 6 WEEKS
- **MENTOR** : Neela Santhosh Kumar

## DESCRIPTION:
This project is a Chrome Extension designed to track the amount of time a user spends on different websites and classify that time as productive, unproductive, or neutral. 
The goal of this extension is to help users become more aware of their browsing habits and optimize their time management for better productivity.

**Features Implemented**
- Real-time tracking of active tab usage
- Categorization of websites (e.g., YouTube as Unproductive, GitHub as Productive)
- Local data storage using Chrome’s storage.local API
- Refreshable popup interface that displays tracked time
- Lightweight and clean interface, built for smooth performance

**Tools & Technologies Used**
- HTML5 & CSS3 – Used to build a responsive and minimal user interface for the popup.
- JavaScript (Vanilla) – Core functionality for background logic, tab activity, messaging, and popup behavior.
- **Chrome Extension APIs**
- tabs – To detect the currently active tab and its URL.
- windows – To track when the browser window is focused or not.
- storage – To persist user data across sessions using chrome.storage.local.
- runtime – To handle messaging between background scripts and popup.
- VS Code – Used for coding and debugging the project.
- Git & GitHub – For version control and hosting the project online.

**How I Built It – Step-by-Step**
- Folder Setup:
Created a structured folder in VS Code with separate files for logic (background.js, popup.js), UI (popup.html, style.css), configuration (manifest.json), and icons.
- Manifest Configuration:
Created a manifest.json file as per Chrome Extension Manifest V3, declaring permissions for tabs, storage, and all URLs.
- Time Tracking Logic:
Implemented in background.js, where tab switches and window focus events were used to track active browsing time. When a user switches away from a tab, the duration is calculated and stored against that domain.
- Popup UI:
Built a simple popup.html page with a button and dynamic data display. When a user clicks "Refresh", it shows the tracked time for each domain with classification using custom logic (productive vs unproductive).
- Classification Logic:
In popup.js, domains like leetcode.com, github.com were marked as “Productive”, while youtube.com, facebook.com as “Unproductive”.

**Testing**:
- Loaded the extension via chrome://extensions using "Load unpacked", and tested it across multiple tabs and scenarios to ensure accurate time tracking and proper classification.
- Version Control & Deployment:
Initialized a Git repository, committed the code, and pushed it to GitHub at [GitHub Repo Link].

**Use Cases**
- Individuals who want to track digital habits
- Students preparing for exams or coding interviews
- Remote workers managing browser-based productivity
- Parents who want insights into children's browsing time

This Chrome Extension project helped me explore browser APIs, asynchronous JavaScript, UI design, and user experience. 
It’s an excellent learning experience in building real-world, browser-native tools that directly impact productivity and time management.

**OUTPUT**:-
  ![Image](https://github.com/user-attachments/assets/5c4f10b9-b205-487f-8b8c-8aa0c0a08210)

