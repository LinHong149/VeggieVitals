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
import { useState } from 'react'


export default class garden extends React.Component {
    constructor(props){
        super(props)
       this.state = {
         selected1: 1
      }
    }
    
    changeMyVariable(selected1) {
        if (selected1==1) {
            return [
                (  
                    <Produce>
                        <ProduceName>Potato</ProduceName>
                        <Actions>
                            <Forum>Forum</Forum>
                            <Delete onClick={() => this.setState({selected1: 2})} ><CgClose style={{justifyContent: 'center'}}/></Delete>
                        </Actions>
                    </Produce>
                )
            ]
        }
        // if (selected1==2) {
        //     return [
        //         ( 
        //             <Produce className='not'>
        //                 <ProduceName>Potato</ProduceName>
        //                 <Actions>
        //                     <Forum>Forum</Forum>
        //                     <Delete onClick={() => this.setState({selected1: 2})} ><CgClose style={{justifyContent: 'center'}}/></Delete>
        //                 </Actions>
        //             </Produce>
        //         )
        //     ]
        // }
    }
    
    render(){
        let veggie1  =  this.changeMyVariable(this.state.selected1);
        return (
            <>
            <Garden>
                <Title>Your Garden</Title>
                <ProduceList >
                    {veggie1}
                    {/* <Produce>
                        <ProduceName>Potato</ProduceName>
                        <Actions>
                            <Forum>Forum</Forum>
                            <Delete onClick={() => this.setState({selected1: 2})} ><CgClose style={{justifyContent: 'center'}}/></Delete>
                        </Actions>
                    </Produce> */}
                    {/* <Produce>
                        <ProduceName>Potaato</ProduceName>
                        <Actions>
                            <Forum>Forum</Forum>
                            <Delete><CgClose style={{justifyContent: 'center'}}/></Delete>
                        </Actions>
                    </Produce> */}
                </ProduceList>
            </Garden>

            {/* Hello */}
            {/* <button onClick={() => this.setState({selected1: 2})} /> */}
            </>
        );
    }
}





































// const garden = () => {
//     // const [isSelected1, setSelection] = useState(true);
//     const isSelected1 = true;

//   return (
//     <Garden>
//         <Title>Your Garden</Title>
//         <ProduceList >
//             <Produce className={isSelected1 ? 'selected' : 'not'}>
//                 <ProduceName>Potato</ProduceName>
//                 <Actions>
//                     <Forum>Forum</Forum>
//                     <Delete type='button' onClick={() => this.isSelected1} ><CgClose style={{justifyContent: 'center'}}/></Delete>
//                 </Actions>
//             </Produce>
//             <Produce>
//                 <ProduceName>Potaato</ProduceName>
//                 <Actions>
//                     <Forum>Forum</Forum>
//                     <Delete><CgClose style={{justifyContent: 'center'}}/></Delete>
//                 </Actions>
//             </Produce>
//             <Produce>
//                 <ProduceName>Potaaato</ProduceName>
//                 <Actions>
//                     <Forum>Forum</Forum>
//                     <Delete><CgClose style={{justifyContent: 'center'}}/></Delete>
//                 </Actions>
//             </Produce>
//         </ProduceList>
//     </Garden>
//   )
// }

// export default garden