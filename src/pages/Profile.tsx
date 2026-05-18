function Profile() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060b26",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          marginBottom: "30px",
        }}
      >
        My Profile
      </h1>

      <div
        style={{
          background: "#0f1b4c",
          borderRadius: "30px",
          padding: "40px",
          maxWidth: "700px",
          margin: "auto",
          textAlign: "center",
          boxShadow: "0 0 25px rgba(236,72,153,0.2)",
        }}
      >
        <img
          src="https://i.pravatar.cc/200"
          alt="profile"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            marginBottom: "20px",
            border: "4px solid #ec4899",
          }}
        />

        <h2
          style={{
            fontSize: "36px",
            marginBottom: "10px",
          }}
        >
          ABBY
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          abby@silverbank.com
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            className="card-hover"
            style={cardStyle}
          >
            <h3>Account Type</h3>
            <p>Premium Banking</p>
          </div>

          <div
            className="card-hover"
            style={cardStyle}
          >
            <h3>Card Status</h3>
            <p>Active</p>
          </div>

          <div
            className="card-hover"
            style={cardStyle}
          >
            <h3>Currency</h3>
            <p>USD Dollar</p>
          </div>

          <div
            className="card-hover"
            style={cardStyle}
          >
            <h3>Security</h3>
            <p>2FA Enabled</p>
          </div>
        </div>

        <button
          className="action-btn"
          style={{
            marginTop: "40px",
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#091233",
  borderRadius: "20px",
  padding: "25px",
};

export default Profile;