const fighters = {
    1: {
      name: "FIGHTER 01",
      weightClass: "LIGHTWEIGHT",
      record: "10 - 2 - 0",
      team: "BLACK COMBAT TEAM",
      wins: 10,
      losses: 2,
      draws: 0,
    },
    2: {
      name: "FIGHTER 02",
      weightClass: "WELTERWEIGHT",
      record: "8 - 1 - 0",
      team: "BLACK COMBAT TEAM",
      wins: 8,
      losses: 1,
      draws: 0,
    },
    3: {
      name: "FIGHTER 03",
      weightClass: "MIDDLEWEIGHT",
      record: "12 - 3 - 0",
      team: "BLACK COMBAT TEAM",
      wins: 12,
      losses: 3,
      draws: 0,
    },
    4: {
      name: "FIGHTER 04",
      weightClass: "FEATHERWEIGHT",
      record: "7 - 2 - 0",
      team: "BLACK COMBAT TEAM",
      wins: 7,
      losses: 2,
      draws: 0,
    },
  };
  
  export default async function FighterDetailPage({ params }) {
    const { id } = await params;
    const fighter = fighters[id];
  
    if (!fighter) {
      return (
        <main className="fighter-detail">
          <h1>선수를 찾을 수 없습니다.</h1>
          <a href="/fighters">선수 목록으로</a>
        </main>
      );
    }
  
    return (
      <main className="fighter-detail">
        <header className="header">
          <div className="logo">BLACK COMBAT</div>
  
          <nav className="nav">
            <a href="/">HOME</a>
            <a href="/matches">MATCH</a>
            <a href="/fighters">FIGHTERS</a>
            <a href="/login">LOGIN</a>
          </nav>
        </header>
  
        <section className="fighter-detail-main">
          <div className="detail-image">
            <span>NO IMAGE</span>
          </div>
  
          <div className="detail-content">
            <p className="detail-category">
              {fighter.weightClass}
            </p>
  
            <h1>{fighter.name}</h1>
  
            <p className="detail-team">
              {fighter.team}
            </p>
  
            <div className="record-box">
              <p>PROFESSIONAL RECORD</p>
              <strong>{fighter.record}</strong>
            </div>
  
            <div className="record-list">
              <div>
                <span>WINS</span>
                <strong>{fighter.wins}</strong>
              </div>
  
              <div>
                <span>LOSSES</span>
                <strong>{fighter.losses}</strong>
              </div>
  
              <div>
                <span>DRAWS</span>
                <strong>{fighter.draws}</strong>
              </div>
            </div>
  
            <a href="/fighters" className="back-button">
              ← BACK TO FIGHTERS
            </a>
          </div>
        </section>
      </main>
    );
  }