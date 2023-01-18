function breakingRecords(scores) {
    // Write your code here
    let highScore = scores[0], lowScore = scores[0], highCount =0, lowCount = 0;
    
    for(let i=1; i < scores.length; i++){
        if(scores[i] > highScore){
            highScore = scores[i];
            highCount++;
        }else if(scores[i] < lowScore){
            lowScore = scores[i];
            lowCount++;
        }
    }
    return [highCount, lowCount];
}