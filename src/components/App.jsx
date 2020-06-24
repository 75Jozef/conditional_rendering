import React from "react";
import Login from "./Login";

let isLoggedIn = false;
const time = new Date().getHours();

console.log(time);

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}

      {time > 20 && time < 22 ? <h1>Good time to learn?</h1> : null}
    </div>
  );
}

export default App;
