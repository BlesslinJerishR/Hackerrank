function gradingStudents(grades){
    // Write your code here
    let finalGrades = grades.map((grade) =>{
        return grade >= 38 && grade % 5 >= 3 ? grade - (grade %5) + 5: grade;
    });
    return finalGrades;
}

// Without Ternary Operator
function gradingStudents(grades) {
    // Write your code here
    return grades.map((grade) =>{
        if(grade >= 38 && grade % 5 >= 3){
            return grade - grade % 5 + 5;
        }else{
            return grade;   
        }
    })
}