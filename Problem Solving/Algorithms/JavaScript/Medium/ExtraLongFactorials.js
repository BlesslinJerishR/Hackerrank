function extraLongFactorials(n) {
    // Write your code here
    let fact = BigInt(1);
    // Anything by 1 is already 1, So lets start with 2
    for(let num= 2; num <= n; num++){
        fact *= BigInt(num);
    }
    console.log(fact.toString());
}