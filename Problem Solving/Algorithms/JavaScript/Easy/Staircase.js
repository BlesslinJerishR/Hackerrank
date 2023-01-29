function staircase(n) {
    // Write your code here
    var stairs = "";
    for(let stair = 1; stair < n+1; stair++ ){
        stairs += Array(n-stair).fill(" ").join("");
        stairs += Array(stair).fill("#").join("");
        console.log(stairs);
        stairs = "";
    }
}
