function gradingStudents(grades){
    let finalGrades = grades.map((grade) =>{
        return grade >= 38 && grade % 5 >= 3 ? grade - (grade %5) + 5: grade;
    });
    return finalGrades;
}
