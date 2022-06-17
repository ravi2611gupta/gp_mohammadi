import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {

    const apiPrefix = process.env.REACT_APP_API_PREFIX

    const [spinner, setSpinner] = useState(false);

    const [aicte, setAicte] = useState([])
    useEffect(()=>{
        setSpinner(true);
        const res = axios.get(`${apiPrefix}/aicte_show.php`).then((data)=>{
            console.log(data)
            setAicte(data.data)
            setSpinner(false);
        })
    }, [])

  return (
    <>

    <Breadcrumb heading="AICTE Approval"/>

    <div className="container">

            <div className="row">
                <div className="col-sm-12 pt-4 pb-5 table-responsive">
                    <table className="table text-center table-bordered">
                        <thead>
                            <tr className="linear-bg">
                                <th>S.No.</th>
                                <th>Title </th>
                                <th>File </th>
                                <th>Uploaded Date</th>
                            </tr>
                        </thead>

                        {!spinner?<tbody>
                            
                            {aicte?aicte.map((aicte, idx) => {
                            return (
                            <tr key={aicte.doc_id}>
                            <th scope="row">{idx+1}</th>
                            <td>{aicte.title}</td>
                            <td><a href={`${apiPrefix}/files/aicte/${aicte.file}`} target="_blank">Click Here to View</a></td>
                            <td>{aicte.date}</td>
                            </tr>
                            );
                            }):""}
    
                            </tbody>:<tr><td colSpan={4}><Loader/></td></tr>}
                    </table>
                </div>
            </div>


        </div>

    </>
  )
}

export default Index