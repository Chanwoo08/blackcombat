'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Ranking.module.css';

// 💡 1. 랭킹 페이지 UI 텍스트 다국어 사전 (kr / en)
const rankingUiTexts = {
  kr: {
    signup: '회원가입',
    login: '로그인',
    ticket: 'TICKET',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    badge: 'BLACK COMBAT OFFICIAL RANKINGS',
    title: 'RANKING & CHAMPIONS',
    description: '블랙컴뱃의 각 체급별 챔피언과 공식 랭커 순위를 확인하실 수 있습니다.',
    tabFighter: '파이터 랭킹',
    tabChampion: '역대 챔피언',
    championTitle: 'CHAMPION',
    defenseLabel: '방어 횟수',
    defenseCountUnit: '회',
    acquisitionDate: '획득일',
    teamLabel: '소속',
    recordLabel: '전적',
    rankTableNo: '순위',
    rankTableRingName: '링네임',
    rankTableRealName: '본명',
    rankTableRecord: '전적',
    historyTitle: '📜 역대 챔피언 이력',
    historyTitleBadge: '타이틀',
    historyPeriod: '재임 기간',
    noChampion: '현재 공석 (Vacant)'
  },
  en: {
    signup: 'Sign Up',
    login: 'Login',
    ticket: 'TICKET',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    badge: 'BLACK COMBAT OFFICIAL RANKINGS',
    title: 'RANKING & CHAMPIONS',
    description: 'Check out the champions and official contender rankings for each weight class.',
    tabFighter: 'Fighter Rankings',
    tabChampion: 'Title History',
    championTitle: 'CHAMPION',
    defenseLabel: 'Defenses',
    defenseCountUnit: '',
    acquisitionDate: 'Won on',
    teamLabel: 'Team',
    recordLabel: 'Record',
    rankTableNo: 'RANK',
    rankTableRingName: 'RING NAME',
    rankTableRealName: 'REAL NAME',
    rankTableRecord: 'RECORD',
    historyTitle: '📜 Title History',
    historyTitleBadge: 'Title',
    historyPeriod: 'Reign Period',
    noChampion: 'Currently Vacant'
  }
};

