export default function Slide2Problem() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#FFF8F3" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "35vw", height: "100vh", background: "linear-gradient(180deg, #1A0A00 0%, #2D1206 100%)" }} />
      <div style={{ position: "absolute", top: 0, right: "35vw", width: "1px", height: "100%", background: "#C0392B" }} />

      <div style={{ position: "absolute", top: "12vh", right: "3vw", width: "29vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "76vh" }}>
        <div style={{ fontSize: "18vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "rgba(192,57,43,0.3)", lineHeight: 1, letterSpacing: "-0.05em", userSelect: "none" }}>
          语
        </div>
        <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#D4A017", textAlign: "center", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "-3vh" }}>
          язык
        </div>
      </div>

      <div style={{ position: "absolute", top: "10vh", left: "6vw", width: "56vw" }}>
        <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#C0392B", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2vh" }}>
          Проблема
        </div>
        <div style={{ fontSize: "4vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#1A0A00", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "6vh" }}>
          Китайский сложнее, чем кажется
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", background: "#C0392B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.5vw", color: "#FFFFFF", fontFamily: "Playfair Display, serif", fontWeight: 900 }}>1</span>
            </div>
            <div>
              <div style={{ fontSize: "1.9vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#1A0A00", marginBottom: "0.5vh" }}>4 тона и тональный сандхи</div>
              <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.5 }}>Один слог — четыре разных слова. Правила меняются в зависимости от контекста.</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", background: "#D4A017", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.5vw", color: "#FFFFFF", fontFamily: "Playfair Display, serif", fontWeight: 900 }}>2</span>
            </div>
            <div>
              <div style={{ fontSize: "1.9vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#1A0A00", marginBottom: "0.5vh" }}>Идиомы без контекста непонятны</div>
              <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.5 }}>成语 несут культурные смыслы, которых нет в словарях.</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", background: "#1A0A00", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.5vw", color: "#D4A017", fontFamily: "Playfair Display, serif", fontWeight: 900 }}>3</span>
            </div>
            <div>
              <div style={{ fontSize: "1.9vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#1A0A00", marginBottom: "0.5vh" }}>Живой язык не в учебниках</div>
              <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.5 }}>YYDS, 躺平, 内卷 — интернет-сленг меняется быстрее любого пособия.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
