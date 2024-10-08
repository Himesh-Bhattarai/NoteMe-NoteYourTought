import React from 'react'
import { Link, useLocation} from 'react-router-dom';


export default function Navbar() {
  const activeLocation = useLocation();


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NoteMe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${activeLocation.pathname === "/Dashboard"? "active":"" }`} aria-current="page" to="/Dashboard">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLocation.pathname === "/Notes"? "active":"" }`} aria-current="page" to="/Notes">Notes</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLocation.pathname === "/About"? "active":"" }`} to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLocation.pathname === "/Contact"? "active":"" }`} aria-current="page" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLocation.pathname === "/Impnotes"? "active":"" }`} to="/Impnotes">Imp_Notes</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
