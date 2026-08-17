// ============================================================
// 【常量配置】
// ============================================================
const CONFIG = {
  MAX_LOGIN_ATTEMPTS: 5,
  TOAST_DURATION: 2200,
  FADE_DURATION: 300,
  ACHIEVEMENT_DURATION: 3500,
  FULLSCREEN_TIMEOUT: 2500,
  SALT: 'ProjectCZ_2026_Salt'
};

// ============================================================
// 【账号密码池 - 所有密码统一（哈希存储）】
// ============================================================
const ACCOUNT_POOL = [
  { account: '13857113238', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: '15558106135', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'zhuniechen106818', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_04', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_05', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_06', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_07', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_08', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_09', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_10', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_11', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_12', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_13', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_14', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_15', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_16', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_17', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_18', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_19', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_20', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_21', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_22', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_23', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_24', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_25', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_26', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_27', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_28', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_29', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_30', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_31', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_32', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_33', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_34', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_35', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_36', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_37', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_38', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_39', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_40', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_41', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_42', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_43', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_44', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_45', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_46', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_47', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_48', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_49', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 },
  { account: 'player_50', passwordHash: 'f2aaabd89395da69f42e1ce610f67f92025b7206e4f2251815adfa94b0cf1107', failCount: 0 }
];




// ============================================================
// 【localStorage 容错封装（file:// 等受限环境下降级为内存存储）】
// ============================================================
var safeStorage = (function() {
  var memory = {};
  var available = false;
  try {
    localStorage.setItem('cz_ls_test', '1');
    localStorage.removeItem('cz_ls_test');
    available = true;
  } catch (e) {
    available = false;
    console.warn('localStorage 不可用，已降级为内存存储（关闭页面后存档不保留）');
  }
  return {
    getItem: function(k) {
      if (available) { try { return localStorage.getItem(k); } catch (e) { return memory.hasOwnProperty(k) ? memory[k] : null; } }
      return memory.hasOwnProperty(k) ? memory[k] : null;
    },
    setItem: function(k, v) {
      if (available) { try { localStorage.setItem(k, v); return; } catch (e) { available = false; } }
      memory[k] = String(v);
    },
    removeItem: function(k) {
      if (available) { try { localStorage.removeItem(k); return; } catch (e) { available = false; } }
      delete memory[k];
    }
  };
})();


// ===== 液态玻璃图标渲染器（Apple Emoji 版，SVG 降级方案保留） =====
const EMOJI_MAP = {
  'play': '▶️',
  'skip': '⏩',
  'save': '💾',
  'folder': '📁',
  'history': '🕘',
  'settings': '⚙️',
  'trophy': '🏆',
  'chart': '📊',
  'book': '📖',
  'back': '↩️',
  'fullscreen': '⛶',
  'volume': '🔊'
};

function renderGlassIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const type = el.getAttribute('data-icon');
    const emoji = EMOJI_MAP[type];
    if (!emoji) return;
    el.innerHTML = '<span class="glass-icon emoji sm" title="' + (el.title || type) + '">' + emoji + '</span>' + (el.textContent.trim() ? ' ' + el.textContent.trim() : '');
  });
}

// ===== SVG 降级渲染器（Emoji 不可用时调用） =====
function renderGlassIconsSVG() {
  const iconMap = {
    'play': 'M8 5v14l11-7z',
    'skip': 'M12 5v14l11-7z M1 5v14l11-7z',
    'save': 'M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0',
    'folder': 'M4 20V4h6l2 2h8v14H4z',
    'history': 'M12 8v5l4 2-1 2-5-3V8z M12 4a8 8 0 0 0-8 8H2l3 3 3-3H6a6 6 0 1 1 6 6 5.9 5.9 0 0 1-4.2-1.7l-1.4 1.4A8 8 0 1 0 12 4z',
    'settings': 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z',
    'trophy': 'M6 3v9a6 6 0 0 0 12 0V3H6z M5 17h14v2H5z M9 19v2h6v-2',
    'chart': 'M3 17h4v4H3z M9 10h4v11H9z M15 3h4v18h-4z',
    'book': 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z M6 6h12v2H6V6z M6 10h8v2H6v-2z',
    'back': 'M19 12H5 M12 19l-7-7 7-7',
    'fullscreen': 'M4 4h6v6H4z M14 14h6v6h-6z M20 4h-6v6h6z M4 14h6v6H4z',
    'volume': 'M11 5L6 9H2v6h4l5 4V5z M15.54 8.46a5 5 0 0 1 0 7.07 M19.07 4.93a10 10 0 0 1 0 14.14'
  };

  document.querySelectorAll('[data-icon]').forEach(el => {
    const type = el.getAttribute('data-icon');
    const paths = iconMap[type];
    if (!paths) return;
    const size = el.classList.contains('sm') ? 18 : 20;
    const pathsArray = paths.split(' ');
    let svgPaths = '';
    for (let i = 0; i < pathsArray.length; i++) {
      svgPaths += '<path d="' + pathsArray[i] + '"/>';
    }
    const svg = '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">' + svgPaths + '</svg>';
    el.innerHTML = '<span class="glass-icon sm" title="' + (el.title || type) + '">' + svg + '</span>' + (el.textContent.trim() ? ' ' + el.textContent.trim() : '');
  });
}
// ===== 全局状态 =====
let currentPage = 'pg-home';
let currentScene = 0;
let currentLine = 0;
let isTyping = false;
let typeTimer = null;
let autoMode = false;
let autoTimer = null;
let skipMode = false;
let skipTimer = null;
let musicPlaying = true;
let fullscreenTimer = null;
let toastTimer = null;
let currentTab = 'save';
let achievements = JSON.parse(safeStorage.getItem('cz_achievements') || '{}');
let codexUnlocked = JSON.parse(safeStorage.getItem('cz_codex') || '[]');

// ===== 好感度与成长系统状态 =====
let favorability = safeParse('cz_favorability', { '陈屿': 0, '林小满': 0, '班主任': 0, '麒麟': 0, '小老鼠': 0 });
let stats = safeParse('cz_stats', { de: 10, zhi: 10, ti: 10, mei: 10 });

// ===== 安全解析 localStorage =====
function safeParse(key, defaultVal) {
  try {
    var data = safeStorage.getItem(key);
    return data ? JSON.parse(data) : defaultVal;
  } catch (e) {
    console.warn('读取数据失败:', key, e);
    return defaultVal;
  }
}

// ===== 提示气泡 =====
function showToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { toast.classList.remove('show'); }, CONFIG.TOAST_DURATION);
}
// ============================================================
// 【SHA-256 哈希函数（优先 Web Crypto，file:// 受限环境降级纯 JS 实现）】
// ============================================================
function utf8Encode(str) {
  if (typeof TextEncoder !== 'undefined') {
    return new TextEncoder().encode(str);
  }
  var out = [];
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c < 0x80) out.push(c);
    else if (c < 0x800) { out.push(0xC0 | (c >> 6), 0x80 | (c & 0x3F)); }
    else if (c >= 0xD800 && c <= 0xDBFF) {
      var c2 = str.charCodeAt(++i);
      var cp = 0x10000 + ((c - 0xD800) << 10) + (c2 - 0xDC00);
      out.push(0xF0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3F), 0x80 | ((cp >> 6) & 0x3F), 0x80 | (cp & 0x3F));
    } else { out.push(0xE0 | (c >> 12), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F)); }
  }
  return new Uint8Array(out);
}

function sha256PureJS(message) {
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  function rotr(x, n) { return ((x >>> n) | (x << (32 - n))) >>> 0; }
  var msgBytes = utf8Encode(message);
  var bitLen = msgBytes.length * 8;
  var paddedLen = (((msgBytes.length + 8) >> 6) + 1) << 6;
  var padded = new Uint8Array(paddedLen);
  padded.set(msgBytes);
  padded[msgBytes.length] = 0x80;
  var hi = Math.floor(bitLen / 0x100000000);
  var lo = bitLen >>> 0;
  padded[paddedLen - 8] = (hi >>> 24) & 0xFF;
  padded[paddedLen - 7] = (hi >>> 16) & 0xFF;
  padded[paddedLen - 6] = (hi >>> 8) & 0xFF;
  padded[paddedLen - 5] = hi & 0xFF;
  padded[paddedLen - 4] = (lo >>> 24) & 0xFF;
  padded[paddedLen - 3] = (lo >>> 16) & 0xFF;
  padded[paddedLen - 2] = (lo >>> 8) & 0xFF;
  padded[paddedLen - 1] = lo & 0xFF;
  var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  var w = new Array(64);
  for (var off = 0; off < paddedLen; off += 64) {
    for (var j = 0; j < 16; j++) {
      w[j] = ((padded[off + j * 4] << 24) | (padded[off + j * 4 + 1] << 16) | (padded[off + j * 4 + 2] << 8) | padded[off + j * 4 + 3]) >>> 0;
    }
    for (var j2 = 16; j2 < 64; j2++) {
      var s0 = rotr(w[j2 - 15], 7) ^ rotr(w[j2 - 15], 18) ^ (w[j2 - 15] >>> 3);
      var s1 = rotr(w[j2 - 2], 17) ^ rotr(w[j2 - 2], 19) ^ (w[j2 - 2] >>> 10);
      w[j2] = (w[j2 - 16] + s0 + w[j2 - 7] + s1) >>> 0;
    }
    var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
    for (var t = 0; t < 64; t++) {
      var S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      var ch = (e & f) ^ (~e & g);
      var temp1 = (h + S1 + ch + K[t] + w[t]) >>> 0;
      var S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      var maj = (a & b) ^ (a & c) ^ (b & c);
      var temp2 = (S0 + maj) >>> 0;
      h = g; g = f; f = e; e = (d + temp1) >>> 0;
      d = c; c = b; b = a; a = (temp1 + temp2) >>> 0;
    }
    H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0; H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0; H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
  }
  var hex = '';
  for (var i = 0; i < 8; i++) {
    for (var k = 7; k >= 0; k--) {
      hex += ((H[i] >>> (k * 4)) & 0xF).toString(16);
    }
  }
  return hex;
}

async function sha256(message) {
  // 优先使用 Web Crypto（https / 安全环境）
  if (window.crypto && window.crypto.subtle && window.crypto.subtle.digest) {
    try {
      var data = utf8Encode(message);
      var hashBuffer = await crypto.subtle.digest('SHA-256', data);
      var hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
    } catch (e) {
      console.warn('Web Crypto 计算失败，降级为纯 JS 实现:', e);
    }
  }
  // 降级：纯 JS 实现（file:// 等 crypto.subtle 不可用的环境）
  return sha256PureJS(message);
}

// ============================================================
// 【好感度与成长系统 - 核心函数】
// ============================================================
function changeFavorability(char, delta) {
  favorability[char] = (favorability[char] || 0) + delta;
  // 数值边界限制
  if (favorability[char] > 20) favorability[char] = 20;
  if (favorability[char] < -10) favorability[char] = -10;
  updateStatsUI();
  // 显示浮动提示
  var sign = delta > 0 ? '+' : '';
  // showToast(char + ' 好感度' + sign + delta);
}

function changeStat(statName, delta) {
  stats[statName] = (stats[statName] || 0) + delta;
  // 数值边界限制
  if (stats[statName] > 25) stats[statName] = 25;
  if (stats[statName] < 0) stats[statName] = 0;
  updateStatsUI();
  var label = { de: '德', zhi: '智', ti: '体', mei: '美' }[statName] || statName;
  var sign = delta > 0 ? '+' : '';
  // showToast(label + ' ' + sign + delta);
}

function applyChanges(changes) {
  if (changes.fav) {
    for (var char in changes.fav) {
      changeFavorability(char, changes.fav[char]);
    }
  }
  if (changes.stat) {
    for (var s in changes.stat) {
      changeStat(s, changes.stat[s]);
    }
  }
}

function checkFavorability(character, minValue) {
  return (favorability[character] || 0) >= minValue;
}

function checkStat(statName, minValue) {
  return (stats[statName] || 0) >= minValue;
}

function checkCombination(conditions) {
  if (conditions.fav) {
    for (var char in conditions.fav) {
      if (!checkFavorability(char, conditions.fav[char])) return false;
    }
  }
  if (conditions.stat) {
    for (var s in conditions.stat) {
      if (!checkStat(s, conditions.stat[s])) return false;
    }
  }
  return true;
}

