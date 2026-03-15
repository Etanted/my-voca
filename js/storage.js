/**
 * storage.js — 학습 체크 저장/불러오기 (localStorage)
 * VOCA 영어완전정복 단어장
 */

const Storage = (() => {
  const KEY = 'voca_progress';

  /** 저장된 전체 데이터 불러오기 */
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  /** 전체 데이터 저장 */
  function save(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('localStorage 저장 실패:', e);
    }
  }

  /**
   * 단어 학습 체크 토글
   * @param {number} day  일자 (1~300)
   * @param {number} idx  단어 인덱스 (0~19)
   * @returns {boolean} 토글 후 체크 상태
   */
  function toggleCheck(day, idx) {
    const data = load();
    if (!data[day]) data[day] = {};
    data[day][idx] = !data[day][idx];
    save(data);
    return data[day][idx];
  }

  /**
   * 특정 단어 체크 여부 반환
   * @param {number} day
   * @param {number} idx
   * @returns {boolean}
   */
  function isChecked(day, idx) {
    const data = load();
    return !!(data[day] && data[day][idx]);
  }

  /**
   * 특정 Day의 체크된 단어 수 반환
   * @param {number} day
   * @returns {number}
   */
  function getDayCheckedCount(day) {
    const data = load();
    if (!data[day]) return 0;
    return Object.values(data[day]).filter(Boolean).length;
  }

  /**
   * 특정 Day 전체 체크/해제
   * @param {number} day
   * @param {boolean} checked
   * @param {number} wordCount 해당 날의 단어 수
   */
  function setDayAll(day, checked, wordCount) {
    const data = load();
    data[day] = {};
    for (let i = 0; i < wordCount; i++) {
      data[day][i] = checked;
    }
    save(data);
  }

  /**
   * 전체 체크된 단어 수 반환
   * @returns {number}
   */
  function getTotalCheckedCount() {
    const data = load();
    let total = 0;
    for (const day of Object.values(data)) {
      total += Object.values(day).filter(Boolean).length;
    }
    return total;
  }

  /**
   * Day별 체크된 단어 수 맵 반환
   * @returns {Object} { day: count }
   */
  function getDayCheckedMap() {
    const data = load();
    const map = {};
    for (const [day, words] of Object.entries(data)) {
      map[day] = Object.values(words).filter(Boolean).length;
    }
    return map;
  }

  /**
   * 전체 초기화
   */
  function reset() {
    localStorage.removeItem(KEY);
  }

  return { load, save, toggleCheck, isChecked, getDayCheckedCount, setDayAll, getTotalCheckedCount, getDayCheckedMap, reset };
})();
