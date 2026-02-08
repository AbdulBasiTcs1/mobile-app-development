// Function to calculate average marks :

function calculateAverage(grades){
    let total=0;
    for(let i=0;i<grades.length;i++){
        total=total+grades[i];
    }
    return total/grades.length;
}

// Function to determine letter grades now:
function getLetterGrade(average){
    if(average>=90){
        return "A"
    }else if (average>=80){
        return "B"
    }else if (average>=70){
        return "C"
    }else if (average>=60){
        return "D"
    }else return "F"
}

// Function to generate Student report:
function generateStudentReport(name,grades){
    const average = calculateAverage(grades);
    const letterGrade = getLetterGrade(average);

    console.log(`Student : ${name}`);
    console.log(`Grades : ${grades.join(', ')}`);
    console.log(`Average : ${average.toFixed(2)}`);
    console.log(`Letter Grade: ${letterGrade}`);;

    if(letterGrade==='F'){
        console.log("Status : Failed ");
    }else{
        console.log("Status : Passed");
        
    }
    
    
}

// Now lets  check our work and the code :
generateStudentReport("Abdul Basit",[91,98,91,92,92,90]);