// 💡 2. 체급별 랭킹 및 챔피언 데이터 구조
const rankingTabsData = {
  fighter: [
    {
      id: 'fly',
      weightName: '플라이급',
      enWeightName: 'Flyweight',
      badgeClass: 'fly',
      champion: {
        ringName: '우마왕',
        name: '우성훈',
        record: '13 / 4 / 0',
        team: 'TEAM MAD',
        date: '획득 : 2026-07-26',
        imageUrl: 'https://www.blackcombat-official.com/theme/blackcombat/img/fighter_new/73873103/73873103_detail.png?v=260727202026'
      },
      ranks: [
        { rank: 1, name: '탱크', realName: '고카키네 타카히로', record: '19 / 6 / 0' },
        { rank: 2, name: '인디언킹', realName: 'Gabriel Rodrigues', record: '7 / 1 / 0' },
        { rank: 3, name: '보르휴', realName: 'Byambasuren', record: '5 / 2 / 0' },
        { rank: 4, name: '윤방관', realName: '윤방관', record: '7 / 6 / 1' },
        { rank: 5, name: '크로커다일', realName: 'Elias De Cruz', record: '18 / 4 / 1' },
        { rank: 6, name: '김관장', realName: '윤성훈', record: '9 / 10 / 3' },
        { rank: 7, name: '바이퍼', realName: '김성웅', record: '8 / 9 / 0' },
        { rank: 8, name: '엔쵸비', realName: '엔쵸비', record: '9 / 1 / 0' },
        { rank: 9, name: '아마존 키드', realName: 'Thomas Assis', record: '12 / 4 / 0' },
        { rank: 10, name: '투건', realName: '정원기', record: '10 / 9 / 0' }
      ]
    },
    {
      id: 'bantam',
      weightName: '밴텀급',
      enWeightName: 'Bantamweight',
      badgeClass: 'bantam',
      champion: {
        ringName: '투신',
        name: '김재웅',
        record: '16 / 8 / 0',
        team: 'EXTREAM COMBAT',
        date: '획득 : 2024-12-28',
        imageUrl: 'https://i.namu.wiki/i/023A42mRsFunNHn8BV1OmgFYpUK6B-_K5RBudYTUIo-MMB80OVsD3bR7fyWoi_vR2USn6bJcBnQOGoYzgO9LtQ.webp'
      },
      ranks: [
        { rank: 1, name: '펜리르', realName: 'Danila Zlochevskii', record: '12 / 0 / 0' },
        { rank: 2, name: '무사', realName: '아카나마 나타니치', record: '16 / 4 / 1' },
        { rank: 3, name: '백세', realName: '이진세', record: '3 / 6 / 0' },
        { rank: 4, name: '백사자', realName: 'Aydemir Kazbekov', record: '15 / 2 / 0' },
        { rank: 5, name: '언더독', realName: '정영일', record: '7 / 6 / 1' },
        { rank: 6, name: '구르드 이글', realName: 'Kurban Aliyev', record: '12 / 0 / 0' },
        { rank: 7, name: '불도저', realName: '정영일', record: '5 / 4 / 0' },
        { rank: 8, name: '골든보이', realName: 'Matheus Correia', record: '12 / 0 / 0' },
        { rank: 9, name: '보오르추', realName: 'Bat-Erdene', record: '5 / 1 / 0' },
        { rank: 10, name: '빅마우스', realName: '김동규', record: '10 / 8 / 0' }
      ]
    },
    {
      id: 'feather',
      weightName: '페더급',
      enWeightName: 'Featherweight',
      badgeClass: 'feather',
      champion: {
        ringName: '시라소니',
        name: '방상혁',
        record: '8 / 0 / 0',
        team: 'TEAM MAD CHUNCHEON',
        date: '획득 : 2025-05-06',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlOD8Et4xIjrslxjldqKFM7OO4Lhjoc3Yz4XENc1MgQ&s=10'
      },
      ranks: [
        { rank: 1, name: '아레스', realName: 'Danila Zlochevskii', record: '12 / 3 / 0' },
        { rank: 2, name: '싸이코', realName: 'Victor Hugo', record: '16 / 8 / 0' },
        { rank: 3, name: '울프킹', realName: 'Artur Nurmurov', record: '14 / 3 / 0' },
        { rank: 4, name: '고리안 모아이', realName: '김민우', record: '13 / 2 / 0' },
        { rank: 5, name: '락스톤', realName: 'Lucas Bento', record: '9 / 7 / 0' },
        { rank: 6, name: '데드샷', realName: 'Daler Ganiev', record: '15 / 4 / 0' },
        { rank: 7, name: '붉은매', realName: '지영민', record: '8 / 1 / 0' },
        { rank: 8, name: '불곰', realName: 'Ismail Kalandarov', record: '11 / 2 / 0' },
        { rank: 9, name: '켈베로스', realName: 'Sodnomdorj', record: '9 / 3 / 0' },
        { rank: 10, name: '봉주먹', realName: '봉재혁', record: '17 / 10 / 0' }
      ]
    },
    {
      id: 'light',
      weightName: '라이트급',
      enWeightName: 'Lightweight',
      badgeClass: 'light',
      champion: {
        ringName: '캡틴 코리아',
        name: '정한국',
        record: '14 / 11 / 2',
        team: 'TEAM MAD',
        date: '획득 : 2026-01-31',
        imageUrl: 'https://i.namu.wiki/i/xmhjFVEBujQ9pNOFz0Knqr3ZvAR9U9eWblxjRR7AQJVFB_w2zHRI41aLPzPQTMeGOpV5507K_bFZCX7ZMWlrog.webp'
      },
      ranks: [
        { rank: 1, name: '수부타이', realName: '난딘에르덴', record: '19 / 11 / 0' },
        { rank: 2, name: '영보스', realName: '백이산', record: '11 / 2 / 1' },
        { rank: 3, name: '다게르', realName: 'Ali Gadjiev', record: '5 / 0 / 0' },
        { rank: 4, name: '직쏘', realName: '문기범', record: '14 / 9 / 0' },
        { rank: 5, name: '라이언킹', realName: 'Chuka Willis', record: '18 / 7 / 0' },
        { rank: 6, name: '피에로', realName: '이승하', record: '4 / 5 / 0' },
        { rank: 7, name: '사쿠라', realName: '한도윤', record: '3 / 6 / 0' },
        { rank: 8, name: '헌터', realName: '박중안', record: '7 / 6 / 0' },
        { rank: 9, name: '곰주먹', realName: '김정근', record: '5 / 4 / 0' },
        { rank: 10, name: '영타이거', realName: '이영훈', record: '8 / 5 / 1' }
      ]
    },
    {
      id: 'welter',
      weightName: '웰터급',
      enWeightName: 'Welterweight',
      badgeClass: 'welter',
      champion: null,
      ranks: [
        { rank: 1, name: '헌츠맨', realName: 'Sultan Omarov', record: '9 / 0 / 0' },
        { rank: 2, name: '레오파드', realName: 'Luan Santiago', record: '24 / 8 / 0' },
        { rank: 3, name: '킹콩', realName: '오일학', record: '6 / 4 / 0' },
        { rank: 4, name: '동백', realName: '신태호', record: '13 / 9 / 0' },
        { rank: 5, name: '사무라이', realName: 'Patrick Kelvin', record: '10 / 3 / 0' },
        { rank: 6, name: '코리안 갱스터', realName: '박원식', record: '16 / 9 / 1' },
        { rank: 7, name: '바이킹', realName: 'Lucas Marques', record: '19 / 6 / 0' },
        { rank: 8, name: '엄지장군', realName: '여동주', record: '5 / 1 / 0' },
        { rank: 9, name: '젠틀맨', realName: 'Fabricio Azevedo', record: '12 / 4 / 0' },
        { rank: 10, name: '블랙맘바', realName: '김윤', record: '9 / 9 / 0' }
      ]
    },
    {
      id: 'middle',
      weightName: '미들급',
      enWeightName: 'Middleweight',
      badgeClass: 'middle',
      champion: {
        ringName: '킹콩',
        name: '오일학',
        record: '6 / 4 / 0',
        team: 'HAVAS MMA',
        date: '획득 : 2024-12-28',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGAuFnPZr11n-Oj4D1uJIaPtoorZ8CSf8_5_DL6FTPBA&s=10'
      },
      ranks: [
        { rank: 1, name: '플라밍고', realName: '박정빈', record: '9 / 2 / 0' },
        { rank: 2, name: '팡돌', realName: '차정환', record: '15 / 5 / 3' },
        { rank: 3, name: '타노스', realName: 'Eduardo Garvon', record: '17 / 6 / 1' },
        { rank: 4, name: '람보', realName: '함지르 파미노프', record: '17 / 5 / 0' },
        { rank: 5, name: '디멘터', realName: "Dylan O'Sullivan", record: '7 / 3 / 0' },
        { rank: 6, name: '모모', realName: 'Sato Ryutaro', record: '10 / 3 / 0' },
        { rank: 7, name: '예티', realName: 'Lucas Paredes', record: '5 / 2 / 1' },
        { rank: 8, name: '선봉장', realName: '허준대', record: '4 / 2 / 0' },
        { rank: 9, name: '피닉스', realName: 'Marcos Vinicius', record: '6 / 2 / 1' },
        { rank: 10, name: '알라딘', realName: 'Khusan Uralov', record: '6 / 2 / 0' }
      ]
    }
  ],
  champion: [
    {
      id: 'fly',
      weightName: '플라이급',
      enWeightName: 'Flyweight',
      badgeClass: 'fly',
      defenseCount: 1,
      champion: {
        ringName: '우마왕',
        name: '우성훈',
        team: 'TEAM MAD',
        date: '획득 : 2026-07-26',
        imageUrl: 'https://www.blackcombat-official.com/theme/blackcombat/img/fighter_new/73873103/73873103_detail.png?v=260727202026'
      },
      history: [
        { title: '3대', name: '탱크', realName: '고카키네 타카히로', period: '2024-12-28 ~ 2026-07-26' },
        { title: '2대', name: '바이퍼', realName: '김성웅', period: '2023-11-18 ~ 2024-01-19' },
        { title: '초대', name: '배드가이', realName: '이준영', period: '2023-04-15 ~ 2023-07-12' }
      ]
    },
    {
      id: 'bantam',
      weightName: '밴텀급',
      enWeightName: 'Bantamweight',
      badgeClass: 'bantam',
      defenseCount: 1,
      champion: {
        ringName: '투신',
        name: '김재웅',
        team: 'EXTREAM COMBAT',
        date: '획득 : 2024-12-28',
        imageUrl: 'https://i.namu.wiki/i/023A42mRsFunNHn8BV1OmgFYpUK6B-_K5RBudYTUIo-MMB80OVsD3bR7fyWoi_vR2USn6bJcBnQOGoYzgO9LtQ.webp'
      },
      history: [
        { title: '2대', name: '유짓수', realName: '유수영', period: '2023-05-18 ~ 2024-11-24' },
        { title: '초대', name: '파이톤', realName: '김성민', period: '2022-10-22 ~ 2023-03-18' }
      ]
    },
    {
      id: 'feather',
      weightName: '페더급',
      enWeightName: 'Featherweight',
      badgeClass: 'feather',
      defenseCount: 1,
      champion: {
        ringName: '시라소니',
        name: '방상혁',
        team: 'TEAM MAD CHUNCHEON',
        date: '획득 : 2025-05-06',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlOD8Et4xIjrslxjldqKFM7OO4Lhjoc3Yz4XENc1MgQ&s=10'
      },
      history: [
        { title: '3대', name: '손오찬', realName: '손유찬', period: '2024-01-20 ~ 2025-05-06' },
        { title: '2대', name: '광남', realName: '신승민', period: '2023-04-15 ~ 2024-01-20' },
        { title: '초대', name: '유짓수', realName: '유수영', period: '2022-12-31 ~ 2023-03-18' }
      ]
    },
    {
      id: 'light',
      weightName: '라이트급',
      enWeightName: 'Lightweight',
      badgeClass: 'light',
      defenseCount: null,
      champion: {
        ringName: '캡틴 코리아',
        name: '정한국',
        team: 'TEAM MAD',
        date: '획득 : 2026-01-31',
        imageUrl: 'https://i.namu.wiki/i/xmhjFVEBujQ9pNOFz0Knqr3ZvAR9U9eWblxjRR7AQJVFB_w2zHRI41aLPzPQTMeGOpV5507K_bFZCX7ZMWlrog.webp'
      },
      history: [
        { title: '5대', name: '머큐리', realName: 'Flavio Santos', period: '2025-06-04 ~ 2026-01-31' },
        { title: '4대', name: '직쏘', realName: '문기범', period: '2024-12-28 ~ 2025-06-23' },
        { title: '3대', name: '아이언 스파이더', realName: '오하마 주리', period: '2024-09-28 ~ 2024-12-28' },
        { title: '2대', name: '피에로', realName: '이승하', period: '2022-12-31 ~ 2024-09-28' },
        { title: '초대', name: '유짓수', realName: '유수인', period: '2022-06-18 ~ 2022-12-12' }
      ]
    },
    {
      id: 'welter',
      weightName: '웰터급',
      enWeightName: 'Welterweight',
      badgeClass: 'welter',
      defenseCount: null,
      champion: null,
      history: [
        { title: '초대', name: '야차', realName: '최준서', period: '2025-05-06 ~ 2025-11-07' }
      ]
    },
    {
      id: 'middle',
      weightName: '미들급',
      enWeightName: 'Middleweight',
      badgeClass: 'middle',
      defenseCount: null,
      champion: {
        ringName: '킹콩',
        name: '오일학',
        team: 'HAVAS MMA',
        date: '획득 : 2024-12-28',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGAuFnPZr11n-Oj4D1uJIaPtoorZ8CSf8_5_DL6FTPBA&s=10'
      },
      history: [
        { title: '초대', name: '화이트 베어', realName: '최준서', period: '2023-07-22 ~ 2024-12-28' }
      ]
    }
  ]
};

