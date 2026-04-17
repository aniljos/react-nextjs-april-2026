

import { useEffect, useRef, useState, type MouseEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTitle } from "../hooks/useTitle";

function LoginPage() {
  
  "use no memo"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useTitle("Login")

  //invoked on mount
  useEffect(() => {
    console.log("loginpage mounted");
    usernameInputRef.current?.focus();
    //invoked on unmount
    return () => {
      console.log("loginpage unmounted");
    };
  }, []);

  async function login(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (username && password) {
      //validate
      try {
        const url = "http://localhost:9000/login";
        const response = await  axios.post(url, { name: username, password });
        console.log("success", response);
        setMessage("");
        dispatch({
          type: "login",
          payload: {
            isAuthenticated: true,
            username,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
          },
        });

        navigate("/");
      } catch {
        //console.log("failed", error);
        setMessage("Invalid credentials");
        dispatch({type: "logout"});
      }
    } else {
      setMessage("Enter the credentials");
    }
  }

  return (
    <div>
      <h3>Login</h3>
      {message ? <div className="alert alert-warning">{message}</div> : null}

      <form>
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameInputRef}
            //autoFocus
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-success" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
