function diagonalDifference(arr) {
    // Write your code here
    let m1 = 0;
    let m2 = 0;
    let mdiff = 0;
    // (0, 0) (0, 1) (0, 2)
    // (1, 0) (1, 1) (1, 2)
    // (2, 0) (2, 1) (2, 2)

    for(let num1 = 0; num1 < arr.length; num1++){
        for(let num2 = 0; num2 < arr.length; num2++){   
            if(num1 === num2 ){
                m1 += arr[num1][num2];
            }
            if(num1 + num2 === arr.length - 1){
                m2 += arr[num1][num2];
            }
        }   
    }
    mdiff = Math.abs(m1-m2);
    return mdiff;
}
