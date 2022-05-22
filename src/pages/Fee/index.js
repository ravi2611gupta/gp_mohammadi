import React from 'react'

function index() {
  return (
    <>
     <div className="row">
            <div className="col-sm-12 breadcrumb">
                <h3>Fee Structure</h3>
            </div>
        </div>





        <div className="container">

            <div className="row">
                <div className="col-sm-12 pt-4 pb-5 table-responsive">
                    <table className="table text-center table-bordered">
                        <thead>
                            <tr className="linear-bg">
                                <th>S.No.</th>
                                <th>Fee head</th>
                                <th>Regular Fee</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Tuition Fee</td>
                                <td>8000</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Hostel Fee</td>
                                <td>600</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Game Fee</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Semester Exam Fee</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Newspaper Fee</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Hobby Center Fee</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>ID Card Fee</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Cash Money</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Admission Form &amp; Registry</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Electricity Fee</td>
                                <td>1600</td>
                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td>Cash Money</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <td>Maintainance Fee</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <th scope="row">13</th>
                                <td>Annual Fee</td>
                                <td>100</td>
                            </tr>
                            <tr style={{backgroundColor:"#28c3be", color:"#fff"}}>
                                <th scope="row"></th>
                                <td>Total</td>
                                <td>12670 rs.</td>
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