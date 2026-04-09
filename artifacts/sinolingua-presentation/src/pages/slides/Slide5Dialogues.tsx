const base = import.meta.env.BASE_URL;

export default function Slide5Dialogues() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#F5E6DC" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "48vw", height: "100vh", background: "linear-gradient(180deg, #1A0A00 0%, #2D1206 100%)" }} />

      <div style={{ position: "absolute", top: "10vh", left: "5vw", width: "47vw" }}>
        <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#C0392B", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2vh" }}>
          Интерактивный режим
        </div>
        <div style={{ fontSize: "3.8vw", fontFamily: "Playfair Display, serif", fontWeight: 900, color: "#1A0A00", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "3.5vh" }}>
          Диалоги с разветвлёнными сценариями
        </div>
        <div style={{ width: "5vw", height: "3px", background: "#D4A017", marginBottom: "3.5vh" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "1.2vw", height: "1.2vw", borderRadius: "50%", background: "#C0392B", flexShrink: 0 }} />
            <div style={{ fontSize: "1.6vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 400, color: "#1A0A00" }}>5 реальных ситуаций: знакомство, ресторан, дорога, работа, чат</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "1.2vw", height: "1.2vw", borderRadius: "50%", background: "#D4A017", flexShrink: 0 }} />
            <div style={{ fontSize: "1.6vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 400, color: "#1A0A00" }}>Выбор из нескольких ответов с разбором ошибок</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "1.2vw", height: "1.2vw", borderRadius: "50%", background: "#1A0A00", flexShrink: 0 }} />
            <div style={{ fontSize: "1.6vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 400, color: "#1A0A00" }}>Оценка и подробные пояснения к каждому варианту</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "1.2vw", height: "1.2vw", borderRadius: "50%", background: "#9C27B0", flexShrink: 0 }} />
            <div style={{ fontSize: "1.6vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 400, color: "#1A0A00" }}>Уровни: начинающий, средний, продвинутый</div>
          </div>
        </div>

        <div style={{ marginTop: "5vh", padding: "2.5vh 2.5vw", background: "#FFFFFF", borderRadius: "14px", border: "1px solid rgba(192,57,43,0.15)", borderLeft: "4px solid #2196F3" }}>
          <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#1A0A00", lineHeight: 1.7, fontStyle: "italic" }}>
            «Вы в ресторане. Официант спрашивает: 您好！请问您要点什么？ — Выберите ответ...»
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: "8vh", right: "4vw", width: "40vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
        <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#D4A017", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1vh" }}>
          Пример сценария
        </div>

        <div style={{ padding: "2vh 2vw", background: "rgba(255,255,255,0.06)", borderRadius: "12px", borderLeft: "4px solid #D4A017" }}>
          <div style={{ fontSize: "1.2vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "#D4A017", letterSpacing: "0.1em", marginBottom: "0.8vh" }}>СОБЕСЕДНИК</div>
          <div style={{ fontSize: "1.7vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 500, color: "#FFFFFF", marginBottom: "0.5vh" }}>你好！你是新来的留学生吗？</div>
          <div style={{ fontSize: "1.4vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(255,248,243,0.65)" }}>Привет! Ты новый иностранный студент?</div>
        </div>

        <div style={{ fontSize: "1.2vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 600, color: "rgba(255,248,243,0.5)", letterSpacing: "0.1em", marginTop: "0.5vh" }}>ВЫБЕРИТЕ ОТВЕТ:</div>

        <div style={{ padding: "1.8vh 2vw", background: "rgba(67,160,71,0.15)", borderRadius: "10px", border: "1.5px solid #43A047" }}>
          <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 500, color: "#FFFFFF", marginBottom: "0.3vh" }}>是的，我叫李明。你好！</div>
          <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#43A047" }}>Верно: естественно и тепло</div>
        </div>

        <div style={{ padding: "1.8vh 2vw", background: "rgba(229,57,53,0.12)", borderRadius: "10px", border: "1.5px solid rgba(229,57,53,0.5)" }}>
          <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.7)", marginBottom: "0.3vh" }}>我不认识你。</div>
          <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "rgba(229,57,53,0.9)" }}>Слишком резко для знакомства</div>
        </div>

        <div style={{ padding: "1.8vh 2vw", background: "rgba(67,160,71,0.15)", borderRadius: "10px", border: "1.5px solid #43A047" }}>
          <div style={{ fontSize: "1.5vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 500, color: "#FFFFFF", marginBottom: "0.3vh" }}>对，我是。很高兴认识你！</div>
          <div style={{ fontSize: "1.3vw", fontFamily: "Source Sans 3, sans-serif", fontWeight: 300, color: "#43A047" }}>Верно: вежливо и культурно</div>
        </div>
      </div>
    </div>
  );
}
