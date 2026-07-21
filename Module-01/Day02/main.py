customers = [
    ("almaz",1500),("betty",1200),("charles",1800),("david",900),("emily",2000)
]

def generate_report(balance):
    if balance >= 1000:
        return "premium"
    elif balance >= 500:
        return "standard"
    else:
        return "basic"
    
for name, balance in customers:
     report = generate_report(balance)
     print(f"{name}: {report} ({balance} ETB)")