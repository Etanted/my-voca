/**
 * ui.js — UI 렌더링 모듈
 * VOCA 영어완전정복 단어장
 */

const UI = (() => {

  /* ── SVG 아이콘 ── */
  const ICONS = {
    check:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
    audio:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    detail: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    link:   `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
  };

  /* ─────────────────────────────────────────
     사이드바 Day 목록 렌더링
  ───────────────────────────────────────── */
  function renderDayList(currentDay, filterMode = 'all') {
    const dayList = document.getElementById('dayList');
    if (!dayList) return;

    const checkedMap = Storage.getDayCheckedMap();
    const fragment   = document.createDocumentFragment();

    for (let d = 1; d <= TOTAL_DAYS; d++) {
      const dayData    = VOCA_DATA[d] || { theme: '', words: [] };
      const wordCount  = dayData.words.length;
      const checked    = parseInt(checkedMap[d] || 0);
      const isComplete = wordCount > 0 && checked >= wordCount;
      const hasStudied = checked > 0;

      if (filterMode === 'studied'   && !hasStudied)  continue;
      if (filterMode === 'unstudied' && isComplete)    continue;

      const item = document.createElement('div');
      item.className = `day-item${d === currentDay ? ' active' : ''}`;
      item.dataset.day = d;

      const badgeText = wordCount > 0 ? `${checked}/${wordCount}` : '준비중';
      const badgeClass = isComplete ? 'day-badge done' : 'day-badge';

      item.innerHTML = `
        <span class="day-num">Day ${d}</span>
        <div class="day-info">
          <div class="day-item-theme">${dayData.theme || '준비중'}</div>
        </div>
        <span class="${badgeClass}">${badgeText}</span>
      `;

      fragment.appendChild(item);
    }

    dayList.innerHTML = '';
    dayList.appendChild(fragment);

    // 현재 Day가 보이도록 스크롤
    requestAnimationFrame(() => {
      const active = dayList.querySelector('.day-item.active');
      if (active) active.scrollIntoView({ block: 'nearest' });
    });
  }

  /* ─────────────────────────────────────────
     단어 카드 렌더링
  ───────────────────────────────────────── */
  function renderWordCards(day, words, searchMode = false) {
    const grid = document.getElementById('wordGrid');
    if (!grid) return;

    if (!words || words.length === 0) {
      grid.innerHTML = `
        <div class="card-no-data" style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#94a3b8;">
          <div style="font-size:40px;margin-bottom:12px;">📝</div>
          <p style="font-size:15px;">이 날의 단어가 아직 준비 중입니다.</p>
          <p style="font-size:13px;margin-top:6px;">빠르게 업데이트할게요!</p>
        </div>`;
      return;
    }

    const fragment = document.createDocumentFragment();

    words.forEach((wordObj, displayIdx) => {
      const { day: wDay, idx, word, pron, pos, meanings, example, exampleKr } = wordObj;
      const realDay = wDay || day;
      const realIdx = idx !== undefined ? idx : displayIdx;
      const checked = Storage.isChecked(realDay, realIdx);
      const ex2 = (typeof EXAMPLES2 !== 'undefined') && EXAMPLES2[`${realDay}_${realIdx}`];

      const card = document.createElement('div');
      card.className = `word-card${checked ? ' checked' : ''}`;
      card.dataset.day = realDay;
      card.dataset.idx = realIdx;
      card.style.animationDelay = `${displayIdx * 0.04}s`;

      const meaningsHtml = (meanings || [])
        .map(m => `<div class="card-meaning-item">${escapeHtml(m)}</div>`)
        .join('');

      card.innerHTML = `
        <span class="card-num">${String(displayIdx + 1).padStart(2, '0')}</span>
        <button class="check-btn" title="학습 완료 체크" data-day="${realDay}" data-idx="${realIdx}">
          ${ICONS.check}
        </button>
        <div class="card-word-area">
          <div class="card-word">${escapeHtml(word)}</div>
          <div class="card-pronunciation">${escapeHtml(pron || '')}</div>
          ${pos ? `<span class="card-pos">${escapeHtml(pos)}</span>` : ''}
        </div>
        <div class="card-meanings">${meaningsHtml}</div>
        ${example ? `
        <div class="card-example">
          <div class="card-example-label">예문 1</div>
          <div class="card-example-row">
            <div class="card-example-en">${escapeHtml(example)}</div>
            <button class="card-example-audio-btn" title="예문 발음 듣기" data-example="${escapeAttr(example)}">${ICONS.audio}</button>
          </div>
          <div class="card-example-kr">${escapeHtml(exampleKr || '')}</div>
        </div>` : ''}
        ${ex2 ? `
        <div class="card-example card-example-2">
          <div class="card-example-label">예문 2</div>
          <div class="card-example-row">
            <div class="card-example-en">${escapeHtml(ex2.example2)}</div>
            <button class="card-example-audio-btn" title="예문 발음 듣기" data-example="${escapeAttr(ex2.example2)}">${ICONS.audio}</button>
          </div>
          <div class="card-example-kr">${escapeHtml(ex2.example2Kr || '')}</div>
        </div>` : ''}
        <div class="card-actions">
          <button class="card-audio-btn" title="단어 발음 듣기" data-word="${escapeAttr(word)}">
            ${ICONS.audio} 단어 듣기
          </button>
          <button class="card-detail-btn" title="자세히 보기" data-day="${realDay}" data-idx="${realIdx}">
            ${ICONS.detail} 자세히
          </button>
        </div>
      `;

      fragment.appendChild(card);
    });

    grid.innerHTML = '';
    grid.appendChild(fragment);
  }

  /* ─────────────────────────────────────────
     Day 헤더 업데이트
  ───────────────────────────────────────── */
  function updateDayHeader(day) {
    const dayData   = VOCA_DATA[day] || { theme: '', words: [] };
    const wordCount = dayData.words.length;
    const checked   = Storage.getDayCheckedCount(day);
    const pct       = wordCount > 0 ? Math.round((checked / wordCount) * 100) : 0;

    setTextContent('dayTitle', `Day ${day}`);
    setTextContent('dayTheme', dayData.theme || '준비중');
    setTextContent('dayProgressText', `${checked} / ${wordCount} 학습`);

    const bar = document.getElementById('dayProgressBar');
    if (bar) bar.style.width = pct + '%';
  }

  /* ─────────────────────────────────────────
     전체 진행률 (헤더) 업데이트
  ───────────────────────────────────────── */
  function updateGlobalProgress() {
    const total   = Storage.getTotalCheckedCount();
    const pct     = Math.round((total / 6000) * 100 * 10) / 10;

    setTextContent('totalChecked', total.toLocaleString());
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = Math.min(pct, 100) + '%';
  }

  /* ─────────────────────────────────────────
     단어 카드 체크 상태 토글 (DOM 업데이트)
  ───────────────────────────────────────── */
  function toggleCardChecked(day, idx, checked) {
    const card = document.querySelector(`.word-card[data-day="${day}"][data-idx="${idx}"]`);
    if (!card) return;
    card.classList.toggle('checked', checked);
  }

  /* ─────────────────────────────────────────
     사이드바 특정 Day 뱃지 업데이트
  ───────────────────────────────────────── */
  function updateSidebarDayBadge(day) {
    const dayData   = VOCA_DATA[day] || { words: [] };
    const wordCount = dayData.words.length;
    const checked   = Storage.getDayCheckedCount(day);
    const isComplete = wordCount > 0 && checked >= wordCount;

    const item = document.querySelector(`.day-item[data-day="${day}"]`);
    if (!item) return;

    const badge = item.querySelector('.day-badge');
    if (badge) {
      badge.className = isComplete ? 'day-badge done' : 'day-badge';
      badge.textContent = wordCount > 0 ? `${checked}/${wordCount}` : '준비중';
    }
  }

  /* ─────────────────────────────────────────
     단어 상세 모달 렌더링
  ───────────────────────────────────────── */
  function openWordModal(day, idx) {
    const dayData = VOCA_DATA[day];
    if (!dayData) return;
    const w = dayData.words[idx];
    if (!w) return;

    const checked  = Storage.isChecked(day, idx);
    const naverUrl = `https://en.dict.naver.com/#/search?range=all&query=${encodeURIComponent(w.word)}`;

    const meaningsHtml = (w.meanings || [])
      .map(m => `<li class="modal-meaning-item">${escapeHtml(m)}</li>`)
      .join('');

    const modalBody = document.getElementById('modalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;">
        <div>
          <div class="modal-word">${escapeHtml(w.word)}</div>
          <div class="modal-pronunciation">${escapeHtml(w.pron || '')}</div>
          ${w.pos ? `<span class="modal-pos">${escapeHtml(w.pos)}</span>` : ''}
        </div>
        <button class="check-btn${checked ? ' checked': ''}" id="modalCheckBtn"
          style="position:static;flex-shrink:0;width:36px;height:36px;border-radius:50%;border:2px solid ${checked ? 'var(--success)':'var(--border)'};background:${checked ? 'var(--success)':'transparent'};color:${checked ? '#fff':'transparent'};display:flex;align-items:center;justify-content:center;"
          data-day="${day}" data-idx="${idx}" title="학습 완료 체크">
          ${ICONS.check}
        </button>
      </div>

      <button class="modal-audio-btn" id="modalAudioBtn" data-word="${escapeAttr(w.word)}" data-example="${escapeAttr(w.example || '')}">
        ${ICONS.audio} 발음 듣기
      </button>

      <button class="modal-audio-btn" id="modalAudioExBtn"
        style="margin-left:8px;background:var(--accent-light);border-color:#99f6e4;color:var(--accent);"
        data-word="${escapeAttr(w.word)}" data-example="${escapeAttr(w.example || '')}">
        ${ICONS.audio} 단어+예문 듣기
      </button>

      <div class="modal-divider"></div>

      <div class="modal-section-title">뜻</div>
      <ul class="modal-meanings">${meaningsHtml}</ul>

      ${w.example ? (() => {
        const ex2m = (typeof EXAMPLES2 !== 'undefined') && EXAMPLES2[`${day}_${idx}`];
        return `
      <div class="modal-divider"></div>
      <div class="modal-section-title">예문 1</div>
      <div class="modal-example-row" style="display:flex;align-items:flex-start;gap:8px;">
        <div style="flex:1">
          <div class="modal-example-en">${escapeHtml(w.example)}</div>
          <div class="modal-example-kr">${escapeHtml(w.exampleKr || '')}</div>
        </div>
        <button class="card-example-audio-btn" style="flex-shrink:0;" title="예문 발음 듣기" data-example="${escapeAttr(w.example)}">${ICONS.audio}</button>
      </div>
      ${ex2m ? `
      <div style="margin-top:10px;">
        <div class="modal-section-title">예문 2</div>
        <div class="modal-example-row" style="display:flex;align-items:flex-start;gap:8px;">
          <div style="flex:1">
            <div class="modal-example-en">${escapeHtml(ex2m.example2)}</div>
            <div class="modal-example-kr">${escapeHtml(ex2m.example2Kr || '')}</div>
          </div>
          <button class="card-example-audio-btn" style="flex-shrink:0;" title="예문 발음 듣기" data-example="${escapeAttr(ex2m.example2)}">${ICONS.audio}</button>
        </div>
      </div>` : ''}`;
      })() : ''}

      <div class="modal-divider"></div>
      <a class="modal-naver-link" href="${naverUrl}" target="_blank" rel="noopener noreferrer">
        ${ICONS.link} 네이버 영어사전에서 더 보기
      </a>
    `;

    const overlay = document.getElementById('wordModal');
    if (overlay) overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeWordModal() {
    const overlay = document.getElementById('wordModal');
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = '';
    Audio.stop();
  }

  /* ─────────────────────────────────────────
     전체 단어 리스트 렌더링
  ───────────────────────────────────────── */
  function renderWordList(filterDay = 0) {
    const container = document.getElementById('wordListContainer');
    if (!container) return;

    const allWords = getAllWords();
    const filtered = filterDay > 0 ? allWords.filter(w => w.day === filterDay) : allWords;

    let dayFilterHtml = `<button class="wl-day-btn ${filterDay === 0 ? 'active' : ''}" data-day="0">전체</button>`;
    for (let d = 1; d <= 10; d++) {
      dayFilterHtml += `<button class="wl-day-btn ${filterDay === d ? 'active' : ''}" data-day="${d}">Day ${d}</button>`;
    }

    let currentDayMark = 0;
    let rowsHtml = '';
    filtered.forEach((w) => {
      const checked = Storage.isChecked(w.day, w.idx);
      if (w.day !== currentDayMark) {
        currentDayMark = w.day;
        const dayData = VOCA_DATA[w.day] || {};
        rowsHtml += `<tr class="wl-day-row"><td colspan="6">📅 Day ${w.day} — ${escapeHtml(dayData.theme || '')}</td></tr>`;
      }
      const checkStyle = `width:24px;height:24px;border-radius:50%;border:2px solid ${checked ? 'var(--success)' : 'var(--border)'};background:${checked ? 'var(--success)' : 'transparent'};color:${checked ? '#fff' : 'transparent'};display:inline-flex;align-items:center;justify-content:center;position:static;`;
      rowsHtml += `
        <tr class="wl-word-row${checked ? ' wl-checked' : ''}" data-day="${w.day}" data-idx="${w.idx}">
          <td class="wl-num">${w.idx + 1}</td>
          <td class="wl-word">${escapeHtml(w.word)}</td>
          <td class="wl-pron">${escapeHtml(w.pron || '')}</td>
          <td>${w.pos ? `<span class="card-pos">${escapeHtml(w.pos)}</span>` : ''}</td>
          <td class="wl-meaning">${(w.meanings || []).join(', ')}</td>
          <td class="wl-check"><button class="check-btn wl-check-btn" style="${checkStyle}" data-day="${w.day}" data-idx="${w.idx}">${ICONS.check}</button></td>
        </tr>`;
    });

    container.innerHTML = `
      <div class="wl-header">
        <h3 class="wl-title">전체 단어 리스트 <span class="wl-count">${filtered.length}개</span></h3>
        <div class="wl-day-filter" id="wlDayFilter">${dayFilterHtml}</div>
      </div>
      <div class="wl-table-wrap">
        <table class="wl-table">
          <thead><tr><th>#</th><th>단어</th><th>발음기호</th><th>품사</th><th>뜻</th><th>✓</th></tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>`;
  }

  /* ─────────────────────────────────────────
     학습 진도 렌더링
  ───────────────────────────────────────── */
  function renderProgressPage() {
    const container = document.getElementById('progressContainer');
    if (!container) return;

    const checkedMap = Storage.getDayCheckedMap();
    const totalChecked = Storage.getTotalCheckedCount();
    const pct = Math.round((totalChecked / 6000) * 100 * 10) / 10;

    let daysStarted = 0, daysComplete = 0;
    for (let d = 1; d <= 10; d++) {
      const cnt = parseInt(checkedMap[d] || 0);
      if (cnt > 0) daysStarted++;
      if (cnt >= 20) daysComplete++;
    }

    let heatmapHtml = '';
    for (let d = 1; d <= 300; d++) {
      const dayData = VOCA_DATA[d] || { words: [] };
      const wc = dayData.words.length;
      const checked = parseInt(checkedMap[d] || 0);
      let cls = 'pg-cell';
      if (wc > 0) {
        const p = (checked / wc) * 100;
        cls += p >= 100 ? ' pg-done' : p > 0 ? ' pg-partial' : ' pg-none';
      } else {
        cls += ' pg-empty';
      }
      heatmapHtml += `<div class="${cls}" title="Day ${d} (${checked}/${wc > 0 ? wc : '준비중'})" data-day="${d}"></div>`;
    }

    const dayBarsHtml = Array.from({length: 10}, (_, i) => {
      const d = i + 1;
      const dayData = VOCA_DATA[d] || { theme: '', words: [] };
      const wc = dayData.words.length;
      const chk = parseInt(checkedMap[d] || 0);
      const p = wc > 0 ? Math.round((chk / wc) * 100) : 0;
      return `
        <div class="pg-day-bar-row" data-day="${d}">
          <span class="pg-day-label">Day ${d}</span>
          <span class="pg-day-theme">${escapeHtml(dayData.theme || '')}</span>
          <div class="pg-bar-bg"><div class="pg-bar-fill${p >= 100 ? ' done' : ''}" style="width:${p}%"></div></div>
          <span class="pg-day-pct">${chk}/${wc}</span>
        </div>`;
    }).join('');

    container.innerHTML = `
      <div class="pg-stats-row">
        <div class="pg-stat-card"><div class="pg-stat-icon">📊</div><div class="pg-stat-num">${totalChecked.toLocaleString()}</div><div class="pg-stat-label">학습 완료 단어</div></div>
        <div class="pg-stat-card"><div class="pg-stat-icon">🎯</div><div class="pg-stat-num">${pct}%</div><div class="pg-stat-label">전체 진행률</div></div>
        <div class="pg-stat-card"><div class="pg-stat-icon">📅</div><div class="pg-stat-num">${daysStarted}</div><div class="pg-stat-label">학습 시작 일수</div></div>
        <div class="pg-stat-card"><div class="pg-stat-icon">✅</div><div class="pg-stat-num">${daysComplete}</div><div class="pg-stat-label">완료 일수</div></div>
      </div>
      <div class="pg-overall-bar-wrap">
        <div class="pg-overall-label">전체 진행률 (${totalChecked.toLocaleString()} / 6,000 단어)</div>
        <div class="pg-overall-bar-bg"><div class="pg-overall-bar" style="width:${Math.min(pct,100)}%"></div></div>
      </div>
      <div class="pg-heatmap-section">
        <h3 class="pg-section-title">일자별 학습 현황 (Day 1 → 300)</h3>
        <div class="pg-legend">
          <span class="pg-legend-item"><span class="pg-cell pg-done" style="width:14px;height:14px;display:inline-block;"></span> 완료</span>
          <span class="pg-legend-item"><span class="pg-cell pg-partial" style="width:14px;height:14px;display:inline-block;"></span> 진행중</span>
          <span class="pg-legend-item"><span class="pg-cell pg-none" style="width:14px;height:14px;display:inline-block;"></span> 미학습</span>
          <span class="pg-legend-item"><span class="pg-cell pg-empty" style="width:14px;height:14px;display:inline-block;"></span> 준비중</span>
        </div>
        <div class="pg-heatmap" id="pgHeatmap">${heatmapHtml}</div>
      </div>
      <div class="pg-day-list-section">
        <h3 class="pg-section-title">Day별 진행 상세 (Day 1~10)</h3>
        <div class="pg-day-bars" id="pgDayBars">${dayBarsHtml}</div>
      </div>`;
  }

  /* ─────────────────────────────────────────
     사이드바 모바일 토글
  ───────────────────────────────────────── */
  function openSidebar() {
    document.getElementById('sidebar')?.classList.add('open');
    document.getElementById('sidebarOverlay')?.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('sidebarOverlay')?.classList.remove('show');
    document.body.style.overflow = '';
  }

  /* ─────────────────────────────────────────
     필터 버튼 활성화
  ───────────────────────────────────────── */
  function setActiveFilter(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
  }

  /* ─────────────────────────────────────────
     검색 결과 안내 표시/숨김
  ───────────────────────────────────────── */
  function showSearchInfo(query, count) {
    const wrap = document.getElementById('searchResultInfo');
    const text = document.getElementById('searchResultText');
    if (wrap && text) {
      text.textContent = `"${query}" 검색 결과: ${count}개`;
      wrap.style.display = 'flex';
    }
    document.getElementById('dayHeader')?.style.setProperty('display', 'none');
    document.getElementById('dayProgress')?.style.setProperty('display', 'none');
  }

  function hideSearchInfo() {
    const wrap = document.getElementById('searchResultInfo');
    if (wrap) wrap.style.display = 'none';
    document.getElementById('dayHeader')?.style.removeProperty('display');
    document.getElementById('dayProgress')?.style.removeProperty('display');
  }

  /* ─────────────────────────────────────────
     빈 상태 표시/숨김
  ───────────────────────────────────────── */
  function showEmpty(show) {
    const el = document.getElementById('emptyState');
    const grid = document.getElementById('wordGrid');
    if (el) el.style.display = show ? 'block' : 'none';
    if (grid) grid.style.display = show ? 'none' : '';
  }

  /* ─────────────────────────────────────────
     유틸
  ───────────────────────────────────────── */
  function setTextContent(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeAttr(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  return {
    renderDayList,
    renderWordCards,
    updateDayHeader,
    updateGlobalProgress,
    toggleCardChecked,
    updateSidebarDayBadge,
    openWordModal,
    closeWordModal,
    openSidebar,
    closeSidebar,
    setActiveFilter,
    showSearchInfo,
    hideSearchInfo,
    showEmpty,
    renderWordList,
    renderProgressPage
  };
})();
