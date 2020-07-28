import React from "react";
import Input from "../Utilities/ChangeInput";
import Auth from "../Utilities/AxiosWithAuth";

let Register = () => {
  let [username, setUsername] = Input("");
  let [password, setPassword] = Input("");

  let handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      username: username,
      password: password,
    };

    Auth.post("/register", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
