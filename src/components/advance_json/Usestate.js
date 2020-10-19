import React from 'react';
import { users_json_data } from '../mock_data/data';


export const Usestate = () => {
  // equivalent to useState(users_json_data) with variable import. 
  const [users, setUsers] = React.useState(users_json_data);  


  const removeUser = (id) => {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  // TIP :: When a function does not have an argument, you can pass it to your jsx directly
  // like {xxx} else you use an arrow function like {() => xxx(arg)} 
  const returnDefaultData = () => {
    // We could have made "users" the value of "allusers" but the value of "users" depends
    // on the modifier which changes its state anytime the setUsers logic is called.
    let allUsers = users_json_data
    setUsers(allUsers)
  }
 
  const clearUsers = () => {
    var all_users = [] //empty Array
    setUsers(all_users)
  }



  return (
    <>
      <h2> JSON Manipulation </h2>
      {users.map((user, index) => {
        var index = index + 1 // since index starts from zero(0).
        const {id, username, password, first_name, last_name, title } = user;
        return (  
          <div key={id} className='item'>
            <b>{index} - {title} {first_name} {last_name} uses <em>{username}</em> as username and has <em>{password}</em> as password. </b>
            <button onClick={() => removeUser(id)} className="btn">remove</button>
            <br />
            <br />
          </div>        
        );
      })}

      <br />
      <br />
      
      <button className='btn' onClick={clearUsers}>
        clear all items
      </button>
      
      <span className='spacer'> </span>
     
      <button className='btn' onClick={returnDefaultData}>
        Return default data
      </button>

      <br />
      <br />

    </>
  );
};


