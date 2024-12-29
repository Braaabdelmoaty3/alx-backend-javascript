export default function updateStudentGradeByCity(array, city, newGrades){
    /* Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade
It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters. */
    // creating a new array the newGrads to array

    const studentFiltering = array.filter(student => array.location === city)
    // filtering the student with the city
    const updateStudent = studentFiltering.map(student => {
        const studentGrad = newGrades.find(gradObj => gradObj.studentId === student.id)
    })
}