import React, { useState } from "react";
import { signIn } from "../../Services/auth";
import style from "./style";
export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h4>Log In</h4>
      <label>
        Username:
        <input
          type="text"
          name="username"
          onChange={(text) => {
            setUsername(text.target.value);
          }}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          name="username"
          onChange={(text) => {
            setPassword(text.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          signIn(username, password);
        }}
      >
        Log in
      </button>
    </div>
  );
}
