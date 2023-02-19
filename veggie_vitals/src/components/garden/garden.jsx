import React from 'react'
import { CgClose } from 'react-icons/cg'
import API from '../../pages/API'
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
            selected1: 1, // use the generate recipe button to set state
            recipe: ''
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
    }

    async fetchRecipe() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "Authorization": "Bearer tok_dev_vCDxZcNBWH1V17xMV9UKtKeNj35yAYraS9ZPk7oC1sx4aqbswvt9JYbcx79wmBaF"  },
            body: JSON.stringify({ 'name': 'world' })
        };
        const response = await fetch('https://steph-and-ee.autocode.dev/veggie-vitals@dev/', requestOptions);
            // .then((response) => response.json())
            // .then((data) => {
            //     return data
            // })
        const data = await response.json();
        this.setState({ postId: data.id });
        return data
    }

    generateRecipe() {
        this.fetchRecipe()
        // Get ingredients as input and set the ingredients to the state
        // Call fetchRecipe()
        // Set the returned recipe to the state so that it can be displayed in the HTML
    }

    displayRecipe() {
        const a = this.fetchRecipe()
        console.log(a)
        console.log("Potato")
    }
    
    render(){
        let veggie1  =  this.changeMyVariable(this.state.selected1);
        this.displayRecipe()

        return (
            <Garden>
                <Title>Your Garden</Title>
                <ProduceList >
                    {veggie1}
                    {this.state.recipe}
                </ProduceList>
                <button button onClick={this.generateRecipe}>Generate recipe</button> 
                {/* Use set state to pass the ingredient to the state, so that you can pass to the API call */}
            </Garden>
        );
    }
}






// async fetchRecipe() {
//     const recipe = await fetch('https://steph-and-ee.autocode.dev/veggie-vitals@dev/')
//     .then((response) => response.json())
//     .then((data) => {
//         return data
//     })

//     // const printRecipe = async () => {
//     //     const a = await recipe;
//     //     return a
//     //   };
      
//     // printRecipe()

//     return recipe
// }

// async render(){
//     let veggie1  =  this.changeMyVariable(this.state.selected1);
//     const a =  await this.fetchRecipe()
//     console.log(a)

//     return (
//         <Garden>
//             <Title>Your Garden</Title>
//             <ProduceList >
//                 {veggie1}
//             </ProduceList>
//             <button button onClick={() => console.log(321)}>Generate recipe</button>
//         </Garden>
//     );
// }






























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