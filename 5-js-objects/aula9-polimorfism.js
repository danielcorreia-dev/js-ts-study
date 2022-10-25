// Super Class
function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function (value) {
  if (value > this.balance) {
    console.log('Insufficient Balance');
    this.balance.toFixed(2);
    return;
  }

  this.balance -= value;
};

Account.prototype.deposit = function (value) {
  this.balance += value;
};

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

function CurrentAccount(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}

CurrentAccount.prototype.withdraw = function (value) {
  if (value > this.value + this.limit) {
    console.log('Insusifficent Balance');
    return;
  }
  this.balance -= value;
  return;
};

const cc = new CurrentAccount(11,22, 0, 100);
cc.withdraw(90);
console.log(cc)

function SavingsAccount(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

sa1 = new SavingsAccount(123, 23124, 1000, 400);
console.log(sa1);
sa1.withdraw(1000);
console.log(sa1);
