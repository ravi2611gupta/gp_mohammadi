import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CommitteeMem from '../../components/CommitteeMem';
import Loader from '../../components/Loader';

function Index() {

    const apiPrefix = process.env.REACT_APP_API_PREFIX

    const [spinner, setSpinner] = useState(false);

    const [committee, setCommittee] = useState([])
    useEffect(()=>{
        setSpinner(true);
        const res = axios.get(`${apiPrefix}/committee_show.php`).then((data)=>{
            console.log(data)
            setCommittee(data.data)
            setSpinner(false);
        })
    }, [])

  return (
    <>

    <Breadcrumb heading="Committees"/>

    <div className="container">

            {!spinner?<div className="row">
                <div className="col-sm-12 pt-4 pb-5">
                <div className="accordion" id="accordionExample">
                {committee.map((committee,idx,arr)=>{
                    return(
                
                    <div className="accordion-item" key={committee.cc_id}>
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#accordion"+committee.cc_id} aria-expanded="true" aria-controls="collapseOne">
                            {committee.committee_name}
                        </button>
                        </h2>
                        <div id={"accordion"+committee.cc_id} className={(!idx)? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <CommitteeMem cc_id={committee.cc_id} />
                        </div>
                        </div>
                    </div>
                    
                    )
                })}
                    </div>
                </div>
            </div>:<div className='row'><div className='col-sm-12 py-5'><Loader/></div></div>}


        </div>

    </>
  )
}

export default Index