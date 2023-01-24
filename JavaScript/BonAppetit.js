function bonAppetit(bill, k, b) {
    // Write your code here
    let chargedBill = 0

    for (let cost = 0; cost < bill.length; cost++) {
        if(cost !== k){
            chargedBill += bill[cost]
        }
    }
    
    if ((chargedBill / 2) != b) {
        let balance = Math.abs(b - (chargedBill / 2))
        console.log(balance)
    } else if((chargedBill / 2) == b) {
        console.log("Bon Appetit")        
    }
}