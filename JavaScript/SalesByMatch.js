function sockMerchant(n, ar) {
    var pair = 0;
        ar.sort();
        //console.log(ar.sort());
        for(let i=0; i<n;i++){
            if(ar[i] == ar[i+1]){
                i++;
                pair++;
               }
        }
        // console.log(pair);
    return pair;
}


function sockMerchant(n, ar) {
    // Write your code here
    let pairs = 0;
    ar.sort();
    for(let sock = 0; sock < ar.length; sock++){
        if(ar[sock] === ar[sock + 1]){
            pairs++;
            sock++;
        }
    }
    return pairs;
}

// sockMerchant(10,[
//     1, 1, 1, 2, 2,
//     3, 3, 3, 3, 3
//   ])