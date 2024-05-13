import BankAccount from './bankAccount.js';

// Create instances of BankAccount
const account1 = new BankAccount(123456, 'John Doe');
const account2 = new BankAccount(789012, 'Jane Smith', 1000);

// Deposit money
account1.deposit(500);
account2.deposit(200);

// Withdraw money
account1.withdraw(200);
account2.withdraw(300);

// Check balances
account1.checkBalance();
account2.checkBalance();
