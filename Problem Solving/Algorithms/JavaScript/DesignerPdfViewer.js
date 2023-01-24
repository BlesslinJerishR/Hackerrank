function designerPdfViewer(h, word) {
    // Write your code here
    let abcd = "abcdefghijklmnopqrstuvwxyz";
    let heights = [];
    for(let letter=0; letter <word.length; letter++){
        heights.push(h[abcd.indexOf(word[letter])]);
    }
    let tallest = Math.max(...heights);
    return tallest * word.length;    
}