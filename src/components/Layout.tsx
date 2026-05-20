import {
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

export default function Layout({
  children,
}: Props) {
  const [open, setOpen] =
    useState(false);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* MOBILE BUTTON */}
      <button
        onClick={() =>
          setOpen(true)
        }
        className="mobile-menu-btn"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",

          zIndex: 1000,

          border: "none",

          width: "54px",
          height: "54px",

          borderRadius: "18px",

          background:
            "linear-gradient(135deg,#7c3aed,#ff2fb9)",

          color: "white",

          fontSize: "24px",

          cursor: "pointer",

          display: "none",
        }}
      >
        ☰
      </button>

      {/* DESKTOP SIDEBAR */}
      <div className="desktop-sidebar">
        <Sidebar />
      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div
          style={{
            position: "fixed",

            inset: 0,

            background:
              "rgba(0,0,0,0.55)",

            zIndex: 999,

            display: "flex",
          }}
        >
          <div
            style={{
              width: "280px",

              background:
                "#0f172a",

              height: "100vh",

              position: "relative",
            }}
          >
            {/* CLOSE */}
            <button
              onClick={() =>
                setOpen(false)
              }
              style={{
                position: "absolute",

                top: "20px",
                right: "20px",

                border: "none",

                background: "none",

                color: "white",

                fontSize: "28px",

                cursor: "pointer",
              }}
            >
              ×
            </button>

            <Sidebar />
          </div>
        </div>
      )}

      {/* MAIN */}
      <main
        style={{
          flex: 1,

          padding: "40px",

          overflowX: "hidden",
        }}
      >
        {children}
      </main>
    </div>
  );
}