/**
 * Controlled and uncontrolled form inputs
 *
 * Uncontrolled inputs are like traditional HTML form inputs.
 * They remember what you typed. You can then get their value using a ref. For example, in onClick handler of a button:
 * In other words, you have to 'pull' the value from the field when you need it. This can happen when the form is submitted.
 *
 * A controlled input accepts its current value as a prop, as well as a callback to change that value.
 * Which is fine and all... but the value of this input has to live in the state somewhere. Typically, the component that renders the input (aka the form component) saves that in its state
 * Every time you type a new character, handleNameChange is called. It takes in the new value of the input and sets it in the state.
 *
 * Reference: https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/
 */

import React, { useState } from "react";

const Form = (props) => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // Using one state variable for both the fields

  const [state, setState] = useState({
    name: props.user ? props.user.name : "",
    age: props.user ? props.user.age : "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", state);
  };

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleAgeChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={state.age}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
