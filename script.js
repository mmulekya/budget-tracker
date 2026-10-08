// SpendWise - Interactive JavaScript

// ========================================
// 1. Application data
// ========================================

let budget = 50000;

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
    },
    {
        name: "Electricity Bill",
        category: "Utilities",
        amount: 1250
    }
];


// ========================================
// 2. Select HTML elements
// ========================================

const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseAmountInput = document.getElementById("expense-amount");

const balanceDisplay = document.getElementById("balance-display");
const expenseList = document.getElementById("expense-list");
const expenseCount = document.getElementById("expense-count");


// ========================================
// 3. Calculate total expenses
// ========================================

function calculateTotalExpenses() {

    let total = 0;

    // Loop through all expense records
    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}


// ========================================
// 4. Calculate remaining balance
// ========================================

function calculateBalance() {

    const totalExpenses = calculateTotalExpenses();

    return budget - totalExpenses;
}


// ========================================
// 5. Make a budget decision
// ========================================

function getBudgetStatus(balance) {

    if (balance > 0) {

        return "You are within your budget.";

    } else if (balance === 0) {

        return "You have reached your budget limit.";

    } else {

        return "You have exceeded your budget.";
    }
}


// ========================================
// 6. Update the dashboard
// ========================================

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = calculateBalance();

    // Update available balance
    balanceDisplay.textContent =
        `KSh ${remainingBalance.toLocaleString()}`;

    // Update number of expenses
    expenseCount.textContent =
        `${expenses.length} expenses tracked`;

    // Clear existing expense records
    expenseList.innerHTML = "";

    // Loop through the array and display expenses
    for (let expense of expenses) {

        const item = document.createElement("div");

        item.className = "activity-item";

        item.innerHTML = `
            <span>${expense.category}</span>

            <div>
                <strong>${expense.name}</strong>
                <small>${expense.category} · This month</small>
            </div>

            <b>- KSh ${expense.amount.toLocaleString()}</b>
        `;

        expenseList.appendChild(item);
    }

    // Display budget decision in the browser console
    console.log("===== SpendWise Budget Status =====");
    console.log("Monthly Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + totalExpenses);
    console.log("Remaining Balance: KSh " + remainingBalance);
    console.log("Status: " + getBudgetStatus(remainingBalance));
}


// ========================================
// 7. Handle user interaction
// ========================================

expenseForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const category = expenseCategoryInput.value;
    const amount = Number(expenseAmountInput.value);

    // Validate user input
    if (
        name === "" ||
        category === "" ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {

        alert("Please enter a valid expense.");

        return;
    }

    // Add the new record to the array
    expenses.push({
        name: name,
        category: category,
        amount: amount
    });

    // Clear the form
    expenseForm.reset();

    // Update the dashboard
    updateDashboard();
});


// ========================================
// 8. Initial dashboard update
// ========================================

updateDashboard();

