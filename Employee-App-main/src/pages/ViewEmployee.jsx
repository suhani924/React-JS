import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewEmp() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("MyData");
    setEmployees(JSON.parse(saved) || []);
  }, []);

  function deleteEmployee(index) {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
    localStorage.setItem("MyData", JSON.stringify(updated));
  }

  function editEmployee(index) {
    const empToEdit = employees[index];
    localStorage.setItem("editEmp", JSON.stringify(empToEdit));
    localStorage.setItem("editIndex", index);
    navigate("/add");
  }

  return (
    <>
      <h1 className="title">Employee List</h1>

      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.eid}</td>

                <td>
                  {emp.image ? (
                    <img
                      src={emp.image}
                      alt="Employee"
                      className="emp-img"
                      style={{width: "50px"}}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>

                <td>{emp.ename}</td>
                <td>{emp.email}</td>
                <td>{emp.ephone}</td>
                <td>{emp.status}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>₹ {emp.salary}</td>

                <td className="actions">
                  <button onClick={() => editEmployee(index)} style={{marginBottom:"13px", padding:"5px 10px"}} className="edit-btn">Edit</button>
                  <button onClick={() => deleteEmployee(index)} style={{marginBottom:"13px"}} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
