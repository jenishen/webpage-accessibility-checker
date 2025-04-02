# Webpage Accessibility Checker

## Description
The **Webpage Accessibility Checker** is a simple web application that allows users to test the accessibility of any webpage. It uses the **Pa11y** library to identify and report accessibility issues, helping developers ensure their websites meet accessibility standards.

The app is built with:
- **Node.js** and **Express** for the backend.
- **Pa11y** for accessibility testing.
- **HTML**, **Skeleton CSS**, and **JavaScript** for the frontend.

---

## Features
- Enter a URL to scan for accessibility issues.
- Displays the number of errors and warnings found.
- Provides detailed information about each issue, including:
  - A description of the issue.
  - The relevant WCAG criteria.
  - The location on the webpage where the issue can be found.

---

## Folder Structure
The project is organized as follows:

```
webpage-accessibility-checker_sv # Main folder
├── node_modules           # Installed dependencies (auto-generated)
├── public                 # Frontend files
│   ├── styles             # CSS files for styling
│   │   ├── normalize.css  
│   │   ├── skeleton.css   
│   ├── index.html         # Main HTML file
│   ├── main.js            # Frontend JavaScript
├── app.js                 # Main server file
├── package-lock.json      # Auto-generated file to lock dependency versions
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd webpage-accessibility-checker_sv
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open the application:
   Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## License
This project is licensed under the **ISC License**. 
