function compareTriplets(a, b) {
    let aliceP = 0;
    let bobP = 0;
    for(let point = 0; point < a.length; point++){
        if(a[point] > b[point]){
            aliceP++;
        }else if(b[point] > a[point]){
            bobP++;
        }else if(b[point] == a[point]){
            continue;
        }
    }
    return [aliceP,bobP];
}
