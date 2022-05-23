import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function index() {
  return (
    <>

    <Breadcrumb heading="AICTE Approval"/>

    <div className="container">

            <div className="row">
                <div className="col-sm-12 pt-4 pb-5 table-responsive">
                    <table className="table text-center table-bordered">
                        <thead>
                            <tr className="linear-bg">
                                <th>S.No.</th>
                                <th>Title </th>
                                <th>File </th>
                                <th>Uploaded Date</th>
                            </tr>
                        </thead>

                        <tbody>

                             <tr>
                                <th scope="row">1</th>
                                <td>demo aicte 2</td>
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

export default index