import React from "react";
import { Button } from "./Button";
import { Ui } from "./Ui";

const Counter = React.memo(() => {
  const [counter, setCounter] = React.useState<number>(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <Ui text={counter} />
      <Button onClick={increment} text="increment" />
      <Button onClick={decrement} text="decrement" />
      <Button onClick={reset} text="reset" />
    </div>
  );
});

export default Counter;
