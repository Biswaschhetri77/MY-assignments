/* 15. Write a program which can give grades to students according to theirs scores:
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F */

let score = parseInt(prompt("Enter the atudents score:"));
if (score >= 80 && score <=100){
    console.log("A");
}else if (score >= 70 && score <= 89){
    console.log("B");
}else if (score >= 60 && score <= 69){
    console.log("C");
}else if (score >= 50 && score <= 59){
    console.log("D")
}else if (score >= 40 && score <= 0 ){
    console.log("F");
}

let scores = parseInt(prompt("Enter the atudents score:"));
let grade;
switch(true) {
    case scores >=80 && score <=100:
        grade= "A";
        break;
    case scores >=70 && score <= 89:
            grade= "B"
        break;
    case scores >=60 && score <=69:
        grade = "C";
        break;
    case scoress >= 50 && score <= 59:
        grade = "D";
        break;
    case scores >= 40 && score <=0:
        grade = "F";
    break;
    default:
        grade = "INVALID KEYWORD";
    }
    console.log(grade);