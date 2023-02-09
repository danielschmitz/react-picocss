import { useState } from "react"

export default function Forms() {

    const [data, setData] = useState({
        firstname: 'Daniel',
        lastname: 'Schmitz',
        email: 'danieljfa@gmail.com'
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (<form>
        <div className="grid">
            <label htmlFor="firstname">
                First name
                <input type="text" value={data.firstname} onChange={handleChange} id="firstname" name="firstname" placeholder="First name" required />
            </label>
            <label htmlFor="lastname">
                Last name
                <input type="text" value={data.lastname} onChange={handleChange} id="lastname" name="lastname" placeholder="Last name" required />
            </label>
        </div>

        <label htmlFor="email">Email address
            <input type="email" value={data.email} onChange={handleChange} id="email" name="email" placeholder="Email address" required />
            <small>We'll never share your email with anyone else.</small>
        </label>
               
        <button type="button" onClick={handleSubmit}>Submit</button>
    </form>)
}