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
  Button1,
  CurrentDescriptionLine,
  CurrentButton,
  Button2
} from './currProduce.elements'

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
      <Button1>
        <CurrentButton>Add to Garden</CurrentButton>
      </Button1>
      <Button2>
        <CurrentButton>See Forums</CurrentButton>
      </Button2>
    </Current>
  )
}

export default currProduce