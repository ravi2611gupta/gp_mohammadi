import React from 'react'

function index() {
  return (
    <>
         <div className="row">
            <div className="col-sm-12 breadcrumb">
                <h3>Library</h3>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-sm-8 pt-4">
                    <p className=" txt-justi my-para">
                        Library is an essential asset for any centre of learning which provides facilities and services
                        to meet the requirements of learning and teaching. Hence, our efforts are always directed
                        towards creating and maintaining an efficient library having all important curriculum books and
                        important journals or newspapers, magazines, etc. We have a collection of numerous books and
                        documents. In addition, it has relevant technical magazines for offering many benefits to the
                        students and faculties as well.
                        <br/> 
                        The library’s goal is to obtain the crucial role of supporting learning and teaching activities
                        to all members of the institute. These libraries are a physical manifestation of our vision to
                        distinguish the college as a centre of resource in the knowledge era. As per AICTE norms, the
                        central library of IERT has 3500+ books.
                    </p>

                </div>
                <div className="col-sm-4 silde-img pt-3 pt-sm-5">
                    <img src={require('../../img/library.jpg')} alt="" />
                </div>
            </div>



            <div className="row">
                <div className="col-sm-12 pt-4 pb-5 table-responsive">
                    <table className="table text-center table-bordered">
                        <thead>
                            <tr className="linear-bg">
                                <th>S.No.</th>
                                <th>Title</th>
                                <th>Branch</th>
                                <th>Year</th>
                                <th>Subject</th>
                                <th>URL</th>
                            </tr>
                        </thead>

                        <tbody>

                                                        <tr>
                                <td>1</td>
                                <td>title </td>
                                <td>1</td>
                                <td>2nd</td>
                                <td>maths</td>
                                <td><a href="https://www.youtube.com/watch?v=rJOcOnhjhdI" target="_blank">Click Here to View</a></td>
                            </tr>
                                                        <tr>
                                <td>2</td>
                                <td>data structure</td>
                                <td>3</td>
                                <td>2nd</td>
                                <td>data structure using C</td>
                                <td><a href="https://youtu.be/PPDgi17D5NI" target="_blank">Click Here to View</a></td>
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