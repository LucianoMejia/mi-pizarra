'use strict';
(() => {
const $ = (s) => document.querySelector(s);

/* ---------- Iconos ---------- */
const ICONS = {
  select: '<path d="M4 3l7 17 2.5-7.5L21 10z"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  hl: '<path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/>',
  eraser: '<path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/>',
  line: '<path d="M5 19 19 5"/>',
  arrow: '<path d="M5 19 19 5"/><path d="M9 5h10v10"/>',
  rect: '<rect x="4" y="5" width="16" height="14" rx="1"/>',
  ellipse: '<ellipse cx="12" cy="12" rx="9" ry="7"/>',
  triangle: '<path d="M12 4 21 20H3z"/>',
  plane: '<path d="M12 21V3M10 5l2-2 2 2M3 12h18M19 10l2 2-2 2"/>',
  func: '<path d="M4 20V4M4 20h16"/><path d="M6.5 17C9 17 10 7 13 7s3.5 6 7 6"/>',
  text: '<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>',
  laser: '<circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
  hand: '<path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>',
  clear: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  bg: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
  file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>',
  open: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  pdf: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  full: '<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>',
  present: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  wand: '<path d="m15 4 5 5L8 21l-5-5z"/><path d="m12 7 5 5"/><path d="M4 4l1 2M3 8h2M8 2v2"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/>'
};
const ico = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]}</svg>`;

/* ---------- Constantes ---------- */
const GRID = 40;
const BOARDS = {
  white: { name: 'Blanca', bg: '#ffffff', grid: '#e6e9f0', major: '#d2d7e2', ink: '#1d1d1f', axis: '#8f98ab', label: '#7a8396' },
  cream: { name: 'Crema', bg: '#fbf8f0', grid: '#ece5d4', major: '#dcd2bb', ink: '#1d1d1f', axis: '#a2967a', label: '#8d826a' },
  chalk: { name: 'Verde', bg: '#203b2f', grid: 'rgba(255,255,255,.07)', major: 'rgba(255,255,255,.14)', ink: '#f6f6ef', axis: 'rgba(255,255,255,.55)', label: 'rgba(255,255,255,.6)' },
  dark:  { name: 'Oscura', bg: '#1c1d22', grid: 'rgba(255,255,255,.06)', major: 'rgba(255,255,255,.12)', ink: '#f5f5f5', axis: 'rgba(255,255,255,.5)', label: 'rgba(255,255,255,.55)' }
};
const BGS = [
  ['blank', 'Liso'], ['grid', 'Cuadrícula'], ['lines', 'Renglones'], ['dots', 'Puntos'], ['plane', 'Plano cartesiano']
];
const PALETTE = ['#1d1d1f', '#ffffff', '#e03131', '#1971c2', '#2f9e44', '#f08c00', '#9c36b5', '#fcc419'];
const FX_COLORS = ['#1971c2', '#e03131', '#2f9e44', '#9c36b5', '#f08c00', '#0c8599'];
const SYMBOLS = ['π','√','∛','²','³','ⁿ','½','∞','±','×','÷','·','≠','≈','≤','≥','<','>','°','∠','⊥','∥','△','θ','α','β','γ','λ','Δ','Σ','∫','∂','→','⇒','⇔','∈','∉','⊂','∪','∩','∅','ℕ','ℤ','ℚ','ℝ','√( )','( )²','f(x)','log','sen','cos','tan'];
const WIDTHS = {
  pen:    { v: 3,  min: 1,  max: 30,  pre: [2, 3, 6, 10] },
  hl:     { v: 22, min: 6,  max: 70,  pre: [12, 22, 32, 46] },
  eraser: { v: 30, min: 8,  max: 200, pre: [14, 30, 60, 120] },
  shape:  { v: 3,  min: 1,  max: 20,  pre: [2, 3, 5, 8] },
  text:   { v: 32, min: 12, max: 140, pre: [20, 32, 48, 72] }
};
const WKEY = { pen: 'pen', hl: 'hl', eraser: 'eraser', line: 'shape', arrow: 'shape', rect: 'shape', ellipse: 'shape', triangle: 'shape', plane: 'shape', func: 'shape', text: 'text', select: 'shape', laser: null, hand: null };
const SHAPES = [['line', 'Línea', 'L'], ['arrow', 'Flecha', 'A'], ['rect', 'Rectángulo', 'R'], ['ellipse', 'Elipse / círculo', 'O'], ['triangle', 'Triángulo', 'Y']];
const TOOLS = [
  ['select', 'Seleccionar y mover (V)'], ['pen', 'Lápiz (P)'], ['hl', 'Resaltador (M)'], ['eraser', 'Borrador (E)'],
  ['shapes', 'Figuras (L, A, R, O, Y) — Mayús para recto/cuadrado'], ['plane', 'Plano cartesiano (G)'], ['func', 'Graficar función (F)'],
  ['text', 'Texto y símbolos (T)'], ['laser', 'Puntero láser (K)'], ['hand', 'Mover lienzo (H o barra espaciadora)']
];

/* ---------- Estado ---------- */
const bgC = $('#bg'), inkC = $('#ink'), ovC = $('#ov');
const bgX = bgC.getContext('2d'), inkX = inkC.getContext('2d'), ovX = ovC.getContext('2d');
const cacheC = document.createElement('canvas'), cacheX = cacheC.getContext('2d');
const measureX = document.createElement('canvas').getContext('2d');
let W = 0, H = 0, DPR = 1;

const S = { tool: 'pen', lastShape: 'line', color: '#1d1d1f', hlColor: '#fcc419', eraserMode: 'area', sel: [], shapeAssist: true, smooth: 1 };
const SMOOTH = [0, 0.35, 0.55, 0.7];
const HOLD_MS = 480;
let doc, cur = 0, filePath = null;
let live = null, act = null, useCache = false, cacheValid = false, raf = 0;
let hover = null, spaceDown = false, penSeen = false, clipboard = null;
const touches = new Map();
let laser = [], laserOn = false;

const mkPage = (from) => ({ bg: from ? from.bg : 'grid', board: from ? from.board : 'white', items: [], undo: [], redo: [], view: from && from.view ? { ...from.view } : null });
const P = () => doc.pages[cur];
const r2 = (n) => Math.round(n * 100) / 100;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function view() { const p = P(); if (!p.view) p.view = { x: Math.round(W / 2), y: Math.round(H / 2), s: 1 }; return p.view; }
function toWorld(cx, cy) { const v = view(); return [(cx - v.x) / v.s, (cy - v.y) / v.s]; }
function toScreen(x, y) { const v = view(); return [x * v.s + v.x, y * v.s + v.y]; }
const toolColor = () => (S.tool === 'hl' ? S.hlColor : S.color);
const pr = (e) => (e.pointerType === 'pen' ? r2(e.pressure || 0.5) : 0.5);

/* ---------- Expresiones matemáticas ---------- */
const FUNCS = {
  sin: Math.sin, sen: Math.sin, cos: Math.cos, tan: Math.tan, tg: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
  arcsin: Math.asin, arccos: Math.acos, arctan: Math.atan, sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
  sqrt: Math.sqrt, raiz: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs, ln: Math.log, log: Math.log10, exp: Math.exp,
  floor: Math.floor, ceil: Math.ceil, round: Math.round, sign: Math.sign,
  sec: (v) => 1 / Math.cos(v), csc: (v) => 1 / Math.sin(v), cot: (v) => 1 / Math.tan(v)
};
const CONSTS = { pi: Math.PI, e: Math.E };
const NAMES = [...Object.keys(FUNCS), ...Object.keys(CONSTS), 'x'].sort((a, b) => b.length - a.length);
const fnCache = new Map();
function tokenize(s) {
  const out = []; let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9.]/.test(c)) { let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++; const n = parseFloat(s.slice(i, j)); if (isNaN(n)) throw 0; out.push({ t: 'n', v: n }); i = j; continue; }
    if (/[a-z]/.test(c)) {
      let j = i; while (j < s.length && /[a-z]/.test(s[j])) j++;
      let w = s.slice(i, j);
      while (w) { const nm = NAMES.find((n) => w.startsWith(n)); if (!nm) throw 0; out.push({ t: nm === 'x' ? 'x' : FUNCS[nm] ? 'f' : 'c', v: nm }); w = w.slice(nm.length); }
      i = j; continue;
    }
    if ('+-*/^()|'.includes(c)) { out.push({ t: c }); i++; continue; }
    throw 0;
  }
  return out;
}
function parse(tokens) {
  let p = 0;
  const peek = () => tokens[p], take = () => tokens[p++];
  const startsPrimary = (t) => t && (t.t === 'n' || t.t === 'x' || t.t === 'c' || t.t === 'f' || t.t === '(');
  function expr() {
    let l = term();
    while (peek() && (peek().t === '+' || peek().t === '-')) { const op = take().t, r = term(), a = l; l = op === '+' ? (x) => a(x) + r(x) : (x) => a(x) - r(x); }
    return l;
  }
  function term() {
    let l = unary();
    for (;;) {
      const t = peek();
      if (t && (t.t === '*' || t.t === '/')) { take(); const r = unary(), a = l; l = t.t === '*' ? (x) => a(x) * r(x) : (x) => a(x) / r(x); }
      else if (startsPrimary(t)) { const r = power(), a = l; l = (x) => a(x) * r(x); }
      else return l;
    }
  }
  function unary() {
    const t = peek();
    if (t && t.t === '-') { take(); const u = unary(); return (x) => -u(x); }
    if (t && t.t === '+') { take(); return unary(); }
    return power();
  }
  function power() {
    const b = primary();
    if (peek() && peek().t === '^') { take(); const e = unary(); return (x) => Math.pow(b(x), e(x)); }
    return b;
  }
  function primary() {
    const t = take(); if (!t) throw 0;
    if (t.t === 'n') { const v = t.v; return () => v; }
    if (t.t === 'x') return (x) => x;
    if (t.t === 'c') { const v = CONSTS[t.v]; return () => v; }
    if (t.t === '(') { const e = expr(); if (!peek() || take().t !== ')') throw 0; return e; }
    if (t.t === '|') { const e = expr(); if (!peek() || take().t !== '|') throw 0; return (x) => Math.abs(e(x)); }
    if (t.t === 'f') {
      const f = FUNCS[t.v];
      if (peek() && peek().t === '^') { take(); const e = unary(); const arg = power(); return (x) => Math.pow(f(arg(x)), e(x)); }
      const arg = power(); return (x) => f(arg(x));
    }
    throw 0;
  }
  const f = expr(); if (p !== tokens.length) throw 0; return f;
}
function compile(src) {
  if (fnCache.has(src)) return fnCache.get(src);
  let fn = null;
  try {
    let s = String(src).toLowerCase().replace(/\s+/g, '').replace(/^(y|f\(x\))=/, '');
    s = s.replace(/[·×]/g, '*').replace(/÷/g, '/').replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/²/g, '^2').replace(/³/g, '^3').replace(/,/g, '.').replace(/[−–]/g, '-').replace(/\*\*/g, '^');
    if (!s) throw 0;
    const f = parse(tokenize(s));
    if (typeof f(1.234) !== 'number') throw 0;
    fn = f;
  } catch (_) { fn = null; }
  fnCache.set(src, fn);
  return fn;
}
const fmtNum = (n) => String(+n.toFixed(4)).replace('-', '−');

/* ---------- Dibujo ---------- */
function drawBg(ctx, p, v, w, h, dpr) {
  const b = BOARDS[p.board] || BOARDS.white;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = b.bg; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  if (p.bg === 'blank') return;
  ctx.setTransform(dpr * v.s, 0, 0, dpr * v.s, dpr * v.x, dpr * v.y);
  const x0 = -v.x / v.s, y0 = -v.y / v.s, x1 = (w - v.x) / v.s, y1 = (h - v.y) / v.s;
  let g = GRID; while (g * v.s < 12) g *= 5;
  const lw = 1 / v.s;
  const sx = Math.floor(x0 / g) * g, sy = Math.floor(y0 / g) * g;
  if (p.bg === 'grid' || p.bg === 'plane') {
    for (const major of [false, true]) {
      ctx.beginPath();
      for (let x = sx; x <= x1; x += g) { const m = Math.round(x / g) % 5 === 0; if (m === major) { ctx.moveTo(x, y0); ctx.lineTo(x, y1); } }
      for (let y = sy; y <= y1; y += g) { const m = Math.round(y / g) % 5 === 0; if (m === major) { ctx.moveTo(x0, y); ctx.lineTo(x1, y); } }
      ctx.strokeStyle = major ? b.major : b.grid; ctx.lineWidth = lw; ctx.stroke();
    }
  } else if (p.bg === 'lines') {
    ctx.beginPath();
    for (let y = sy; y <= y1; y += g) { ctx.moveTo(x0, y); ctx.lineTo(x1, y); }
    ctx.strokeStyle = b.major; ctx.lineWidth = lw; ctx.stroke();
  } else if (p.bg === 'dots') {
    ctx.fillStyle = b.major; const r = 1.8 / v.s;
    for (let x = sx; x <= x1; x += g) for (let y = sy; y <= y1; y += g) { ctx.fillRect(x - r, y - r, r * 2, r * 2); }
  }
  if (p.bg === 'plane') {
    ctx.strokeStyle = b.axis; ctx.lineWidth = 2 / v.s; ctx.beginPath();
    ctx.moveTo(x0, 0); ctx.lineTo(x1, 0); ctx.moveTo(0, y0); ctx.lineTo(0, y1); ctx.stroke();
    const fs = 12 / v.s; ctx.font = `${fs}px "Segoe UI",system-ui,sans-serif`; ctx.fillStyle = b.label;
    let step = GRID; while (step * v.s < 30) step *= 5;
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let x = Math.floor(x0 / step) * step; x <= x1; x += step) {
      const n = Math.round(x / GRID); if (!n) continue;
      ctx.fillRect(x - 0.75 / v.s, -4 / v.s, 1.5 / v.s, 8 / v.s);
      ctx.fillText(fmtNum(n), x, 6 / v.s);
    }
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (let y = Math.floor(y0 / step) * step; y <= y1; y += step) {
      const n = -Math.round(y / GRID); if (!n) continue;
      ctx.fillRect(-4 / v.s, y - 0.75 / v.s, 8 / v.s, 1.5 / v.s);
      ctx.fillText(fmtNum(n), -7 / v.s, y);
    }
    ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillText('0', -5 / v.s, 5 / v.s);
  }
}

const pw = (p) => 0.3 + p * 1.25;
function drawStroke(ctx, it) {
  const pts = it.pts; if (!pts || !pts.length) return;
  ctx.save();
  if (it.er) { ctx.globalCompositeOperation = 'destination-out'; ctx.strokeStyle = ctx.fillStyle = '#000'; }
  else { ctx.strokeStyle = ctx.fillStyle = it.c; if (it.hl) ctx.globalAlpha = 0.38; }
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const n = pts.length;
  if (n === 1) {
    const r = (it.pr ? it.w * pw(pts[0][2]) : it.w) / 2;
    ctx.beginPath(); ctx.arc(pts[0][0], pts[0][1], Math.max(r, 0.3), 0, Math.PI * 2); ctx.fill();
  } else if (it.pr && !it.hl && !it.er) {
    let px = pts[0][0], py = pts[0][1];
    for (let i = 1; i < n; i++) {
      const a = pts[i];
      const ex = i < n - 1 ? (a[0] + pts[i + 1][0]) / 2 : a[0];
      const ey = i < n - 1 ? (a[1] + pts[i + 1][1]) / 2 : a[1];
      ctx.beginPath(); ctx.lineWidth = it.w * pw(a[2]);
      ctx.moveTo(px, py); ctx.quadraticCurveTo(a[0], a[1], ex, ey); ctx.stroke();
      px = ex; py = ey;
    }
  } else {
    ctx.beginPath(); ctx.lineWidth = it.w; ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < n - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      ctx.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
    }
    ctx.lineTo(pts[n - 1][0], pts[n - 1][1]); ctx.stroke();
  }
  ctx.restore();
}

function arrowHead(ctx, x1, y1, x2, y2, w) {
  const a = Math.atan2(y2 - y1, x2 - x1), L = Math.max(10, w * 3.5);
  ctx.beginPath();
  ctx.moveTo(x2 - L * Math.cos(a - 0.45), y2 - L * Math.sin(a - 0.45));
  ctx.lineTo(x2, y2);
  ctx.lineTo(x2 - L * Math.cos(a + 0.45), y2 - L * Math.sin(a + 0.45));
  ctx.stroke();
}

function planeGeom(it) {
  const x = Math.min(it.x1, it.x2), y = Math.min(it.y1, it.y2), w = Math.abs(it.x2 - it.x1), h = Math.abs(it.y2 - it.y1);
  const u = it.u || GRID;
  return { x, y, w, h, u, ox: x + Math.round(w / 2 / u) * u, oy: y + Math.round(h / 2 / u) * u, kx: it.kx || 1, ky: it.ky || 1 };
}

function drawPlane(ctx, it) {
  const { x, y, w, h, u, ox, oy, kx, ky } = planeGeom(it);
  if (w < 8 || h < 8) return;
  ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  if (it.grid !== false) {
    ctx.strokeStyle = it.c; ctx.globalAlpha = 0.15; ctx.lineWidth = 1; ctx.beginPath();
    for (let gx = ox - Math.floor((ox - x) / u) * u; gx <= x + w + 0.01; gx += u) { ctx.moveTo(gx, y); ctx.lineTo(gx, y + h); }
    for (let gy = oy - Math.floor((oy - y) / u) * u; gy <= y + h + 0.01; gy += u) { ctx.moveTo(x, gy); ctx.lineTo(x + w, gy); }
    ctx.stroke(); ctx.globalAlpha = 1;
  }
  const lw = Math.max(1.5, it.w * 0.8);
  ctx.strokeStyle = ctx.fillStyle = it.c; ctx.lineWidth = lw;
  ctx.beginPath(); ctx.moveTo(x, oy); ctx.lineTo(x + w, oy); ctx.moveTo(ox, y + h); ctx.lineTo(ox, y); ctx.stroke();
  arrowHead(ctx, x, oy, x + w, oy, lw); arrowHead(ctx, ox, y + h, ox, y, lw);
  const fs = Math.max(11, Math.min(17, u * 0.32));
  ctx.font = `${fs}px "Segoe UI",system-ui,sans-serif`;
  ctx.lineWidth = Math.max(1, lw * 0.7);
  const step = u >= 30 ? 1 : 2;
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let n = Math.ceil((x - ox) / u); ox + n * u <= x + w; n++) {
    const gx = ox + n * u; if (!n || gx > x + w - 14 || gx < x + 4) continue;
    ctx.beginPath(); ctx.moveTo(gx, oy - 4); ctx.lineTo(gx, oy + 4); ctx.stroke();
    if (n % step === 0) ctx.fillText(fmtNum(n * kx), gx, oy + 6);
  }
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let n = Math.ceil((y - oy) / u); oy + n * u <= y + h; n++) {
    const gy = oy + n * u; if (!n || gy < y + 14 || gy > y + h - 4) continue;
    ctx.beginPath(); ctx.moveTo(ox - 4, gy); ctx.lineTo(ox + 4, gy); ctx.stroke();
    if (n % step === 0) ctx.fillText(fmtNum(-n * ky), ox - 7, gy);
  }
  ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillText('0', ox - 5, oy + 5);
  ctx.font = `italic ${fs + 3}px "Cambria Math","Times New Roman",serif`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillText('x', x + w - 4, oy + 8);
  ctx.textAlign = 'left'; ctx.fillText('y', ox + 9, y + 2);

  if (it.fx && it.fx.length) {
    ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    for (const f of it.fx) {
      const fn = compile(f.e); if (!fn) continue;
      ctx.strokeStyle = f.c; ctx.lineWidth = Math.max(2, it.w); ctx.beginPath();
      let on = false, prevY = 0;
      const st = Math.max(0.5, w / 1600);
      for (let px = x; px <= x + w; px += st) {
        let Y; try { Y = fn(((px - ox) / u) * kx); } catch (_) { Y = NaN; }
        const py = oy - (Y / ky) * u;
        if (!isFinite(py) || Math.abs(py - oy) > h * 20) { on = false; continue; }
        if (on && Math.abs(py - prevY) > h) on = false;
        if (!on) { ctx.moveTo(px, py); on = true; } else ctx.lineTo(px, py);
        prevY = py;
      }
      ctx.stroke();
    }
    ctx.restore();
    ctx.font = `${fs + 1}px "Cambria Math","Segoe UI",serif`; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
    let ly = y + 6;
    for (const f of it.fx) {
      if (!compile(f.e)) continue;
      ctx.fillStyle = f.c; ctx.fillText('y = ' + f.e.replace(/^\s*(y|f\(x\))\s*=\s*/i, ''), x + 8, ly); ly += fs * 1.5;
    }
  }
  ctx.restore();
}

const FONT = (size) => `${size}px "Segoe UI","Cambria Math",system-ui,sans-serif`;
function drawText(ctx, it) {
  ctx.save(); ctx.fillStyle = it.c; ctx.font = FONT(it.size); ctx.textBaseline = 'top'; ctx.textAlign = 'left';
  const lines = it.s.split('\n');
  lines.forEach((l, i) => ctx.fillText(l, it.x, it.y + it.size * 0.125 + i * it.size * 1.25));
  ctx.restore();
}

function drawItem(ctx, it) {
  switch (it.t) {
    case 'stroke': return drawStroke(ctx, it);
    case 'text': return drawText(ctx, it);
    case 'plane': return drawPlane(ctx, it);
  }
  ctx.save(); ctx.strokeStyle = it.c; ctx.lineWidth = it.w; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const { x1, y1, x2, y2 } = it;
  ctx.beginPath();
  if (it.t === 'line' || it.t === 'arrow') { ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); if (it.t === 'arrow') arrowHead(ctx, x1, y1, x2, y2, it.w); }
  else if (it.t === 'rect') { ctx.rect(Math.min(x1, x2), Math.min(y1, y2), Math.abs(x2 - x1), Math.abs(y2 - y1)); ctx.stroke(); }
  else if (it.t === 'ellipse') { ctx.ellipse((x1 + x2) / 2, (y1 + y2) / 2, Math.abs(x2 - x1) / 2, Math.abs(y2 - y1) / 2, 0, 0, Math.PI * 2); ctx.stroke(); }
  else if (it.t === 'poly') { const q = it.pts; ctx.moveTo(q[0][0], q[0][1]); for (let i = 1; i < q.length; i++) ctx.lineTo(q[i][0], q[i][1]); if (it.closed) ctx.closePath(); ctx.stroke(); }
  else if (it.t === 'triangle') { const t = triPts(it); ctx.moveTo(t[0][0], t[0][1]); ctx.lineTo(t[1][0], t[1][1]); ctx.lineTo(t[2][0], t[2][1]); ctx.closePath(); ctx.stroke(); }
  ctx.restore();
}
const triPts = (it) => { const l = Math.min(it.x1, it.x2), r = Math.max(it.x1, it.x2), t = Math.min(it.y1, it.y2), b = Math.max(it.y1, it.y2); return [[(l + r) / 2, t], [r, b], [l, b]]; };

/* ---------- Geometría / selección ---------- */
function bbox(it) {
  if (it.t === 'stroke' || it.t === 'poly') {
    let a = Infinity, b = Infinity, c = -Infinity, d = -Infinity;
    for (const p of it.pts) { if (p[0] < a) a = p[0]; if (p[1] < b) b = p[1]; if (p[0] > c) c = p[0]; if (p[1] > d) d = p[1]; }
    const m = it.w * (it.pr ? 0.8 : 0.5) + (it.t === 'poly' ? 1 : 0); return [a - m, b - m, c + m, d + m];
  }
  if (it.t === 'text') {
    measureX.font = FONT(it.size); const lines = it.s.split('\n');
    const w = Math.max(...lines.map((l) => measureX.measureText(l).width), it.size * 0.3);
    return [it.x, it.y, it.x + w, it.y + lines.length * it.size * 1.25];
  }
  const m = (it.w || 0) / 2 + (it.t === 'arrow' ? Math.max(10, it.w * 3.5) * 0.5 : 0);
  return [Math.min(it.x1, it.x2) - m, Math.min(it.y1, it.y2) - m, Math.max(it.x1, it.x2) + m, Math.max(it.y1, it.y2) + m];
}
function unionBox(items) {
  let r = null;
  for (const it of items) { const b = bbox(it); r = r ? [Math.min(r[0], b[0]), Math.min(r[1], b[1]), Math.max(r[2], b[2]), Math.max(r[3], b[3])] : b; }
  return r;
}
function segDist(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay, l = dx * dx + dy * dy;
  let t = l ? ((px - ax) * dx + (py - ay) * dy) / l : 0; t = clamp(t, 0, 1);
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}
function hit(it, x, y, r) {
  if (it.er) return false;
  if (it.t === 'stroke') {
    const tol = r + it.w / 2 * (it.pr ? 1.4 : 1); const p = it.pts;
    if (p.length === 1) return Math.hypot(x - p[0][0], y - p[0][1]) <= tol;
    for (let i = 1; i < p.length; i++) if (segDist(x, y, p[i - 1][0], p[i - 1][1], p[i][0], p[i][1]) <= tol) return true;
    return false;
  }
  const tol = r + (it.w || 0) / 2;
  if (it.t === 'poly') {
    const q = it.pts, n = q.length;
    for (let i = 1; i < n + (it.closed ? 1 : 0); i++) { const a = q[i - 1], b = q[i % n]; if (segDist(x, y, a[0], a[1], b[0], b[1]) <= tol) return true; }
    return false;
  }
  if (it.t === 'line' || it.t === 'arrow') return segDist(x, y, it.x1, it.y1, it.x2, it.y2) <= tol;
  if (it.t === 'rect') {
    const l = Math.min(it.x1, it.x2), rr = Math.max(it.x1, it.x2), t = Math.min(it.y1, it.y2), b = Math.max(it.y1, it.y2);
    return Math.min(segDist(x, y, l, t, rr, t), segDist(x, y, rr, t, rr, b), segDist(x, y, rr, b, l, b), segDist(x, y, l, b, l, t)) <= tol;
  }
  if (it.t === 'triangle') { const p = triPts(it); return Math.min(segDist(x, y, ...p[0], ...p[1]), segDist(x, y, ...p[1], ...p[2]), segDist(x, y, ...p[2], ...p[0])) <= tol; }
  if (it.t === 'ellipse') {
    const cx = (it.x1 + it.x2) / 2, cy = (it.y1 + it.y2) / 2, rx = Math.abs(it.x2 - it.x1) / 2 || 1, ry = Math.abs(it.y2 - it.y1) / 2 || 1;
    const d = Math.hypot((x - cx) / rx, (y - cy) / ry);
    return Math.abs(d - 1) * Math.min(rx, ry) <= tol;
  }
  const b = bbox(it); return x >= b[0] - r && x <= b[2] + r && y >= b[1] - r && y <= b[3] + r;
}
function hitTest(x, y, r, type) {
  const items = P().items;
  for (let i = items.length - 1; i >= 0; i--) { const it = items[i]; if (type && it.t !== type) continue; if (hit(it, x, y, r)) return it; }
  return null;
}
function moveItem(it, dx, dy) {
  if (it.t === 'stroke' || it.t === 'poly') { for (const p of it.pts) { p[0] = r2(p[0] + dx); p[1] = r2(p[1] + dy); } }
  else if (it.t === 'text') { it.x += dx; it.y += dy; }
  else { it.x1 += dx; it.x2 += dx; it.y1 += dy; it.y2 += dy; }
}

/* ---------- Render ---------- */
function req() { if (!raf) raf = requestAnimationFrame(render); }
function render() {
  raf = 0;
  const p = P(), v = view();
  drawBg(bgX, p, v, W, H, DPR);
  inkX.setTransform(1, 0, 0, 1, 0, 0); inkX.clearRect(0, 0, inkC.width, inkC.height);
  if (useCache && cacheValid) inkX.drawImage(cacheC, 0, 0);
  else {
    inkX.setTransform(DPR * v.s, 0, 0, DPR * v.s, DPR * v.x, DPR * v.y);
    for (const it of p.items) drawItem(inkX, it);
    if (useCache) {
      cacheX.setTransform(1, 0, 0, 1, 0, 0); cacheX.clearRect(0, 0, cacheC.width, cacheC.height);
      cacheX.drawImage(inkC, 0, 0); cacheValid = true;
    }
  }
  inkX.setTransform(DPR * v.s, 0, 0, DPR * v.s, DPR * v.x, DPR * v.y);
  if (live) drawItem(inkX, live);
  drawOverlay();
  if (edState) layoutEditor();
  if (laser.length || laserOn) req();
}
function drawOverlay() {
  ovX.setTransform(1, 0, 0, 1, 0, 0); ovX.clearRect(0, 0, ovC.width, ovC.height);
  ovX.setTransform(DPR, 0, 0, DPR, 0, 0);
  if (S.sel.length) {
    const b = unionBox(S.sel);
    if (b) {
      const [ax, ay] = toScreen(b[0], b[1]), [bx, by] = toScreen(b[2], b[3]);
      ovX.strokeStyle = '#0071E3'; ovX.lineWidth = 1.5; ovX.setLineDash([6, 4]);
      ovX.strokeRect(ax - 6, ay - 6, bx - ax + 12, by - ay + 12); ovX.setLineDash([]);
    }
  }
  const fk = 1 - (performance.now() - flashT) / 350;
  if (fk > 0 && live) {
    const b = bbox(live), [ax, ay] = toScreen(b[0], b[1]), [bx, by] = toScreen(b[2], b[3]);
    ovX.strokeStyle = `rgba(0,113,227,${0.45 * fk})`; ovX.lineWidth = 2;
    ovX.beginPath(); ovX.roundRect(ax - 8, ay - 8, bx - ax + 16, by - ay + 16, 10); ovX.stroke(); req();
  }
  if (act && act.type === 'marquee') {
    const [ax, ay] = toScreen(act.x1, act.y1), [bx, by] = toScreen(act.x2, act.y2);
    ovX.fillStyle = 'rgba(0,113,227,.08)'; ovX.strokeStyle = '#0071E3'; ovX.lineWidth = 1;
    ovX.fillRect(ax, ay, bx - ax, by - ay); ovX.strokeRect(ax, ay, bx - ax, by - ay);
  }
  if (laser.length || laserOn) {
    const now = performance.now(), life = 650;
    laser = laser.filter((q) => now - q.t < life);
    ovX.lineCap = 'round'; ovX.lineJoin = 'round'; ovX.shadowColor = '#ff2d2d'; ovX.shadowBlur = 14;
    for (let i = 1; i < laser.length; i++) {
      const a = laser[i - 1], b = laser[i], k = 1 - (now - b.t) / life;
      const [ax, ay] = toScreen(a.x, a.y), [bx, by] = toScreen(b.x, b.y);
      ovX.strokeStyle = `rgba(255,40,40,${k})`; ovX.lineWidth = 2 + 5 * k;
      ovX.beginPath(); ovX.moveTo(ax, ay); ovX.lineTo(bx, by); ovX.stroke();
    }
    if (hover && (laserOn || S.tool === 'laser')) {
      ovX.fillStyle = '#ff2d2d'; ovX.beginPath(); ovX.arc(hover[0], hover[1], 6, 0, Math.PI * 2); ovX.fill();
    }
    ovX.shadowBlur = 0;
  } else if (hover && S.tool === 'laser') {
    ovX.shadowColor = '#ff2d2d'; ovX.shadowBlur = 14; ovX.fillStyle = '#ff2d2d';
    ovX.beginPath(); ovX.arc(hover[0], hover[1], 6, 0, Math.PI * 2); ovX.fill(); ovX.shadowBlur = 0;
  }
  if (hover && (S.tool === 'eraser' || (act && act.tempEraser))) {
    const r = WIDTHS.eraser.v / 2;
    ovX.lineWidth = 1.5; ovX.strokeStyle = 'rgba(0,0,0,.55)'; ovX.fillStyle = 'rgba(255,255,255,.35)';
    ovX.beginPath(); ovX.arc(hover[0], hover[1], r, 0, Math.PI * 2); ovX.fill(); ovX.stroke();
    ovX.strokeStyle = 'rgba(255,255,255,.8)'; ovX.lineWidth = 1;
    ovX.beginPath(); ovX.arc(hover[0], hover[1], r - 1.5, 0, Math.PI * 2); ovX.stroke();
  }
}

function resize() {
  DPR = window.devicePixelRatio || 1; W = window.innerWidth; H = window.innerHeight;
  for (const c of [bgC, inkC, ovC, cacheC]) { c.width = Math.round(W * DPR); c.height = Math.round(H * DPR); }
  for (const c of [bgC, inkC, ovC]) { c.style.width = W + 'px'; c.style.height = H + 'px'; }
  cacheValid = false; req();
}

/* ---------- Historial ---------- */
function snap() { const p = P(); p.undo.push(JSON.stringify(p.items)); if (p.undo.length > 300) p.undo.shift(); p.redo = []; }
function undo() { commitEditor(); const p = P(); if (!p.undo.length) return; p.redo.push(JSON.stringify(p.items)); p.items = JSON.parse(p.undo.pop()); S.sel = []; changed(); }
function redo() { commitEditor(); const p = P(); if (!p.redo.length) return; p.undo.push(JSON.stringify(p.items)); p.items = JSON.parse(p.redo.pop()); S.sel = []; changed(); }
let saveTimer = 0, dirty = false;
function changed() {
  cacheValid = false; dirty = true; req(); updateHistoryUI(); setTitle();
  clearTimeout(saveTimer); saveTimer = setTimeout(autosave, 700);
}
function serialize() {
  return JSON.stringify({ app: 'pizarra-matematica', version: 1, cur, pages: doc.pages.map((p) => ({ bg: p.bg, board: p.board, view: p.view, items: p.items })) });
}
function autosave() { try { localStorage.setItem('mi-pizarra-autosave', serialize()); localStorage.setItem('mi-pizarra-name', filePath || ''); } catch (_) {} }
function loadText(text, path, quiet) {
  try {
    const d = JSON.parse(text);
    if (!d || !Array.isArray(d.pages) || !d.pages.length) throw 0;
    doc = { pages: d.pages.map((p) => ({ bg: BGS.some((b) => b[0] === p.bg) ? p.bg : 'grid', board: BOARDS[p.board] ? p.board : 'white', items: Array.isArray(p.items) ? p.items : [], undo: [], redo: [], view: p.view && isFinite(p.view.s) ? p.view : null })) };
    cur = clamp(d.cur | 0, 0, doc.pages.length - 1); filePath = path || null; S.sel = []; dirty = false;
    syncColorToBoard(); afterPageChange(); if (!quiet) toast('Pizarra abierta');
    return true;
  } catch (_) { if (!quiet) toast('No se pudo abrir: archivo no válido'); return false; }
}
function setTitle() {
  const name = filePath || 'Sin título';
  document.title = `${dirty && filePath ? '• ' : ''}${name} — mi-pizarra`;
}

/* ---------- Puntero ---------- */
function setCursor() {
  const c = { select: 'default', hand: 'grab', text: 'text', eraser: 'none', laser: 'none' }[S.tool] || 'crosshair';
  ovC.style.cursor = spaceDown ? 'grab' : c;
}
function startPan(e) { act = { type: 'pan', id: e.pointerId, sx: e.clientX, sy: e.clientY, v0: { ...view() } }; ovC.style.cursor = 'grabbing'; }
function startPinch() {
  const [a, b] = [...touches.values()];
  return { type: 'pinch', d: Math.hypot(a.x - b.x, a.y - b.y) || 1, m: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, v0: { ...view() } };
}
function doPinch() {
  const [a, b] = [...touches.values()]; if (!b) return;
  const d = Math.hypot(a.x - b.x, a.y - b.y), m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  const v = view(), ns = clamp(act.v0.s * d / act.d, 0.15, 8), k = ns / act.v0.s;
  v.s = ns; v.x = m.x - (act.m.x - act.v0.x) * k; v.y = m.y - (act.m.y - act.v0.y) * k;
  cacheValid = false; updateZoomUI(); req();
}

ovC.addEventListener('pointerdown', (e) => {
  closePops();
  if (edState) { commitEditor(); if (S.tool === 'text') { e.preventDefault(); return; } }
  if (e.pointerType === 'pen') penSeen = true;
  if (e.pointerType === 'touch') {
    touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (touches.size === 2) { live = null; useCache = false; laserOn = false; act = startPinch(); req(); return; }
    if (touches.size > 2) return;
    if (penSeen) { ovC.setPointerCapture(e.pointerId); startPan(e); return; }
  }
  ovC.setPointerCapture(e.pointerId);
  hover = [e.clientX, e.clientY];
  if (e.button === 1 || e.button === 2 || spaceDown || S.tool === 'hand') { startPan(e); return; }
  const penEraser = e.pointerType === 'pen' && (e.button === 5 || (e.buttons & 32));
  if (e.button !== 0 && !penEraser) return;
  const tool = penEraser ? 'eraser' : S.tool;
  const v = view(); const [wx, wy] = toWorld(e.clientX, e.clientY);
  const id = e.pointerId;
  switch (tool) {
    case 'pen': case 'hl': {
      const hl = tool === 'hl';
      live = { t: 'stroke', c: hl ? S.hlColor : S.color, w: r2(WIDTHS[tool].v / v.s), pts: [[r2(wx), r2(wy), pr(e)]] };
      if (hl) live.hl = 1; if (e.pointerType === 'pen') live.pr = 1;
      act = { type: 'draw', id, assist: true, sm: [wx, wy], raw: [wx, wy], hx: e.clientX, hy: e.clientY, last: e };
      armHold(); useCache = true; cacheValid = false; break;
    }
    case 'eraser':
      if (S.eraserMode === 'stroke') { act = { type: 'erase', id, did: false, tempEraser: penEraser }; eraseAt(wx, wy); }
      else { live = { t: 'stroke', er: 1, c: '#000', w: r2(WIDTHS.eraser.v / v.s), pts: [[r2(wx), r2(wy), 0.5]] }; act = { type: 'draw', id, tempEraser: penEraser }; useCache = true; cacheValid = false; }
      break;
    case 'line': case 'arrow': case 'rect': case 'ellipse': case 'triangle': case 'plane': case 'func': {
      const t = tool === 'func' ? 'plane' : tool;
      let x = wx, y = wy; if (t === 'plane') { x = Math.round(x / GRID) * GRID; y = Math.round(y / GRID) * GRID; }
      live = { t, x1: x, y1: y, x2: x, y2: y, c: S.color, w: r2(WIDTHS.shape.v / v.s) };
      if (t === 'plane') { live.grid = true; live.fx = []; live.u = GRID; live.kx = 1; live.ky = 1; live.w = Math.max(live.w, 2); }
      act = { type: 'shape', tool, id, sx: e.clientX, sy: e.clientY, wx, wy }; useCache = true; cacheValid = false; break;
    }
    case 'text': {
      e.preventDefault();
      const h = hitTest(wx, wy, 4 / v.s, 'text');
      openEditor(h ? { item: h } : { x: wx, y: wy }); break;
    }
    case 'laser': act = { type: 'laser', id }; laserOn = true; laser.push({ x: wx, y: wy, t: performance.now() }); break;
    case 'select': selectDown(e, wx, wy); break;
  }
  req();
});

ovC.addEventListener('pointermove', (e) => {
  hover = [e.clientX, e.clientY];
  if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
    touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (act && act.type === 'pinch') { doPinch(); return; }
  }
  if (!act) { if (S.tool === 'eraser' || S.tool === 'laser') req(); return; }
  const v = view();
  if (act.type === 'pan') {
    if (e.pointerId !== act.id) return;
    v.x = act.v0.x + (e.clientX - act.sx); v.y = act.v0.y + (e.clientY - act.sy); cacheValid = false; req(); return;
  }
  if (e.pointerId !== act.id) return;
  let evs = e.getCoalescedEvents ? e.getCoalescedEvents() : null; if (!evs || !evs.length) evs = [e];
  const [wx, wy] = toWorld(e.clientX, e.clientY);
  switch (act.type) {
    case 'draw': {
      const f = act.assist ? SMOOTH[S.smooth] : 0;
      for (const ev of evs) {
        let [x, y] = toWorld(ev.clientX, ev.clientY);
        if (act.raw) act.raw = [x, y];
        if (f) { act.sm[0] += (x - act.sm[0]) * (1 - f); act.sm[1] += (y - act.sm[1]) * (1 - f); [x, y] = act.sm; }
        const l = live.pts[live.pts.length - 1];
        if (Math.hypot(x - l[0], y - l[1]) < 0.8 / v.s) { if (live.pr) l[2] = Math.max(l[2], pr(ev)); continue; }
        live.pts.push([r2(x), r2(y), pr(ev)]);
      }
      if (act.assist && Math.hypot(e.clientX - act.hx, e.clientY - act.hy) > 4) { act.hx = e.clientX; act.hy = e.clientY; armHold(); }
      break;
    }
    case 'snapped':
      if (act.adjust) {
        let x = wx, y = wy; const dx = x - live.x1, dy = y - live.y1, ang = Math.atan2(dy, dx), l = Math.hypot(dx, dy);
        const st = Math.PI / 4, sn = Math.round(ang / st) * st;
        if (Math.abs(ang - sn) < 0.07) { x = live.x1 + l * Math.cos(sn); y = live.y1 + l * Math.sin(sn); }
        if (live.t === 'stroke') { live.pts[1][0] = r2(x); live.pts[1][1] = r2(y); } else { live.x2 = r2(x); live.y2 = r2(y); }
      }
      break;
    case 'erase': for (const ev of evs) { const [x, y] = toWorld(ev.clientX, ev.clientY); eraseAt(x, y); } break;
    case 'shape': {
      let x = wx, y = wy;
      if (live.t === 'plane') { x = Math.round(x / GRID) * GRID; y = Math.round(y / GRID) * GRID; }
      if (e.shiftKey) [x, y] = constrain(live, x, y);
      live.x2 = r2(x); live.y2 = r2(y); break;
    }
    case 'laser': for (const ev of evs) { const [x, y] = toWorld(ev.clientX, ev.clientY); laser.push({ x, y, t: performance.now() }); } break;
    case 'marquee': act.x2 = wx; act.y2 = wy; break;
    case 'move': {
      const dx = wx - act.lx, dy = wy - act.ly;
      if (!act.moved) { if (Math.hypot(dx, dy) * v.s < 2) return; snap(); act.moved = true; }
      for (const it of S.sel) moveItem(it, dx, dy);
      act.lx = wx; act.ly = wy; cacheValid = false; break;
    }
  }
  req();
});

function endPointer(e) {
  if (e.pointerType === 'touch') {
    touches.delete(e.pointerId);
    if (act && act.type === 'pinch') { if (touches.size < 2) act = null; return; }
  }
  if (!act || e.pointerId !== act.id) return;
  const a = act; act = null;
  switch (a.type) {
    case 'pan': setCursor(); break;
    case 'draw':
      clearTimeout(holdTimer);
      if (live && live.pts.length && e.type !== 'pointercancel') {
        if (a.assist && S.smooth && a.raw && live.pts.length > 2) {
          const l = live.pts[live.pts.length - 1];
          if (Math.hypot(a.raw[0] - l[0], a.raw[1] - l[1]) > 0.5 / view().s) live.pts.push([r2(a.raw[0]), r2(a.raw[1]), l[2]]);
          smoothPts(live.pts, S.smooth);
        }
        snap(); P().items.push(live);
      }
      live = null; useCache = false; changed(); break;
    case 'snapped':
      if (live && e.type !== 'pointercancel') { snap(); P().items.push(live); }
      live = null; useCache = false; changed(); break;
    case 'erase': if (a.did) changed(); break;
    case 'shape': finishShape(a, e); break;
    case 'laser': laserOn = false; break;
    case 'marquee': {
      const r = [Math.min(a.x1, a.x2), Math.min(a.y1, a.y2), Math.max(a.x1, a.x2), Math.max(a.y1, a.y2)];
      const found = P().items.filter((it) => { if (it.er) return false; const b = bbox(it); return b[0] <= r[2] && b[2] >= r[0] && b[1] <= r[3] && b[3] >= r[1]; });
      S.sel = a.add ? [...new Set([...S.sel, ...found])] : found; break;
    }
    case 'move': if (a.moved) changed(); break;
  }
  req();
}
ovC.addEventListener('pointerup', endPointer);
ovC.addEventListener('pointercancel', endPointer);
ovC.addEventListener('pointerleave', () => { if (!act) { hover = null; req(); } });
ovC.addEventListener('contextmenu', (e) => e.preventDefault());
ovC.addEventListener('dblclick', (e) => {
  if (S.tool !== 'select' && S.tool !== 'func' && S.tool !== 'plane') return;
  const [wx, wy] = toWorld(e.clientX, e.clientY);
  const it = hitTest(wx, wy, 4 / view().s, 'plane');
  if (it) { act = null; openFuncModal(it, false); }
});
ovC.addEventListener('wheel', (e) => {
  e.preventDefault();
  const v = view();
  if (e.ctrlKey || e.metaKey) { zoomAt(Math.exp(-clamp(e.deltaY, -60, 60) * 0.008), e.clientX, e.clientY); return; }
  if (e.shiftKey && !e.deltaX) v.x -= e.deltaY; else { v.x -= e.deltaX; v.y -= e.deltaY; }
  cacheValid = false; req();
}, { passive: false });

function constrain(it, x, y) {
  const dx = x - it.x1, dy = y - it.y1;
  if (it.t === 'line' || it.t === 'arrow') {
    const step = Math.PI / 12, a = Math.round(Math.atan2(dy, dx) / step) * step, l = Math.hypot(dx, dy);
    return [it.x1 + l * Math.cos(a), it.y1 + l * Math.sin(a)];
  }
  const s = Math.max(Math.abs(dx), Math.abs(dy));
  return [it.x1 + (dx < 0 ? -s : s), it.y1 + (dy < 0 ? -s : s)];
}

function eraseAt(x, y) {
  const items = P().items, r = WIDTHS.eraser.v / 2 / view().s;
  for (let i = items.length - 1; i >= 0; i--) {
    if (hit(items[i], x, y, r)) {
      if (!act.did) { snap(); act.did = true; }
      const [it] = items.splice(i, 1); S.sel = S.sel.filter((s) => s !== it); cacheValid = false;
    }
  }
}

function finishShape(a, e) {
  const it = live; live = null; useCache = false;
  const tiny = Math.hypot(e.clientX - a.sx, e.clientY - a.sy) < 8;
  if (it.t === 'plane') {
    if (tiny || Math.abs(it.x2 - it.x1) < GRID * 2 || Math.abs(it.y2 - it.y1) < GRID * 2) {
      const cx = Math.round(a.wx / GRID) * GRID, cy = Math.round(a.wy / GRID) * GRID;
      Object.assign(it, { x1: cx - 6 * GRID, y1: cy - 4 * GRID, x2: cx + 6 * GRID, y2: cy + 4 * GRID });
    }
    if (a.tool === 'func') { req(); openFuncModal(it, true); return; }
  } else if (tiny) { req(); return; }
  snap(); P().items.push(it); changed();
}

function selectDown(e, wx, wy) {
  const v = view(), pad = 8 / v.s;
  const b = S.sel.length ? unionBox(S.sel) : null;
  if (b && !e.shiftKey && wx >= b[0] - pad && wx <= b[2] + pad && wy >= b[1] - pad && wy <= b[3] + pad) {
    act = { type: 'move', id: e.pointerId, lx: wx, ly: wy, moved: false }; return;
  }
  const h = hitTest(wx, wy, 6 / v.s);
  if (h) {
    if (e.shiftKey) S.sel = S.sel.includes(h) ? S.sel.filter((s) => s !== h) : [...S.sel, h];
    else S.sel = [h];
    act = { type: 'move', id: e.pointerId, lx: wx, ly: wy, moved: false }; return;
  }
  if (!e.shiftKey) S.sel = [];
  act = { type: 'marquee', id: e.pointerId, x1: wx, y1: wy, x2: wx, y2: wy, add: e.shiftKey };
}

/* ---------- Corrección de trazo ---------- */
let holdTimer = 0;
function armHold() {
  clearTimeout(holdTimer);
  if (!S.shapeAssist) return;
  holdTimer = setTimeout(() => {
    if (!act || act.type !== 'draw' || !act.assist || !live) return;
    const shape = recognize(live);
    if (!shape) return;
    live = shape; act.type = 'snapped'; act.adjust = shape.t === 'line' || (shape.t === 'stroke' && shape.pts.length === 2);
    if (navigator.vibrate) try { navigator.vibrate(8); } catch (_) {}
    flash(); req();
  }, HOLD_MS);
}
let flashT = 0;
function flash() { flashT = performance.now(); req(); }
function smoothPts(pts, passes) {
  if (pts.length < 4) return;
  for (let k = 0; k < passes; k++) {
    const src = pts.map((p) => p.slice());
    for (let i = 1; i < pts.length - 1; i++) {
      pts[i][0] = r2(src[i - 1][0] * 0.25 + src[i][0] * 0.5 + src[i + 1][0] * 0.25);
      pts[i][1] = r2(src[i - 1][1] * 0.25 + src[i][1] * 0.5 + src[i + 1][1] * 0.25);
    }
  }
}
function rdp(pts, eps) {
  if (pts.length < 3) return pts.slice();
  const a = pts[0], b = pts[pts.length - 1]; let idx = -1, dmax = 0;
  for (let i = 1; i < pts.length - 1; i++) { const d = segDist(pts[i][0], pts[i][1], a[0], a[1], b[0], b[1]); if (d > dmax) { dmax = d; idx = i; } }
  if (dmax <= eps) return [a, b];
  const l = rdp(pts.slice(0, idx + 1), eps), r = rdp(pts.slice(idx), eps);
  return l.slice(0, -1).concat(r);
}
function squarePoly(q, closed) {
  const n = q.length, lim = Math.tan(6 * Math.PI / 180);
  for (let i = 0; i < n - (closed ? 0 : 1); i++) {
    const a = q[i], b = q[(i + 1) % n], dx = b[0] - a[0], dy = b[1] - a[1];
    if (Math.abs(dy) <= Math.abs(dx) * lim) { const m = (a[1] + b[1]) / 2; a[1] = m; b[1] = m; }
    else if (Math.abs(dx) <= Math.abs(dy) * lim) { const m = (a[0] + b[0]) / 2; a[0] = m; b[0] = m; }
  }
  return q.map((p) => [r2(p[0]), r2(p[1])]);
}
function recognize(st) {
  const pts = st.pts.map((p) => [p[0], p[1]]);
  if (pts.length < 3) return null;
  const v = view();
  let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  if (len * v.s < 25) return null;
  const b = [Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1])), Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1]))];
  const bw = b[2] - b[0], bh = b[3] - b[1], diag = Math.hypot(bw, bh);
  const first = pts[0], last = pts[pts.length - 1], gap = Math.hypot(last[0] - first[0], last[1] - first[1]);
  const base = { c: st.c, w: st.w };
  const asLine = (x1, y1, x2, y2) => {
    const dx = x2 - x1, dy = y2 - y1, ang = Math.atan2(dy, dx), l = Math.hypot(dx, dy), stp = Math.PI / 4, sn = Math.round(ang / stp) * stp;
    if (Math.abs(ang - sn) < 0.1) { x2 = x1 + l * Math.cos(sn); y2 = y1 + l * Math.sin(sn); }
    if (st.hl) return { t: 'stroke', hl: 1, c: st.c, w: st.w, pts: [[r2(x1), r2(y1), 0.5], [r2(x2), r2(y2), 0.5]] };
    return { t: 'line', ...base, x1: r2(x1), y1: r2(y1), x2: r2(x2), y2: r2(y2) };
  };
  // Línea: casi todo el recorrido va en línea recta
  let dev = 0; for (const p of pts) dev = Math.max(dev, segDist(p[0], p[1], first[0], first[1], last[0], last[1]));
  if (gap > len * 0.8 && dev < Math.max(gap * 0.09, 4 / v.s)) return asLine(first[0], first[1], last[0], last[1]);
  if (st.hl) return null;
  const closed = gap < Math.max(len * 0.18, diag * 0.22);
  if (closed && bw * v.s > 15 && bh * v.s > 15) {
    // Elipse: distancia radial normalizada cercana a 1
    const cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2, rx = bw / 2, ry = bh / 2;
    let err = 0; for (const p of pts) err += Math.abs(Math.hypot((p[0] - cx) / rx, (p[1] - cy) / ry) - 1);
    err /= pts.length;
    // Polígono por simplificación
    const ring = pts.concat([first]);
    let poly = rdp(ring, diag * 0.075);
    if (poly.length > 2 && Math.hypot(poly[0][0] - poly[poly.length - 1][0], poly[0][1] - poly[poly.length - 1][1]) < diag * 0.25) poly = poly.slice(0, -1);
    // Une vértices muy cercanos
    poly = poly.filter((p, i) => { const q = poly[(i + 1) % poly.length]; return Math.hypot(p[0] - q[0], p[1] - q[1]) > diag * 0.12; });
    const isTri = poly.length === 3, isQuad = poly.length === 4;
    if (err < 0.13 && !isTri && !(isQuad && err > 0.09)) {
      let x1 = b[0], y1 = b[1], x2 = b[2], y2 = b[3];
      if (Math.abs(bw - bh) < Math.max(bw, bh) * 0.15) { const r = (bw + bh) / 4; x1 = cx - r; x2 = cx + r; y1 = cy - r; y2 = cy + r; }
      return { t: 'ellipse', ...base, x1: r2(x1), y1: r2(y1), x2: r2(x2), y2: r2(y2) };
    }
    if (isQuad) {
      const axis = poly.every((p, i) => { const q = poly[(i + 1) % 4], a = Math.abs(Math.atan2(q[1] - p[1], q[0] - p[0])) % (Math.PI / 2); return a < 0.2 || a > Math.PI / 2 - 0.2; });
      if (axis) {
        let x1 = b[0], y1 = b[1], x2 = b[2], y2 = b[3];
        if (Math.abs(bw - bh) < Math.max(bw, bh) * 0.1) { const s2 = (bw + bh) / 2; x2 = x1 + s2; y2 = y1 + s2; }
        return { t: 'rect', ...base, x1: r2(x1), y1: r2(y1), x2: r2(x2), y2: r2(y2) };
      }
      return { t: 'poly', ...base, closed: true, pts: squarePoly(poly.map((p) => p.slice()), true) };
    }
    if (isTri || poly.length === 5 || poly.length === 6) return { t: 'poly', ...base, closed: true, pts: squarePoly(poly.map((p) => p.slice()), true) };
    return null;
  }
  // Trazo abierto con pocos tramos rectos (ángulos, quebradas)
  const poly = rdp(pts, Math.max(diag * 0.05, 3 / v.s));
  if (poly.length >= 3 && poly.length <= 5) {
    let e2 = 0; for (const p of pts) { let m = Infinity; for (let i = 1; i < poly.length; i++) m = Math.min(m, segDist(p[0], p[1], poly[i - 1][0], poly[i - 1][1], poly[i][0], poly[i][1])); e2 += m; }
    if (e2 / pts.length < diag * 0.025) return { t: 'poly', ...base, closed: false, pts: squarePoly(poly.map((p) => p.slice()), false) };
  }
  return null;
}

/* ---------- Zoom ---------- */
function zoomAt(f, cx, cy) {
  const v = view(), ns = clamp(v.s * f, 0.15, 8), k = ns / v.s;
  v.x = cx - (cx - v.x) * k; v.y = cy - (cy - v.y) * k; v.s = ns;
  cacheValid = false; updateZoomUI(); req();
}
function updateZoomUI() { $('#zoomLabel').textContent = Math.round(view().s * 100) + '%'; }

/* ---------- Editor de texto ---------- */
const ed = $('#editor'); let edState = null;
function openEditor(o) {
  const p = P(), v = view();
  let st;
  if (o.item) {
    const idx = p.items.indexOf(o.item), before = JSON.stringify(p.items);
    p.items.splice(idx, 1);
    st = { x: o.item.x, y: o.item.y, c: o.item.c, size: o.item.size, orig: o.item.s, c0: o.item.c, size0: o.item.size, before, idx };
  } else {
    const size = r2(WIDTHS.text.v / v.s);
    st = { x: o.x, y: o.y - size * 0.65, c: S.color, size, orig: '', before: null, idx: -1 };
  }
  edState = st; ed.value = st.orig; ed.style.color = st.c; ed.style.display = 'block';
  cacheValid = false; layoutEditor(); req();
  setTimeout(() => { ed.focus(); ed.setSelectionRange(ed.value.length, ed.value.length); }, 0);
}
function layoutEditor() {
  if (!edState) return;
  const v = view(), [sx, sy] = toScreen(edState.x, edState.y), fs = edState.size * v.s;
  measureX.font = FONT(fs);
  const lines = ed.value.split('\n');
  const w = Math.max(...lines.map((l) => measureX.measureText(l).width)) + fs * 0.8;
  Object.assign(ed.style, { left: sx - 2 + 'px', top: sy - 1 + 'px', fontSize: fs + 'px', lineHeight: fs * 1.25 + 'px', width: Math.max(fs * 1.2, w) + 'px', height: lines.length * fs * 1.25 + 2 + 'px', color: edState.c });
}
function commitEditor() {
  if (!edState) return;
  const st = edState; edState = null; ed.style.display = 'none'; ed.blur();
  const s = ed.value.replace(/\s+$/, ''); const p = P();
  const item = { t: 'text', x: r2(st.x), y: r2(st.y), s, c: st.c, size: st.size };
  if (st.before !== null) {
    if (s === st.orig && st.c === st.c0 && st.size === st.size0) { p.items.splice(st.idx, 0, { ...item, s: st.orig }); cacheValid = false; req(); return; }
    p.undo.push(st.before); p.redo = [];
    if (s) p.items.splice(st.idx, 0, item);
  } else {
    if (!s) { req(); return; }
    snap(); p.items.push(item);
  }
  changed();
}
ed.addEventListener('input', layoutEditor);
ed.addEventListener('pointerdown', (e) => e.stopPropagation());

/* ---------- Funciones (modal) ---------- */
const K_OPTS = [0.1, 0.25, 0.5, 1, 2, 5, 10, 20, 50, 100];
for (const id of ['#fxKx', '#fxKy']) $(id).innerHTML = K_OPTS.map((k) => `<option value="${k}">${String(k).replace('.', ',')}</option>`).join('');
let fxTarget = null;
function fxRow(e = '', c) {
  const row = document.createElement('div'); row.className = 'fxrow';
  row.innerHTML = `<input type="color"><span>y =</span><input type="text" placeholder="por ejemplo: x^2 - 2x + 1"><button class="x" title="Quitar">×</button>`;
  row.querySelector('[type=color]').value = c || FX_COLORS[$('#fxList').children.length % FX_COLORS.length];
  row.querySelector('[type=text]').value = e;
  row.querySelector('.x').onclick = () => { row.remove(); if (!$('#fxList').children.length) $('#fxList').appendChild(fxRow()); };
  row.querySelector('[type=text]').addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); fxOk(); } });
  return row;
}
function openFuncModal(it, isNew) {
  fxTarget = { it, isNew };
  const list = $('#fxList'); list.innerHTML = '';
  (it.fx && it.fx.length ? it.fx : [{ e: '', c: FX_COLORS[0] }]).forEach((f) => list.appendChild(fxRow(f.e, f.c)));
  $('#fxGrid').checked = it.grid !== false;
  $('#fxKx').value = String(it.kx || 1); $('#fxKy').value = String(it.ky || 1);
  $('#fxErr').textContent = '';
  $('#modalBg').classList.add('show');
  setTimeout(() => list.querySelector('[type=text]').focus(), 30);
}
function closeModal() { if (document.activeElement) document.activeElement.blur(); $('#modalBg').classList.remove('show'); fxTarget = null; req(); }
function fxOk() {
  if (!fxTarget) return;
  const fx = [];
  for (const row of $('#fxList').children) {
    const e = row.querySelector('[type=text]').value.trim(); if (!e) continue;
    if (!compile(e)) { $('#fxErr').textContent = `No entiendo «${e}». Usa x, + − * / ^, paréntesis y funciones como sin, cos, sqrt, abs, ln, log.`; return; }
    fx.push({ e, c: row.querySelector('[type=color]').value });
  }
  const { it, isNew } = fxTarget;
  if (!isNew) snap();
  it.fx = fx; it.grid = $('#fxGrid').checked; it.kx = +$('#fxKx').value; it.ky = +$('#fxKy').value;
  if (isNew) { snap(); P().items.push(it); }
  closeModal(); changed();
}
$('#fxAdd').onclick = () => { const r = fxRow(); $('#fxList').appendChild(r); r.querySelector('[type=text]').focus(); };
$('#fxOk').onclick = fxOk;
$('#fxCancel').onclick = closeModal;
$('#modalBg').addEventListener('pointerdown', (e) => { if (e.target.id === 'modalBg') closeModal(); });

/* ---------- Páginas ---------- */
function afterPageChange() { syncColorToBoard(); S.sel = []; live = null; act = null; cacheValid = false; updatePageUI(); updateHistoryUI(); updateZoomUI(); updateBgPop(); setTitle(); req(); }
function goPage(i) { commitEditor(); const n = clamp(i, 0, doc.pages.length - 1); if (n === cur) return; cur = n; syncColorToBoard(); afterPageChange(); autosave(); }
function addPage() { commitEditor(); const np = mkPage(P()); np.view = null; doc.pages.splice(cur + 1, 0, np); cur++; afterPageChange(); changed(); toast(`Página ${cur + 1} creada`); }
function dupPage() { commitEditor(); const p = P(); const np = mkPage(p); np.items = JSON.parse(JSON.stringify(p.items)); doc.pages.splice(cur + 1, 0, np); cur++; afterPageChange(); changed(); toast('Página duplicada'); }
function delPage() {
  commitEditor();
  if (doc.pages.length === 1) { if (P().items.length) { snap(); P().items = []; S.sel = []; changed(); toast('Página limpiada'); } return; }
  if (P().items.length && !confirm(`¿Eliminar la página ${cur + 1}? Esta acción no se puede deshacer.`)) return;
  doc.pages.splice(cur, 1); cur = Math.min(cur, doc.pages.length - 1); afterPageChange(); changed();
}
function updatePageUI() {
  $('#pageLabel').textContent = `${cur + 1} / ${doc.pages.length}`;
  $('#pgPrev').disabled = cur === 0; $('#pgNext').disabled = cur === doc.pages.length - 1;
}

/* ---------- Exportar ---------- */
function renderPageCanvas(p, scale = 2) {
  let b = unionBox(p.items.filter((i) => !i.er));
  const v0 = p.view || { x: W / 2, y: H / 2, s: 1 };
  if (!b) b = [-v0.x / v0.s, -v0.y / v0.s, (W - v0.x) / v0.s, (H - v0.y) / v0.s];
  else { const m = 40; b = [b[0] - m, b[1] - m, b[2] + m, b[3] + m]; }
  const bw = b[2] - b[0], bh = b[3] - b[1];
  let sc = scale; const maxPx = 6000; if (Math.max(bw, bh) * sc > maxPx) sc = maxPx / Math.max(bw, bh);
  const cw = Math.max(1, Math.ceil(bw * sc)), ch = Math.max(1, Math.ceil(bh * sc));
  const c1 = document.createElement('canvas'); c1.width = cw; c1.height = ch;
  const c2 = document.createElement('canvas'); c2.width = cw; c2.height = ch;
  const x1 = c1.getContext('2d'), x2 = c2.getContext('2d');
  const v = { x: -b[0] * sc, y: -b[1] * sc, s: sc };
  drawBg(x1, p, v, cw, ch, 1);
  x2.setTransform(sc, 0, 0, sc, v.x, v.y);
  for (const it of p.items) drawItem(x2, it);
  x1.setTransform(1, 0, 0, 1, 0, 0); x1.drawImage(c2, 0, 0);
  return c1;
}
function b64ToBytes(b64) { const bin = atob(b64); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; }
function buildPDF(pages) {
  const parts = []; let len = 0; const offs = [];
  const enc = (s) => { const u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i) & 255; return u; };
  const push = (x) => { const u = typeof x === 'string' ? enc(x) : x; parts.push(u); len += u.length; };
  const obj = (n, body) => { offs[n] = len; push(`${n} 0 obj\n${body}\nendobj\n`); };
  push('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
  const n = pages.length, total = 3 + n * 3;
  obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
  obj(2, `<< /Type /Pages /Count ${n} /Kids [${pages.map((_, i) => `${3 + i * 3} 0 R`).join(' ')}] >>`);
  pages.forEach((pg, i) => {
    const po = 3 + i * 3, co = po + 1, io = po + 2;
    const PW = 842, PH = Math.round(pg.h * PW / pg.w * 100) / 100;
    obj(po, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PW} ${PH}] /Resources << /XObject << /Im0 ${io} 0 R >> >> /Contents ${co} 0 R >>`);
    const content = `q ${PW} 0 0 ${PH} 0 0 cm /Im0 Do Q`;
    obj(co, `<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
    offs[io] = len;
    push(`${io} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${pg.w} /Height ${pg.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${pg.bytes.length} >>\nstream\n`);
    push(pg.bytes); push('\nendstream\nendobj\n');
  });
  const xref = len;
  let x = `xref\n0 ${total}\n0000000000 65535 f \n`;
  for (let i = 1; i < total; i++) x += String(offs[i]).padStart(10, '0') + ' 00000 n \n';
  push(x + `trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  const out = new Uint8Array(len); let o = 0; for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}
const PICK = { png: { description: 'Imagen PNG', accept: { 'image/png': ['.png'] } }, pdf: { description: 'Documento PDF', accept: { 'application/pdf': ['.pdf'] } }, pizarra: { description: 'mi-pizarra', accept: { 'application/json': ['.pizarra'] } } };
async function deliver(bytes, name, ext, mime) {
  if (window.showSaveFilePicker) {
    try {
      const h = await window.showSaveFilePicker({ suggestedName: name, types: [PICK[ext]] });
      const w = await h.createWritable(); await w.write(bytes); await w.close();
      toast('Exportado: ' + h.name); return h;
    } catch (err) { if (err && err.name === 'AbortError') return null; }
  }
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([bytes], { type: mime })); a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000); toast('Descargado: ' + name); return null;
}
async function exportPNG() {
  commitEditor();
  const c = renderPageCanvas(P());
  const blob = await new Promise((r) => c.toBlob(r, 'image/png'));
  await deliver(new Uint8Array(await blob.arrayBuffer()), `${baseName()}-pagina-${cur + 1}.png`, 'png', 'image/png');
}
async function exportPDF() {
  commitEditor(); toast('Generando PDF…');
  const pages = doc.pages.map((p) => { const c = renderPageCanvas(p, 2); return { w: c.width, h: c.height, bytes: b64ToBytes(c.toDataURL('image/jpeg', 0.92).split(',')[1]) }; });
  await deliver(buildPDF(pages), `${baseName()}.pdf`, 'pdf', 'application/pdf');
}
const baseName = () => filePath || 'mi-pizarra';

