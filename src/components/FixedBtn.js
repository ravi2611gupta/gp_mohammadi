import React from 'react'
import { Link } from 'react-router-dom'

function FixedBtn() {
  return (
    <>
            <div className="fixed-btn-one-in">
        <div className="icon"><i className="fas fa-user-tie"></i></div>
        <div className="fixed-btn-one">
          <Link to="/admission" className="btn"> Admission </Link>
        </div>
      </div>


      <div className="fixed-btn-two-in">
        <div className="icon"><i className="fas fa-headphones-alt"></i></div>
        <div className="fixed-btn-two">
          <Link to="/contact" className="btn"> Enquiry </Link>
        </div>
      </div>

        <a href="#" className="btn ttb"> <i className="fas fa-chevron-up"></i> </a>
    </>
  )
}

export default FixedBtn