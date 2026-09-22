'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './home.css';

const bannerImages = Array.from({ length: 17 }, (_, i) => `/images/${i}.png`);

// 💡 다국어 텍스트 사전 (한국어 / 영어)
const translations = {
  kr: {
    signup: '회원가입',
    login: '로그인',
    ticket: 'TICKET',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    eventTitle: 'BLACK COMBAT\nUPCOMING EVENT',
    eventDesc: '자세히 보기',
    rankingTitle: 'CHECK OUT\nFIGHTER RANKINGS',
    rankingDesc: '자세히 보기',
  },
  en: {
    signup: 'Sign Up',
    login: 'Login',
    ticket: 'TICKET',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    eventTitle: 'BLACK COMBAT\nUPCOMING EVENT',
    eventDesc: 'View Details',
    rankingTitle: 'CHECK OUT\nFIGHTER RANKINGS',
    rankingDesc: 'View Details',
  }
};

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lang, setLang] = useState('kr'); // 💡 기본 언어는 한국어('kr')로 설정

  // 현재 선택된 언어의 텍스트 뭉치 가져오기
  const t = translations[lang];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-container">
      {/* 1. 최상단 서브 바 */}
      <div className="top-sub-bar">
        <div className="top-sub-menu">
          <Link href="/signup">{t.signup}</Link>
          <Link href="/login">{t.login}</Link>
          {/* 💡 셀렉트박스 변경 시 lang 상태 업데이트 */}
          <select 
            className="lang-select" 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="kr">🇰🇷 한국어</option>
            <option value="en">🇺🇸 English</option>
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
            <Link href="ticket">{t.ticket}</Link>
            <Link href="/event">{t.event}</Link>
            <Link href="/blackcup">{t.blackcup}</Link>
            <Link href="/ranking">{t.ranking}</Link>
            <Link href="/community">{t.community}</Link>
          </div>
        </nav>
      </header>

      {/* 3. 메인 배너 영역 (0~16번 사진 슬라이더) */}
      <section className="hero-banner">
        <button className="slider-arrow left" onClick={handlePrev}>&lt;</button>
        <img 
          src={bannerImages[currentIndex]}
          alt={`Black Combat Banner ${currentIndex}`} 
          className="hero-image"
        />
        <button className="slider-arrow right" onClick={handleNext}>&gt;</button>
        
        <div className="slider-dots">
          <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 'bold', background: 'rgba(0,0,0,0.5)', padding: '4px 10px', borderRadius: '10px' }}>
            {currentIndex + 1} / {bannerImages.length}
          </span>
        </div>
      </section>

      {/* 4. 하단 카드 영역 */}
      <section className="bottom-cards-section">
        <div className="cards-wrapper">
          
          {/* 이벤트 카드 */}
          <div className="action-card">
            <div className="card-text">
              <p className="card-subtitle">Event</p>
              <h2 className="card-title" style={{ whiteSpace: 'pre-line' }}>{t.eventTitle}</h2>
              <Link href="/event" className="detail-btn">{t.eventDesc}</Link>
            </div>
            <div className="card-fighter-bg" style={{ backgroundImage: "url('/images/fighter1.png')" }}></div>
          </div>

          {/* 랭킹 카드 */}
          <div className="action-card">
            <div className="card-text">
              <p className="card-subtitle">Ranking</p>
              <h2 className="card-title" style={{ whiteSpace: 'pre-line' }}>{t.rankingTitle}</h2>
              <Link href="/ranking" className="detail-btn">{t.rankingDesc}</Link>
            </div>
            <div className="card-fighter-bg" style={{ backgroundImage: "url('/images/fighter2.png')" }}></div>
          </div>

        </div>
      </section>
    </div>
  );
}