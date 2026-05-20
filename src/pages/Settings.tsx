import {
  useState,
} from "react";

import toast from "react-hot-toast";

import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Settings() {
  const [
    notifications,
    setNotifications,
  ] = useState(true);

  const [
    biometrics,
    setBiometrics,
  ] = useState(false);

  const [
    darkAlerts,
    setDarkAlerts,
  ] = useState(true);

  const Toggle = ({
    active,
    onClick,
  }: {
    active: boolean;

    onClick: () => void;
  }) => (
    <div
      onClick={onClick}
      style={{
        width: "70px",

        height: "38px",

        borderRadius: "999px",

        background: active
          ? "linear-gradient(135deg,#7c3aed,#ff2fb9)"
          : "rgba(255,255,255,0.12)",

        padding: "4px",

        cursor: "pointer",

        display: "flex",

        alignItems: "center",

        justifyContent: active
          ? "flex-end"
          : "flex-start",

        transition: "0.3s",
      }}
    >
      <div
        style={{
          width: "30px",

          height: "30px",

          borderRadius: "50%",

          background: "white",
        }}
      />
    </div>
  );

  const saveChanges = () => {
    toast.success(
      "Settings updated successfully"
    );
  };

  return (
    <Layout>
      <Header />

      {/* TITLE */}
      <div
        className="fade-up"
        style={{
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",

            marginBottom: "10px",
          }}
        >
          Settings
        </h1>

        <p
          style={{
            color: "#9ca3af",
          }}
        >
          Manage your banking preferences
        </p>
      </div>

      {/* SETTINGS CARD */}
      <div
        className="premium-card fade-up"
        style={{
          padding: "35px",

          borderRadius: "30px",

          background:
            "rgba(255,255,255,0.05)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter:
            "blur(20px)",

          display: "flex",

          flexDirection: "column",

          gap: "28px",
        }}
      >
        {/* ITEM */}
        {[
          {
            title:
              "Push Notifications",

            description:
              "Receive banking alerts instantly",

            active:
              notifications,

            action: () =>
              setNotifications(
                !notifications
              ),
          },

          {
            title:
              "Biometric Login",

            description:
              "Enable Face ID / fingerprint login",

            active:
              biometrics,

            action: () =>
              setBiometrics(
                !biometrics
              ),
          },

          {
            title:
              "Security Alerts",

            description:
              "Get notified about suspicious logins",

            active:
              darkAlerts,

            action: () =>
              setDarkAlerts(
                !darkAlerts
              ),
          },
        ].map((setting) => (
          <div
            key={setting.title}
            style={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",

              gap: "20px",

              flexWrap: "wrap",

              paddingBottom: "20px",

              borderBottom:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "20px",

                  marginBottom: "8px",
                }}
              >
                {setting.title}
              </h3>

              <p
                style={{
                  color: "#9ca3af",
                }}
              >
                {setting.description}
              </p>
            </div>

            <Toggle
              active={
                setting.active
              }
              onClick={
                setting.action
              }
            />
          </div>
        ))}

        {/* SAVE BUTTON */}
        <button
          onClick={saveChanges}
          className="premium-button"
          style={{
            border: "none",

            padding: "20px",

            borderRadius: "22px",

            background:
              "linear-gradient(135deg,#7c3aed,#ff2fb9)",

            color: "white",

            fontWeight: "bold",

            fontSize: "16px",

            cursor: "pointer",

            marginTop: "10px",
          }}
        >
          Save Changes
        </button>
      </div>
    </Layout>
  );
}