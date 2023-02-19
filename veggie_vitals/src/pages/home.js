import React from 'react'
import Nav from '../components/nav/nav'
import Filter from '../components/filter/filter'
import CurrProduce from '../components/currProduce/currProduce'
import Ingredients from '../components/ingredients/ingredients'
import Garden from '../components/garden/garden'


const home = () => {
  return (
    <div style={{overflow:'hidden', height: '100vh', weight: '100vw'}} style={{overflow:'hidden'}}>
        <Nav/>
        <div
        style={{display:'flex', flexDirection: 'row', flexWrap: 'none', justifyContent: 'space-between'}}>
            <CurrProduce/>
            <div
            style={{boxShadow:"-4px -4px #1E1515", display:'flex', flexDirection: 'row', flexWrap: 'none', borderTopLeftRadius: '60px', alignItems: 'end'}}>
                {/* <Filter/> */}
                <Garden/>
                <Ingredients/>
            </div>
        </div>
    </div>
  )
}

export default home