n = int(input())  
arr = list(map(int, input().split()))  
result = 'NO' 

for i in range(1, n):
    if arr[i] * arr[i-1] > 0: 
        result = 'YES' 
        break

print(result) 
