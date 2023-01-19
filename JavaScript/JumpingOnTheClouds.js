function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    let clouds = 0;    
    while(clouds < c.length - 1){
        if(c[clouds + 2] === 0){
            clouds += 2;
        }else{
            clouds++;
        }
        jumps++;
    }
    return jumps;
}