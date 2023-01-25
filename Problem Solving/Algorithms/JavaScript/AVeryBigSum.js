function aVeryBigSum(ar) {
    // Write your code here
    let sum = BigInt(0) ;
    for(let num = 0; num < ar.length; num++){
        sum += BigInt(ar[num]);
    }
    return sum;
}