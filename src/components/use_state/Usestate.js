// ######################################
// useState in a Class Component
// ######################################
// import React, { Component } from 'react';

// class Usestate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   handlecount = () => {
//     var initialCount = this.state.count
//     this.setState({
//       count:initialCount + 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.handlecount} className="btn">
//           Click me to increment
//         </button>
//       </div>
//     );
//   }
// }



// export default Usestate;




// ######################################
// useState in a Functional Component
// ######################################


import React, { useState } from 'react';

function Usestate() {
  const [count, setCount] = useState(0);

  const handlecount = () => {
    var initialCount = count
    setCount(initialCount + 1); // increments the initial count by 1
  }

  return (
    <div>
    <h2> Counter App </h2>
      <p>You clicked {count} times</p>
      <button onClick={handlecount} className="btn">
        Click me
      </button>
    </div>
  );
}


export default Usestate;