import React, { useState, useRef } from "react";

function FeedbackForm({ onAdd }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("Bug");
    const [priority, setPriority] = useState("Low");
    const [desc, setDesc] = useState("");
    const screenshotRef = useRef(null);
    const notesRef = useRef(null);


    function handleSubmit(e) {

        e.preventDefault();
        onAdd({
            name,
            email,
            category,
            priority,
            desc,
            screenshot: screenshotRef.current.value,
            notes: notesRef.current.value,
        });


        setName("");
        setEmail("");
        setCategory("Bug");
        setPriority("Low");
        setDesc("");


        screenshotRef.current.value = "";
        notesRef.current.value = "";
    }


    return (
        <form onSubmit={handleSubmit}>
            <h3>Submit Feedback</h3>


            <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br /><br />


            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br /><br />


            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Bug</option>
                <option>Suggestion</option>
                <option>Complaint</option>
                <option>Other</option>
            </select>
            <br /><br />


            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <br /><br />


            <textarea placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <br /><br />


            <input placeholder="Screenshot URL (optional)" ref={screenshotRef} />
            <br /><br />


            <textarea placeholder="Additional Notes" ref={notesRef} />
            <br /><br />


            <button type="submit">Submit</button>
        </form>
    );
}
export default FeedbackForm;