export default function Slide4Features() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#FFF8F3" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "28vh", background: "linear-gradient(180deg, #1A0A00 0%, #2D1206 100%)" }} />
      <div style={{ position: "absolute", top: "28vh", left: 0, width: "100%", height: "3px", background: "#C0392B" }} />

      <div style={{ position: "absolute", top: "6vh", left: "6vw", right: "6vw" }}>
        <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#D4A017", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5vh" }}>
          Функционал
        </div>
        <div style={{ fontSize: "3.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Шесть разделов приложения
        </div>
      </div>

      <div style={{ position: "absolute", top: "31vh", left: "5vw", right: "5vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2vw" }}>
        <div style={{ padding: "2.5vh 2vw", background: "#FFFFFF", borderRadius: "14px", border: "1px solid #F0D9CC", borderLeft: "4px solid #C0392B" }}>
          <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#C0392B", marginBottom: "0.8vh" }}>成语</div>
          <div style={{ fontSize: "1.7vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#1A0A00", marginBottom: "0.8vh" }}>Чэнъюи</div>
          <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.5 }}>20 классических идиом с пиньинем, переводами и примерами</div>
        </div>

        <div style={{ padding: "2.5vh 2vw", background: "#FFFFFF", borderRadius: "14px", border: "1px solid #F0D9CC", borderLeft: "4px solid #9C27B0" }}>
          <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#9C27B0", marginBottom: "0.8vh" }}>网络</div>
          <div style={{ fontSize: "1.7vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#1A0A00", marginBottom: "0.8vh" }}>Сленг и сокращения</div>
          <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.5 }}>20 современных выражений — YYDS, 躺平, 内卷 с историей и примерами</div>
        </div>

        <div style={{ padding: "2.5vh 2vw", background: "#FFFFFF", borderRadius: "14px", border: "1px solid #F0D9CC", borderLeft: "4px solid #E91E63" }}>
          <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#E91E63", marginBottom: "0.8vh" }}>流行</div>
          <div style={{ fontSize: "1.7vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#1A0A00", marginBottom: "0.8vh" }}>Поп-культура</div>
          <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.5 }}>16 вирусных фраз из дорам, мемов и варьете с культурным контекстом</div>
        </div>

        <div style={{ padding: "2.5vh 2vw", background: "#FFFFFF", borderRadius: "14px", border: "1px solid #F0D9CC", borderLeft: "4px solid #009688" }}>
          <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#009688", marginBottom: "0.8vh" }}>发音</div>
          <div style={{ fontSize: "1.7vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#1A0A00", marginBottom: "0.8vh" }}>Произношение</div>
          <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.5 }}>4 тона, тональные пары и советы для русскоязычных студентов</div>
        </div>

        <div style={{ padding: "2.5vh 2vw", background: "#FFFFFF", borderRadius: "14px", border: "1px solid #F0D9CC", borderLeft: "4px solid #2196F3" }}>
          <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#2196F3", marginBottom: "0.8vh" }}>对话</div>
          <div style={{ fontSize: "1.7vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#1A0A00", marginBottom: "0.8vh" }}>Диалоги</div>
          <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.5 }}>5 интерактивных сценариев с выбором ответа и оценкой</div>
        </div>

        <div style={{ padding: "2.5vh 2vw", background: "#FFFFFF", borderRadius: "14px", border: "1px solid #F0D9CC", borderLeft: "4px solid #D4A017" }}>
          <div style={{ fontSize: "2.5vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#D4A017", marginBottom: "0.8vh" }}>文化</div>
          <div style={{ fontSize: "1.7vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 700, color: "#1A0A00", marginBottom: "0.8vh" }}>Культурный справочник</div>
          <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#8B6B5C", lineHeight: 1.5 }}>12 тем: лицо, подарки, чайная культура, этикет и числа</div>
        </div>
      </div>
    </div>
  );
}
