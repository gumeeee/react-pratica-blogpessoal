import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-slate-900 text-5x1 m-4">Login por navigate</h2>
      <div>
        <button
          type="submit"
          onClick={() => navigate("/home")}
          className="hover:underline mx-4"
        >
          Navigate
        </button>
        <Link to="/home" className="hover:underline mx-4">
          Login por link
        </Link>
      </div>
    </div>
  );
}

export default Login;
