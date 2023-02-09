import { useEffect, useState } from "react"
import { validateEmail, validateString, validateTerms } from './validation.js'

export default function FormWithValidator() {

    const [data, setData] = useState({
        firstname: 'Daniel',
        lastname: 'Schmitz',
        email: 'danieljfa@gmail.com',
        agree: false
    })

    const [formErrors, setFormErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        agree: '',
        form: 'valid'
    })

    useEffect(() => {
        const checkErrors = () => {
            const checkError = {
                firstname: validateString(data.firstname, 3, 50),
                lastname: validateString(data.lastname, 3, 50),
                email: validateEmail(data.email),
                agree: validateTerms(data.agree),
                form: 'valid',
            }
            
            if (checkError.firstname || checkError.lastname || checkError.email || checkError.agree) {
                checkError.form = 'invalid'
            }
            
            setFormErrors(checkError)
        }
        checkErrors()
    }, [data])



    const handleChange = (e) => {
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
        console.log(formErrors)
    }

    return (<form>
        <article>
            <div className="grid">
                <label htmlFor="firstname">
                    First name
                    <input type="text"
                        value={data.firstname}
                        onChange={handleChange}
                        id="firstname"
                        name="firstname"
                        placeholder="First name"
                        aria-invalid={formErrors.firstname && 'true'}
                        required />
                    {formErrors.firstname && <small className='error'>{formErrors.firstname}</small>}
                </label>
                <label htmlFor="lastname">
                    Last name
                    <input type="text"
                        value={data.lastname}
                        onChange={handleChange}
                        id="lastname"
                        name="lastname"
                        aria-invalid={formErrors.lastname && 'true'}
                        placeholder="Last name"
                        required />
                    {formErrors.lastname && <small className='error'>{formErrors.lastname}</small>}
                </label>
            </div>

            <label htmlFor="email">Email address
                <input type="email"
                    value={data.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    placeholder="Email address"
                    aria-invalid={formErrors.email && 'true'}
                    required />
                {formErrors.email && <small className='error'>{formErrors.email}</small>}
                <small>We'll never share your email with anyone else.</small>
            </label>

            <label htmlFor="email">
                <input type="checkbox" checked={data.agree} onChange={handleCheckChange} id="agree" name="agree" />
                Agree with terms?
                {formErrors.agree && <span className='error'> {formErrors.agree}</span>}
                <br />
            </label>

            <footer style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="fixedbutton secondary" type="button" onClick={handleSubmit}>Cancel</button>
                <button className="fixedbutton" type="button" onClick={handleSubmit} disabled={formErrors.form === 'invalid'}>Submit</button>
            </footer>
        </article>
    </form>)
}