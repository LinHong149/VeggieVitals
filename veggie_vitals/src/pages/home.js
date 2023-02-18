import React from 'react'
import Nav from '../components/nav/nav'
import Filter from '../components/filter/filter'
import CurrProduce from '../components/currProduce/currProduce'
import Ingredients from '../components/ingredients/ingredients'


const home = () => {
  return (
    <div>
        <Nav/>
        <CurrProduce/>
        <div
        style={{boxShadow:"10px 10px #1E1515", width:'100px', height:'100px'}}>
            <Filter/>
            <Ingredients/>
        </div>
    </div>
  )
}

export default home