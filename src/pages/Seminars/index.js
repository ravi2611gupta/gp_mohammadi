import axios from 'axios'
import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {

  const apiPrefix = process.env.REACT_APP_API_PREFIX

  const [spinner, setSpinner] = useState(false);

  const [seminar, setSeminar] = useState([])
  useState(()=>{
    setSpinner(true);
    const res = axios.get(`${apiPrefix}/seminar_show.php`).then((data)=>{
      console.log(data)
      setSeminar(data.data)
      setSpinner(false);
    })
  }, [])



  return (
    <>
     
     <Breadcrumb heading="Seminars" />


    
<div className="container">
    {!spinner?<div className="row py-4">
    {seminar?seminar.map((seminar) => {
        return (
        
        <div key={seminar.gal_id} className="col-sm-3 mt-4">
        <div className="card gal">
          <a href={`${apiPrefix}/files/gallery/${seminar.pic}`} data-fancybox="gallery"><img src={`${apiPrefix}/files/gallery/${seminar.pic}`} alt="" className='' /></a>
        </div>
        </div>
        );
        }):""}   
    </div>:<div className='row'><div className='col-sm-12 py-5'><Loader/></div></div>}
  </div>



    </>
  )
}

export default Index