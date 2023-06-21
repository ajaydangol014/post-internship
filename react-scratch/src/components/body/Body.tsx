import React, { useEffect, useState } from "react";

interface IBodyProps {}

const Body = (props: IBodyProps) => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount((count) => count - 1);
  };
  const increase = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log("body useeffect");
  }, [count]);

  return (
    <div>
      <button onClick={decrease}>-</button>
      {count}
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Body;
