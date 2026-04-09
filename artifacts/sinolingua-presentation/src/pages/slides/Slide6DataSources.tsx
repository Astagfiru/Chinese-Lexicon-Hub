export default function Slide6DataSources() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#FFF8F3" }}>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "8vh", background: "#1A0A00" }} />
      <div style={{ position: "absolute", bottom: "8vh", left: 0, width: "100%", height: "3px", background: "#C0392B" }} />

      <div style={{ position: "absolute", top: 0, right: 0, width: "6vw", height: "100%", background: "linear-gradient(180deg, #C0392B 0%, #D4A017 100%)", opacity: 0.08 }} />

      <div style={{ position: "absolute", top: "7vh", left: "6vw", right: "6vw" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "2vh" }}>
          <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#C0392B", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Источники данных
          </div>
          <div style={{ flex: 1, height: "1px", background: "#F0D9CC" }} />
        </div>

        <div style={{ fontSize: "3.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#1A0A00", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "5vh" }}>
          Открытые лингвистические датасеты
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vw" }}>
          <div style={{ padding: "3vh 2.5vw", background: "#FFFFFF", borderRadius: "16px", border: "1px solid #F0D9CC", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "8vw", height: "8vw", background: "linear-gradient(135deg, #C0392B15, transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#C0392B", marginBottom: "0.8vh" }}>ChID</div>
            <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#1A0A00", marginBottom: "0.8vh" }}>Chinese Idiom Dataset</div>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.6 }}>Идиомы 成语 с контекстными примерами использования в живых текстах</div>
          </div>

          <div style={{ padding: "3vh 2.5vw", background: "#FFFFFF", borderRadius: "16px", border: "1px solid #F0D9CC", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "8vw", height: "8vw", background: "linear-gradient(135deg, #D4A01715, transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#D4A017", marginBottom: "0.8vh" }}>PETCI</div>
            <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#1A0A00", marginBottom: "0.8vh" }}>Parallel English-Chinese Idioms</div>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.6 }}>Параллельный корпус переводов идиом для точных значений</div>
          </div>

          <div style={{ padding: "3vh 2.5vw", background: "#FFFFFF", borderRadius: "16px", border: "1px solid #F0D9CC", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "8vw", height: "8vw", background: "linear-gradient(135deg, #1A0A0015, transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#1A0A00", marginBottom: "0.8vh" }}>LIVAC</div>
            <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#1A0A00", marginBottom: "0.8vh" }}>Synchronous Corpus</div>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.6 }}>Реальные тексты СМИ и медиа из разных регионов китаеязычного мира</div>
          </div>

          <div style={{ padding: "3vh 2.5vw", background: "#FFFFFF", borderRadius: "16px", border: "1px solid #F0D9CC", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "8vw", height: "8vw", background: "linear-gradient(135deg, #00968815, transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#009688", marginBottom: "0.8vh" }}>Tencent NLP</div>
            <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#1A0A00", marginBottom: "0.8vh" }}>Word Embeddings</div>
            <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.6 }}>Огромный словарь современного китайского языка с семантическими связями</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "1.5vh", left: "6vw", fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", color: "rgba(255,248,243,0.6)", fontWeight: 300 }}>
        Данные встроены в приложение в виде TypeScript-датасетов — работает полностью офлайн
      </div>
    </div>
  );
}
