import React from "react";

export default function StudentCard({
student,
deleteStudent,
toggleDetails,
updateAttendance,
}) {
return (
<div className="border p-3 mb-3 rounded">
<h2 className="font-semibold text-lg">{student.fullName}</h2>


<div className="flex gap-2 mt-2">
<button
onClick={() => toggleDetails(student.id)}
className="px-3 py-1"
>
Toggle Details
</button>


<button
onClick={() => deleteStudent(student.id)}
className="bg-danger text-white px-3 py-1"
>
Delete
</button>
</div>


{student.showDetails && (
<div className="mt-3 p-2 rounded">
<p>Attendance: {student.attendance}</p>


<div className="flex gap-2 mt-2">
<button
onClick={() => updateAttendance(student.id, "present")}
className="bg-success text-white px-3 py-1"
>
Present
</button>


<button
onClick={() => updateAttendance(student.id, "absent")}
className="bg-warning text-white px-3 py-1"
>
Absent
</button>
</div>
</div>
)}
</div>
);
}