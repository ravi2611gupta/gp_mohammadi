import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'

function Navbar() {

  const handlePolicy = ()=>{
    // console.log("This is handlePolicy");
    toast((t) => (
      <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-title" id="staticBackdropLabel">Admission Reservation Policy</p>
          <button type="button" onClick={() => toast.dismiss(t.id)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        We do not offer any direct admissions, All the students are admitted through BTEUP counselling.
        </div>
      </div>
    </div>

    ));

  }


  const handleDocPolicy = () =>{
    toast((t) => (
      <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-title" id="staticBackdropLabel">Document Reservation Policy</p>
          <button type="button" onClick={() => toast.dismiss(t.id)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        We do not submit any original documents of the students. However students are requested to submit photo of their documents.
        </div>
      </div>
    </div>
    ));
  }

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
                  <li><Link className="dropdown-item drp-item" to="/" onClick={handlePolicy}>Admission / Reservation Policy</Link></li>
                  <li><Link className="dropdown-item drp-item" to="/" onClick={handleDocPolicy}>Document Retention Policy</Link></li>
                </ul>
              </li>
  
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                STUDENTS SUPPORT
                </a>
                <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item drp-item" to="/anti-ragging">Anti Ragging</Link></li>
                  <li><Link className="dropdown-item drp-item" to="/grievance">Grievance Redressal</Link></li>
                  <li><a className="dropdown-item drp-item" href="https://bteup.ac.in/webapp/SYLLABUS.aspx?type=6" target="_blank">Syllabus</a></li>
                  <li><a className="dropdown-item drp-item" href="/">Result</a></li>
                  <li><Link className="dropdown-item drp-item" to="/alumni">Alumni</Link></li>
                  <li><Link className="dropdown-item drp-item" to="/alumni-reg">Alumni Registration</Link></li>
               </ul>
             </li>
                
  
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EXTRA CURRICULAR ACTIVITIES
                  </a>
                  <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item drp-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item drp-item" to="/seminars">Seminars</Link></li>
                    <li><Link className="dropdown-item drp-item" to="/annual">Annual Function</Link></li>
                  
                 </ul>
               </li>
  
                
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        AICTE APPROVAL
                    </a>
                    <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item drp-item" to="/aicte">AICTE APPROVAL</Link></li>
                      <li><Link className="dropdown-item drp-item" to="/mou">MOU</Link></li>
                   </ul>
                 </li>
                   
                 <li className="nav-item px-2">
                   <Link className="nav-link active" aria-current="page" to="/gallery">GALLERY</Link>
                 </li>
                 
                 <li className="nav-item px-2">
                   <Link className="nav-link active" aria-current="page" to="/contact">CONTACT</Link>
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