def isPrime(n): 
    for i in range(2,int(n**0.5)+1):
        if n % i == 0:
            return -1
    return 1
    
def zarmenDeg(prime_func , n):  
    # אם המספר לא ראושני , הפונקציה הנוכחית תסתיים בשורה 10
    if prime_func(n) == -1:
        return -1
    #הגדרתי משתנים , טייפ זה יעני הדרגה וזרמן  לפי ההגדרה ,בהמשך אוכל לשנות את הערכים שלהם 
    typ = 0
    zarmen = (2 * n) + 1
    #לולאת וויל תתקיין כל עוד מה שבסגורים מתקיים
    #בתוך הסוגריים הלולאה כל פעם קוראת לפונקציה החיצונית ובודקת אם זרמן הוא מספר ראשוני
    while(prime_func(zarmen) == 1):
        #אם נכנסנו ללולאה זה אומר שיש לפחות מעלה 1 לזרמן
        zarmen = (zarmen * 2 ) + 1
        typ += 1
    
    if typ == 0:
        return 1
    
    return typ 
        

print(zarmenDeg(isPrime, 7))    
print(zarmenDeg(isPrime, 11)) 
print(zarmenDeg(isPrime, 5))  