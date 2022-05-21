import logo from '../img/logo/logo2.png'
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
      <a href="#" target="_blank" className="btn"><i className="fas fa-cog fa-spin me-3"></i> college automation system</a>
    </div>
  </div>
  )
}

export default CollegeName