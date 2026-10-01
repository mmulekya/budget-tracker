
// SpendWise - JavaScript Foundation

// 1. Application variables
let budget = 50000;
let expenses = 15000;

// 2. Collect user input
const budgetInput = prompt("Enter your monthly budget:", budget);
const expensesInput = prompt("Enter your total expenses:", expenses);

// Convert user input from text to numbers
const enteredBudget = Number(budgetInput);
const enteredExpenses = Number(expensesInput);

// Use valid user input when provided
if (Number.isFinite(enteredBudget) && enteredBudget >= 0) {
    budget = enteredBudget;
}

if (Number.isFinite(enteredExpenses) && enteredExpenses >= 0) {
    expenses = enteredExpenses;
}

// 3. Budget calculation function
function calculateBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}

// 4. Reusable function for displaying the budget summary
function displayBudgetSummary(budgetAmount, expenseAmount) {
    const remainingBalance = calculateBalance(
        budgetAmount,
        expenseAmount
    );

    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Budget: KSh " + budgetAmount);
    console.log("Total Expenses: KSh " + expenseAmount);
    console.log("Remaining Balance: KSh " + remainingBalance);

    if (remainingBalance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }
}

// 5. Display the calculated results
displayBudgetSummary(budget, expenses);
