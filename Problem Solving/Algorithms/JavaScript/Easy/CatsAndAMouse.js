function catAndMouse(x, y, z) {
    let catA = Math.abs(z-x);
    let catB = Math.abs(z-y);
    if(catA < catB){
       return "Cat A";
    }else if(catB < catA){
       return "Cat B";
    }else{
        return "Mouse C";
    }
}