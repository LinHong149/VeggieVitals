import React from 'react'
import Nav from '../components/nav/nav'
import Filter from '../components/filter/filter'
import CurrProduce from '../components/currProduce/currProduce'
import Ingredients from '../components/ingredients/ingredients'


const home = () => {
  return (
    <div>
        <Nav/>
        <div
        style={{display:'flex', flexDirection: 'row', flexWrap: 'none', justifyContent: 'space-between'}}>
            <CurrProduce/>
            <div
            style={{boxShadow:"-4px -4px #1E1515", display:'flex', flexDirection: 'row', flexWrap: 'none', borderTopLeftRadius: '60px'}}>
                <Filter/>
                <Ingredients/>
            </div>
        </div>
    </div>
  )
}

export default home