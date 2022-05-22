import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="row">
    <div className="col-sm-12 p-0">
      <nav className="navbar navbar-expand-lg my-navbar">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-sliders-h Toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>

                <li className="nav-item px-2">
                    <Link className="nav-link" aria-current="page" to="/about">About Us</Link>
                </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     ACADEMICS
                </a>
                <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item drp-item" to="/branches">Branches Offered</Link></li>
                    <li><Link className="dropdown-item drp-item" to="/faculty">Faculty</Link></li>
                    <li><Link className="dropdown-item drp-item" to="/acal">Academic Calendar</Link></li>
                    <li><a className="dropdown-item drp-item" href="/">Time Table</a></li>
                    <li><Link className="dropdown-item drp-item" to="/library">Library</Link></li>
                    <li><a className="dropdown-item drp-item" href="/">Holiday</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 ADMISSION
                </a>
                <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item drp-item" to="/admission">Admission Policy</Link></li>
                  <li><Link className="dropdown-item drp-item" to="/fee">Admission Fee</Link></li>
                  <li><a className="dropdown-item drp-item" href="/">Admission / Reservation Policy</a></li>
                  <li><a className="dropdown-item drp-item" href="/">Document Retention Policy</a></li>
                </ul>
              </li>
  
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                STUDENTS SUPPORT
                </a>
                <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item drp-item" href="/">Anti Ragging</a></li>
                  <li><a className="dropdown-item drp-item" href="/">Grievance Redressal</a></li>
                  <li><a className="dropdown-item drp-item" href="/">Syllabus</a></li>
                  <li><a className="dropdown-item drp-item" href="/">Result</a></li>
                  <li><a className="dropdown-item drp-item" href="/">Alumni</a></li>
                  <li><a className="dropdown-item drp-item" href="/">Alumni Registration</a></li>
               </ul>
             </li>
                
  
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EXTRA CURRICULAR ACTIVITIES
                  </a>
                  <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item drp-item" href="/">Sports</a></li>
                    <li><a className="dropdown-item drp-item" href="/">Seminars</a></li>
                    <li><a className="dropdown-item drp-item" href="/">Annual Function</a></li>
                  
                 </ul>
               </li>
  
                
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        AICTE APPROVAL
                    </a>
                    <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item drp-item" href="/">AICTE APPROVAL</a></li>
                      <li><a className="dropdown-item drp-item" href="/">MOU</a></li>
                   </ul>
                 </li>
                   
                 <li className="nav-item px-2">
                   <a className="nav-link active" aria-current="page" href="/">GALLERY</a>
                 </li>
                 
                 <li className="nav-item px-2">
                   <a className="nav-link active" aria-current="page" href="/">CONTACT</a>
                 </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  )
}

export default Navbar