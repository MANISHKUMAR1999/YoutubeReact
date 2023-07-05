import React from 'react'
//import Sidebar from './Sidebar'
//import sidebar from './sidebar'
//import Sidebar from './Sidebar'
//import MainContainer from './MainContainer'
//import SideBar from './SideBar.js'
//import SideBar from './SideBar.js'
import { Outlet } from 'react-router-dom'
//import SideBar from '
import Sidebar from './Sidebar.js'
import MainContainer from './MainContainer.js'
//import MainContainer from './MainContainer.js'

//import MainContainer from './MainContainer.js'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
    
    <Sidebar/>
      <MainContainer/>
      <Outlet/>
     
    
    </div>
  )
}

export default Body