import Link from 'next/link';
import './home.css';

export default function HomePage() {
  return (
    <div className="home-container">
      {/* 1. 최상단 서브 바 (검색창, 비회원 주문조회 제거됨) */}
      <div className="top-sub-bar">
        <div className="top-sub-menu">
          <Link href="/signup">회원가입</Link>
          <Link href="/login">로그인</Link>
          <select className="lang-select">
            <option>🇰🇷 한국어</option>
          </select>
        </div>
      </div>

      {/* 2. 메인 헤더 */}
      <header className="main-header">
        <div className="logo-area">
          <Link href="/" className="logo-text">BLACK COMBAT</Link>
        </div>
        
        <nav className="yellow-nav">
          <div className="nav-links">
            <Link href="#">TICKET</Link>
            <Link href="#">STORE</Link>
            <Link href="/event">EVENT</Link>
            <Link href="/blackcup">BLACK CUP</Link>
            <Link href="/ranking">RANKING</Link>
            {/* 💡 COMMUNITY 경로 연결 완료 */}
            <Link href="/community">COMMUNITY</Link>
          </div>
        </nav>
      </header>

      {/* 3. 메인 배너 영역 */}
      <section className="hero-banner">
        <button className="slider-arrow left">&lt;</button>
        <img 
          src="/images/image_eb160f.jpg"
          alt="Black Combat Banner" 
          className="hero-image"
        />
        <button className="slider-arrow right">&gt;</button>
        
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* 4. 하단 카드 영역 (이벤트 & 랭킹 바로가기) */}
      <section className="bottom-cards-section">
        <div className="cards-wrapper">
          
          {/* 이벤트 카드 */}
          <div className="action-card">
            <div className="card-text">
              <p className="card-subtitle">Event</p>
              <h2 className="card-title">BLACK COMBAT<br />UPCOMING EVENT</h2>
              <Link href="/event" className="detail-btn">자세히 보기</Link>
            </div>
            <div className="card-fighter-bg" style={{ backgroundImage: "url('/images/fighter1.png')" }}></div>
          </div>

          {/* 랭킹 카드 */}
          <div className="action-card">
            <div className="card-text">
              <p className="card-subtitle">Ranking</p>
              <h2 className="card-title">CHECK OUT<br />FIGHTER RANKINGS</h2>
              <Link href="/ranking" className="detail-btn">자세히 보기</Link>
            </div>
            <div className="card-fighter-bg" style={{ backgroundImage: "url('/images/fighter2.png')" }}></div>
          </div>

        </div>
      </section>
    </div>
  );
}