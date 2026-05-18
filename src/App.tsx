import { useEffect, useState } from "react";

import {
  onAuthStateChanged,
  type User,
} from "firebase/auth";

import { auth } from "./firebase/firebase";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] =
    useState<User | null>(null);

  const [showRegister, setShowRegister] =
    useState(false);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);
        }
      );

    return () => unsubscribe();
  }, []);

  if (user) {
    return <Dashboard />;
  }

  return (
    <div className="login-container">
      {showRegister ? (
        <>
          <Register />

          <p
            className="switch-text"
            onClick={() =>
              setShowRegister(false)
            }
          >
            Already have an account?
            Login
          </p>
        </>
      ) : (
        <>
          <Login />

          <p
            className="switch-text"
            onClick={() =>
              setShowRegister(true)
            }
          >
            Don’t have an account?
            Register
          </p>
        </>
      )}
    </div>
  );
}

export default App;