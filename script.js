let account_balance;
let cash_balance;
function showInTextArea() {
    account_balance = document.getElementById("account_balance").value
    cash_balance = document.getElementById("cash_balance").value
    cash_balance = parseFloat(cash_balance)
    account_balance = parseFloat(account_balance)
    document.getElementById("textarea").value = "Current Account Balance: " + String(cash_balance) + ", Current Cash Balance: " + String(account_balance);
    console.log("The Program Is working Correctly")
}

function depositWithdraw() {
    const choice = document.getElementById("bankoperation").value
    const amount = document.getElementById("bankoperation_amount").value
    if (choice == "Deposit") {
        cash_balance -= parseFloat(amount)
        account_balance += parseFloat(amount)
        if (cash_balance < 0) {
            cash_balance += parseFloat(amount)
            account_balance -= parseFloat(amount)
            document.getElementById("textarea").value = "Insufficient cash balance, Current Account Balance: " + String(account_balance) + ", Current Cash Balance: " + String(cash_balance);
            return
        }
        document.getElementById("textarea").value = "Current Account Balance: " + String(account_balance) + ", Current cash Balance: " + String(cash_balance);
    }
    else if (choice == "Withdraw") {
        cash_balance += parseFloat(amount)
        account_balance -= parseFloat(amount)
        if (account_balance < 0) {
            account_balance += parseFloat(amount)
            cash_balance -= parseFloat(amount)
            document.getElementById("textarea").value = "Insufficient Account balance, Current Account Balance: " + String(account_balance) + ", Current Cash Balance: " + String(cash_balance);
            return
        }
        document.getElementById("textarea").value = "Current Account Balance: " + String(account_balance) + ", Current cash Balance: " + String(cash_balance);
    }
}