import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [form, setForm] = useState({ name: "", mail: "", message: "" })



    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const handleChange = (event) => {
        setForm((prev) => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' value={name}
                    onChange={nameChangeHandler}></input>
            </div>
            <div>
                <label htmlFor='mail'>E-Mail</label>
                <input id='mail' type='text'
                    value={form.mail} onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='message'>Message</label>
                <textarea id='message'
                    value={form.message} onChange={handleChange}></textarea>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default Form