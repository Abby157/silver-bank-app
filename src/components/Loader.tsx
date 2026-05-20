export default function Loader() {
  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",

        gap: "24px",
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          style={{
            height: "140px",

            borderRadius: "28px",

            background:
              "rgba(255,255,255,0.06)",

            animation:
              "pulse 1.5s infinite",
          }}
        />
      ))}
    </div>
  );
}