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
  Buttons,
  CurrentDescriptionLine,
  CurrentButton
} from './recipe.elements'

const currProduce = () => {
  return (
    <Current>
      <CurrentImage src={Potato} alt="" />
      <CurrentName>PotAAAto</CurrentName>
      <CurrentDescription>
        <CurrentDescriptionRow>
          <CurrentTopic>Temperature</CurrentTopic>
          <CurrentTopic>Temperature</CurrentTopic>
        </CurrentDescriptionRow>
        <CurrentDescriptionLine />
        <CurrentDescriptionRow>
          <CurrentTopic>Temperature</CurrentTopic>
          <CurrentTopic>Temperature</CurrentTopic>
        </CurrentDescriptionRow>
        <CurrentDescriptionLine />
        <CurrentDescriptionRow>
          <CurrentTopic>Temperature</CurrentTopic>
          <CurrentTopic>Temperature</CurrentTopic>
        </CurrentDescriptionRow>
      </CurrentDescription>
      <Buttons>
        <CurrentButton>Add to Garden</CurrentButton>
        <CurrentButton>Forum</CurrentButton>
      </Buttons>
    </Current>
  )
}

export default currProduce