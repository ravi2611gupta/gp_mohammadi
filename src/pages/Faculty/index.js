import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {

  const [spinner, setSpinner] = useState(false);

  const [faculty, setFaculty] = useState([])

  useEffect(()=>{
    setSpinner(true);
      const res = axios.get('http://localhost/mohammadi_api/teacher_show.php').then((data)=>{
      console.log(data)
      setFaculty(data.data)
      setSpinner(false);
    })
  }, [])

  return (
    <>

    <Breadcrumb heading="Faculty" />


    <div className="container pb-5">
        {!spinner?<div className="row"> 
                {faculty?faculty.map((fac,idx) => {
                  return (
                    // <div className="item" key={gal.gal_id}><img src={`http://localhost/mohammadi_api/files/gallery/${gal.pic}`} style={{height: "160px"}} /></div>
                    <div className="col-sm-3 pt-4">         
                    <div className="card my-card1 my-mentor-card">
                  <div className="card-body">
                    <div className="card-img">
                      <img src={`http://localhost/mohammadi_api/files/teacher/${fac.pic}`} style={{height:"300px"}}/>
                    </div>
                    <div className="card-text my-card-text">
                      <h5><strong>{fac.name}</strong></h5>
                      <h6>{fac.designation}</h6>
                    </div>
                  </div>
                </div>
                </div>
                  );
                }):""}         
        </div>:<div className='row'><div className='col-sm-12 py-5'><Loader/></div></div>}

        {/* <h3>Data will be uploaded soon...!</h3> */}
      </div>
    </>
  )
}

export default Index