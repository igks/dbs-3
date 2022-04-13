import React, { useState } from "react";
import "./index.css";

export default function Calculator() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [label, setLabel] = useState("+");

  const add = () => {
    setResult(parseInt(value1) + parseInt(value2));
    setCount(count + 1);
    setLabel("+");
  };

  const subtract = () => {
    setResult(parseInt(value1) - parseInt(value2));
    setCount(count + 1);
    setLabel("-");
  };

  const multiply = () => {
    setResult(parseInt(value1) * parseInt(value2));
    setCount(count + 1);
    setLabel("*");
  };

  const divide = () => {
    setResult(parseInt(value1) / parseInt(value2));
    setCount(count + 1);
    setLabel("/");
  };

  const updateValue1 = (value) => {
    setValue1(value);
  };

  const updateValue2 = (value) => {
    setValue2(value);
  };

  const reset = () => {
    setValue1("");
    setValue2("");
    setCount(1);
    setResult(null);
    setLabel("+");
  };

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">
        Total operations performed: {count}
      </div>
      <div className="card">
        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input
              type="number"
              className="ml-3 mr-3"
              data-testid="app-input1"
              autoComplete="off"
              placeholder="Eg: 1"
              name="input1"
              onChange={(e) => updateValue1(e.target.value)}
              value={value1}
            />
            <label
              className="ml-2 mr-2 symbol text-center"
              data-testid="selected-operator"
            >
              {label}
            </label>
            <input
              type="number"
              data-testid="app-input2"
              autoComplete="off"
              className="ml-3 mr-3"
              placeholder="Eg: 2"
              onChange={(e) => updateValue2(e.target.value)}
              value={value2}
            />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button
              className="operationFont"
              type="submit"
              data-testid="addButton"
              onClick={add}
            >
              +
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="subtractButton"
              onClick={subtract}
            >
              -
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="multiplyButton"
              onClick={multiply}
            >
              *
            </button>
            <button
              className="operationFont"
              type="submit"
              data-testid="divideButton"
              onClick={divide}
            >
              /
            </button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button
              type="reset"
              data-testid="resetButton"
              className="outline danger"
              onClick={reset}
            >
              Reset
            </button>
            <div className="layout-row justify-content-center align-items-center result-container">
              {result != null && (
                <div
                  data-testid="result"
                  className="result-value ma-0 slide-up-fade-in"
                >
                  Result: {result}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
