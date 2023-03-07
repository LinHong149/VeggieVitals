import React from 'react'
import Potato from '../../assets/Potato.png'
import { TbShovel } from 'react-icons/tb';
import { FaThermometerHalf } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import { BsFillSunFill } from 'react-icons/bs';

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
  GardenButton,
  ForumButton
} from './currProduce.elements'

function PotatoFunction(){
  <Potato to="/forum">Forum</Potato>
}

const currProduce = () => {
  return (
    <Current>
      <CurrentImage src={Potato} alt="" />
      <CurrentName>Potato</CurrentName>
      <CurrentDescription>
        <CurrentDescriptionRow>
          <CurrentTopic><TbShovel /> well-drained, sandy soil with a pH of 6.0-6.5</CurrentTopic>
        </CurrentDescriptionRow>
        <CurrentDescriptionLine />
        <CurrentDescriptionRow>
          <CurrentTopic><GiWaterDrop /> 1-2 inches a week</CurrentTopic>
          <CurrentTopic><BsFillSunFill /> 6 hours a day</CurrentTopic>
        </CurrentDescriptionRow>
        <CurrentDescriptionLine />
        <CurrentDescriptionRow>
          <CurrentTopic>Harvest Time: 90 days</CurrentTopic>
          <CurrentTopic><FaThermometerHalf /> 16-19℃</CurrentTopic>
        </CurrentDescriptionRow>
      </CurrentDescription>
      <Buttons>
        <GardenButton>Add to Garden</GardenButton>
        <ForumButton>Forums</ForumButton>
      </Buttons>
    </Current>
  )
}

export default currProduce