import {
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

import NotificationsPanel from "./NotificationsPanel";

export default function Header() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const { darkMode, toggleTheme } =
    useTheme();

  const [
    openNotifications,
    setOpenNotifications,
  ] = useState(false);

  const handleLogout = () => {
    logout();

    toast.success(
      "Logged out successfully"
    );

    navigate("/login");
  };

  return (
    <div
      className="fade-up"
      style={{
        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        marginBottom: "40px",

        gap: "20px",

        flexWrap: "wrap",
      }}
    >
      {/* SEARCH */}
      <div
        className="premium-card"
        style={{
          flex: 1,

          minWidth: "280px",

          padding: "18px 22px",

          borderRadius: "20px",

          background:
            "rgba(255,255,255,0.05)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter:
            "blur(20px)",
        }}
      >
        <input
          placeholder="Search transactions..."
          style={{
            width: "100%",

            background: "transparent",

            border: "none",

            outline: "none",

            color: "white",

            fontSize: "16px",
          }}
        />
      </div>

      {/* RIGHT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {/* THEME */}
        <button
          onClick={toggleTheme}
          className="premium-button"
          style={{
            border: "none",

            padding: "16px 20px",

            borderRadius: "18px",

            background:
              "linear-gradient(135deg,#7c3aed,#ff2fb9)",

            color: "white",

            fontWeight: "bold",

            cursor: "pointer",
          }}
        >
          {darkMode
            ? "☀️ Light"
            : "🌙 Dark"}
        </button>

        {/* NOTIFICATIONS */}
        <div
          style={{
            position: "relative",
          }}
        >
          <button
            onClick={() =>
              setOpenNotifications(
                !openNotifications
              )
            }
            className="premium-button"
            style={{
              border: "none",

              width: "58px",
              height: "58px",

              borderRadius: "18px",

              background:
                "linear-gradient(135deg,#7c3aed,#ff2fb9)",

              color: "white",

              fontSize: "22px",

              cursor: "pointer",

              position: "relative",
            }}
          >
            🔔

            <span
              style={{
                position: "absolute",

                top: "-4px",
                right: "-4px",

                width: "18px",
                height: "18px",

                borderRadius: "50%",

                background: "#ef4444",

                fontSize: "11px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",
              }}
            >
              4
            </span>
          </button>

          <NotificationsPanel
            open={openNotifications}
          />
        </div>

        {/* USER */}
        <div
          className="premium-card"
          style={{
            display: "flex",

            alignItems: "center",

            gap: "14px",

            padding: "14px 18px",

            borderRadius: "20px",

            background:
              "rgba(255,255,255,0.05)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            backdropFilter:
              "blur(20px)",
          }}
        >
          <div
            style={{
              width: "46px",

              height: "46px",

              borderRadius: "50%",

              background:
                "linear-gradient(135deg,#7c3aed,#ff2fb9)",
            }}
          />

          <div>
            <h4
              style={{
                fontSize: "15px",
              }}
            >
              Abby Cyrus
            </h4>

            <p
              style={{
                color: "#9ca3af",

                fontSize: "13px",
              }}
            >
              Premium Client
            </p>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="premium-button"
          style={{
            border: "none",

            padding: "16px 22px",

            borderRadius: "18px",

            background:
              "linear-gradient(135deg,#7c3aed,#ff2fb9)",

            color: "white",

            fontWeight: "bold",

            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}