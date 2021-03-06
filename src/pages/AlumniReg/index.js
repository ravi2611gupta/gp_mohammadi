import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Breadcrumb from "../../components/Breadcrumb";

function Index() {

  const apiPrefix = process.env.REACT_APP_API_PREFIX

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    enroll: "",
    mob: "",
    email: "",
    fname: "",
    branch: "",
    marks: "",
    py: "",
    wp: "",
    pic: "",
    cv: "",
    dg: "",
    au: "",
    fb: "",
  });

//   const [selectedFile, setSelectedFile] = React.useState(null);


  const handlePicChange = (e) => {
    // console.log(e.target.files);
    setFormData({ ...formData, pic: e.target.files[0] });
    // setSelectedFile(e.target.files[0])

  };

  const handleCvChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleFormSummit = (e) => {
    // console.log("submitted");
    e.preventDefault();
    setLoading(true);
    formSave();
  };

   const formSave = async () => {


    if(formData.name === "" || formData.enroll === "" || formData.mob === "" || formData.email === "" || formData.fname === "" || formData.branch === "" || formData.marks === "" || formData.py === "" || formData.wp === "" || formData.pic === "" || formData.cv === "" || formData.dg === "" || formData.au === "" || formData.fb === ""){
      setLoading(false);
      toast.error("All fields are required")
    }
    else{
      
//     const formData = new FormData();

//     formData.append("avatar", selectedFile);
//     formData.append("type","alumni_image");

//     try {
//       const response = await axios({
//         method: "post",
//         url: "https://test.polyprep.co.in/mohammadi_api/file_upload.php",
//         data: formData,
//         headers: { "Content-Type": "multipart/form-data",},
//       });

//       console.log(response)

//     } catch (error) {
//       console.log(error);
//     }
      
    console.log(formData)
    // const res = await axios.post('https://test.polyprep.co.in/mohammadi_api/alumni_add.php', formData)

    try {
            const res = await axios({
              method: "post",
              url: `${apiPrefix}/alumni_add.php`,
              data: formData,
              headers: { "Content-Type": "multipart/form-data",},
              });
      
              setLoading(false);
              console.log(res)
              toast.success(res.data.message)
              setFormData(
                {
                  name: "",
                  enroll: "",
                  mob: "",
                  email: "",
                  fname: "",
                  branch: "",
                  marks: "",
                  py: "",
                  wp: "",
                  pic: "",
                  cv: "",
                  dg: "",
                  au: "",
                  fb: "",
                }
              )

              document.getElementById("my-form").reset();
          
            } catch (error) {
              setLoading(false);
              console.log(error);
            }

    // console.log(res);
    }

  
  };

  return (
    <>
      <Breadcrumb heading="Alumni Registration" />

      <div className="container">
        <div className="row py-4">
          <div className="col-sm-12 p-3 my-form">
            <form className="form" id="my-form">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="name">
                      Name :{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                      }}
                      id="name"
                      name="name"
                      required=""
                      placeholder="Enter Your Name : "
                    />
                  </div>
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="enroll">
                      Enrollment Number :{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="enroll"
                      value={formData.enroll}
                      onChange={(e) => {
                        setFormData({ ...formData, enroll: e.target.value });
                      }}
                      name="enroll"
                      required=""
                      placeholder="Enter Your Enrollment : "
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="mob">
                      Mobile :{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mob"
                      value={formData.mob}
                      onChange={(e) => {
                        setFormData({ ...formData, mob: e.target.value });
                      }}
                      name="mob"
                      required=""
                      maxLength="10"
                      minLength="10"
                      placeholder="Enter Your Mobile Number : "
                    />
                  </div>
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="email">
                      Email :{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      id="email"
                      name="email"
                      required=""
                      placeholder="Enter Your Email : "
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="fname">
                      Father's Name :{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.fname}
                      onChange={(e) => {
                        setFormData({ ...formData, fname: e.target.value });
                      }}
                      id="fname"
                      name="fname"
                      required=""
                      placeholder="Father's Name : "
                    />
                  </div>
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="branch">
                      Branch Name :{" "}
                    </label>
                    <select
                      name="branch"
                      id="branch"
                      value={formData.branch}
                      onChange={(e) => {
                        setFormData({ ...formData, branch: e.target.value });
                      }}
                      className="form-control"
                    >
                      <option value="" selected="" disabled="">
                        Select Your Branch
                      </option>
                      <option value="Civil Engineering">
                      Civil Engineering
                      </option>
                      <option value="Electrical Engineering">
                        Electrical Engineering
                      </option>
                      <option value="Computer Science and Engineering">
                        Computer Science and Engineering
                      </option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="marks">
                      Marks :{" "}
                    </label>
                    <input
                      type="number"
                      value={formData.marks}
                      onChange={(e) => {
                        setFormData({ ...formData, marks: e.target.value });
                      }}
                      className="form-control"
                      id="marks"
                      name="marks"
                      required=""
                      placeholder="Enter Your Marks : "
                    />
                  </div>
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="py">
                      Passing Year :{" "}
                    </label>
                    <input
                      type="text"
                      value={formData.py}
                      onChange={(e) => {
                        setFormData({ ...formData, py: e.target.value });
                      }}
                      className="form-control"
                      id="py"
                      name="py"
                      maxLength="4"
                      required=""
                      placeholder="Enter Your Passing Year : "
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="cw">
                      Currently Working At :{" "}
                    </label>
                    <input
                      type="text"
                      value={formData.wp}
                      onChange={(e) => {
                        setFormData({ ...formData, wp: e.target.value });
                      }}
                      className="form-control"
                      id="cw"
                      name="wp"
                      required=""
                      placeholder="Currently Working At  : "
                    />
                  </div>
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="deg">
                      Designation :{" "}
                    </label>
                    <input
                      type="text"
                      value={formData.dg}
                      onChange={(e) => {
                        setFormData({ ...formData, dg: e.target.value });
                      }}
                      className="form-control"
                      id="deg"
                      name="dg"
                      required=""
                      placeholder="Designation : "
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="pic">
                      Upload Your Pic :{" "}
                    </label>
                    <input
                      type="file"
                      onChange={handlePicChange}
                      className="form-control"
                      id="pic"
                      name="pic"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6 py-2">
                    <label className="form-label" htmlFor="cv">
                      Upload Your CV/Resume :{" "}
                    </label>
                    <input
                      type="file"
                      onChange={handleCvChange}
                      className="form-control"
                      id="cv"
                      name="cv"
                      required=""
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 py-2">
                    <label className="form-label" htmlFor="au">
                      About Yourself :{" "}
                    </label>
                    <textarea
                      className="form-control"
                      value={formData.au}
                      onChange={(e) => {
                        setFormData({ ...formData, au: e.target.value });
                      }}
                      id="au"
                      name="au"
                      placeholder="Tell Us About Yourself"
                      required=""
                    ></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 py-2">
                    <label className="form-label" htmlFor="fb">
                      Feedback :{" "}
                    </label>
                    <textarea
                      className="form-control"
                      value={formData.fb}
                      onChange={(e) => {
                        setFormData({ ...formData, fb: e.target.value });
                      }}
                      id="fb"
                      name="fb"
                      placeholder="Feedback"
                      required=""
                    ></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 py-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        required=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        I Agree to all Terms and Conditions applied.
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 py-2">
                    <input
                      type="submit"
                      value={loading?"Loading...":"Submit"} 
                      disabled={loading}
                      onClick={handleFormSummit}
                      className="btn border-0 rounded-0 text-light px-5 linear-bg"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
