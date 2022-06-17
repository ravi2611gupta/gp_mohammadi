import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {

  const apiPrefix = process.env.REACT_APP_API_PREFIX

  const [spinner, setSpinner] = useState(false);

  const [sport, setSport] = useState([])
  useEffect(()=>{
    setSpinner(true);
    const res = axios.get(`${apiPrefix}/sports_show.php`).then((data)=>{
      console.log(data)
      setSport(data.data)
      setSpinner(false);
    })
  }, [])

  return (
    <>
    
    <Breadcrumb heading="Sports" />


    
    <div className="container">
       {!spinner?<div className="row py-4">
        {sport?sport.map((sport) => {
              return (
              
              <div key={sport.gal_id} className="col-sm-3 mt-4">
              <div className="card gal">
                <a href={`${apiPrefix}/files/gallery/${sport.pic}`} data-fancybox="gallery"><img src={`${apiPrefix}/files/gallery/${sport.pic}`} alt="" className='' /></a>
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