export default function RankingPage() {
  const [lang, setLang] = useState('kr');
  const t = rankingUiTexts[lang] || rankingUiTexts.kr;

  const [activeMainTab, setActiveMainTab] = useState('fighter');
  const [activeWeightId, setActiveWeightId] = useState('fly');

  // 💡 안전한 데이터 분기 처리 (undefined 방어)
  const currentTabList = rankingTabsData[activeMainTab] || rankingTabsData.fighter;
  const currentWeightData = currentTabList.find(item => item.id === activeWeightId) || currentTabList[0];

  return (
    <div className={styles.pageWrapper}>
      {/* ── 블랙컴뱃 공식 상단 네비게이션 바 ── */}
      <header className={styles.bcHeader}>
        <div className={styles.bcTopUtil}>
          <div className={styles.bcUtilContainer}>
            <Link href="/signup">{t.signup}</Link>
            <Link href="/login">{t.login}</Link>
            <select 
              className={styles.bcLangSelect} 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="kr">KR 한국어</option>
              <option value="en">EN English</option>
            </select>
          </div>
        </div>
        <div className={styles.bcHeaderContainer}>
          <div className={styles.bcLogoArea}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              BLACK <span>COMBAT</span>
            </Link>
          </div>
          <div className={styles.bcNavBgSlant}>
            <nav className={styles.bcNavLinks}>
              <Link href="/ticket">{t.ticket}</Link>
              <Link href="/event">{t.event}</Link>
              <Link href="/blackcup">{t.blackcup}</Link>
              <Link href="/ranking" className={styles.active}>{t.ranking}</Link>
              <Link href="/community">{t.community}</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* ── 본문 콘텐츠 영역 ── */}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          
          <div className={styles.header}>
            <span className={styles.badge}>{t.badge}</span>
            <h2 className={styles.title}>{t.title}</h2>
            <p className={styles.description}>{t.description}</p>
          </div>

          <div className={styles.mainTabWrapper}>
            <button 
              className={`${styles.mainTabBtn} ${activeMainTab === 'fighter' ? styles.activeMainTab : ''}`}
              onClick={() => setActiveMainTab('fighter')}
            >
              {t.tabFighter}
            </button>
            <button 
              className={`${styles.mainTabBtn} ${activeMainTab === 'champion' ? styles.activeMainTab : ''}`}
              onClick={() => setActiveMainTab('champion')}
            >
              {t.tabChampion}
            </button>
          </div>

          <div className={styles.weightTabWrapper}>
            {rankingTabsData.fighter.map((weightItem) => (
              <button
                key={weightItem.id}
                className={`${styles.weightTabBtn} ${activeWeightId === weightItem.id ? styles.activeWeightTab : ''}`}
                onClick={() => setActiveWeightId(weightItem.id)}
              >
                {lang === 'en' ? weightItem.enWeightName : weightItem.weightName}
              </button>
            ))}
          </div>

          {activeMainTab === 'fighter' ? (
            <div className={styles.contentSection}>
              <div className={styles.championCard}>
                <div className={styles.championHeaderBadge}>
                  👑 {t.championTitle} ({lang === 'en' ? currentWeightData?.enWeightName : currentWeightData?.weightName})
                </div>
                {currentWeightData?.champion ? (
                  <div className={styles.championInfoGrid}>
                    <div className={styles.championImgBox}>
                      <img 
                        src={currentWeightData.champion.imageUrl} 
                        alt={currentWeightData.champion.ringName} 
                        className={styles.championImg}
                      />
                    </div>
                    <div className={styles.championDetails}>
                      <span className={styles.championRingName}>{currentWeightData.champion.ringName}</span>
                      <h3 className={styles.championRealName}>{currentWeightData.champion.name}</h3>
                      <div className={styles.metaRow}>
                        <span>{t.teamLabel}: <strong>{currentWeightData.champion.team}</strong></span>
                        <span>{t.recordLabel}: <strong>{currentWeightData.champion.record}</strong></span>
                      </div>
                      <div className={styles.dateBadge}>{currentWeightData.champion.date}</div>
                    </div>
                  </div>
                ) : (
                  <div className={styles.vacantBox}>
                    <p>{t.noChampion}</p>
                  </div>
                )}
              </div>

              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={`${styles.th} ${styles.tdCenter}`} style={{ width: '80px' }}>{t.rankTableNo}</th>
                      <th className={styles.th}>{t.rankTableRingName}</th>
                      <th className={styles.th}>{t.rankTableRealName}</th>
                      <th className={`${styles.th} ${styles.tdCenter}`} style={{ width: '150px' }}>{t.rankTableRecord}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentWeightData?.ranks && currentWeightData.ranks.map((ranker) => (
                      <tr key={ranker.rank} className={styles.tbodyTr}>
                        <td className={`${styles.td} ${styles.tdCenter}`}>
                          <span className={styles.rankNumBadge}>{ranker.rank}</span>
                        </td>
                        <td className={styles.td}>
                          <span className={styles.rankerRingName}>{ranker.name}</span>
                        </td>
                        <td className={styles.td}>
                          <span className={styles.rankerRealName}>{ranker.realName}</span>
                        </td>
                        <td className={`${styles.td} ${styles.tdCenter}`}>
                          <span className={styles.rankerRecord}>{ranker.record}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className={styles.contentSection}>
              <div className={styles.championCard}>
                <div className={styles.championHeaderBadge}>
                  🛡️ {lang === 'en' ? currentWeightData?.enWeightName : currentWeightData?.weightName} {t.championTitle}
                  {currentWeightData?.defenseCount != null && (
                    <span className={styles.defenseBadge}>
                      {t.defenseLabel}: {currentWeightData.defenseCount}{t.defenseCountUnit}
                    </span>
                  )}
                </div>
                {currentWeightData?.champion ? (
                  <div className={styles.championInfoGrid}>
                    <div className={styles.championImgBox}>
                      <img 
                        src={currentWeightData.champion.imageUrl} 
                        alt={currentWeightData.champion.ringName} 
                        className={styles.championImg}
                      />
                    </div>
                    <div className={styles.championDetails}>
                      <span className={styles.championRingName}>{currentWeightData.champion.ringName}</span>
                      <h3 className={styles.championRealName}>{currentWeightData.champion.name}</h3>
                      <div className={styles.metaRow}>
                        <span>{t.teamLabel}: <strong>{currentWeightData.champion.team}</strong></span>
                      </div>
                      <div className={styles.dateBadge}>{currentWeightData.champion.date}</div>
                    </div>
                  </div>
                ) : (
                  <div className={styles.vacantBox}>
                    <p>{t.noChampion}</p>
                  </div>
                )}
              </div>

              <div className={styles.historySection}>
                <h4 className={styles.historyHeaderTitle}>{t.historyTitle}</h4>
                <div className={styles.tableContainer}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th className={`${styles.th} ${styles.tdCenter}`} style={{ width: '100px' }}>{t.historyTitleBadge}</th>
                        <th className={styles.th}>{t.rankTableRingName}</th>
                        <th className={styles.th}>{t.rankTableRealName}</th>
                        <th className={`${styles.th} ${styles.tdCenter}`} style={{ width: '220px' }}>{t.historyPeriod}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentWeightData?.history && currentWeightData.history.length > 0 ? (
                        currentWeightData.history.map((hist, index) => (
                          <tr key={index} className={styles.tbodyTr}>
                            <td className={`${styles.td} ${styles.tdCenter}`}>
                              <span className={styles.historyBadge}>{hist.title}</span>
                            </td>
                            <td className={styles.td}>
                              <span className={styles.rankerRingName}>{hist.name}</span>
                            </td>
                            <td className={styles.td}>
                              <span className={styles.rankerRealName}>{hist.realName}</span>
                            </td>
                            <td className={`${styles.td} ${styles.tdCenter}`}>
                              <span className={styles.periodText}>{hist.period}</span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className={`${styles.td} ${styles.tdCenter}`} style={{ color: '#94a3b8' }}>
                            History data unavailable.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}