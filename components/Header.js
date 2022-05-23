import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Header() {

    const router = useRouter();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" href="/">To-Do-List</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" onClick={() => router.push('/tasks/addtask')}>Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={() => router.push('/tasks')}>Read</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header