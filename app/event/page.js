import Link from 'next/link';
import './event.css';

export default function EventPage() {
  return (
    <div className="page-container">
      {/* ── 블랙컴뱃 공식 상단 네비게이션 바 ── */}
      <header className="bc-header">
        <div className="bc-top-util">
          <div className="bc-util-container">
            <Link href="/signup">회원가입</Link>
            <Link href="/login">로그인</Link>
            <select className="bc-lang-select">
              <option value="kr">KR 한국어</option>
              <option value="en">EN English</option>
            </select>
          </div>
        </div>
        <div className="bc-header-container">
          <div className="bc-logo-area">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              BLACK <span>COMBAT</span>
            </Link>
          </div>
          <div className="bc-nav-bg-slant">
            <nav className="bc-nav-links">
              <Link href="/ticket">TICKET</Link>
              <Link href="/store">STORE</Link>
              <Link href="/event" className="active">EVENT</Link>
              <Link href="/black-cup">BLACK CUP</Link>
              <Link href="/ranking">RANKING</Link>
              <Link href="/community">COMMUNITY</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* SYNOPSYS 영역 */}
      <section className="synopsis-section" style={{ marginTop: '30px' }}>
        <h2 className="section-title">SYNOPSYS</h2>
        <div className="synopsis-content">
          <p className="bold-text">BLACK COMBAT XVII</p>
          <p className="bold-text">2026 NOVEMBER 21</p>
          <p className="bold-text mb-4">AT GOCHEOK SKY DOME</p>
          
          <p>한국 격투 역사상 최대 규모 2만명</p>
          <p className="mb-4">서울 고척돔에서 열릴 블랙컴뱃 17번째 넘버링 대회</p>

          <p className="bold-text">The largest event in Korean combat sports history</p>
          <p className="bold-text">"20,000 fans" Black Combat's 17th numbered event to be held at Seoul Gocheok Sky Dome</p>
        </div>
      </section>

      <hr className="divider" />

      {/* FIGHT CARD 영역 */}
      <section className="fight-card-section">
        <h2 className="section-title">FIGHT CARD</h2>
        
        <div className="matchup-box">
          
          {/* 왼쪽 선수 */}
          <div className="fighter left">
            <div className="info-box">
              <div className="info-top">
                <span className="flag">KR</span>
                <h3 className="nickname">섹시야마</h3>
                <span className="real-name">추성훈</span>
              </div>
              <div className="info-bottom">
                <span className="record">16W 7L</span>
              </div>
            </div>
            <div className="silhouette">👤</div> 
          </div>

          {/* 중앙 VS 영역 */}
          <div className="vs-area">
            <h2>VS</h2>
            <div className="links">
              <span className="youtube">FULL FIGHT ▶</span> | <span>SCORE CARD 📄</span>
            </div>
            <div className="tba-bar">TBA</div>
            <div className="vote-bar">
              <span>0%</span>
              <span>승부예측</span>
              <span>0%</span>
            </div>
          </div>

          {/* 오른쪽 선수 (TBD) */}
          <div className="fighter right">
            <div className="info-box">
              <div className="info-top">
                <span className="flag text-gray">TBD</span>
                <h3 className="nickname text-gray">TBD</h3>
                <span className="real-name text-gray">TBD</span>
              </div>
              <div className="info-bottom">
                <span className="record right-align">0W 0L</span>
              </div>
            </div>
            <div className="silhouette">👤</div>
          </div>

        </div>
      </section>
    </div>
  );
}