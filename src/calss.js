

// //normal js in class uses

// function Example() {
//     this.name='react'; 
//     this.age=23;
// }
// //function create
// Example.prototype.getinput=function(){
//     console.log(`${this.name}`);
//     console.log(`${this.age}`);
//     return `${this.name}`
// }
// //function call
// const obj=new Example();
// obj.getinput();

// //export
// export default Example;


//es06 function component

class Functioncomponent {
    constructor (){
        this.name="react"
        this.age=23;
    }
    getinput(){
        console.log(`${this.name}`);
        console.log(`${this.age}`);
    }

}
//function call
var obj=new Functioncomponent();
obj.getinput();

export default Functioncomponent;