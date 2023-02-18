import React from 'react'
import Potato from '../../assets/Potato.png'

import {
  Current,
  CurrentImage,
  CurrentName,
  CurrentDescription,
  CurrentDescriptionRow,
  CurrentTopic,
  CurrentStats,
  CurrentDescriptionLine,
  CurrentButton
} from './currProduce.elements'

const currProduce = () => {
  return (
    <Current>
      <CurrentImage src={Potato} alt="" />
      <CurrentName>PotAAAto</CurrentName>
      <CurrentDescription>
        <CurrentDescriptionRow>
          <CurrentTopic>Temperature</CurrentTopic>
          <CurrentStats>##</CurrentStats>
        </CurrentDescriptionRow>
        <CurrentDescriptionLine />
        <CurrentDescriptionRow>
          <CurrentTopic>Temperature</CurrentTopic>
          <CurrentStats>##</CurrentStats>
        </CurrentDescriptionRow>
        <CurrentDescriptionLine />
        <CurrentDescriptionRow>
          <CurrentTopic>Temperature</CurrentTopic>
          <CurrentStats>##</CurrentStats>
        </CurrentDescriptionRow>
        <CurrentDescriptionLine />
        <CurrentDescriptionRow>
          <CurrentTopic>Temperature</CurrentTopic>
          <CurrentStats>##</CurrentStats>
        </CurrentDescriptionRow>
        <CurrentButton>Generate Recipe</CurrentButton>
      </CurrentDescription>
    </Current>
  )
}

export default currProduce