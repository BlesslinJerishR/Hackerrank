function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesCount = 0;
    let orangesCount = 0;
    
    for(let apple=0; apple < apples.length; apple++){
        if(a + apples[apple] >= s && a + apples[apple] <= t){
            applesCount++;
        }
    }
    
    for(let orange=0; orange < oranges.length; orange++){
        if(b + oranges[orange] >= s && b + oranges[orange] <= t){
            orangesCount++;
        }
    }
    
    console.log(applesCount);
    console.log(orangesCount);
}