import logo from '../img/logo/gpm-logo-black.png'
import React from 'react'

function CollegeName() {
  return (
    <div className="row">
    <div className="col-sm-1"></div>
    <div className="col-sm-1 clg-name">
      <img src={logo} className="img-fluid"/>
    </div>
    <div className="col-sm-7 clg-name-txt">
      <h3>Government Polytechnic, Mohammadi Kheri</h3>
      <h6>Affiliated to : Uttar Pradesh Board of Technical Education</h6>
    </div>
    <div className="col-sm-3 cas-btn-out">
      <a href="#" className="btn"><i className="fas fa-users me-1"></i> About Us</a>
      <a href="#" className="btn ms-2"><i className="fas fa-book me-1"></i> Branches Offered</a>
    </div>
  </div>
  )
}

export default CollegeName