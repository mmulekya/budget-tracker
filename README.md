# My Budget Tracker

## Week 2 HTML & CSS Technical Coding Challenge

**Name:** Martin Mulekya
**Project:** Budget Tracker

## Project Description

This project is an improved version of the Week 1 Budget Tracker. The Week 2 version adds a properly structured expense table, an upgraded expense form, multimedia elements, interactive HTML elements, and advanced CSS selectors.

## What Was Built

### 1. Expense Table

The expense section now uses a proper HTML table containing:

* Table headers using `<th>`
* Expense records using `<td>`
* `<thead>` for the table header
* `<tbody>` for the expense data
* Five sample expense records

The table displays:

* Name
* Amount
* Category
* Date

### 2. Add Expense Form

The Add Expense section was upgraded with a proper `<form>`.

It contains:

* Expense name input
* Amount input
* Category dropdown
* Add Expense button

The category dropdown includes:

* Food
* Transport
* Rent
* Entertainment
* Other

The button currently uses `type="button"`. JavaScript can be added later to make the button actually add new expenses.

### 3. Multimedia Elements

A budget tracker logo was added using an `<img>` element with:

* `src`
* `alt`
* `width`

A budgeting tips YouTube video was also embedded using an `<iframe>`.

### 4. Interactive Elements

The project includes a `<details>` and `<summary>` section explaining how to use the tracker.

The expense table also includes a hover effect, and the Add Expense button uses a pointer cursor.

### 5. Advanced CSS Selectors

The stylesheet demonstrates advanced CSS selectors including:

* `.expenses-section td`
* `input:not([type="submit"])`
* `input:focus`
* `tr:nth-child(even)`
* `tr:hover`

These selectors provide styling and interactive effects to different elements on the page.

## Files in the Project

| File             | Description                                                               |
| ---------------- | ------------------------------------------------------------------------- |
| `index.html`     | Contains the structure and content of the Budget Tracker                  |
| `style.css`      | Contains the styling, table design, form styling, and interactive effects |
| `README.md`      | Explains the project and the features implemented                         |
| `reflection.txt` | Contains the previous project reflection                                  |

## Technologies Used

* HTML5
* CSS3
* Git
* GitHub
* Visual Studio Code

## Future Improvements

JavaScript can be added in a future version to allow users to:

* Add expenses dynamically
* Calculate total expenses
* Delete expenses
* Edit expenses
* Store expenses
* Add income
* Calculate the remaining budget

## Conclusion

The Week 2 Budget Tracker builds on the Week 1 project by improving the HTML structure, adding a functional form structure, introducing multimedia, and demonstrating advanced CSS selectors and interactive styling.



# Week 3 Visual Identity & CSS Design

## Overview

In Week 3, the Budget Tracker was redesigned to improve its visual identity and overall user interface. The existing HTML structure and functionality were kept unchanged, while CSS was used to create a more consistent, modern, and readable design.

### 1. Color Palette

A consistent color palette was introduced using CSS variables.

The main colors include:

* Light background for the page
* White cards for the main sections
* Blue as the primary accent color
* Dark blue for button hover states
* Dark text for readability
* Light borders for visual separation
* Light backgrounds for alternating table rows

CSS variables were used to keep the colors consistent throughout the website.

### 2. Typography

Google Fonts were added to improve the typography.

Two fonts are used:

* **Poppins**; used for headings and important titles
* **Inter**; used for body text, labels, form controls, buttons, and table content

This creates a clear visual hierarchy while keeping the page easy to read.

### 3. Expense Table Styling

The expense table was redesigned with:

* Colored table headers
* Consistent cell padding
* Borders between cells
* Alternating row colors
* Hover effects on table rows
* Rounded visual styling
* Responsive horizontal scrolling on smaller screens

The table remains based on the existing HTML structure from Week 2.

### 4. Add Expense Form Styling

The Add Expense form was improved using CSS.

The form now includes:

* Consistent spacing between labels and fields
* Rounded input and select fields
* Clear borders
* Focus effects when entering information
* A styled blue Add Expense button
* Button hover and active effects

The existing form functionality and HTML structure were not changed.

### 5. CSS Box Model

The CSS box model was intentionally applied throughout the page using:

* `margin`
* `padding`
* `border`
* `border-radius`
* `box-shadow`

The main page heading, Add Expense section, and Expense Table section are displayed as separate visual cards.

This creates better spacing and makes each part of the Budget Tracker easier to identify.

### 6. Responsive Design

A responsive media query was added for smaller screens.

The design adjusts:

* Page padding
* Heading size
* Card spacing
* Table text size
* Table cell padding
* Video height

