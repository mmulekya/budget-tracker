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
