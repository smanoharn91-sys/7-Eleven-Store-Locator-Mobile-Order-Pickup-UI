import React, { useState, useEffect, useRef } from "react";
import { FaCocktail } from "react-icons/fa";

export default function Home3() {
  const [animateWavy, setAnimateWavy] = useState(false);
  const [animateWave, setAnimateWave] = useState(false);
  const [wavePath, setWavePath] = useState("M10 10 Q 60 80, 110 30");
  const waveAnimRef = useRef();

  // Handles hover and stops animation after 3 seconds for wavy underline
  const handleWavyHover = () => {
    setAnimateWavy(true);
    setTimeout(() => setAnimateWavy(false), 3000);
  };

  // Handles wave animation on hover under "Start a mixer"
  const handleWaveHover = () => {
    setAnimateWave(true);
    setTimeout(() => {
      setAnimateWave(false);
      setWavePath("M10 10 Q 60 80, 110 30"); // Reset to original
    }, 3000); // Animate for 3 seconds
  };

  // Cleanup animation frame
  useEffect(() => {
    return () => {
      if (waveAnimRef.current) cancelAnimationFrame(waveAnimRef.current);
    };
  }, []);

  // Inject CSS for animations
  useEffect(() => {
    if (!document.getElementById("wavy-animations")) {
      const style = document.createElement("style");
      style.id = "wavy-animations";
      style.innerHTML = `
        .wavy-underline {
          text-decoration: underline wavy #FF4A4A;
          text-underline-offset: 8px;
        }
        .wavy-animate {
          text-decoration: underline wavy #FF4A4A;
          text-underline-offset: 8px;
          animation: wavyMove 1s linear infinite;
        }
        @keyframes wavyMove {
          0% { text-underline-offset: 8px; }
          50% { text-underline-offset: 16px; }
          100% { text-underline-offset: 8px; }
        }

        /* NEW wave animation (left → right) */
        .wave-path {
          animation: waveSlide 2s linear infinite;
        }
        @keyframes waveSlide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFFFE0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        padding: "32px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 1200,
          width: "100%",
          gap: 24,
          padding: "0 16px",
          boxSizing: "border-box",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side: Image */}
        <div
          style={{
            flex: 1,
            minWidth: 260,
            maxWidth: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../assets/marketingFeatureS2.png")}
            alt="Mixer Card"
            style={{
              width: "100%",
              maxWidth: 550,
              height: "auto",
              borderRadius: 24,
              objectFit: "cover",
              boxShadow: "0 4px 32px rgba(108,59,255,0.08)",
            }}
          />
        </div>

        {/* Right Side: Text */}
        <div
          style={{
            flex: 1,
            minWidth: 260,
            maxWidth: 700,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <FaCocktail size={40} color="#FF4A4A" style={{ marginBottom: 8 }} />
          <h1
            style={{
              fontWeight: 900,
              fontSize: 32,
              color: "#363C3F",
              marginBottom: 8,
              lineHeight: 1.1,
            }}
          >
            <span
              className={animateWavy ? "wavy-animate" : "wavy-underline"}
              style={{ fontStyle: "italic", fontWeight: 900 }}
              onMouseEnter={handleWavyHover}
            >
              Mixers!
            </span>{" "}
            Social activities
            <br />
            <span>in small groups</span>
          </h1>

          <p
            style={{
              fontWeight: 400,
              fontSize: 18,
              color: "#888B92",
              marginBottom: 32,
              maxWidth: 700,
              lineHeight: 1.3,
            }}
          >
            Designed for max fun and conversations. Currently on air: Drunk
            Startups, Doodle Race, Trivia, Would You Rather, 2 truths & a lie,
            Charades, Speed 1-on-1, Mindful Talks, and Know Your Team.
          </p>

          <div
            style={{
              marginTop: 24,
              position: "relative",
              display: "inline-block",
            }}
          >
            <span
              style={{
                color: "#FF4A4A",
                fontWeight: 700,
                fontSize: 24,
                cursor: "pointer",
                verticalAlign: "middle",
              }}
            >
              Start a mixer{" "}
              <span
                style={{
                  fontSize: 28,
                  verticalAlign: "middle",
                  marginLeft: 6,
                }}
              >
                &rarr;
              </span>
            </span>

            <svg
              width="110"
              height="56"
              style={{ position: "absolute", left: 0, top: 40 }}
              onMouseEnter={handleWaveHover}
              onMouseLeave={() => {
                setAnimateWave(false);
                setWavePath("M10 10 Q 60 80, 110 30");
              }}
            >
              <path
                d={wavePath}
                stroke="#FF4A4A"
                strokeWidth="2.5"
                fill="none"
                className={animateWave ? "wave-path" : ""}
              />
            </svg>

            <span
              style={{
                color: "#FF4A4A",
                fontFamily: "cursive",
                fontSize: 18,
                position: "absolute",
                left: 60,
                top: 60,
              }}
            >
              random choice
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
