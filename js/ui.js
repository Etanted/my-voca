/**
 * ui.js ??UI ?뚮뜑留?紐⑤뱢
 * VOCA ?곸뼱?꾩쟾?뺣났 ?⑥뼱??
 */

const UI = (() => {

  /* ?? SVG ?꾩씠肄??? */
  const ICONS = {
    check:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
    audio:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    detail: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    link:   `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
  };

  /* ?????????????????????????????????????????
     Day 1 ?⑥뼱 ?곗긽 SVG ?쇰윭?ㅽ듃
  ????????????????????????????????????????? */
  const WORD_ILLUST = {
    // 1_0: achieve - trophy
    '1_0': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#fffbeb"/>
      
      <path d="M32 22h32v24c0 11.046-6.716 17-16 17s-16-5.954-16-17V22z" fill="#fcd34d" stroke="#d97706" stroke-width="2"/>
      
      <path d="M22 28h10" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
      <path d="M64 28h10" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
      
      <rect x="42" y="63" width="12" height="5" rx="2" fill="#b45309"/>
      <rect x="34" y="68" width="28" height="5" rx="3" fill="#92400e"/>
      
      <path d="M48 30l2.5 5 5.5.8-4 3.9 1 5.4L48 42.5l-4.9 2.6 1-5.4-4-3.9 5.5-.8z" fill="#fff" stroke="#f59e0b" stroke-width="1"/>
      
      <line x1="48" y1="14" x2="48" y2="18" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <line x1="58" y1="16" x2="56" y2="20" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <line x1="38" y1="16" x2="40" y2="20" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    // 1_1: adapt ??而ㅻ찄?덉삩
    '1_1': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#ecfdf5"/>
      
      <path d="M20 72 Q40 60 76 56" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/>
      
      <ellipse cx="56" cy="52" rx="20" ry="12" fill="#34d399" stroke="#059669" stroke-width="2"/>
      
      <circle cx="72" cy="44" r="10" fill="#34d399" stroke="#059669" stroke-width="2"/>
      
      <circle cx="75" cy="42" r="3" fill="white"/>
      <circle cx="75" cy="42" r="1.5" fill="#064e3b"/>
      
      <path d="M73 38 Q76 36 79 38" stroke="#059669" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      
      <path d="M36 60 Q32 70 28 76" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M44 62 Q42 72 40 78" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M52 63 Q52 73 52 80" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M60 62 Q62 72 64 78" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    // 1_2: advance ??濡쒖폆
    '1_2': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#f5f3ff"/>
      
      <circle cx="18" cy="20" r="2" fill="#c4b5fd"/>
      <circle cx="76" cy="14" r="1.5" fill="#c4b5fd"/>
      <circle cx="82" cy="38" r="2" fill="#ddd6fe"/>
      <circle cx="12" cy="52" r="1.5" fill="#ddd6fe"/>
      <circle cx="70" cy="26" r="1.5" fill="#c4b5fd"/>
      
      <path d="M48 10 Q62 22 64 44 L48 60 L32 44 Q34 22 48 10z" fill="#8b5cf6" stroke="#7c3aed" stroke-width="2"/>
      
      <circle cx="48" cy="36" r="7" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5"/>
      <circle cx="48" cy="36" r="3" fill="#7c3aed"/>
      
      <path d="M32 46 Q22 54 20 64 Q28 60 37 54z" fill="#f43f5e" stroke="#dc2626" stroke-width="1"/>
      <path d="M64 46 Q74 54 76 64 Q68 60 59 54z" fill="#f43f5e" stroke="#dc2626" stroke-width="1"/>
      
      <path d="M42 62 Q38 74 36 82" stroke="#fb923c" stroke-width="3" stroke-linecap="round"/>
      <path d="M48 64 Q48 76 48 84" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
      <path d="M54 62 Q58 74 60 82" stroke="#fb923c" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    // 1_3: allocate ???덉궛 諛곕텇 ?뚯씠李⑦듃
    '1_3': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#eff6ff"/>
      
      <circle cx="48" cy="46" r="28" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
      
      <path d="M48 46 L48 18 A28 28 0 0 1 73.9 62z" fill="#2563eb"/>
      
      <path d="M48 46 L73.9 62 A28 28 0 0 1 26.6 68.2z" fill="#60a5fa"/>
      
      <path d="M48 46 L26.6 68.2 A28 28 0 0 1 48 18z" fill="#dbeafe"/>
      
      <circle cx="48" cy="46" r="11" fill="white"/>
      
      <text x="59" y="36" font-size="9" fill="white" font-weight="bold">40%</text>
      <text x="62" y="65" font-size="9" fill="#1d4ed8" font-weight="bold">35%</text>
      <text x="22" y="60" font-size="9" fill="#3b82f6" font-weight="bold">25%</text>
      
      <rect x="14" y="82" width="10" height="8" rx="1" fill="#2563eb"/>
      <rect x="28" y="84" width="10" height="6" rx="1" fill="#60a5fa"/>
      <rect x="42" y="85" width="10" height="5" rx="1" fill="#93c5fd"/>
    </svg>`,
    // 1_4: analyze ???뗫낫湲?洹몃옒??
    '1_4': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#faf5ff"/>
      
      <rect x="14" y="18" width="50" height="50" rx="4" fill="white" stroke="#e9d5ff" stroke-width="1.5"/>
      
      <line x1="22" y1="22" x2="22" y2="62" stroke="#7c3aed" stroke-width="1.5"/>
      <line x1="22" y1="62" x2="60" y2="62" stroke="#7c3aed" stroke-width="1.5"/>
      
      <path d="M22 55 L28 48 L34 52 L40 38 L46 42 L52 30 L58 34" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M22 55 L28 48 L34 52 L40 38 L46 42 L52 30 L58 34 L58 62 L22 62z" fill="#f3e8ff" opacity="0.5"/>
      
      <circle cx="62" cy="58" r="18" fill="white" fill-opacity="0.9" stroke="#7c3aed" stroke-width="3"/>
      
      <line x1="74" y1="70" x2="84" y2="80" stroke="#4c1d95" stroke-width="4" stroke-linecap="round"/>
      
      <polyline points="52,63 56,58 60,61 65,53 70,56" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`,
    // 1_5: anticipate ???щ젰+?쒓퀎
    '1_5': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#fff7ed"/>
      
      <rect x="14" y="26" width="56" height="54" rx="6" fill="white" stroke="#f97316" stroke-width="2"/>
      
      <circle cx="30" cy="22" r="4" fill="#f97316"/>
      <circle cx="54" cy="22" r="4" fill="#f97316"/>
      <rect x="28" y="20" width="4" height="10" rx="2" fill="#f97316"/>
      <rect x="52" y="20" width="4" height="10" rx="2" fill="#f97316"/>
      
      <rect x="14" y="26" width="56" height="14" rx="6" fill="#f97316"/>
      <text x="42" y="37" text-anchor="middle" font-size="9" fill="white" font-weight="bold">MARCH</text>
      
      <text x="24" y="54" font-size="8" fill="#9ca3af">M T W T</text>
      <text x="24" y="65" font-size="8" fill="#1f2937">      1  2  3</text>
      
      <circle cx="52" cy="72" r="9" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
      <text x="52" y="75" text-anchor="middle" font-size="9" fill="#c2410c" font-weight="bold">15</text>
      
      <circle cx="62" cy="50" r="10" fill="#fef3c7" stroke="#fbbf24" stroke-width="2"/>
      <line x1="62" y1="50" x2="62" y2="44" stroke="#92400e" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="62" y1="50" x2="66" y2="52" stroke="#92400e" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    // 1_6: apply ??吏?먯꽌+??
    '1_6': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#f0fdf4"/>
      
      <rect x="18" y="12" width="46" height="60" rx="4" fill="white" stroke="#22c55e" stroke-width="2"/>
      
      <line x1="26" y1="26" x2="56" y2="26" stroke="#bbf7d0" stroke-width="2" stroke-linecap="round"/>
      <line x1="26" y1="32" x2="56" y2="32" stroke="#bbf7d0" stroke-width="2" stroke-linecap="round"/>
      <line x1="26" y1="38" x2="56" y2="38" stroke="#bbf7d0" stroke-width="2" stroke-linecap="round"/>
      <line x1="26" y1="44" x2="48" y2="44" stroke="#bbf7d0" stroke-width="2" stroke-linecap="round"/>
      
      <rect x="22" y="54" width="42" height="12" rx="2" fill="#dcfce7" stroke="#22c55e" stroke-width="1"/>
      <path d="M26 60 Q30 57 34 60 Q38 63 42 60" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      
      <path d="M58 58 L72 30 L78 34 L64 62 L58 64 L58 58z" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
      <path d="M72 30 L76 26 L82 32 L78 34z" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
      <line x1="58" y1="64" x2="54" y2="70" stroke="#15803d" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    // 1_7: assess ???됯? 泥댄겕由ъ뒪??
    '1_7': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#ecfdf5"/>
      
      <rect x="22" y="10" width="52" height="76" rx="4" fill="white" stroke="#10b981" stroke-width="2"/>
      <rect x="34" y="6" width="28" height="10" rx="5" fill="#10b981"/>
      
      <circle cx="32" cy="32" r="6" fill="#10b981"/>
      <polyline points="29,32 32,35 37,28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="42" y1="30" x2="66" y2="30" stroke="#6ee7b7" stroke-width="2" stroke-linecap="round"/>
      <line x1="42" y1="35" x2="60" y2="35" stroke="#a7f3d0" stroke-width="1.5" stroke-linecap="round"/>
      
      <circle cx="32" cy="52" r="6" fill="#10b981"/>
      <polyline points="29,52 32,55 37,48" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="42" y1="50" x2="66" y2="50" stroke="#6ee7b7" stroke-width="2" stroke-linecap="round"/>
      <line x1="42" y1="55" x2="58" y2="55" stroke="#a7f3d0" stroke-width="1.5" stroke-linecap="round"/>
      
      <circle cx="32" cy="72" r="6" fill="white" stroke="#10b981" stroke-width="2"/>
      <line x1="42" y1="70" x2="66" y2="70" stroke="#6ee7b7" stroke-width="2" stroke-linecap="round"/>
      <line x1="42" y1="75" x2="54" y2="75" stroke="#a7f3d0" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    // 1_8: assume ???앷컖?섎뒗 ?щ엺
    '1_8': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#f0f9ff"/>
      
      <circle cx="40" cy="30" r="14" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      
      <ellipse cx="35" cy="28" rx="3" ry="3.5" fill="white"/>
      <ellipse cx="35" cy="28" rx="1.5" ry="2" fill="#0369a1"/>
      <ellipse cx="44" cy="28" rx="3" ry="3.5" fill="white"/>
      <ellipse cx="44" cy="28" rx="1.5" ry="2" fill="#0369a1"/>
      
      <path d="M36 36 Q40 40 44 36" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      
      <path d="M26 74 Q26 56 40 54 Q54 56 54 74" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
      
      <path d="M52 22 Q64 12 74 18 Q72 30 62 28 Q58 28 54 24z" fill="white" stroke="#0284c7" stroke-width="1.5"/>
      <text x="63" y="24" text-anchor="middle" font-size="14" fill="#0284c7">?</text>
      
      <circle cx="53" cy="26" r="2" fill="white" stroke="#0284c7" stroke-width="1"/>
      <circle cx="50" cy="24" r="1.5" fill="white" stroke="#0284c7" stroke-width="1"/>
    </svg>`,
    // 1_9: attract ???먯꽍
    '1_9': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#fff1f2"/>
      
      <rect x="8" y="34" width="8" height="6" rx="1" fill="#94a3b8"/>
      <rect x="16" y="38" width="16" height="2" fill="#94a3b8"/>
      
      <rect x="72" y="34" width="8" height="6" rx="1" fill="#94a3b8"/>
      <rect x="62" y="38" width="16" height="2" fill="#94a3b8"/>
      
      <path d="M30 18 L30 56 Q30 72 48 72 L48 56 L48 56 L48 72 Q66 72 66 56 L66 18 L56 18 L56 48 L38 48 L38 18z" fill="#f43f5e" stroke="#be123c" stroke-width="2"/>
      
      <rect x="30" y="18" width="8" height="16" rx="2" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
      
      <rect x="58" y="18" width="8" height="16" rx="2" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
      
      <text x="34" y="29" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">N</text>
      <text x="62" y="29" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">S</text>
      
      <path d="M18 36 L26 40 L18 46" stroke="#f43f5e" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      <path d="M78 36 L70 40 L78 46" stroke="#f43f5e" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    </svg>`,
    // 1_10: benefit ???좊Ъ ?곸옄
    '1_10': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#fefce8"/>
      
      <rect x="16" y="46" width="64" height="38" rx="4" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
      
      <rect x="14" y="36" width="68" height="14" rx="4" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
      
      <rect x="44" y="36" width="8" height="48" fill="#f97316" opacity="0.8"/>
      
      <rect x="14" y="42" width="68" height="8" fill="#f97316" opacity="0.8"/>
      
      <path d="M48 36 Q38 26 28 30 Q24 40 36 40 Q44 38 48 36z" fill="#ef4444" stroke="#dc2626" stroke-width="1.5"/>
      
      <path d="M48 36 Q58 26 68 30 Q72 40 60 40 Q52 38 48 36z" fill="#ef4444" stroke="#dc2626" stroke-width="1.5"/>
      
      <line x1="80" y1="14" x2="78" y2="20" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <line x1="86" y1="22" x2="82" y2="24" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <line x1="74" y1="10" x2="74" y2="16" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    // 1_11: challenge ???깆궛媛
    '1_11': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#f0fdf4"/>
      
      <rect x="0" y="0" width="96" height="48" rx="14" fill="#bfdbfe" opacity="0.3"/>
      
      <polygon points="48,12 10,80 86,80" fill="#86efac" stroke="#16a34a" stroke-width="2"/>
      
      <polygon points="70,34 58,80 82,80" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
      
      <polygon points="26,44 8,80 44,80" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
      
      <polygon points="48,12 44,24 52,24" fill="#fbbf24" stroke="#d97706" stroke-width="1"/>
      
      <circle cx="34" cy="48" r="5" fill="#fb923c" stroke="#ea580c" stroke-width="2"/>
      <line x1="34" y1="53" x2="30" y2="65" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
      <line x1="30" y1="65" x2="26" y2="72" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
      <line x1="30" y1="65" x2="36" y2="72" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
      <line x1="34" y1="58" x2="28" y2="62" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
      
      <line x1="26" y1="50" x2="20" y2="68" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    // 1_12: communicate ?????щ엺 ???
    '1_12': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#eff6ff"/>
      
      <circle cx="26" cy="28" r="9" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
      <path d="M14 62 Q14 48 26 46 Q38 48 38 62" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
      
      <circle cx="70" cy="28" r="9" fill="#a7f3d0" stroke="#10b981" stroke-width="2"/>
      <path d="M58 62 Q58 48 70 46 Q82 48 82 62" fill="#a7f3d0" stroke="#10b981" stroke-width="2"/>
      
      <path d="M36 22 Q48 14 58 22 L58 38 Q48 46 36 38z" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/>
      <path d="M58 36 L62 42 L54 38z" fill="#60a5fa"/>
      <line x1="42" y1="28" x2="54" y2="28" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="42" y1="33" x2="52" y2="33" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      
      <path d="M42 50 L54 50" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>
      <path d="M50 46 L54 50 L50 54" stroke="#6b7280" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>`,
    // 1_13: compete ???щ━湲??쒗빀
    '1_13': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#fff7ed"/>
      
      <path d="M8 78 Q48 70 88 78" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round" fill="none"/>
      <line x1="8" y1="82" x2="88" y2="82" stroke="#f97316" stroke-width="3"/>
      
      <circle cx="28" cy="36" r="7" fill="#fb923c" stroke="#ea580c" stroke-width="2"/>
      
      <path d="M32 32 Q38 28 42 30" stroke="#ea580c" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      
      <line x1="28" y1="43" x2="26" y2="62" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>
      
      <line x1="28" y1="48" x2="18" y2="52" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
      <line x1="28" y1="48" x2="36" y2="44" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
      
      <line x1="26" y1="62" x2="20" y2="78" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="26" y1="62" x2="34" y2="78" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>
      
      <circle cx="56" cy="32" r="7" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
      <line x1="56" y1="39" x2="54" y2="58" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="54" y1="46" x2="44" y2="48" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
      <line x1="54" y1="46" x2="62" y2="42" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
      <line x1="54" y1="58" x2="48" y2="78" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="54" y1="58" x2="62" y2="78" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/>
      
      <rect x="80" y="56" width="4" height="26" fill="#ea580c"/>
      <polygon points="84,56 96,62 84,68" fill="#f97316"/>
    </svg>`,
    // 1_14: concentrate ???붿궡+怨쇰뀅
    '1_14': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#fdf4ff"/>
      
      <circle cx="48" cy="50" r="32" fill="white" stroke="#f5d0fe" stroke-width="2"/>
      <circle cx="48" cy="50" r="26" fill="white" stroke="#e879f9" stroke-width="2"/>
      
      <circle cx="48" cy="50" r="18" fill="#fae8ff" stroke="#d946ef" stroke-width="2.5"/>
      <circle cx="48" cy="50" r="10" fill="#e879f9" stroke="#a21caf" stroke-width="2"/>
      <circle cx="48" cy="50" r="4" fill="#a21caf"/>
      
      <line x1="72" y1="14" x2="52" y2="44" stroke="#374151" stroke-width="2.5" stroke-linecap="round"/>
      
      <path d="M50 44 L54 46 L52 50 L48 48z" fill="#374151"/>
      
      <circle cx="48" cy="50" r="2" fill="#fff" opacity="0.7"/>
      
      <text x="28" y="22" font-size="8" fill="#d946ef">&#9670;</text>
      <text x="72" y="82" font-size="8" fill="#d946ef">&#9670;</text>
    </svg>`,
    // 1_15: confirm ???ㅽ꺃??泥댄겕
    '1_15': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#f0fdf4"/>
      
      <rect x="14" y="14" width="50" height="64" rx="4" fill="white" stroke="#d1d5db" stroke-width="1.5"/>
      <line x1="22" y1="26" x2="56" y2="26" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="22" y1="32" x2="56" y2="32" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="22" y1="38" x2="56" y2="38" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="22" y1="44" x2="48" y2="44" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round"/>
      
      <rect x="52" y="44" width="24" height="10" rx="4" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
      <rect x="56" y="36" width="16" height="10" rx="3" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
      <rect x="60" y="30" width="8" height="8" rx="2" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
      
      <path d="M36 66 Q48 56 60 62" fill="#bbf7d0" stroke="#16a34a" stroke-width="1"/>
      
      <circle cx="48" cy="68" r="16" fill="#16a34a" opacity="0.9"/>
      <polyline points="40,68 46,74 58,60" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    // 1_16: consider ?????
    '1_16': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#fffbeb"/>
      
      <line x1="48" y1="14" x2="48" y2="80" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
      
      <circle cx="48" cy="14" r="5" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
      
      <line x1="16" y1="34" x2="80" y2="34" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/>
      
      <line x1="16" y1="34" x2="16" y2="54" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
      <rect x="8" y="54" width="16" height="12" rx="4" fill="#fcd34d" stroke="#d97706" stroke-width="1.5"/>
      
      <text x="14" y="64" font-size="8" fill="#78350f" font-weight="bold">100</text>
      
      <line x1="80" y1="34" x2="80" y2="44" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
      <rect x="72" y="44" width="16" height="12" rx="4" fill="#fcd34d" stroke="#d97706" stroke-width="1.5"/>
      <text x="76" y="54" font-size="8" fill="#78350f" font-weight="bold">100</text>
      
      <rect x="40" y="78" width="16" height="6" rx="3" fill="#92400e"/>
      
      <path d="M20 74 Q24 72 28 74 L26 80 Q24 82 22 80z" fill="#fbbf24"/>
      <path d="M68 72 Q72 70 76 72 L74 78 Q72 80 70 78z" fill="#fbbf24"/>
    </svg>`,
    // 1_17: contribute ????湲곕? ?쇰윭?ㅽ듃
    '1_17': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#fff1f2"/>
      
      <rect x="14" y="48" width="68" height="36" rx="6" fill="#fecdd3" stroke="#f43f5e" stroke-width="2"/>
      
      <rect x="36" y="44" width="24" height="8" rx="2" fill="#fb7185" stroke="#f43f5e" stroke-width="1.5"/>
      
      <circle cx="48" cy="40" r="8" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
      <text x="48" y="44" text-anchor="middle" font-size="9" fill="#78350f" font-weight="bold">$</text>
      
      <path d="M16 56 Q16 46 28 46 L40 46 Q44 40 50 40 L70 46 Q76 48 74 58 L40 58z" fill="#fda4af" stroke="#f43f5e" stroke-width="1.5"/>
      
      <path d="M30 46 L30 56" stroke="#f43f5e" stroke-width="1" stroke-linecap="round"/>
      <path d="M36 44 L36 56" stroke="#f43f5e" stroke-width="1" stroke-linecap="round"/>
      <path d="M60 46 L60 56" stroke="#f43f5e" stroke-width="1" stroke-linecap="round"/>
      <path d="M66 46 L66 56" stroke="#f43f5e" stroke-width="1" stroke-linecap="round"/>
      
      <path d="M48 22 Q42 16 36 22 Q36 28 48 34 Q60 28 60 22 Q54 16 48 22z" fill="#f43f5e" stroke="#be123c" stroke-width="1.5"/>
    </svg>`,
    // 1_18: create ???잙젅??遺?
    '1_18': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#faf5ff"/>
      
      <ellipse cx="42" cy="60" rx="28" ry="18" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
      <ellipse cx="42" cy="60" rx="20" ry="12" fill="#ede9fe"/>
      
      <circle cx="28" cy="62" r="6" fill="#ef4444"/>
      <circle cx="38" cy="70" r="6" fill="#3b82f6"/>
      <circle cx="50" cy="70" r="6" fill="#f59e0b"/>
      <circle cx="60" cy="62" r="6" fill="#22c55e"/>
      <circle cx="56" cy="50" r="6" fill="#a855f7"/>
      
      <path d="M58 42 L78 10 L84 14 L64 46 L58 48 L58 42z" fill="#8b5cf6" stroke="#6d28d9" stroke-width="1.5"/>
      <path d="M78 10 L82 8 L88 14 L84 14z" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1"/>
      
      <ellipse cx="60" cy="44" rx="4" ry="3" transform="rotate(-45 60 44)" fill="#7c3aed"/>
      
      <path d="M64 46 Q70 50 72 56" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>`,
    // 1_19: define ???ъ쟾 ?섏씠吏
    '1_19': `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="96" height="96" rx="14" fill="#eff6ff"/>
      
      <rect x="14" y="12" width="56" height="72" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      
      <rect x="14" y="12" width="10" height="72" rx="4" fill="#2563eb"/>
      
      <line x1="30" y1="24" x2="64" y2="24" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
      <line x1="30" y1="30" x2="64" y2="30" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
      <line x1="30" y1="36" x2="64" y2="36" stroke="#bfdbfe" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="30" y1="42" x2="64" y2="42" stroke="#bfdbfe" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="30" y1="48" x2="58" y2="48" stroke="#bfdbfe" stroke-width="1.5" stroke-linecap="round"/>
      
      <rect x="26" y="56" width="42" height="14" rx="3" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1"/>
      <text x="47" y="67" text-anchor="middle" font-size="8" fill="#1d4ed8" font-weight="bold">DEFINE</text>
      
      <rect x="74" y="62" width="14" height="8" rx="2" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
      <text x="81" y="69" text-anchor="middle" font-size="7" fill="#78350f" font-weight="bold">A-Z</text>
    </svg>`
  };

  /* ?????????????????????????????????????????
     ?ъ씠?쒕컮 Day 紐⑸줉 ?뚮뜑留?
  ????????????????????????????????????????? */
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

      const badgeText = wordCount > 0 ? `${checked}/${wordCount}` : '준비 중';
      const badgeClass = isComplete ? 'day-badge done' : 'day-badge';

      item.innerHTML = `
        <span class="day-num">Day ${d}</span>
        <div class="day-info">
          <div class="day-item-theme">${dayData.theme || '준비 중'}</div>
        </div>
        <span class="${badgeClass}">${badgeText}</span>
      `;

      fragment.appendChild(item);
    }

    dayList.innerHTML = '';
    dayList.appendChild(fragment);

    // ?꾩옱 Day媛 蹂댁씠?꾨줉 ?ㅽ겕濡?
    requestAnimationFrame(() => {
      const active = dayList.querySelector('.day-item.active');
      if (active) active.scrollIntoView({ block: 'nearest' });
    });
  }

  /* ?????????????????????????????????????????
     ?⑥뼱 移대뱶 ?뚮뜑留?
  ????????????????????????????????????????? */
  function renderWordCards(day, words, searchMode = false) {
    const grid = document.getElementById('wordGrid');
    if (!grid) return;

    if (!words || words.length === 0) {
      grid.innerHTML = `
        <div class="card-no-data" style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#94a3b8;">
          <div style="font-size:40px;margin-bottom:12px;">📚</div>
          <p style="font-size:15px;">이 날의 단어가 아직 준비되지 않았습니다.</p>
          <p style="font-size:13px;margin-top:6px;">나중에 업데이트될 예정입니다.</p>
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

      // Day 1 ?꾩슜 ?쇰윭?ㅽ듃
      const illustKey = `${realDay}_${realIdx}`;
      const illustSvg = (realDay === 1 && WORD_ILLUST[illustKey])
        ? `<div class="card-illust" aria-hidden="true">${WORD_ILLUST[illustKey]}</div>`
        : '';

      card.innerHTML = `
        <span class="card-num">${String(displayIdx + 1).padStart(2, '0')}</span>
        <button class="check-btn" title="학습 완료 체크" data-day="${realDay}" data-idx="${realIdx}">
          ${ICONS.check}
        </button>
        ${illustSvg}
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
            <button class="card-example-audio-btn" title="예문 음성 듣기" data-example="${escapeAttr(example)}">${ICONS.audio}</button>
          </div>
          <div class="card-example-kr">${escapeHtml(exampleKr || '')}</div>
        </div>` : ''}
        ${ex2 ? `
        <div class="card-example card-example-2">
          <div class="card-example-label">예문 2</div>
          <div class="card-example-row">
            <div class="card-example-en">${escapeHtml(ex2.example2)}</div>
            <button class="card-example-audio-btn" title="예문 음성 듣기" data-example="${escapeAttr(ex2.example2)}">${ICONS.audio}</button>
          </div>
          <div class="card-example-kr">${escapeHtml(ex2.example2Kr || '')}</div>
        </div>` : ''}
        <div class="card-actions">
          <button class="card-audio-btn" title="단어 음성 듣기" data-word="${escapeAttr(word)}">
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

  /* ?????????????????????????????????????????
     Day ?ㅻ뜑 ?낅뜲?댄듃
  ????????????????????????????????????????? */
  function updateDayHeader(day) {
    const dayData   = VOCA_DATA[day] || { theme: '', words: [] };
    const wordCount = dayData.words.length;
    const checked   = Storage.getDayCheckedCount(day);
    const pct       = wordCount > 0 ? Math.round((checked / wordCount) * 100) : 0;

    setTextContent('dayTitle', `Day ${day}`);
    setTextContent('dayTheme', dayData.theme || '준비 중');
    setTextContent('dayProgressText', `${checked} / ${wordCount} 학습`);

    const bar = document.getElementById('dayProgressBar');
    if (bar) bar.style.width = pct + '%';
  }

  /* ?????????????????????????????????????????
     ?꾩껜 吏꾪뻾瑜?(?ㅻ뜑) ?낅뜲?댄듃
  ????????????????????????????????????????? */
  function updateGlobalProgress() {
    const total   = Storage.getTotalCheckedCount();
    const pct     = Math.round((total / 6000) * 100 * 10) / 10;

    setTextContent('totalChecked', total.toLocaleString());
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = Math.min(pct, 100) + '%';
  }

  /* ?????????????????????????????????????????
     ?⑥뼱 移대뱶 泥댄겕 ?곹깭 ?좉? (DOM ?낅뜲?댄듃)
  ????????????????????????????????????????? */
  function toggleCardChecked(day, idx, checked) {
    const card = document.querySelector(`.word-card[data-day="${day}"][data-idx="${idx}"]`);
    if (!card) return;
    card.classList.toggle('checked', checked);
  }

  /* ?????????????????????????????????????????
     ?ъ씠?쒕컮 ?뱀젙 Day 諭껋? ?낅뜲?댄듃
  ????????????????????????????????????????? */
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
      badge.textContent = wordCount > 0 ? `${checked}/${wordCount}` : '준비 중';
    }
  }

  /* ?????????????????????????????????????????
     ?⑥뼱 ?곸꽭 紐⑤떖 ?뚮뜑留?
  ????????????????????????????????????????? */
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
        ${ICONS.audio} 음성 듣기
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
        <button class="card-example-audio-btn" style="flex-shrink:0;" title="예문 음성 듣기" data-example="${escapeAttr(w.example)}">${ICONS.audio}</button>
      </div>
      ${ex2m ? `
      <div style="margin-top:10px;">
        <div class="modal-section-title">예문 2</div>
        <div class="modal-example-row" style="display:flex;align-items:flex-start;gap:8px;">
          <div style="flex:1">
            <div class="modal-example-en">${escapeHtml(ex2m.example2)}</div>
            <div class="modal-example-kr">${escapeHtml(ex2m.example2Kr || '')}</div>
          </div>
          <button class="card-example-audio-btn" style="flex-shrink:0;" title="예문 음성 듣기" data-example="${escapeAttr(ex2m.example2)}">${ICONS.audio}</button>
        </div>
      </div>` : ''}`;
      })() : ''}

      <div class="modal-divider"></div>
      <a class="modal-naver-link" href="${naverUrl}" target="_blank" rel="noopener noreferrer">
        ${ICONS.link} 네이버 사전에서 더 보기
      </a>
    `;

    const overlay = document.getElementById('wordModal');
    if (overlay) overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // ?ㅻ줈 媛湲?踰꾪듉?쇰줈 紐⑤떖 ?リ린 吏??
    history.pushState({ wordModal: true }, '');
  }

  function closeWordModal() {
    const overlay = document.getElementById('wordModal');
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = '';
    Audio.stop();
    // 紐⑤떖??history state瑜?push?덈떎硫??ㅻ줈 ?대룞
    if (history.state && history.state.wordModal) {
      history.back();
    }
  }

  /* ?????????????????????????????????????????
     ?꾩껜 ?⑥뼱 由ъ뒪???뚮뜑留?
  ????????????????????????????????????????? */
  function renderWordList(filterDay = 0) {
    const container = document.getElementById('wordListContainer');
    if (!container) return;

    const allWords = getAllWords();
    const filtered = filterDay > 0 ? allWords.filter(w => w.day === filterDay) : allWords;

    // 단어가 있는 Day 목록만 수집
    const activeDays = [...new Set(allWords.map(w => w.day))].sort((a, b) => a - b);

    let optionsHtml = `<option value="0">전체 (${allWords.length}단어)</option>`;
    activeDays.forEach(d => {
      const theme = (VOCA_DATA[d] || {}).theme || '';
      const cnt = allWords.filter(w => w.day === d).length;
      optionsHtml += `<option value="${d}" ${filterDay === d ? 'selected' : ''}>Day ${d} — ${escapeHtml(theme)} (${cnt})</option>`;
    });

    let currentDayMark = 0;
    let rowsHtml = '';
    filtered.forEach((w) => {
      const checked = Storage.isChecked(w.day, w.idx);
      if (w.day !== currentDayMark) {
        currentDayMark = w.day;
        const dayData = VOCA_DATA[w.day] || {};
        rowsHtml += `<tr class="wl-day-row"><td colspan="2">📅 Day ${w.day} — ${escapeHtml(dayData.theme || '')}</td></tr>`;
      }
      const checkStyle = `width:24px;height:24px;border-radius:50%;border:2px solid ${checked ? 'var(--success)' : 'var(--border)'};background:${checked ? 'var(--success)' : 'transparent'};color:${checked ? '#fff' : 'transparent'};display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;`;
      rowsHtml += `
        <tr class="wl-word-row${checked ? ' wl-checked' : ''}" data-day="${w.day}" data-idx="${w.idx}">
          <td class="wl-num">${w.idx + 1}</td>
          <td class="wl-compound">
            <div class="wl-line1">
              <span class="wl-word">${escapeHtml(w.word)}</span>
              <span class="wl-pron">${escapeHtml(w.pron || '')}</span>
              <span class="wl-done-badge${checked ? ' visible' : ''}">✓ 완료</span>
            </div>
            <div class="wl-line2">
              <span class="wl-meaning">${(w.meanings || []).join(', ')}</span>
              <button class="check-btn wl-check-btn" style="${checkStyle}" data-day="${w.day}" data-idx="${w.idx}">${ICONS.check}</button>
            </div>
          </td>
        </tr>`;
    });

    container.innerHTML = `
      <div class="wl-header">
        <h3 class="wl-title">전체 단어 리스트 <span class="wl-count">${filtered.length}개</span></h3>
        <div class="wl-day-filter">
          <select id="wlDaySelect" class="wl-day-select">${optionsHtml}</select>
        </div>
      </div>
      <div class="wl-table-wrap">
        <table class="wl-table">
          <thead><tr><th>#</th><th>단어 / 뜻</th></tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>`;
  }

  /* ?????????????????????????????????????????
     ?숈뒿 吏꾨룄 ?뚮뜑留?
  ????????????????????????????????????????? */
  function renderProgressPage() {
    const container = document.getElementById('progressContainer');
    if (!container) return;

    const checkedMap = Storage.getDayCheckedMap();
    const totalChecked = Storage.getTotalCheckedCount();
    const pct = Math.round((totalChecked / 6000) * 100 * 10) / 10;

    const activeDays = Object.keys(VOCA_DATA).map(Number)
      .filter(d => VOCA_DATA[d]?.words?.length > 0)
      .sort((a, b) => a - b);

    let daysStarted = 0, daysComplete = 0;
    for (const d of activeDays) {
      const wc = VOCA_DATA[d].words.length;
      const cnt = parseInt(checkedMap[d] || 0);
      if (cnt > 0) daysStarted++;
      if (cnt >= wc) daysComplete++;
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
      heatmapHtml += `<div class="${cls}" title="Day ${d} (${checked}/${wc > 0 ? wc : '준비 중'})" data-day="${d}"></div>`;
    }

    const dayBarsHtml = activeDays.map(d => {
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
        <div class="pg-stat-card"><div class="pg-stat-icon"></div><div class="pg-stat-num">${totalChecked.toLocaleString()}</div><div class="pg-stat-label">학습 완료 단어</div></div>
        <div class="pg-stat-card"><div class="pg-stat-icon"></div><div class="pg-stat-num">${pct}%</div><div class="pg-stat-label">전체 진행률</div></div>
        <div class="pg-stat-card"><div class="pg-stat-icon"></div><div class="pg-stat-num">${daysStarted}</div><div class="pg-stat-label">학습 시작 일수</div></div>
        <div class="pg-stat-card"><div class="pg-stat-icon"></div><div class="pg-stat-num">${daysComplete}</div><div class="pg-stat-label">완료 일수</div></div>
      </div>
      <div class="pg-overall-bar-wrap">
        <div class="pg-overall-label">전체 진행률 (${totalChecked.toLocaleString()} / 6,000 단어)</div>
        <div class="pg-overall-bar-bg"><div class="pg-overall-bar" style="width:${Math.min(pct,100)}%"></div></div>
      </div>
      <div class="pg-heatmap-section">
        <h3 class="pg-section-title">일자별 학습 현황 (Day 1 ~ 300)</h3>
        <div class="pg-legend">
          <span class="pg-legend-item"><span class="pg-cell pg-done" style="width:14px;height:14px;display:inline-block;"></span> 완료</span>
          <span class="pg-legend-item"><span class="pg-cell pg-partial" style="width:14px;height:14px;display:inline-block;"></span> 진행중</span>
          <span class="pg-legend-item"><span class="pg-cell pg-none" style="width:14px;height:14px;display:inline-block;"></span> 미학습</span>
          <span class="pg-legend-item"><span class="pg-cell pg-empty" style="width:14px;height:14px;display:inline-block;"></span> 준비 중</span>
        </div>
        <div class="pg-heatmap" id="pgHeatmap">${heatmapHtml}</div>
      </div>
      <div class="pg-day-list-section">
        <h3 class="pg-section-title">Day별 진행 현황 (전체 ${activeDays.length}일)</h3>
        <div class="pg-day-bars" id="pgDayBars">${dayBarsHtml}</div>
      </div>`;
  }

  /* ?????????????????????????????????????????
     ?ъ씠?쒕컮 紐⑤컮???좉?
  ????????????????????????????????????????? */
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

  /* ?????????????????????????????????????????
     ?꾪꽣 踰꾪듉 ?쒖꽦??
  ????????????????????????????????????????? */
  function setActiveFilter(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
  }

  /* ?????????????????????????????????????????
     寃??寃곌낵 ?덈궡 ?쒖떆/?④?
  ????????????????????????????????????????? */
  function showSearchInfo(query, count) {
    const wrap = document.getElementById('searchResultInfo');
    const text = document.getElementById('searchResultText');
    if (wrap && text) {
      text.textContent = `"${query}" 검색 결과: ${count}건`;
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

  /* ?????????????????????????????????????????
     鍮??곹깭 ?쒖떆/?④?
  ????????????????????????????????????????? */
  function showEmpty(show) {
    const el = document.getElementById('emptyState');
    const grid = document.getElementById('wordGrid');
    if (el) el.style.display = show ? 'block' : 'none';
    if (grid) grid.style.display = show ? 'none' : '';
  }

  /* ?????????????????????????????????????????
     ?좏떥
  ????????????????????????????????????????? */
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
