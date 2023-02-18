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
        <Filter/>
        <Ingredients/>
    </div>
  )
}

export default home