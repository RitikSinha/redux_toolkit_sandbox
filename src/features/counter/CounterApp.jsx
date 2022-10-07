import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, increment, decrement, add } from "./CouterSlice";
const CounterApp = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const num = Number(value) || 0;
  function resetVal() {
    setValue(0);
    dispatch(reset());
  }
  return (
    <div className="main-box">
      <div className="main">
        <div>CounterApp : {count}</div>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => dispatch(add(num))} className="add">
            Add
          </button>
        </div>

        <div>
          <button onClick={() => dispatch(increment())} className="inc">
            Increment
          </button>
          <button onClick={() => dispatch(decrement())} className="dec">
            Decrement
          </button>
        </div>

        <button onClick={() => resetVal()} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
