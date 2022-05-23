import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function index() {
  return (
    <>

    
    <Breadcrumb heading="Contact Us" />


    <div className="container py-4">
        <div className="row con-main">
          <div className="col-sm-4 pt-4 con-side-part">
            <div className="con-side-part-img text-center">
                {/* <h4>Get In Touch</h4> */}
                <img src={ require('../../img/logo/logo-gpm.png') } className='w-100' alt="" />
            </div>
          </div>

          <div className="col-sm-8">
            <div className="row pb-3">
                <div className="col-sm-4 px-2">
                    <div className="card con-box">
                        <i className="fa fa-phone"></i>
                        <a href="tel:0000000000">+91 00000 00000</a>
                    </div>
                </div>
                <div className="col-sm-4 px-2">
                    <div className="card con-box">
                        <i className="fa fa-map-location-dot"></i>
                        <p>Government Polytechnic, Mohammadi <br /> Dilawarpur, Uttar Pradesh <br /> 262804</p>
                    </div>
                </div>
                <div className="col-sm-4 px-2">
                    <div className="card con-box">
                        <i className="fa fa-paper-plane"></i>
                        <a href="mailto:info@gpmohammdi.com">info@gpmohammdi.com</a>
                    </div>
                </div>
            </div>

            <form action="" method="post" className="form">
                <div className="row">
                    <div className="col-sm-6 pt-3"><input type="text" name="fname" className="form-control" placeholder="Enter your first Name :" required /></div>
                    <div className="col-sm-6 pt-3"><input type="text" name="lname" className="form-control" placeholder="Enter your last Name :" required /></div>
                </div>
                <div className="row">
                    <div className="col-sm-6 pt-3"><input type="text" name="mobile" className="form-control" placeholder="Enter your mobile no. :" maxLength="10" minLength="10" required /></div>
                    <div className="col-sm-6 pt-3"><input type="email" name="email" className="form-control" placeholder="Enter your email :" required /></div>
                </div>
                <div className="row pt-3">
                    <div className="col-sm-12">
                        <textarea name="message" rows="5" placeholder="Write your message :" className="form-control"></textarea>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-sm-12 text-center"><input type="submit" className="btn btn-info px-5 my-btn1" /></div>
                </div>
            </form>
          </div>
        </div>
      </div>


        <div className="row">
            <div className="col-sm-12 p-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14087.498101597055!2d80.3419829!3d28.0283106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9ef68d0bbc1caac!2sGovernment%20polytechnic%20mohammadi%20kheri!5e0!3m2!1sen!2sin!4v1653286724787!5m2!1sen!2sin" style={{width:"100%", height:"400px", border:"0.1em dashed #458bed9f"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </>
  )
}

export default index