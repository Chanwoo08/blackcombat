'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// 💡 1. 체급 명칭 다국어 매핑 사전
const weightClassMap = {
  kr: { '플라이급': '플라이급', '밴텀급': '밴텀급', '페더급': '페더급', '라이트급': '라이트급', '웰터급': '웰터급', '미들급': '미들급', '헤비급': '헤비급' },
  en: { '플라이급': 'Flyweight', '밴텀급': 'Bantamweight', '페더급': 'Featherweight', '라이트급': 'Lightweight', '웰터급': 'Welterweight', '미들급': 'Middleweight', '헤비급': 'Heavyweight' }
};

// 💡 2. 팀 및 선수 데이터 다국어 사전 (kr / en)
const blackCupTeamsData = {
  kr: [
    {
      id: 'usa',
      stage: '결승',
      statusBadge: '🔥 결승전 진출',
      teamName: 'TEAM USA',
      countryName: '미국',
      flagIcon: '🇺🇸',
      nextMatch: 'TEAM MONGOLIA',
      isFinalist: true,
      fighters: [
        { weightClass: '플라이급', ringName: '스나이퍼', realName: 'Isiah Torres', record: '5 / 5 / 1' },
        { weightClass: '밴텀급', ringName: 'LG', realName: 'Lake Gee', record: '10 / 0 / 0' },
        { weightClass: '페더급', ringName: 'The Man', realName: 'Daniel McWilliams', record: '9 / 4 / 0' },
        { weightClass: '라이트급', ringName: '라이언킹', realName: 'Chuka Willis', record: '18 / 7 / 0' },
        { weightClass: '웰터급', ringName: '건슬링거', realName: 'Miles Hunsinger', record: '7 / 3 / 0' },
        { weightClass: '미들급', ringName: '디멘터', realName: 'Dylan O\'Sullivan', record: '7 / 3 / 0' },
        { weightClass: '헤비급', ringName: '잭팟', realName: 'O\'Shay Jordan', record: '6 / 3 / 0' }
      ]
    },
    {
      id: 'mongolia',
      stage: '결승',
      statusBadge: '🔥 결승전 진출',
      teamName: 'TEAM MONGOLIA',
      countryName: '몽골',
      flagIcon: '🇲🇳',
      nextMatch: 'TEAM USA',
      isFinalist: true,
      fighters: [
        { weightClass: '플라이급', ringName: '보로툴', realName: 'Bayanduuron', record: '5 / 2 / 0' },
        { weightClass: '밴텀급', ringName: '보오르추', realName: 'Bat-Erdene', record: '5 / 1 / 0' },
        { weightClass: '페더급', ringName: '켈베로스', realName: 'Sodnomdorj', record: '9 / 3 / 0' },
        { weightClass: '라이트급', ringName: '칠라운', realName: 'Gantumur', record: '4 / 1 / 0' },
        { weightClass: '웰터급', ringName: '쿠빌라이', realName: '규렌차리', record: '16 / 20 / 0' },
        { weightClass: '미들급', ringName: '제바', realName: 'Gantulga', record: '0 / 2 / 0' },
        { weightClass: '헤비급', ringName: '무칼리', realName: 'Unenkhuu', record: '2 / 0 / 0' }
      ]
    },
    {
      id: 'eurasia',
      stage: '8강 패',
      statusBadge: '8강 패배',
      teamName: 'TEAM EURASIA',
      countryName: '유라시아',
      flagIcon: '🇪🇺',
      nextMatch: '없음',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: '스탄 바키', realName: 'Bagylan Zhakansha', record: '7 / 2 / 0' },
        { weightClass: '밴텀급', ringName: '백사자', realName: 'Aydemir Kazbekov', record: '15 / 2 / 0' },
        { weightClass: '페더급', ringName: '불곰', realName: 'Ismail Kelemetov', record: '11 / 2 / 0' },
        { weightClass: '라이트급', ringName: '코만도', realName: 'Azizbek Norov', record: '7 / 4 / 0' },
        { weightClass: '웰터급', ringName: '다게르', realName: 'Ali Gadjiev', record: '5 / 0 / 0' },
        { weightClass: '미들급', ringName: '알라딘', realName: 'Khusan Urakov', record: '6 / 2 / 0' },
        { weightClass: '헤비급', ringName: '디바사우르스', realName: 'Akhmed Baguzhaev', record: '2 / 0 / 0' }
      ]
    },
    {
      id: 'korea_omega',
      stage: '4강 패',
      statusBadge: '4강 패배',
      teamName: 'TEAM KOREA OMEGA',
      countryName: '대한민국 - Ω',
      flagIcon: '🇰🇷',
      nextMatch: '없음',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: '윤방관', realName: '윤호영', record: '7 / 6 / 1' },
        { weightClass: '밴텀급', ringName: '언더독', realName: '박성준', record: '7 / 6 / 1' },
        { weightClass: '페더급', ringName: '손오찬', realName: '손유찬', record: '3 / 5 / 0' },
        { weightClass: '라이트급', ringName: '영보스', realName: '박어진', record: '11 / 2 / 1' },
        { weightClass: '웰터급', ringName: '동백', realName: '진태호', record: '13 / 9 / 0' },
        { weightClass: '미들급', ringName: '플라밍고', realName: '박정빈', record: '9 / 2 / 0' },
        { weightClass: '헤비급', ringName: '나이트', realName: '정세윤', record: '5 / 5 / 0' }
      ]
    },
    {
      id: 'japan',
      stage: '4강 패',
      statusBadge: '4강 패배',
      teamName: 'TEAM JAPAN',
      countryName: '일본',
      flagIcon: '🇯🇵',
      nextMatch: '없음',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: '닌자', realName: 'Yamasaki Sora', record: '8 / 2 / 0' },
        { weightClass: '밴텀급', ringName: '피카츄', realName: 'Mukai Rukiya', record: '6 / 3 / 0' },
        { weightClass: '페더급', ringName: '토르', realName: 'Toma Mitsuhiro', record: '17 / 12 / 2' },
        { weightClass: '라이트급', ringName: '그리즐리', realName: 'Yamamoto Takuya', record: '11 / 4 / 1' },
        { weightClass: '웰터급', ringName: '오니', realName: 'Tanaka Yu', record: '7 / 6 / 0' },
        { weightClass: '미들급', ringName: '모모', realName: 'Sato Ryutaro', record: '10 / 3 / 0' },
        { weightClass: '헤비급', ringName: '히로시마', realName: 'Oban Takaaki', record: '11 / 11 / 1' }
      ]
    },
    {
      id: 'korea_alpha',
      stage: '4강 패',
      statusBadge: '4강 패배',
      teamName: 'TEAM KOREA ALPHA',
      countryName: '대한민국 - α',
      flagIcon: '🇰🇷',
      nextMatch: '없음',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: '미스터 초크', realName: '이민주', record: '5 / 5 / 0' },
        { weightClass: '밴텀급', ringName: '리바이', realName: '김유찬', record: '2 / 1 / 0' },
        { weightClass: '페더급', ringName: '빡상', realName: '박상현', record: '9 / 7 / 1' },
        { weightClass: '라이트급', ringName: '더 마스터', realName: '전현우', record: '2 / 2 / 0' },
        { weightClass: '웰터급', ringName: '불괴', realName: '김경록', record: '4 / 3 / 0' },
        { weightClass: '미들급', ringName: '엄지장군', realName: '여동주', record: '5 / 1 / 0' },
        { weightClass: '헤비급', ringName: '맘모스', realName: '김명환', record: '11 / 4 / 0' }
      ]
    },
    {
      id: 'brazil',
      stage: '8강 패',
      statusBadge: '8강 패배',
      teamName: 'TEAM BRAZIL',
      countryName: '브라질',
      flagIcon: '🇧🇷',
      nextMatch: '없음',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: '핏불', realName: 'Tiago Xavier', record: '17 / 12 / 0' },
        { weightClass: '밴텀급', ringName: '아이언 홀스', realName: 'Felipe Gheno', record: '11 / 5 / 0' },
        { weightClass: '페더급', ringName: '싸이코', realName: 'Victor Hugo', record: '26 / 8 / 0' },
        { weightClass: '라이트급', ringName: '빅프린스', realName: 'Deberson Batista', record: '14 / 6 / 2' },
        { weightClass: '웰터급', ringName: '바이킹', realName: 'Lucas Marques', record: '19 / 6 / 0' },
        { weightClass: '미들급', ringName: '피닉스', realName: 'Marcos Vinicius', record: '6 / 2 / 1' },
        { weightClass: '헤비급', ringName: '보스베이비', realName: 'Richard Jacobi', record: '10 / 3 / 1' }
      ]
    },
    {
      id: 'china',
      stage: '8강 패',
      statusBadge: '8강 패배',
      teamName: 'TEAM CHINA',
      countryName: '중국',
      flagIcon: '🇨🇳',
      nextMatch: '없음',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: '금사자', realName: 'Tuolie Bahetijiang', record: '12 / 6 / 0' },
        { weightClass: '밴텀급', ringName: '흑랑', realName: 'Yang Fuchong', record: '23 / 10 / 0' },
        { weightClass: '페더급', ringName: '오공', realName: 'Huang Yuele', record: '10 / 3 / 0' },
        { weightClass: '라이트급', ringName: '흑수리', realName: 'Yibugele', record: '24 / 14 / 1' },
        { weightClass: '웰터급', ringName: '팔콘', realName: 'Silangraopeng', record: '2 / 1 / 0' },
        { weightClass: '미들급', ringName: '혈귀', realName: 'Sun Shuwei', record: '12 / 9 / 1' },
        { weightClass: '헤비급', ringName: '금도장군', realName: 'Liu Yaocheng', record: '0 / 2 / 0' }
      ]
    }
  ],
  en: [
    {
      id: 'usa',
      stage: 'Final',
      statusBadge: '🔥 ADVANCED TO FINAL',
      teamName: 'TEAM USA',
      countryName: 'USA',
      flagIcon: '🇺🇸',
      nextMatch: 'TEAM MONGOLIA',
      isFinalist: true,
      fighters: [
        { weightClass: '플라이급', ringName: 'Sniper', realName: 'Isiah Torres', record: '5 / 5 / 1' },
        { weightClass: '밴텀급', ringName: 'LG', realName: 'Lake Gee', record: '10 / 0 / 0' },
        { weightClass: '페더급', ringName: 'The Man', realName: 'Daniel McWilliams', record: '9 / 4 / 0' },
        { weightClass: '라이트급', ringName: 'Lion King', realName: 'Chuka Willis', record: '18 / 7 / 0' },
        { weightClass: '웰터급', ringName: 'Gunslinger', realName: 'Miles Hunsinger', record: '7 / 3 / 0' },
        { weightClass: '미들급', ringName: 'Dementor', realName: 'Dylan O\'Sullivan', record: '7 / 3 / 0' },
        { weightClass: '헤비급', ringName: 'Jackpot', realName: 'O\'Shay Jordan', record: '6 / 3 / 0' }
      ]
    },
    {
      id: 'mongolia',
      stage: 'Final',
      statusBadge: '🔥 ADVANCED TO FINAL',
      teamName: 'TEAM MONGOLIA',
      countryName: 'Mongolia',
      flagIcon: '🇲🇳',
      nextMatch: 'TEAM USA',
      isFinalist: true,
      fighters: [
        { weightClass: '플라이급', ringName: 'Borotul', realName: 'Bayanduuron', record: '5 / 2 / 0' },
        { weightClass: '밴텀급', ringName: 'Boortsu', realName: 'Bat-Erdene', record: '5 / 1 / 0' },
        { weightClass: '페더급', ringName: 'Cerberus', realName: 'Sodnomdorj', record: '9 / 3 / 0' },
        { weightClass: '라이트급', ringName: 'Chilaun', realName: 'Gantumur', record: '4 / 1 / 0' },
        { weightClass: '웰터급', ringName: 'Kublai', realName: 'Gyurenchari', record: '16 / 20 / 0' },
        { weightClass: '미들급', ringName: 'Zeba', realName: 'Gantulga', record: '0 / 2 / 0' },
        { weightClass: '헤비급', ringName: 'Mukali', realName: 'Unenkhuu', record: '2 / 0 / 0' }
      ]
    },
    {
      id: 'eurasia',
      stage: 'Quarterfinal Loss',
      statusBadge: 'Quarterfinal Loss',
      teamName: 'TEAM EURASIA',
      countryName: 'Eurasia',
      flagIcon: '🇪🇺',
      nextMatch: 'None',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: 'Stan Baki', realName: 'Bagylan Zhakansha', record: '7 / 2 / 0' },
        { weightClass: '밴텀급', ringName: 'White Lion', realName: 'Aydemir Kazbekov', record: '15 / 2 / 0' },
        { weightClass: '페더급', ringName: 'Grizzly', realName: 'Ismail Kelemetov', record: '11 / 2 / 0' },
        { weightClass: '라이트급', ringName: 'Commando', realName: 'Azizbek Norov', record: '7 / 4 / 0' },
        { weightClass: '웰터급', ringName: 'Dagger', realName: 'Ali Gadjiev', record: '5 / 0 / 0' },
        { weightClass: '미들급', ringName: 'Aladdin', realName: 'Khusan Urakov', record: '6 / 2 / 0' },
        { weightClass: '헤비급', ringName: 'Divasaurus', realName: 'Akhmed Baguzhaev', record: '2 / 0 / 0' }
      ]
    },
    {
      id: 'korea_omega',
      stage: 'Semifinal Loss',
      statusBadge: 'Semifinal Loss',
      teamName: 'TEAM KOREA OMEGA',
      countryName: 'South Korea - Ω',
      flagIcon: '🇰🇷',
      nextMatch: 'None',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: 'Yoon Officer', realName: 'Ho-young Yoon', record: '7 / 6 / 1' },
        { weightClass: '밴텀급', ringName: 'Underdog', realName: 'Sung-jun Park', record: '7 / 6 / 1' },
        { weightClass: '페더급', ringName: 'Son O-chan', realName: 'Yu-chan Son', record: '3 / 5 / 0' },
        { weightClass: '라이트급', ringName: 'Young Boss', realName: 'Eo-jin Park', record: '11 / 2 / 1' },
        { weightClass: '웰터급', ringName: 'Dongbaek', realName: 'Tae-ho Jin', record: '13 / 9 / 0' },
        { weightClass: '미들급', ringName: 'Flamingo', realName: 'Jung-bin Park', record: '9 / 2 / 0' },
        { weightClass: '헤비급', ringName: 'Night', realName: 'Se-yoon Jung', record: '5 / 5 / 0' }
      ]
    },
    {
      id: 'japan',
      stage: 'Semifinal Loss',
      statusBadge: 'Semifinal Loss',
      teamName: 'TEAM JAPAN',
      countryName: 'Japan',
      flagIcon: '🇯🇵',
      nextMatch: 'None',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: 'Ninja', realName: 'Yamasaki Sora', record: '8 / 2 / 0' },
        { weightClass: '밴텀급', ringName: 'Pikachu', realName: 'Mukai Rukiya', record: '6 / 3 / 0' },
        { weightClass: '페더급', ringName: 'Thor', realName: 'Toma Mitsuhiro', record: '17 / 12 / 2' },
        { weightClass: '라이트급', ringName: 'Grizzly', realName: 'Yamamoto Takuya', record: '11 / 4 / 1' },
        { weightClass: '웰터급', ringName: 'Oni', realName: 'Tanaka Yu', record: '7 / 6 / 0' },
        { weightClass: '미들급', ringName: 'Momo', realName: 'Sato Ryutaro', record: '10 / 3 / 0' },
        { weightClass: '헤비급', ringName: 'Hiroshima', realName: 'Oban Takaaki', record: '11 / 11 / 1' }
      ]
    },
    {
      id: 'korea_alpha',
      stage: 'Semifinal Loss',
      statusBadge: 'Semifinal Loss',
      teamName: 'TEAM KOREA ALPHA',
      countryName: 'South Korea - α',
      flagIcon: '🇰🇷',
      nextMatch: 'None',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: 'Mr. Choke', realName: 'Min-joo Lee', record: '5 / 5 / 0' },
        { weightClass: '밴텀급', ringName: 'Levi', realName: 'Yu-chan Kim', record: '2 / 1 / 0' },
        { weightClass: '페더급', ringName: 'Bbak-sang', realName: 'Sang-hyun Park', record: '9 / 7 / 1' },
        { weightClass: '라이트급', ringName: 'The Master', realName: 'Hyun-woo Jeon', record: '2 / 2 / 0' },
        { weightClass: '웰터급', ringName: 'Indestructible', realName: 'Kyung-rok Kim', record: '4 / 3 / 0' },
        { weightClass: '미들급', ringName: 'General Thumb', realName: 'Dong-joo Yeo', record: '5 / 1 / 0' },
        { weightClass: '헤비급', ringName: 'Mammoth', realName: 'Myung-hwan Kim', record: '11 / 4 / 0' }
      ]
    },
    {
      id: 'brazil',
      stage: 'Quarterfinal Loss',
      statusBadge: 'Quarterfinal Loss',
      teamName: 'TEAM BRAZIL',
      countryName: 'Brazil',
      flagIcon: '🇧🇷',
      nextMatch: 'None',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: 'Pitbull', realName: 'Tiago Xavier', record: '17 / 12 / 0' },
        { weightClass: '밴텀급', ringName: 'Iron Horse', realName: 'Felipe Gheno', record: '11 / 5 / 0' },
        { weightClass: '페더급', ringName: 'Psycho', realName: 'Victor Hugo', record: '26 / 8 / 0' },
        { weightClass: '라이트급', ringName: 'Big Prince', realName: 'Deberson Batista', record: '14 / 6 / 2' },
        { weightClass: '웰터급', ringName: 'Viking', realName: 'Lucas Marques', record: '19 / 6 / 0' },
        { weightClass: '미들급', ringName: 'Phoenix', realName: 'Marcos Vinicius', record: '6 / 2 / 1' },
        { weightClass: '헤비급', ringName: 'Boss Baby', realName: 'Richard Jacobi', record: '10 / 3 / 1' }
      ]
    },
    {
      id: 'china',
      stage: 'Quarterfinal Loss',
      statusBadge: 'Quarterfinal Loss',
      teamName: 'TEAM CHINA',
      countryName: 'China',
      flagIcon: '🇨🇳',
      nextMatch: 'None',
      isFinalist: false,
      fighters: [
        { weightClass: '플라이급', ringName: 'Golden Lion', realName: 'Tuolie Bahetijiang', record: '12 / 6 / 0' },
        { weightClass: '밴텀급', ringName: 'Black Wolf', realName: 'Yang Fuchong', record: '23 / 10 / 0' },
        { weightClass: '페더급', ringName: 'Wukong', realName: 'Huang Yuele', record: '10 / 3 / 0' },
        { weightClass: '라이트급', ringName: 'Black Eagle', realName: 'Yibugele', record: '24 / 14 / 1' },
        { weightClass: '웰터급', ringName: 'Falcon', realName: 'Silangraopeng', record: '2 / 1 / 0' },
        { weightClass: '미들급', ringName: 'Blood Ghost', realName: 'Sun Shuwei', record: '12 / 9 / 1' },
        { weightClass: '헤비급', ringName: 'General Gold', realName: 'Liu Yaocheng', record: '0 / 2 / 0' }
      ]
    }
  ]
};

