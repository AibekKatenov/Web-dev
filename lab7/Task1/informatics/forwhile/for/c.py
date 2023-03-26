import math

a = int(input())
b = int(input())

start = math.ceil(math.sqrt(a))

for i in range(start, b+1):
    if i**2 <= b:
        print(i**2)
    else:
        break
