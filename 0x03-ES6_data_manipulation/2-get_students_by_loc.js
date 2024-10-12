/* eslint-disable */
export default function getStudentsByLocation(array, city){
    /*
    * Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.
    */
   const getStudentCity = array.filter(student => student.location === city)
   return getStudentCity
}
