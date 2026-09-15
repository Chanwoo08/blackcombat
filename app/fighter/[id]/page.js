import { fighters } from '../../../data'; // 데이터 불러오기

export default function FighterProfile({ params }) {
  // URL의 id값을 가져와서 선수 데이터를 찾습니다.
  const fighter = fighters.find(f => f.id === params.id);

  if (!fighter) return <div className="text-white bg-black h-screen p-10">선수를 찾을 수 없습니다.</div>;

  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center">
        
        {/* 왼쪽: 선수 정보 */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* 입장곡 & 체급 */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-lg">🎵</span> 
              <span>{fighter.entranceMusic}</span>
            </div>
            <span className="border border-gray-600 text-gray-300 text-xs px-2 py-1 rounded-sm uppercase">
              {fighter.weightClass} C
            </span>
          </div>

          {/* 이름 & 나이 */}
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <img src="https://flagcdn.com/w40/kr.png" alt="Korea" className="w-8 border border-gray-700" />
              <h1 className="text-5xl font-black">{fighter.name}</h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-300 mt-2">"{fighter.ringName}"</h2>
            <p className="text-xl font-bold mt-2">AGE : {fighter.age}</p>
          </div>

          {/* 소셜 및 팀 */}
          <div className="text-sm space-y-1 text-gray-300">
            <p className="flex items-center space-x-2">
               <span className="text-pink-500">📸</span> <span>{fighter.instagram}</span>
            </p>
            <p className="font-bold">TEAM : {fighter.team}</p>
          </div>

          {/* 신체 스펙 */}
          <div className="flex space-x-20 pt-4">
            <div>
              <p className="text-red-500 font-bold text-sm mb-1">HEIGHT</p>
              <p className="text-4xl font-black">{fighter.height}</p>
            </div>
            <div>
              <p className="text-red-500 font-bold text-sm mb-1">WEIGHT</p>
              <p className="text-4xl font-black">{fighter.weight}</p>
            </div>
          </div>

          {/* 전적 (Record) */}
          <div className="flex space-x-12 pt-4 pb-6 border-b border-gray-800">
            <div className="text-center">
              <p className="text-4xl font-black">{fighter.record.win}</p>
              <p className="text-red-500 font-bold text-xs mt-1">Win</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black">{fighter.record.loss}</p>
              <p className="text-red-500 font-bold text-xs mt-1">Loss</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black">{fighter.record.draw}</p>
              <p className="text-red-500 font-bold text-xs mt-1">Draw</p>
            </div>
          </div>

          {/* 최근 전적 (Latest Matches) */}
          <div>
            <h3 className="text-gray-400 font-bold text-sm mb-3 tracking-widest">LATEST MATCHES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {fighter.latestMatches.map((match, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span>{match.event}</span>
                  <span className="bg-yellow-600 text-black text-[10px] font-black px-1.5 py-0.5 rounded-sm">Win</span>
                  <span className="font-bold text-white">{match.opponent}</span>
                  <span className="text-gray-500 text-xs">{match.method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 오른쪽: 선수 이미지 */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 relative">
          {/* 이미지는 실제 우마왕 선수의 누끼(배경없는) 이미지 경로를 넣어야 자연스럽습니다. */}
          <img 
            src={fighter.imageUrl} 
            alt={fighter.name} 
            className="h-[600px] object-cover drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          />
        </div>

      </div>
    </div>
  );
}