/* ---------- Archivo ---------- */
let fileHandle = null;
async function save(as) {
  commitEditor();
  const data = serialize();
  if (window.showSaveFilePicker) {
    try {
      if (!fileHandle || as) fileHandle = await window.showSaveFilePicker({ suggestedName: (filePath || 'clase') + '.pizarra', types: [PICK.pizarra] });
      const w = await fileHandle.createWritable(); await w.write(data); await w.close();
      filePath = fileHandle.name.replace(/\.pizarra$/i, ''); dirty = false; setTitle(); autosave(); toast('Guardado ✓'); return;
    } catch (err) { if (err && err.name === 'AbortError') return; fileHandle = null; }
  }
  const name = (filePath || 'clase') + '.pizarra';
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' })); a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000); dirty = false; setTitle(); toast('Descargado: ' + name);
}
async function openFile() {
  commitEditor();
  if (window.showOpenFilePicker) {
    try {
      const [h] = await window.showOpenFilePicker({ types: [PICK.pizarra], multiple: false });
      const f = await h.getFile();
      if (loadText(await f.text(), f.name.replace(/\.(pizarra|json)$/i, ''))) fileHandle = h;
      return;
    } catch (err) { if (err && err.name === 'AbortError') return; }
  }
  $('#fileInput').click();
}
$('#fileInput').addEventListener('change', async (e) => { const f = e.target.files[0]; if (f) { fileHandle = null; loadText(await f.text(), f.name.replace(/\.(pizarra|json)$/i, '')); } e.target.value = ''; });
function newDoc() {
  commitEditor();
  if (!confirm('¿Crear una pizarra nueva? Lo que no hayas guardado en un archivo se perderá.')) return;
  doc = { pages: [mkPage()] }; cur = 0; filePath = null; fileHandle = null; dirty = false; afterPageChange(); changed();
}
function toggleFull() { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); }
function togglePresent() { document.body.classList.toggle('present'); toast(document.body.classList.contains('present') ? 'Modo presentación (Tab para salir)' : 'Modo normal'); }