// 💡 3. 페이지 UI 텍스트 다국어 사전
const pageUiTexts = {
  kr: {
    signup: '회원가입',
    login: '로그인',
    ticket: 'TICKET',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    allTeams: '전체 팀 보기',
    bannerBadge: 'THE ONLY MMA WORLD CUP',
    bannerTitle1: 'BLACK CUP',
    bannerTitle2: 'TOURNAMENT',
    bannerDesc: '국가 대항전 최강의 왕좌를 차지하기 위한 잔혹하고 뜨거운 최종 결전',
    bracketTitle: 'BLACK CUP OFFICIAL BRACKET',
    nextMatchLabel: '다음경기',
    none: '없음'
  },
  en: {
    signup: 'Sign Up',
    login: 'Login',
    ticket: 'TICKET',
    event: 'EVENT',
    blackcup: 'BLACK CUP',
    ranking: 'RANKING',
    community: 'COMMUNITY',
    allTeams: 'View All Teams',
    bannerBadge: 'THE ONLY MMA WORLD CUP',
    bannerTitle1: 'BLACK CUP',
    bannerTitle2: 'TOURNAMENT',
    bannerDesc: 'The brutal and fierce final showdown to claim the ultimate throne of the national competition',
    bracketTitle: 'BLACK CUP OFFICIAL BRACKET',
    nextMatchLabel: 'Next Match',
    none: 'None'
  }
};

