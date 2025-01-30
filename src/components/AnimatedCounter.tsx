'use client';

import React, { useState } from "react";
// import CountUp from 'react-countup'

const CustomCountUp = ({amount}: {amount: number}): React.ReactNode => {
  let startVal: number = 0;
  let endVal: number = amount;
  let duration: number = 2;
  let skipAdd: number = Math.round(amount/100);

  let [counter, setCounter] = useState(startVal);

  function easeIn(start: number=0, end: number) {
    let maxSpeed = 0.1; //in milli seconds
    let finalSpeed1 = 30; //in milli seconds
    let finalSpeed2 = 200
    let currNum = counter;
    let delay = 0;

    
    //if we are under 90% complete then make the speed faster
    if(currNum <= end * 0.97) {
      delay = (maxSpeed + ((finalSpeed1 - maxSpeed) / (end - start)) * (currNum - start))/2;
    } else {
      delay = maxSpeed + ((finalSpeed2 - maxSpeed) / (end - start)) * (currNum - start)
    }
    
    return delay;
  }

  function increaseCounter() {
    counter += skipAdd;
    if(counter > endVal) counter = endVal

    setTimeout(() => {
      setCounter(counter);
    }, easeIn(startVal, endVal));

    return counter
  }

  return (
    <div className="">
      {counter < endVal ? increaseCounter() : amount}
    </div>
  );
}

const AnimatedCounter = ({amount}: {amount: number}): React.ReactNode => {
  // return (
  //   <div className="w-full">
  //     <CountUp
  //       decimals={2}
  //       // decimal=","
  //       prefix="$"
  //       end={amount}
  //     />
  //   </div>
  // );
  
  return <CustomCountUp amount={3000} />
}

export default AnimatedCounter;