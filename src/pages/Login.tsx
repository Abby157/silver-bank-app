import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setMessage("Login successful ✅");

    } catch (error: any) {
      setMessage("Firebase: " + error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050530",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#0a0a80",
          padding: "40px",
          borderRadius: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          boxShadow: "0 0 30px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "60px",
            margin: 0,
            textAlign: "center",
          }}
        >
          Silver Bank
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "20px",
            borderRadius: "15px",
            border: "none",
            fontSize: "20px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "20px",
            borderRadius: "15px",
            border: "none",
            fontSize: "20px",
          }}
        />

        <button
          onClick={login}
          style={{
            padding: "18px",
            borderRadius: "15px",
            border: "none",
            fontSize: "24px",
            fontWeight: "bold",
            cursor: "pointer",
            background:
              "linear-gradient(to right, #cde7ff, #ff4fc3)",
            color: "white",
          }}
        >
          Login
        </button>

        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default Login;