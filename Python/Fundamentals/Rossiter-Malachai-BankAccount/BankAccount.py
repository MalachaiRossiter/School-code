class BankAccount:

    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if (self.balance < 0):
            print("insufficient funds: Charging a $5 fee")
            self.balance -= 5
        self.balance -= amount
        return self

    def display_account_info(self):
        print("Balance: $" + str(self.balance))
        return self

    def yield_interest(self):
        self.balance = self.balance * self.int_rate
        return self

account1 = BankAccount(3.5, 60000)
account2 = BankAccount(7, 40000)

account1.deposit(4).deposit(45).deposit(46).withdraw(25).yield_interest().display_account_info()
account2.deposit(1).deposit(1).withdraw(3).withdraw(6).withdraw(7).withdraw(19191).withdraw(689).yield_interest().display_account_info()