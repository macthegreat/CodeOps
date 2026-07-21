class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance
    @property
    def balance(self):
        return self.__balance
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self.__balance += amount
    
    #TODO: withdraw(amount) — reject overdrafts
beza=Account(1200)
beza.balance=-1

    # TODO: statement() — print owner, number, balance
print(f"{beza.owner} wit account number {beza.account_number} has {beza.balance}")