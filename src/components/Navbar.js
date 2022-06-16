import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
function Navbar() {

  const [timeTable, setTimeTable] = useState([])
  useEffect(()=>{
    const res = axios.get('http://localhost/mohammadi_api/time_table_show.php').then((data)=>{
      console.log(data)
      setTimeTable(data.data)
    })
  }, [])


  const [holiday, setHoliday] = useState([])
  useEffect(()=>{
    const res = axios.get('http://localhost/mohammadi_api/holiday_show.php').then((data)=>{
      console.log(data)
      setHoliday(data.data)
    })
  }, [])


  const [result, setResult] = useState([])
  useEffect(()=>{
    const res = axios.get('http://localhost/mohammadi_api/result_show.php').then((data)=>{
      console.log(data);
      setResult(data.data);
    })
  }, [])


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
  const navBarClick = ()=>{
    console.log("navbar clicked");
    navBarRef.current.classList.remove('show')
  }
  const navBarRef = useRef(null);
  return (
    <div className="row">
    <div className="col-sm-12 p-0">
      <nav className="navbar navbar-expand-lg my-navbar">
        <div className="container-fluid">
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-sliders-h Toggler-icon"></i>
          </button>
          <div ref={navBarRef} className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link onClick={navBarClick} className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
                <li className="nav-item px-2">
                    <Link onClick={navBarClick} className="nav-link" aria-current="page" to="/about">About Us</Link>
                </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     ACADEMICS
                </a>
                <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                    <li><Link onClick={navBarClick}  className="dropdown-item drp-item" to="/branches">Branches Offered</Link></li>
                    <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/faculty">Faculty</Link></li>
                    <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/acal">Academic Calendar</Link></li>
                    {timeTable?timeTable.map((tt) => {
                    return (
                    <li key={tt.t_id}><a className="dropdown-item drp-item" href={`http://localhost/mohammadi_api/files/time_table/${tt.time_table_file}`} target="_blank">Time Table</a></li>
                    );
                    }):""}
                    <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/library">Library</Link></li>
                    {holiday?holiday.map((holiday) => {
                    return (
                    <li key={holiday.t_id}><a className="dropdown-item drp-item" href={`http://localhost/mohammadi_api/files/time_table/${holiday.time_table_file}`} target="_blank">Holiday</a></li>
                    );
                    }):""}
                    {/* <li><a className="dropdown-item drp-item" href="/"></a></li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 ADMISSION
                </a>
                <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                  <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/admission">Admission Policy</Link></li>
                  <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/fee">Admission Fee</Link></li>
                  <li><a className="dropdown-item drp-item" href="#" onClick={handlePolicy}>Admission / Reservation Policy</a></li>
                  <li><a className="dropdown-item drp-item" href="#" onClick={handleDocPolicy}>Document Retention Policy</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                STUDENTS SUPPORT
                </a>
                <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                  <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/anti-ragging">Anti Ragging</Link></li>
                  <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/grievance">Grievance Redressal</Link></li>
                  <li><a className="dropdown-item drp-item" href="https://bteup.ac.in/webapp/SYLLABUS.aspx?type=6" target="_blank">Syllabus</a></li>
                  {result?result.map((res)=>{
                    return(
                      <li><a className="dropdown-item drp-item" href={`${res.link}`} target="_blank">Result</a></li>
                    );
                  }):""}
                  <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/alumni">Alumni</Link></li>
                  <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/alumni-reg">Alumni Registration</Link></li>
               </ul>
             </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EXTRA CURRICULAR ACTIVITIES
                  </a>
                  <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                    <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/sports">Sports</Link></li>
                    <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/seminars">Seminars</Link></li>
                    <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/annual">Annual Function</Link></li>
                 </ul>
               </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        AICTE APPROVAL
                    </a>
                    <ul className="dropdown-menu drp-ul" aria-labelledby="navbarDropdown">
                      <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/aicte">AICTE APPROVAL</Link></li>
                      <li><Link onClick={navBarClick} className="dropdown-item drp-item" to="/mou">MOU</Link></li>
                      <li><a onClick={navBarClick} className="dropdown-item drp-item" href="https://www.aicte-india.org/feedback/index.php" target="_blank">AICTE Feedback</a></li>
                   </ul>
                 </li>
                 <li className="nav-item px-2">
                   <Link onClick={navBarClick} className="nav-link active" aria-current="page" to="/gallery">GALLERY</Link>
                 </li>
                 <li className="nav-item px-2">
                   <Link onClick={navBarClick} className="nav-link active" aria-current="page" to="/committee">COMMITTEES</Link>
                 </li>
                 <li className="nav-item px-2">
                   <Link onClick={navBarClick} className="nav-link active" aria-current="page" to="/contact">CONTACT</Link>
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