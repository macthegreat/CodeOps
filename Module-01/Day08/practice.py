def account_total_transactions(self, account_number):
    account = self.find_by_number(account_number)

    if account is None:
        return None

    return total_transactions(account.transactions)


registry.add(Account("1001", "Alice", 5400))
registry.add(Account("1002", "Bob", 1200))
registry.add(Account("1003", "Charlie", 9800))
registry.add(Account("1004", "David", 7200))

registry.find_by_number("1003").transactions = [100, -40, 500, -10]