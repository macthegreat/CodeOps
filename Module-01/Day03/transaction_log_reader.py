# Telebirr Tip Calculator
#1. read transaction.txt line by line(name,amount per line)
#2.build a dictionary mapping each customer to their total spend
#3. print each customer and total, sorted highest to lowest
#4.wrap the file read in try / except for a missing file
#5.write summary to report.txt 

customers={}

try:
  with open("/Users/administrator/Documents/IBT/Module-01/Day03/transaction.txt") as file:
     for line in file:
         line=line.split(",")
         
except FileNotFoundError:
     print("file not found")
    

with open("transaction.txt") as f:
    text=f.read()