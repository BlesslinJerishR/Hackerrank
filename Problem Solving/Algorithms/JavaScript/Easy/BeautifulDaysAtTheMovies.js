function beautifulDays(i, j, k) {
    // Write your code here
    let bdays = 0;
    for(let day = i; day <= j; day++){
        let dayReverse = day.toString().split('').reverse().join('');
        let bdaysAlgo = Math.abs((day - dayReverse) / k); 
        if(Number.isInteger(bdaysAlgo)){
            bdays++;
        }
    }
    return bdays;
}