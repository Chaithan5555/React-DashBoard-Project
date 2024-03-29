import React from 'react'
import "./list.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Datatable from '../../components/datatable/Datatable'

const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer"></div>
      <Navbar/>
       <Datatable />
    </div>
  )
}

export default List;
