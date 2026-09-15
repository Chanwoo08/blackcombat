export const fighters = [
    {
      id: "woo-sung-hoon",
      name: "우성훈",
      ringName: "우마왕",
      weightClass: "플라이급",
      isChampion: true,
      age: 34,
      team: "TEAM MAD",
      instagram: "@dynamicwoo_mma",
      entranceMusic: "Agust D - 대취타",
      height: "168cm",
      weight: "-", // 챔피언은 보통 계약체중이 아닐시 프로필에 비워두기도 함
      record: { win: 13, loss: 4, draw: 0 },
      latestMatches: [
        { event: "한국(오) vs 몽골", result: "Win", opponent: "탱크 vs 우마왕", method: "3R Unanimous Decision" },
        { event: "블랙컴뱃 16", result: "Win", opponent: "우마왕 vs 바이퍼", method: "3R Unanimous Decision" },
      ],
      imageUrl: "https://images.unsplash.com/photo-1599552375245-21d3f54868bf?q=80&w=800&auto=format&fit=crop", // 실제 우마왕 선수 사진 URL로 교체
    }
  ];