'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './event.css';

// 💡 언어별 텍스트 데이터 딕셔너리
const translations = {
  kr: {
    signup: '회원가입',
    login: '로그인',
    ticket: 'TICKET',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    synopsisTitle: 'SYNOPSYS',
    synopsis1: 'BLACK COMBAT XVII',
    synopsis2: '2026 NOVEMBER 21',
    synopsis3: 'AT GOCHEOK SKY DOME',
    synopsisDesc1: '한국 격투 역사상 최대 규모 2만명',
    synopsisDesc2: '서울 고척돔에서 열릴 블랙컴뱃 17번째 넘버링 대회',
    fightCardTitle: 'FIGHT CARD',
    fighterLeftNick: '섹시야마',
    fighterLeftName: '추성훈',
    fighterRightNick: 'TBD',
    fighterRightName: 'TBD',
    fullFight: 'FULL FIGHT ▶',
    scoreCard: 'SCORE CARD 📄',
    prediction: '승부예측',
  },
  en: {
    signup: 'Sign Up',
    login: 'Login',
    ticket: 'TICKET',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    synopsisTitle: 'SYNOPSIS',
    synopsis1: 'BLACK COMBAT XVII',
    synopsis2: '2026 NOVEMBER 21',
    synopsis3: 'AT GOCHEOK SKY DOME',
    synopsisDesc1: 'The largest event in Korean combat sports history',
    synopsisDesc2: '"20,000 fans" Black Combat\'s 17th numbered event to be held at Seoul Gocheok Sky Dome',
    fightCardTitle: 'FIGHT CARD',
    fighterLeftNick: 'Sexiyama',
    fighterLeftName: 'Chooo Sung-hoon',
    fighterRightNick: 'TBD',
    fighterRightName: 'TBD',
    fullFight: 'FULL FIGHT ▶',
    scoreCard: 'SCORE CARD 📄',
    prediction: 'Prediction',
  }
};

export default function EventPage() {
  const [lang, setLang] = useState('kr'); // 💡 기본 언어 'kr' 설정
  const t = translations[lang];

  return (
    <div className="page-container">
      {/* ── 블랙컴뱃 공식 상단 네비게이션 바 ── */}
      <header className="bc-header">
        <div className="bc-top-util">
          <div className="bc-util-container">
            <Link href="/signup">{t.signup}</Link>
            <Link href="/login">{t.login}</Link>
            {/* 💡 언어 변경 상태 연동 */}
            <select 
              className="bc-lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
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
              <Link href="/ticket">{t.ticket}</Link>
              <Link href="/event" className="active">{t.event}</Link>
              <Link href="/blackcup">{t.blackcup}</Link>
              <Link href="/ranking">{t.ranking}</Link>
              <Link href="/community">{t.community}</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* SYNOPSIS 영역 */}
      <section className="synopsis-section" style={{ marginTop: '30px' }}>
        <h2 className="section-title">{t.synopsisTitle}</h2>
        <div className="synopsis-content">
          <p className="bold-text">{t.synopsis1}</p>
          <p className="bold-text">{t.synopsis2}</p>
          <p className="bold-text mb-4">{t.synopsis3}</p>
          
          <p>{t.synopsisDesc1}</p>
          <p className="mb-4">{t.synopsisDesc2}</p>
        </div>
      </section>

      <hr className="divider" />

      {/* FIGHT CARD 영역 */}
      <section className="fight-card-section">
        <h2 className="section-title">{t.fightCardTitle}</h2>
        
        <div className="matchup-box">
          
          {/* 왼쪽 선수 */}
          <div className="fighter left">
            <div className="info-box">
              <div className="info-top">
                <span className="flag">KR</span>
                <h3 className="nickname">{t.fighterLeftNick}</h3>
                <span className="real-name">{t.fighterLeftName}</span>
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
              <span className="youtube">{t.fullFight}</span> | <span>{t.scoreCard}</span>
            </div>
            <div className="tba-bar">TBA</div>
            <div className="vote-bar">
              <span>0%</span>
              <span>{t.prediction}</span>
              <span>0%</span>
            </div>
          </div>

          {/* 오른쪽 선수 (TBD) */}
          <div className="fighter right">
            <div className="info-box">
              <div className="info-top">
                <span className="flag text-gray">TBD</span>
                <h3 className="nickname text-gray">{t.fighterRightNick}</h3>
                <span className="real-name text-gray">{t.fighterRightName}</span>
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