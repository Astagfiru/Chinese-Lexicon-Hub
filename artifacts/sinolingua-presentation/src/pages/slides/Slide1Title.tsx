const base = import.meta.env.BASE_URL;

export default function Slide1Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#1A0A00" }}>
      <img
        src={`${base}hero_bg.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.45 }}
        alt=""
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,10,0,0.85) 0%, rgba(192,57,43,0.35) 60%, rgba(26,10,0,0.9) 100%)" }} />

      <div className="absolute inset-0 flex">
        <div className="flex flex-col justify-center" style={{ paddingLeft: "7vw", paddingTop: "5vh", paddingBottom: "5vh", width: "60%" }}>
          <div style={{ marginBottom: "2vh" }}>
            <span style={{ fontSize: "1.4vw", letterSpacing: "0.3em", color: "#D4A017", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, textTransform: "uppercase" }}>
              Мобильное приложение
            </span>
          </div>

          <div style={{ fontSize: "6.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "2.5vh" }}>
            Sinolingua
          </div>
          <div style={{ fontSize: "6.5vw", fontFamily: "Playfair Display, serif", fontWeight: 700, fontStyle: "italic", color: "#D4A017", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "4vh" }}>
            Guide
          </div>

          <div style={{ width: "6vw", height: "3px", background: "#C0392B", marginBottom: "3.5vh" }} />

          <div style={{ fontSize: "1.8vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.85)", lineHeight: 1.6, maxWidth: "38vw" }}>
            Словарь идиом, сленга и культуры для студентов, изучающих китайский язык
          </div>

          <div style={{ marginTop: "5vh", display: "flex", gap: "3vw" }}>
            <div>
              <div style={{ fontSize: "3vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#D4A017" }}>20+</div>
              <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", color: "rgba(255,248,243,0.65)", fontWeight: 400 }}>Чэнъюев</div>
            </div>
            <div style={{ width: "1px", background: "rgba(255,255,255,0.15)" }} />
            <div>
              <div style={{ fontSize: "3vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#D4A017" }}>20+</div>
              <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", color: "rgba(255,248,243,0.65)", fontWeight: 400 }}>Единиц сленга</div>
            </div>
            <div style={{ width: "1px", background: "rgba(255,255,255,0.15)" }} />
            <div>
              <div style={{ fontSize: "3vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#D4A017" }}>6</div>
              <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", color: "rgba(255,248,243,0.65)", fontWeight: 400 }}>Разделов</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center" style={{ width: "40%", paddingRight: "5vw" }}>
          <div style={{ fontSize: "22vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "rgba(192,57,43,0.25)", lineHeight: 1, userSelect: "none", letterSpacing: "-0.05em" }}>
            汉
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "4vh", left: "7vw", fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", color: "rgba(255,248,243,0.4)", fontWeight: 300 }}>
        Данные: ChID · PETCI · LIVAC · Tencent NLP
      </div>
    </div>
  );
}