/* ---------- Interfaz ---------- */
let toastT = 0;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1800); }

function buildTools() {
  const box = $('#tools'); box.innerHTML = '';
  for (const [id, title] of TOOLS) {
    const b = document.createElement('button'); b.className = 'ib'; b.dataset.tool = id; b.title = title;
    b.innerHTML = id === 'shapes' ? ico(S.lastShape) + '<i class="caret"></i>' : ico(id);
    b.onclick = (e) => {
      if (id === 'shapes') {
        if (SHAPES.some((s) => s[0] === S.tool)) { togglePop('#shapePop', b); return; }
        setTool(S.lastShape); return;
      }
      setTool(id);
    };
    box.appendChild(b);
  }
  const sp = $('#shapePop');
  sp.innerHTML = SHAPES.map(([id, name, k]) => `<button class="ib" data-shape="${id}" title="${name} (${k})">${ico(id)}</button>`).join('');
  sp.querySelectorAll('button').forEach((b) => (b.onclick = () => { setTool(b.dataset.shape); closePops(); }));
}
function setTool(t) {
  if (t !== 'text') commitEditor();
  if (SHAPES.some((s) => s[0] === t)) S.lastShape = t;
  S.tool = t; laserOn = false;
  if (t !== 'select') S.sel = [];
  const shapesBtn = $('#tools [data-tool=shapes]');
  shapesBtn.innerHTML = ico(S.lastShape) + '<i class="caret"></i>';
  document.querySelectorAll('#tools .ib').forEach((b) => b.classList.toggle('on', b.dataset.tool === t || (b.dataset.tool === 'shapes' && SHAPES.some((s) => s[0] === t))));
  $('#shapePop').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.shape === t));
  $('#symbols').classList.toggle('show', t === 'text');
  buildColors(); buildWidths(); setCursor(); req();
}
function buildColors() {
  const box = $('#colors'), c = toolColor();
  const disabled = ['eraser', 'hand', 'laser'].includes(S.tool);
  box.style.opacity = disabled ? 0.35 : 1; box.style.pointerEvents = disabled ? 'none' : '';
  const inPal = PALETTE.includes(c.toLowerCase());
  box.innerHTML = PALETTE.map((p) => `<button class="sw${p === c ? ' on' : ''}" style="background:${p}" data-c="${p}" title="${p}"></button>`).join('') +
    `<label class="sw custom${inPal ? '' : ' on'}" title="Otro color"${inPal ? '' : ` style="background:${c}"`}><input type="color" value="${c}"></label>`;
  box.querySelectorAll('[data-c]').forEach((b) => (b.onclick = () => setColor(b.dataset.c)));
  const inp = box.querySelector('input'); inp.oninput = () => setColor(inp.value, true); inp.onchange = () => setColor(inp.value);
}
function setColor(c, preview) {
  if (S.tool === 'hl') S.hlColor = c; else S.color = c;
  if (edState) { edState.c = c; layoutEditor(); }
  if (S.sel.length && !preview) {
    snap();
    for (const it of S.sel) it.c = c;
    changed();
  }
  if (!preview) buildColors();
}
function buildWidths() {
  const box = $('#widths'); const key = WKEY[S.tool];
  if (!key) { box.innerHTML = '<span class="muted">—</span>'; return; }
  const cfg = WIDTHS[key]; const maxPre = cfg.pre[cfg.pre.length - 1];
  box.innerHTML = cfg.pre.map((w) => { const d = Math.round(4 + (w / maxPre) * 14); return `<button class="wd${w === cfg.v ? ' on' : ''}" data-w="${w}" title="${w}"><span style="width:${d}px;height:${d}px"></span></button>`; }).join('') +
    `<input type="range" id="wRange" min="${cfg.min}" max="${cfg.max}" value="${cfg.v}"><span id="wVal">${cfg.v}</span>` +
    (S.tool === 'eraser' ? `<div class="seg"><button data-m="area" class="${S.eraserMode === 'area' ? 'on' : ''}" title="Borra lo que tocas, como una goma">Goma</button><button data-m="stroke" class="${S.eraserMode === 'stroke' ? 'on' : ''}" title="Borra trazos completos">Trazo</button></div>` : '');
  box.querySelectorAll('[data-w]').forEach((b) => (b.onclick = () => setWidth(+b.dataset.w)));
  const r = $('#wRange'); r.oninput = () => setWidth(+r.value, true); r.onchange = () => setWidth(+r.value);
  box.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => { S.eraserMode = b.dataset.m; buildWidths(); }));
}
function setWidth(w, preview) {
  const key = WKEY[S.tool]; if (!key) return;
  WIDTHS[key].v = w;
  if (edState && key === 'text') { edState.size = r2(w / view().s); layoutEditor(); }
  if (S.sel.length && !preview) {
    snap(); const v = view();
    for (const it of S.sel) { if (it.t === 'text') it.size = r2(WIDTHS.text.v / v.s); else if (!(it.t === 'stroke' && it.hl)) it.w = r2(w / v.s); }
    changed();
  }
  if (preview) { $('#wVal').textContent = w; req(); } else buildWidths();
}
function buildSymbols() {
  const box = $('#symbols');
  box.innerHTML = SYMBOLS.map((s) => `<button title="${s}">${s}</button>`).join('');
  box.querySelectorAll('button').forEach((b) => {
    b.onpointerdown = (e) => e.preventDefault();
    b.onclick = () => {
      if (!edState) { toast('Primero haz clic en la pizarra para escribir'); return; }
      let s = b.textContent, caret = null;
      if (s === '√( )') { s = '√()'; caret = 2; } else if (s === '( )²') { s = '()²'; caret = 1; }
      else if (['log', 'sen', 'cos', 'tan'].includes(s)) s += '(';
      const a = ed.selectionStart, z = ed.selectionEnd;
      ed.value = ed.value.slice(0, a) + s + ed.value.slice(z);
      const pos = a + (caret ?? s.length); ed.setSelectionRange(pos, pos); ed.focus(); layoutEditor();
    };
  });
}
function buildAssist() {
  const b = $('#btnAssist');
  b.innerHTML = ico('wand') + (S.shapeAssist || S.smooth ? '<i class="dot"></i>' : '');
  $('#optShape').checked = S.shapeAssist;
  document.querySelectorAll('#optSmooth button').forEach((x) => x.classList.toggle('on', +x.dataset.s === S.smooth));
  try { localStorage.setItem('mi-pizarra-opts', JSON.stringify({ shapeAssist: S.shapeAssist, smooth: S.smooth })); } catch (_) {}
}
$('#optShape').addEventListener('change', (e) => { S.shapeAssist = e.target.checked; buildAssist(); });
document.querySelectorAll('#optSmooth button').forEach((x) => (x.onclick = () => { S.smooth = +x.dataset.s; buildAssist(); }));
function updateHistoryUI() { $('#btnUndo').disabled = !P().undo.length; $('#btnRedo').disabled = !P().redo.length; }

