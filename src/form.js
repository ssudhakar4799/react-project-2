

// import React from 'react'

// function form() {
//   return (
//     <div>
//        
//     </div>
//   )
// }

// export default form;

import React, { Component } from 'react'

export default class form extends Component {
  constructor(){
    super()
    this.state={
        username:""    
        
    }
  }
  namechange=(event)=>{
    console.log(event.target.value);
    this.setState({username:event.target.value})

  }
  agechange=(event)=>{
    console.log(event.target.value);
    this.setState({age:event.target.value})

  }
  submit=(event)=>{
    event.preventDefault();
    console.log(this.state);
  }
    render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input name='username'
        //    value={this.state.username} 
           onChange={this.namechange}></input>
           <input name='age'
        //    value={this.state.username} 
           onChange={this.agechange}></input>
//         <input type="submit"></input>
        </form>
      </div>
    )
  }
}
