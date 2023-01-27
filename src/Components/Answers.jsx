import React from 'react';
import { personality } from '../personality';
const Answers = ({ topScore }) => {
  return (
    <>
      {personality.map((element, index) => {
        if ((topScore / 3 < 2) & (index == 0)) {
          return (
            <div key={index}>
              <h2>{element.title}</h2>
              <p>{element.details}</p>
              <img src={element.imgUrl} alt="" />
            </div>
          );
        }

        if ((topScore / 3 == 2) & (index == 1)) {
          return (
            <div key={index}>
              <h2>{element.title}</h2>
              <p>{element.details}</p>
              <img src={element.imgUrl} alt="" />
            </div>
          );
        }
        if ((topScore / 3 > 2) & (index == 2)) {
          return (
            <div key={index}>
              <h2>{element.title}</h2>
              <p>{element.details}</p>
              <img src={element.imgUrl} alt="" />
            </div>
          );
        }
      })}
    </>
  );
};

export default Answers;
