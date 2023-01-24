function utopianTree(n) {
    // Write your code here
    let totalHeight = 1;
    for(let height =0; height <n; height++){
        if(totalHeight % 2 == 0){
            totalHeight++;
        }else if(totalHeight % 2 != 0 ){
            totalHeight *= 2;
        }
    }
    return totalHeight;
}
