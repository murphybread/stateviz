import React from "react";


const students = [
    {   id: 1,
        Name: "Alice",
    },
    {
        id: 2,
        Name: "Brian",
    },
    {
        id: 3,
        Name: "Cathy",
    },



];


function AttendanceBook(props){
    return(
        <ul>
            {students.map((student) =>{
               return <li key={student.id}> {student.Name}</li>;
            })}

        </ul>
    )

}

export default AttendanceBook;