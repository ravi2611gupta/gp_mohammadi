import React from 'react'
import logo2 from '../img/logo/logo-gpm.png'

function Footer() {
    const mystyle = {
        height: "170px",
        width: "100%",
        border: "0.1em dashed #fff"
      };

  return (
    <>
    <div className="row">
    <div className="col-sm-12 footer-outer">
      <div className="container">
      <div className="row">
       
       <div className="col-sm-3 px-5 pt-5 footer-add">
        <img src={logo2} alt="" className="rounded rounded-circle"/>
         <p className="my-para">Government Polytechnic<br/>
         Mohammadi Kheri</p>
       </div>
      
      
       <div className="col-sm-3  pt-5">
         <h4 className="pb-3">Contact Us</h4>
         <ul>
           <li><i className="fas fa-mobile-alt"></i> &nbsp; +91 00000 00000</li>
           <li><i className="fas fa-envelope"></i> &nbsp; info@gpmohammdi.com</li>
           <li><i className="fas fa-map"></i> &nbsp;  Dilawarpur, Uttar Pradesh 262804</li>
         </ul>
       </div>

       <div className="col-sm-3 pt-5">
         <h4 className="pb-3">Important Links</h4>
         <ul>
           <li><a href="https://urise.up.gov.in/" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; URISE</a></li>
           <li><a href="https://bteup.ac.in/webapp/defaultnew.aspx" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; BTEUP</a></li>
           <li><a href="https://jeecup.admissions.nic.in/" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; JEECUP</a></li>
           <li><a href="#" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp;  Exam Result</a></li>
           <li><a href="https://urise.up.gov.in/student/login" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; Student Login</a></li>
         </ul>
       </div>

       
       <div className="col-sm-3 pt-5">
         <h4 className="pb-3">Find The Way</h4>

         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14087.498101597055!2d80.3419829!3d28.0283106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9ef68d0bbc1caac!2sGovernment%20polytechnic%20mohammadi%20kheri!5e0!3m2!1sen!2sin!4v1653286724787!5m2!1sen!2sin" style={mystyle} allowFullScreen="" loading="lazy"></iframe>

         {/* style="width:100%; height:170px; border:0.1em dashed #fff;" */}

       </div>
     
     
     
     </div>
      </div>
    </div>

    <div className="col-sm-12 footer-links">
         <a href="#"> Quick Links |</a>
         <a href="https://www.digilocker.gov.in/dashboard" target="_blank"> Digilocker |</a>
         <a href="gallery.html"> Image Gallery |</a>
         <a href="press.html"> Press Release |</a>
         <a href="faq.html"> FAQ's </a>
       </div>

       <div className="col-sm-12 footer-copy">
         &copy; Copyright 2022 Designed & Developed By | <a href="http://www.softproindia.in/" target="_blank">Softpro India Computer Technologies (P) Ltd.</a>
       </div>
     
     
  </div>


    {/* modal1 start */}
    {/* <div className="modal fade show" id="modal1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog" style="display: block;">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Admission Reservation Policy</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              We do not offer any direct admissions, All the students are admitted through BTEUP counselling.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> */}


      {/* modal 2 start */}
      {/* <div className="modal fade" id="modal2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Document Reservation Policy</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              We do not submit any original documents of the students. However students are requested to submit photo of their documents.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> */}

      
      </>
  )
}

export default Footer