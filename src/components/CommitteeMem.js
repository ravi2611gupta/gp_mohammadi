import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from './Loader';

export default function CommitteeMem(props) {

    const apiPrefix = process.env.REACT_APP_API_PREFIX

    const [spinner, setSpinner] = useState(false);

    const [committeeMem, setCommitteeMem] = useState([])
    
    useEffect( ()=>{
        async function fetchData(){
            try{
                const res = await axios.post(`${apiPrefix}/committee_mem_show_cc.php`,props.cc_id);
                console.log("response",res)
                setSpinner(false);
                setCommitteeMem(res.data);
                }
                catch(error){
                setSpinner(false);
                console.log(error)
                }
        }
        fetchData()
    }, [])
   
  
  return (
    <>
        <div className="container">

            <div className="row">
                <div className="col-sm-12 py-3 table-responsive">
                    <table className="table text-center table-bordered">
                        <thead>
                            <tr className="linear-bg">
                                <th>S.No.</th>
                                <th>Member Name </th>
                                <th>Member Designation </th>
                                <th>Committee </th>
                                <th>Uploaded Date</th>
                            </tr>
                        </thead>

                        {!spinner?<tbody>
                            
                            {committeeMem?committeeMem.map((committeeMem, idx) => {
                            return (
                            <tr key={committeeMem.mem_id}>
                            <th scope="row">{idx+1}</th>
                            <td>{committeeMem.mem_name}</td>
                            <td>{committeeMem.mem_deg}</td>
                            <td>{committeeMem.committee_name}</td>
                            <td>{committeeMem.mem_addedon}</td>
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
