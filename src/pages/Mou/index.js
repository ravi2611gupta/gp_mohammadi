import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {

    const apiPrefix = process.env.REACT_APP_API_PREFIX

    const [spinner, setSpinner] = useState(false);

    const [mou, setMou] = useState()
    useEffect(()=>{
        setSpinner(true);
        const res = axios.get(`${apiPrefix}/mou_show.php`).then((data)=>{
            console.log(data)
            setMou(data.data)
            setSpinner(false);
        })
    }, [])


  return (
    <>

    <Breadcrumb heading="Memorandum Of Understanding"/>

    <div className="container">

            <div className="row">
                <div className="col-sm-12 pt-4 pb-5 table-responsive">
                    <table className="table text-center table-bordered">
                        <thead>
                            <tr className="linear-bg">
                                <th>S.No.</th>
                                <th>Title </th>
                                <th>Company </th>
                                <th>File </th>
                                <th>Uploaded Date</th>
                            </tr>
                        </thead>

                        {!spinner?<tbody>
                        {mou?mou.map((mou, idx) => {
                        return (
                        <tr key={mou.doc_id}>
                        <th scope="row">{idx+1}</th>
                        <td>{mou.title}</td>
                        <td>{mou.company}</td>
                        <td><a href={`${apiPrefix}/files/mou/${mou.file}`} target="_blank">Click Here to View</a></td>
                        <td>{mou.date}</td>
                        </tr>
                        );
                        }):""}
                      
                        </tbody>:<tr><td colSpan={5}><Loader/></td></tr>}
                    </table>
                </div>
            </div>


        </div>

    </>
  )
}

export default Index