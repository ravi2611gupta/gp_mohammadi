import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function index() {
  return (
    <>

    <Breadcrumb heading="Alumni Registration" />

    <div className="container">
            <div className="row py-4">
              

                <div className="col-sm-12 p-3 my-form">


                    <form action="alumni_code.php" className="form" method="POST" enctype="multipart/form-data">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="name">Name : </label>
                                    <input type="text" className="form-control" id="name" name="name" required="" placeholder="Enter Your Name : " />
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="enroll">Enrollment Number : </label>
                                    <input type="text" className="form-control" id="enroll" name="enroll" required="" placeholder="Enter Your Enrollment : " />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="mob">Mobile : </label>
                                    <input type="text" className="form-control" id="mob" name="mob" required="" maxlength="10" minlength="10" placeholder="Enter Your Mobile Number : " />
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="email">Email : </label>
                                    <input type="email" className="form-control" id="email" name="email" required="" placeholder="Enter Your Email : " />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="fname">Father's Name : </label>
                                    <input type="text" className="form-control" id="fname" name="fname" required="" placeholder="Father's Name : " />
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="branch">Branch Name : </label>
                                    <select name="branch" id="branch" className="form-control">
                                        <option value="" selected="" disabled="">Select Your Branch</option>
                                        <option value="Mechanical Engineering (Automobile)">Mechanical Engineering
                                            (Automobile)</option>
                                        <option value="Mechanical Engineering (Production)">Mechanical Engineering
                                            (Production)</option>
                                        <option value="Computer Science and Engineering">Computer Science and
                                            Engineering</option>
                                       
                                    </select>
                                </div>

                            </div>



                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="marks">Marks : </label>
                                    <input type="number" className="form-control" id="marks" name="marks" required="" placeholder="Enter Your Marks : " />
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="py">Passing Year : </label>
                                    <input type="text" className="form-control" id="py" name="py" maxlength="4" required="" placeholder="Enter Your Passing Year : "/>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="cw">Currently Working At : </label>
                                    <input type="text" className="form-control" id="cw" name="wp" required="" placeholder="Currently Working At  : " />
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="deg">Designation : </label>
                                    <input type="text" className="form-control" id="deg" name="dg" required="" placeholder="Designation : "/>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="pic">Uploaded Your Pic : </label>
                                    <input type="file" className="form-control" id="pic" name="pic" required=""/>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <label className="form-label" htmlFor="cv">Upload Your CV/Resume : </label>
                                    <input type="file" className="form-control" id="cv" name="cv" required=""/>
                                </div>
                            </div>






                            <div className="row">
                                <div className="col-sm-12 py-2">
                                    <label className="form-label" htmlFor="au">About Yourself : </label>
                                    <textarea className="form-control" id="au" name="au" placeholder="Tell Us About Yourself" required=""></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 py-2">
                                    <label className="form-label" htmlFor="fb">Feedback : </label>
                                    <textarea className="form-control" id="fb" name="fb" placeholder="Feedback" required=""></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 py-2">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" required="" id="flexCheckDefault"/>
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