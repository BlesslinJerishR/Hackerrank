// without comments
function countingValleys(steps, path) {
    let valleyCount = 0;
    let altitude = 0;   
    for(let i =0; i<steps; i++){
        let char = path.charAt(i);
        if(char === "U"){
            altitude++;
            if(altitude === 0){
                valleyCount++;
            }
        }else{
            altitude--;
        }
    }
    return valleyCount;
}



// with comments
function countingValleys(steps, path) {
    let valleyCounter = 0; // To count the valleys
    let altitude = 0; // To increment altitude in every "U" char, otherwise decrement the altitude

    // To go through every char in the string
    for (let i = 0;  i < steps; i++) {
        let char = str.charAt(i); // To get a char in every cycle

        // Because we are just interested "U" char
        if (char === "U") { // check if the current char in the cycle is equal to "U"

            altitude++; // Increment the altitude if the char is "U"

            if (altitude === 0) { // This is the "key" when altitude is equal to 0 means that 1 valley was completed
                valleyCounter++; // Means that a valley was completed an increment
            }

        } else { // If is other char that not is "U" 
            altitude --; // then the altitude will be decremented
        }
    }

    // Finally when for cycle ends, return the valleyCounter
    return valleyCounter;
}