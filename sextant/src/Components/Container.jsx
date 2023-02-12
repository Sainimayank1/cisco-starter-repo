import React from 'react'
import Subcontainer from './Subcontainer.jsx'
function Container() {
  return (
    <div className='container'>
        <Subcontainer name="IPv4"/>
        <Subcontainer name="IPv6"/>
    </div>
  )
}

export default Container