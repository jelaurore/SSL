class Grader {
constructor() {
    this.studentName = '';
    this.studentGrade = '';
    this.assignmentName = '';
}
get gradeStudent() {
    this.propmtStudentData();
    
}

setAttributes(res){
    const grade = this.matchGrade(Number(res.grade)) || 'invalid';
    console.log("Student grade is: "+ grade);
    return grade;
}

matchGrade(g){

    try {
        if(g >= 90 && g <= 100)
    {
        return 'A';
    }
    else if(g >= 80 && g <= 89){
        return 'B';
    }
    else if(g >= 70 && g <= 79){
        return 'C';
    }
    else if(g >= 60 && g <= 69){
        return 'D';
    }
    else if(g < 60){
        return 'F';
    }
    else{
        throw "Invalid score";
    }
    }
    catch (e) {
        console.log(e);
    }

    
}

propmtStudentData() {
    let res = {};
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("What is the student name ? ", function(name) {
        rl.question("What is the assignment name ? ", function(assignment) {
            rl.question("Enter student score: ", function(grade) {
            
            res = {name, assignment, grade};
            console.log(`Student's name: ${name}, assignment name ${assignment}:`);
            rl.close();
        });
        });
    });

    rl.on("close", function() {
        Grader.prototype.setAttributes(res);
        process.exit(0);
    });
    
}


}

const grader = new Grader();

console.log(grader.gradeStudent); 