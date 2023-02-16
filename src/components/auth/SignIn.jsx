import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Ingresa un correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresa una contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Log in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
