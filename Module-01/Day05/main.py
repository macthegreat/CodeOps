class Account:
    def __init__(self):
        self.owner=owner
        self.__balance=balance
        self.account_number=acc_number
    
    
     
    def deposit(self,owner,balance,amount):
         if amount <=0:
             raise ValueError("amount should be greater than zero")
         
         self.__balance +=amount
    def withdraw(self,owner,balance,amount):
        if amount>balance:
            print(f"insefficient balance your current balance is: {balance}")
        else:
            self.__balance -=amount
            print(f"you are successfully withdraw: {amount} and your current balance is {self.__balance}")
    
    def overdraft(self,owner,balance):
        if balance <= 0:
            print(f"your acccount is inactive please deposit to activate your account")   

    
    
class SavingAcoount(Account):
    def __init__(self,rate,add_interest):
        super().__init__()
        
class CurrentAccount(Account):
    def __init__(self):
        super().__init__(self,overdraft,withdraw) 
        
                
almaz=Account("almaz",1500,"1000-0")
biruk=Account("biruk",13874,"1000-1")


print(almaz.owner);



