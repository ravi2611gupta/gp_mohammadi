import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios'
import toast from 'react-hot-toast'
function Index() {

   const [formData,setFormData] = useState({
    name:'',
    enroll:'',
    mob:'',
    email:'',
    sub:'',
    msg:''
   })

   const handleFormSubmit = (e)=>{
    e.preventDefault();
     console.log('Form Submitted')
     console.log(formData)

     if(formData.name !== ''){
      saveForm();

     }
   
   }

   const saveForm = async ()=>{
    
     console.log("Calling Serve Post ")
     const res = await  axios.post('http://localhost/mohammadi_api/grievance_add.php',formData);

  console.log("response",res)
    toast.success(res.data.message)
    setFormData({
      name:'',
      enroll:'',
      mob:'',
      email:'',
      sub:'',
      msg:''
    })
   }


  return (
    <>

    <Breadcrumb heading="Grievance Redressal" />


<div className="container">
        <div className="row py-4">


          <div className="col-sm-12 p-3 my-form">


           <form action="" className="form" onSubmit={handleFormSubmit}>
             <div className="container">
               <div className="row">
                 <div className="col-sm-6 py-2"> 
                    <label className="form-label" htmlFor="name">Name : </label>
                  <input type="text" value={formData.name}  onChange={(e)=>{setFormData({...formData,name:e.target.value})}} className="form-control" id="name" name="name" required="" placeholder="Enter Your Name : "/> 
                  </div>
                 <div className="col-sm-6 py-2">
                  <label className="form-label" htmlFor="enroll">Enrollment Number : </label>
                  <input type="text" value={formData.enroll}  onChange={(e)=>{setFormData({...formData,enroll:e.target.value})}} className="form-control" id="enroll" name="enroll" required="" placeholder="Enter Your Enrollment : "/> 
                 </div>
               </div>
               
               <div className="row">
                 <div className="col-sm-6 py-2"> 
                    <label className="form-label" htmlFor="mobile">Mobile : </label>
                    <input type="text" value={formData.mob} onChange={(e)=>{setFormData({...formData,mob:e.target.value})}} className="form-control" id="mobile" name="mob" required maxLength="10" minLength="10" placeholder="Enter Your Mobile Number : "/> 
                  </div>
                 <div className="col-sm-6 py-2">
                  <label className="form-label" htmlFor="email">Email : </label>
                  <input type="email" value={formData.email}  onChange={(e)=>{setFormData({...formData,email:e.target.value})}} className="form-control" id="email" name="email" required="" placeholder="Enter Your Email : "/> 
                 </div>
               </div>
               
              

               <div className="row">
                 <div className="col-sm-12 py-2"> 
                    <label className="form-label" htmlFor="sub">Subject : </label>
                    <input type="text" value={formData.sub}  onChange={(e)=>{setFormData({...formData,sub:e.target.value})}} className="form-control" id="sub" name="sub" required="" placeholder="Subject "/> 
                  </div>
               </div>

               <div className="row">
                 <div className="col-sm-12 py-2"> 
                    <label className="form-label" htmlFor="msg">Message : </label>
                    <textarea value={formData.msg}  onChange={(e)=>{setFormData({...formData,msg:e.target.value})}} className="form-control" id="msg" name="msg" required=""></textarea> 
                  </div>
               </div>


               <div className="row">
                 <div className="col-sm-12 py-2">
                   <input type="submit"  className="btn border-0 rounded-0 text-light px-5 linear-bg"/>
                 </div>
               </div>
             </div>
           </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index