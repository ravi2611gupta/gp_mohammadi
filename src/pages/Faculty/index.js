import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function index() {
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
                    <tr>
                        <td>1.</td>
                        <th><img src={require('../../img/teaching_staff/male_avatar.jpg')} alt="Sorry Something went wrong :(" /></th>
                        <td><strong> Teacher Name </strong></td>
                        <td>lecturer</td>
                        <td>Computer Science</td>
                        <td>B. Tech</td>
                        <td>0000000000</td>
                        <td>xyz@gmail.com</td>
                    </tr>
                 
                   
                </tbody>
            </table>
          </div>
        </div>

        <h3>Data will be uploaded soon...!</h3>
      </div>
    </>
  )
}

export default index