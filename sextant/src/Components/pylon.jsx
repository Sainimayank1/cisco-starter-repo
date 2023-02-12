import React from 'react'

import PylonConnect from './pylonConnect.jsx'
function pylon() {
  return (
    <div className='pylon'><div>
      Latency:   {<PylonConnect/>}
    </div></div>
  )
}

export default pylon