function getFavLabel(val) {
  if (val <= -5) return '️ 冷淡';
  if (val <= 4) return '─ 中立';
  if (val <= 10) return ' 友好';
  if (val <= 15) return '❤️ 亲密';
  return ' 挚友';
}

function getStatLabel(val) {
  if (val <= 5) return ' 萌芽';
  if (val <= 10) return ' 成长';
  if (val <= 15) return ' 成熟';
  return ' 卓越';
}

function renderFavorabilityUI(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var chars = ['陈屿', '林小满', '班主任', '麒麟', '小老鼠'];
  var icons = { '陈屿': '', '林小满': '', '班主任': '', '麒麟': '', '小老鼠': '' };
  var html = '';
  chars.forEach(function(char) {
    var val = favorability[char] || 0;
    var pct = Math.max(0, Math.min(100, ((val + 10) / 30) * 100));
    html += '<div class="fav-row">' +
      '<span class="fav-name">' + (icons[char]||'') + ' ' + char + '</span>' +
      '<div class="fav-bar"><div class="fav-fill" style="width:' + pct + '%"></div></div>' +
      '<span class="fav-value">' + val + ' ' + getFavLabel(val) + '</span>' +
      '</div>';
  });
  container.innerHTML = html;
}

function renderStatsUI(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var statsDef = [
    { key: 'de', label: '德', desc: '品德' },
    { key: 'zhi', label: '智', desc: '学识' },
    { key: 'ti', label: '体', desc: '体能' },
    { key: 'mei', label: '美', desc: '审美' }
  ];
  var html = '';
  statsDef.forEach(function(s) {
    var val = stats[s.key] || 0;
    var pct = Math.max(0, Math.min(100, (val / 25) * 100));
    html += '<div class="stat-row">' +
      '<span class="stat-label">' + s.label + '</span>' +
      '<div class="stat-bar"><div class="stat-fill" style="width:' + pct + '%"></div></div>' +
      '<span class="stat-value">' + val + '</span>' +
      '<span class="stat-desc">' + getStatLabel(val) + '</span>' +
      '</div>';
  });
  container.innerHTML = html;
}

function updateStatsUI() {
  renderFavorabilityUI('growth-fav-display');
  renderStatsUI('growth-stats-display');
}

function saveGameData() {
  safeStorage.setItem('cz_favorability', JSON.stringify(favorability));
  safeStorage.setItem('cz_stats', JSON.stringify(stats));
}

function loadGameData() {
  var f = safeStorage.getItem('cz_favorability');
  var s = safeStorage.getItem('cz_stats');
  if (f) favorability = JSON.parse(f);
  if (s) stats = JSON.parse(s);
}

function resetAllStats() {
  favorability = { '陈屿': 0, '林小满': 0, '班主任': 0, '麒麟': 0, '小老鼠': 0 };
  stats = { de: 10, zhi: 10, ti: 10, mei: 10 };
  updateStatsUI();
  saveGameData();
  showToast('数值已重置');
}

function renderGrowthUI() {
  renderFavorabilityUI('growth-fav-display');
  renderStatsUI('growth-stats-display');
}

function openGrowth() {
  renderGrowthUI();
  document.getElementById('growth-mask').classList.add('show');
}

function closeGrowth() {
  document.getElementById('growth-mask').classList.remove('show');
}

function initStatsSystem() {
  // 初始化时不显示面板，由用户点击成长按钮打开
  renderGrowthUI();
}

// ============================================================
// 【登录系统】
// ============================================================
function initLogin() {
  var overlay = document.getElementById('login-overlay');
  var panel = document.getElementById('login-panel');
  var accountInput = document.getElementById('login-account');
  var passwordInput = document.getElementById('login-password');
  var errorText = document.getElementById('login-error');
  var loginBtn = document.getElementById('login-btn');
  if (!overlay || !accountInput || !passwordInput || !loginBtn) return;

  // 检查是否已登录
  if (safeStorage.getItem('logged_user')) {
    overlay.style.display = 'none';
    return;
  }

  function showLoginError(msg) {
    if (errorText) {
      errorText.textContent = msg || '账号或密码错误，请重试';
      errorText.classList.add('show');
    }
    if (panel) {
      panel.classList.remove('shake');
      void panel.offsetWidth;
      panel.classList.add('shake');
      setTimeout(function() { panel.classList.remove('shake'); }, 450);
    }
  }

  function showForgotPassword(account) {
    var msg = '账号 "' + account + '" 已因连续输错 ' + CONFIG.MAX_LOGIN_ATTEMPTS + ' 次密码被锁定。\n\n' +
              '如需重置密码，请联系管理员：\n' +
              '📱 13857113238\n\n' +
              '点击「确定」复制手机号，点击「取消」关闭';
    var confirmResult = confirm(msg);
    if (confirmResult) {
      copyToClipboard('13857113238');
      alert('📱 手机号已复制，请去联系管理员重置密码');
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(function() {});
    } else {
      var input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
  }

  async function doLogin() {
    var acc = accountInput.value.trim();
    var pwd = passwordInput.value.trim();
    if (!acc || !pwd) { showLoginError('请输入账号和密码'); return; }

    // 查找用户
    var user = null;
    for (var i = 0; i < ACCOUNT_POOL.length; i++) {
      if (ACCOUNT_POOL[i].account === acc) {
        user = ACCOUNT_POOL[i];
        break;
      }
    }

    if (!user) {
      showLoginError('账号不存在');
      return;
    }

    // 计算密码哈希（异常不再静默，直接提示具体原因）
    var hashedInput;
    try {
      hashedInput = await sha256(pwd + CONFIG.SALT);
    } catch (e) {
      console.error('密码哈希计算失败:', e);
      showLoginError('安全环境异常，请改用 Chrome/Edge 打开');
      return;
    }

    if (user.passwordHash === hashedInput) {
      // 登录成功 → 重置失败计数
      user.failCount = 0;
      safeStorage.setItem('logged_user', JSON.stringify({ account: acc, time: Date.now() }));
      if (errorText) errorText.classList.remove('show');
      overlay.classList.add('fade-out');
      setTimeout(function() { overlay.style.display = 'none'; }, 600);
      // 播放BGM（用户点击触发，绕过浏览器限制）
      var bgm = document.getElementById('bgm');
      if (bgm) {
        bgm.volume = 0.5;
        bgm.play().catch(function() {});
      }
      showToast('欢迎回来，' + acc);
    } else {
      // 登录失败 → 增加失败计数
      user.failCount = (user.failCount || 0) + 1;
      var remaining = CONFIG.MAX_LOGIN_ATTEMPTS - user.failCount;
      if (user.failCount >= CONFIG.MAX_LOGIN_ATTEMPTS) {
        showLoginError('账号已锁定，请联系管理员');
        setTimeout(function() { showForgotPassword(acc); }, 300);
      } else {
        showLoginError('密码错误（剩余 ' + remaining + ' 次机会）');
      }
    }
  }

  loginBtn.addEventListener('click', doLogin);
  accountInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') passwordInput.focus();
  });
  passwordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doLogin();
  });
}

function logout() {
  safeStorage.removeItem('logged_user');
  // ===== 清除好感度与成长系统数据 =====
  safeStorage.removeItem('cz_favorability');
  safeStorage.removeItem('cz_stats');
  favorability = { '陈屿': 0, '林小满': 0, '班主任': 0, '麒麟': 0, '小老鼠': 0 };
  stats = { de: 10, zhi: 10, ti: 10, mei: 10 };
  var overlay = document.getElementById('login-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    overlay.classList.remove('fade-out');
  }
  var accInput = document.getElementById('login-account');
  var pwdInput = document.getElementById('login-password');
  var errText = document.getElementById('login-error');
  if (accInput) accInput.value = '';
  if (pwdInput) pwdInput.value = '';
  if (errText) errText.classList.remove('show');
  showPage('pg-home');
  showToast('已退出登录');
}
// ============================================================
// 【剧情数据】
// ============================================================

// ============================================================
// 【剧情数据加载】
// ============================================================
let STORY_DATA = [];

