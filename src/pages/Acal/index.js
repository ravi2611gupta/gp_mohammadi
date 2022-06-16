import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Loader from '../../components/Loader';

function Index() {

  const [spinner, setSpinner] = useState(false);

  const [acal, setAcal] = useState([])
  useEffect(()=>{
    setSpinner(true);
     const res = axios.get('https://test.polyprep.co.in/mohammadi_api/acal_show.php').then((data)=>{
       console.table("Academic Calendar : ",data)
       console.log(data)
       setAcal(data.data)
       setSpinner(false);
     })     
  }, [])


  return (
    <>
    
    
    <Breadcrumb heading="Academic Calendar" />


    <div className="container pb-5">
        <div className="row">
          <div className="col-sm-12 pt-4 table-responsive">
            <table className="table text-center table-bordered">
                <thead>
                    <tr className="linear-bg">
                        <th>S.No.</th>
                        <th>File</th>
                        <th>Session</th>
                    </tr>
                </thead>
                
              {!spinner?<tbody>
                   
                   {acal?acal.map((acal, idx) => {
                     return (
                     
                     <tr>
                     <td>{idx+1}</td>
                     <td><a href={`https://test.polyprep.co.in/mohammadi_api/files/acal/${acal.acal_file}`} target="_blank"> Click here to view </a></td>
                     <td>{acal.session}</td>
                     </tr>
                     );
                   }):""}
                      
                       
                      
                   </tbody>:<tr><td colSpan={3}><Loader/></td></tr>}
            </table>
          </div>
        </div>

        <h3>Data will be uploaded soon...!</h3>
      </div>
    </>
  )
}

export default Index