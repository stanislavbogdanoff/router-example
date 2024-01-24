import { useState } from "react";

const HomePage = () => {
  const [inputState, setInputState] = useState("");

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        libero itaque ipsa non similique quos voluptatum tempora facere, sint
        rerum quam iste cum laudantium ratione magnam perspiciatis nemo
        excepturi amet.
      </p>
      <input
        name="text"
        placeholder="Enter some text..."
        value={inputState}
        onChange={(event) => {
          setInputState(event.target.value);
          console.log(event.target.value);
        }}
      />
      <h3>Current input is: {inputState}</h3>
    </div>
  );
};

export default HomePage;
