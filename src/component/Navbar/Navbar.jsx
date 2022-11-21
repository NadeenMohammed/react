
import { Link } from 'react-router-dom'
import './Navbar.modules.css'

export function Navbar() {

    return <>
        <nav className="navbar navbar-expand-lg py-3 position-fixed w-100">
            <div className="container d-flex justify-content-around">
                <Link className="navbar-brand" to="">START REACT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    Button  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="Portofolio"><a className='nav-link'>Portofolio</a></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="About"><a className='nav-link'>About</a></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="Contact"><a className='nav-link'>Contact</a></Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>
}
