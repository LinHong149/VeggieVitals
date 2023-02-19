// import React from 'react'
// import Nav from '../components/nav/nav'
// import AddToForums from '../components/AddToForums/AddToForums'



// const API = () => {
    
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Authorization", "Bearer tok_dev_3BBqD5NQ38RWof44nt2SP9jj8gFKVA4K6T5FDaVG7HoaZdkNm97y28ZWvJMhMXGK");
    
//     var raw = JSON.stringify({
//       "name": "world"
//     });
    
//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };
    
//     fetch("https://kvthleenhe.autocode.dev/veggievitals@dev/", requestOptions)
//       .then(response => response.text())
//       .then(result => {return result})
//       .catch(error => {return error});
    
//   }

//   export default API


// //   componentDidMount() {
// //     // Simple POST request with a JSON body using fetch
// //     const requestOptions = {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ title: 'React POST Request Example' })
// //     };
// //     fetch('https://steph-and-ee.autocode.dev/veggie-vitals@dev/', requestOptions)
// //         .then(response => response.json())
// //         .then(data => this.setState({ postId: data.id }));
// // }