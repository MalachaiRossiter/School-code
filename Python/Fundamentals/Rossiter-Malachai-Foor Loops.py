for i in range (151):
    print(i)
for i in range (5,1005,5):
    print(i)
for i in range (101):
    if (i % 5 == 0):
        if (i % 10 == 0):
            print("CodingDojo")
        else:
            print("Coding")
    else:
        print(i)
v = 0
for i in range (500001):
    if (i % 2 != 0):
        v += i
print (v)
for i in range (2018, 0, -4):
    print(i)
lowNum = 32
highNum = 69
mult = 4
for i in range(lowNum, highNum):
    if (i % mult == 0):
        print (i)