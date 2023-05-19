import React from 'react'
import AllRoutes from '../All Routes/AllRoutes'
import SideBar from '../components/SideBar'
import "../css/main.css"
function Main() {
  return (
    <div className='main'>
        <SideBar/>
        <AllRoutes/>
    </div>
  )
}

export default Main