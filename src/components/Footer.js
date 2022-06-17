import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../img/logo/logo-gpm.png'

function Footer() {
    const mystyle = {
        height: "170px",
        width: "100%",
        border: "0.1em dashed #fff"
      };

  const apiPrefix = process.env.REACT_APP_API_PREFIX


  const [result, setResult] = useState([])
  useEffect(()=>{
    const res = axios.get(`${apiPrefix}/result_show.php`).then((data)=>{
      console.log(data);
      setResult(data.data);
    })
  }, [])


  return (
    <>
    <div className="row">
    <div className="col-sm-12 footer-outer">
      <div className="container">
      <div className="row">
       
       <div className="col-sm-3 px-5 pt-5 footer-add">
        {/* <img src={logo2} alt="" className="rounded rounded-circle"/> */}
         <p className="my-para">Government Polytechnic<br/>
         Mohammadi Kheri</p>
         <ul>
           <li><i className="fas fa-mobile-alt"></i> &nbsp; +91 00000 00000</li>
           <li><i className="fas fa-envelope"></i> &nbsp; info@gpmohammdi.com</li>
           <li><i className="fas fa-map"></i> &nbsp;  Dilawarpur, Uttar Pradesh 262804</li>
         </ul>
       </div>
      
      
       <div className="col-sm-3  pt-5">
         <h4 className="pb-3">Useful Links</h4>
         <ul>
           <li><a href="https://swayam.gov.in/" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; SWAYAM</a></li>
           <li><a href="https://nptel.ac.in/" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; NPTEL</a></li>
           <li><a href="https://www.mooc.org/" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; MOOCs</a></li>
           <li><a href="https://www.nitttrc.ac.in/" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; NITTTR</a></li>
          </ul>
       </div>

       <div className="col-sm-3 pt-5">
         <h4 className="pb-3">Important Links</h4>
         <ul>
           <li><a href="https://urise.up.gov.in/" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; URISE</a></li>
           <li><a href="https://bteup.ac.in/webapp/defaultnew.aspx" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; BTEUP</a></li>
           <li><a href="https://jeecup.admissions.nic.in/" target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp; JEECUP</a></li>
           {result?result.map((res)=>{
                    return(
                      <li key={res.res_id}><a href={`${res.link}`} target="_blank"><i className="fas fa-external-link-alt"></i> &nbsp;  Exam Result</a></li>
                    );
                  }):""}
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
         <Link to="/gallery"> Image Gallery |</Link>
         <a href="#"> Press Release |</a>
         <a href="#"> FAQ's </a>
       </div>

       <div className="col-sm-12 footer-copy">
         &copy; Copyright 2022 Designed & Developed By | <a href="http://www.softproindia.in/" target="_blank">Softpro India Computer Technologies (P) Ltd.</a>
       </div>
     
     
  </div>

 

      
      </>
  )
}

export default Footer