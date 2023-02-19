import React from 'react'
import Nav from '../components/nav/nav'

const recipe = () => {
    return (
      <div>
        <Nav/>
        <div
        style={{display:'flex', flexDirection: 'row', flexWrap: 'none', justifyContent: 'space-between', border: '1px solid white'}}>
            <div
            style={{boxShadow:"-4px -4px #1E1515", display:'flex', flexDirection: 'row', flexWrap: 'none', borderTopLeftRadius: '60px', alignItems: 'end'}}>
                {/* <Filter/> */}
            </div>
        </div>
      </div>
    )
  }

  export default recipe