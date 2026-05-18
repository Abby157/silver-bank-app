import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#07133a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1>Settings</h1>

        <div
          style={{
            background: "#111c44",
            padding: "30px",
            borderRadius: "20px",
            maxWidth: "500px",
            marginTop: "30px",
          }}
        >
          <h2>Preferences</h2>

          <p>🔔 Notifications Enabled</p>
          <p>🌙 Dark Mode Active</p>
          <p>🔐 Two-Factor Authentication Enabled</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;