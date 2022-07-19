// import React from 'react'

// export default function components() {
//     const myEle=React.createElement("h1",{},"hello world");
//     const myEle2=React.createElement("h2",{},"hello ");
//     const myEle3=React.createElement("h3",{},"goodmorning");
//     const myEle4=React.createElement("div",{style:{color:"red"}},[myEle,myEle2,myEle3]);
//   return (
//     <div>components
//         {myEle4}
//     </div>
//   )
// }

class Example{
    getinput(){
        document.getElementById("root").innerHTML="react"
    }
}
var obj=new Example();
obj.getinput();

export default Example;