This helps the Budget Tracker remain usable on smaller screens.

### 7. Files Updated

| File             | Week 3 Purpose                           |
| ---------------- | ---------------------------------------- |
| `index.html`     | Existing HTML structure retained         |
| `style.css`      | Updated with the Week 3 visual identity  |
| `README.md`      | Documents the Week 3 design improvements |
| `reflection.txt` | Existing project reflection              |

### 8. Technologies Used

* HTML5
* CSS3
* Google Fonts
* Git
* GitHub
* Visual Studio Code

### Conclusion

The Week 3 update focuses entirely on the visual design of the existing Budget Tracker. The project now has a consistent color palette, improved typography, styled forms and tables, visual cards, spacing, borders, rounded corners, shadows, and responsive styling while maintaining the existing HTML structure and functionality.



# Week 4 – SpendWise Dashboard Shell

## Overview

In Week 4, the Budget Tracker was redesigned into the **SpendWise Dashboard Shell**. The focus of this week was creating a modern, responsive dashboard layout using CSS Grid and Flexbox.

No JavaScript functionality was added. The dashboard uses realistic static financial information as required by the assignment.

### 1. Dashboard Layout

The dashboard contains:

* A SpendWise sidebar/navigation menu
* A dashboard header
* An available balance display
* Six financial category cards
* A recent spending section

The six category cards are:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

### 2. CSS Grid

CSS Grid is used for the overall dashboard structure.

The desktop layout separates the page into:

* A fixed-width sidebar
* A flexible main content area

CSS Grid is also used to arrange the six financial category cards into multiple columns.

On smaller screens, the layout changes to a single column.

### 3. Flexbox

Flexbox is used throughout the dashboard to arrange content.

It is used for:

* Sidebar navigation
* Header content
* Available balance section
* Individual dashboard cards
* Card headers and footers
* Recent activity items

This makes the content easier to align and helps the layout adapt to different screen sizes.

### 4. CSS Custom Properties

The application's theme is defined using CSS custom properties inside `:root`.

The variables include:

* Brand color
* Accent color
* Surface color
* Background color
* Primary text color
* Secondary text color
* Border color
* Sidebar color

Using variables makes the visual theme consistent and easier to maintain.

### 5. Responsive Design

A responsive media query was added below 768px.

At smaller screen sizes:

* The sidebar and main content become a single-column layout.
* Dashboard cards become one column.
* Header content stacks vertically.
* Navigation adapts to a smaller screen.
* Spacing and padding are reduced.

The responsive layout was tested using the browser's DevTools Device Toolbar.

### 6. Card Micro-interactions

Subtle card interactions were added to improve the user experience.

When a user hovers over a dashboard card:

* The card moves slightly upward.
* The shadow becomes more pronounced.

Keyboard focus states are also supported.

The transitions use a duration of `0.2s` (200ms), which meets the assignment requirement of 250ms or less.

### 7. Dark Theme

As a stretch goal, a dark theme was implemented using:

`@media (prefers-color-scheme: dark)`

The dark theme overrides the CSS custom properties inside `:root` rather than duplicating the entire stylesheet.

This allows the dashboard to automatically adapt when the user's operating system or browser is configured for dark mode.

### 8. No Absolute Positioning

The dashboard layout does not use absolute positioning.

CSS Grid and Flexbox are used to create the page structure and arrange the dashboard content.

### 9. Files Updated

| File             | Week 4 Purpose                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `index.html`     | Contains the SpendWise dashboard structure and static financial content                    |
| `style.css`      | Contains the Grid, Flexbox, responsive layout, theme variables, animations, and dark theme |
| `README.md`      | Documents the Week 4 dashboard implementation                                              |
| `reflection.txt` | Contains the previous project reflection                                                   |

### Conclusion

The Week 4 Budget Tracker has been transformed into the SpendWise Dashboard Shell. The project now demonstrates modern CSS layout techniques using Grid and Flexbox, reusable CSS variables, responsive design, accessible focus interactions, and an optional dark theme while keeping the dashboard free from JavaScript functionality.



# Week 6: JavaScript Foundation

## What SpendWise Does

SpendWise is a personal finance dashboard designed to help users track their monthly budget, expenses, savings, and spending categories.

In Week 6, JavaScript was added to create the foundation for interactive budget calculations.

### JavaScript Concepts Implemented

The Week 6 JavaScript implementation demonstrates:

* Variables
* User input with `prompt()`
* Number conversion
* Conditional statements
* Functions
* Calculations
* Browser console output

### Variables

The application stores the monthly budget and total expenses using JavaScript variables:


let budget = 50000;
let expenses = 15000;


These values provide default amounts before the user enters their own information.

