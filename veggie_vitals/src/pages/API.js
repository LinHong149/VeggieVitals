import React from 'react'
import Nav from '../components/nav/nav'
import AddToForums from '../components/AddToForums/AddToForums'



const API = () => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer tok_dev_vCDxZcNBWH1V17xMV9UKtKeNj35yAYraS9ZPk7oC1sx4aqbswvt9JYbcx79wmBaF");
    
    var raw = JSON.stringify({
      "name": "world"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://steph-and-ee.autocode.dev/veggie-vitals@dev/", requestOptions)
      .then(response => response.text())
      .then(result => {return result})
      .catch(error => {return error});
    
  }

  export default API


//   componentDidMount() {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     fetch('https://steph-and-ee.autocode.dev/veggie-vitals@dev/', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }