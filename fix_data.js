const fs = require('fs');
let c = fs.readFileSync('js/data.js', 'utf8');
const lines = c.split('\n');

// Current state:
// line 1319 (idx 1318) = '  },'  - Day50 close (correct, with comma)
// line 1320 (idx 1319) = '    theme: "TOEIC 빈출 어휘 I"' - Day51 body WITHOUT header
// Need: insert '  51: {' at idx 1319 (before theme:)
// Also: line 1467 (idx 1466) = '  51: {' (orphan, needs removal)

// Find the orphan '  51: {' occurrence (should be after '  "종합 복습"'];\n')
let orphanIdx = -1;
for (let i = 1464; i < 1470; i++) {
  if (lines[i] && lines[i].trim() === '51: {') {
    orphanIdx = i;
    break;
  }
}
console.log('orphanIdx:', orphanIdx, lines[orphanIdx]);

// Remove orphan if found
if (orphanIdx !== -1) {
  lines.splice(orphanIdx, 1);
  console.log('Orphan removed');
}

// Insert '  51: {' before '    theme: "TOEIC 빈출 어휘 I"' (line 1320 = idx 1319)
const themeIdx = lines.findIndex((l, i) => i >= 1315 && l.trim().startsWith('theme: "TOEIC 빈출 어휘 I"'));
console.log('themeIdx:', themeIdx, lines[themeIdx]);

if (themeIdx !== -1 && lines[themeIdx - 1].trim() !== '') {
  lines.splice(themeIdx, 0, '  51: {');
  console.log('Inserted 51: {');
} else if (themeIdx !== -1 && lines[themeIdx - 1].trim() === '' && lines[themeIdx - 2].trim() === '},') {
  lines.splice(themeIdx, 0, '  51: {');
  console.log('Inserted 51: { (with preceding empty line)');
} else {
  console.log('Could not determine where to insert 51: {');
  console.log('line before theme:', JSON.stringify(lines[themeIdx-1]));
}

// Verify around the insertion
console.log('Lines 1318-1324:');
for (let i = 1317; i <= 1324; i++) console.log(i+1, '|', lines[i]?.substring(0, 60));

fs.writeFileSync('js/data.js', lines.join('\n'), 'utf8');
console.log('Done, total lines:', lines.length);


// Step 1: "  },`n\r\n};\r\n" → "  },\r\n"  (VOCA_DATA 조기 닫기 제거)
const bad1 = '  },' + String.fromCharCode(96) + 'n\r\n};\r\n';
const good1 = '  },\r\n';
if (c.includes(bad1)) {
  c = c.replace(bad1, good1);
  console.log('Step1 OK');
} else {
  console.log('Step1 pattern not found!');
  process.exit(1);
}

// Step 2: DAY_THEMES 닫는 ]; 이후의 "`n\r\n  51:" → "  51:"
const bad2 = String.fromCharCode(96) + 'n\r\n  51:';
const good2 = '  51:';
if (c.includes(bad2)) {
  c = c.replace(bad2, good2);
  console.log('Step2 OK');
} else {
  console.log('Step2 pattern not found:', JSON.stringify(bad2));
  // Try to find what's at that area
  const idx = c.indexOf('  51:');
  const snippet = c.slice(Math.max(0,idx-10), idx+10);
  console.log('Near 51: ', JSON.stringify(snippet));
}

// Step 3: Day55 마지막 항목 이후, for loop 직전에 }; 추가
// Day55 ends: "    ]\r\n  }\r\n\r\nfor (let d = 56"
const day55EndPattern = '    ]\r\n  }\r\n\r\nfor (let d = 56';
const forLoopPattern = '\r\nfor (let d = 56; d <= 300; d++) {';
if (c.includes(day55EndPattern)) {
  c = c.replace(day55EndPattern, '    ]\r\n  }\r\n\r\n};\r\nfor (let d = 56');
  console.log('Step3 OK');
} else if (c.includes('    ]\r\n  }\r\nfor (let d = 56')) {
  c = c.replace('    ]\r\n  }\r\nfor (let d = 56', '    ]\r\n  }\r\n\r\n};\r\nfor (let d = 56');
  console.log('Step3 alt OK');
} else {
  // Find Day55 end by searching for lucid word
  const lucidIdx = c.lastIndexOf('{ word: "lucid"');
  const afterLucid = c.indexOf('\r\n    ]\r\n  }', lucidIdx);
  if (afterLucid !== -1) {
    const insertAt = afterLucid + '\r\n    ]\r\n  }'.length;
    c = c.slice(0, insertAt) + '\r\n\r\n};\r\n' + c.slice(insertAt + (c[insertAt] === '\r' ? 2 : 1));
    console.log('Step3 manual OK');
  } else {
    console.log('Step3 failed - lucidIdx:', lucidIdx, 'afterLucid:', afterLucid);
    process.exit(1);
  }
}

fs.writeFileSync('js/data.js', c, 'utf8');
console.log('File saved');



