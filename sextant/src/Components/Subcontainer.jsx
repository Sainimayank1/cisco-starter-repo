import React, { useEffect, useState } from 'react'
// import axios from "axios"

function Subcontainer(prop) {
    const [address , setAddress] = useState(" ") ;

    const fetchData = async () =>
    {
        fetch('https://api64.ipify.org', {
      method: 'GET',
      headers: {},
    })
    .then(res => {
      return res.text()
    })
    .then(ip => {
      console.log('ip', ip);
        setAddress(ip);
        console.log(address)
    });
    }   
    useEffect(()=>{fetchData()},)
    return (
    <div className='Subcontainer'>{prop.name}
    <div>IP :{address}</div></div>
  )
}

export default Subcontainer