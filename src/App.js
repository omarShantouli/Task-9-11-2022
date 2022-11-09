
// // import React, {useEffect, useState} from "react";
// // import "./App.css";

//import { fileFromSync } from "node-fetch";




// // function App(){   

// //   const[color, setColor] = useState("Red"); // it does not execute when update phase
// //   function Component(){
// //     return (
// //       <div
// //         onClick={() => {
// //           setColor("Green")
// //         }}
// //       >
// //         I am a component
// //       </div>
// //     )
// //   }

// //   return (
// //     <div>
// //       {console.log(color)}
// //       <Component />
// //     </div>
// //   )
// // }



// // export default App;

// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(props)
//   {
//     super(props)
//     this.state = {
//       x : true
//     }
//   }

//   componentWillUnmount(){
//     console.log("i am in the unmnount phase");
//   }

//   change(){
//     this.setState((state) => {
//       return {
//         x : !state.x
//       }
//     })
//   }
  
//   render() {
//     return (
//       <div>
//         {
//           this.state.x ?
//           <div>
//               App
//           </div>
//           :
//           null
//         }
//         <div>
//           <button onClick={this.change.bind(this)}>hide/show</button>
//         </div>

//       </div>
//     )
//   }
// }
// SECOND PART 

// import {useEffect, useState} from "react";

// export default function App(){

//   const [time, setTime] = useState(new Date().toLocaleTimeString())

//  /* useEffect(()=>{
//     setInterval(()=>{
//       setTime(new Date().toLocaleTimeString())
//     }, 1000)
//   }, [])*/

//   useEffect(()=>{ 

//     console.log("Mount");
//     return function(){
//       console.log("DidUnMount");
//     }
//   })



//   return(
//     <div>
//       Time: <span>{time}</span>
//     </div>
//   )
// }

//////////////////
import ControlledComponent from "./ControlledComponent";

 function App(){   


  return (
    <div>
      <ControlledComponent />
    </div>
  )
}
export default App;