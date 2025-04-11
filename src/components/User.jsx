import React from 'react';

const User = (props) => {
  return (
    <div>
        <h1>name = {props.name}</h1>
        <p>age = {props.age}</p>
    </div>
  );
};

export default User;
