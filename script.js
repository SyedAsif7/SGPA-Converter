document.getElementById('calculate').addEventListener('click', calculateSGPA);

function calculateSGPA() {
    const grades = {
        "EX": 10.0,
        "AA": 9.0,
        "AB": 8.5,
        "BB": 8.0,
        "BC": 7.5,
        "CC": 7.0,
        "CD": 6.5,
        "DD": 6.0,
        "DE": 5.5,
        "EE": 5.0,
        "FF": 0.0,
    };

    const subjects = [
        { id: 'sub1', credit: 4 },
        { id: 'sub2', credit: 4 },
        { id: 'sub3', credit: 2 },
        { id: 'sub4', credit: 2 },
        { id: 'sub5', credit: 2 },
        { id: 'sub6', credit: 1 },
        { id: 'sub7', credit: 2 },
        { id: 'sub8', credit: 1 },
        { id: 'sub9', credit: 4 },
        { id: 'sub10', credit: 4 },
        { id: 'sub11', credit: 3 },
        { id: 'sub12', credit: 3 },
        { id: 'sub13', credit: 2 },
        { id: 'sub14', credit: 1 },
        { id: 'sub15', credit: 1 },
        { id: 'sub16', credit: 1 },
    ];

    let totalGradePoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
        const grade = document.getElementById(subject.id).value.toUpperCase();
        const gradePoint = grades[grade] || 0;
        const credit = subject.credit;

        totalGradePoints += gradePoint * credit;
        totalCredits += credit;
    });

    const sgpa = (totalGradePoints / totalCredits).toFixed(2);
    document.getElementById('sgpaResult').textContent = `SGPA: ${sgpa}`;
}
