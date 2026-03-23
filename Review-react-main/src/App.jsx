import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";


function App() {
  const [data, setData] = useState([]);


  function handleAdd(item) {
    setData((prev) => [{ id: Date.now(), ...item }, ...prev]);
  }


  function handleDelete(id) {
    setData((prev) => prev.filter((x) => x.id !== id));
  }


  return (
    <div>
      <h1>Customer Feedback System</h1>


      <FeedbackForm onAdd={handleAdd} />


      <h2>Submitted Feedback</h2>
      <FeedbackList list={data} onDelete={handleDelete} />
    </div>
  );
}

export default App;