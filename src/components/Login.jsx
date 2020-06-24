import React from "react";
import Input from "./Input";
import inputs from "../inputs.js";

function Login(props) {
  return (
    <div>
      <form className="form">
        {inputs.map(input => (
          <Input
            key={input.id}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
