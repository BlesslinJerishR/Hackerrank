function miniMaxSum(arr) {
    // Write your code here
    let min = 0;
    let max = 0;
    arr.sort();
    for(let num =0; num < arr.length; num++){        
        if(num === 0){
            min += arr[num]
            continue
        }if(num === arr.length - 1){
            max += arr[num]
            continue   
        }else{
            min += arr[num];
            max += arr[num];
        }       
    }
    console.log(min, max);
}