import React, { useEffect, useState } from 'react'
import IpFinder from './IpFinder.jsx'

function Subcontainer(prop) {
       
    
    return (
    <div className='Subcontainer'>
    <div className='Subcontainer-name'>
      {prop.name}
    </div>
    <div className='Subcontainer-ip'>IP :{<IpFinder url={prop.url}/>}</div></div>
  )
}

export default Subcontainer