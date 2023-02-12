
import React from 'react'

import { useState , useEffect } from 'react'

import { w3cwebsocket  } from 'websocket'
function PylonConnect() {
    const client = new w3cwebsocket("ws://localhost:8000") 
    const [latecy , setLatency] = useState("");
    const fetchPylon = async () =>
    { 
        client.onopen = (res) =>
        {
            const currentTime = new Date().getTime();

            const milliseconds = currentTime/1000;
            let exact = milliseconds-res.timeStamp;
            console.log(exact)
            setLatency(exact);       
    }
    }
    // useEffect(()=>fetchPylon(),)
  return (
    <div onClick={fetchPylon()}>
        {latecy}
    </div>
  )
}

export default PylonConnect