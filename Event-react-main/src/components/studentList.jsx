import React from "react";
import StudentCard from "./StudentCard";


export default function StudentList({
studentData,
deleteStudent,
toggleDetails,
updateAttendance,
}) {
return (
<>
{studentData.length === 0 ? (
<p>No Students Found</p>
) : (
studentData.map((item) => (
<StudentCard
key={item.id}
student={item}
deleteStudent={deleteStudent}
toggleDetails={toggleDetails}
updateAttendance={updateAttendance}
/>
))
)}
</>
);
}