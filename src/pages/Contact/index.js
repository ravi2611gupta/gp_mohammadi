import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Breadcrumb from '../../components/Breadcrumb'

function Index() {

    const apiPrefix = process.env.REACT_APP_API_PREFIX

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fname:'',
        lname:'',
        mobile:'',
        email:'',
        message:''
    })


    const handleOnSubmit = (e)=>{
        setLoading(true);
        console.log("submitted")
        e.preventDefault()
        saveFormData()
    } 

    const saveFormData = async ()=>{


        if(formData.fname === "" || formData.lname === "" || formData.mobile === "" || formData.email === "" || formData.message === ""){
            setLoading(false);
            toast.error("All fields are required")
          }
          else{
            try{
                const res = await axios.post(`${apiPrefix}/contact_add.php`, formData)
                console.log(res)
                if(res.data.status==true){
                    setLoading(false);
                    toast.success(res.data.message)
                    setFormData(
                        {
                            fname:'',
                            lname:'',
                            mobile:'',
                            email:'',
                            message:''
                        }
                    )
        
                }else{
                    setLoading(false);
                    toast.error(res.data.message)
                }
               
            }
            catch(error){
              console.log(error)
            }
          }
        
    }

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

            <form className="form">
                <div className="row">
                        <div className="col-sm-6 pt-3"><input type="text" value={formData.fname} onChange={(e)=>{setFormData({ ...formData, fname:e.target.value })}} name="fname" className="form-control" placeholder="Enter your first Name :" required /></div>
                    <div className="col-sm-6 pt-3"><input type="text" value={formData.lname} onChange={(e)=>{setFormData({ ...formData, lname:e.target.value })}} name="lname" className="form-control" placeholder="Enter your last Name :" required /></div>
                </div>
                <div className="row">
                    <div className="col-sm-6 pt-3"><input type="text" value={formData.mobile} onChange={(e)=>{setFormData({ ...formData, mobile:e.target.value })}} name="mobile" className="form-control" placeholder="Enter your mobile no. :" maxLength="10" minLength="10" required /></div>
                    <div className="col-sm-6 pt-3"><input type="email" value={formData.email} onChange={(e)=>{setFormData({ ...formData, email:e.target.value })}} name="email" className="form-control" placeholder="Enter your email :" required /></div>
                </div>
                <div className="row pt-3">
                    <div className="col-sm-12">
                        <textarea name="message" rows="5" value={formData.message} onChange={(e)=>{setFormData({ ...formData, message:e.target.value })}} placeholder="Write your message :" className="form-control"></textarea>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-sm-12 text-center"><input type="submit" value={loading?"Loading...":"Submit"} disabled={loading} onClick={handleOnSubmit} className="btn btn-info px-5 my-btn1" /></div>
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

export default Index