import React from "react";
import FeedbackCard from "./FeedbackCard";

function FeedbackList({ list, onDelete }) {
    if (list.length === 0) return <p>No feedback yet</p>;


    return (
        <div>
            {list.map((item) => (
                <FeedbackCard key={item.id} item={item} onDelete={onDelete} />
            ))}
        </div>
    );
}
export default FeedbackList;