import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import Layout from "../components/Layout";
import Header from "../components/Header";
import PremiumCard from "../components/PremiumCard";
import QuickInsights from "../components/QuickInsights";
import ActivityPanel from "../components/ActivityPanel";
import FinancialGoals from "../components/FinancialGoals";
import Transactions from "../components/Transactions";
import TransactionHistory from "../components/TransactionHistory";
import AdvancedTransactions from "../components/AdvancedTransactions";
import FinanceChart from "../components/FinanceChart";
import SendMoneyModal from "../components/SendMoneyModal";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [loading, setLoading] =
    useState(true);

  const [openModal, setOpenModal] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () =>
      clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* HEADER */}
          <Header />

          {/* PAGE TITLE */}
          <motion.div
            className="fade-up"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            style={{
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "70px",
                fontWeight: "bold",
                marginBottom: "10px",
                lineHeight: 1,
              }}
            >
              Dashboard
            </h1>

            <p
              style={{
                color: "#9ca3af",
              }}
            >
              Welcome back to Silver Bank
            </p>
          </motion.div>

          {/* TOP GRID */}
          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",

              gap: "28px",

              marginBottom: "30px",
            }}
          >
            {/* LEFT SIDE */}
            <div>
              {/* STATS */}
              <div
                style={{
                  display: "grid",

                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(220px,1fr))",

                  gap: "24px",

                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    title:
                      "Total Balance",

                    amount:
                      "$24,500",
                  },

                  {
                    title:
                      "Income",

                    amount:
                      "$8,200",
                  },

                  {
                    title:
                      "Expenses",

                    amount:
                      "$3,100",
                  },

                  {
                    title:
                      "Savings",

                    amount:
                      "$12,400",
                  },
                ].map((card) => (
                  <motion.div
                    key={card.title}
                    className="premium-card fade-up"
                    whileHover={{
                      y: -6,
                    }}
                    style={{
                      padding: "30px",

                      borderRadius:
                        "28px",

                      background:
                        "rgba(255,255,255,0.05)",

                      border:
                        "1px solid rgba(255,255,255,0.08)",

                      backdropFilter:
                        "blur(20px)",
                    }}
                  >
                    <p
                      style={{
                        color:
                          "#d1d5db",

                        marginBottom:
                          "16px",
                      }}
                    >
                      {card.title}
                    </p>

                    <h2
                      style={{
                        fontSize:
                          "42px",

                        fontWeight:
                          "bold",
                      }}
                    >
                      {card.amount}
                    </h2>

                    <p
                      style={{
                        color:
                          "#4ade80",

                        marginTop:
                          "16px",

                        fontWeight:
                          "bold",
                      }}
                    >
                      +12.5%
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div
                style={{
                  display: "grid",

                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(180px,1fr))",

                  gap: "20px",
                }}
              >
                {[
                  "Send",
                  "Receive",
                  "Deposit",
                  "Withdraw",
                ].map((button) => (
                  <motion.button
                    key={button}
                    onClick={() => {
                      if (
                        button ===
                        "Send"
                      ) {
                        setOpenModal(
                          true
                        );
                      } else {
                        toast.success(
                          `${button} action successful`
                        );
                      }
                    }}
                    className="premium-button fade-up"
                    whileHover={{
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    style={{
                      border: "none",

                      padding: "22px",

                      borderRadius:
                        "22px",

                      background:
                        "linear-gradient(135deg,#7c3aed,#ff2fb9)",

                      color:
                        "white",

                      fontWeight:
                        "bold",

                      fontSize:
                        "16px",

                      cursor:
                        "pointer",

                      boxShadow:
                        "0 10px 30px rgba(255,47,185,0.25)",
                    }}
                  >
                    {button}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <motion.div
              className="fade-up"
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <PremiumCard />
            </motion.div>
          </div>

          {/* REAL CHART */}
          <FinanceChart />

          {/* QUICK INSIGHTS */}
          <QuickInsights />

          {/* FINANCIAL GOALS */}
          <FinancialGoals />

          {/* BOTTOM GRID */}
          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",

              gap: "28px",

              marginTop: "30px",
            }}
          >
            <div className="fade-up">
              <Transactions />
            </div>

            <div className="fade-up">
              <ActivityPanel />
            </div>
          </div>

          {/* TRANSACTION HISTORY */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
          >
            <TransactionHistory />
          </motion.div>

          {/* ADVANCED TABLE */}
          <AdvancedTransactions />
        </>
      )}

      {/* SEND MONEY MODAL */}
      <SendMoneyModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
      />
    </Layout>
  );
}