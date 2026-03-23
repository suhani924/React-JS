import React from "react";


function FeedbackCard({ item, onDelete }) {
    return (
        <div style={{ border: "1px solid #aaa", margin: "10px 0", padding: "10px" }}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.category} | {item.priority}</p>
            <p>{item.desc}</p>


            {item.screenshot && (
                <img src={item.screenshot} alt="Screenshot" style={{ maxWidth: "200px" }} />
            )}


            {item.notes && <p><b>Notes:</b> {item.notes}</p>}


            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
}
export default FeedbackCard;