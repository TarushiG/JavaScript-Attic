const students = [
    {
        "student_id": "001",
        "student_firstname": "John",
        "student_surname": "Doe"
    },
    {
        "student_id": "002",
        "student_firstname": "Jane",
        "student_surname": "Smith"
    },
    {
        "student_id": "003",
        "student_firstname": "Bob",
        "student_surname": "Johnson"
    }
]
//Loop (Imperative Programming)
for(let i=0; i<students.length; i++){
    console.log(students[i].student_id);
}
//.forEach (Functional Programming)
students.forEach((students) => {
    console.log(students.student_id);
});