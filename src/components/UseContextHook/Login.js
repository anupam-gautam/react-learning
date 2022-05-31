import React from "react";

function Login({ setUsername }) {
  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}

export default Login;
