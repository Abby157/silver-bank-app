import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Mon",
    balance: 4000,
  },

  {
    name: "Tue",
    balance: 3000,
  },

  {
    name: "Wed",
    balance: 5200,
  },

  {
    name: "Thu",
    balance: 4800,
  },

  {
    name: "Fri",
    balance: 6100,
  },

  {
    name: "Sat",
    balance: 5400,
  },

  {
    name: "Sun",
    balance: 7200,
  },
];

export default function FinanceChart() {
  return (
    <div
      className="premium-card fade-up"
      style={{
        marginTop: "30px",

        padding: "30px",

        borderRadius: "30px",

        background:
          "rgba(255,255,255,0.05)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        backdropFilter:
          "blur(20px)",

        height: "420px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",

          marginBottom: "10px",
        }}
      >
        Financial Overview
      </h2>

      <p
        style={{
          color: "#9ca3af",

          marginBottom: "30px",
        }}
      >
        Weekly balance analytics
      </p>

      <ResponsiveContainer
        width="100%"
        height="80%"
      >
        <AreaChart data={data}>
          <XAxis dataKey="name" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="#ff2fb9"
            fill="#7c3aed"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}