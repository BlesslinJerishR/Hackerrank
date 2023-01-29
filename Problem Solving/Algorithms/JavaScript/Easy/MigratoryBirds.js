function migratoryBirds(arr) {
    // Write your code here
    let one = [], two = [], three = [],four = [], five = [];
    for(let bird=0; bird<arr.length; bird++){
        if(arr[bird] === 1){
            one.push(arr[bird]);
        }else if(arr[bird] === 2){
            two.push(arr[bird]);
        }else if(arr[bird] === 3){
            three.push(arr[bird]);
        }else if(arr[bird] === 4){
            four.push(arr[bird]);
        }else if(arr[bird] === 5){
            five.push(arr[bird]);
        }
    }
    if(one.length >= two.length && one.length >= three.length && one.length >= four.length && one.length >= five.length){
        return one[0];
    }else if(two.length >= one.length && two.length >= three.length && two.length >= four.length && two.length >= five.length){
        return two[0];
    }else if(three.length >= one.length && three.length >= two.length && three.length >= four.length && three.length >= five.length){
        return three[0];
    }else if(four.length >= two.length && four.length >= three.length && four.length >= one.length && four.length >= five.length){
        return four[0];
    }else if(five.length >= two.length && five.length >= three.length && five.length >= four.length && five.length >= one.length){
        return five[0];
    }
}