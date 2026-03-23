import { useEffect, useState } from "react";
import RecordForm from "./components/RecordForm";
import Dashboard from "./components/Dashboard";

const STORAGE_KEY = "localbox_records";

export default function App() {
  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setRecords(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [records]);

  function addRecord(record) {
    setRecords([...records, record]);
  }

  function updateRecord(updated) {
    setRecords(records.map((r) => (r.id === updated.id ? updated : r)));
    setEditRecord(null);
  }

  function deleteRecord(id) {
    setRecords(records.filter((r) => r.id !== id));
  }

  function clearAllRecords() {
    if (confirm("Are you sure you want to clear all records?")) {
      setRecords([]);
    }
  }

  return (
    <div className="app">
      <h1>📦 LocalBox Miner</h1>

      <div className="top-layout">
        <RecordForm
          addRecord={addRecord}
          editRecord={editRecord}
          updateRecord={updateRecord}
        />

        <Dashboard
          records={records}
          onEdit={setEditRecord}
          onDelete={deleteRecord}
        />
      </div>

    </div>
  );
}
