// pages/Login.jsx
import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/auth/login", form);
    login(data);
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email"
        onChange={(e) => setForm({...form, email: e.target.value})}/>
      <input type="password" placeholder="Password"
        onChange={(e) => setForm({...form, password: e.target.value})}/>
      <button>Login</button>
    </form>
  );
};

export default Login;