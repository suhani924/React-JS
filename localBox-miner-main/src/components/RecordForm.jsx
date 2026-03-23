import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  city: "",
  notes: "",
};

export default function RecordForm({ addRecord, editRecord, updateRecord }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  // Load data when editing
  useEffect(() => {
    if (editRecord) {
      setForm(editRecord);
    } else {
      setForm(initialForm);
    }
  }, [editRecord]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, phone, age, gender, city } = form;

    if (!name || !email || !phone || !age || !gender || !city) {
      setError("All required fields must be filled");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits");
      return;
    }

    if (age < 1 || age > 120) {
      setError("Enter valid age");
      return;
    }

    if (editRecord) {
      updateRecord(form);
    } else {
      addRecord({
        ...form,
        id: Date.now(),
        createdAt: new Date().toLocaleString(),
      });
    }

    setForm(initialForm);
  }

  return (
    <form className="card form-grid" onSubmit={handleSubmit}>
      <h2 className="full">
        {editRecord ? "Update User" : "Add User"}
      </h2>

      {error && <p className="error full">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address *"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number *"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age *"
        value={form.age}
        onChange={handleChange}
      />

      <div className="radio-group full">
        <label>Gender:</label>
        {["Male", "Female", "Other"].map(g => (
          <label key={g}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={form.gender === g}
              onChange={handleChange}
            />
            {g}
          </label>
        ))}
      </div>

      <select name="city" value={form.city} onChange={handleChange}>
        <option value="">Select City *</option>
        <option>Ahmedabad</option>
        <option>Surat</option>
        <option>Mumbai</option>
        <option>Delhi</option>
      </select>

      <div></div>

      <textarea
        className="full"
        name="notes"
        placeholder="Notes"
        value={form.notes}
        onChange={handleChange}
      />

      <button className="full">
        {editRecord ? "Update User" : "Save User"}
      </button>
    </form>
  );
}