function closePops() { document.querySelectorAll('.pop.show').forEach((p) => p.classList.remove('show')); }
function togglePop(sel, anchor) {
  const p = $(sel), open = p.classList.contains('show'); closePops(); if (open) return;
  p.classList.add('show');
  const r = anchor.getBoundingClientRect();
  p.style.top = r.bottom + 8 + 'px';
  p.style.left = clamp(r.left, 8, window.innerWidth - p.offsetWidth - 8) + 'px';
}
document.addEventListener('pointerdown', (e) => { if (!e.target.closest('.pop') && !e.target.closest('#btnMenu,#btnBg,#btnAssist,[data-tool=shapes]')) closePops(); });

function buildMenu() {
  const items = [
    ['file', 'Nueva pizarra', '', newDoc], ['open', 'Abrir…', 'Ctrl+O', openFile], ['save', 'Guardar', 'Ctrl+S', () => save(false)],
    ['save', 'Guardar como…', 'Ctrl+Mayús+S', () => save(true)], null,
    ['image', 'Exportar página como imagen (PNG)', '', exportPNG], ['pdf', 'Exportar todas las páginas a PDF', 'Ctrl+P', exportPDF], null,
    ['full', 'Pantalla completa', 'F11', toggleFull], ['present', 'Modo presentación (ocultar barras)', 'Tab', togglePresent], ['help', 'Atajos de teclado', 'F1', showHelp]
  ];
  const m = $('#menuPop'); m.innerHTML = '<h4>mi-pizarra</h4>';
  for (const it of items) {
    if (!it) { m.appendChild(document.createElement('hr')); continue; }
    const b = document.createElement('button'); b.className = 'item';
    b.innerHTML = `${ico(it[0])}<span>${it[1]}</span><kbd>${it[2]}</kbd>`;
    b.onclick = () => { closePops(); it[3](); }; m.appendChild(b);
  }
}
function updateBgPop() {
  const p = P(), m = $('#bgPop');
  m.innerHTML = `<h4>Fondo</h4>` + BGS.map(([id, n]) => `<button class="item${p.bg === id ? ' on' : ''}" data-bg="${id}">${n}</button>`).join('') +
    `<hr><h4>Color de la pizarra</h4><div class="boardsw">` + Object.entries(BOARDS).map(([id, b]) => `<button title="${b.name}" data-board="${id}" class="${p.board === id ? 'on' : ''}" style="background:${b.bg}"></button>`).join('') + `</div>`;
  m.querySelectorAll('[data-bg]').forEach((b) => (b.onclick = () => { P().bg = b.dataset.bg; updateBgPop(); changed(); }));
  m.querySelectorAll('[data-board]').forEach((b) => (b.onclick = () => {
    const old = BOARDS[P().board]; P().board = b.dataset.board;
    if (S.color === old.ink) S.color = BOARDS[P().board].ink;
    syncColorToBoard();
    buildColors(); updateBgPop(); changed();
  }));
}
function syncColorToBoard() {
  const b = BOARDS[P().board];
  document.body.classList.toggle('dark', P().board === 'chalk' || P().board === 'dark');
  const other = Object.values(BOARDS).map((x) => x.ink);
  if (other.includes(S.color) && S.color !== b.ink) { S.color = b.ink; buildColors(); }
}
function showHelp() {
  alert([
    'ATAJOS DE TECLADO', '',
    'P  Lápiz          M  Resaltador      E  Borrador',
    'V  Seleccionar    T  Texto            K  Puntero láser',
    'L  Línea   A  Flecha   R  Rectángulo   O  Elipse   Y  Triángulo',
    'G  Plano cartesiano     F  Graficar función',
    'H o Espacio (mantener)  Mover el lienzo',
    '', 'Ctrl+Z / Ctrl+Y   Deshacer / Rehacer',
    'Supr               Borrar selección',
    'Ctrl+C / Ctrl+V / Ctrl+D   Copiar / Pegar / Duplicar',
    'Ctrl+A             Seleccionar todo',
    'AvPág / RePág      Página siguiente / anterior',
    'Ctrl+rueda         Zoom      Rueda: desplazar',
    'Ctrl+0             Zoom 100%',
    'Mayús al dibujar figuras: líneas rectas a 15° y figuras cuadradas',
    'Doble clic sobre un plano (con Seleccionar): editar funciones',
    'Lápiz: dibuja una línea o figura y deja el lápiz quieto al final para corregirla',
    'Lápiz digital: la presión cambia el grosor; el botón borrador del lápiz borra.',
    '', 'Ctrl+S Guardar   Ctrl+O Abrir   Ctrl+P Exportar PDF   F11 Pantalla completa   Tab Ocultar barras',
    'También puedes arrastrar un archivo .pizarra a la ventana para abrirlo.'
  ].join('\n'));
}

