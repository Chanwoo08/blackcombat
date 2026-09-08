const matches = [
    {
      id: 1,
      date: "2026. 10. 10",
      event: "BLACK COMBAT 01",
      red: "FIGHTER 01",
      blue: "FIGHTER 02",
      status: "UPCOMING",
    },
    {
      id: 2,
      date: "2026. 10. 24",
      event: "BLACK COMBAT 02",
      red: "FIGHTER 03",
      blue: "FIGHTER 04",
      status: "UPCOMING",
    },
    {
      id: 3,
      date: "2026. 09. 01",
      event: "BLACK COMBAT 00",
      red: "FIGHTER 01",
      blue: "FIGHTER 03",
      status: "RESULT",
    },
  ];
  
  export default function MatchesPage() {
    return (
      <main className="matches-page">
        <header className="header">
          <div className="logo">BLACK COMBAT</div>
  
          <nav className="nav">
            <a href="/">HOME</a>
            <a href="/matches">MATCH</a>
            <a href="/fighters">FIGHTERS</a>
            <a href="/login">LOGIN</a>
          </nav>
        </header>
  
        <section className="matches-header">
          <p>BLACK COMBAT</p>
          <h1>MATCHES</h1>
          <span>경기 일정과 대진 정보를 확인하세요.</span>
        </section>
  
        <section className="match-list">
          {matches.map((match) => (
            <div className="match-item" key={match.id}>
              <div className="match-date">
                <span>{match.date}</span>
                <strong>{match.status}</strong>
              </div>
  
              <div className="match-event">
                <span>{match.event}</span>
  
                <div className="fighters">
                  <strong>{match.red}</strong>
                  <small>VS</small>
                  <strong>{match.blue}</strong>
                </div>
              </div>
  
              <div className="match-arrow">→</div>
            </div>
          ))}
        </section>
      </main>
    );
  }