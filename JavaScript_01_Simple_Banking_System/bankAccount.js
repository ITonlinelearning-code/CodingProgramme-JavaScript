class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`$${amount} deposited. Current balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`$${amount} withdrawn. Current balance: $${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`Account balance for ${this.accountHolder}: $${this.balance}`);
    }
}

export default BankAccount;
