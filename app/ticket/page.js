'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../community/Community.module.css';

// 💡 다국어 텍스트 사전 (한국어 / 영어)
const translations = {
  kr: {
    ticket: 'TICKET',
    store: 'STORE',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    badge: 'BLACK COMBAT TICKET',
    title: 'TICKET',
    description: '블랙컴뱃의 성전, 현장의 뜨거운 열기를 직관할 수 있는 티켓 예매 공간입니다.',
    noticeTitle: '진행 중인 티켓 예매가 없습니다',
    noticeDesc: '현재 오픈된 경기/대회 티켓이 준비 중입니다.\n오픈 일정이 확정되면 공지사항 및 티켓 페이지를 통해 안내됩니다.',
    readyBtn: '티켓 오픈 알림 신청',
    alertMsg: '상품을 준비중입니다.'
  },
  en: {
    ticket: 'TICKET',
    store: 'STORE',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    badge: 'BLACK COMBAT TICKET',
    title: 'TICKET',
    description: 'The sanctuary of Black Combat, a ticketing space to experience the heat of the live venue.',
    noticeTitle: 'No ongoing ticket reservations',
    noticeDesc: 'Tickets for current matches/tournaments are being prepared.\nOnce the opening schedule is confirmed, we will notify you through notices and the ticket page.',
    readyBtn: 'Request Ticket Open Notification',
    alertMsg: 'The product is being prepared.'
  }
};

export default function TicketPage() {
  const [lang, setLang] = useState('kr'); // 💡 기본 언어 설정
  const t = translations[lang];

  // 티켓 준비중 알림 함수
  const handleReadyAlert = (e) => {
    e.preventDefault();
    alert(t.alertMsg);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ── 블랙컴뱃 공식 상단 네비게이션 바 ── */}
      <header className={styles.bcHeader}>
        <div className={styles.bcHeaderContainer}>
          <div className={styles.bcLogoArea}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              BLACK <span>COMBAT</span>
            </Link>
          </div>
          <div className={styles.bcNavBgSlant}>
            <nav className={styles.bcNavLinks}>
              <a href="#none" onClick={handleReadyAlert} className={styles.active}>{t.ticket}</a>
             
              <Link href="/event">{t.event}</Link>
              <Link href="/black-cup">{t.blackcup}</Link>
              <Link href="/ranking">{t.ranking}</Link>
              <Link href="/community">{t.community}</Link>
              
              {/* 💡 언어 선택 셀렉트박스 추가 */}
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                style={{ background: '#1e293b', color: '#fff', border: '1px solid #334155', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}
              >
                <option value="kr">🇰🇷 한국어</option>
                <option value="en">🇺🇸 English</option>
              </select>
            </nav>
          </div>
        </div>
      </header>

      {/* ── 티켓 메인 컨텐츠 영역 ── */}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          
          <div className={styles.header}>
            <div>
              <span className={styles.badge}>{t.badge}</span>
              <h2 className={styles.title}>{t.title}</h2>
              <p className={styles.description}>
                {t.description}
              </p>
            </div>
          </div>

          {/* 티켓 상품 준비중 안내 배너 및 카드 */}
          <div className={styles.noticeBox}>
            <div className={styles.noticeIcon}>🎫</div>
            <h3 className={styles.noticeTitle}>{t.noticeTitle}</h3>
            <p className={styles.noticeDesc} style={{ whiteSpace: 'pre-line' }}>
              {t.noticeDesc}
            </p>
            <button 
              onClick={handleReadyAlert}
              className={styles.readyBtn}
            >
              {t.readyBtn}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}