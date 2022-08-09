class User:
    def __init__(self, nameFirst, nameLast, email, age):
        self.first_name = nameFirst
        self.last_name = nameLast
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
        self.account = BankAccount(int_rate= 3, balance= 299)

    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_rewards_member)
        print(self.gold_card_points)

    def enroll(self):
        self.is_rewards_member = True
        self.gold_card_points = 200
        return self

    def spend_points(self,amount):
        self.gold_card_points -= amount
        return self

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


bob = User("Bob", "Pinapple", "bob.pinapple@gmail.com", 69)
pob = User("Yo Momma", "Someone", "yomomma@gmail.com", 420)

bob.account.deposit(300).withdraw(3).display_account_info()