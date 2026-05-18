function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Accounts",
    "Cards",
    "Transfers",
    "Analytics",
    "Settings",
  ];

  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#08175c",
        padding: "35px 25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        position: "sticky",
        top: 0,
      }}
    >
      <div>
        {/* LOGO */}
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "42px",
              lineHeight: "1",
              marginBottom: "10px",
            }}
          >
            Silver
            <br />
            Bank
          </h1>

          <p
            style={{
              color: "#9db3ff",
              fontSize: "14px",
            }}
          >
            Premium Banking
          </p>
        </div>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="card-hover"
              style={{
                background:
                  item === "Dashboard"
                    ? "linear-gradient(90deg,#80b3ff,#ff4fd8)"
                    : "#0d216f",
                border: "none",
                padding: "18px",
                borderRadius: "16px",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* USER CARD */}
      <div
        className="card-hover"
        style={{
          background: "#0d216f",
          borderRadius: "22px",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#80b3ff,#ff4fd8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            A
          </div>

          <div>
            <h3
              style={{
                color: "white",
                marginBottom: "4px",
              }}
            >
              ABBY
            </h3>

            <p
              style={{
                color: "#9db3ff",
                fontSize: "14px",
              }}
            >
              Premium User
            </p>
          </div>
        </div>

        <button
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "14px",
            background:
              "linear-gradient(90deg,#80b3ff,#ff4fd8)",
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

export default Sidebar;