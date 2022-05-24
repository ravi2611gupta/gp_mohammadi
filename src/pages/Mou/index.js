import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function Index() {

    const [mou, setMou] = useState()
    useEffect(()=>{
        const res = axios.get('http://localhost/mohammadi_api/mou_show.php').then((data)=>{
            console.log(data)
            setMou(data.data)
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

                        <tbody>

                             <tr>
                                <th scope="row">1</th>
                                <td>mou with this company</td>
                                <td>Company name</td>
                                <td><a href="#" target="_blank">Click Here to View</a></td>
                                <td>2022-05-05</td>
                            </tr>
                      
                        </tbody>
                    </table>
                </div>
            </div>


        </div>

    </>
  )
}

export default Index