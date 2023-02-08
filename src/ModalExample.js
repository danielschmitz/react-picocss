import React, { useEffect } from "react"

export default function ModalExample({ show, onClose }) {

    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(false)
        onClose()
    }

    useEffect(() => {
        function handlePropShowChange() {
            setOpen(show)
        }

        handlePropShowChange()
    }, [show])


    return (
        <dialog open={open}>
            <article>
                <h3>Confirm your action!</h3>
                <p>
                    Mauris non nibh vel nisi sollicitudin malesuada.
                    Donec ut sagittis erat. Praesent eu eros felis.
                    Ut consectetur placerat pulvinar.
                </p>
                <footer>
                    <a href="#confirm" role="button" onClick={handleClick}>Confirm</a>
                </footer>
            </article>
        </dialog>
    )

};
