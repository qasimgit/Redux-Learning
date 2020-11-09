import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./actions";
import { decrement } from "./actions";
import { findAllByDisplayValue } from "@testing-library/react";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello World! This is the first Redux Learning App</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>You are not Logged in to see your credentials</h3>
      <h2>My Credentials</h2>
      {isLogged ? (
        <h3>
          <li>Username: Qasim</li>
          <li>Password: Qadri</li>
        </h3>
      ) : (
        <h2>your are not sign in</h2>
      )}
    </div>
  );
}

export default App;
