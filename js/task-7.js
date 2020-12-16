const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const newTransaction = {};
    const numberOfTransactions = this.transactions.length;
    newTransaction.id = numberOfTransactions + 1;
    newTransaction.amount = amount;
    newTransaction.type = type;
    return newTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance = this.balance + amount;
    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(newTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      let message = "Not enough money to perform the transaction";
      return message;
    }

    this.balance = this.balance - amount;
    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(newTransaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) {
        return item;
      }
    }
    const message = "No transaction found.";
    return message;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        total += item.amount;
      }
    }
    return total;
  },
};

console.log(account.withdraw(100));
console.log(account.getBalance());
console.log(account.deposit(100));
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(5));
