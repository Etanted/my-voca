/**
 * data_config.js - Day 설정 및 유틸리티
 * 모든 data_days_*.js 이후에 로드해야 합니다
 */

for (let d = 151; d <= 300; d++) {
  const themeIdx = (d - 1) % DAY_THEMES.length;
  VOCA_DATA[d] = {
    theme: DAY_THEMES[themeIdx],
    words: [] // 추후 확장
  };
}

/**
 * 전체 Day 수
 */
const TOTAL_DAYS = 300;

/**
 * 전체 단어 플랫 배열 (검색용)
 * @returns {Array<{day, idx, word, pron, pos, meanings, example, exampleKr}>}
 */
function getAllWords() {
  const result = [];
  for (let d = 1; d <= TOTAL_DAYS; d++) {
    const dayData = VOCA_DATA[d];
    if (!dayData) continue;
    (dayData.words || []).forEach((w, idx) => {
      result.push({ day: d, idx, ...w });
    });
  }
  return result;
}
