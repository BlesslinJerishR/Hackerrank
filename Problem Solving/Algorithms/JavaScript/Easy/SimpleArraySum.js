function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for(let num=0; num < ar.length; num++){
        sum += ar[num];
    }
    return sum;
}