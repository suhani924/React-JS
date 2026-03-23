export default function Dashboard({ records, onEdit, onDelete }) {
  const lastRecord = records[records.length - 1];

  return (
    <div className="right-panel">
      {/* ===== STAT CARDS ===== */}
      <div className="dashboard">
        <div className="stat-card">
          <p className="stat-label">Total Records</p>
          <h2 className="stat-value">{records.length}</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">Last Added</p>
          <h2 className="stat-value muted">
            {lastRecord ? lastRecord.name : "—"}
          </h2>
        </div>

        <div className="stat-card highlight">
          <p className="stat-label">Storage</p>
          <h2 className="stat-value">localStorage</h2>
        </div>
      </div>
      
      <div className="card table-card">
        <div className="table-header">
          <h3>User Records</h3>
        </div>

        {records.length === 0 ? (
          <div className="empty-state">No records found</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {records.map((r) => (
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td>{r.city}</td>
                  <td>{r.age}</td>
                  <td className="actions">
                    <button onClick={() => onEdit(r)}>Edit</button>
                    <button className="delete" onClick={() => onDelete(r.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
