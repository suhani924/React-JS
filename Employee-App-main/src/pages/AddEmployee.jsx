import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEmp() {
  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    eid: "",
    ename: "",
    email: "",
    ephone: "",
    status: "",
    department: "",
    designation: "",
    salary: "",
    image: "",
  });

  const [employee, setEmployee] = useState(() => {
    const saved = localStorage.getItem("MyData");
    return JSON.parse(saved) || [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("MyData", JSON.stringify(employee));
  }, [employee]);

  useEffect(() => {
    const editEmp = JSON.parse(localStorage.getItem("editEmp"));
    const index = localStorage.getItem("editIndex");

    if (editEmp && index !== null) {
      setEmp(editEmp);
      setEditIndex(index);
    }
  }, []);

  function handleChange(e) {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setEmp((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  }

  function validate() {
    let newError = {};

    if (!emp.eid.trim()) newError.eid = "Employee ID is required";
    if (!emp.ename.trim()) newError.ename = "Name is required";
    else if (emp.ename.length < 3)
      newError.ename = "Name must be at least 3 characters";

    if (!emp.email.trim()) newError.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(emp.email))
      newError.email = "Invalid email format";

    if (!emp.ephone.trim()) newError.ephone = "Phone is required";
    else if (!/^\d{10}$/.test(emp.ephone))
      newError.ephone = "Phone must be 10 digits";

    if (!emp.status) newError.status = "Status required";
    if (!emp.department.trim()) newError.department = "Department required";
    if (!emp.designation.trim()) newError.designation = "Designation required";
    if (!emp.salary) newError.salary = "Salary required";

    setErrors(newError);
    return Object.keys(newError).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    if (editIndex !== null) {
      const updated = [...employee];
      updated[editIndex] = emp;
      setEmployee(updated);

      localStorage.removeItem("editEmp");
      localStorage.removeItem("editIndex");
    } else {
      setEmployee((prev) => [...prev, emp]);
    }

    setEmp({
      eid: "",
      ename: "",
      email: "",
      ephone: "",
      status: "",
      department: "",
      designation: "",
      salary: "",
      image: "",
    });

    setErrors({});
    navigate("/view");
  }

  return (
    <>
      <h1 className="title">
        {editIndex !== null ? "Edit Employee" : "Add Employee"}
      </h1>

      <form className="form grid-form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Employee ID</label>
          <input
            name="eid"
            placeholder="EMP001"
            value={emp.eid}
            onChange={handleChange}
            disabled={editIndex !== null}
          />
        </div>

        <div className="field">
          <label>Employee Name</label>
          <input
            name="ename"
            placeholder="Enter full name"
            value={emp.ename}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@company.com"
            value={emp.email}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Phone</label>
          <input
            name="ephone"
            placeholder="10-digit mobile number"
            value={emp.ephone}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Status</label>
          <select name="status" value={emp.status} onChange={handleChange}>
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="field">
          <label>Department</label>
          <input
            name="department"
            placeholder="IT / HR / Finance"
            value={emp.department}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Designation</label>
          <input
            name="designation"
            placeholder="Developer / Manager"
            value={emp.designation}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            placeholder="Monthly salary"
            value={emp.salary}
            onChange={handleChange}
          />
        </div>

        {/* FULL WIDTH */}
        <div className="field full">
          <label>Employee Image</label>
          <input type="file" accept="image/*" onChange={handleImage} />

          {emp.image && (
            <img src={emp.image} alt="preview" className="preview-img" />
          )}
        </div>

        <button className="btn full" type="submit">
          {editIndex !== null ? "Update Employee" : "Add Employee"}
        </button>
      </form>
    </>
  );
}
