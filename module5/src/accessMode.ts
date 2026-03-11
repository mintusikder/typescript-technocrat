class BankAccount {
 public readonly userId: number;
 public userName: string;
 protected balance: number;
  constructor(userId: number, userName: string, balance: number) {
    this.userId = userId;
    this.userName = userName;
    this.balance = balance;
  }
  addBalance(balance: number) {
    this.balance += balance;
  }
}

const StudentBankAccount = class extends BankAccount {
    constructor(userId: number, userName: string, balance: number) {
        super(userId, userName, balance);
    }
}

const account1 = new BankAccount(1, "Alice", 1000);
account1.addBalance(600);
console.log(account1);
