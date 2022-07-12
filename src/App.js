// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'
import Home from './home';
import Products from './products.json'
export default class App extends Component {
  constructor (){
    super();
    this.state={
      name:"sudhakar s",
      cardidems:[]

    }
  
  }
   addtocard(pro) {
    console.log(pro,this.state.cardidems);
    this.setState({cardidems:[...this.state.cardidems,pro]});
    
    
  }


  render() {
    return (
      <div>{this.state.name}<Home name={this.state.name} />
      {
        Products.map((products,index)=>{return <div key={index}>
          <h1>{products.name}</h1>
      <button onClick={()=>this.addtocard(products)}>Add To Card</button>

        </div>})
      }
      <h1>cardidems </h1> {
        this.state.cardidems.map((products,index)=>{return <div key={index}>
          <h1>{products.name}</h1>
      {/* <button onClick={()=>this.addtocard(products)}>Add To Card</button> */}

        </div>})
      }
      <button onClick={()=>this.setState({name:'sudha'})}>change value</button>
      </div>
    )
  }
}
