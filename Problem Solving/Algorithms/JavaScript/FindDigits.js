function findDigits(n) {
    // Write your code here
    let d = 0;
    let nums = n.toString();
    for(let num=0; num < nums.length; num++){
        if(nums[num] != 0 && n % nums[num] === 0){
            d++;
        }
    }
    return d;
}