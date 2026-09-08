export default function Home() {
    return (
      <main className="home">
        <header className="header">
          <div className="logo">BLACK COMBAT</div>
  
          <nav className="nav">
            <a href="/">HOME</a>
            <a href="/matches">MATCH</a>
            <a href="/fighters">FIGHTERS</a>
            <a href="/login">LOGIN</a>
          </nav>
        </header>
  
        <section className="hero">
          <div className="hero-content">
            <p className="hero-subtitle">KOREA MMA</p>
  
            <h1>
              BLACK
              <br />
              COMBAT
            </h1>
  
            <p className="hero-description">
              격투기 경기와 선수들의 정보를
              <br />
              한눈에 확인하세요.
            </p>
  
            <div className="hero-buttons">
              <a href="/matches" className="button">
                경기 보러가기
              </a>
  
              <a href="/fighters" className="button outline">
                선수 보기
              </a>
            </div>
          </div>
        </section>
  
        <section className="info">
          <div>
            <span>UPCOMING</span>
            <strong>경기 일정</strong>
          </div>
  
          <div>
            <span>FIGHTERS</span>
            <strong>선수 정보</strong>
          </div>
  
          <div>
            <span>NEWS</span>
            <strong>격투기 소식</strong>
          </div>
        </section>
      </main>
    );
  }