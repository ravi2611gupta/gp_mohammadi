import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Breadcrumb from '../../components/Breadcrumb'

function Index() {

    const [formData, setFormData] = useState({
        name:'',
        enroll:'',
        mob:'',
        email:'',
        gname:'',
        gmob:'',
        branch:'',
        year:'',
        gen:'',
        add:'',
        msg:''  
    })

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        formSave()
    }

    const formSave = async ()=>{
        const res = await axios.post('https://test.polyprep.co.in/mohammadi_api/rag_add.php', formData)
        if(res.data.status == true){
            toast.success(res.data.message)
            setFormData({
                name:'',
                enroll:'',
                mob:'',
                email:'',
                gname:'',
                gmob:'',
                branch:'',
                year:'',
                gen:'',
                add:'',
                msg:''  
            })
        }else{
            toast.error(res.data.message)
        }
    }


  return (
    <>

<Breadcrumb heading="Anti Ragging" />

<div className="container">
            <div className="row py-4">


                <div className="col-sm-12 p-3 my-form">


                    <form className="form">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="name">Name : </label>
                                    <input type="text" value={formData.name} onChange={(e)=>{setFormData({...formData, name:e.target.value})}} className="form-control" id="name" name="name" required
                                        placeholder="Enter Your Name : "/>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="enroll">Enrollment Number : </label>
                                    <input type="text" value={formData.enroll} onChange={ (e)=>{ setFormData({...formData, enroll:e.target.value}) } } className="form-control" id="enroll" name="enroll" required
                                        placeholder="Enter Your Enrollment : "/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="mobile">Mobile : </label>
                                    <input type="text" value={formData.mob} onChange={ (e)=>{ setFormData({...formData, mob:e.target.value}) } } className="form-control" id="mobile" name="mob" required
                                        maxLength="10" minLength="10" placeholder="Enter Your Mobile Number : "/>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="email">Email : </label>
                                    <input type="email" value={formData.email} onChange={ (e)=>{ setFormData({...formData, email:e.target.value}) } } className="form-control" id="email" name="email" required
                                        placeholder="Enter Your Email : "/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="gname">Guardian's Name : </label>
                                    <input type="text" value={formData.gname} onChange={ (e)=>{ setFormData({...formData, gname:e.target.value}) } } className="form-control" id="gname" name="gname" required
                                        placeholder="Guardian's Name : "/>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="gmob">Guardian's Mobile Number : </label>
                                    <input type="text" value={formData.gmob} onChange={ (e)=>{ setFormData({...formData, gmob:e.target.value}) } } maxLength="10" minLength="10" className="form-control" id="gmob"
                                        name="gmob" required placeholder="Guardian's Mobile No. : "/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="branch">Branch Name : </label>
                                    <select name="branch" id="branch" value={formData.branch} onChange={ (e)=>{ setFormData({...formData, branch:e.target.value}) } } className="form-control">
                                        <option value="" selected disabled>Select Your Branch</option>
                                        <option value="Mechanical Engineering (Automobile)">Mechanical Engineering
                                            (Automobile)</option>
                                        <option value="Mechanical Engineering (Production)">Mechanical Engineering
                                            (Production)</option>
                                        <option value="Computer Science and Engineering">Computer Science and
                                            Engineering</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <label className="form-label" htmlFor="year">Year : </label>
                                            <select name="year" id="year" value={formData.year} onChange={ (e)=>{ setFormData({...formData, year:e.target.value}) } } className="form-control">
                                                <option value="" selected disabled>Select Your Year</option>
                                                <option value="first">First Year</option>
                                                <option value="second">Second Year</option>
                                                <option value="third">Third Year</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-5 py-4 d-flex gap-4">
                                            <div className="form-check">
                                                <input className="form-check-input" value='male'  checked={formData.gen === "male"} onChange={ (e)=>{ setFormData({...formData, gen:e.target.value}) } } type="radio" name="gen"
                                                    id="male"/>
                                                <label className="form-check-label" htmlFor="male">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" value='female' checked={formData.gen === "female"} onChange={ (e)=>{ setFormData({...formData, gen:e.target.value}) } } type="radio" name="gen" id="female"
                                                    />
                                                <label className="form-check-label" htmlFor="female">
                                                    Female
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-sm-12 py-2">
                                    <label className="form-label" htmlFor="add">Address : </label>
                                    <textarea className="form-control" value={formData.add} onChange={ (e)=>{ setFormData({...formData, add:e.target.value}) } } id="add" name="add" required></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 py-2">
                                    <label className="form-label" htmlFor="msg">Message : </label>
                                    <textarea className="form-control" value={formData.msg} onChange={ (e)=>{ setFormData({...formData, msg:e.target.value}) } } id="msg" name="msg" required></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 py-2">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" required
                                            id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I Agree to all Terms and Conditions applied.
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 py-2">
                                    <input type="button" value="Submit" onClick={()=>{ handleFormSubmit() }} className="btn border-0 rounded-0 text-light px-5 linear-bg"/>
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