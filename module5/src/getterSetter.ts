class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected balance: number;
  constructor(userId: number, userName: string, balance: number) {
    this.userId = userId;
    this.userName = userName;
    this.balance = balance;
  }
  //   addBalance(balance: number) {
  //     this.balance += balance;
  //   }
  //setter use kore balance update kora hocche
  set addBalance(balance: number) {
    this.balance += balance;
  }
  //   getBalance() {
  //     return this.balance;
  //   }
  //getter use kore balance return kora hocche
  get getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1, "Alice", 1000);
// account1.addBalance(600);
// console.log(account1.getBalance());
account1.addBalance = 670;
console.log(account1);