### User Input

The application collects budget and expense information using `prompt()`:


const budgetInput = prompt("Enter your monthly budget:", budget);
const expensesInput = prompt("Enter your total expenses:", expenses);


Because `prompt()` returns text, the values are converted into numbers using `Number()`.

### Budget Calculation

A reusable function calculates the remaining balance:

function calculateBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}

The remaining balance is calculated by subtracting total expenses from the monthly budget.

### Reusable Functions

The project uses functions to keep the JavaScript organized and reusable.

The `calculateBalance()` function handles the budget calculation, while `displayBudgetSummary()` displays the calculated results in the browser console.

### Console Output

The results are clearly labeled in the browser console.

Example test:


===== SpendWise Budget Summary =====
Monthly Budget: KSh 50000
Total Expenses: KSh 15000
Remaining Balance: KSh 35000
Status: You are within your budget.


### Files Used

| File         | Purpose                                                                  |
| ------------ | ------------------------------------------------------------------------ |
| `index.html` | SpendWise dashboard structure                                            |
| `style.css`  | Dashboard styling and responsive layout                                  |
| `script.js`  | JavaScript variables, input, calculations, functions, and console output |
| `README.md`  | Project documentation                                                    |

### Week 6 Learning Outcome

This week introduced JavaScript fundamentals into SpendWise. The project can now accept user input, perform budget calculations, and report the results dynamically through the browser console.


## Week 6 – Make SpendWise Interactive

This week, SpendWise was upgraded from a static dashboard into an interactive budgeting application using JavaScript.

### Improvements Made This Week

The main improvements were:

* Added an interactive Add Expense form.
* Added JavaScript arrays to store expense records.
* Added loops to calculate total expenses.
* Added conditional statements to evaluate the user's budget.
* Added DOM manipulation to update the dashboard directly.
* Added event listeners to respond to user actions.
* Added dynamic balance and expense-count updates.
* Preserved the original SpendWise dashboard design and layout.

### Conditionals

SpendWise uses `if`, `else if`, and `else` statements to evaluate the remaining budget.

The application checks whether the remaining balance is:

* Greater than zero — the user is within budget.
* Equal to zero — the user has reached the budget limit.
* Less than zero — the user has exceeded the budget.

Example:


if (balance > 0) {
    return "You are within your budget.";
} else if (balance === 0) {
    return "You have reached your budget limit.";
} else {
    return "You have exceeded your budget.";
}


### Arrays

Expense information is stored in an array of objects.

Each expense contains:

* Name
* Category
* Amount

Example:


let expenses = [
    {
        name: "Lunch",
        category: "Food",
        amount: 500
    },
    {
        name: "Bus Fare",
        category: "Transport",
        amount: 200
    }
];


New expenses are added to the array using `push()`.

### Loops

A `for...of` loop processes every expense stored in the array.


for (let expense of expenses) {
    total += expense.amount;
}


This allows SpendWise to calculate the total amount spent dynamically as new expenses are added.

### DOM Updates

JavaScript updates the webpage directly instead of displaying results only in the browser console.

The application dynamically updates:

* Available balance
* Number of expenses tracked
* Recent spending records

For example:


balanceDisplay.textContent =
    `KSh ${remainingBalance.toLocaleString()}`;


### User Interactions and Events

An event listener is attached to the Add Expense form.

When the user submits the form:

1. The page refresh is prevented.
2. The entered information is validated.
3. A new expense is added to the array.
4. The dashboard is recalculated.
5. The webpage is updated.

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Process expense

    updateDashboard();
});


### Challenges and Resolutions

#### Challenge 1: JavaScript syntax error

An `Unexpected identifier 'KSh'` error occurred because the currency text was not correctly handled inside a JavaScript template literal.

**Resolution:** The currency output was placed correctly inside backticks:


`KSh ${remainingBalance.toLocaleString()}`


#### Challenge 2: Keeping the original design

While adding interactivity, it was important not to replace the original SpendWise dashboard design.

**Resolution:** The existing sidebar, dashboard cards, layout, colors, emojis, and Recent Activity design were preserved. Only the HTML elements required for JavaScript interaction were added.

#### Challenge 3: Connecting data to the interface

The initial JavaScript displayed calculations mainly through the console.

**Resolution:** DOM manipulation was added so that changes to the expense array automatically update the balance and Recent Activity section on the webpage.

### Week 6 Testing

The application was tested with different budgeting scenarios.

#### Within Budget

Initial expenses:

KSh 1,950


After adding a KSh 300 Coffee expense:

Total Expenses: KSh 2,250
Remaining Balance: KSh 47,750
Status: You are within your budget.


