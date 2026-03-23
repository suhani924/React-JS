import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("MyData");
    setEmployees(JSON.parse(saved) || []);
  }, []);

  function editEmployee(index) {
    localStorage.setItem("editEmp", JSON.stringify(employees[index]));
    localStorage.setItem("editIndex", index);
    navigate("/add");
  }

  function deleteEmployee(index) {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
    localStorage.setItem("MyData", JSON.stringify(updated));
  }

  return (
    <div className="container">
      <h1 className="title">Employees</h1>

      {employees.length === 0 ? (
        <p className="empty">No employees found</p>
      ) : (
        <div className="card-grid">
          {employees.map((emp, index) => (
            <div className="emp-card" key={index}>
              <img
                src={emp.image || "https://via.placeholder.com/100"}
                alt="Employee"
                className="card-img"
              />

              <h3>{emp.ename}</h3>
              <p><strong>ID:</strong> {emp.eid}</p>
              <p><strong>Email:</strong> {emp.email}</p>
              <p><strong>Phone:</strong> {emp.ephone}</p>
              <p><strong>Status:</strong> {emp.status}</p>
              <p><strong>Department:</strong> {emp.department}</p>
              <p><strong>Designation:</strong> {emp.designation}</p>
              <p className="salary">₹ {emp.salary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
