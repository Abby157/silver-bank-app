import { useState } from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleRegister = async (
    e: any
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      await setDoc(
        doc(db, "users", user.uid),
        {
          balance: 5000,
          income: 1200,
          expenses: 300,
          savings: 1000,
          investments: 2000,
          transactions: [
            "Welcome Bonus +$5000",
            "Account Created Successfully",
          ],
        }
      );

      setMessage(
        "Account created successfully ✅"
      );

      setEmail("");
      setPassword("");

    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form
        className="login-box"
        onSubmit={handleRegister}
      >
        <h1>Silver Bank</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          {loading
            ? "Creating..."
            : "Create Account"}
        </button>

        <p>{message}</p>
      </form>
    </div>
  );
}

export default Register;