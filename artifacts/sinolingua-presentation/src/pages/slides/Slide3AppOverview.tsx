const base = import.meta.env.BASE_URL;

export default function Slide3AppOverview() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#1A0A00" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "50vw", height: "100vh", background: "linear-gradient(135deg, #2D1206 0%, #1A0A00 100%)" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: "50vw", height: "100vh", background: "#F5E6DC" }} />
      <div style={{ position: "absolute", top: 0, left: "50vw", width: "3px", height: "100%", background: "#C0392B" }} />

      <div style={{ position: "absolute", top: "10vh", left: "5vw", width: "42vw" }}>
        <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#D4A017", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2.5vh" }}>
          Решение
        </div>
        <div style={{ fontSize: "3.8vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "4vh" }}>
          Всё необходимое — в одном приложении
        </div>
        <div style={{ width: "5vw", height: "3px", background: "#C0392B", marginBottom: "4vh" }} />
        <div style={{ fontSize: "1.7vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.75)", lineHeight: 1.7, marginBottom: "5vh" }}>
          Sinolingua Guide объединяет языковые данные из открытых научных датасетов в удобный мобильный справочник с поиском и фильтрами.
        </div>

        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ padding: "1.5vh 1.8vw", borderRadius: "8px", background: "rgba(192,57,43,0.2)", border: "1px solid rgba(192,57,43,0.4)" }}>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#D4A017" }}>Поиск</div>
            <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.65)" }}>по всем разделам</div>
          </div>
          <div style={{ padding: "1.5vh 1.8vw", borderRadius: "8px", background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)" }}>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#D4A017" }}>Фильтры</div>
            <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.65)" }}>по уровню и типу</div>
          </div>
          <div style={{ padding: "1.5vh 1.8vw", borderRadius: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#D4A017" }}>Офлайн</div>
            <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.65)" }}>без интернета</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: "5vh", right: "3vw", width: "44vw", height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "22vw", height: "80vh", borderRadius: "2.5vw", overflow: "hidden", border: "1.5px solid rgba(192,57,43,0.4)", boxShadow: "0 2vw 5vw rgba(0,0,0,0.35)" }}>
          <img
            src={`${base}app_home.jpg`}
            crossOrigin="anonymous"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            alt="Главный экран приложения"
          />
        </div>
        <div style={{ position: "absolute", bottom: "6vh", right: "1vw", width: "18vw", padding: "1.5vh 1.5vw", background: "#C0392B", borderRadius: "12px", boxShadow: "0 1vw 3vw rgba(192,57,43,0.4)" }}>
          <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5vh" }}>
            Expo / React Native
          </div>
          <div style={{ fontSize: "1.2vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.8)" }}>
            iOS · Android · Web
          </div>
        </div>
      </div>
    </div>
  );
}
