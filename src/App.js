import React from 'react';
import './App.css';
import Usestate from './components/use_state/Usestate'
import {Usestate as Usestate2} from './components/advance_json/Usestate'
import {Usestate as Usestate3} from './components/object_example/Usestate'



function App() {
  return (
    <div className="App">
       <Usestate /> 
       <hr />
       <Usestate2 />
       <hr />
       <Usestate3 />
    </div>
  );
}

export default App;



