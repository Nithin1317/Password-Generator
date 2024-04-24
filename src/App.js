import React, { useState } from 'react';
import "./App.css";
import { generatePassword } from "./generatePassword";

const initialValues = {
  length: 8,
  includeLowerCase: false,
  includeUpperCase: false,
  includeNumber: false,
  includeSymbols: false
};

const App = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !values.includeUpperCase &&
      !values.includeLowerCase &&
      !values.includeNumber &&
      !values.includeSymbols
    ) {
      alert("Please select at least one option for including characters.");
      return;
    }
  
    const password = generatePassword({
      length: values.length,
      includeUpperCase: values.includeUpperCase,
      includeLowerCase: values.includeLowerCase,
      includeNumber: values.includeNumber,
      includeSymbols: values.includeSymbols
    });
    console.log(password.length);
    setGeneratedPassword(password);
  };
  
  const [values, setValues] = useState(initialValues);
  
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setValues({
      ...values,
      [name]: newValue
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPassword);
    alert("Password copied to clipboard!");
  };
  
  return (
    <div className="container">
      <h1 className="heading">Password generator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="length">Current Length: {values.length}</p>
          {generatedPassword && (
            <div className="password-container">
              <p className="generated-pass">{generatedPassword}</p>
              <button type="button" onClick={handleCopy}>Copy</button>
            </div>
          )}
          <div className="flex">
            <p>8</p>
            <input
              id="length"
              name="length"
              value={values.length}
              onChange={handleChange}
              type="range"
              min={8}
              max={26}
            />
            <p>26</p>
          </div>
        </div>
        <div className="flex">
          <label htmlFor="includeUpperCase">Include Uppercase </label>
          <input
            id="includeUpperCase"
            name="includeUpperCase"
            type="checkbox"
            checked={values.includeUpperCase}
            onChange={handleChange}
          />
        </div>
        <div className="flex">
          <label htmlFor="includeLowerCase">Include LowerCase </label>
          <input
            id="includeLowerCase"
            name="includeLowerCase"
            type="checkbox"
            checked={values.includeLowerCase}
            onChange={handleChange}
          />
        </div>
        <div className="flex">
          <label htmlFor="includeNumber">Include Number</label>
          <input
            id="includeNumber"
            name="includeNumber"
            type="checkbox"
            checked={values.includeNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex">
          <label htmlFor="includeSymbols">Include Special </label>
          <input
            id="includeSymbols"
            name="includeSymbols"
            type="checkbox"
            checked={values.includeSymbols}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Generate Password</button>
      </form>
    </div>
  );
};

export default App;
