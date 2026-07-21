customers = [
    ("almaz",1500),("betty",1200),("charles",1800),("david",900),("emily",2000)
]
print("hello all")
def tip_calculator(bill_amount, tip_percentage=10):
    if bill < 0:
        return("tip can not be calculated")
    tip=bill + (bill*tip_percentage/100)
    
    return tip

for name,bill in customers:
    calc_tip=tip_calculator(bill)
    print(f"{name} : {calc_tip}")
    
    
    
  
# dictionary
student={
    "name":"mike",
    "age":20,
    "section":"A",
}
    
####

age =5
for i in range(age):
    print (f"IBT is fun")


def tax_calculator(price,percent=15):
    calculated_tax=price+(price*percent/100)
    return calculated_tax


print(tax_calculator(100))

price=int(input("enter the price:"))
def user_input_tax_calc(price):
    calc_tax=price+(price*15/100)
    return calc_tax



print(user_input_tax_calc(price))