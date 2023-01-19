function hurdleRace(k, height) {
    // Write your code here
    let magicPotions = 0;
    if(k > Math.max(...height)){
        return 0;
    }else{
        magicPotions = Math.max(...height) - k;
    }
    return magicPotions;
}
