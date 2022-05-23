import React from 'react'
import { useRouter } from 'next/router'

function Header() {

    const router = useRouter();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">To-Do-List</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" onClick={() => router.push('/tasks/addtask')}>Create</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => router.push('/tasks')}>Read</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header