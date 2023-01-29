// Bit
function birthday(s, d, m) {
    let result = 0;
    for(let i = 0; i < s.length - (m - 1); i++) {
        if (s.slice(i, i + m).reduce((r, v) => r + v, 0) === d) {
            result++;
        }
    }
    return result;
}