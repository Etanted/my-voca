/**
 * app.js — 메인 앱 로직 (이벤트 바인딩 & 상태 관리)
 * VOCA 영어완전정복 단어장
 */

const App = (() => {

  /* ── 상태 ── */
  let currentDay    = 1;
  let currentFilter = 'all';
  let currentTab    = 'study';
  let wlFilterDay   = 0;
  let searchMode    = false;
  let searchResults = [];

  /* ─────────────────────────────────────────
     초기화
  ───────────────────────────────────────── */
  function init() {
    // 음성 로드
    if (Audio.isSupported()) Audio.loadVoices();

    // 마지막으로 공부하던 Day 복원
    const saved = parseInt(localStorage.getItem('voca_last_day') || '1', 10);
    currentDay = (saved >= 1 && saved <= TOTAL_DAYS) ? saved : 1;

    // 최초 렌더
    render(currentDay);
    UI.updateGlobalProgress();

    // 이벤트 바인딩
    bindEvents();
  }

  /* ─────────────────────────────────────────
     현재 Day 렌더링
  ───────────────────────────────────────── */
  function render(day) {
    searchMode = false;
    UI.hideSearchInfo();
    UI.showEmpty(false);

    const dayData = VOCA_DATA[day] || { theme: '', words: [] };
    const words   = (dayData.words || []).map((w, idx) => ({ ...w, day, idx }));

    UI.renderDayList(day, currentFilter);
    UI.renderWordCards(day, words);
    UI.updateDayHeader(day);

    // 이전/다음 버튼 비활성화
    const prevBtn = document.getElementById('prevDayBtn');
    const nextBtn = document.getElementById('nextDayBtn');
    if (prevBtn) prevBtn.disabled = day <= 1;
    if (nextBtn) nextBtn.disabled = day >= TOTAL_DAYS;

    // 현재 Day 저장
    localStorage.setItem('voca_last_day', day);

    // 카드 이벤트 재 바인딩 (동적 생성 요소)
    bindCardEvents();
  }

  /* ─────────────────────────────────────────
     이벤트 바인딩
  ───────────────────────────────────────── */
  function bindEvents() {

    /* 사이드바 Day 클릭 (이벤트 위임) */
    document.getElementById('dayList')?.addEventListener('click', e => {
      const item = e.target.closest('.day-item');
      if (!item) return;
      const day = parseInt(item.dataset.day, 10);
      if (!day) return;
      currentDay = day;
      render(currentDay);
      // 모바일: 사이드바 닫기
      if (window.innerWidth <= 768) UI.closeSidebar();
    });

    /* 이전 / 다음 Day */
    document.getElementById('prevDayBtn')?.addEventListener('click', () => {
      if (currentDay > 1) { currentDay--; render(currentDay); }
    });
    document.getElementById('nextDayBtn')?.addEventListener('click', () => {
      if (currentDay < TOTAL_DAYS) { currentDay++; render(currentDay); }
    });

    /* 전체 학습완료 버튼 */
    document.getElementById('checkAllBtn')?.addEventListener('click', () => {
      const dayData   = VOCA_DATA[currentDay] || { words: [] };
      const wordCount = dayData.words.length;
      if (wordCount === 0) return;

      const current = Storage.getDayCheckedCount(currentDay);
      const allDone = current >= wordCount;
      Storage.setDayAll(currentDay, !allDone, wordCount);

      // 카드 체크 UI 모두 업데이트
      for (let i = 0; i < wordCount; i++) {
        UI.toggleCardChecked(currentDay, i, !allDone);
      }
      UI.updateDayHeader(currentDay);
      UI.updateGlobalProgress();
      UI.updateSidebarDayBadge(currentDay);
    });

    /* 필터 버튼 */
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        UI.setActiveFilter(currentFilter);
        UI.renderDayList(currentDay, currentFilter);
      });
    });

    /* 검색 */
    const searchInput = document.getElementById('searchInput');
    const searchBtn   = document.getElementById('searchBtn');

    function doSearch() {
      const query = (searchInput?.value || '').trim();
      if (!query) { render(currentDay); return; }
      performSearch(query);
    }

    searchBtn?.addEventListener('click', doSearch);
    searchInput?.addEventListener('keydown', e => {
      if (e.key === 'Enter') doSearch();
    });

    /* 검색 취소 */
    document.getElementById('searchClearBtn')?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      render(currentDay);
    });

    /* 모달 닫기 */
    document.getElementById('modalClose')?.addEventListener('click', UI.closeWordModal);
    document.getElementById('wordModal')?.addEventListener('click', e => {
      if (e.target === document.getElementById('wordModal')) UI.closeWordModal();
    });

    /* ESC 키 */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        UI.closeWordModal();
        UI.closeSidebar();
      }
    });

    /* 브라우저 뒤로 가기 → 모달 닫기 */
    window.addEventListener('popstate', () => {
      const overlay = document.getElementById('wordModal');
      if (overlay && overlay.style.display !== 'none') {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        Audio.stop();
      }
    });

    /* 햄버거 메뉴 */
    document.getElementById('menuToggle')?.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar?.classList.contains('open')) UI.closeSidebar();
      else UI.openSidebar();
    });

    /* 사이드바 오버레이 클릭 */
    document.getElementById('sidebarOverlay')?.addEventListener('click', UI.closeSidebar);

    /* ── 보텀 네비게이션 탭 ── */
    document.getElementById('bottomNav')?.addEventListener('click', e => {
      const btn = e.target.closest('.bottom-nav-item');
      if (!btn) return;
      const tab = btn.dataset.tab;
      if (tab === currentTab) return;
      doTabSwitch(tab);
    });

    /* ── 모바일 검색 토글 ── */
    const mobileSearchBtn     = document.getElementById('mobileSearchBtn');
    const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
    const mobileSearchInput   = document.getElementById('mobileSearchInput');
    const mobileSearchBack    = document.getElementById('mobileSearchBack');
    const mobileSearchClear   = document.getElementById('mobileSearchClear');

    mobileSearchBtn?.addEventListener('click', () => {
      mobileSearchOverlay?.classList.add('open');
      mobileSearchInput?.focus();
    });
    mobileSearchBack?.addEventListener('click', () => {
      mobileSearchOverlay?.classList.remove('open');
      if (mobileSearchInput) mobileSearchInput.value = '';
    });
    mobileSearchClear?.addEventListener('click', () => {
      if (mobileSearchInput) mobileSearchInput.value = '';
      mobileSearchInput?.focus();
    });
    mobileSearchInput?.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const query = mobileSearchInput.value.trim();
        mobileSearchOverlay?.classList.remove('open');
        if (!query) { render(currentDay); return; }
        switchToTab('study');
        performSearch(query);
      } else if (e.key === 'Escape') {
        mobileSearchOverlay?.classList.remove('open');
        if (mobileSearchInput) mobileSearchInput.value = '';
      }
    });

    /* ── 상단 탭 전환 ── */
    document.getElementById('mainTabs')?.addEventListener('click', e => {
      const btn = e.target.closest('.main-tab');
      if (!btn) return;
      const tab = btn.dataset.tab;
      if (tab === currentTab) return;
      doTabSwitch(tab);
    });

    /* ── 진도 탭에서 Day 히트맵/바 클릭 → 학습 탭 이동 ── */
    document.getElementById('progressContainer')?.addEventListener('click', e => {
      const el = e.target.closest('[data-day]');
      if (!el || e.target.closest('.pg-heatmap') === null && e.target.closest('.pg-day-bars') === null) return;
      const d = parseInt(el.dataset.day, 10);
      if (d >= 1 && d <= TOTAL_DAYS) {
        currentDay = d;
        switchToTab('study');
        render(currentDay);
      }
    });

    /* 모달 내부 이벤트 (동적 생성 → 이벤트 위임) */
    document.getElementById('wordModal')?.addEventListener('click', e => {
      // 모달 발음 듣기
      const audioBtn = e.target.closest('#modalAudioBtn');
      if (audioBtn) {
        const word = audioBtn.dataset.word;
        Audio.stop();
        audioBtn.classList.add('playing');
        Audio.speak(word, 'en-US',
          null,
          () => audioBtn.classList.remove('playing')
        );
        return;
      }

      // 모달 단어+예문 듣기
      const exBtn = e.target.closest('#modalAudioExBtn');
      if (exBtn) {
        const word    = exBtn.dataset.word;
        const example = exBtn.dataset.example;
        Audio.stop();
        exBtn.classList.add('playing');
        Audio.speakWithExample(word, example,
          null,
          () => exBtn.classList.remove('playing')
        );
        return;
      }

      // 모달 체크 버튼
      const checkBtn = e.target.closest('#modalCheckBtn');
      if (checkBtn) {
        const day = parseInt(checkBtn.dataset.day, 10);
        const idx = parseInt(checkBtn.dataset.idx, 10);
        handleCheck(day, idx);
        // 모달 체크 버튼 UI 갱신
        const checked = Storage.isChecked(day, idx);
        checkBtn.style.background    = checked ? 'var(--success)' : 'transparent';
        checkBtn.style.borderColor   = checked ? 'var(--success)' : 'var(--border)';
        checkBtn.style.color         = checked ? '#fff'           : 'transparent';
        return;
      }
    });
  }

  /* ─────────────────────────────────────────
     탭 전환 헬퍼
  ───────────────────────────────────────── */
  function switchToTab(tab) {
    currentTab = tab;
    // 상단 탭 (PC)
    document.querySelectorAll('.main-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    // 하단 탭 (모바일)
    document.querySelectorAll('.bottom-nav-item').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
    const pane = document.getElementById(tab === 'study' ? 'tabStudy' : tab === 'wordlist' ? 'tabWordlist' : 'tabProgress');
    if (pane) pane.style.display = '';
  }

  // 탭 전환 + 콘텐츠 렌더링 (상/하단 탭 공통 호출)
  function doTabSwitch(tab) {
    switchToTab(tab);
    if (tab === 'wordlist') {
      wlFilterDay = 0;
      UI.renderWordList(wlFilterDay);
      bindWordListEvents();
    } else if (tab === 'progress') {
      UI.renderProgressPage();
      bindProgressEvents();
    }
  }

  /* ─────────────────────────────────────────
     전체 단어 리스트 이벤트
  ───────────────────────────────────────── */
  function bindWordListEvents() {
    // tabWordlist 부모에 한 번만 바인딩 (cloneNode 없이 이벤트 위임)
    const pane = document.getElementById('tabWordlist');
    if (!pane || pane.dataset.wlBound) return;
    pane.dataset.wlBound = 'true';

    // Day 선택 드롭다운 change
    pane.addEventListener('change', e => {
      if (e.target.id === 'wlDaySelect') {
        wlFilterDay = parseInt(e.target.value, 10);
        UI.renderWordList(wlFilterDay);
      }
    });

    pane.addEventListener('click', e => {
      // 체크 버튼
      const checkBtn = e.target.closest('.wl-check-btn');
      if (checkBtn) {
        e.stopPropagation();
        const day = parseInt(checkBtn.dataset.day, 10);
        const idx = parseInt(checkBtn.dataset.idx, 10);
        handleCheck(day, idx);
        const checked = Storage.isChecked(day, idx);
        checkBtn.style.background  = checked ? 'var(--success)' : 'transparent';
        checkBtn.style.borderColor = checked ? 'var(--success)' : 'var(--border)';
        checkBtn.style.color       = checked ? '#fff'           : 'transparent';
        const row = checkBtn.closest('.wl-word-row');
        if (row) {
          row.classList.toggle('wl-checked', checked);
          const badge = row.querySelector('.wl-done-badge');
          if (badge) badge.classList.toggle('visible', checked);
        }
        return;
      }
      // 단어 행 클릭 → 모달
      const row = e.target.closest('.wl-word-row');
      if (row) {
        const day = parseInt(row.dataset.day, 10);
        const idx = parseInt(row.dataset.idx, 10);
        UI.openWordModal(day, idx);
      }
    });
  }

  /* ─────────────────────────────────────────
     학습 진도 이벤트
  ───────────────────────────────────────── */
  function bindProgressEvents() {
    const heatmap = document.getElementById('pgHeatmap');
    const dayBars = document.getElementById('pgDayBars');

    heatmap?.addEventListener('click', e => {
      const cell = e.target.closest('.pg-cell[data-day]');
      if (!cell) return;
      const d = parseInt(cell.dataset.day, 10);
      if (d >= 1 && d <= TOTAL_DAYS && VOCA_DATA[d]?.words?.length > 0) {
        currentDay = d;
        switchToTab('study');
        render(currentDay);
      }
    });

    dayBars?.addEventListener('click', e => {
      const row = e.target.closest('.pg-day-bar-row[data-day]');
      if (!row) return;
      const d = parseInt(row.dataset.day, 10);
      if (d >= 1 && d <= TOTAL_DAYS) {
        currentDay = d;
        switchToTab('study');
        render(currentDay);
      }
    });
  }

  /* ─────────────────────────────────────────
     카드 이벤트 바인딩 (동적 요소)
  ───────────────────────────────────────── */
  function bindCardEvents() {
    const grid = document.getElementById('wordGrid');
    if (!grid) return;

    // 기존 리스너 제거 후 재등록 (클론 방식)
    const newGrid = grid.cloneNode(true);
    grid.parentNode.replaceChild(newGrid, grid);

    newGrid.addEventListener('click', e => {
      // 체크 버튼
      const checkBtn = e.target.closest('.check-btn');
      if (checkBtn && !checkBtn.id) {
        e.stopPropagation();
        const day = parseInt(checkBtn.dataset.day, 10);
        const idx = parseInt(checkBtn.dataset.idx, 10);
        handleCheck(day, idx);
        return;
      }

      // 단어 발음 듣기 버튼
      const audioBtn = e.target.closest('.card-audio-btn');
      if (audioBtn) {
        e.stopPropagation();
        const word = audioBtn.dataset.word;

        if (audioBtn.classList.contains('playing')) {
          Audio.stop();
          newGrid.querySelectorAll('.card-audio-btn.playing, .card-example-audio-btn.playing')
            .forEach(b => b.classList.remove('playing'));
          return;
        }

        newGrid.querySelectorAll('.card-audio-btn.playing, .card-example-audio-btn.playing')
          .forEach(b => b.classList.remove('playing'));

        audioBtn.classList.add('playing');
        Audio.speak(word, 'en-US',
          null,
          () => audioBtn.classList.remove('playing')
        );
        return;
      }

      // 예문 발음 듣기 버튼
      const exAudioBtn = e.target.closest('.card-example-audio-btn');
      if (exAudioBtn) {
        e.stopPropagation();
        const example = exAudioBtn.dataset.example;

        if (exAudioBtn.classList.contains('playing')) {
          Audio.stop();
          newGrid.querySelectorAll('.card-audio-btn.playing, .card-example-audio-btn.playing')
            .forEach(b => b.classList.remove('playing'));
          return;
        }

        newGrid.querySelectorAll('.card-audio-btn.playing, .card-example-audio-btn.playing')
          .forEach(b => b.classList.remove('playing'));

        exAudioBtn.classList.add('playing');
        Audio.speak(example, 'en-US',
          null,
          () => exAudioBtn.classList.remove('playing')
        );
        return;
      }

      // 자세히 버튼
      const detailBtn = e.target.closest('.card-detail-btn');
      if (detailBtn) {
        e.stopPropagation();
        const day = parseInt(detailBtn.dataset.day, 10);
        const idx = parseInt(detailBtn.dataset.idx, 10);
        UI.openWordModal(day, idx);
        return;
      }

      // 카드 자체 클릭 → 상세 모달
      const card = e.target.closest('.word-card');
      if (card) {
        const day = parseInt(card.dataset.day, 10);
        const idx = parseInt(card.dataset.idx, 10);
        UI.openWordModal(day, idx);
      }
    });
  }

  /* ─────────────────────────────────────────
     체크 처리
  ───────────────────────────────────────── */
  function handleCheck(day, idx) {
    const checked = Storage.toggleCheck(day, idx);
    UI.toggleCardChecked(day, idx, checked);
    if (currentTab === 'study') {
      UI.updateDayHeader(day);
      UI.updateSidebarDayBadge(day);
    }
    UI.updateGlobalProgress();
  }

  /* ─────────────────────────────────────────
     검색
  ───────────────────────────────────────── */
  function performSearch(query) {
    const lower = query.toLowerCase();
    const all   = getAllWords();
    const results = all.filter(w =>
      w.word.toLowerCase().includes(lower) ||
      (w.meanings || []).some(m => m.includes(query)) ||
      (w.example || '').toLowerCase().includes(lower)
    );

    searchMode    = true;
    searchResults = results;

    UI.showSearchInfo(query, results.length);
    UI.showEmpty(results.length === 0);

    if (results.length > 0) {
      UI.renderWordCards(null, results, true);
      bindCardEvents();
    }

    UI.renderDayList(currentDay, currentFilter);
  }

  /* ─────────────────────────────────────────
     공개 API
  ───────────────────────────────────────── */
  return { init };
})();

/* 앱 시작 */
document.addEventListener('DOMContentLoaded', App.init);
