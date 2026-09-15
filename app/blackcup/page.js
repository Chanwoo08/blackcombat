import React from 'react';

const blackCupTeamsData = [
  {
    id: 'usa',
    stage: '결승',
    teamName: 'TEAM USA',
    countryName: '미국',
    flagIcon: '🇺🇸',
    nextMatch: 'TEAM MONGOLIA',
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
    teamName: 'TEAM MONGOLIA',
    countryName: '몽골',
    flagIcon: '🇲🇳',
    nextMatch: 'TEAM USA',
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
    teamName: 'TEAM EURASIA',
    countryName: '유라시아',
    flagIcon: '🇪🇺',
    nextMatch: '',
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
    teamName: 'TEAM KOREA OMEGA',
    countryName: '대한민국 - Ω',
    flagIcon: '🇰🇷',
    nextMatch: '',
    fighters: [
      { weightClass: '플라이급', ringName: '윤방관', realName: '윤호영', record: '7 / 6 / 1' },
      { weightClass: '밴텀급', ringName: '언더독', realName: '박성준', record: '7 / 6 / 1' },
      { weightClass: '페더급', ringName: '손오찬', realName: '손유찬', record: '3 / 5 / 0' },
      { weightClass: '라이트급', ringName: '영보스', realName: '박어진', record: '11 / 2 / 1' },
      { weightClass: '웰터급', ringName: '동백', realName: '진태호', record: '13 / 9 / 0' },
      { weightClass: '미들급', ringName: '플라밍고', realName: '박정빈', record: '9 / 2 / 0' },
      { weightClass: '헤비급', ringName: '나이트', realName: '정세윤', record: '5 / 5 / 0' }
    ]
  }
];

export default function BlackCupPage() {
  // 💡 이미지가 깨지는 것을 방지하기 위해 홈 화면 배너 이미지나 안정적인 공인 이미지로 대체합니다.
  const bannerImageUrl = '/images/image_eb160f.jpg'; 

  return (
    <div className="min-h-screen bg-neutral-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* 🏆 상단 히어로 배너 영역 (배경 사진 + 어두운 오버레이 + 적당한 높이) */}
        <div className="relative w-full h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-2xl mb-12 flex items-center justify-center border border-neutral-800">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 filter blur-[2px] scale-105"
            style={{ backgroundImage: `url(${bannerImageUrl})` }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>

          <div className="relative z-10 text-center px-4 max-w-2xl">
            <span className="bg-amber-500 text-black font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block shadow-md">
              THE ONLY MMA WORLD CUP
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-wider text-white drop-shadow-lg">
              BLACK CUP TOURNAMENT
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mt-2 font-medium">
              국가 대항전 최강의 왕좌를 차지하기 위한 최종 결전
            </p>
          </div>
        </div>

        {/* 팀별 선수 명단 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blackCupTeamsData.map((team) => (
            <div key={team.id} className="bg-neutral-900 rounded-xl shadow-xl border border-neutral-800 overflow-hidden">
              <div className="p-6 bg-neutral-900/80 border-b border-neutral-800 flex justify-between items-center">
                <div>
                  <span className="inline-block bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded mb-2">
                    {team.stage}
                  </span>
                  <h3 className="text-xl font-bold text-white">{team.teamName}</h3>
                  <div className="text-xs text-neutral-400 mt-1 space-y-0.5">
                    <p>다음경기 - <span className="text-neutral-200 font-medium">{team.nextMatch || '없음'}</span></p>
                  </div>
                </div>
                <div className="text-4xl bg-neutral-800 w-16 h-12 rounded-lg flex items-center justify-center shadow-inner border border-neutral-700">
                  {team.flagIcon}
                </div>
              </div>

              <div className="divide-y divide-neutral-800/60">
                {team.fighters.map((fighter, idx) => (
                  <div key={idx} className="flex items-center justify-between px-6 py-3 hover:bg-neutral-800/40 transition-colors">
                    <div className="w-20 text-xs font-semibold text-neutral-400">
                      {fighter.weightClass}
                    </div>
                    <div className="flex items-center flex-1 gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs border border-neutral-700">
                        🥊
                      </div>
                      <div>
                        <div className="text-sm font-bold text-neutral-100">{fighter.ringName}</div>
                        <div className="text-xs text-neutral-400">{fighter.realName}</div>
                      </div>
                    </div>
                    <div className="text-sm font-mono text-neutral-400">
                      {fighter.record}
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