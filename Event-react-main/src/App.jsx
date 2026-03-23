import React, { useState } from "react";
import StudentForm from "./components/studentForm";
import StudentList from "./components/studentList";

function App() {
  const [studentData, setStudentData] = useState([]);


  function addNewStudent(newStudent) {
    setStudentData([...studentData, newStudent]);
  }


  function deleteStudent(id) {
    setStudentData(studentData.filter((item) => item.id !== id));
  }


  function toggleDetails(id) {
    setStudentData(
      studentData.map((item) =>
        item.id === id ? { ...item, showDetails: !item.showDetails } : item
      )
    );
  }


  function updateAttendance(id, status) {
    setStudentData(
      studentData.map((item) =>
        item.id === id ? { ...item, attendance: status } : item
      )
    );
  }


  return (
    <div>
      <h1>Student Activity Manager</h1>


      <StudentForm addNewStudent={addNewStudent} />


      <StudentList
        studentData={studentData}
        deleteStudent={deleteStudent}
        toggleDetails={toggleDetails}
        updateAttendance={updateAttendance}
      />
    </div>
  );
}

export default App;