import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function Index() {

    const [alumni, setAlumni] = useState([])
    useEffect(()=>{
        const res = axios.get('https://test.polyprep.co.in/mohammadi_api/alumni_show.php').then((data)=>{
            console.log(data)
            setAlumni(data.data)
        })
    }, [])



  return (
    <>

    <Breadcrumb heading="Alumni" />


    <div className="container pb-5">
            <div className="row">
                <div className="col-sm-12 pt-4 table-responsive">
                    <table className="table text-center table-bordered tbl-staff">
                        <thead>
                            <tr  className="linear-bg">
                                <th>S.No.</th>
                                <th>Photo</th>
                                <th>Alumni Name</th>
                                <th>Designation</th>
                                <th>Branch</th>
                                <th>Completion Year</th>
                                <th>Mobile No.</th>
                                <th>Email Id</th>
                            </tr>
                        </thead>

                        <tbody>
                        {alumni?alumni.map((alumni, idx) => {
                        return (
                        

                        <tr>
                        <td>{idx+1}</td>
                        <th><img src={`https://test.polyprep.co.in/mohammadi_api/files/alumni_pic/${alumni.pic}`} alt="Sorry Something went wrong :(" /></th>
                        <td><strong> {alumni.name} </strong></td>
                        <td>{alumni.designation}</td>
                        <td>{alumni.branch}</td>
                        <td>{alumni.year}</td>
                        <td>{alumni.mob}</td>
                        <td>{alumni.email}</td>
                        </tr>
                        );
                        }):""}

                            

                        </tbody>
                    </table>
                </div>
            </div>

            <h5>Data will be uploaded soon...!</h5>
        </div>
    </>
  )
}

export default Index