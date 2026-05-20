import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Wallet() {
  return (
    <Layout>
      <Header />

      <h1
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        Wallet
      </h1>

      <div
        className="premium-card"
        style={{
          padding: "40px",
          borderRadius: "30px",
          background:
            "rgba(255,255,255,0.05)",
          border:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        Wallet content coming soon.
      </div>
    </Layout>
  );
}