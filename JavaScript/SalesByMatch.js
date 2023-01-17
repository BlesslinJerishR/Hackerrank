function sockMerchant(n, ar) {
    var pair = 0;
        ar.sort();
        console.log(ar.sort());
        for(let i=0; i<n;i++){
            if(ar[i] == ar[i+1]){
                i++;
                pair++;
               }
        }
        // console.log(pair);
    return pair;
}

// sockMerchant(10,[
//     1, 1, 1, 2, 2,
//     3, 3, 3, 3, 3
//   ])