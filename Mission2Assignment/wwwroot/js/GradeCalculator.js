$("#calcbtn").click(function () {

    var calcGrade = (($("#assignment").val()) * .55) + (($("#groupProject").val()) * .05) + (($("#quizzes").val()) * .10) +
        (($("#exams").val()) * .20) + (($("#intex").val()) * .10);
   

    var letterGrade = '';

    if (calcGrade >= 94)
        letterGrade = 'A';
    else if (calcGrade >= 90)
        letterGrade = 'A-';
    else if (calcGrade >= 87)
        letterGrade = 'B+';
    else if (calcGrade >= 84)
        letterGrade = 'B';
    else if (calcGrade >= 80)
        letterGrade = 'B-';
    else if (calcGrade >= 77)
        letterGrade = 'C+';
    else if (calcGrade >= 74)
        letterGrade = 'C';
    else if (calcGrade >= 70)
        letterGrade = 'C-';
    else if (calcGrade >= 67)
        letterGrade = 'D+';
    else if (calcGrade >= 64)
        letterGrade = 'D';
    else if (calcGrade >= 60)
        letterGrade = 'D-';
    else
        letterGrade = 'E';

    alert("Calculated Grade: " + Math.round(calcGrade) + "%" + "\nLetter Grade: " + letterGrade);


})