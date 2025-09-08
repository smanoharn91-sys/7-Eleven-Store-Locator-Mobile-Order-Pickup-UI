import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        bottom: 24,
        transform: "translateX(-50%)",
        zIndex: 100,
        background: "#fff",
        borderRadius: 20,
        boxShadow: "0 2px 12px rgba(108,59,255,0.10)",
        border: "#fff",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        width: isMobile ? "92%" : "20%",
        maxWidth: 900,
        boxSizing: "border-box",
      }}
    >
    {/* Home icon */}
    <div
      style={{
        width: 46,
        height: 46,
        background: "rgba(108,59,255,0.08)",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z"
          stroke="#6C3BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21V12H15V21"
          stroke="#6C3BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Grid icon */}
    <div
      style={{
        width: 46,
        height: 46,
        background: "#e6f7ff",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="38"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.5"
          y="3.5"
          width="7"
          height="7"
          rx="2"
          stroke="#0094e0"
          strokeWidth="2.2"
        />
        <rect
          x="14.5"
          y="3.5"
          width="7"
          height="7"
          rx="2"
          stroke="#0094e0"
          strokeWidth="2.2"
        />
        <rect
          x="3.5"
          y="14.5"
          width="7"
          height="7"
          rx="2"
          stroke="#0094e0"
          strokeWidth="2.2"
        />
        <rect
          x="14.5"
          y="14.5"
          width="7"
          height="7"
          rx="2"
          stroke="#0094e0"
          strokeWidth="2.2"
        />
      </svg>
    </div>

    {/* TS icon */}
    <div
      style={{
        width: 46,
        height: 46,
        background: "rgba(255, 122, 0, 0.08)",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontWeight: 700,
          fontSize: 20,
          color: "#ED7B2A",
          fontFamily: "Inter, sans-serif",
          letterSpacing: 1,
        }}
      >
        TS
      </span>
    </div>

    {/* Get started button */}
      <button
    style={{
      background: "#63f",
      color: "#fff",
      fontWeight: 700,
      fontSize: 20,
      border: "none",
      borderRadius: 15,
      padding: "0 15px",
      height: 50,
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(108,59,255,0.10)",
      fontFamily: "Inter, sans-serif",
      transition: "background 0.2s",
      whiteSpace: "nowrap", 
    }}
  >
    Get started
  </button>
    </div>
  );
};

export default Navbar;