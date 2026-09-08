export default async function FightersPage() {
    const response = await fetch("http://localhost:3000/api/fighters", {
      cache: "no-store",
    });
  
    const fighters = await response.json();
  
    return (
      <main className="fighters-page">
        <header className="header">
          <div className="logo">BLACK COMBAT</div>
  
          <nav className="nav">
            <a href="/">HOME</a>
            <a href="/matches">MATCH</a>
            <a href="/fighters">FIGHTERS</a>
            <a href="/login">LOGIN</a>
          </nav>
        </header>
  
        <section className="fighters-header">
          <p>BLACK COMBAT</p>
          <h1>FIGHTERS</h1>
          <span>선수들의 정보를 확인하세요.</span>
        </section>
  
        <section className="fighter-grid">
          {fighters.map((fighter) => (
            <a
              href={`/fighters/${fighter._id}`}
              className="fighter-card"
              key={fighter._id}
            >
              <div className="fighter-image">
                <span>NO IMAGE</span>
              </div>
  
              <div className="fighter-info">
                <p>{fighter.weightClass}</p>
  
                <h2>{fighter.name}</h2>
  
                <span>
                  RECORD {fighter.wins} - {fighter.losses} - {fighter.draws}
                </span>
              </div>
            </a>
          ))}
        </section>
      </main>
    );
  }