import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

function UseContext() {
  const [username, setUsername] = useState("");
  return (
    <div>
      console.log("Hello");
      <Login setUsername={setUsername} />
      <User username={username} />
    </div>
  );
}

export default UseContext;
