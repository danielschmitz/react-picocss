import { useState } from "react"

export default function Forms() {

    const [data, setData] = useState({
        firstname: 'Daniel',
        lastname: 'Schmitz',
        email: 'danieljfa@gmail.com',
        agree: false
    })

    const handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        })
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleCheckChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.checked
        })
        setData({ ...data, [e.target.name]: e.target.checked })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return (<form>
        <article>
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

            <label htmlFor="email">
                <input type="checkbox" checked={data.agree} onChange={handleCheckChange} id="agree" name="agree"/>
                Agree with terms?<br/>
            </label>

            <footer style={{display:"flex",justifyContent:"space-between"}}>
                <button className="fixedbutton secondary" type="button" onClick={handleSubmit}>Cancel</button>
                <button className="fixedbutton" type="button" onClick={handleSubmit}>Submit</button>
            </footer>
        </article>
    </form>)
}