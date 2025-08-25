import React from 'react'
import MidList from './MidList'
import SmallList from './SmallList'

function BreadCrumbs({pagename,crumbtext,}) {
  return (
    <div>
        <MidList text={pagename}/>
        <SmallList text={crumbtext}/>
    </div>
  )
}

export default BreadCrumbs