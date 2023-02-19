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
    Delete,
    GenerateButton
} from './garden.elements'
import { useState } from 'react'


export default class garden extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected1: 1, // use the generate recipe button to set state
            recipe: '',
            // postId: ''
            // PromiseResult: "\n\nBroccoli Salmon Bowl\nIngredients: \n- 2 heads of broccoli, cut into florets\n- 2 tablespoons extra-virgin olive oil\n- 1/2 teaspoon ground cumin\n- 1/2 teaspoon garlic powder\n- Sea salt, to taste\n- Freshly ground black pepper, to taste\n- 1 1/2 pounds salmon fillet, skinned and cut into 1-inch cubes\n- 1/4 cup freshly squeezed lemon juice\n- 2 tablespoons chopped fresh parsley\n\nInstructions: \n1. Preheat oven to 350°F (177°C).\n2. Place the broccoli on a parchment-lined baking sheet, drizzle with the oil, and sprinkle with the cumin, garlic powder, salt, and pepper. Toss to combine and spread out in an even layer.\n3. Bake for 15 minutes.\n4. Add the salmon cubes to the baking sheet and toss with the broccoli.\n5. Bake for an additional 15 minutes.\n6. Remove the baking sheet from the oven and drizzle with the lemon juice.\n7. Garnish with the parsley and serve hot. Enjoy!"
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
    
    newPage() {
        let x =this.fetchRecipe()
        // const a = this.fetchRecipe()
        // console.log(a)
        console.log("clicked")
        return [
            (  
                <div style={{
                    position: 'absolute', height: '100vh', width: '100vw', top: '0', left: '0', border: '1px solid black'
                }}>
                    {x}
                    {/* {this.state.postId} */}
                </div>
            )
        ]
    }

    async fetchRecipe() {
        if (this.state.selected1 == 1) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', "Authorization": "Bearer tok_dev_EhcvNQAreccNn6RbjRDNTt4BGB9YPrYGySDU9JiKUzaeNrWHkT68ap67qnrrXwM1"  },
                body: JSON.stringify({ 'name': 'world' })
            };
            const response = await fetch('https://madisonw.autocode.dev/my-new-project@dev/', requestOptions);
            const data = await response.json();
            this.setState({ postId: data });
            return data
        }
        else {
            this.setState({postId:''});
        }
    }
    
    render(){
        let veggie1 = this.changeMyVariable(this.state.selected1);
        console.log(123)
        return (
            <Garden>
                <Title>Your Garden</Title>
                <ProduceList >
                    {veggie1}
                    {this.state.postId}
                </ProduceList>
                <GenerateButton button onClick={ () => this.newPage()}>Generate recipe</GenerateButton> 
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


// import React from 'react'
// import { CgClose } from 'react-icons/cg'
// import API from '../../pages/API'
// import {
//     Garden,
//     Title,
//     ProduceList,
//     Produce,
//     ProduceName,
//     Actions,
//     Forum,
//     Delete
// } from './garden.elements'
// import { useState } from 'react'


// export default class garden extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             selected1: 1, // use the generate recipe button to set state
//             recipe: '',
//             // PromiseResult: "\n\nBroccoli Salmon Bowl\nIngredients: \n- 2 heads of broccoli, cut into florets\n- 2 tablespoons extra-virgin olive oil\n- 1/2 teaspoon ground cumin\n- 1/2 teaspoon garlic powder\n- Sea salt, to taste\n- Freshly ground black pepper, to taste\n- 1 1/2 pounds salmon fillet, skinned and cut into 1-inch cubes\n- 1/4 cup freshly squeezed lemon juice\n- 2 tablespoons chopped fresh parsley\n\nInstructions: \n1. Preheat oven to 350°F (177°C).\n2. Place the broccoli on a parchment-lined baking sheet, drizzle with the oil, and sprinkle with the cumin, garlic powder, salt, and pepper. Toss to combine and spread out in an even layer.\n3. Bake for 15 minutes.\n4. Add the salmon cubes to the baking sheet and toss with the broccoli.\n5. Bake for an additional 15 minutes.\n6. Remove the baking sheet from the oven and drizzle with the lemon juice.\n7. Garnish with the parsley and serve hot. Enjoy!"
//         }
//     }
    
//     changeMyVariable(selected1) {
//         if (selected1==1) {
//             return [
//                 (  
//                     <Produce>
//                         <ProduceName>Potato</ProduceName>
//                         <Actions>
//                             <Forum>Forum</Forum>
//                             <Delete onClick={() => this.setState({selected1: 2})} ><CgClose style={{justifyContent: 'center'}}/></Delete>
//                         </Actions>
//                     </Produce>
//                 )
//             ]
//         }
//     }

//     async fetchRecipe() {
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json', "Authorization": "Bearer tok_dev_3BBqD5NQ38RWof44nt2SP9jj8gFKVA4K6T5FDaVG7HoaZdkNm97y28ZWvJMhMXGK"  },
//             body: JSON.stringify({ 'name': 'world' })
//         };
//         const response = await fetch('https://kvthleenhe.autocode.dev/veggievitals@dev/', requestOptions);
// // [[PromiseResult]]: "\n\nBroccoli Salmon Bowl\nIngredients: \n- 2 heads of broccoli, cut into florets\n- 2 tablespoons extra-virgin olive oil\n- 1/2 teaspoon ground cumin\n- 1/2 teaspoon garlic powder\n- Sea salt, to taste\n- Freshly ground black pepper, to taste\n- 1 1/2 pounds salmon fillet, skinned and cut into 1-inch cubes\n- 1/4 cup freshly squeezed lemon juice\n- 2 tablespoons chopped fresh parsley\n\nInstructions: \n1. Preheat oven to 350°F (177°C).\n2. Place the broccoli on a parchment-lined baking sheet, drizzle with the oil, and sprinkle with the cumin, garlic powder, salt, and pepper. Toss to combine and spread out in an even layer.\n3. Bake for 15 minutes.\n4. Add the salmon cubes to the baking sheet and toss with the broccoli.\n5. Bake for an additional 15 minutes.\n6. Remove the baking sheet from the oven and drizzle with the lemon juice.\n7. Garnish with the parsley and serve hot. Enjoy!"


//             // .then((response) => response.json())
//             // .then((data) => {
//             //     return data
//             // })
//         const data = await response.json();
//         this.setState({ postId: data });
//         return data
//     }

//     // generateRecipe() {
//     //     this.fetchRecipe()
//     //     // Get ingredients as input and set the ingredients to the state
//     //     // Call fetchRecipe()
//     //     // Set the returned recipe to the state so that it can be displayed in the HTML
//     // }

//     displayRecipe() {
//         const a = this.fetchRecipe()
//         console.log(a)
//         console.log("Potato")
//     }
    
//     render(){
//         let veggie1 = this.changeMyVariable(this.state.selected1);
//         // this.state.recipe = this.displayRecipe()

//         // console.log(this.state.recipe)

//         return (
//             <Garden>
//                 <Title>Your Garden</Title>
//                 <ProduceList >
//                     {veggie1}
//                     {/* {response} */}
//                     {this.state.postId}
//                     {/* {this.state.recipe} */}
//                 </ProduceList>
//                 <button button onClick={ this.displayRecipe()}>Generate recipe</button> 
//                 {/* Use set state to pass the ingredient to the state, so that you can pass to the API call */}
//             </Garden>
//         );
//     }
// }






// // async fetchRecipe() {
// //     const recipe = await fetch('https://steph-and-ee.autocode.dev/veggie-vitals@dev/')
// //     .then((response) => response.json())
// //     .then((data) => {
// //         return data
// //     })

// //     // const printRecipe = async () => {
// //     //     const a = await recipe;
// //     //     return a
// //     //   };
      
// //     // printRecipe()

// //     return recipe
// // }

// // async render(){
// //     let veggie1  =  this.changeMyVariable(this.state.selected1);
// //     const a =  await this.fetchRecipe()
// //     console.log(a)

// //     return (
// //         <Garden>
// //             <Title>Your Garden</Title>
// //             <ProduceList >
// //                 {veggie1}
// //             </ProduceList>
// //             <button button onClick={() => console.log(321)}>Generate recipe</button>
// //         </Garden>
// //     );
// // }






























// // const garden = () => {
// //     // const [isSelected1, setSelection] = useState(true);
// //     const isSelected1 = true;

// //   return (
// //     <Garden>
// //         <Title>Your Garden</Title>
// //         <ProduceList >
// //             <Produce className={isSelected1 ? 'selected' : 'not'}>
// //                 <ProduceName>Potato</ProduceName>
// //                 <Actions>
// //                     <Forum>Forum</Forum>
// //                     <Delete type='button' onClick={() => this.isSelected1} ><CgClose style={{justifyContent: 'center'}}/></Delete>
// //                 </Actions>
// //             </Produce>
// //             <Produce>
// //                 <ProduceName>Potaato</ProduceName>
// //                 <Actions>
// //                     <Forum>Forum</Forum>
// //                     <Delete><CgClose style={{justifyContent: 'center'}}/></Delete>
// //                 </Actions>
// //             </Produce>
// //             <Produce>
// //                 <ProduceName>Potaaato</ProduceName>
// //                 <Actions>
// //                     <Forum>Forum</Forum>
// //                     <Delete><CgClose style={{justifyContent: 'center'}}/></Delete>
// //                 </Actions>
// //             </Produce>
// //         </ProduceList>
// //     </Garden>
// //   )
// // }

// // export default garden