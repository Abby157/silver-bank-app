import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },

  {
    name: "Wallet",
    path: "/wallet",
  },

  {
    name: "Cards",
    path: "/cards",
  },

  {
    name: "Analytics",
    path: "/analytics",
  },

  {
    name: "Profile",
    path: "/profile",
  },

  {
    name: "Settings",
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: "280px",

        minHeight: "100vh",

        padding: "30px 20px",

        background:
          "rgba(15,23,42,0.92)",

        borderRight:
          "1px solid rgba(255,255,255,0.08)",

        backdropFilter:
          "blur(20px)",

        position: "sticky",

        top: 0,
      }}
    >
      {/* LOGO */}
      <div
        style={{
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "54px",
            fontWeight: "bold",
            lineHeight: 1,
          }}
        >
          Silver
          <br />
          Bank
        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginTop: "12px",
          }}
        >
          Premium Finance
        </p>
      </div>

      {/* MENU */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              textDecoration: "none",

              padding: "18px 20px",

              borderRadius: "20px",

              background: isActive
                ? "linear-gradient(135deg,#7c3aed,#ff2fb9)"
                : "rgba(255,255,255,0.05)",

              color: "white",

              fontWeight: "bold",

              transition: "0.3s",

              boxShadow: isActive
                ? "0 10px 30px rgba(255,47,185,0.25)"
                : "none",
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}