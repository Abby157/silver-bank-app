import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", balance: 4000 },
  { name: "Tue", balance: 3000 },
  { name: "Wed", balance: 5000 },
  { name: "Thu", balance: 4200 },
  { name: "Fri", balance: 6100 },
  { name: "Sat", balance: 7200 },
  { name: "Sun", balance: 8500 },
];

export default function RealAnalytics() {
  return (
    <div
      style={{
        padding: "30px",
        borderRadius: "30px",
        background:
          "rgba(255,255,255,0.05)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Real Analytics
        </h2>

        <p
          style={{
            color: "#9ca3af",
            marginTop: "8px",
          }}
        >
          Weekly financial growth
        </p>
      </div>

      <div
        style={{
          width: "100%",
          height: "320px",
        }}
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="colorBalance"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#ff2fb9"
                  stopOpacity={0.9}
                />

                <stop
                  offset="100%"
                  stopColor="#7c3aed"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              stroke="#9ca3af"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="#ff2fb9"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorBalance)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}