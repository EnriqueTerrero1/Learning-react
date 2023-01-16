import { useState } from "react"

export default function MyForm() {

    const [inputs, setInputs] = useState({})

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:</label>
                <input
                    type="text"
                    name="username"
                    value={inputs.username || " "}
                    onChange={handleChange}
                ></input>
                <label>Enter your age:</label>
                <input
                    type="number"
                    name="age"
                    value={inputs.age || " "}
                    onChange={handleChange}
                ></input>
                <input type="submit"></input>
            </form>
        </>
    )
}