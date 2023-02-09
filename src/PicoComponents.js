import Buttons from './Buttons'
import Forms from './Forms'
import GridSystem from './GridSystem'
import ModalExample from './ModalExample'
import NavExample from './NavExample'
import { useState } from 'react'

export default function PicoComponents(params) {
    const [modal, showModal] = useState(false)

    const handleClick = () => {
        showModal(true)
    }

    const handleClose = () => {
        showModal(false)
    }

    return <>
        <header class="m-10">
            <NavExample />
        </header>
        <main class="container">
            <article class="p-0">
                <nav aria-label="breadcrumb" class="pl-10">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Category</a></li>
                        <li>Page</li>
                    </ul>
                </nav>
            </article>


            <article>
                <header>
                    <strong>Buttons with color</strong>
                </header>
                <Buttons></Buttons>
            </article>


            <article>
                <header><strong>Grid System</strong></header>
                <GridSystem items={['1', '2', '3']}></GridSystem>
                <footer>Teste</footer>
            </article>

            <article>
                <header>Form</header>
                <Forms />
            </article>

            <article>
                <header>Modal</header>
                <ModalExample show={modal} onClose={handleClose} />
                <div class="pull-right">
                    <a role="button" href="#open" onClick={handleClick}>Show modal</a>
                </div>
            </article>

            <progress></progress>

            <button aria-busy="true"></button>

        </main>
        <footer>rodapé</footer>
    </>
};
