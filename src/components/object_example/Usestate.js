// ######################################
// PASSING Object to useState Function
// ######################################

import React, { useState } from 'react';
import { user_object } from '../mock_data/object';

console.log(user_object)

export const Usestate = () => {
  const [user, setUser] = useState(user_object);
  const [count, setCount] = useState(0)
  
  const changePictureURL = () => {
    // We use the spread operator to make a "copy" of the initial user object
    // and apply changes to anything that comes after it
    setUser({ ...user, picture:"Picture URL modified!"});
  };

  return (
    <>
      <h2> Object in useState </h2>
      <div>FirstName : {user.first_name}</div>
      <div>LastName : {user.last_name}</div>
      <div>Title : {user.title}</div>
      <div>Picture URL : {user.picture}</div> 
      <br />
      <br />
      <button className='btn' onClick={changePictureURL}>
        change picture url
      </button>
      <br />
      <br />
    </>
  );
};

