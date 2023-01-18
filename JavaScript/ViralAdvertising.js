function viralAdvertising(n) {
    // Write your code here
    let shared = 5;
    let likes = 0;
    let totalLikes = 0;
    for(let day = 0; day < n; day++){
        likes = Math.floor(shared / 2);
        shared = likes * 3;
        totalLikes += likes;
    }
    return totalLikes
}