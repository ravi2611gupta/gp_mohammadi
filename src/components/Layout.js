import React from 'react'
import HeaderLink from './HeaderLink'
import CollegeName from './CollegeName'
import Navbar from './Navbar'
import Sis from './Sis'
import Association from './Association'
import FixedBtn from './FixedBtn'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div>
        
        <div className='container-fluid'>
        
        <HeaderLink/>
        <CollegeName/>
        <Navbar/>
        
        {children}

        {/* <Sis/>
        <Association/> */}
        
        <FixedBtn/>
        <Footer/>
        
        </div>
    </div>
  )
}

export default Layout