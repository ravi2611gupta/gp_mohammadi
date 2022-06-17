import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {


  const apiPrefix = process.env.REACT_APP_API_PREFIX
  
  const [spinner, setSpinner] = useState(false);

  const [annual, setAnnual] = useState([])
  useEffect(()=>{
    setSpinner(true);
    const res = axios.get(`${apiPrefix}/annual_show.php`).then((data)=>{
      console.log(data)
      setAnnual(data.data)
      setSpinner(false);
    })
  }, [])

  return (
    <>
     
     <Breadcrumb heading="Annual Function" />


    
<div className="container">
   {!spinner?<div className="row py-4">
    
    {annual?annual.map((annual) => {
              return (
              <div className="col-sm-3 mt-4">
              <div className="card gal">
                <a href={`${apiPrefix}/files/gallery/${annual.pic}`} data-fancybox="gallery"><img src={`${apiPrefix}/files/gallery/${annual.pic}`} alt="" className='' /></a>
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