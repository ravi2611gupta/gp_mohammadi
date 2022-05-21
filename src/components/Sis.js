import React from 'react'
import stu1 from '../img/student1.png'

function Sis() {
  return (
    
    
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-sm-12 sis-main">

    <div className="container">
      <div className="row">
        <div className="col-sm-12 pt-5">
          <h3><span>Student</span> Information System</h3>
          <div className="underline1 white-bg"></div>
        </div>
      </div>

      <div className="row pb-4">
        <div className="col-sm-8 sis-txt">
          <p className="my-para">This section will deal with all the information pertaining to a student such as personal, <br/>academic as well as digital document and student report.</p>
          <a href="#" target="_blank" className="btn my-btn">Sign In</a>
        </div>
        <div className="col-sm-4">
          <div className="sis-pic ps-4 pt-4">
            <img src={stu1} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>

  )
}

export default Sis