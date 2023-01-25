import React from 'react';
import { personality } from '../personality';
const Answers = ({ topScore }) => {
  return (
    <>
      {personality.map((element, index) => {
        return (
          <div key={index}>
            <h2 key={index}>{element.title}</h2>
            <p>{element.details}</p>
            <img src={element.imgUrl} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Answers;