/* ---------- Teclado ---------- */
function deleteSel() { if (!S.sel.length) return; snap(); const set = new Set(S.sel); P().items = P().items.filter((i) => !set.has(i)); S.sel = []; changed(); }
function copySel() { if (S.sel.length) { clipboard = JSON.stringify(S.sel); toast('Copiado'); } }
function paste(offset = 30) {
  if (!clipboard) return; const items = JSON.parse(clipboard); const o = offset / view().s;
  snap(); for (const it of items) { moveItem(it, o, o); P().items.push(it); }
  clipboard = JSON.stringify(items); setTool('select'); S.sel = items; changed();
}
window.addEventListener('keydown', (e) => {
  if ($('#modalBg').classList.contains('show')) { if (e.key === 'Escape') closeModal(); return; }
  if (e.target === ed) {
    if (e.key === 'Escape' || (e.key === 'Enter' && (e.ctrlKey || e.metaKey))) { e.preventDefault(); commitEditor(); }
    return;
  }
  if (e.target.tagName === 'INPUT' && e.target.type !== 'range') return;
  const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
  if (mod) {
    const map = {
      z: () => (e.shiftKey ? redo() : undo()), y: redo, s: () => save(e.shiftKey), o: openFile, p: exportPDF,
      d: () => { if (S.sel.length) { clipboard = JSON.stringify(S.sel); paste(20); } },
      c: copySel, x: () => { copySel(); deleteSel(); }, v: () => paste(),
      a: () => { setTool('select'); S.sel = P().items.filter((i) => !i.er); req(); },
      '0': () => { const v = view(); zoomAt(1 / v.s, W / 2, H / 2); },
      '=': () => zoomAt(1.2, W / 2, H / 2), '+': () => zoomAt(1.2, W / 2, H / 2), '-': () => zoomAt(1 / 1.2, W / 2, H / 2)
    };
    if (map[k]) { e.preventDefault(); map[k](); }
    return;
  }
  if (e.key === ' ') { e.preventDefault(); if (!spaceDown) { spaceDown = true; setCursor(); } return; }
  if (e.key === 'Delete' || e.key === 'Backspace') { deleteSel(); return; }
  if (e.key === 'Escape') { S.sel = []; closePops(); req(); return; }
  if (e.key === 'PageDown') { e.preventDefault(); goPage(cur + 1); return; }
  if (e.key === 'PageUp') { e.preventDefault(); goPage(cur - 1); return; }
  if (e.key === 'Tab') { e.preventDefault(); togglePresent(); return; }
  if (e.key === 'F1') { e.preventDefault(); showHelp(); return; }
  if (S.sel.length && e.key.startsWith('Arrow')) {
    e.preventDefault(); const d = (e.shiftKey ? 10 : 1) / view().s;
    snap(); for (const it of S.sel) moveItem(it, e.key === 'ArrowLeft' ? -d : e.key === 'ArrowRight' ? d : 0, e.key === 'ArrowUp' ? -d : e.key === 'ArrowDown' ? d : 0); changed(); return;
  }
  const keys = { p: 'pen', m: 'hl', e: 'eraser', v: 'select', l: 'line', a: 'arrow', r: 'rect', o: 'ellipse', y: 'triangle', g: 'plane', f: 'func', t: 'text', k: 'laser', h: 'hand' };
  if (keys[k] && !e.altKey) setTool(keys[k]);
});
window.addEventListener('keyup', (e) => { if (e.key === ' ') { spaceDown = false; setCursor(); } });
window.addEventListener('resize', resize);
window.addEventListener('beforeunload', autosave);
window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', async (e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f && /\.(pizarra|json)$/i.test(f.name)) { fileHandle = null; loadText(await f.text(), f.name.replace(/\.(pizarra|json)$/i, '')); } });

