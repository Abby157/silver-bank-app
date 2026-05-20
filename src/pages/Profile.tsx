import {
  useState,
} from "react";

import toast from "react-hot-toast";

import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Profile() {
  const [name, setName] =
    useState("Abby Cyrus");

  const [email, setEmail] =
    useState(
      "abby@silverbank.com"
    );

  const saveProfile = () => {
    toast.success(
      "Profile updated successfully"
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
          Profile
        </h1>

        <p
          style={{
            color: "#9ca3af",
          }}
        >
          Manage your banking identity
        </p>
      </div>

      {/* PROFILE GRID */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",

          gap: "28px",
        }}
      >
        {/* LEFT CARD */}
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

            textAlign: "center",
          }}
        >
          {/* AVATAR */}
          <div
            style={{
              width: "120px",

              height: "120px",

              borderRadius: "50%",

              margin: "0 auto 20px",

              background:
                "linear-gradient(135deg,#7c3aed,#ff2fb9)",
            }}
          />

          <h2
            style={{
              fontSize: "30px",

              marginBottom: "8px",
            }}
          >
            {name}
          </h2>

          <p
            style={{
              color: "#9ca3af",

              marginBottom: "30px",
            }}
          >
            Premium Banking Client
          </p>

          {/* STATS */}
          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(2,1fr)",

              gap: "18px",
            }}
          >
            {[
              {
                label:
                  "Transactions",

                value:
                  "1,248",
              },

              {
                label:
                  "Cards",

                value: "4",
              },

              {
                label:
                  "Investments",

                value:
                  "$12K",
              },

              {
                label:
                  "Rewards",

                value:
                  "8,420",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "20px",

                  borderRadius: "20px",

                  background:
                    "rgba(255,255,255,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize:
                      "24px",
                  }}
                >
                  {item.value}
                </h3>

                <p
                  style={{
                    color:
                      "#9ca3af",

                    marginTop:
                      "8px",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
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
          }}
        >
          <h2
            style={{
              fontSize: "32px",

              marginBottom: "30px",
            }}
          >
            Edit Profile
          </h2>

          {/* NAME */}
          <div
            style={{
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Full Name
            </p>

            <input
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              style={{
                width: "100%",

                padding: "18px",

                borderRadius: "18px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.05)",

                color: "white",

                outline: "none",
              }}
            />
          </div>

          {/* EMAIL */}
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Email
            </p>

            <input
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              style={{
                width: "100%",

                padding: "18px",

                borderRadius: "18px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.05)",

                color: "white",

                outline: "none",
              }}
            />
          </div>

          {/* SAVE */}
          <button
            onClick={saveProfile}
            className="premium-button"
            style={{
              border: "none",

              width: "100%",

              padding: "20px",

              borderRadius: "22px",

              background:
                "linear-gradient(135deg,#7c3aed,#ff2fb9)",

              color: "white",

              fontWeight: "bold",

              fontSize: "16px",

              cursor: "pointer",
            }}
          >
            Save Profile
          </button>
        </div>
      </div>
    </Layout>
  );
}