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
                Government Polytechnic Mohammadi, Kheri was established in the year of 2017. The present campus measures 7 acres of land.
                The institution is running 3 courses in Computer Science and Engineering, Civil Engineering and Electrical Engineering  with intake of 60 students in each branch.
                Government Polytechnic Mohammadi, Kheri is approved by AICTE Govt. of India and affiliated to Board of Technical Education UP (BTEUP).
                The College has fully furnished, air conditioned Computer Lab equipped with Broadband Internet facility and video projection facility.
               </p>
              </div>

              <div className='col-sm-4 pb-3'>
                <img src={require('../../img/college.jpeg')} className='mt-0 mt-sm-5 w-100' alt="" />
              </div>
            </div>


            <div className="row py-5 mb-5">
            <div className="col-sm-5 px-4 pt-4 mb-5 mb-sm-0">
              <div className="stati-card">
              <p className=" txt-justi my-para">
               <span style={{fontSize:"1.3em", fontWeight:"bold"}}>Vision of the Institute</span> <br/><br />
               To effectively contribute towards the national endeavor of producing world class manpower and to usher in technology driven economic development of the country in order to enrich the quality of life of its citizen by promoting innovative technologies and optimal utilization of resources for sustainable development.
               </p>
              </div>              
            </div>
            <div className="col-sm-7 px-4 pt-4 mt-4 mt-sm-0">
            <div className="stati-card">
               <p className=" txt-justi my-para">
               <span style={{fontSize:"1.3em", fontWeight:"bold"}}>Mission of the Institute</span> <br/><br />
               M1. To establish global state-of-art facilities and resources that will prepare and enrich the human resource by promoting all-inclusive research and developments. <br />
              M2. To inculcate entrepreneurship skills in the students in order to optimize resources to achieve the economic growth by improving the quality of life of the citizens. <br />
              M3. To instill problem-solving skills for overcoming real life challenges by imparting values based professional education.

               </p>
              </div>
            </div>
          </div>

          
        </div>
    </>
  )
}

export default index