export default function BlackCupPage() {
  const [lang, setLang] = useState('kr'); // 💡 언어 상태 관리 ('kr' 또는 'en')
  const [activeTab, setActiveTab] = useState('all');

  const currentTeams = blackCupTeamsData[lang];
  const t = pageUiTexts[lang];

  const filteredTeams = activeTab === 'all' 
    ? currentTeams 
    : currentTeams.filter(team => team.id === activeTab);

  const bannerImageUrl = '/images/image_eb160f.jpg';
  const bracketImageUrl = 'https://www.blackcombat-official.com/theme/blackcombat/img/blackcup/blackcup_bracket.webp?v=260414';

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#090a0f',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      paddingBottom: '64px',
    },
    navbar: {
      backgroundColor: '#000000',
      borderBottom: '1px solid #1a1a1a',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    topSubBar: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '8px 24px',
      gap: '16px',
      fontSize: '12px',
      color: '#a3a3a3',
      borderBottom: '1px solid #141414',
    },
    navLinkTop: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: '#a3a3a3',
    },
    langSelect: {
      backgroundColor: '#171717',
      color: '#ffffff',
      border: '1px solid #333333',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '11px',
    },
    mainNavContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      height: '64px',
      position: 'relative',
    },
    logoArea: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '24px',
      fontSize: '20px',
      fontWeight: '900',
      fontStyle: 'italic',
      letterSpacing: '1px',
      textDecoration: 'none',
    },
    logoBlack: {
      color: '#ffffff',
    },
    logoCombat: {
      color: '#f59e0b',
      marginLeft: '6px',
    },
    menuGroup: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)',
      paddingLeft: '60px',
      paddingRight: '24px',
      clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)',
    },
    menuItem: (isActive) => ({
      color: isActive ? '#000000' : '#111111',
      fontSize: '14px',
      fontWeight: '900',
      fontStyle: 'italic',
      textDecoration: 'none',
      padding: '0 16px',
      cursor: 'pointer',
      letterSpacing: '0.5px',
      borderBottom: isActive ? '3px solid #000000' : 'none',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    }),
    wrapper: {
      maxWidth: '1200px',
      margin: '32px auto 0 auto',
      padding: '0 16px',
    },
    navMenu: {
      display: 'flex',
      gap: '8px',
      overflowX: 'auto',
      paddingBottom: '16px',
      marginBottom: '32px',
      borderBottom: '1px solid #262626',
    },
    navButton: (isActive) => ({
      backgroundColor: isActive ? '#f59e0b' : '#171821',
      color: isActive ? '#000000' : '#a3a3a3',
      border: isActive ? '1px solid #f59e0b' : '1px solid #262626',
      padding: '10px 18px',
      borderRadius: '8px',
      fontSize: '13px',
      fontWeight: 'bold',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s',
    }),
    banner: {
      position: 'relative',
      width: '100%',
      height: '300px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
      marginBottom: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #262626',
    },
    bannerBg: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url(${bannerImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.35,
      filter: 'blur(1px)',
    },
    bannerOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, #090a0f, rgba(9,10,15,0.6), transparent)',
    },
    bannerContent: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '0 16px',
    },
    badge: {
      backgroundColor: 'rgba(245, 158, 11, 0.15)',
      color: '#f59e0b',
      border: '1px solid rgba(245, 158, 11, 0.4)',
      fontSize: '12px',
      fontWeight: '800',
      padding: '6px 14px',
      borderRadius: '20px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      display: 'inline-block',
      marginBottom: '12px',
    },
    bracketSection: {
      backgroundColor: '#12131a',
      borderRadius: '16px',
      border: '1px solid #262626',
      padding: '24px',
      marginBottom: '40px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      textAlign: 'center',
    },
    bracketTitle: {
      fontSize: '20px',
      fontWeight: '900',
      fontStyle: 'italic',
      marginBottom: '16px',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    bracketImageContainer: {
      width: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#171821',
      border: '1px solid #262626',
      padding: '12px',
    },
    bracketImg: {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))',
      gap: '32px',
    },
    card: (isFinalist) => ({
      backgroundColor: '#12131a',
      borderRadius: '16px',
      overflow: 'hidden',
      border: isFinalist ? '1px solid rgba(245, 158, 11, 0.5)' : '1px solid #262626',
      boxShadow: isFinalist ? '0 0 25px rgba(245, 158, 11, 0.12)' : '0 10px 30px rgba(0,0,0,0.5)',
    }),
    cardHeader: {
      padding: '24px',
      backgroundColor: '#171821',
      borderBottom: '1px solid #262626',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statusTag: (isFinalist) => ({
      backgroundColor: isFinalist ? '#f59e0b' : '#262626',
      color: isFinalist ? '#000000' : '#a3a3a3',
      fontSize: '11px',
      fontWeight: '900',
      padding: '4px 8px',
      borderRadius: '4px',
      marginRight: '8px',
    }),
    fighterRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px',
      borderBottom: '1px solid rgba(38,38,38,0.5)',
    },
    weightBadge: {
      fontSize: '11px',
      fontWeight: '900',
      color: '#a3a3a3',
      width: '85px',
    }
  };

  return (
    <div style={styles.container}>
      
      {/* 상단 공식 네비게이션 바 */}
      <nav style={styles.navbar}>
        <div style={styles.topSubBar}>
          <Link href="/signup" style={styles.navLinkTop}>{t.signup}</Link>
          <Link href="/login" style={styles.navLinkTop}>{t.login}</Link>
          <select 
            style={styles.langSelect} 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="kr">KR 한국어</option>
            <option value="en">EN English</option>
          </select>
        </div>
        <div style={styles.mainNavContent}>
          <Link href="/" style={styles.logoArea}>
            <span style={styles.logoBlack}>BLACK</span>
            <span style={styles.logoCombat}>COMBAT</span>
          </Link>
          <div style={styles.menuGroup}>
            <Link href="/ticket" style={styles.menuItem(false)}>{t.ticket}</Link>
            <Link href="/event" style={styles.menuItem(false)}>{t.event}</Link>
            <Link href="/blackcup" style={styles.menuItem(true)}>{t.blackcup}</Link>
            <Link href="/ranking" style={styles.menuItem(false)}>{t.ranking}</Link>
            <Link href="/community" style={styles.menuItem(false)}>{t.community}</Link>
          </div>
        </div>
      </nav>

      <div style={styles.wrapper}>
        
        {/* 팀별 탭 네비게이션 메뉴 */}
        <div style={styles.navMenu}>
          <button style={styles.navButton(activeTab === 'all')} onClick={() => setActiveTab('all')}>
            {t.allTeams}
          </button>
          {currentTeams.map(team => (
            <button 
              key={team.id} 
              style={styles.navButton(activeTab === team.id)} 
              onClick={() => setActiveTab(team.id)}
            >
              {team.flagIcon} {team.teamName}
            </button>
          ))}
        </div>

        {/* 상단 히어로 배너 */}
        <div style={styles.banner}>
          <div style={styles.bannerBg}></div>
          <div style={styles.bannerOverlay}></div>
          <div style={styles.bannerContent}>
            <span style={styles.badge}>{t.bannerBadge}</span>
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', fontStyle: 'italic', margin: '8px 0', letterSpacing: '1px' }}>
              {t.bannerTitle1} <span style={{ color: '#f59e0b' }}>{t.bannerTitle2}</span>
            </h1>
            <p style={{ color: '#a3a3a3', fontSize: '14px', margin: 0 }}>
              {t.bannerDesc}
            </p>
          </div>
        </div>

        {/* 블랙컵 공식 대진표 이미지 섹션 */}
        <div style={styles.bracketSection}>
          <div style={styles.bracketTitle}>
            🏆 <span style={{ color: '#f59e0b' }}>BLACK CUP</span> OFFICIAL BRACKET
          </div>
          <div style={styles.bracketImageContainer}>
            <img 
              src={bracketImageUrl} 
              alt="Black Cup Bracket" 
              style={styles.bracketImg} 
            />
          </div>
        </div>

        {/* 팀 카드 그리드 */}
        <div style={styles.grid}>
          {filteredTeams.map((team) => (
            <div key={team.id} style={styles.card(team.isFinalist)}>
              
              <div style={styles.cardHeader}>
                <div>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={styles.statusTag(team.isFinalist)}>{team.statusBadge}</span>
                    <span style={{ fontSize: '11px', color: '#737373', fontWeight: 'bold' }}>{team.stage}</span>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', margin: 0 }}>{team.teamName}</h3>
                  <p style={{ fontSize: '12px', color: '#a3a3a3', margin: '6px 0 0 0' }}>
                    {t.nextMatchLabel} - <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{team.nextMatch}</span>
                  </p>
                </div>
                <div style={{ fontSize: '42px', backgroundColor: '#090a0f', width: '70px', height: '54px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #262626' }}>
                  {team.flagIcon}
                </div>
              </div>

              <div>
                {team.fighters.map((fighter, idx) => (
                  <div key={idx} style={styles.fighterRow}>
                    <div style={styles.weightBadge}>
                      {weightClassMap[lang][fighter.weightClass] || fighter.weightClass}
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: '12px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '6px', backgroundColor: '#1c1d26', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #262626', overflow: 'hidden' }}>
                        <span style={{ fontSize: '16px' }}>🥊</span>
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '800', color: '#f5f5f5' }}>{fighter.ringName}</div>
                        <div style={{ fontSize: '11px', color: '#737373' }}>{fighter.realName}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 'bold', color: '#a3a3a3' }}>
                        {fighter.record}
                      </div>
                      <span style={{ fontSize: '14px', cursor: 'pointer', opacity: 0.7 }} title="Instagram">📸</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}