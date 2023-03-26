def xor(x, y):
    return (x and not y) or (not x and y)

 
a,b = map(int, input().split())
print(xor(a,b))