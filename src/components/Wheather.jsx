import React from 'react';

let temp = 15;

const Wheather = () => {
  if(temp<15){
      return (
          <div>
              its cold outside!
          </div>
      )
  }else if(temp>=15 && temp<=20){
      return (
          <div>
              its nice outside!
          </div>
      )
  }else if(temp>=25){
      return (
          <div>
              its hot outside!
          </div>
      )
  }
};

export default Wheather;