/* ---------- Arranque ---------- */
function wire() {
  $('#btnMenu').innerHTML = ico('menu'); $('#btnBg').innerHTML = ico('bg');
  $('#btnUndo').innerHTML = ico('undo'); $('#btnRedo').innerHTML = ico('redo'); $('#btnClear').innerHTML = ico('clear');
  $('#pgPrev').innerHTML = ico('left'); $('#pgNext').innerHTML = ico('right'); $('#pgAdd').innerHTML = ico('plus');
  $('#pgDup').innerHTML = ico('copy'); $('#pgDel').innerHTML = ico('trash'); $('#zIn').innerHTML = ico('plus'); $('#zOut').innerHTML = ico('minus');
  $('#btnMenu').onclick = (e) => togglePop('#menuPop', e.currentTarget);
  $('#btnBg').onclick = (e) => { updateBgPop(); togglePop('#bgPop', e.currentTarget); };
  $('#btnAssist').onclick = (e) => togglePop('#assistPop', e.currentTarget);
  $('#btnUndo').onclick = undo; $('#btnRedo').onclick = redo;
  $('#btnClear').onclick = () => { commitEditor(); if (!P().items.length) return; snap(); P().items = []; S.sel = []; changed(); toast('Página limpiada (Ctrl+Z para deshacer)'); };
  $('#pgPrev').onclick = () => goPage(cur - 1); $('#pgNext').onclick = () => goPage(cur + 1);
  $('#pgAdd').onclick = addPage; $('#pgDup').onclick = dupPage; $('#pgDel').onclick = delPage;
  $('#zIn').onclick = () => zoomAt(1.2, W / 2, H / 2); $('#zOut').onclick = () => zoomAt(1 / 1.2, W / 2, H / 2);
  $('#zoomLabel').onclick = () => { const v = view(); zoomAt(1 / v.s, W / 2, H / 2); };
  document.querySelectorAll('.bar, .pop').forEach((b) => b.addEventListener('pointerdown', (e) => { if (e.target.closest('button,label') && edState && !e.target.closest('#symbols')) e.preventDefault(); }));
}

async function init() {
  doc = { pages: [mkPage()] };
  resize(); wire(); buildTools(); buildMenu(); buildSymbols();
  try {
    const s = localStorage.getItem('mi-pizarra-autosave');
    if (s) { loadText(s, localStorage.getItem('mi-pizarra-name') || null, true); dirty = false; }
    const o = JSON.parse(localStorage.getItem('mi-pizarra-opts') || '{}');
    if (typeof o.shapeAssist === 'boolean') S.shapeAssist = o.shapeAssist;
    if (o.smooth >= 0 && o.smooth <= 3) S.smooth = o.smooth;
  } catch (_) {}
  buildAssist();
  syncColorToBoard(); setTool('pen'); afterPageChange();
}
init();
})();
