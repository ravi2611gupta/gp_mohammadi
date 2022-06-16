import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {

  
  const [spinner, setSpinner] = useState(false);

  const [annual, setAnnual] = useState([])
  useEffect(()=>{
    setSpinner(true);
    const res = axios.get('https://test.polyprep.co.in/mohammadi_api/annual_show.php').then((data)=>{
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
                <a href={`https://test.polyprep.co.in/mohammadi_api/files/gallery/${annual.pic}`} data-fancybox="gallery"><img src={`https://test.polyprep.co.in/mohammadi_api/files/gallery/${annual.pic}`} alt="" className='' /></a>
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