n = int(input())
a = list(map(int, input().split()))

a = sorted(list(set(a)), reverse=True)

print(a[1])