// ===== 内置剧情数据（fetch 不可用时兜底，story.json 优先） =====
const STORY_EMBEDDED = [
  {
    "id": "ch1_s1",
    "name": "九月·初来乍到 - 开学日·走廊",
    "lines": [
      {
        "type": "narration",
        "text": "九月的晨风还带着夏末的余温，你拖着行李箱走进教学楼，轮子在磨石地板上发出细碎的声响。走廊里满是陌生的面孔，家长们的叮嘱、新生的喧闹交织成一片嘈杂的网。你低着头往前走，余光瞥见墙上贴满了优秀学生的照片和成绩榜，那些名字像星星一样悬在头顶，让你不自觉地屏住了呼吸。"
      },
      {
        "type": "narration",
        "text": "走到走廊尽头时，你注意到一扇半开的窗户。窗外站着一个穿白衬衫的少年，正低头看着手里的书，晨光从他身后漫进来，在他发梢镀上一层浅金色的边。你不由自主地停下脚步，目光落在他微微垂下的睫毛上。他似乎察觉到了什么，转过头来——"
      },
      {
        "type": "narration",
        "text": "四目相对。他的眼睛很干净，像初秋的天空，没有多余的情绪。他看了你一眼，没有说话，又转回去继续看书，仿佛刚才的对视只是一阵偶然掠过的风。"
      },
      {
        "type": "narration",
        "text": "你的心跳漏了一拍。"
      },
      {
        "type": "choice",
        "prompt": "面对这个神秘的转学生，你决定……",
        "options": [
          {
            "text": "鼓起勇气，轻声说一句\"你好\"",
            "nextScene": 1,
            "fav": {
              "陈屿": 3
            },
            "stat": {
              "de": 1
            }
          },
          {
            "text": "默默收回目光，继续往前走",
            "nextScene": 1,
            "stat": {
              "zhi": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch1_s2",
    "name": "九月·初来乍到 - 教室·座位",
    "lines": [
      {
        "type": "narration",
        "text": "班主任把你安排在靠窗的第三排。同桌是个短发男生，刚坐下就转过头来，眼睛亮得像装了弹簧：\"嗨！我叫林骁，以后请多关照！\"他说话时带着一种天然的亲和力，让你紧绷的肩膀稍微松了一些。"
      },
      {
        "type": "dialogue",
        "speaker": "林骁",
        "text": "你知道吗？我们学校有个传说。"
      },
      {
        "type": "narration",
        "text": "他压低声音，神秘兮兮地说。你下意识看向窗外，操场对面有一栋灰砖老楼，三楼有一扇窗在阳光下泛着微光。\"琴房楼，三楼最左边那间，有个学长钢琴弹得特别好。但听说他几乎不跟人说话，像……像住在另一个世界的人。\""
      },
      {
        "type": "narration",
        "text": "你望着那扇窗，忽然想起走廊尽头那个白衬衫的背影。"
      },
      {
        "type": "choice",
        "prompt": "你对林骁的话产生了兴趣，决定……",
        "options": [
          {
            "text": "追问：\"那个学长……叫什么名字？\"",
            "nextScene": 2,
            "fav": {
              "陈屿": 2
            }
          },
          {
            "text": "笑着转移话题：\"那食堂哪个窗口最好吃？\"",
            "nextScene": 2,
            "stat": {
              "zhi": 1,
              "de": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch1_s3",
    "name": "九月·初来乍到 - 早自习·朗读",
    "lines": [
      {
        "type": "narration",
        "text": "早自习的铃声像一把钝刀，缓慢地切开清晨的薄雾。你翻开语文课本，全班开始齐声朗读。阳光从窗户斜斜地照进来，粉笔灰在光柱里缓缓飘浮，像一场无声的雪。"
      },
      {
        "type": "choice",
        "prompt": "早自习的时间，你选择……",
        "options": [
          {
            "text": "深吸一口气，把声音放进集体的河流里",
            "nextScene": 3,
            "stat": {
              "de": 2
            },
            "requireStat": {
              "de": 20
            }
          },
          {
            "text": "目光悄悄滑向窗外，看一只麻雀跳上栏杆",
            "nextScene": 3,
            "stat": {
              "zhi": 1
            }
          },
          {
            "text": "任由思绪飘远，盯着光柱里的粉笔灰发呆",
            "nextScene": 3
          }
        ]
      }
    ]
  },
  {
    "id": "ch1_s4",
    "name": "九月·初来乍到 - 体育课·跑步",
    "lines": [
      {
        "type": "narration",
        "text": "哨声尖锐地划破空气，同学们像被风吹散的蒲公英，四散跑开。你咬紧牙关跟上队伍，塑胶跑道在阳光下散发着微微的橡胶味。"
      },
      {
        "type": "choice",
        "prompt": "跑步过程中，你决定……",
        "options": [
          {
            "text": "咬紧后槽牙，把步子迈得再大一点",
            "nextScene": 4,
            "stat": {
              "ti": 2
            },
            "requireStat": {
              "ti": 18
            }
          },
          {
            "text": "放慢速度，允许自己落在队伍后面",
            "nextScene": 4,
            "stat": {
              "ti": -1
            }
          },
          {
            "text": "假装系鞋带，蹲在跑道边喘气",
            "nextScene": 4,
            "stat": {
              "de": -1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch1_s5",
    "name": "九月·初来乍到 - 傍晚·琴声",
    "lines": [
      {
        "type": "narration",
        "text": "夕阳把天空染成一片柔软的橘红，你独自走在操场上，影子被拉得很长。远处琴房楼传来钢琴声，断断续续，像一句没说完的话。"
      },
      {
        "type": "dialogue",
        "speaker": "陈屿",
        "text": {
          "-5": "（琴房窗口是黑的。他应该已经走了。你站在原地，忽然觉得傍晚的风有点凉。）",
          "5": "（琴声悠扬，你听不清曲子，但能感觉到某种情绪在音符间起伏，像隔着毛玻璃看一场雨。）",
          "15": "（那旋律忽然顿了一下，仿佛弹琴的人从窗外瞥见了你。停顿只有一瞬，琴声又继续流淌，却比刚才温柔了几分。）"
        }
      },
      {
        "type": "choice",
        "prompt": "面对琴房传来的琴声，你决定……",
        "options": [
          {
            "text": "站在原地，把这首没弹完的曲子听完",
            "nextScene": 5,
            "fav": {
              "陈屿": 2
            }
          },
          {
            "text": "转身离开，把琴声留在身后",
            "nextScene": 5
          }
        ]
      }
    ]
  },
  {
    "id": "ch2_s1",
    "name": "十月·成长 - 黑板报·色彩",
    "lines": [
      {
        "type": "narration",
        "text": "十月的夕阳总是带着几分慵懒，橘黄色的余晖透过玻璃窗斜斜地洒进教室，空气里漂浮着细小的粉笔灰尘。班主任要求各班出国庆主题的黑板报，你被同桌半推半就地拉上了讲台。站在宽大的黑板前，你捏着那根白色的粉笔，指尖微微发凉。黑板像是一片等待开垦的荒原，而你，是那个握着画笔的造梦者。"
      },
      {
        "type": "choice",
        "prompt": "面对黑板，你决定……",
        "options": [
          {
            "text": "大胆配色，任由指尖在黑板上跳跃",
            "nextScene": 6,
            "stat": {
              "mei": 2
            },
            "requireStat": {
              "mei": 18
            }
          },
          {
            "text": "模仿参考图，稳妥起见一笔一划描摹",
            "nextScene": 6,
            "stat": {
              "mei": 1
            }
          },
          {
            "text": "随便画画，心不在焉地涂几个气球和几面红旗",
            "nextScene": 6
          }
        ]
      }
    ]
  },
  {
    "id": "ch2_s2",
    "name": "十月·成长 - 自习室·解题",
    "lines": [
      {
        "type": "narration",
        "text": "晚自习的自习室安静得仿佛与世隔绝，只有头顶的白炽灯散发着微弱的嗡嗡声，以及四周此起彼伏的翻书和写字声。你面前摊着一道数学压轴题，草稿纸已经画满了乱七八糟的辅助线，思绪却像是一团乱麻。窗外的秋风偶尔拍打玻璃，你盯着书本，感到一种无形的压迫感。"
      },
      {
        "type": "choice",
        "prompt": "面对这道难题，你决定……",
        "options": [
          {
            "text": "继续钻研，把外界声音全部屏蔽",
            "nextScene": 7,
            "stat": {
              "zhi": 2
            },
            "requireStat": {
              "zhi": 20
            }
          },
          {
            "text": "去问同学，轻轻戳了戳前排同学的肩膀",
            "nextScene": 7,
            "stat": {
              "zhi": 1,
              "de": 1
            }
          },
          {
            "text": "放弃，叹了口气把练习册塞进抽屉",
            "nextScene": 7
          }
        ]
      }
    ]
  },
  {
    "id": "ch2_s3",
    "name": "十月·成长 - 琴房·偶遇",
    "lines": [
      {
        "type": "narration",
        "text": "听说陈屿每天傍晚都会在这栋琴房楼里练琴。你背着书包，鬼使神差地走到了这里。走廊里弥漫着淡淡的木质香气，某扇门后正流淌出断断续续的琴声。你的心跳不由自主地加快，脚步在门前徘徊，不知道是该勇敢一点，还是该悄悄退场。"
      },
      {
        "type": "choice",
        "prompt": "在琴房门口，你决定……",
        "options": [
          {
            "text": "敲门进去",
            "nextScene": 8,
            "fav": {
              "陈屿": 1
            }
          },
          {
            "text": "在门口听一会儿",
            "nextScene": 8,
            "fav": {
              "陈屿": 1
            }
          },
          {
            "text": "离开，转身顺着楼梯走下去",
            "nextScene": 8
          }
        ]
      }
    ]
  },
  {
    "id": "ch2_s4",
    "name": "十月·成长 - 运动会·接力",
    "lines": [
      {
        "type": "narration",
        "text": "秋季运动会的操场上人声鼎沸，红色的塑胶跑道在阳光下散发着橡胶的气味。你被同桌硬拉来凑数跑接力赛。站在起跑线上，听着看台上震耳欲聋的加油声，你感觉自己的手心全是汗。接力棒被塞进你手里的那一刻，沉甸甸的，像是握住了全班的希望。"
      },
      {
        "type": "choice",
        "prompt": "接力赛中，你决定……",
        "options": [
          {
            "text": "全力冲刺，像离弦的箭一样冲出去",
            "nextScene": 9,
            "stat": {
              "ti": 2
            },
            "requireStat": {
              "ti": 20
            }
          },
          {
            "text": "稳扎稳打，保持自己的节奏",
            "nextScene": 9,
            "stat": {
              "ti": 1
            }
          },
          {
            "text": "不想跑，假装肚子疼把接力棒塞给替补同学",
            "nextScene": 9,
            "stat": {
              "ti": -1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch2_s5",
    "name": "十月·成长 - 雨天·伞",
    "lines": [
      {
        "type": "narration",
        "text": "放学时，天空毫无征兆地泼下秋雨。气温骤降，冷风夹杂着雨丝打在脸上，生疼。你站在公交站的雨棚下，看着灰蒙蒙的天空，不知道这场雨要下到什么时候。就在这时，一个熟悉的身影出现在雨幕中。"
      },
      {
        "type": "dialogue",
        "speaker": "陈屿",
        "text": {
          "-5": "（他从头到尾都没有看你，径直走进了雨里。你觉得自己可能做错了什么。）",
          "5": "（他从旁边走过，犹豫了一下把伞递给你，说\"明天还我就行\"，然后走进了雨里。）",
          "15": "（一把黑色的伞递到你面前，陈屿站在雨里说\"一起走吧\"。你们并肩走在雨中，谁都没有说话，但雨声很好听。）"
        }
      },
      {
        "type": "choice",
        "prompt": "面对陈屿，你决定……",
        "options": [
          {
            "text": "等雨停，看着雨滴在水洼里砸出一个个泡泡",
            "nextScene": 10
          },
          {
            "text": "跑回家，把书包顶在头上扎进雨里",
            "nextScene": 10,
            "stat": {
              "ti": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch3_s1",
    "name": "十一月·琴声 - 琴房·对话",
    "lines": [
      {
        "type": "narration",
        "text": "你再次来到琴房，这一次，你没有犹豫。推开门，陈屿正坐在琴凳上，指尖在黑白键上流淌。他没有赶你走，而是继续弹奏。那是德彪西的《月光》，琴声如水，你仿佛看见银白色的月光倾泻在平静的湖面上，泛起层层涟漪。"
      },
      {
        "type": "dialogue",
        "speaker": "陈屿",
        "text": {
          "-5": "（一曲终了，他没有回头，只是淡淡地说）好听吗？……瞎写的，不好听。",
          "5": "（一曲终了，他转过头，嘴角勾起一抹淡淡的笑意）好听吗？……这是我写的。",
          "15": "（一曲终了，他转过头，眼底的温柔几乎要溢出来）好听吗？……这是我写的，只给你一个人听的。"
        }
      },
      {
        "type": "choice",
        "prompt": "面对陈屿的琴声，你决定……",
        "options": [
          {
            "text": "认真地说曲子很美",
            "nextScene": 11,
            "fav": {
              "陈屿": 5
            }
          },
          {
            "text": "说想学钢琴",
            "nextScene": 11,
            "fav": {
              "陈屿": 3
            }
          },
          {
            "text": "转移话题，聊起最近的考试",
            "nextScene": 11
          }
        ]
      }
    ]
  },
  {
    "id": "ch3_s2",
    "name": "十一月·琴声 - 图书馆·书",
    "lines": [
      {
        "type": "narration",
        "text": "午后的图书馆弥漫着旧纸张特有的霉味和阳光晒过的温暖。你在书架间穿梭，偶然抽出一本泛黄的《钢琴演奏基础》。翻开书页，上面密密麻麻地写满了笔记，字迹清秀挺拔。你翻到扉页，上面赫然写着\"陈屿\"两个字。"
      },
      {
        "type": "choice",
        "prompt": "面对这本属于陈屿的书，你决定……",
        "options": [
          {
            "text": "继续阅读，如获至宝",
            "nextScene": 12,
            "stat": {
              "zhi": 2
            },
            "requireStat": {
              "zhi": 15
            }
          },
          {
            "text": "把书放回原位，觉得偷看别人笔记不太好",
            "nextScene": 12,
            "stat": {
              "de": 1
            }
          },
          {
            "text": "在书上写一句鼓励的话",
            "nextScene": 12,
            "fav": {
              "陈屿": 2
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch3_s3",
    "name": "十一月·琴声 - 天台·星空",
    "lines": [
      {
        "type": "narration",
        "text": "晚自习后，你走到天台上透气。夜风微凉，吹散了心头的烦闷。天台上已经有人了——陈屿靠在生锈的栏杆上，正抬头看着夜空。城市的灯光太亮，星星寥寥无几，但他看得很认真。听见脚步声，他回过头，轻声问：\"你也来看星星？\""
      },
      {
        "type": "dialogue",
        "speaker": "陈屿",
        "text": {
          "-5": "（他看了你一眼，眼神平静如水）嗯，你也来看星星？……随便看看吧，没什么好看的。",
          "5": "（他回过头，嘴角带着一丝笑意）你也来看星星？……坐一会儿吧，这里的夜景还不错。",
          "15": "（他转过身，眼底映着星光，温柔地看着你）你也来看星星？……我一直在等你上来。"
        }
      },
      {
        "type": "choice",
        "prompt": "在天台上，你决定……",
        "options": [
          {
            "text": "说\"好\"，把这句话当成你们之间的秘密约定",
            "nextScene": 13,
            "fav": {
              "陈屿": 5
            }
          },
          {
            "text": "说\"你弹得很好\"，把藏在心里很久的赞美说出来",
            "nextScene": 13,
            "fav": {
              "陈屿": 3
            }
          },
          {
            "text": "默默离开，挥了挥手没有说话",
            "nextScene": 13
          }
        ]
      }
    ]
  },
  {
    "id": "ch3_s4",
    "name": "十一月·琴声 - 琴房·冲突",
    "lines": [
      {
        "type": "narration",
        "text": "你发现陈屿最近总是独来独往，连琴声也变得焦躁不安。你实在放心不下，决定去找他。推开琴房的门，空气仿佛凝固了。"
      },
      {
        "type": "dialogue",
        "speaker": "陈屿",
        "text": {
          "-5": "（他脸色很差，看到你进来，冷冷地说）我不想弹琴。你走吧。",
          "5": "（他弹错了音，揉着眉心说\"没事\"。你安静地陪着他，他最后轻声说了句\"谢谢\"。",
          "15": "（钢琴盖被摔得砰响，他红着眼眶让你走，但最终还是妥协了）你能……陪我坐一会儿吗？"
        }
      },
      {
        "type": "choice",
        "prompt": "面对情绪失控的陈屿，你决定……",
        "options": [
          {
            "text": "陪在他身边，安静地坐着",
            "nextScene": 14,
            "fav": {
              "陈屿": 3
            }
          },
          {
            "text": "问他发生了什么，试图分担他的烦恼",
            "nextScene": 14,
            "fav": {
              "陈屿": 2
            }
          },
          {
            "text": "悄悄离开，不想打扰他",
            "nextScene": 14
          }
        ]
      }
    ]
  },
  {
    "id": "ch4_s1",
    "name": "十二月·抉择 - 期末复习·压力",
    "lines": [
      {
        "type": "narration",
        "text": "十二月的风像一把钝刀，刮在教室的玻璃上，发出沉闷的声响。黑板右上角的倒计时数字被擦去又写上，红色的粉笔灰落下，像是一场无声的雪。教室里安静得可怕，只有笔尖摩擦纸张的沙沙声和偶尔翻动书页的脆响。你翻开那本已经被翻得卷边的复习计划表，密密麻麻的科目像是一张织得太紧的网，将你牢牢困在原地。"
      },
      {
        "type": "choice",
        "prompt": "面对繁重的复习压力，你决定……",
        "options": [
          {
            "text": "制定详细复习计划",
            "nextScene": 15,
            "stat": {
              "zhi": 2
            }
          },
          {
            "text": "临时抱佛脚，突击重点科目",
            "nextScene": 15,
            "stat": {
              "zhi": 1
            }
          },
          {
            "text": "焦虑失眠，什么都看不进去",
            "nextScene": 15,
            "stat": {
              "de": -1,
              "zhi": -1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ch4_s2",
    "name": "十二月·抉择 - 琴房·告别前奏",
    "lines": [
      {
        "type": "narration",
        "text": "走廊尽头的琴房亮着一盏昏黄的灯，像是一只不肯睡去的眼睛。你推开门，熟悉的松香与旧木头混合的气息扑面而来。陈屿坐在琴凳上，脊背挺得笔直，但指尖流淌出的音符却带着几分不易察觉的滞涩。"
      },
      {
        "type": "dialogue",
        "speaker": "陈屿",
        "text": {
          "-5": "（看到你进来，他只是礼貌地点了点头，便继续低头弹琴。你们之间恢复了那种礼貌而疏离的沉默。）",
          "5": "（他最近总是心不在焉，琴谱上写满了密密麻麻的笔记。你问他怎么了，他只是淡淡地说\"没什么\"，但微微起的眉头出卖了他。）",
          "15": "（他轻声告诉你，父母打算让他寒假去音乐学院附中。他说：\"我爸妈觉得我弹得差不多了。\"你的心脏猛地一紧。他转过头，目光落在你脸上，停留了很久，才轻声说：\"看情况。\"）"
        }
      },
      {
        "type": "choice",
        "prompt": "面对陈屿的异常，你决定……",
        "options": [
          {
            "text": "追问他的事",
            "nextScene": 16,
            "fav": {
              "陈屿": 3
            }
          },
          {
            "text": "陪他弹琴，不说话",
            "nextScene": 16,
            "fav": {
              "陈屿": 2
            }
          },
          {
            "text": "不说话，默默离开",
            "nextScene": 16
          }
        ]
      }
    ]
  },
  {
    "id": "ch4_s3",
    "name": "十二月·抉择 - 期末考试",
    "lines": [
      {
        "type": "narration",
        "text": "试卷发下来的那一刻，整个世界仿佛被按下了静音键。你坐在考场里，看着眼前密密麻麻的题目，脑海里却不受控制地闪过这一学期的碎片：早自习时窗外透进来的第一缕晨光，体育课上耳边呼啸的风声，黑板报上未干的颜料，自习室里安静的呼吸，还有琴房里那首总是弹不完的曲子。"
      },
      {
        "type": "choice",
        "prompt": "考试过程中，你感到……",
        "options": [
          {
            "text": "那些曾经让你头疼的公式和定理，此刻竟变得清晰起来",
            "nextScene": 17,
            "stat": {
              "zhi": 2
            },
            "requireStat": {
              "zhi": 18
            }
          },
          {
            "text": "有些题目得心应手，有些却让你眉头紧锁",
            "nextScene": 17,
            "stat": {
              "zhi": 1
            }
          },
          {
            "text": "试卷上的字句像是在嘲笑你的无知",
            "nextScene": 17
          }
        ]
      }
    ]
  },
  {
    "id": "ch4_s4",
    "name": "十二月·抉择 - 学期末·选择",
    "lines": [
      {
        "type": "narration",
        "text": "一月的风比十二月更冷，却也吹散了积压已久的阴霾。学期即将画上句号，空气中弥漫着一种即将分别的淡淡惆怅。你站在学校的天台上，看着楼下如蚂蚁般移动的人群，心里空落落的。"
      },
      {
        "type": "dialogue",
        "speaker": "陈屿",
        "text": {
          "-5": "（学期就这样结束了，你和陈屿几乎没有说过几句话。你偶尔会想起琴房里传来的钢琴声，但也仅仅是想起而已。）",
          "5": "（他在走廊上遇见你，停下脚步，对你笑了笑：\"这学期过得还不错。\"你轻声回应：\"嗯。\"他也说：\"嗯。\"然后各自走向不同的方向。）",
          "15": "（陈屿在傍晚时分找到了你。夕阳将他的影子拉得很长，他看着你，眼里有细碎的光：\"你下学期……还会来听我弹琴吗？\"你用力地点头：\"会。\"他笑了，那是你见过的最温柔的笑：\"那说好了。\"）"
        }
      },
      {
        "type": "narration",
        "text": "学期结束了。所有的选择、所有的相遇、所有的离别，都在这一个冬天画上了句号。你翻开日记本，写下了这个学期的最后一句话……"
      },
      {
        "type": "choice",
        "prompt": "学期末，你选择……",
        "options": [
          {
            "text": "合上日记本，走向琴房的方向",
            "nextScene": 18
          }
        ]
      }
    ]
  },
  {
    "id": "ch5_s1",
    "name": "一月·终章 - 结局选择",
    "lines": [
      {
        "type": "narration",
        "text": "你翻开日记本，看着这一学期写下的零零碎碎，忽然不知道该从哪里说起。那些在琴房与教室之间穿梭的时光，那些在德、智、体、美之间寻找平衡的日子，都成了你生命里最完整的夏天。"
      },
      {
        "type": "narration",
        "text": "学期还没有结束，但你已经准备好了迎接下一个。你合上日记本，做出了最后的决定……"
      },
      {
        "type": "choice",
        "prompt": "请选择你的结局（根据你的属性值选择对应结局）",
        "options": [
          {
            "text": "【结局1·月光奏鸣曲】",
            "nextScene": 19
          },
          {
            "text": "【结局2·平行线】",
            "nextScene": 20
          },
          {
            "text": "【结局3·遗憾的缺口】",
            "nextScene": 21
          },
          {
            "text": "【结局4·偏科的天才】",
            "nextScene": 22
          },
          {
            "text": "【结局5·完美的答卷】",
            "nextScene": 23
          },
          {
            "text": "【结局6·平凡的我们】",
            "nextScene": 24
          }
        ]
      }
    ]
  },
  {
    "id": "ch5_end1",
    "name": "一月·终章 - 结局1·月光奏鸣曲",
    "lines": [
      {
        "type": "narration",
        "text": "学期结束的那天傍晚，你独自走到琴房楼下。琴房的灯还亮着，像夜色里的一只眼。你看见陈屿站在窗边，目光似乎穿过黑暗落在你身上。当你想要走近，他却低下头继续弹琴。"
      },
      {
        "type": "narration",
        "text": "琴声隔着空旷的操场飘来，断断续续，听不清曲调，却听得见心跳。那是他为你写的曲子——《青春纪事》。月光如水，倾泻在琴键上，也倾泻在你微红的眼眶里。那些未曾说出口的话，那些在琴房里度过的沉默时光，全都融化在这首曲子里。"
      },
      {
        "type": "narration",
        "text": "这个学期还没有结束，但你知道，有些东西已经不一样了。"
      },
      {
        "type": "narration",
        "text": "—— 结局1·月光奏鸣曲 · 完 ——"
      }
    ]
  },
  {
    "id": "ch5_end2",
    "name": "一月·终章 - 结局2·平行线",
    "lines": [
      {
        "type": "narration",
        "text": "学期结束了。你站在走廊上，看着远处琴房的窗口——一片漆黑。他早就走了，连一丝痕迹都没留下。你站在楼下吹了会儿冷风，觉得这很正常，毕竟你们本来就是两条平行线。"
      },
      {
        "type": "narration",
        "text": "但风里似乎还残留着琴声的余韵，你忽然觉得，这个学期好像少了什么。那些擦肩而过的瞬间，那些欲言又止的沉默，都像是指缝间溜走的沙，怎么也抓不住。"
      },
      {
        "type": "narration",
        "text": "平行线永远不会相交，但至少在某个瞬间，它们曾经如此接近。"
      },
      {
        "type": "narration",
        "text": "—— 结局2·平行线 · 完 ——"
      }
    ]
  },
  {
    "id": "ch5_end3",
    "name": "一月·终章 - 结局3·遗憾的缺口",
    "lines": [
      {
        "type": "narration",
        "text": "你翻开日记本，看着这一学期写下的零零碎碎，忽然不知道该从哪里说起。有些事你没能做好，有些话你没能说出口。你站在路灯下，觉得这个学期好像才刚刚开始，又好像已经错过了什么。"
      },
      {
        "type": "narration",
        "text": "路灯把影子拉得很长，你伸出手，好像能抓住什么，但手里只有空气。那些未完成的作业，那些没来得及说出口的抱歉和感谢，都成了这个冬天里最冷的遗憾。"
      },
      {
        "type": "narration",
        "text": "但你知道，下一个学期，可以从头来过。"
      },
      {
        "type": "narration",
        "text": "—— 结局3·遗憾的缺口 · 完 ——"
      }
    ]
  },
  {
    "id": "ch5_end4",
    "name": "一月·终章 - 结局4·偏科的天才",
    "lines": [
      {
        "type": "narration",
        "text": "在某一个方向上，你已经比大多数人都走得远了。你在某一个方向上狂奔，把大多数人都甩在了身后。这种极致的专注让你感到踏实，但偶尔回望空荡荡的身后，也会有一丝难以名状的不安。"
      },
      {
        "type": "narration",
        "text": "你站在高处，风吹过来，你觉得孤独，但也觉得自由。那些在深夜里独自点亮的灯，那些在无人处流下的汗，都成了你身上最坚硬的铠甲。"
      },
      {
        "type": "narration",
        "text": "也许有一天，你会停下来，等一等那些落在后面的人。"
      },
      {
        "type": "narration",
        "text": "—— 结局4·偏科的天才 · 完 ——"
      }
    ]
  },
  {
    "id": "ch5_end5",
    "name": "一月·终章 - 结局5·完美的答卷",
    "lines": [
      {
        "type": "narration",
        "text": "你站在走廊上，忽然意识到，学期虽未结束，但那个九月里在走廊上不知所措的少年，已经留在了身后。风穿过窗，现在的你，步履轻盈。"
      },
      {
        "type": "narration",
        "text": "你回头看了看这个学期走过的路——每一段都是你自己的。你笑了，推开窗，阳光洒了一脸。那些在德、智、体、美之间寻找平衡的日子，那些在琴房与教室之间穿梭的时光，都成了你生命里最完整的夏天。"
      },
      {
        "type": "narration",
        "text": "这个学期还没有结束，但你已经准备好了迎接下一个。"
      },
      {
        "type": "narration",
        "text": "—— 结局5·完美的答卷 · 完 ——"
      }
    ]
  },
  {
    "id": "ch5_end6",
    "name": "一月·终章 - 结局6·平凡的我们",
    "lines": [
      {
        "type": "narration",
        "text": "日子就这样不紧不慢地流过。没有惊天动地的逆袭，也没有无法挽回的遗憾。你合上日记本，窗外月光正好。这是一个普通的学期，也是独一无二的青春。"
      },
      {
        "type": "narration",
        "text": "你关上灯，躺在床上，听见远处隐约传来钢琴声。你笑了笑，睡着了。那些平淡的日常，那些微小的欢喜与失落，都成了记忆里最温暖的底色。"
      },
      {
        "type": "narration",
        "text": "明天又是新的一天。"
      },
      {
        "type": "narration",
        "text": "—— 结局6·平凡的我们 · 完 ——"
      }
    ]
  }
];

async function loadStoryData() {
  try {
    const response = await fetch('story.json');
    if (!response.ok) throw new Error('加载剧情数据失败');
    STORY_DATA = await response.json();
    return true;
  } catch (e) {
    // file:// 协议直接打开时 fetch 不可用，回退到内置剧情数据
    if (typeof STORY_EMBEDDED !== 'undefined' && STORY_EMBEDDED.length > 0) {
      STORY_DATA = STORY_EMBEDDED;
      console.info('fetch 不可用，已使用内置剧情数据');
      return true;
    }
    console.error('剧情数据加载失败:', e);
    showToast('剧情数据加载失败，请刷新重试');
    return false;
  }
}
;

// ============================================================
// 【成就数据】
// ============================================================
const ACHIEVEMENT_DATA = [
  { id: 'first_meet', title: '初次相遇', icon: '🌸', condition: '开始游戏' },
  { id: 'first_choice', title: '命运的抉择', icon: '🎯', condition: '做出第一个选择' },
  { id: 'chapter_1', title: '序章完结', icon: '📖', condition: '完成第一章' },
  { id: 'egg_hunter', title: '禁忌之语', icon: '🔥', condition: '触发隐藏彩蛋' }
];

// ============================================================
// ============================================================
// 【图鉴数据】
// ============================================================
const CODEX_DATA = [
  { id: 'lin', icon: '🌸', name: '林小满', desc: '高二三班，普通又有点冒失的女生。' },
  { id: 'chen', icon: '🎹', name: '陈屿', desc: '神秘转学生，总是带着淡淡的微笑。' },
  { id: 'teacher', icon: '👩‍🏫', name: '班主任', desc: '严厉但关心学生的中年女性。' },
  { id: 'school', icon: '🏫', name: '星海高中', desc: '故事发生的舞台，沿海城市的名校。' },
  { id: 'autumn', icon: '🍂', name: '九月', desc: '一切开始的季节。' },
  { id: 'secret', icon: '❓', name: '???', desc: '尚未解锁的神秘条目……' }
];

// 【渲染成就页面】
// ============================================================
function renderAch() {
  var list = document.getElementById('ach-list');
  if (!list) return;
  var achievements = safeParse('cz_achievements', {});
  var data = [
    { id: 'first_meet', title: '初次相遇', icon: '🌸', desc: '开始游戏，踏入学门' },
    { id: 'first_choice', title: '命运的抉择', icon: '🎯', desc: '做出第一个选择' },
    { id: 'chapter_1', title: '序章完结', icon: '📖', desc: '完成第一章' },
    { id: 'egg_hunter', title: '禁忌之语', icon: '🔥', desc: '触发隐藏彩蛋' }
  ];
  var html = '';
  data.forEach(function(item) {
    var unlocked = !!achievements[item.id];
    html += '<div class="ach-item ' + (unlocked ? 'on' : 'off') + '">' +
            '<span class="icon">' + (unlocked ? item.icon : '🔒') + '</span>' +
            '<div><b>' + item.title + '</b><br><small>' + item.desc + '</small></div>' +
            '</div>';
  });
  list.innerHTML = html;
}
// ============================================================
// 【页面切换】
// ============================================================
function showPage(pageId) {
  if (currentPage === 'pg-game' && pageId !== 'pg-game') saveSilent();
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  var target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
  }
  currentPage = pageId;
  var fsBtn = document.getElementById('fullscreen-btn-game');
  var musicBtn = document.getElementById('music-btn');
  if (pageId === 'pg-game') {
    if (musicBtn) musicBtn.classList.remove('hidden');
    startFullscreenTimer();
  } else {
    if (musicBtn) musicBtn.classList.add('hidden');
    clearFullscreenTimer();
    if (fsBtn) fsBtn.classList.add('hidden');
  }
  if (pageId === 'pg-slots') renderSlots(currentTab);
  if (pageId === 'pg-ach') renderAch();
}

// ============================================================
// 【设置页路由】
// ============================================================
var settingsFrom = 'pg-home';

function openSettings() {
  if (currentPage !== 'pg-settings' && currentPage !== 'pg-home') settingsFrom = currentPage;
  var mask = document.getElementById('settings-mask');
  if (mask) mask.classList.add('show');
  var fsBtn = document.getElementById('fullscreen-btn-game');
  var musicBtn = document.getElementById('music-btn');
  if (fsBtn) fsBtn.classList.add('hidden');
  if (musicBtn) musicBtn.classList.add('hidden');
  if (currentPage === 'pg-game') saveSilent();
}

function closeSettings() {
  var mask = document.getElementById('settings-mask');
  if (mask) mask.classList.remove('show');
  if (settingsFrom === 'pg-game') {
    var musicBtn = document.getElementById('music-btn');
    if (musicBtn) musicBtn.classList.remove('hidden');
  }
}

// ============================================================
// 【全屏】
// ============================================================
function openSlots() {
  renderSlots(currentTab);
  var mask = document.getElementById('slots-mask');
  if (mask) mask.classList.add('show');
}
function closeSlots() {
  var mask = document.getElementById('slots-mask');
  if (mask) mask.classList.remove('show');
}
function openAch() {
  renderAch();
  var mask = document.getElementById('ach-mask');
  if (mask) mask.classList.add('show');
}
function closeAch() {
  var mask = document.getElementById('ach-mask');
  if (mask) mask.classList.remove('show');
}

function startFullscreenTimer() {
  clearFullscreenTimer();
  var btn = document.getElementById('fullscreen-btn-game');
  if (btn) btn.classList.remove('hidden');
  fullscreenTimer = setTimeout(function() {
    if (btn) btn.classList.add('hidden');
  }, CONFIG.FULLSCREEN_TIMEOUT);
}

function clearFullscreenTimer() {
  if (fullscreenTimer) {
    clearTimeout(fullscreenTimer);
    fullscreenTimer = null;
  }
}

document.addEventListener('mousemove', function() {
  if (currentPage === 'pg-game') startFullscreenTimer();
});
document.addEventListener('touchstart', function() {
  if (currentPage === 'pg-game') startFullscreenTimer();
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(function() {});
  } else {
    document.exitFullscreen();
  }
}

function toggleMusic() {
  musicPlaying = !musicPlaying;
  var btn = document.getElementById('music-btn');
  if (btn) btn.textContent = musicPlaying ? '🔊' : '🔇';
  showToast(musicPlaying ? '音频已开启' : '音频已静音');
}

// ============================================================
// 【横屏提示】
// ============================================================
function checkOrientation() {
  var hint = document.getElementById('rotate-hint');
  if (!hint) return;
  if (window.innerHeight > window.innerWidth && !safeStorage.getItem('cz_hint_dismissed')) {
    hint.classList.add('show');
  } else {
    hint.classList.remove('show');
  }
}

function dismissRotateHint() {
  var hint = document.getElementById('rotate-hint');
  if (hint) hint.classList.remove('show');
  safeStorage.setItem('cz_hint_dismissed', '1');
}

window.addEventListener('resize', checkOrientation);
// ============================================================
// 【多媒体素材探测与加载】
// ============================================================
var mediaCache = {};

function detectMedia(fileName, type) {
  if (!fileName) return null;
  if (mediaCache[fileName]) return mediaCache[fileName];
  var exts = [];
  if (type === 'image') exts = ['.webp', '.jpg', '.jpeg', '.png', '.avif'];
  else if (type === 'audio') exts = ['.mp3', '.m4a', '.aac', '.ogg', '.wav', '.flac'];
  else if (type === 'video') exts = ['.mp4', '.webm', '.mov', '.avi'];
  else return null;
  mediaCache[fileName] = fileName + exts[0];
  return mediaCache[fileName];
}

function loadMediaForLine(line) {
  var wrap = document.getElementById('scene-image-wrap');
  if (!wrap) return;
  wrap.innerHTML = '';
  showLoadingIndicator(wrap);
  if (line.video) {
    tryVideoFormats(line.video, wrap);
    return;
  }
  if (line.img) {
    tryImageFormats(line.img, wrap);
    return;
  }
  if (line.sfx) {
    playAudio(line.sfx);
    hideLoadingIndicator(wrap);
    return;
  }
  // 当前行无任何多媒体素材
  debugMedia('[调试] 当前行无多媒体素材');
  hideLoadingIndicator(wrap);
}

function tryImageFormats(baseName, wrap) {
  var exts = ['.webp', '.jpg', '.jpeg', '.png', '.avif'];
  var index = 0;
  function next() {
    if (index >= exts.length) {
      hideLoadingIndicator(wrap);
      var fb = document.createElement('div');
      fb.className = 'scene-img-fallback';
      fb.textContent = baseName + ' 未加载';
      wrap.appendChild(fb);
      debugMedia('[调试] 素材加载失败：' + baseName + ' (所有格式均 404)');
      return;
    }
    var url = baseName + exts[index];
    var img = new Image();
    img.onload = function() {
      hideLoadingIndicator(wrap);
      wrap.innerHTML = '';
      img.style.maxWidth = '100%';
      img.style.maxHeight = '100%';
      img.style.objectFit = 'contain';
      wrap.appendChild(img);
      debugMedia('');
    };
    img.onerror = function() {
      index++;
      next();
    };
    img.src = url;
  }
  next();
}

function tryVideoFormats(baseName, wrap) {
  var exts = ['.mp4', '.webm', '.mov'];
  var index = 0;
  function next() {
    if (index >= exts.length) {
      hideLoadingIndicator(wrap);
      var fb = document.createElement('div');
      fb.className = 'scene-img-fallback';
      fb.textContent = baseName + ' 视频未加载';
      wrap.appendChild(fb);
      debugMedia('[调试] 素材加载失败：' + baseName + ' (所有格式均 404)');
      return;
    }
    var url = baseName + exts[index];
    var video = document.createElement('video');
    video.src = url;
    video.autoplay = true;
    video.muted = true;
    video.loop = false;
    video.playsInline = true;
    video.style.maxWidth = '100%';
    video.style.maxHeight = '100%';
    video.style.objectFit = 'contain';
    video.onloadeddata = function() {
      hideLoadingIndicator(wrap);
      wrap.innerHTML = '';
      wrap.appendChild(video);
      debugMedia('');
    };
    video.onerror = function() {
      index++;
      next();
    };
  }
  next();
}

function playAudio(baseName) {
  var exts = ['.mp3', '.m4a', '.aac', '.ogg', '.wav', '.flac'];
  var index = 0;
  function next() {
    if (index >= exts.length) {
      debugMedia('[调试] 素材加载失败：' + baseName + ' (所有格式均 404)');
      return;
    }
    var audio = new Audio();
    audio.src = baseName + exts[index];
    audio.volume = 0.5;
    audio.oncanplay = function() {
      audio.play().catch(function() {});
      debugMedia('');
    };
    audio.onerror = function() {
      index++;
      next();
    };
  }
  next();
}

// ===== 开发者模式调试上报 =====
function devModeEnabled() {
  return safeStorage.getItem('cz_dev_mode') === '1';
}

function debugMedia(msg) {
  var el = document.getElementById('debug-info');
  if (!el) return;
  if (!devModeEnabled()) {
    el.classList.remove('show');
    el.textContent = '';
    return;
  }
  if (msg) {
    el.textContent = msg;
    el.classList.add('show');
  } else {
    el.textContent = '';
    el.classList.remove('show');
  }
}

// ===== 开发者模式开关 =====
function applyDevMode(on) {
  var btn = document.getElementById('toggle-dev');
  if (btn) {
    btn.classList.toggle('active', on);
    btn.textContent = on ? '开启' : '关闭';
  }
  safeStorage.setItem('cz_dev_mode', on ? '1' : '0');
  if (!on) debugMedia('');
}

function toggleDevMode() {
  var on = !devModeEnabled();
  applyDevMode(on);
  showToast(on ? '开发者模式：开启' : '开发者模式：关闭');
}

function showLoadingIndicator(wrap) {
  var loading = wrap.querySelector('.loading-overlay');
  if (!loading) {
    loading = document.createElement('div');
    loading.className = 'loading-overlay';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    wrap.appendChild(loading);
  }
  loading.classList.add('show');
}

function hideLoadingIndicator(wrap) {
  var loading = wrap.querySelector('.loading-overlay');
  if (loading) loading.classList.remove('show');
}

function preloadNextLine() {
  var nextLine = STORY_DATA[currentScene] ? STORY_DATA[currentScene].lines[currentLine + 1] : null;
  if (!nextLine) return;
  if (nextLine.img) {
    var img = new Image();
    img.src = nextLine.img + '.jpg';
  }
  if (nextLine.video) {
    var video = document.createElement('video');
    video.preload = 'auto';
    video.src = nextLine.video + '.mp4';
  }
  if (nextLine.sfx) {
    var audio = new Audio();
    audio.preload = 'auto';
    audio.src = nextLine.sfx + '.mp3';
  }
}

// ============================================================
// 【游戏流程】
// ============================================================
function newGame() {
  currentScene = 0;
  currentLine = 0;
  showPage('pg-game');
  renderLine();
  showToast('开始新的篇章');
  unlockAchievement('first_meet');
}

function continueGame() {
  var data = safeStorage.getItem('cz_save_auto');
  if (data) {
    var parsed = JSON.parse(data);
    currentScene = parsed.scene || 0;
    currentLine = parsed.line || 0;
    showPage('pg-game');
    renderLine();
    showToast('已继续上次进度');
  } else {
    newGame();
  }
}
// ===== 动态文本解析：根据好感度数值返回对应台词 =====
function resolveDynamicText(text) {
  if (typeof text === 'string') return text;
  if (typeof text === 'object' && text !== null) {
    var thresholds = Object.keys(text).map(Number).sort(function(a, b) { return a - b; });
    // 使用陈屿的好感度进行分层对话匹配
    var currentFav = favorability['陈屿'] || 0;
    for (var i = thresholds.length - 1; i >= 0; i--) {
      if (currentFav >= thresholds[i]) {
        return text[thresholds[i]];
      }
    }
    return text[thresholds[0]];
  }
  return text;
}

function renderLine() {
  var scene = STORY_DATA[currentScene];
  var line = scene ? scene.lines[currentLine] : null;
  if (!scene || !line) {
    stopAuto(); stopSkip();
    unlockAchievement('chapter_1');
    showToast('—— 本章结束 ——');
    setTimeout(function() { showPage('pg-home'); }, 900);
    return;
  }

  var textEl = document.getElementById('dlg-text');
  var nameEl = document.getElementById('char-name');
  var iconEl = document.getElementById('char-icon');
  var choicesEl = document.getElementById('choices');
  if (!textEl || !nameEl || !iconEl || !choicesEl) return;

  choicesEl.classList.remove('show');
  choicesEl.innerHTML = '';

  loadMediaForLine(line);

  if (line.type === 'narration') {
    nameEl.textContent = '旁白';
    iconEl.textContent = '📖';
    typeText(textEl, resolveDynamicText(line.text));
  } else if (line.type === 'dialogue') {
    nameEl.textContent = line.speaker;
    iconEl.textContent = line.icon || '🧑';
    typeText(textEl, resolveDynamicText(line.text));
  } else if (line.type === 'choice') {
    stopAuto();
    nameEl.textContent = '选择';
    iconEl.textContent = '💭';
    textEl.textContent = line.prompt;
    line.options.forEach(function(opt, idx) {
      var btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.style.pointerEvents = 'auto';
      btn.style.position = 'relative';
      btn.style.zIndex = '20';

      // ===== 处理 requireFav（好感度门槛锁定） =====
      var isLocked = false;
      var lockReason = '';
      if (opt.requireFav) {
        for (var char in opt.requireFav) {
          var required = opt.requireFav[char];
          var current = favorability[char] || 0;
          if (current < required) {
            isLocked = true;
            lockReason = char + ' 好感度不足（需' + required + '，当前' + current + '）';
            break;
          }
        }
      }

      
      // ===== 处理 requireStat（属性门槛锁定） =====
      var isStatLocked = false;
      var statLockReason = '';
      if (opt.requireStat) {
        for (var statName in opt.requireStat) {
          var required = opt.requireStat[statName];
          var current = stats[statName] || 0;
          if (current < required) {
            isStatLocked = true;
            var label = { de: '德', zhi: '智', ti: '体', mei: '美' }[statName] || statName;
            statLockReason = label + '不足（需' + required + '，当前' + current + '）';
            break;
          }
        }
      }
      // ===== 综合锁定状态 =====
      var isOptionLocked = isLocked || isStatLocked;
      if (isOptionLocked) {
        lockReason = lockReason ? lockReason + ' / ' + statLockReason : statLockReason;
      }
// ===== 设置按钮文本 =====
      if (isOptionLocked) {
        btn.textContent = ' ' + opt.text + '（' + lockReason + '）';
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
        btn.style.filter = 'grayscale(0.8)';
      } else {
        btn.textContent = opt.text;
      }

      btn.addEventListener('click', function(e) {
        e.stopPropagation();

        // ===== 锁定选项不可点击 =====
        if (isOptionLocked && opt.hideIfLocked !== true) {
          showToast(' ' + lockReason);
          return;
        }
        if (isOptionLocked && opt.hideIfLocked === true) {
          showToast('该选项不可用');
          return;
        }

        // ===== 处理好感度变化 =====
        if (opt.fav) {
          for (var char in opt.fav) {
            changeFavorability(char, opt.fav[char]);
          }
        }
        // ===== 处理属性变化 =====
        if (opt.stat) {
          for (var s in opt.stat) {
            changeStat(s, opt.stat[s]);
          }
        }

        // ===== 处理 nextScene（场景跳转） =====
        if (opt.nextScene !== undefined) {
          currentScene = opt.nextScene;
          currentLine = 0;
        } else {
          // ===== 处理 requireFav 的 failNext（不达标走分支） =====
          if (isLocked && opt.failNext) {
            currentLine = opt.failNext;
          } else {
            currentLine = opt.next;
          }
        }

        if (idx === 0) unlockAchievement('first_choice');
        renderLine();
      });
      choicesEl.appendChild(btn);
      // 错落入场动画
      setTimeout(function() {
        btn.classList.add('show');
      }, 50 + idx * 60);
    });
    setTimeout(function() { choicesEl.classList.add('show'); }, 50);
  }
}

function typeText(el, text) {
  clearInterval(typeTimer);
  if (skipMode) {
    el.textContent = text;
    el.classList.remove('typing');
    isTyping = false;
    return;
  }
  isTyping = true;
  el.textContent = '';
  el.classList.add('typing');

  let i = 0;
  const speed = getSpeed();
  typeTimer = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
    } else {
      clearInterval(typeTimer);
      isTyping = false;
      el.classList.remove('typing');
      if (autoMode) scheduleAuto();
    }
  }, speed);
}

function getSpeed() {
  var el = document.getElementById('set-speed');
  var val = el ? parseInt(el.value) : 50;
  return Math.max(10, 80 - val * 0.7);
}

function advance() {
  preloadNextLine();
  var scene = STORY_DATA[currentScene];
  if (!scene) return;
  var line = scene.lines[currentLine];
  if (!line || line.type === 'choice') return;
  if (isTyping) {
    clearInterval(typeTimer);
    isTyping = false;
    var dlgTextEl = document.getElementById('dlg-text');
    dlgTextEl.textContent = resolveDynamicText(line.text);
    dlgTextEl.classList.remove('typing');
    if (autoMode) scheduleAuto();
    return;
  }
  currentLine++;
  renderLine();
}
// ============================================================
// 【自动 / 快进】
// ============================================================
function stopAuto() { autoMode = false; clearTimeout(autoTimer); }
function stopSkip() { skipMode = false; clearInterval(skipTimer); }

function toggleAuto() {
  autoMode = !autoMode;
  showToast(autoMode ? '自动播放：开' : '自动播放：关');
  if (autoMode && !isTyping) scheduleAuto();
  if (!autoMode) clearTimeout(autoTimer);
}

function scheduleAuto() {
  clearTimeout(autoTimer);
  var el = document.getElementById('set-auto-delay');
  var delay = (el ? parseInt(el.value) : 2) * 1000;
  autoTimer = setTimeout(function() { if (autoMode) advance(); }, delay);
}

function toggleSkip() {
  skipMode = !skipMode;
  showToast(skipMode ? '快进模式：开' : '快进模式：关');
  if (skipMode) {
    skipTimer = setInterval(function() {
      var scene = STORY_DATA[currentScene];
      var line = scene ? scene.lines[currentLine] : null;
      if (!scene || !line || line.type === 'choice') {
        toggleSkip();
        return;
      }
      clearInterval(typeTimer);
      isTyping = false;
      currentLine++;
      renderLine();
    }, 200);
  } else {
    clearInterval(skipTimer);
  }
}

// ============================================================
// 【存档系统】
// ============================================================
function saveSilent() {
  var scene = STORY_DATA[currentScene];
  safeStorage.setItem('cz_save_auto', JSON.stringify({
    scene: currentScene,
    line: currentLine,
    name: scene ? scene.name : '未知',
    time: new Date().toLocaleString('zh-CN')
  }));
  // ===== 好感度与成长系统持久化 =====
  safeStorage.setItem('cz_favorability', JSON.stringify(favorability));
  safeStorage.setItem('cz_stats', JSON.stringify(stats));
}

function saveGame() { saveSilent(); showToast('已存档'); }

function loadGame() {
  var data = safeStorage.getItem('cz_save_auto');
  if (data) {
    var parsed = JSON.parse(data);
    currentScene = parsed.scene;
    currentLine = parsed.line;
    showPage('pg-game');
    renderLine();
    // ===== 恢复好感度与成长系统数据 =====
    var f = safeStorage.getItem('cz_favorability');
    var s = safeStorage.getItem('cz_stats');
    if (f) favorability = JSON.parse(f);
    if (s) stats = JSON.parse(s);
    updateStatsUI();
    showToast('已读档');
  } else {
    showToast('暂无存档');
  }
}

function switchTab(tab) {
  currentTab = tab;
  var tabSave = document.getElementById('tab-save');
  var tabLoad = document.getElementById('tab-load');
  if (tabSave) tabSave.classList.toggle('on', tab === 'save');
  if (tabLoad) tabLoad.classList.toggle('on', tab === 'load');
  renderSlots(tab);
}

function renderSlots(tab) {
  var list = document.getElementById('slot-list');
  if (!list) return;
  list.innerHTML = '';
  for (var i = 1; i <= 6; i++) {
    var data = safeStorage.getItem('cz_slot_' + i);
    var card = document.createElement('div');
    card.className = 'slot-card';
    if (data) {
      var parsed = JSON.parse(data);
      card.innerHTML =
        '<div class="slot-title">存档 ' + i + ' · ' + (parsed.name || '未命名') + '</div>' +
        '<div class="slot-time">' + (parsed.time || '未知时间') + '</div>' +
        '<div class="slot-actions">' +
        (tab === 'load' ? '<button onclick="loadSlot(' + i + ')">读取</button>' : '') +
        '<button onclick="deleteSlot(' + i + ', event)">删除</button>' +
        '</div>';
    } else {
      card.innerHTML = '<div class="slot-title">存档 ' + i + '</div><div class="slot-time slot-empty">空</div>';
    }
    if (tab === 'save') {
      (function(slotIndex) {
        card.onclick = function() { saveToSlot(slotIndex); };
      })(i);
    }
    list.appendChild(card);
  }
}

function saveToSlot(i) {
  var scene = STORY_DATA[currentScene];
  var data = {
    scene: currentScene,
    line: currentLine,
    name: scene ? scene.name : '未知',
    time: new Date().toLocaleString('zh-CN')
  };
  var key = 'cz_slot_' + i;
  if (safeStorage.getItem(key)) {
    showConfirm('覆盖存档', '存档 ' + i + ' 已有数据，确定覆盖？', function() {
      safeStorage.setItem(key, JSON.stringify(data));
      showToast('已保存到存档 ' + i);
      renderSlots(currentTab);
    });
  } else {
    safeStorage.setItem(key, JSON.stringify(data));
    showToast('已保存到存档 ' + i);
    renderSlots(currentTab);
  }
}

function loadSlot(i) {
  var data = safeStorage.getItem('cz_slot_' + i);
  if (data) {
    var parsed = JSON.parse(data);
    currentScene = parsed.scene;
    currentLine = parsed.line;
    showPage('pg-game');
    renderLine();
    showToast('已读取存档 ' + i);
  }
}

function deleteSlot(i, e) {
  if (e && e.stopPropagation) e.stopPropagation();
  safeStorage.removeItem('cz_slot_' + i);
  showToast('存档 ' + i + ' 已删除');
  renderSlots(currentTab);
}

// ============================================================
// 【回顾面板】
// ============================================================
function openReview() {
  var scene = STORY_DATA[currentScene];
  var list = document.getElementById('review-list');
  if (!list) return;
  list.innerHTML = '';
  if (scene) {
    for (var i = 0; i <= currentLine && i < scene.lines.length; i++) {
      var line = scene.lines[i];
      if (line.type === 'choice') continue;
      var item = document.createElement('div');
      item.className = 'review-item';
      if (line.type === 'narration') {
        item.innerHTML = '<span style="color:rgba(255,255,255,.5)">[旁白]</span> ' + resolveDynamicText(line.text);
      } else {
        item.innerHTML = '<strong style="color:#ff8aa0">' + line.speaker + '</strong>：' + resolveDynamicText(line.text);
      }
      list.appendChild(item);
    }
  }
  var mask = document.getElementById('review-mask');
  var panel = document.getElementById('review-panel');
  if (mask) mask.classList.add('show');
  if (panel) panel.classList.add('show');
  list.scrollTop = list.scrollHeight;
}

function closeReview() {
  var mask = document.getElementById('review-mask');
  var panel = document.getElementById('review-panel');
  if (mask) mask.classList.remove('show');
  if (panel) panel.classList.remove('show');
}

// ============================================================
// 【图鉴系统】
// ============================================================
function openCodex() {
  renderCodex();
  var mask = document.getElementById('codex-mask');
  if (mask) mask.classList.add('show');
}

function closeCodex() {
  var mask = document.getElementById('codex-mask');
  if (mask) mask.classList.remove('show');
}

function renderCodex() {
  var body = document.getElementById('codex-body');
  if (!body) return;
  body.innerHTML = '';
  CODEX_DATA.forEach(function(item) {
    var unlocked = codexUnlocked.indexOf(item.id) !== -1;
    var div = document.createElement('div');
    div.className = 'codex-item ' + (unlocked ? 'unlocked' : 'locked');
    div.innerHTML =
      '<div class="ci-icon">' + (unlocked ? item.icon : '🔒') + '</div>' +
      '<div class="ci-name">' + (unlocked ? item.name : '???') + '</div>' +
      '<div class="ci-desc">' + (unlocked ? item.desc : '尚未解锁') + '</div>';
    body.appendChild(div);
  });
}

function unlockCodex(id) {
  if (codexUnlocked.indexOf(id) === -1) {
    codexUnlocked.push(id);
    safeStorage.setItem('cz_codex', JSON.stringify(codexUnlocked));
  }
}

// ============================================================
// 【液态玻璃成就系统】
// ============================================================
function unlockAchievement(id) {
  if (achievements[id]) return;
  achievements[id] = true;
  safeStorage.setItem('cz_achievements', JSON.stringify(achievements));
  var data = null;
  for (var i = 0; i < ACHIEVEMENT_DATA.length; i++) {
    if (ACHIEVEMENT_DATA[i].id === id) { data = ACHIEVEMENT_DATA[i]; break; }
  }
  if (!data) return;
  showGlassAchievement(data.title, data.condition, data.icon);
  if (id === 'first_meet') { unlockCodex('lin'); unlockCodex('chen'); }
  if (id === 'chapter_1') { unlockCodex('school'); unlockCodex('autumn'); }
}

function showGlassAchievement(title, desc, icon) {
  var container = document.getElementById('glass-achievement-container');
  if (!container) return;

  var ach = document.createElement('div');
  ach.className = 'glass-achievement';
  ach.innerHTML =
    '<div class="ga-icon">' + (icon || '🏆') + '</div>' +
    '<div class="ga-text">' +
      '<div class="ga-label">✦ 成就达成</div>' +
      '<div class="ga-title">' + title + '</div>' +
    '</div>';

  container.appendChild(ach);

  // 触发入场动画
  requestAnimationFrame(function() {
    ach.classList.add('show');
  });

  // 自动移除
  setTimeout(function() {
    ach.classList.remove('show');
    setTimeout(function() {
      if (ach.parentNode) ach.parentNode.removeChild(ach);
    }, 500);
  }, CONFIG.ACHIEVEMENT_DURATION);
}

// ============================================================
// 【确认弹窗】
// ============================================================
var confirmCallback = null;

function showConfirm(title, desc, callback) {
  var mask = document.getElementById('confirm-mask');
  var titleEl = document.getElementById('confirm-title');
  var descEl = document.getElementById('confirm-desc');
  if (!mask || !titleEl || !descEl) return;
  titleEl.textContent = title;
  descEl.textContent = desc;
  mask.classList.add('show');
  confirmCallback = callback;
  var okBtn = document.getElementById('confirm-ok');
  if (okBtn) {
    okBtn.onclick = function() {
      hideConfirm();
      if (confirmCallback) confirmCallback();
    };
  }
}

function hideConfirm() {
  var mask = document.getElementById('confirm-mask');
  if (mask) mask.classList.remove('show');
  confirmCallback = null;
}

// ============================================================
// 【设置】
// ============================================================
function toggleBGM() {
  var btn = document.getElementById('toggle-bgm');
  if (!btn) return;
  var isOn = btn.classList.contains('active');
  btn.classList.toggle('active');
  btn.textContent = isOn ? '关闭' : '开启';
  var bgm = document.getElementById('bgm');
  if (bgm) {
    if (isOn) {
      bgm.pause();
    } else {
      bgm.play().catch(function() {});
    }
  }
}

// ============================================================
// 【增强版彩蛋】
// ============================================================
var eggCount = 0, eggResetTimer = null;

function tapVersion() {
  eggCount++;
  clearTimeout(eggResetTimer);
  eggResetTimer = setTimeout(function() { eggCount = 0; }, 1500);
  if (eggCount >= 10) {
    eggCount = 0;
    triggerEgg();
  }
}

function triggerEgg() {
  var overlay = document.getElementById('egg-overlay');
  if (!overlay) return;
  overlay.classList.add('show');
  unlockAchievement('egg_hunter');
  var app = document.getElementById('app');
  if (app) {
    app.style.animation = 'none';
    void app.offsetWidth;
    app.style.animation = 'screenShake .5s ease .7s';
  }
  spawnFlames();
  setTimeout(function() { hideEgg(); }, 4000);
}

function spawnFlames() {
  for (var i = 0; i < 20; i++) {
    (function(idx) {
      setTimeout(function() {
        var f = document.createElement('div');
        f.className = 'egg-flame';
        f.style.left = (Math.random() * 100) + 'vw';
        f.style.animationDelay = (Math.random() * 0.3) + 's';
        var size = (4 + Math.random() * 6) + 'px';
        f.style.width = size;
        f.style.height = size;
        document.body.appendChild(f);
        setTimeout(function() { if (f.parentNode) f.parentNode.removeChild(f); }, 1200);
      }, idx * 80);
    })(i);
  }
}

function hideEgg() {
  var overlay = document.getElementById('egg-overlay');
  if (overlay) overlay.classList.remove('show');
  var app = document.getElementById('app');
  if (app) app.style.animation = '';
}

// ============================================================
// 【更新日志】
// ============================================================
function showChangelog() {
  var log = '📋 更新日志\n' +
    '════════════════════\n' +
    'v0.4.0 - 2026-08-17\n' +
    '  ✨ 液态玻璃全量视觉：折射变形/毛玻璃升级/边缘高光\n' +
    '  ✨ 动态高光推广到全部面板（鼠标/触摸追踪）\n' +
    '  ✨ 弹簧物理按压与弹窗弹簧出入场\n' +
    '  ✨ 设置新增「画质特效」开关（全量/轻量）\n' +
    '  🔧 修复角落按钮定位错位\n' +
    '\n' +
    'v0.3.1 - 2026-08-16\n' +
    '  ✨ Apple Emoji 液态玻璃图标渲染器回归\n' +
    '  🔧 修复动态台词阈值超出好感度范围（0/50/80 → -5/5/15）\n' +
    '  🔧 修复跳过打字时动态台词显示异常\n' +
    '  🔧 修复回顾面板动态台词显示异常\n' +
    '  🔧 清理页面多余标签\n' +
    '  🔧 版本号与文档同步\n' +
    '\n' +
    'v0.3.0 - 2026-08-10\n' +
    '  ✨ 液态玻璃UI效果\n' +
    '  ✨ 密码哈希加密存储\n' +
    '  ✨ 忘记密码功能（5次触发）\n' +
    '  ✨ Bug反馈系统\n' +
    '  ✨ 更新日志系统\n' +
    '  🎨 首页毛笔字暖化调色\n' +
    '  🎨 成就弹窗改为液态玻璃风格\n' +
    '  🎨 页面切换淡入淡出\n' +
    '  🔧 修复设置页无法点击\n' +
    '  🔧 修复成就图标不显示\n' +
    '  🔧 修复全屏按钮永久隐藏\n' +
    '  🔧 修复localStorage容错\n' +
    '  🔧 清理重复函数定义\n' +
    '\n' +
    'v0.2.3 - 2026-08-09\n' +
    '  ✨ 多媒体素材探测与加载\n' +
    '  ✨ 预加载机制\n' +
    '  ✨ 游戏彩蛋系统\n' +
    '  🔧 修复登录系统优化\n' +
    '\n' +
    'v0.2.2 - 2026-08-08\n' +
    '  ✨ 成就系统\n' +
    '  ✨ 图鉴系统\n' +
    '  ✨ MC风格成就动画\n' +
    '\n' +
    'v0.2.1 - 2026-08-08\n' +
    '  ✨ 手动存档系统（6槽位）\n' +
    '  ✨ 自动存档\n' +
    '\n' +
    'v0.2.0 - 2026-08-07\n' +
    '  ✨ 剧情引擎（打字机、分支选项）\n' +
    '\n' +
    'v0.1.0 - 2026-08-06\n' +
    '  ✨ 基础框架（首页、游戏页、设置页）\n' +
    '\n' +
    'v0.0.1 - 2026-08-05\n' +
    '  🎉 项目初始化';
  alert(log);
}

// ============================================================
// 【Bug反馈系统 - 修复版】
// ============================================================
function openBugReport() {
  // 检查是否登录
  if (!safeStorage.getItem('logged_user')) {
    showToast('请先登录再反馈问题');
    return;
  }

  try {
    var account = '未登录';
    try {
      var logged = safeStorage.getItem('logged_user');
      if (logged) account = JSON.parse(logged).account || '未登录';
    } catch(e) {}

    var sceneName = STORY_DATA[currentScene] ? STORY_DATA[currentScene].name : '未知';
    var time = new Date().toLocaleString('zh-CN');
    var ua = navigator.userAgent || '未知浏览器';

    var report = '📋 Bug反馈报告\n' +
      '════════════════════\n' +
      '账号：' + account + '\n' +
      '当前场景：' + sceneName + '\n' +
      '时间：' + time + '\n' +
      '浏览器：' + ua + '\n' +
      '════════════════════\n' +
      '问题描述：\n' +
      '[在此输入你的问题]\n' +
      '\n' +
      '════════════════════\n' +
      '📱 联系管理员：13857113238';

    // 复制到剪贴板（带降级方案）
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(report).then(function() {
        showToast('📋 反馈报告已复制，请粘贴发送给管理员');
      }).catch(function(err) {
        console.warn('clipboard 复制失败，使用降级方案', err);
        fallbackCopy(report);
      });
    } else {
      fallbackCopy(report);
    }
  } catch (e) {
    console.error('Bug反馈出错:', e);
    showToast('❌ 反馈生成失败，请直接联系管理员：13857113238');
  }
}

function fallbackCopy(text) {
  try {
    var input = document.createElement('input');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('📋 反馈报告已复制，请粘贴发送给管理员');
  } catch (e) {
    console.error('降级复制也失败了', e);
    showToast('❌ 无法复制，请手动截图反馈');
  }
}

// ============================================================
// 【商业级 UI 细节 · 点击涟漪 & 对话框光晕 · 2026-08-17 新增】
// ============================================================

// ===== 点击涟漪 =====
function createRipple(e, el) {
  const oldRipple = el.querySelector('.ripple');
  if (oldRipple) oldRipple.remove();

  const rect = el.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';

  let clientX, clientY;
  if (e.touches) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }

  const size = Math.max(rect.width, rect.height) * 0.6;
  const x = clientX - rect.left - size / 2;
  const y = clientY - rect.top - size / 2;

  ripple.style.width = size + 'px';
  ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  el.appendChild(ripple);

  setTimeout(() => {
    if (ripple.parentNode) ripple.remove();
  }, 650);
}

const rippleSelectors = [
  '.btn-ghost', '.choice-btn', '.home-func button',
  '.toolbar button', '.fullscreen-btn', '.music-btn',
  '.btn-back', '.tab', '.slot-actions button',
  '.btn-settings-action', '.btn-logout', '.btn-close-settings',
  '.toggle-btn', '.login-btn', '.codex-btn'
];

function attachRipple(selector) {
  document.addEventListener('mousedown', (e) => {
    const target = e.target.closest(selector);
    if (target) createRipple(e, target);
  });
  document.addEventListener('touchstart', (e) => {
    const target = e.target.closest(selector);
    if (target) createRipple(e, target);
  }, { passive: true });
}

rippleSelectors.forEach(attachRipple);

// ===== 平滑高光追踪引擎（位置插值跟随 + 强度淡入淡出，进出不跳变） =====
function createGlowTracker(el) {
  if (!el) return null;
  var tx = 50, ty = 40;        // 目标位置（%）
  var cx = 50, cy = 40;        // 当前渲染位置（%）
  var tA = 0, cA = 0;          // 目标/当前 强度（0~1）
  var raf = null;
  el.style.setProperty('--glow-a', '0');

  function tick() {
    var dx = tx - cx, dy = ty - cy, da = tA - cA;
    cx += dx * 0.14;
    cy += dy * 0.14;
    cA += da * 0.10;
    el.style.setProperty('--glow-x', cx + '%');
    el.style.setProperty('--glow-y', cy + '%');
    el.style.setProperty('--glow-a', cA.toFixed(3));
    // 收敛后停止循环省电
    if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05 && Math.abs(da) < 0.005) {
      cx = tx; cy = ty; cA = tA;
      el.style.setProperty('--glow-x', cx + '%');
      el.style.setProperty('--glow-y', cy + '%');
      el.style.setProperty('--glow-a', cA.toFixed(3));
      raf = null;
      return;
    }
    raf = requestAnimationFrame(tick);
  }
  function kick() {
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function move(e) {
    var rect = el.getBoundingClientRect();
    var px = e.touches ? e.touches[0].clientX : e.clientX;
    var py = e.touches ? e.touches[0].clientY : e.clientY;
    tx = Math.min(100, Math.max(0, ((px - rect.left) / rect.width) * 100));
    ty = Math.min(100, Math.max(0, ((py - rect.top) / rect.height) * 100));
    tA = 1;
    kick();
  }
  function leave() {
    // 位置保持在最后捕捉点原地淡出，绝不跳回中心
    tA = 0;
    kick();
  }
  el.addEventListener('mousemove', move);
  el.addEventListener('touchmove', move, { passive: true });
  el.addEventListener('touchstart', move, { passive: true });
  el.addEventListener('mouseleave', leave);
  return { el: el };
}

// ===== 对话框动态光晕 =====
createGlowTracker(document.getElementById('dlg-box'));

// ============================================================
// 【液态玻璃 v0.4.0 · 弹簧引擎 / 折射层 / 画质开关 · 2026-08-17】
// ============================================================

// ===== 弹簧物理引擎（阻尼弹簧，Apple 级交互手感） =====
function springAnimate(el, opts) {
  if (!el) return;
  opts = opts || {};
  var mass = opts.mass || 1;
  var stiffness = opts.stiffness || 320;
  var damping = opts.damping || 24;
  var x = opts.from != null ? opts.from : 1;
  var target = opts.to != null ? opts.to : 1;
  var onUpdate = opts.onUpdate;
  var v = 0;
  var last = performance.now();
  el.__springToken = (el.__springToken || 0) + 1;
  var token = el.__springToken;
  function step(now) {
    if (el.__springToken !== token) return;
    var dt = Math.min((now - last) / 1000, 0.064);
    last = now;
    var force = -stiffness * (x - target) - damping * v;
    v += (force / mass) * dt;
    x += v * dt;
    if (Math.abs(v) < 0.001 && Math.abs(x - target) < 0.001) {
      x = target;
      if (onUpdate) onUpdate(x);
      return;
    }
    if (onUpdate) onUpdate(x);
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ===== 按钮弹簧按压（pointerdown 压缩 → 松手回弹过冲） =====
var pressedSpringEl = null;
var SPRING_BTNS = '.btn-ghost, .home-func button, .toolbar button, .btn-back, .fullscreen-btn, .music-btn, .codex-btn, .tab, .slot-actions button, .btn-settings-action, .btn-logout, .btn-close-settings, .toggle-btn, .login-btn';
document.addEventListener('pointerdown', function(e) {
  var el = e.target.closest ? e.target.closest(SPRING_BTNS) : null;
  if (!el) return;
  pressedSpringEl = el;
  springAnimate(el, { stiffness: 620, damping: 32, from: 1, to: 0.92, onUpdate: function(s) { el.style.transform = 'scale(' + s + ')'; } });
}, { passive: true });
function releaseSpring() {
  var el = pressedSpringEl;
  pressedSpringEl = null;
  if (!el) return;
  springAnimate(el, { stiffness: 380, damping: 16, from: 0.92, to: 1, onUpdate: function(s) { el.style.transform = 'scale(' + s + ')'; } });
}
document.addEventListener('pointerup', releaseSpring, { passive: true });
document.addEventListener('pointercancel', releaseSpring, { passive: true });

// ===== 折射变形层注入（同背景副本 + SVG 位移滤镜） =====
(function injectRefractLayers() {
  var targets = ['.dialogue-box', '.settings-panel', '.growth-panel', '.slots-panel', '.ach-panel', '.codex-panel', '.login-panel'];
  targets.forEach(function(sel) {
    var el = document.querySelector(sel);
    if (!el || el.querySelector('.refract-layer')) return;
    var layer = document.createElement('div');
    layer.className = 'refract-layer';
    el.insertBefore(layer, el.firstChild);
  });
})();

// ===== 动态高光追踪推广到全部面板 =====
(function bindPanelGlow() {
  var panels = ['.settings-panel', '.growth-panel', '.slots-panel', '.ach-panel', '.codex-panel', '.login-panel', '.confirm-box'];
  panels.forEach(function(sel) {
    createGlowTracker(document.querySelector(sel));
  });
})();

// ===== 弹窗弹簧出入场（监听遮罩 show 类变化，驱动面板缩放弹簧） =====
(function bindPanelSpring() {
  var pairs = [
    ['settings-mask', 'settings-panel'],
    ['growth-mask', 'growth-panel'],
    ['slots-mask', 'slots-panel'],
    ['ach-mask', 'ach-panel'],
    ['codex-mask', 'codex-panel'],
    ['confirm-mask', 'confirm-box']
  ];
  if (typeof MutationObserver === 'undefined') return;
  var obs = new MutationObserver(function(muts) {
    muts.forEach(function(m) {
      var mask = m.target;
      // 轻量档：形变交给 CSS 过渡，弹簧不介入，避免两套动画互相覆盖
      if (document.body.classList.contains('lite')) return;
      var shown = mask.classList.contains('show');
      var pair = null;
      for (var i = 0; i < pairs.length; i++) {
        if (pairs[i][0] === mask.id) { pair = pairs[i]; break; }
      }
      if (!pair) return;
      var panel = document.getElementById(pair[1]);
      if (!panel) return;
      springAnimate(panel, {
        stiffness: 300, damping: 20,
        from: shown ? 0.86 : 1,
        to: shown ? 1 : 0.88,
        onUpdate: function(s) { panel.style.transform = 'scale(' + s + ')'; }
      });
    });
  });
  pairs.forEach(function(p) {
    var mask = document.getElementById(p[0]);
    if (mask) obs.observe(mask, { attributes: true, attributeFilter: ['class'] });
  });
})();

// ===== 画质特效开关（全量 / 轻量） =====
function applyQuality(q) {
  var full = q !== 'lite';
  document.body.classList.toggle('lite', !full);
  var btn = document.getElementById('toggle-quality');
  if (btn) {
    btn.classList.toggle('active', full);
    btn.textContent = full ? '全量' : '轻量';
  }
  safeStorage.setItem('cz_quality', full ? 'full' : 'lite');
}

function toggleQuality() {
  var isLite = document.body.classList.contains('lite');
  applyQuality(isLite ? 'full' : 'lite');
  showToast(isLite ? '画质特效：全量' : '画质特效：轻量');
}

// ============================================================
// 【初始化】
// ============================================================
(async function init() {
  checkOrientation();
  applyQuality(safeStorage.getItem('cz_quality') || 'full');
  applyDevMode(devModeEnabled());
  if (codexUnlocked.length === 0) unlockCodex('teacher');
  // Apple Emoji 图标渲染，失败时降级为 SVG
  try {
    renderGlassIcons();
  } catch (e) {
    console.warn('Emoji 图标渲染失败，降级为 SVG:', e);
    renderGlassIconsSVG();
  }
  initStatsSystem();
  
  // 先加载剧情数据，再初始化登录
  const loaded = await loadStoryData();
  if (loaded) {
    initLogin();
  }
})();
// 暴露函数到全局，确保按钮可调用
window.openSettings = openSettings;
window.openSlots = openSlots;
window.closeSlots = closeSlots;
window.openAch = openAch;
window.closeAch = closeAch;
window.showPage = showPage;
window.closeSettings = closeSettings;
window.toggleBGM = toggleBGM;
window.toggleMusic = toggleMusic;
window.toggleFullscreen = toggleFullscreen;
window.toggleAuto = toggleAuto;
window.toggleSkip = toggleSkip;
window.saveGame = saveGame;
window.loadGame = loadGame;
window.openReview = openReview;
window.openCodex = openCodex;
window.closeCodex = closeCodex;
window.openGrowth = openGrowth;
window.closeGrowth = closeGrowth;
window.hideConfirm = hideConfirm;
window.tapVersion = tapVersion;
window.hideEgg = hideEgg;
window.newGame = newGame;
window.startTestScene = function() {
  // 直接加载测试场景
  currentScene = 1; // test_scene_01 is the second scene (index 1)
  currentLine = 0;
  showPage('pg-game');
  renderLine();
  showToast('测试剧情已启动');
};
window.continueGame = continueGame;
window.advance = advance;
window.switchTab = switchTab;
window.dismissRotateHint = dismissRotateHint;
window.logout = logout;
window.showChangelog = showChangelog;
window.openBugReport = openBugReport;
window.toggleQuality = toggleQuality;
window.toggleDevMode = toggleDevMode;
