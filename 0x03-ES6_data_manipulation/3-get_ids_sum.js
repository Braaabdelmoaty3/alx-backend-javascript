/* eslint-disable */
export default function getStudentIdsSum(array){
/*Create a function getStudentIdsSum that returns the sum of all the student ids.*/
    const studentSum = array.reduce((accumulator, student) => {
        return accumulator += student.id;
    }, 0)
    return studentSum
}
