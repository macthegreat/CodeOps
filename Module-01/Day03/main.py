customers={}

try:
  with open("/Users/administrator/Documents/IBT/Module-01/Day03/transaction.txt") as file:
     for line in file:
         line=line.split(",")
         
except FileNotFoundError:
     print("file not found")
    

with open("transaction.txt") as f:
    text=f.read()