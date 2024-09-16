import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(props.initialValue);

  const increase = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      <h2>Stan licznika: {counter}</h2>
      <button onClick={increase}>Dodaj 1</button>
    </div>
  );
}

export default Counter;
