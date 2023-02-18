import React from 'react'
import Nav from '../components/nav'
import Filter from '../components/filter'
import CurrProduce from '../components/currProduce'
import Ingredients from '../components/ingredients'

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