#### Over Budget

After adding a KSh 50,000 expense:

Total Expenses: KSh 52,250
Remaining Balance: KSh -2,250
Status: You have exceeded your budget.


# SpendWise – Personal Budget Tracker

## Live Application

**Live Website:** https://mart-tracker.netlify.app/

**GitHub Repository:** https://github.com/mmulekya/budget-tracker

SpendWise is a personal budget tracking application designed to help users record expenses, monitor their spending, and manage their monthly budget.

## Project Description

SpendWise provides a simple and interactive dashboard for tracking personal expenses.

Users can:
- View their available budget balance.
- Monitor spending across different categories.
- Add new expenses.
- View recent spending activity.
- See their remaining balance update automatically.
- Receive budget status information based on their spending.

The application uses Kenyan Shillings (KSh) as its currency.

## Technologies Used

- **HTML5:** Structures the dashboard and expense form.
- **CSS3:** Provides the layout, styling, and responsive presentation.
- **JavaScript:** Implements expense calculations, conditional logic, arrays, loops, DOM manipulation, and event listeners.
- **Git and GitHub:** Version control and source-code hosting.
- **Netlify:** Website hosting and continuous deployment.

## Project Structure

```text
budget-tracker/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── reflection.txt
```

## GitHub Repository Information

**Repository Name:** budget-tracker

**GitHub Username:** mmulekya

**Repository URL:** https://github.com/mmulekya/budget-tracker

**Production Branch:** main

## Netlify Deployment Information

**Hosting Platform:** Netlify

**Custom Site Name:** mart-tracker

**Live URL:** https://mart-tracker.netlify.app/

**Deployment Method:** GitHub repository integration.

**Publish Directory:** Project root (`.`)

**Build Command:** Not required because this is a static HTML, CSS, and JavaScript application.

## Deployment Process Summary

The SpendWise application was deployed using GitHub and Netlify.

1. Reviewed the project files to ensure that the HTML, CSS, and JavaScript files were organized correctly.
2. Created and maintained a public GitHub repository for the project.
3. Connected the GitHub repository to Netlify.
4. Selected the `main` branch for production deployment.
5. Configured the project root as the publish directory.
6. Deployed the website successfully.
7. Customized the Netlify subdomain to `mart-tracker.netlify.app`.
8. Opened the live website and tested its functionality.

## Continuous Deployment Test

Continuous deployment was tested by making a visible change to the application.

The following steps were completed:

1. Updated the introductory sentence in `index.html`.
2. Saved the change and checked it locally.
3. Committed the update using the message:

   `Test automatic Netlify deployment`

4. Pushed the commit to the GitHub `main` branch.
5. Netlify automatically detected the new commit.
6. Netlify started a new production deployment.
7. The deployment completed successfully with the status **Published**.
8. Refreshed the live website and confirmed that the updated text appeared.

**Continuous Deployment Test Commit:** `88c9639`

This confirmed that changes pushed to GitHub are automatically published through Netlify.

## Final Testing

The live SpendWise application was tested to verify that:

- The website opens using its public Netlify URL.
- The dashboard displays correctly.
- CSS styling loads successfully.
- JavaScript functionality works.
- The Add Expense form accepts new expenses.
- Expense calculations update the available balance.
- Recent spending activity updates correctly.
- The continuous deployment update appears on the live website.

## Challenges Encountered During Deployment

### 1. Incorrect local project directory

The project files were initially in a Downloads folder that was not connected to Git.

**Solution:** Cloned the existing GitHub repository into a separate Git-connected folder and transferred the updated HTML file.

### 2. GitHub authentication error

The first push was rejected because Git was authenticating using a different GitHub account.

**Solution:** Generated an SSH key, added its public key to the correct GitHub account, and verified authentication as `mmulekya`.

### 3. Verifying automatic deployment

It was necessary to confirm that Netlify could detect changes pushed to GitHub.

**Solution:** Made a visible update, pushed it to the `main` branch, and confirmed that Netlify automatically published the new version.

## Lessons Learned

- How to deploy a static website using Netlify.
- How to connect a GitHub repository to a hosting platform.
- How to configure production branches and publish directories.
- How to customize a Netlify subdomain.
- How SSH authentication secures GitHub access.
- How continuous deployment automates website updates.
- Why testing a live application is important after deployment.
- Why clear project documentation and a working live URL are important for collaboration and project evaluation.

## Conclusion

SpendWise was successfully deployed and published using GitHub and Netlify.

The live application is accessible at:

**https://mart-tracker.netlify.app/**

The continuous deployment process was also tested successfully, confirming that updates pushed to GitHub are automatically deployed to the live website.