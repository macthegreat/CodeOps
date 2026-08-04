def binary_search(accounts, account_number):
    left = 0
    right = len(accounts) - 1

    while left <= right:
        mid = (left + right) // 2

        if accounts[mid].number == account_number:
            return accounts[mid]

        elif accounts[mid].number < account_number:
            left = mid + 1

        else:
            right = mid - 1

    return None

def find_by_number(self, account_number):
    sorted_accounts = sorted(
        self.accounts,
        key=lambda account: account.number
    )

    return binary_search(sorted_accounts, account_number)


# account = registry.find_by_number("1003")

# if account:
#     print(account.owner)

def total_transactions(transactions):
    if len(transactions) == 0:
        return 0

    return transactions[0] + total_transactions(transactions[1:])

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