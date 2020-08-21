import React, { useState } from "react";
import { signUp } from "../../Services/auth";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  return (
    <div>
      <h4>Sign Up</h4>
      <div>
        <label>
          First Name:
          <input
            type="text"
            onChange={(text) => {
              setFirstName(text.target.value);
            }}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            onChange={(text) => {
              setLastName(text.target.value);
            }}
          />
        </label>
        <label>
          Email:
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
      </div>

      <button
        onClick={() => {
          signUp(username, password);
        }}
      >
        Register
      </button>
    </div>
  );
}
