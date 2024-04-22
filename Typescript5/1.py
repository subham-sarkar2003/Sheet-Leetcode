
def ofcarry(a,b):

    result =""
    i,j,carry = len(a) -1, len(b)-1 , 0

    while i>=0 or j>=0 or carry >0:

        d1 = int(a[i]) if i>=0 else 0

        d2= int(b[j]) if j>=0 else 0

        sum = d1+d2+carry

        result = str(sum%2) + result

        carry = sum//2

        i -= 1
        j -= 1
    
    return result 

a="1011"
b="110"
print(ofcarry(a,b))



