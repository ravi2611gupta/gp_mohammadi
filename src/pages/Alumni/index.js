import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function Index() {

    const [alumni, setAlumni] = useState([])
    useEffect(()=>{
        const res = axios.get('http://localhost/mohammadi_api/alumni_show.php').then((data)=>{
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

                                <tr>
                                <td>1</td>
                                <th><img src={require('../../img/teaching_staff/male_avatar.jpg')} alt="Sorry Something went wrong :(" /></th>
                                <td><strong> Shiva Goyal </strong></td>
                                <td>Software Developer</td>
                                <td>Computer Science and Engineering</td>
                                <td>2022</td>
                                <td>2512505222</td>
                                <td>shiva@gmail.com</td>
                            </tr>
                            

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