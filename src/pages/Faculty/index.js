import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function Index() {

  const [faculty, setFaculty] = useState([])
  useEffect(()=>{
      const res = axios.get('https://test.polyprep.co.in/mohammadi_api/teacher_show.php').then((data)=>{
      console.log(data)
      setFaculty(data.data)
    })
  }, [])

  return (
    <>

    <Breadcrumb heading="Faculty" />


    <div className="container pb-5">
        <div className="row">
          <div className="col-sm-12 pt-4 table-responsive">
            <table className="table text-center table-bordered tbl-staff">
                <thead>
                    <tr className="linear-bg">
                        <th>S.No.</th>
                        <th>Photo</th>
                        <th>Faculty Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Highest Qualification</th>
                        <th>Mobile No.</th>
                        <th>Email Id</th>
                    </tr>
                </thead>
                
                <tbody>
                {faculty?faculty.map((fac,idx) => {
                  return (
                    // <div className="item" key={gal.gal_id}><img src={`https://test.polyprep.co.in/mohammadi_api/files/gallery/${gal.pic}`} style={{height: "160px"}} /></div>
                    <tr>
                    <td>{idx+1}</td>
                    <th><img src={`https://test.polyprep.co.in/mohammadi_api/files/teacher/${fac.pic}`} alt="Sorry Something went wrong :(" /></th>
                    <td><strong> {fac.name} </strong></td>
                    <td>{fac.designation}</td>
                    <td>{fac.dept_name}</td>
                    <td>{fac.qualification}</td>
                    <td>{fac.mobile}</td>
                    <td>{fac.email}</td>
                </tr>
                  );
                }):""}

                   
                 
                   
                </tbody>
            </table>
          </div>
        </div>

        <h3>Data will be uploaded soon...!</h3>
      </div>
    </>
  )
}

export default Index