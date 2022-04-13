def isPrime(n): 
    for i in range(2,int(n**0.5)+1):
        if n % i == 0:
            return -1
    return 1
    
def zarmenDeg(prime_func , n):  

    if prime_func(n) == -1:
        return -1

    typ = 0
    zarmen = (2 * n) + 1

    while(prime_func(zarmen) == 1):

        zarmen = (zarmen * 2 ) + 1
        typ += 1
    
    if typ == 0:
        return 1
    
    return typ 
        

print(zarmenDeg(isPrime, 7))    
print(zarmenDeg(isPrime, 11)) 
print(zarmenDeg(isPrime, 5))  