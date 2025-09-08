import React from "react";

export default function Home2() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFE0", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: 'Inter, sans-serif', padding: "32px 0" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, maxWidth: 1200, width: "100%", margin: "40px 0", padding: "0 16px", boxSizing: "border-box", flexWrap: "wrap" }}>
          {/* Left Side: Text */}
          <div style={{ flex: 1, minWidth: 260, maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative' }}>
            {/* Handwritten arrow and note */}


            <svg width="180" height="50" style={{ position: 'absolute', left: 60, top: -30 }}>
              <path d="M0 40 Q 60 0, 180 20" stroke="#FF9900" strokeWidth="2.5" fill="none" />
            </svg>


            <span style={{ position: 'absolute', left: 150, top: -10, color: '#FF9900', fontSize: 18, fontFamily: 'cursive', transform: 'rotate(-8deg)' }}>from your team</span>
            <span style={{ color: '#FF9900', fontSize: 48, marginBottom: 16 }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#FF9900"/>
              </svg>
            </span>



            <div style={{ fontWeight: 900, fontSize: 32, color: '#363C3F', fontFamily: 'inherit', lineHeight: 1.1, marginBottom: 16 }}>
              Meet different people<br />every time
            </div>



            <div style={{ fontWeight: 400, fontSize: 18, color: '#888B92', marginBottom: 24, maxWidth: 640, lineHeight: 1.4 }}>
              Mixer groups are randomised for every round. Enjoy with different people each time you go in a mixer.
            </div>


            <div style={{ fontWeight: 700, fontSize: 24, color: '#FF9900', marginBottom: 8, cursor: 'pointer', display: 'inline-block' }}>
              Invite your team <span style={{ fontSize: 36, verticalAlign: 'middle', marginLeft: 6 }}>&rarr;</span>
            </div>
          </div>


          {/* Right Side: Image */}
         <div style={{ flex: 1, minWidth: 260, maxWidth: 600, display: 'flex', justifyContent: 'center', paddingTop: 12 }}>
  <img 
    src={require('../assets/marketingFeatureS3.png')} 
    alt="Meet different people" 
    style={{ width: '100%', maxWidth: 550, height: 'auto', borderRadius: 24, boxShadow: '0 4px 32px rgba(108,59,255,0.08)' }} 
  />
</div>

        </div>
      </div>
    </div>
  );
}
