import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function index() {
  return (
    <>


<Breadcrumb heading="Anti Ragging" />

<div className="container">
            <div className="row py-4">


                <div className="col-sm-12 p-3 my-form">


                    <form action="" className="form" method="POST">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="name">Name : </label>
                                    <input type="text" className="form-control" id="name" name="name" required
                                        placeholder="Enter Your Name : "/>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="enroll">Enrollment Number : </label>
                                    <input type="text" className="form-control" id="enroll" name="enroll" required
                                        placeholder="Enter Your Enrollment : "/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="mobile">Mobile : </label>
                                    <input type="text" className="form-control" id="mobile" name="mob" required
                                        maxLength="10" minLength="10" placeholder="Enter Your Mobile Number : "/>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="email">Email : </label>
                                    <input type="email" className="form-control" id="email" name="email" required
                                        placeholder="Enter Your Email : "/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="gname">Guardian's Name : </label>
                                    <input type="text" className="form-control" id="gname" name="gname" required
                                        placeholder="Guardian's Name : "/>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="gmob">Guardian's Mobile Number : </label>
                                    <input type="text" maxLength="10" minLength="10" className="form-control" id="gmob"
                                        name="gmob" required placeholder="Guardian's Mobile No. : "/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="branch">Branch Name : </label>
                                    <select name="branch" id="branch" className="form-control">
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
                                            <select name="year" id="year" className="form-control">
                                                <option value="" selected disabled>Select Your Year</option>
                                                <option value="first">First Year</option>
                                                <option value="second">Second Year</option>
                                                <option value="third">Third Year</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-5 py-4 d-flex gap-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" value="male" name="gen"
                                                    id="male"/>
                                                <label className="form-check-label" htmlFor="male">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gen" id="female"
                                                    value="female"/>
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
                                    <textarea className="form-control" id="add" name="add" required></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 py-2">
                                    <label className="form-label" htmlFor="msg">Message : </label>
                                    <textarea className="form-control" id="msg" name="msg" required></textarea>
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
                                    <input type="submit" className="btn border-0 rounded-0 text-light px-5 linear-bg"/>
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

export default index