import React, { useState, useEffect } from "react";

import headshot1 from "../assets/headshot1.png";
import headshot2 from "../assets/headshot2.png";
import headshot3 from "../assets/headshot3.png";
import headshot4 from "../assets/headshot4.png";

const avatarUrls = [headshot1, headshot2, headshot3, headshot4];
const designerNames = ["Super designer", "wonder developer", "Curious researches", "Veteran founder"]; // Specific names for super designers

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "friday",
  "saturday",
  "sunday",
  "mon",
];

const menuItems = [
  "lounge",
  "drunkstartups",
  "knowyourteam",
  "charades",
  "doodlerace",
];

function Home() {
  const [activeMenu, setActiveMenu] = useState("lounge");
  const [hoveredAvatar, setHoveredAvatar] = useState(null);
  const [isWaveAnimating, setIsWaveAnimating] = useState(false);
  const [isLoungeWaveAnimating, setIsLoungeWaveAnimating] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMenu((prevMenu) => {
        const currentIndex = menuItems.indexOf(prevMenu);
        const nextIndex = (currentIndex + 1) % menuItems.length;
        return menuItems[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle wave animation on hover for "culture"
  const handleWaveHover = () => {
    setIsWaveAnimating(true);
    setTimeout(() => setIsWaveAnimating(false), 3000); // Animate for 3 seconds
  };

  // Handle wave animation on hover for "lounge"
  const handleLoungeWaveHover = () => {
    setIsLoungeWaveAnimating(true);
    setTimeout(() => setIsLoungeWaveAnimating(false), 3000); // Animate for 3 seconds
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "#63f",
          color: "#fff",
          fontFamily: "Inherit, Inter, sans-serif",
          fontWeight: 700,
          position: "relative",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        {/* Days of week */}
        <div className="days-row"
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "clamp(18px, 6vw, 36px)",
            opacity: 0.4,
            letterSpacing: 1,
            paddingTop: 16,
          }}
        >
          {days.map((day) => (
            day.toLowerCase() === "thursday" ? (
              <span
                key={day}
                className="day day--thursday"
                style={{
                  textTransform: "lowercase",
                  color: "#6C3BFF",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 7vw, 41px)",
                  background: "transparent",
                  margin: "0 0px",
                  lineHeight: 1,
                  textShadow:
                    "-3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff, 0 3px 0 #fff, 3px 0 0 #fff, 0 -3px 0 #fff, -3px 0 0 #fff",
                  padding: "0 1px",
                  borderRadius: 12,
                  opacity: 1,
                  display: "inline-block",
                }}
              >
                {day}
              </span>
            ) : (
              <span
                key={day}
                className="day"
                style={{
                  textTransform: "lowercase",
                }}
              >
                {day}
              </span>
            )
          ))}
        </div>

        {/* Header logo and subtitle */}
  <div style={{ textAlign: "center", marginTop: -41, width: "100%" }}>
          <img
            src={require("../assets/thursday.png")}
            alt="Thursday Logo"
            style={{ height: 51, marginBottom: 0 }}
          />
          <div
            style={{ color: "#fff", fontWeight: 500, fontSize: 13, marginTop: -10 }}
          >
            by True Sparrow
          </div>
        </div>

        {/* Main headline */}
        <div style={{ textAlign: "center", marginTop: "clamp(40px, 10vw, 100px)", width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
          <div style={{ fontWeight: 700, fontSize: "clamp(28px, 8vw, 64px)", lineHeight: 1.1, wordBreak: "break-word" }}>
            where remote teams
            <span style={{ marginLeft: 16, position: "relative", top: 8 }}>
              {avatarUrls.map((url, i) => {
                const bgColors = ["#1eb482", "#ed7b2a", "#05aaff", "#cc3232"];
                const size = i === 0 ? 50 : 48;
                return (
                  <span
                    key={url}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: size,
                      height: size,
                      background: bgColors[i],
                      borderRadius: "50%",
                      marginLeft: i > 0 ? -18 : 0,
                      position: "relative",
                    }}
                    onMouseEnter={() => setHoveredAvatar(i)}
                    onMouseLeave={() => setHoveredAvatar(null)}
                  >
                    <img
                      src={url}
                      alt="avatar"
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        border: "4px solid #fff",
                        objectFit: "cover",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    />
                    {hoveredAvatar === i && (
                      <div
                        style={{
                          position: "absolute",
                          top: -40,
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: bgColors[i],
                          color: "#fff",
                          padding: "4px 8px",
                          borderRadius: 4,
                          fontSize: 12,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {designerNames[i]}
                      </div>
                    )}
                  </span>
                );
              })}
            </span>
          </div>
          <div style={{ fontWeight: 700, fontSize: "clamp(22px, 7vw, 52px)", lineHeight: 1.1, marginTop: 8, wordBreak: "break-word" }}>
            build strong{" "}
            <span
              style={{ position: "relative", display: "inline-block" }}
              onMouseEnter={handleWaveHover}
              onMouseLeave={() => setIsWaveAnimating(false)}
            >
              culture
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -8,
                  height: 10,
                  background: "none",
                  pointerEvents: "none",
                  width: "100%",
                }}
              >
                <svg
                  width="100%"
                  height="16"
                  viewBox="0 0 180 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block" }}
                >
                  <path
                    d="M2 8C10 16 22 0 30 8C38 16 50 0 58 8C66 16 78 0 86 8C94 16 106 0 114 8C122 16 134 0 142 8C150 16 162 0 170 8"
                    stroke="#fff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{
                      transition: isWaveAnimating
                        ? "d 3s ease-in-out"
                        : "none",
                      animation: isWaveAnimating
                        ? "waveAnimation 3s ease-in-out"
                        : "none",
                    }}
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(40px, 10vw, 100px)",
            fontSize: "clamp(15px, 5vw, 28px)",
            fontWeight: 500,
            color: "#d6cfff",
            padding: "0 6vw",
          }}
        >
          Connect over engaging social activities.
          <br />
          <span style={{ color: "#d6cfff", fontWeight: 500 }}>
            Fun times are just 1-click away.
          </span>
        </div>

        {/* Get started now button and handwritten note */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "clamp(32px, 8vw, 64px)",
            position: "relative",
            minHeight: "120px",
            width: "100%",
          }}
        >
          <button
            style={{
              background: "#fff",
              color: "#6C3BFF",
              border: 0,
              borderRadius: 24,
              boxShadow: "0 2px 4px -1px rgba(0,0,0,.24)",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "clamp(15px, 5vw, 22px)",
              lineHeight: "160%",
              padding: "clamp(8px, 3vw, 16px) clamp(12px, 6vw, 24px)",
              textAlign: "center",
              transition: "transform .3s",
              verticalAlign: "middle",
              marginBottom: 16,
              fontWeight: 700,
              width: "clamp(200px, 70vw, 320px)",
            }}
          >
            Get started now
          </button>
          {/* Handwritten note and arrow */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 70,
              transform: "translateX(-50%)",
              pointerEvents: "none",
              width: "clamp(180px, 70vw, 350px)",
              height: 90,
            }}
          >
            <svg
              width="140"
              height="42"
              style={{ position: "absolute", left: -16, top: 0 }}
            >
              <path
                d="M 0 10 Q 80 60 210 40"
                stroke="#fff"
                strokeWidth="3"
                fill="none"
              />
            </svg>
            <span
              style={{
                color: "#fff",
                fontFamily: "Caveat, cursive",
                fontSize: 14,
                position: "absolute",
                left: 80,
                top: 22,
                whiteSpace: "nowrap",
                transform: "rotate(-8deg)",
                letterSpacing: 1,
              }}
            >
              No Sign-up required{" "}
              <span style={{ fontSize: 32, fontFamily: "LabilB" }}></span>
            </span>
          </div>
        </div>

        {/* Lounge Section */}
        <div
          style={{
            margin: "clamp(32px, 8vw, 80px) auto 0 auto",
            maxWidth: "100vw",
            borderRadius: "clamp(16px, 5vw, 40px)",
            padding: "clamp(16px, 5vw, 32px) 0 clamp(24px, 7vw, 48px) 0",
            position: "relative",
            minHeight: "220px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Top purple bar with menu */}
          <div
            style={{
              background: "#63f",
              borderTopLeftRadius: "clamp(16px, 5vw, 40px)",
              borderTopRightRadius: "clamp(16px, 5vw, 40px)",
              minHeight: "clamp(32px, 6vw, 64px)",
              width: "100%",
              maxWidth: "100%",
              display: "flex",
              marginTop: "-4vw",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(16px, 6vw, 48px)",
              position: "relative",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 5vw, 44px)", marginTop: "clamp(16px, 5vw, 40px)", flexWrap: "wrap", padding: "0 16px", boxSizing: "border-box" }}>
              <span
                style={{
                  color: "#fff",
                  fontWeight: 630,
                  fontSize: "clamp(16px, 4.5vw, 22px)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  opacity: activeMenu === "lounge" ? 1 : 0.7,
                }}
                onClick={() => setActiveMenu("lounge")}
              >
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <rect
                    x="6"
                    y="10"
                    width="20"
                    height="12"
                    rx="6"
                    fill="#fff"
                    fillOpacity="0.18"
                  />
                  <rect
                    x="10"
                    y="14"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#fff"
                  />
                </svg>
                lounge
              </span>
              <span
                style={{
                  color: "#fff",
                  fontWeight: 630,
                  fontSize: "clamp(16px, 4.5vw, 22px)",
                  opacity: activeMenu === "drunkstartups" ? 1 : 0.8,
                  cursor: "pointer",
                }}
                onClick={() => setActiveMenu("drunkstartups")}
              >
                drunk startups
              </span>
              <span
                style={{
                  color: "#fff",
                  fontWeight: 630,
                  fontSize: "clamp(16px, 4.5vw, 22px)",
                  opacity: activeMenu === "knowyourteam" ? 1 : 0.8,
                  cursor: "pointer",
                }}
                onClick={() => setActiveMenu("knowyourteam")}
              >
                know your team
              </span>
              <span
                style={{
                  color: "#fff",
                  fontWeight: 630,
                  fontSize: "clamp(16px, 4.5vw, 22px)",
                  opacity: activeMenu === "charades" ? 1 : 0.8,
                  cursor: "pointer",
                }}
                onClick={() => setActiveMenu("charades")}
              >
                charades
              </span>
              <span
                style={{
                  color: "#fff",
                  fontWeight: 630,
                  fontSize: "clamp(16px, 4.5vw, 22px)",
                  opacity: activeMenu === "doodlerace" ? 1 : 0.8,
                  cursor: "pointer",
                }}
                onClick={() => setActiveMenu("doodlerace")}
              >
                doodle race
              </span>
            </div>
          </div>
          {/* Lounge or other menu images */}
          {activeMenu === "lounge" && (
            <img
              src={require("../assets/lounge.png")}
              alt="Lounge"
              style={{
                width: "100%",
                maxWidth: "1180px",
                marginTop: "clamp(8px, 2vw, 18px)",
                borderRadius: "clamp(16px, 5vw, 49px)",
                boxShadow: "0 2px 12px rgba(108,59,255,0.10)",
                padding: "0 12px",
                boxSizing: "border-box",
              }}
            />
          )}
          {activeMenu === "drunkstartups" && (
            <img
              src={require("../assets/drunkstartups.png")}
              alt="Drunk Startups"
              style={{
                width: "100%",
                maxWidth: "1180px",
                marginTop: "clamp(8px, 2vw, 18px)",
                borderRadius: "clamp(16px, 5vw, 49px)",
                boxShadow: "0 2px 12px rgba(108,59,255,0.10)",
                padding: "0 12px",
                boxSizing: "border-box",
              }}
            />
          )}
          {activeMenu === "knowyourteam" && (
            <img
              src={require("../assets/knowyourteam.png")}
              alt="Know Your Team"
              style={{
                width: "100%",
                maxWidth: "1180px",
                marginTop: "clamp(8px, 2vw, 18px)",
                borderRadius: "clamp(16px, 5vw, 49px)",
                boxShadow: "0 2px 12px rgba(108,59,255,0.10)",
                padding: "0 12px",
                boxSizing: "border-box",
              }}
            />
          )}
          {activeMenu === "charades" && (
            <img
              src={require("../assets/charades.png")}
              alt="Charades"
              style={{
                width: "100%",
                maxWidth: "1180px",
                marginTop: "clamp(8px, 2vw, 18px)",
                borderRadius: "clamp(16px, 5vw, 49px)",
                boxShadow: "0 2px 12px rgba(108,59,255,0.10)",
                padding: "0 12px",
                boxSizing: "border-box",
              }}
            />
          )}
          {activeMenu === "doodlerace" && (
            <img
              src={require("../assets/doodlerace.png")}
              alt="Doodle Race"
              style={{
                width: "100%",
                maxWidth: "1180px",
                marginTop: "clamp(8px, 2vw, 18px)",
                borderRadius: "clamp(16px, 5vw, 49px)",
                boxShadow: "0 2px 12px rgba(108,59,255,0.10)",
                padding: "0 12px",
                boxSizing: "border-box",
              }}
            />
          )}
        </div>

        {/* Golden Kitty Winner and client logos section */}
        <div
          style={{
            background: "#FFF9E6",
            width: "100%",
            padding: "clamp(80px, 20vw, 267px) 0 0 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "-10vw",
          }}
        >
          <img
            src={require("../assets/goldenkittywinner.png")}
            alt="Golden Kitty Winner"
            style={{ height: "clamp(36px, 10vw, 54px)", marginBottom: 42 }}
          />
          <div
            style={{
              fontWeight: 450,
              fontSize: "clamp(16px, 4.5vw, 30px)",
              color: "#222",
              marginBottom: "clamp(16px, 5vw, 40px)",
              textAlign: "center",
              padding: "0 6vw",
            }}
          >
            The best remote teams love Thursday
          </div>
          <style>{`
            .logo-row-scroll {
              display: flex;
              flex-direction: row;
              gap: 48px;
              width: 100%;
              max-width: 1300px;
              margin-bottom: 36px;
              overflow: hidden;
              scrollbar-width: none;
              -ms-overflow-style: none;
              mask-image: linear-gradient(to right, transparent 0%, #FFF7D6 5%, #FFF7D6 95%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, #FFF7D6 5%, #FFF7D6 95%, transparent 100%);
            }

            .logo-row-scroll::-webkit-scrollbar {
              display: none;
            }

            .scroll-track {
              display: flex;
              gap: 48px;
              flex-shrink: 0;
              animation: scroll 29s linear infinite;
            }

            /* First row (right-to-left) */
            .logo-row-rtl .scroll-track {
              animation-name: scroll-rtl;
            }

            /* Second row (left-to-right) */
            .logo-row-ltr .scroll-track {
              animation-name: scroll-ltr;
            }

            @keyframes scroll-rtl {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            @keyframes scroll-ltr {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }

            @keyframes waveAnimation {
              0% { d: "M2 8C10 16 22 0 30 8C38 16 50 0 58 8C66 16 78 0 86 8C94 16 106 0 114 8C122 16 134 0 142 8C150 16 162 0 170 8"; }
              50% { d: "M2 8C15 16 30 0 45 8C60 16 75 0 90 8C105 16 120 0 135 8C150 16 165 0 170 8"; }
              100% { d: "M2 8C10 16 22 0 30 8C38 16 50 0 58 8C66 16 78 0 86 8C94 16 106 0 114 8C122 16 134 0 142 8C150 16 162 0 170 8"; }
            }
          `}</style>

          <div
            style={{
              background: "#fff3cc",
              borderRadius: "clamp(16px, 5vw, 48px)",
              boxShadow:
                "0 2px 16px rgba(0,0,0,0.06), inset 0 2px 4px -1px rgba(0, 0, 0, .24)",
              padding: "clamp(12px, 5vw, 40px) clamp(8px, 4vw, 24px)",
              width: "100%",
              maxWidth: "1100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "clamp(24px, 7vw, 64px)",
              marginTop: "clamp(4px, 2vw, 10px)",
              overflow: "hidden",
            }}
          >
            {/* First row: right-to-left */}
            <div className="logo-row-scroll logo-row-rtl">
              <div className="scroll-track">
                <div style={{ display: "flex", gap: 64 }}>
                  <img
                    src={require("../assets/twitter.png")}
                    alt="twitter"
                    style={{ height: "clamp(28px, 8vw, 60px)" }}
                  />
                  <img
                    src={require("../assets/groww.png")}
                    alt="groww"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/bookmyshow.png")}
                    alt="bookmyshow"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/paytminsider.png")}
                    alt="paytm insider"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/frog.png")}
                    alt="frog"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/hyperfury.png")}
                    alt="hyperfury"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/flowhub.png")}
                    alt="flowhub"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/springworks.png")}
                    alt="springworks"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/vimeo.png")}
                    alt="vimeo"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/razorpay.png")}
                    alt="razorpay"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/nespresso.png")}
                    alt="nespresso"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/heydigital.png")}
                    alt="heydigital"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/oracle.png")}
                    alt="oracle"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/daimler.png")}
                    alt="daimler"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/kung.png")}
                    alt="kung"
                    style={{ height: 60 }}
                  />
                </div>
                <div style={{ display: "flex", gap: 48 }}>
                  <img
                    src={require("../assets/twitter.png")}
                    alt="twitter"
                    style={{ height: "clamp(28px, 8vw, 60px)" }}
                  />
                  <img
                    src={require("../assets/groww.png")}
                    alt="groww"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/bookmyshow.png")}
                    alt="bookmyshow"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/paytminsider.png")}
                    alt="paytm insider"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/frog.png")}
                    alt="frog"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/hyperfury.png")}
                    alt="hyperfury"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/flowhub.png")}
                    alt="flowhub"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/springworks.png")}
                    alt="springworks"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/vimeo.png")}
                    alt="vimeo"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/razorpay.png")}
                    alt="razorpay"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/nespresso.png")}
                    alt="nespresso"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/heydigital.png")}
                    alt="heydigital"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/oracle.png")}
                    alt="oracle"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/daimler.png")}
                    alt="daimler"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/kung.png")}
                    alt="kung"
                    style={{ height: 60 }}
                  />
                </div>
              </div>
            </div>

            {/* Second row: left-to-right */}
            <div className="logo-row-scroll logo-row-ltr">
              <div className="scroll-track">
                <div style={{ display: "flex", gap: 48 }}>
                  <img
                    src={require("../assets/ungerboeck.png")}
                    alt="ungerboeck"
                    style={{ height: "clamp(28px, 8vw, 60px)" }}
                  />
                  <img
                    src={require("../assets/geneva.png")}
                    alt="geneva"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/roikings.png")}
                    alt="roikings"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/hitpay.png")}
                    alt="hitpay"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/dubverse.png")}
                    alt="dubverse"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/attest.png")}
                    alt="attest"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/iag.png")}
                    alt="iag"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/shaker.png")}
                    alt="shaker"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/cohabs.png")}
                    alt="cohabs"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/moxie.png")}
                    alt="moxie"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/swiggy.png")}
                    alt="swiggy"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/getaccept.png")}
                    alt="getaccept"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/revenuecycle.png")}
                    alt="revenue cycle coding strategies"
                    style={{ height: 60 }}
                  />
                </div>
                <div style={{ display: "flex", gap: 48 }}>
                  <img
                    src={require("../assets/ungerboeck.png")}
                    alt="ungerboeck"
                    style={{ height: "clamp(28px, 8vw, 60px)" }}
                  />
                  <img
                    src={require("../assets/geneva.png")}
                    alt="geneva"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/roikings.png")}
                    alt="roikings"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/hitpay.png")}
                    alt="hitpay"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/dubverse.png")}
                    alt="dubverse"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/attest.png")}
                    alt="attest"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/iag.png")}
                    alt="iag"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/shaker.png")}
                    alt="shaker"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/cohabs.png")}
                    alt="cohabs"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/moxie.png")}
                    alt="moxie"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/swiggy.png")}
                    alt="swiggy"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/getaccept.png")}
                    alt="getaccept"
                    style={{ height: 60 }}
                  />
                  <img
                    src={require("../assets/revenuecycle.png")}
                    alt="revenue cycle coding strategies"
                    style={{ height: 60 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lounge Team Section (moved down and updated with wave) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#FFFFED",
              padding: "clamp(20px, 7vw, 64px) 0 clamp(20px, 7vw, 64px) 0",
              width: "100%",
              maxWidth: "1100px",
              minHeight: "clamp(180px, 40vw, 420px)",
              boxSizing: "border-box",
              marginTop: "clamp(32px, 8vw, 100px)",
              flexWrap: "wrap",
            }}
          >
            {/* Left Side: Text and CTA */}
            <div style={{ flex: 1, paddingLeft: "clamp(12px, 5vw, 60px)", minWidth: "clamp(180px, 40vw, 480px)", maxWidth: "100%", paddingRight: 16, boxSizing: "border-box" }}>
              <div style={{ marginBottom: 22 }}>
                <img
                  src={require("../assets/loungeicon.png")}
                  alt="Lounge Icon"
                  style={{ width: 55, height: 60 }}
                />
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(22px, 6vw, 48px)",
                  color: "#222",
                  marginBottom: "clamp(8px, 2vw, 16px)",
                  fontFamily: "inherit",
                  lineHeight: 1.1,
                  wordBreak: "break-word",
                }}
              >
                Get together with your
                <br />
                team in{" "}
                <span
                  style={{ position: "relative", display: "inline-block" }}
                  onMouseEnter={handleLoungeWaveHover}
                  onMouseLeave={() => setIsLoungeWaveAnimating(false)}
                >
                  lounge
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: -8,
                      height: 10,
                      background: "none",
                      pointerEvents: "none",
                      width: "100%",
                    }}
                  >
                    <svg
                      width="100%"
                      height="16"
                      viewBox="0 0 120 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: "block" }}
                    >
                      <path
                        d="M2 8C10 16 22 0 30 8C38 16 50 0 58 8C66 16 78 0 86 8C94 16 106 0 114 8"
                        stroke="#A084FF"
                        strokeWidth="4"
                        strokeLinecap="round"
                        style={{
                          transition: isLoungeWaveAnimating
                            ? "d 3s ease-in-out"
                            : "none",
                          animation: isLoungeWaveAnimating
                            ? "waveAnimation 3s ease-in-out"
                            : "none",
                        }}
                      />
                    </svg>
                  </span>
                </span>
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(14px, 4vw, 24px)",
                  color: "#888B92",
                  marginBottom: "clamp(12px, 4vw, 32px)",
                  maxWidth: "100%",
                  lineHeight: 1.3,
                  wordBreak: "break-word",
                }}
              >
                Break out of the Zoom grid - talk, chat and have fun in the lounge.
                Hop onto the stage to show your pretty face!
              </div>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  fontWeight: 700,
                  fontSize: "clamp(16px, 5vw, 26px)",
                  color: "#6C3BFF",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "clamp(4px, 2vw, 8px)",
                }}
              >
                Chill in lounge{" "}
                <span style={{ fontSize: 32, verticalAlign: "middle", marginLeft: 4 }}>
                  &rarr;
                </span>
              </a>
            </div>
            {/* Right Side: Image */}
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "clamp(180px, 40vw, 480px)",
                maxWidth: "100%",
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              <img
                src={require("../assets/loungeteam.png")}
                alt="Lounge Team"
                style={{
                  width: "clamp(180px, 90vw, 600px)",
                  height: "auto",
                  maxWidth: "100%",
                  borderRadius: "clamp(12px, 4vw, 32px)",
                  boxShadow: "0 4px 32px rgba(108,59,255,0.08)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;