import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {

    const apiPrefix = process.env.REACT_APP_API_PREFIX

    const [spinner, setSpinner] = useState(false);

    const [alumni, setAlumni] = useState([])
    useEffect(()=>{
        setSpinner(true);
        const res = axios.get(`${apiPrefix}/alumni_show.php`).then((data)=>{
            console.log(data)
            setAlumni(data.data)
            setSpinner(false);
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

                        {!spinner?<tbody>
                        {alumni?alumni.map((alumni, idx) => {
                        return (
                        <tr key={alumni.id}>
                        <td>{idx+1}</td>
                        <th><img src={`${apiPrefix}/files/alumni_pic/${alumni.pic}`} alt="Sorry Something went wrong :(" /></th>
                        <td><strong> {alumni.name} </strong></td>
                        <td>{alumni.designation}</td>
                        <td>{alumni.branch}</td>
                        <td>{alumni.year}</td>
                        <td>{alumni.mob}</td>
                        <td>{alumni.email}</td>
                        </tr>
                        );
                        }):""}
                        </tbody>:<tr><td colSpan={8}><Loader/></td></tr>}
                    </table>
                </div>
            </div>

            <h5>Data will be uploaded soon...!</h5>
        </div>
    </>
  )
}

export default Index