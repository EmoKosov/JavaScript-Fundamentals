function printStudents(input) {
    let students = {};

    for (const line of input) {
        let studentArr = line.split(' ');
        let name = studentArr.shift();
        let grades = studentArr.map(x => Number(x));

        if (!students[name]) {
            students[name] = [];
        }

        students[name] = students[name].concat(grades);
    }

    let studentsEntries = Object.entries(students);
    let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sortedStudents) {
        let sum = 0;

        for (const grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}


function solve(input) {
    let schoolGrades = {};

    for (let i = 0; i < input.length; i++) {
        let [name, ...grades] = input[i].split(' ');
        let sumOfGrades = grades.reduce((a, b) => a + Number(b), 0);
        let averageGrade = (sumOfGrades / grades.length);

        if (!schoolGrades.hasOwnProperty(name)) {
            schoolGrades[name] = averageGrade;
        }
        else {
            schoolGrades[name] = ((schoolGrades[name] * (grades.length-1) + averageGrade) / grades.length);
        }
    }

    let sortedStudents = Object.entries(schoolGrades).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, averageGrade] of sortedStudents) {
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}


solve(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)


