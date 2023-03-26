def power(a, n):
    return a ** n
a, n = map(float, input().split())
result = power(a, int(n))
print(result)
