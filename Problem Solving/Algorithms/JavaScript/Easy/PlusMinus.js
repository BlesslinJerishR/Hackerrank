function plusMinus(arr) {
    // Write your code here
    let total = arr.length;
    let pos = 0, neg = 0, zero = 0;
    let rpos = 0, rneg = 0, rzero = 0;
    
    for(let num = 0; num < total; num++){
        if(Math.sign(arr[num]) === 1){
            pos++;
        }
        if(Math.sign(arr[num]) === -1){
            neg++;
        }
        if(Math.sign(arr[num]) === 0){
            zero++;
        }
    }
    rpos = (pos/total).toFixed(6);
    rneg = (neg/total).toFixed(6);
    rzero = (zero/total).toFixed(6);
    
    console.log(rpos);
    console.log(rneg);
    console.log(rzero);
}


// or

function plusMinus(arr) {
    let positive = arr.filter(number => number > 0).length / arr.length;
    let negative = arr.filter(number => number < 0).length / arr.length;;
    let zeronums = arr.filter(number => number == 0).length / arr.length;;
    return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))
}