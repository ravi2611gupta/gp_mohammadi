import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function index() {
  return (
    <>
    
      <Breadcrumb heading="About Us" />

     
          <div className="container">
            <div className="row">
              <div className="col-sm-8 pt-4">
               <p className=" txt-justi my-para">
               <span style={{fontSize:"1.3em", fontWeight:"bold"}}>Welcome To Government Polytechnic Mohammadi Kheri</span> <br/><br />
                Government Polytechnic Mohammadi, Kheri was established in the year of 2017. The present campus measured 7 Acres of land.
                The institution is running 3 courses in Computer Science and Engineering, Civil Engineering and Electrical Engineering  with intake of 60 students in each.
                Government Polytechnic Mohammadi, Kheri is approved by AICTE Govt. of India and affiliated to Board of Technical Education UP (BTEUP).
                The College has fully furnished air conditioned Computer Lab equipped with Broadband Internet facility and video projection facility.
               </p>
              </div>

              <div className='col-sm-4 pb-3'>
                <img src={require('../../img/college.jpeg')} className='mt-0 mt-sm-5 w-100' alt="" />
              </div>
            </div>
          </div>
    </>
  )
}

export default index