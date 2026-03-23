import React, { useRef, useState } from "react";

function StudentForm({ addNewStudent }) {
const nameInputRef = useRef(null);
const [errorMsg, setErrorMsg] = useState("");


function submitHandler(e) {
e.preventDefault();


const enteredName = nameInputRef.current.value.trim();


if (enteredName === "") {
setErrorMsg("Please enter a valid name.");
nameInputRef.current.focus();
return;
}


const newStudent = {
id: Date.now(),
fullName: enteredName,
attendance: "none",
showDetails: false,
};


addNewStudent(newStudent);
setErrorMsg("");
nameInputRef.current.value = "";
nameInputRef.current.focus();
}


return (
<>
<form onSubmit={submitHandler} className="mb-4">
<input
ref={nameInputRef}
type="text"
placeholder="Enter student name..."
className="border p-2 w-full"
/>
<button className="px-4 py-2 mt-2">
Add Student
</button>
</form>


{errorMsg && <p className="text-danger text-sm">{errorMsg}</p>}
</>
);
}

export default StudentForm;