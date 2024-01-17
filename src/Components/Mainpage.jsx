import React from 'react'
import Navbar from './Navbar/Navbar'
import NavPage from './NavPage'
import './Mainpage.css'
import ImportantInformation from './ImportantInformation/ImportantInformation'

const Mainpage = () => {
  return (
    <div className='Mainpage'>
      <ImportantInformation/>
        <div className='nb'>
            <Navbar/>
        </div>
        <div className='np'>
            <NavPage/>
        </div>
    </div>
  )
}

export default Mainpage