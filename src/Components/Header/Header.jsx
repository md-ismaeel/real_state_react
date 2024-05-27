import React from 'react'

export const Header = () => {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = () => {

    }
    return (
        <div>
            <form>
                <input type='number' placeholder='' value={input} onChange={handleChange} />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}

