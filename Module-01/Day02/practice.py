def temprature(temp):
    if(temp < 15):
        print("cold")
    elif(temp < 28):
        print("warm")
    else:
        print("hot")        


temprature(54)


def Reciept(start,end):
    for i in range(start,end):
        print(i)
        
Reciept(1,10)


def even_evaluator(num1,num2):
    for i in range(num1,num2):
        if(i%2==0):
            print(i)
            
even_evaluator(1,20)


def apply_discount(price,percent=10):
    discounted_price=price -(price*percent/100)
    return discounted_price


print(apply_discount(1000,20))



def countdown(num):
    for i in range(num,0,-1):
        print(i)
countdown(5)