const base = import.meta.env.BASE_URL;

export default function Slide7Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#1A0A00" }}>
      <img
        src={`${base}hero_bg.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.3 }}
        alt=""
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,10,0,0.8) 0%, rgba(192,57,43,0.2) 50%, rgba(26,10,0,0.95) 100%)" }} />

      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", width: "70vw" }}>
        <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#D4A017", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "3vh" }}>
          Sinolingua Guide
        </div>

        <div style={{ fontSize: "5.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1.5vh" }}>
          汉语之路
        </div>
        <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 700, fontStyle: "italic", color: "#D4A017", marginBottom: "4vh" }}>
          Путь в китайский язык
        </div>

        <div style={{ width: "8vw", height: "3px", background: "#C0392B", margin: "0 auto 4vh" }} />

        <div style={{ fontSize: "1.7vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.75)", lineHeight: 1.7, marginBottom: "6vh" }}>
          Идиомы, сленг, поп-культура, произношение, диалоги и культурный справочник — в одном приложении
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "4vw" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#C0392B" }}>60+</div>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.55)" }}>статей в базе</div>
          </div>
          <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#D4A017" }}>4</div>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.55)" }}>открытых датасета</div>
          </div>
          <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#FFFFFF" }}>iOS</div>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.55)" }}>Android · Web</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "4vh", left: "50%", transform: "translateX(-50%)", fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", color: "rgba(255,248,243,0.35)", fontWeight: 300, letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
        Expo · React Native · TypeScript · ChID · PETCI · LIVAC · Tencent NLP
      </div>
    </div>
  );
}
