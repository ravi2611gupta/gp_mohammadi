import React from 'react'

function HeaderLink() {
  return (
    <div className="row headline">
    
    <div className="col-sm-9 headline_link">
      Call Us: <a href="tel:0000000000">&nbsp; +91 00000 00000</a>
      <a href="#" className="btn c-btn" target="_blank"><i className="fas fa-headphones-alt"></i> ONLINE ADMISSION & ENQUIRY</a>
      <a href="#" className="btn c-btn" target="_blank"><i className="far fa-user"></i> GRIEVANCE REDRESSAL</a>
      <a href="https://test.polyprep.co.in/mohammadi_api/admin" target="_blank" className="btn c-btn"><i className="fas fa-user-shield"></i> ADMIN LOGIN</a>
    </div>
    
    <div className="col-sm-3 headline_social">
      <span>Follow Us:</span>
      <a href="#" target="_blank"> <i className="fab fa-facebook-f ms-3 me-3"></i> </a>
      <a href="#" target="_blank"> <i className="fab fa-instagram me-3"></i> </a>
      <a href="#" target="_blank"> <i className="fab fa-linkedin-in me-3"></i> </a>
      <a href="#" target="_blank"> <i className="fab fa-twitter"></i> </a>
    </div>
  </div>
  )
}

export default HeaderLink