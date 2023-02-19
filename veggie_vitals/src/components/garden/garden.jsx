import React from 'react'
import { CgClose } from 'react-icons/cg'

import {
    Garden,
    Title,
    ProduceList,
    Produce,
    ProduceName,
    Actions,
    Forum,
    Delete
} from './garden.elements'

const garden = () => {
  return (
    <Garden>
        <Title>Your Garden</Title>
        <ProduceList>
            <Produce>
                <ProduceName>Veggie Name</ProduceName>
                <Actions>
                    <Forum>See Forums</Forum>
                    <Delete><CgClose/></Delete>
                </Actions>
            </Produce>
        </ProduceList>
    </Garden>
  )
}

export default garden