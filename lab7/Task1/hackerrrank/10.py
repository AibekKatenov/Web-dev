import re

t = int(input())

for i in range(t):
    regex = input()
    
    try:
        re.compile(regex)
        print("Valid")
    except re.error:
        print("Invalid")
