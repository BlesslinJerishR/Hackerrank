function birthdayCakeCandles(candles) {
    // Write your code here
    let tallCandles = 0;
    let tallCandle = Math.max(...candles)    
    for(let candle of candles){
        if(candle === tallCandle){
            tallCandles++;
        }
    }
    return tallCandles;
}
