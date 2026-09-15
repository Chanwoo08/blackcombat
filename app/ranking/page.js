'use client';

import Link from 'next/link';
import { useState } from 'react';
import { rankingTabsData } from '../../data/rankingData';
import './ranking.css';

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState('fighter'); // 기본 탭: FIGHTER ('fighter' 또는 'champion')

  const currentData = rankingTabsData[activeTab] || [];

  return (
    <div className="home-container">
      {/* 1. 최상단 서브 바 */}
      <div className="top-sub-bar">
        <div className="top-sub-menu">
          <Link href="#">회원가입</Link>
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
            <Link href="#">BLACK CUP</Link>
            <Link href="/ranking">RANKING</Link>
            <Link href="#">COMMUNITY</Link>
          </div>
        </nav>
      </header>

      {/* 3. 랭킹 페이지 본문 */}
      <div className="ranking-container" style={{ backgroundColor: 'transparent', minHeight: 'auto', padding: '40px 20px' }}>
        
        {/* 상단 검은색 배너 */}
        <div className="ranking-banner">
          <h1>BLACK <span>RANKING</span> COMBAT</h1>
          <p>WHO IS THE KING?</p>
        </div>

        {/* 탭 메뉴 (FIGHTER, CHAMPION 만 남김) */}
        <div className="tab-menu" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <button 
            className={`tab ${activeTab === 'fighter' ? 'active' : ''}`}
            onClick={() => setActiveTab('fighter')}
          >
            FIGHTER
          </button>
          <button 
            className={`tab ${activeTab === 'champion' ? 'active' : ''}`}
            onClick={() => setActiveTab('champion')}
          >
            CHAMPION
          </button>
        </div>

        {/* 체급별 카드 그리드 */}
        <div className="ranking-grid">
          {currentData.map((section, idx) => (
            <div className="ranking-card" key={idx}>
              
              {/* 상단 체급 라벨 및 방어 횟수 배지 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div className={`weight-label ${section.badgeClass}`} style={{ margin: 0 }}>
                  {section.weightName} {activeTab === 'champion' ? 'CHAMPION' : 'CHAMPION'}
                </div>
                {section.defenseCount && (
                  <div style={{ backgroundColor: '#d97706', color: '#fff', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                    방어 {section.defenseCount}
                  </div>
                )}
              </div>
              
              {/* 현재 챔피언 정보 영역 */}
              {section.champion ? (
                <div className="champ-info">
                  <div className="champ-text">
                    <h2>🇰🇷 {section.champion.ringName} <span className="hot">🔥 HOT</span></h2>
                    <p className="name">{section.champion.name}</p>
                    {activeTab === 'champion' ? (
                      <>
                        <p style={{ fontSize: '11px', color: '#555' }}>{section.champion.team}</p>
                        <p style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>{section.champion.date}</p>
                      </>
                    ) : (
                      <>
                        <p className="record">{section.champion.record}</p>
                        <span className="insta">📷</span>
                      </>
                    )}
                  </div>
                  <div 
                    className="champ-img-placeholder"
                    style={{
                      backgroundImage: `url(${section.champion.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: 'none',
                      color: 'transparent'
                    }}
                  >
                    Photo
                  </div>
                </div>
              ) : (
                <div className="champ-info" style={{ justifyContent: 'center', color: '#888', height: '100px' }}>
                  CHAMPION VACANT (공석)
                </div>
              )}

              {/* 리스트 영역 (FIGHTER 탭일 때는 랭커, CHAMPION 탭일 때는 역대 챔피언 히스토리) */}
              <ul className="rank-list">
                {activeTab === 'fighter' ? (
                  section.ranks.map((r) => (
                    <li key={r.rank}>
                      <span>{r.rank}</span> 
                      👤 
                      <div style={{ display: 'inline-block', marginLeft: '8px' }}>
                        <span style={{ fontWeight: 'bold' }}>🇰🇷 {r.name}</span>
                        <span style={{ fontSize: '11px', color: '#777', display: 'block' }}>{r.realName}</span>
                      </div>
                      <span className="list-record">{r.record}</span>
                    </li>
                  ))
                ) : (
                  section.history.map((h, hIdx) => (
                    <li key={hIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
                      <span style={{ width: '35px', fontWeight: 'bold', color: '#d97706' }}>{h.title}</span>
                      👤
                      <div style={{ flex: 1, marginLeft: '10px' }}>
                        <span style={{ fontWeight: 'bold' }}>🇰🇷 {h.name}</span>
                        <span style={{ fontSize: '11px', color: '#777', display: 'block' }}>{h.realName}</span>
                      </div>
                      <span style={{ fontSize: '11px', color: '#888', textAlign: 'right' }}>{h.period}</span>
                    </li>
                  ))
                )}
              </ul>

              {/* 하단 더보기 버튼 */}
              {activeTab === 'fighter' && (
                <div style={{ textAlign: 'center', padding: '15px 0', borderTop: '1px solid #eee', cursor: 'pointer', fontSize: '13px', color: '#555', fontWeight: 'bold' }}>
                  ▼ 더보기
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}