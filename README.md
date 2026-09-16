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


## Week 3  Visual Identity & CSS Design

### Overview

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
