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
  imgadd: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/><path d="M19 2v6M16 5h6"/>',
  x2: '<path d="M18 6 6 18M6 6l12 12"/>',
  pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 4 4"/><path d="m4 16 4 4"/>',
  fountain: '<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
  marker: '<path d="m9 11-6 6v3h3l6-6"/><path d="m14 4 6 6-6 6-6-6z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  install: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  unlock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.6-1.7"/>',
  front: '<rect x="3" y="3" width="12" height="12" rx="2"/><rect x="9" y="9" width="12" height="12" rx="2" fill="currentColor" fill-opacity=".3"/>',
  back: '<rect x="3" y="3" width="12" height="12" rx="2" fill="currentColor" fill-opacity=".3"/><rect x="9" y="9" width="12" height="12" rx="2"/>',
  sigma: '<path d="M18 7V4H6l6 8-6 8h12v-3"/>',
  math: '<path d="M18 7V4H6l6 8-6 8h12v-3"/>',
  ruler: '<path d="M3 16.5 16.5 3 21 7.5 7.5 21z"/><path d="m7.5 12 2 2M10.5 9l2 2M13.5 6l2 2"/>',
  protractor: '<path d="M3 18a9 9 0 0 1 18 0z"/><path d="m12 18-4-6.5"/>',
  compass: '<circle cx="12" cy="5" r="2"/><path d="m11 7-5 14M13 7l5 14M8.5 15h7"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  tools: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v7M14 17.5h7"/>',
  halfc: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  float: '<rect x="3" y="7" width="13" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-3"/><path d="m6.5 15.5 2-2 2 2 3-3.5"/>',
  pin: '<path d="M12 17v5"/><path d="M9 10.8a2 2 0 0 1-1.1 1.8l-1.8.9A2 2 0 0 0 5 15.2V17h14v-1.8a2 2 0 0 0-1.1-1.8l-1.8-.9a2 2 0 0 1-1.1-1.8V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
  grip: '<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>',
  send: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  curtain: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 13h18"/><path d="M10 13v2h4v-2"/>',
  spot: '<circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>',
  lasso: '<path d="M7 22a5 5 0 0 1-2-4"/><path d="M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"/><path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',
  sparkle: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/>'
};
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) { r = Math.max(0, Math.min(Math.abs(r) || 0, Math.abs(w) / 2, Math.abs(h) / 2)); this.moveTo(x + r, y); this.arcTo(x + w, y, x + w, y + h, r); this.arcTo(x + w, y + h, x, y + h, r); this.arcTo(x, y + h, x, y, r); this.arcTo(x, y, x + w, y, r); this.closePath(); };
}
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
  pen:    { v: 3,  min: 1,  max: 300, pre: [2, 3, 6, 10] },
  hl:     { v: 22, min: 4,  max: 400, pre: [12, 22, 32, 46] },
  eraser: { v: 30, min: 4,  max: 800, pre: [14, 30, 60, 120] },
  shape:  { v: 3,  min: 1,  max: 80,  pre: [2, 3, 5, 8] },
  text:   { v: 32, min: 8,  max: 400, pre: [20, 32, 48, 72] }
};
const WKEY = { pen: 'pen', hl: 'hl', eraser: 'eraser', line: 'shape', arrow: 'shape', rect: 'shape', ellipse: 'shape', triangle: 'shape', plane: 'shape', func: 'shape', text: 'text', math: 'text', compass: 'shape', select: 'shape', laser: null, hand: null };
const SHAPES = [['line', 'Línea', 'L'], ['arrow', 'Flecha', 'A'], ['rect', 'Rectángulo', 'R'], ['ellipse', 'Elipse / círculo', 'O'], ['triangle', 'Triángulo', 'Y']];
const KINDS = {
  pen: { name: 'Bolígrafo', icon: 'pen' }, fountain: { name: 'Pluma', icon: 'fountain' }, marker: { name: 'Marcador', icon: 'marker' },
  pencil: { name: 'Lápiz', icon: 'pencil' }, hl: { name: 'Resaltador', icon: 'hl' }
};
const DEFAULT_PRESETS = [
  { k: 'pen', c: '#1d1d1f', w: 3 }, { k: 'pen', c: '#1971c2', w: 3 }, { k: 'pen', c: '#e03131', w: 3 },
  { k: 'fountain', c: '#1d1d1f', w: 5 }, { k: 'marker', c: '#2f9e44', w: 6 },
  { k: 'hl', c: '#fcc419', w: 22 }, { k: 'hl', c: '#69db7c', w: 22 }
];

/* ---------- Estado ---------- */
const bgC = $('#bg'), inkC = $('#ink'), ovC = $('#ov');
const bgX = bgC.getContext('2d'), inkX = inkC.getContext('2d'), ovX = ovC.getContext('2d');
const cacheC = document.createElement('canvas'), cacheX = cacheC.getContext('2d');
const measureX = document.createElement('canvas').getContext('2d');
let W = 0, H = 0, DPR = 1;

const S = { tool: 'pen', lastShape: 'line', color: '#1d1d1f', eraserMode: 'area', sel: [], op: 1, shapeAssist: true, smooth: 2, penBtn: 'pan', wheel: 'pan', presets: DEFAULT_PRESETS.map((p) => ({ ...p })), pi: 0, lastPen: 0, lastHl: 5 };
const SMOOTH = [0, 0.35, 0.55, 0.72];
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
const toolColor = () => (S.tool === 'pen' ? curPreset().c : S.color);
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
const BASE_NAMES = [...Object.keys(FUNCS), ...Object.keys(CONSTS)];
function tokenize(s, userFns, used) {
  const names = [...BASE_NAMES, ...userFns].sort((a, b) => b.length - a.length);
  const out = []; let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9.]/.test(c)) { let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++; const n = parseFloat(s.slice(i, j)); if (isNaN(n)) throw 0; out.push({ t: 'n', v: n }); i = j; continue; }
    if (/[a-z]/.test(c)) {
      let j = i; while (j < s.length && /[a-z]/.test(s[j])) j++;
      let w = s.slice(i, j);
      while (w) {
        const nm = names.find((n) => w.startsWith(n));
        if (nm && !(nm.length === 1 && w[0] === 'x')) { out.push({ t: FUNCS[nm] ? 'f' : nm in CONSTS ? 'c' : 'u', v: nm }); w = w.slice(nm.length); continue; }
        if (w[0] === 'x') { out.push({ t: 'x' }); w = w.slice(1); continue; }
        out.push({ t: 'p', v: w[0] }); if (used) used.add(w[0]); w = w.slice(1);
      }
      i = j; continue;
    }
    if (c === "'") { out.push({ t: "'" }); i++; continue; }
    if ('+-*/^()|'.includes(c)) { out.push({ t: c }); i++; continue; }
    throw 0;
  }
  return out;
}
function parse(tokens, ctx) {
  let p = 0;
  const peek = () => tokens[p], take = () => tokens[p++];
  const startsPrimary = (t) => t && (t.t === 'n' || t.t === 'x' || t.t === 'c' || t.t === 'f' || t.t === 'u' || t.t === 'p' || t.t === '(');
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
  function deriv(fn, n) {
    if (!n) return fn;
    const d = deriv(fn, n - 1);
    return (a) => { const h = 1e-4 * Math.max(1, Math.abs(a)); return (d(a + h) - d(a - h)) / (2 * h); };
  }
  function primary() {
    const t = take(); if (!t) throw 0;
    if (t.t === 'n') { const v = t.v; return () => v; }
    if (t.t === 'x') return (x) => x;
    if (t.t === 'c') { const v = CONSTS[t.v]; return () => v; }
    if (t.t === 'p') { const n = t.v; return () => { const v = ctx.params[n]; return v === undefined ? 1 : v; }; }
    if (t.t === '(') { const e = expr(); if (!peek() || take().t !== ')') throw 0; return e; }
    if (t.t === '|') { const e = expr(); if (!peek() || take().t !== '|') throw 0; return (x) => Math.abs(e(x)); }
    if (t.t === 'f') {
      const f = FUNCS[t.v];
      if (peek() && peek().t === '^') { take(); const e = unary(); const arg = power(); return (x) => Math.pow(f(arg(x)), e(x)); }
      const arg = power(); return (x) => f(arg(x));
    }
    if (t.t === 'u') {
      const name = t.v; let order = 0;
      while (peek() && peek().t === "'") { take(); order++; }
      const call = (a) => {
        const fn = ctx.fns[name]; if (!fn || ctx.depth > 40) return NaN;
        ctx.depth++; try { return fn(a); } finally { ctx.depth--; }
      };
      const g = deriv(call, order);
      const arg = power(); return (x) => g(arg(x));
    }
    throw 0;
  }
  const f = expr(); if (p !== tokens.length) throw 0; return f;
}
function normExpr(src) {
  return String(src).toLowerCase().replace(/\s+/g, '')
    .replace(/[·×]/g, '*').replace(/÷/g, '/').replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/²/g, '^2').replace(/³/g, '^3')
    .replace(/,/g, '.').replace(/[−–]/g, '-').replace(/\*\*/g, '^').replace(/[’´`]/g, "'");
}
function compileExpr(src, ctx, userFns, used) {
  const s = normExpr(src); if (!s) return null;
  try {
    const f = parse(tokenize(s, userFns || [], used), ctx);
    let t; try { t = f(1.234); } catch (_) { t = NaN; }
    if (typeof t !== 'number') return null;
    return f;
  } catch (_) { return null; }
}
const fmtNum = (n) => String(+n.toFixed(4)).replace('-', '−');
const fmt2 = (n) => { const v = Math.abs(n) < 5e-7 ? 0 : +n.toFixed(2); return String(v).replace('-', '−'); };

/* ---------- Modelo de gráfica (tipo GeoGebra) ---------- */
const AUTO_NAMES = 'fghpqrstuvw'.split('');
const KS = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000];
function exOf(it) {
  if (!it.ex) { it.ex = (it.fx || []).map((f) => ({ e: f.e, c: f.c })); delete it.fx; }
  if (!it.params) it.params = {};
  return it.ex;
}
function splitTop(s) {
  const sep = /;/.test(s) ? ';' : ',';
  const parts = []; let d = 0, last = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') d++; else if (c === ')') d--;
    else if (c === sep && d === 0) { parts.push(s.slice(last, i)); last = i + 1; }
  }
  parts.push(s.slice(last));
  return parts.map((x) => x.trim());
}
function parseRow(raw) {
  const s = String(raw || '').trim().replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/[−–]/g, '-');
  if (!s) return { kind: 'empty' };
  let m;
  if ((m = s.match(/^([a-df-wz])\s*=\s*(-?\d+(?:[.,]\d+)?)$/))) return { kind: 'param', name: m[1], v: parseFloat(m[2].replace(',', '.')) };
  if ((m = s.match(/^([a-df-wz])\s*\(\s*x\s*\)\s*=\s*(.+)$/i))) return { kind: 'fn', name: m[1].toLowerCase(), body: m[2] };
  if ((m = s.match(/^y\s*(<=|>=|<|>|=)\s*(.+)$/i))) return m[1] === '=' ? { kind: 'fn', name: null, body: m[2] } : { kind: 'ineq', op: m[1], body: m[2] };
  if ((m = s.match(/^x\s*=\s*(.+)$/i))) return { kind: 'vline', body: m[1] };
  if ((m = s.match(/^(?:([A-Z][A-Za-z0-9_']*)\s*=\s*)?\((.*)\)$/))) {
    const parts = splitTop(m[2]);
    if (parts.length === 2) return { kind: 'point', name: m[1] || '', bx: parts[0], by: parts[1] };
    if (m[1]) return { kind: 'error' };
  }
  if (/[=<>]/.test(s)) return { kind: 'error' };
  return { kind: 'fn', name: null, body: s };
}
function buildModel(ex) {
  const ctx = { params: {}, fns: {}, depth: 0 };
  const rows = ex.map((r) => parseRow(r.e));
  const names = new Set(rows.filter((r) => r.kind === 'fn' && r.name).map((r) => r.name));
  for (const r of rows) if (r.kind === 'fn' && !r.name) { r.name = AUTO_NAMES.find((n) => !names.has(n)) || null; r.auto = true; if (r.name) names.add(r.name); }
  const userFns = [...names], used = new Set();
  for (const r of rows) {
    if (r.kind === 'fn' || r.kind === 'ineq') {
      r.f = compileExpr(r.body, ctx, userFns, used);
      if (!r.f) { r.kind = 'error'; continue; }
      if (r.kind === 'fn' && r.name) { const f = r.f; ctx.fns[r.name] = f; }
    } else if (r.kind === 'vline') {
      r.f = compileExpr(r.body, ctx, userFns, used); if (!r.f) r.kind = 'error';
    } else if (r.kind === 'point') {
      r.fx = compileExpr(r.bx, ctx, userFns, used); r.fy = compileExpr(r.by, ctx, userFns, used);
      if (!r.fx || !r.fy) r.kind = 'error';
    } else if (r.kind === 'param' && names.has(r.name)) r.kind = 'error';
  }
  for (const n of names) used.delete(n);
  const paramNames = [...new Set([...used, ...rows.filter((r) => r.kind === 'param').map((r) => r.name)])].sort();
  return { ctx, rows, paramNames };
}
const modelCache = new WeakMap();
function getModel(it) {
  const ex = exOf(it);
  const key = ex.map((r) => r.e).join('\u0001');
  let m = modelCache.get(it);
  if (!m || m.key !== key) {
    m = buildModel(ex); m.key = key; modelCache.set(it, m);
    const P0 = it.params; const np = {};
    for (const n of m.paramNames) np[n] = P0[n] || { v: 1, min: -5, max: 5, step: 0.1 };
    for (const r of m.rows) if (r.kind === 'param') { const q = np[r.name]; q.v = r.v; if (r.v < q.min) q.min = Math.floor(r.v); if (r.v > q.max) q.max = Math.ceil(r.v); }
    it.params = np;
  }
  const pv = m.ctx.params;
  for (const k in pv) delete pv[k];
  for (const [k, q] of Object.entries(it.params)) pv[k] = q.v;
  return m;
}
const rowLabel = (r, ex) => {
  if (r.kind === 'fn') return `${r.name || 'y'}(x) = ${prettyExpr(r.body)}`;
  if (r.kind === 'ineq') return `y ${r.op.replace('<=', '≤').replace('>=', '≥')} ${prettyExpr(r.body)}`;
  return ex;
};
const prettyExpr = (s) => String(s).trim().replace(/\*/g, '·').replace(/\^2(?![0-9.])/g, '²').replace(/\^3(?![0-9.])/g, '³').replace(/sqrt/g, '√').replace(/\bpi\b/g, 'π');

function planeGeom(it) {
  const x = Math.min(it.x1, it.x2), y = Math.min(it.y1, it.y2), w = Math.abs(it.x2 - it.x1), h = Math.abs(it.y2 - it.y1);
  const u = it.u || GRID, kx = it.kx || 1, ky = it.ky || 1;
  return { x, y, w, h, u, kx, ky, ox: x + Math.round(w / 2 / u) * u + (it.ox || 0) * u, oy: y + Math.round(h / 2 / u) * u + (it.oy || 0) * u };
}
const toPX = (g, X) => g.ox + (X / g.kx) * g.u;
const toPY = (g, Y) => g.oy - (Y / g.ky) * g.u;
const fromPX = (g, px) => ((px - g.ox) / g.u) * g.kx;
const fromPY = (g, py) => ((g.oy - py) / g.u) * g.ky;
const safe = (f, x) => { try { const v = f(x); return typeof v === 'number' ? v : NaN; } catch (_) { return NaN; } };

/* Puntos notables: raíces, extremos, corte con y, intersecciones */
const spCache = new WeakMap();
function specialPoints(it, g, m) {
  const ex = exOf(it);
  const fns = m.rows.map((r, i) => ({ r, s: ex[i] })).filter((o) => o.r.kind === 'fn' && !o.s.hide);
  const key = [m.key, JSON.stringify(it.params), g.x, g.y, g.w, g.h, g.kx, g.ky, g.ox, g.oy].join('|');
  const c = spCache.get(it); if (c && c.key === key) return c.pts;
  const X0 = fromPX(g, g.x), X1 = fromPX(g, g.x + g.w), Yspan = (g.h / g.u) * g.ky;
  const N = 500, dx = (X1 - X0) / N, out = [];
  const add = (X, Y, color, kind) => {
    if (!isFinite(X) || !isFinite(Y)) return;
    if (out.some((q) => Math.abs(q.X - X) < dx * 1.5 && Math.abs(q.Y - Y) < Yspan * 0.01)) return;
    out.push({ X, Y, c: color, kind });
  };
  const roots = (f, color, kind) => {
    // Si la función vale ~0 en muchos tramos (curvas iguales o encimadas) no hay raíces aisladas que marcar.
    const eps = Yspan * 1e-6; let zeros = 0;
    for (let i = 0; i <= N; i += 5) if (Math.abs(safe(f, X0 + i * dx)) <= eps) zeros++;
    if (zeros > 3) return;
    let pxv = X0, py = safe(f, X0);
    for (let i = 1; i <= N; i++) {
      const xv = X0 + i * dx, yv = safe(f, xv);
      if (isFinite(py) && isFinite(yv)) {
        if (Math.abs(yv) <= eps) { if (Math.abs(py) > eps) add(xv, 0, color, kind); }
        else if (py * yv < 0 && Math.abs(py - yv) < Yspan * 2) {
          let a = pxv, b = xv, fa = py;
          for (let k = 0; k < 50; k++) { const mid = (a + b) / 2, fm = safe(f, mid); if (fa * fm <= 0) b = mid; else { a = mid; fa = fm; } }
          const r = (a + b) / 2; if (Math.abs(safe(f, r)) < Yspan * 1e-3) add(r, 0, color, kind);
        }
      }
      pxv = xv; py = yv;
    }
  };
  for (const { r, s } of fns) {
    roots(r.f, s.c, 'root');
    const ys = []; for (let i = 0; i <= N; i++) ys.push(safe(r.f, X0 + i * dx));
    for (let i = 1; i < N; i++) {
      const a = ys[i - 1], b = ys[i], d = ys[i + 1];
      if (!isFinite(a) || !isFinite(b) || !isFinite(d)) continue;
      if ((b - a) * (d - b) < 0 && Math.abs(b - a) < Yspan * 0.5 && Math.abs(d - b) < Yspan * 0.5) {
        const isMax = b > a; let lo = X0 + (i - 1) * dx, hi = X0 + (i + 1) * dx;
        for (let k = 0; k < 60; k++) { const m1 = lo + (hi - lo) / 3, m2 = hi - (hi - lo) / 3, f1 = safe(r.f, m1), f2 = safe(r.f, m2); if (isMax ? f1 < f2 : f1 > f2) lo = m1; else hi = m2; }
        const xm = (lo + hi) / 2; add(xm, safe(r.f, xm), s.c, isMax ? 'max' : 'min');
      }
    }
    if (X0 <= 0 && X1 >= 0) add(0, safe(r.f, 0), s.c, 'yint');
  }
  for (let i = 0; i < fns.length; i++) for (let j = i + 1; j < fns.length; j++) {
    const f1 = fns[i].r.f, f2 = fns[j].r.f; const before = out.length;
    roots((x) => f1(x) - f2(x), it.c, 'cross');
    for (let k = before; k < out.length; k++) out[k].Y = safe(f1, out[k].X);
  }
  const pts = out.slice(0, 40);
  spCache.set(it, { key, pts });
  return pts;
}

function plotCurve(ctx, g, f) {
  const st = Math.max(0.5, g.w / 1600);
  ctx.beginPath(); let on = false, prevY = 0;
  for (let px = g.x; px <= g.x + g.w + 0.01; px += st) {
    const Y = safe(f, fromPX(g, px)); const py = toPY(g, Y);
    if (!isFinite(py) || Math.abs(py - g.oy) > g.h * 50 + 1e4) { on = false; continue; }
    if (on && Math.abs(py - prevY) > g.h) on = false;
    if (!on) { ctx.moveTo(px, py); on = true; } else ctx.lineTo(px, py);
    prevY = py;
  }
  ctx.stroke();
}
let paintBoard = null;
// Escala de la vista en píxeles CSS por unidad del mundo (para que guiones y detalles midan lo mismo en pantalla).
function pxScale(ctx) { const t = ctx.getTransform(); return Math.max(1e-3, Math.hypot(t.a, t.b) / (ctx.canvas === inkC ? DPR : 1)); }
const AUTO_DARK = '#1d1d1f', LIGHT_INKS = ['#f6f6ef', '#f5f5f5', '#ffffff'];
const BRIGHT = { '#1971c2': '#4dabf7', '#e03131': '#ff6b6b', '#2f9e44': '#51cf66', '#9c36b5': '#cc5de8', '#0c8599': '#3bc9db' };
const isDarkBoard = (b) => b === BOARDS.chalk || b === BOARDS.dark;
// El negro "automático" se vuelve tiza en pizarras oscuras y la tinta clara se vuelve negra en pizarras claras.
function adapt(c, board) {
  const b = board || paintBoard; if (!b || !c) return c;
  const lc = String(c).toLowerCase();
  if (isDarkBoard(b)) return lc === AUTO_DARK ? b.ink : (BRIGHT[lc] || c);
  return LIGHT_INKS.includes(lc) ? AUTO_DARK : c;
}
function pill(ctx, text, x, y, color, fs, align) {
  ctx.font = `500 ${fs}px "Segoe UI",system-ui,sans-serif`;
  const w = ctx.measureText(text).width + fs * 0.9, h = fs * 1.55;
  let bx = align === 'left' ? x : x - w / 2; const by = y - h / 2;
  ctx.fillStyle = paintBoard ? paintBoard.bg : '#fff'; ctx.globalAlpha = 0.9;
  ctx.beginPath(); ctx.roundRect ? ctx.roundRect(bx, by, w, h, h / 2) : ctx.rect(bx, by, w, h); ctx.fill();
  ctx.globalAlpha = 1; ctx.fillStyle = color; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, bx + w / 2, y + 0.5);
}

function drawPlane(ctx, it) {
  const g = planeGeom(it); const { x, y, w, h, u, ox, oy, kx, ky } = g;
  if (w < 8 || h < 8) return;
  const m = getModel(it), ex = exOf(it), ac = adapt(it.c);
  const lw = Math.max(1.5, it.w * 0.8);
  const fs = Math.max(11, Math.min(17, u * 0.32));
  ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  // Cuadrícula y regiones (recortadas al recuadro)
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  if (it.grid !== false) {
    ctx.strokeStyle = ac; ctx.lineWidth = 1;
    for (const major of [false, true]) {
      ctx.globalAlpha = major ? 0.22 : 0.1; ctx.beginPath();
      for (let n = Math.ceil((x - ox) / u); ox + n * u <= x + w; n++) if ((n % 5 === 0) === major) { const gx = ox + n * u; ctx.moveTo(gx, y); ctx.lineTo(gx, y + h); }
      for (let n = Math.ceil((y - oy) / u); oy + n * u <= y + h; n++) if ((n % 5 === 0) === major) { const gy = oy + n * u; ctx.moveTo(x, gy); ctx.lineTo(x + w, gy); }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  m.rows.forEach((r, i) => {
    if (r.kind !== 'ineq' || ex[i].hide) return;
    const st = Math.max(0.5, w / 1600), up = r.op[0] === '>', edge = up ? y : y + h;
    ctx.fillStyle = adapt(ex[i].c); ctx.globalAlpha = 0.16; ctx.beginPath();
    let open = false, lastX = x;
    const close = () => { if (open) { ctx.lineTo(lastX, edge); ctx.closePath(); open = false; } };
    for (let px = x; px <= x + w + 0.01; px += st) {
      const py = toPY(g, safe(r.f, fromPX(g, px)));
      if (!isFinite(py)) { close(); continue; }
      const c = clamp(py, y - 2, y + h + 2);
      if (!open) { ctx.moveTo(px, edge); open = true; }
      ctx.lineTo(px, c); lastX = px;
    }
    close(); ctx.fill(); ctx.globalAlpha = 1;
  });
  ctx.restore();
  // Ejes
  ctx.strokeStyle = ctx.fillStyle = ac; ctx.lineWidth = lw;
  const axY = oy >= y && oy <= y + h, axX = ox >= x && ox <= x + w;
  if (axY) { ctx.beginPath(); ctx.moveTo(x, oy); ctx.lineTo(x + w, oy); ctx.stroke(); arrowHead(ctx, x, oy, x + w, oy, lw); }
  if (axX) { ctx.beginPath(); ctx.moveTo(ox, y + h); ctx.lineTo(ox, y); ctx.stroke(); arrowHead(ctx, ox, y + h, ox, y, lw); }
  ctx.font = `${fs}px "Segoe UI",system-ui,sans-serif`; ctx.lineWidth = Math.max(1, lw * 0.7);
  const ly = clamp(oy, y, y + h - fs - 8), lx = clamp(ox, x + 30, x + w);
  ctx.textAlign = 'center'; ctx.textBaseline = 'top'; let lastEnd = -Infinity;
  for (let n = Math.ceil((x - ox) / u); ox + n * u <= x + w; n++) {
    const gx = ox + n * u; if (!n || gx > x + w - 14 || gx < x + 4) continue;
    if (axY) { ctx.beginPath(); ctx.moveTo(gx, oy - 4); ctx.lineTo(gx, oy + 4); ctx.stroke(); }
    const t = fmtNum(n * kx), tw = ctx.measureText(t).width;
    if (gx - tw / 2 > lastEnd + 6) { ctx.fillText(t, gx, ly + 6); lastEnd = gx + tw / 2; }
  }
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; let lastY = Infinity;
  for (let n = Math.floor((y + h - oy) / u); oy + n * u >= y; n--) {
    const gy = oy + n * u; if (!n || gy < y + 14 || gy > y + h - 4) continue;
    if (axX) { ctx.beginPath(); ctx.moveTo(ox - 4, gy); ctx.lineTo(ox + 4, gy); ctx.stroke(); }
    if (gy < lastY - fs * 1.3) { ctx.fillText(fmtNum(-n * ky), lx - 7, gy); lastY = gy; }
  }
  if (axX && axY) { ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillText('0', ox - 5, oy + 5); }
  ctx.font = `italic ${fs + 3}px "Cambria Math","Times New Roman",serif`;
  if (axY) { ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillText('x', x + w - 4, oy + 8); }
  if (axX) { ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText('y', ox + 9, y + 2); }
  // Curvas
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  m.rows.forEach((r, i) => {
    const s = ex[i]; if (s.hide) return;
    ctx.strokeStyle = adapt(s.c); ctx.lineWidth = Math.max(2, it.w);
    if (r.kind === 'fn') plotCurve(ctx, g, r.f);
    else if (r.kind === 'ineq') { const k = pxScale(ctx); ctx.setLineDash(r.op.length === 1 ? [9 / k, 7 / k] : []); plotCurve(ctx, g, r.f); ctx.setLineDash([]); }
    else if (r.kind === 'vline') { const px = toPX(g, safe(r.f, 0)); if (isFinite(px)) { ctx.beginPath(); ctx.moveTo(px, y); ctx.lineTo(px, y + h); ctx.stroke(); } }
  });
  ctx.restore();
  // Puntos notables
  if (it.sp !== false) {
    for (const q of specialPoints(it, g, m)) {
      const px = toPX(g, q.X), py = toPY(g, q.Y);
      if (px < x || px > x + w || py < y || py > y + h) continue;
      ctx.fillStyle = paintBoard ? paintBoard.bg : '#fff'; ctx.strokeStyle = adapt(q.c); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(px, py, 4.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      if (it.coords !== false) pill(ctx, `(${fmt2(q.X)}, ${fmt2(q.Y)})`, px, py - 15, adapt(q.c), fs - 2);
    }
  }
  // Puntos definidos
  m.rows.forEach((r, i) => {
    if (r.kind !== 'point' || ex[i].hide) return;
    const X = safe(r.fx, 0), Y = safe(r.fy, 0), px = toPX(g, X), py = toPY(g, Y);
    if (!isFinite(px) || !isFinite(py) || px < x || px > x + w || py < y || py > y + h) return;
    ctx.fillStyle = adapt(ex[i].c); ctx.strokeStyle = paintBoard ? paintBoard.bg : '#fff'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    const label = (r.name ? r.name + ' ' : '') + (it.coords !== false ? `(${fmt2(X)}, ${fmt2(Y)})` : '');
    if (label.trim()) pill(ctx, label, px + 10, py - 16, adapt(ex[i].c), fs - 1, 'left');
  });
  // Leyenda
  const leg = m.rows.map((r, i) => ({ r, s: ex[i] })).filter((o) => !o.s.hide && (o.r.kind === 'fn' || o.r.kind === 'ineq'));
  if (leg.length) {
    ctx.font = `${fs + 1}px "Cambria Math","Segoe UI",serif`;
    const lines = leg.map((o) => rowLabel(o.r, o.s.e));
    const lwid = Math.max(...lines.map((t) => ctx.measureText(t).width)) + 16, lh = (fs + 1) * 1.5;
    ctx.fillStyle = paintBoard ? paintBoard.bg : '#fff'; ctx.globalAlpha = 0.85;
    ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x + 6, y + 6, lwid, lh * lines.length + 8, 8) : ctx.rect(x + 6, y + 6, lwid, lh * lines.length + 8); ctx.fill();
    ctx.globalAlpha = 1; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
    lines.forEach((t, k) => { ctx.fillStyle = adapt(leg[k].s.c); ctx.fillText(t, x + 14, y + 10 + k * lh + fs * 0.12); });
  }
  ctx.restore();
}

/* Lectura de coordenadas al pasar el mouse */
function traceAt(sx, sy) {
  const [wx, wy] = toWorld(sx, sy); const items = P().items; const v = view();
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i]; if (it.t !== 'plane') continue;
    const g = planeGeom(it); if (wx < g.x || wx > g.x + g.w || wy < g.y || wy > g.y + g.h) continue;
    const m = getModel(it), ex = exOf(it), X = fromPX(g, wx); let best = null;
    m.rows.forEach((r, k) => {
      if ((r.kind !== 'fn' && r.kind !== 'ineq') || ex[k].hide) return;
      const Y = safe(r.f, X), py = toPY(g, Y); if (!isFinite(py) || py < g.y || py > g.y + g.h) return;
      const d = Math.abs(py - wy) * v.s; if (d < 30 && (!best || d < best.d)) best = { d, X, Y, wx, wy: py, c: inkColor(ex[k].c), name: r.name };
    });
    return best;
  }
  return null;
}

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

/* ---------- Motor de tinta: grosor variable, puntas afinadas, pluma ---------- */
const inkCache = new WeakMap();
function simPressure(pts, size) {
  const out = new Array(pts.length); let p = 0.62;
  for (let i = 0; i < pts.length; i++) {
    const d = i ? Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]) : 0;
    const target = clamp(1.05 - d / (size * 2.6), 0.2, 1);
    p = i ? p + (target - p) * 0.3 : 0.62; out[i] = p;
  }
  return out;
}
function densify(pts, pres) {
  const n = pts.length;
  if (n < 3) return pts.map((q, i) => [q[0], q[1], pres[i]]);
  const out = [[pts[0][0], pts[0][1], pres[0]]];
  let sx = pts[0][0], sy = pts[0][1], sp = pres[0];
  for (let i = 1; i < n - 1; i++) {
    const c = pts[i], nx = pts[i + 1];
    const ex = (c[0] + nx[0]) / 2, ey = (c[1] + nx[1]) / 2, ep = (pres[i] + pres[i + 1]) / 2;
    const len = Math.hypot(c[0] - sx, c[1] - sy) + Math.hypot(ex - c[0], ey - c[1]);
    const steps = Math.max(1, Math.min(32, Math.ceil(len / 0.9)));
    for (let k = 1; k <= steps; k++) {
      const t = k / steps, a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, d = t * t;
      out.push([a * sx + b * c[0] + d * ex, a * sy + b * c[1] + d * ey, a * sp + b * pres[i] + d * ep]);
    }
    sx = ex; sy = ey; sp = ep;
  }
  out.push([pts[n - 1][0], pts[n - 1][1], pres[n - 1]]);
  return out;
}
function unionPath(Q) {
  const path = new Path2D();
  for (let i = 0; i < Q.length; i++) {
    const [x, y, r] = Q[i];
    path.moveTo(x + r, y); path.arc(x, y, r, 0, Math.PI * 2);
    if (i) {
      const [ax, ay, ar] = Q[i - 1]; const dx = x - ax, dy = y - ay, L = Math.hypot(dx, dy);
      if (L < 1e-6) continue;
      const nx = -dy / L, ny = dx / L;
      path.moveTo(ax - nx * ar, ay - ny * ar); path.lineTo(x - nx * r, y - ny * r);
      path.lineTo(x + nx * r, y + ny * r); path.lineTo(ax + nx * ar, ay + ny * ar); path.closePath();
    }
  }
  return path;
}
// Marcador y lápiz (y el compás) tienen grosor constante: el trazo nativo del navegador es exacto, rápido y sin grietas.
function centerPath(pts) {
  const path = new Path2D(), n = pts.length;
  path.moveTo(pts[0][0], pts[0][1]);
  if (n === 1) { path.lineTo(pts[0][0] + 0.01, pts[0][1]); return path; }
  for (let i = 1; i < n - 1; i++) { const a = pts[i], b = pts[i + 1]; path.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); }
  path.lineTo(pts[n - 1][0], pts[n - 1][1]);
  return path;
}
// Quita muestras que no cambian la forma (posición y grosor dentro de la tolerancia): menos círculos, misma tinta.
function simplifyQ(Q) {
  const n = Q.length; if (n < 4) return Q;
  let rmax = 0; for (const q of Q) if (q[2] > rmax) rmax = q[2];
  const tol = Math.max(0.12, rmax * 0.012), out = [Q[0]];
  let k = 0, j = 2;
  while (j < n) {
    const A = Q[k], B = Q[j], dx = B[0] - A[0], dy = B[1] - A[1], L2 = dx * dx + dy * dy;
    let ok = j - k <= 40;
    for (let m = k + 1; ok && m < j; m++) {
      const q = Q[m]; let t = L2 ? ((q[0] - A[0]) * dx + (q[1] - A[1]) * dy) / L2 : 0; t = clamp(t, 0, 1);
      const ex = A[0] + dx * t - q[0], ey = A[1] + dy * t - q[1];
      if (ex * ex + ey * ey > tol * tol || Math.abs(A[2] + (B[2] - A[2]) * t - q[2]) > tol) ok = false;
    }
    if (ok) j++; else { k = j - 1; out.push(Q[k]); j = k + 2; }
  }
  out.push(Q[n - 1]);
  return out;
}
function buildInk(it) {
  const pts = it.pts, size = it.w, k = it.k;
  if (k === 'marker' || k === 'pencil') return { stroke: true, lw: k === 'pencil' ? size * 0.85 : size, path: centerPath(pts) };
  const pres = it.pr ? pts.map((q) => q[2]) : k === 'pen' || k === 'fountain' ? simPressure(pts, size) : pts.map(() => 0.5);
  const D = densify(pts, pres);
  let total = 0; const acc = [0];
  for (let i = 1; i < D.length; i++) { total += Math.hypot(D[i][0] - D[i - 1][0], D[i][1] - D[i - 1][1]); acc.push(total); }
  const taperS = it.ct ? 0 : k === 'pen' ? Math.min(size * 1.6, total * 0.25) : k === 'fountain' ? Math.min(size * 1.2, total * 0.2) : 0;
  const taperE = it.ct ? 0 : k === 'pen' ? Math.min(size * 3.2, total * 0.35) : k === 'fountain' ? Math.min(size * 2, total * 0.3) : 0;
  const nib = -Math.PI / 4;
  const Q = D.map((q, i) => {
    let r;
    if (k === 'pen') r = size / 2 * (0.42 + 1.15 * q[2]);
    else if (k === 'fountain') {
      const a = D[Math.max(0, i - 2)], b = D[Math.min(D.length - 1, i + 2)];
      const th = Math.atan2(b[1] - a[1], b[0] - a[0]);
      r = size / 2 * (0.16 + 1.05 * Math.abs(Math.sin(th - nib))) * (0.75 + 0.5 * q[2]);
    } else if (k === 'pencil') r = size / 2 * 0.85;
    else r = size / 2;
    if (taperS && acc[i] < taperS) r *= 0.25 + 0.75 * Math.sin((acc[i] / taperS) * Math.PI / 2);
    if (taperE && total - acc[i] < taperE) r *= 0.18 + 0.82 * Math.sin(((total - acc[i]) / taperE) * Math.PI / 2);
    return [q[0], q[1], Math.max(r, 0.25)];
  });
  return { path: unionPath(simplifyQ(Q)) };
}
function inkPath(it) {
  const n = it.pts.length, l = it.pts[n - 1];
  const key = `${n}|${it.w}|${it.k}|${it.pts[0][0]},${it.pts[0][1]}|${l[0]},${l[1]}`;
  const c = inkCache.get(it); if (c && c.key === key) return c.ink;
  const ink = buildInk(it); inkCache.set(it, { key, ink }); return ink;
}
const pw = (p) => 0.3 + p * 1.25;
function drawStroke(ctx, it) {
  const pts = it.pts; if (!pts || !pts.length) return;
  if (it.k && !it.er && !it.hl) {
    ctx.save(); ctx.fillStyle = adapt(it.c); ctx.globalAlpha = (it.k === 'pencil' ? 0.8 : 1) * (it.o ?? 1);
    const ink = inkPath(it);
    if (ink.stroke) { ctx.strokeStyle = ctx.fillStyle; ctx.lineWidth = ink.lw; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke(ink.path); }
    else ctx.fill(ink.path);
    ctx.restore(); return;
  }
  ctx.save();
  if (it.er) { ctx.globalCompositeOperation = 'destination-out'; ctx.strokeStyle = ctx.fillStyle = '#000'; }
  else { ctx.strokeStyle = ctx.fillStyle = adapt(it.c); ctx.globalAlpha = (it.hl ? 0.38 : 1) * (it.o ?? 1); }
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

const imgCache = new Map();
function getImg(src) {
  let im = imgCache.get(src);
  if (!im) { im = new Image(); im.onload = () => { cacheValid = false; req(); }; im.src = src; imgCache.set(src, im); }
  return im;
}
function drawImageItem(ctx, it) {
  const x = Math.min(it.x1, it.x2), y = Math.min(it.y1, it.y2), w = Math.abs(it.x2 - it.x1), h = Math.abs(it.y2 - it.y1);
  const im = getImg(it.src);
  if (it.pdf) { ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.18)'; ctx.shadowBlur = 24; ctx.shadowOffsetY = 6; ctx.fillStyle = '#fff'; ctx.fillRect(x, y, w, h); ctx.restore(); }
  if (im.complete && im.naturalWidth) ctx.drawImage(im, x, y, w, h);
  if (it.pdf) { ctx.save(); ctx.strokeStyle = 'rgba(0,0,0,.14)'; ctx.lineWidth = 1; ctx.strokeRect(x, y, w, h); ctx.restore(); }
  else { ctx.save(); ctx.fillStyle = 'rgba(118,118,128,.12)'; ctx.fillRect(x, y, w, h); ctx.restore(); }
}
function drawImages(ctx, p) { for (const it of p.items) if (it.t === 'image') drawImageItem(ctx, it); }
// Capa de fondo: imágenes, gráficas y todo lo bloqueado se dibuja debajo de la tinta (la goma no lo borra).
const onBg = (it) => it.t === 'image' || it.t === 'plane' || !!it.locked;
function drawBgItems(ctx, p) {
  for (const it of p.items) {
    if (!onBg(it)) continue;
    ctx.save();
    try { if (it.t === 'image') drawImageItem(ctx, it); else drawItem(ctx, it); }
    catch (err) { if (!drawErrShown) { drawErrShown = true; console.error('No se pudo dibujar un elemento', it && it.t, err); } }
    finally { ctx.restore(); }
  }
}
const FONT = (size) => `${size}px "Segoe UI","Cambria Math",system-ui,sans-serif`;
function drawText(ctx, it) {
  ctx.save(); ctx.fillStyle = adapt(it.c); ctx.globalAlpha = it.o ?? 1; ctx.font = FONT(it.size); ctx.textBaseline = 'top'; ctx.textAlign = 'left';
  const lines = it.s.split('\n');
  lines.forEach((l, i) => ctx.fillText(l, it.x, it.y + it.size * 0.125 + i * it.size * 1.25));
  ctx.restore();
}

function drawItem(ctx, it) {
  switch (it.t) {
    case 'image': return;
    case 'math': return drawMath(ctx, it);
    case 'stroke': return drawStroke(ctx, it);
    case 'text': return drawText(ctx, it);
    case 'plane': return drawPlane(ctx, it);
  }
  ctx.save(); ctx.strokeStyle = adapt(it.c); ctx.lineWidth = it.w; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.globalAlpha = it.o ?? 1;
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
    const m = it.w * (it.pr || it.k ? 0.9 : 0.5) + (it.t === 'poly' ? 1 : 0); return [a - m, b - m, c + m, d + m];
  }
  if (it.t === 'math') return mathBox(it);
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
  for (let i = items.length - 1; i >= 0; i--) { const it = items[i]; if (onBg(it) || (type && it.t !== type)) continue; if (hit(it, x, y, r)) return it; }
  for (let i = items.length - 1; i >= 0; i--) { const it = items[i]; if (!onBg(it) || (type && it.t !== type)) continue; if (hit(it, x, y, r)) return it; }
  return null;
}
function moveItem(it, dx, dy) {
  if (it.t === 'stroke' || it.t === 'poly') { for (const p of it.pts) { p[0] = r2(p[0] + dx); p[1] = r2(p[1] + dy); } }
  else if (it.t === 'text' || it.t === 'math') { it.x += dx; it.y += dy; }
  else { it.x1 += dx; it.x2 += dx; it.y1 += dy; it.y2 += dy; }
}

/* ---------- Render ---------- */
function req() { if (!raf) raf = requestAnimationFrame(render); }
// Deja el contexto limpio: sin recortes, transformaciones ni estados guardados que hayan quedado de un dibujo interrumpido.
function resetCtx(ctx) {
  if (ctx.reset) ctx.reset();
  else { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'; ctx.setLineDash([]); ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
}
let drawErrShown = false;
function drawSafe(ctx, it) {
  ctx.save();
  try { drawItem(ctx, it); }
  catch (err) { if (!drawErrShown) { drawErrShown = true; console.error('No se pudo dibujar un elemento', it && it.t, err); } }
  finally { ctx.restore(); }
}
function render() {
  raf = 0;
  const p = P(), v = view();
  paintBoard = BOARDS[p.board] || BOARDS.white;
  resetCtx(bgX); resetCtx(inkX);
  drawBg(bgX, p, v, W, H, DPR);
  bgX.setTransform(DPR * v.s, 0, 0, DPR * v.s, DPR * v.x, DPR * v.y);
  drawBgItems(bgX, p);
  inkX.setTransform(1, 0, 0, 1, 0, 0);
  if (useCache && cacheValid) inkX.drawImage(cacheC, 0, 0);
  else {
    inkX.setTransform(DPR * v.s, 0, 0, DPR * v.s, DPR * v.x, DPR * v.y);
    for (const it of p.items) if (!onBg(it)) drawSafe(inkX, it);
    if (useCache) {
      cacheX.setTransform(1, 0, 0, 1, 0, 0); cacheX.clearRect(0, 0, cacheC.width, cacheC.height);
      cacheX.drawImage(inkC, 0, 0); cacheValid = true;
    }
  }
  inkX.setTransform(DPR * v.s, 0, 0, DPR * v.s, DPR * v.x, DPR * v.y);
  if (live) drawSafe(inkX, live);
  try { drawOverlay(); } catch (err) { console.error(err); }
  if (edState) layoutEditor();
  if (laser.length || laserOn) req();
}
function drawOverlay() {
  resetCtx(ovX);
  updateSelBar();
  drawInstruments(ovX); drawCompassGuide(ovX);
  ovX.setTransform(DPR, 0, 0, DPR, 0, 0);
  if (S.sel.length) {
    const b = unionBox(S.sel);
    if (b) {
      const [ax, ay] = toScreen(b[0], b[1]), [bx, by] = toScreen(b[2], b[3]);
      const lk = S.sel.some((i) => i.locked);
      ovX.strokeStyle = lk ? 'rgba(142,142,147,.95)' : '#0071E3'; ovX.lineWidth = 1.5; ovX.setLineDash([6, 4]);
      ovX.strokeRect(ax - 6, ay - 6, bx - ax + 12, by - ay + 12); ovX.setLineDash([]);
      for (const hd of resizeHandles()) { ovX.fillStyle = '#fff'; ovX.strokeStyle = '#0071E3'; ovX.lineWidth = 2; ovX.beginPath(); ovX.arc(hd.sx, hd.sy, lastPtr === 'mouse' ? 6.5 : 9, 0, Math.PI * 2); ovX.fill(); ovX.stroke(); }
    }
  }
  if (gp.it && P().items.includes(gp.it)) {
    const g = planeGeom(gp.it), [ax, ay] = toScreen(g.x, g.y), [bx, by] = toScreen(g.x + g.w, g.y + g.h);
    ovX.strokeStyle = 'rgba(0,113,227,.55)'; ovX.lineWidth = 2; ovX.beginPath(); ovX.roundRect(ax - 4, ay - 4, bx - ax + 8, by - ay + 8, 8); ovX.stroke();
  }
  if (hover && !act && !edState && (gp.it || ['select', 'hand', 'func', 'plane', 'laser'].includes(S.tool))) {
    const t = traceAt(hover[0], hover[1]);
    if (t) {
      const [sx, sy] = toScreen(t.wx, t.wy);
      ovX.fillStyle = t.c; ovX.strokeStyle = '#fff'; ovX.lineWidth = 2;
      ovX.beginPath(); ovX.arc(sx, sy, 5.5, 0, Math.PI * 2); ovX.fill(); ovX.stroke();
      const label = `${t.name ? t.name + ': ' : ''}(${fmt2(t.X)}, ${fmt2(t.Y)})`;
      ovX.font = '600 13px -apple-system,"Segoe UI",system-ui,sans-serif';
      const tw = ovX.measureText(label).width + 18;
      ovX.fillStyle = 'rgba(28,28,30,.92)'; ovX.beginPath(); ovX.roundRect(sx + 10, sy - 34, tw, 26, 13); ovX.fill();
      ovX.fillStyle = '#fff'; ovX.textAlign = 'left'; ovX.textBaseline = 'middle'; ovX.fillText(label, sx + 19, sy - 21);
    }
  }
  const fk = 1 - (performance.now() - flashT) / 350;
  if (fk > 0 && live) {
    const b = bbox(live), [ax, ay] = toScreen(b[0], b[1]), [bx, by] = toScreen(b[2], b[3]);
    ovX.strokeStyle = `rgba(0,113,227,${0.45 * fk})`; ovX.lineWidth = 2;
    ovX.beginPath(); ovX.roundRect(ax - 8, ay - 8, bx - ax + 16, by - ay + 16, 10); ovX.stroke(); req();
  }
  if (act && act.type === 'lasso' && act.pts.length > 1) {
    ovX.beginPath(); act.pts.forEach(([x, y], i) => { const [sx, sy] = toScreen(x, y); if (i) ovX.lineTo(sx, sy); else ovX.moveTo(sx, sy); });
    ovX.closePath(); ovX.fillStyle = 'rgba(0,113,227,.08)'; ovX.fill();
    ovX.setLineDash([6, 5]); ovX.lineDashOffset = -(performance.now() / 40) % 11; ovX.strokeStyle = '#0071E3'; ovX.lineWidth = 1.6; ovX.stroke(); ovX.setLineDash([]);
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
  if (act && act.type === 'brushAdj') drawSizeGuide(ovX, act.cx, act.cy, 1);
  else {
    const age = performance.now() - sizeGuide;
    if (age < 1100 && S.tool !== 'eraser') {
      const p0 = hover || [W / 2, H / 2];
      drawSizeGuide(ovX, p0[0], p0[1], age < 700 ? 1 : 1 - (age - 700) / 400); req();
    }
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
function undo() { commitEditor(); closeGraphPanel(); const p = P(); if (!p.undo.length) return; p.redo.push(JSON.stringify(p.items)); p.items = JSON.parse(p.undo.pop()); S.sel = []; changed(); }
function redo() { commitEditor(); closeGraphPanel(); const p = P(); if (!p.redo.length) return; p.undo.push(JSON.stringify(p.items)); p.items = JSON.parse(p.redo.pop()); S.sel = []; changed(); }
let saveTimer = 0, dirty = false;
function changed() {
  if (gp.it && gp.page && !gp.page.items.includes(gp.it)) { gp.it = null; gp.before = null; gp.page = null; gp.playing.clear(); $('#graphPanel').classList.remove('show'); }
  cacheValid = false; dirty = true; req(); updateHistoryUI(); setTitle();
  clearTimeout(saveTimer); saveTimer = setTimeout(idleSave, 700);
}
// El autoguardado serializa toda la pizarra: se hace cuando el navegador está libre y nunca a mitad de un trazo.
function idleSave() {
  if (act) { saveTimer = setTimeout(idleSave, 400); return; }
  if (window.requestIdleCallback) requestIdleCallback(() => (act ? idleSave() : autosave()), { timeout: 800 }); else autosave();
}
function serialize() {
  return JSON.stringify({ app: 'mi-pizarra', version: 1, cur, pages: doc.pages.map((p) => ({ bg: p.bg, board: p.board, view: p.view, items: p.items })), ...(FP.items.length ? { float: FP.items } : {}) });
}
let quotaWarned = false;
function autosave() {
  try { localStorage.setItem('mi-pizarra-autosave', serialize()); localStorage.setItem('mi-pizarra-name', filePath || ''); quotaWarned = false; }
  catch (_) { if (!quotaWarned) { quotaWarned = true; toast('Las imágenes ocupan mucho para el autoguardado: guarda con Ctrl+S'); } }
}
function loadText(text, path, quiet) {
  try {
    const d = JSON.parse(text);
    if (!d || !Array.isArray(d.pages) || !d.pages.length) throw 0;
    doc = { pages: d.pages.map((p) => ({ bg: BGS.some((b) => b[0] === p.bg) ? p.bg : 'grid', board: BOARDS[p.board] ? p.board : 'white', items: Array.isArray(p.items) ? p.items : [], undo: [], redo: [], view: p.view && isFinite(p.view.s) ? p.view : null })) };
    for (const pg of doc.pages) { try { migrateErasers(pg); } catch (err) { console.error(err); } }
    cur = clamp(d.cur | 0, 0, doc.pages.length - 1); filePath = path || null; S.sel = []; dirty = false;
    FP.items = Array.isArray(d.float) ? d.float.filter((i) => i && FP_TYPES.includes(i.t)) : []; FP.undo = []; FP.redo = []; fpDraw();
    syncColorToBoard(); afterPageChange(); if (!quiet) toast('Pizarra abierta');
    return true;
  } catch (_) { if (!quiet) toast('No se pudo abrir: archivo no válido'); return false; }
}
function setTitle() {
  document.title = filePath ? `${dirty ? '• ' : ''}${filePath} — Mi Pizarra` : 'Mi Pizarra';
}

/* ---------- Puntero ---------- */
function setCursor() {
  const c = { select: 'default', hand: 'grab', text: 'text', math: 'text', eraser: 'none', laser: 'none' }[S.tool] || 'crosshair';
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
  lastPtr = e.pointerType || 'mouse';
  closePops();
  if (mx.st) { commitMath(); if (S.tool === 'math') { e.preventDefault(); return; } }
  if (edState) { commitEditor(); if (S.tool === 'text') { e.preventDefault(); return; } }
  if (e.pointerType === 'pen') penSeen = true;
  if (e.pointerType === 'touch') {
    touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (touches.size === 2) { live = null; useCache = false; laserOn = false; act = startPinch(); req(); return; }
    if (touches.size > 2) return;
    if (penSeen) { try { ovC.setPointerCapture(e.pointerId); } catch (_) {} startPan(e); return; }
  }
  try { ovC.setPointerCapture(e.pointerId); } catch (_) {}
  hover = [e.clientX, e.clientY];
  if ((e.altKey && e.button === 2) || (e.altKey && e.ctrlKey && e.button === 0)) {
    const wc = widthCfg();
    if (wc) {
      const oc = opCfg();
      act = { type: 'brushAdj', id: e.pointerId, sx: e.clientX, sy: e.clientY, cx: e.clientX, cy: e.clientY, w0: wc.v, o0: oc ? oc.v : null, cfg: wc.cfg };
      ovC.style.cursor = 'none'; drawOverlay(); return;
    }
  }
  const barrel = e.pointerType === 'pen' && e.button === 2;
  if (barrel && S.penBtn === 'next') { cyclePen(1); return; }
  if (e.button === 1 || (e.button === 2 && !(barrel && S.penBtn === 'eraser')) || spaceDown || S.tool === 'hand') { startPan(e); return; }
  const penEraser = e.pointerType === 'pen' && (e.button === 5 || (e.buttons & 32) || (barrel && S.penBtn === 'eraser'));
  if (e.button !== 0 && !penEraser) return;
  const tool = penEraser ? 'eraser' : S.tool;
  const v = view(); const [wx, wy] = toWorld(e.clientX, e.clientY);
  const id = e.pointerId;
  if (trackTap(e) && onDouble(e.clientX, e.clientY)) return;
  const ih = insHit(wx, wy);
  if (ih) { insStart(e, wx, wy, ih); return; }
  if (gp.it && (tool === 'func' || tool === 'plane') && P().items.includes(gp.it) && inPlane(gp.it, wx, wy)) {
    act = { type: 'gpan', id, sx: e.clientX, sy: e.clientY, ox0: gp.it.ox || 0, oy0: gp.it.oy || 0 }; ovC.style.cursor = 'grabbing'; return;
  }
  if (gp.it && (tool === 'func' || tool === 'plane')) { graphDone(); return; }
  switch (tool) {
    case 'pen': {
      const pre = curPreset(), hl = pre.k === 'hl';
      live = { t: 'stroke', c: pre.c, w: r2(pre.w / v.s), pts: [[r2(wx), r2(wy), pr(e)]] };
      if (hl) live.hl = 1; else live.k = pre.k;
      if ((pre.o ?? 1) < 1) live.o = pre.o;
      if (e.pointerType === 'pen') live.pr = 1;
      act = { type: 'draw', id, assist: true, sm: [wx, wy], raw: [wx, wy], hx: e.clientX, hy: e.clientY, last: e };
      const rs = rulerSnapFor(wx, wy, live.w);
      if (rs) { act.assist = false; act.ruler = rs; const [px, py] = rulerProject(wx, wy, rs.off); live.pts = [[r2(px), r2(py), 0.5]]; delete live.pr; if (live.k && live.k !== 'pencil') live.k = 'marker'; }
      else armHold();
      useCache = true; cacheValid = false; break;
    }
    case 'eraser':
      if (S.eraserMode === 'stroke') { act = { type: 'erase', id, did: false, tempEraser: penEraser }; eraseAt(wx, wy); }
      else { act = { type: 'erase', area: true, id, did: false, tempEraser: penEraser, last: [wx, wy] }; eraseArea([wx, wy], [wx, wy], WIDTHS.eraser.v / 2 / v.s); }
      break;
    case 'line': case 'arrow': case 'rect': case 'ellipse': case 'triangle': case 'plane': case 'func': {
      const t = tool === 'func' ? 'plane' : tool;
      let x = wx, y = wy; if (t === 'plane') { x = Math.round(x / GRID) * GRID; y = Math.round(y / GRID) * GRID; }
      live = { t, x1: x, y1: y, x2: x, y2: y, c: S.color, w: r2(WIDTHS.shape.v / v.s) };
      if (t !== 'plane' && S.op < 1) live.o = S.op;
      if (t === 'plane') { live.grid = true; live.ex = []; live.params = {}; live.u = GRID; live.kx = 1; live.ky = 1; live.w = Math.max(live.w, 2); }
      act = { type: 'shape', tool, id, sx: e.clientX, sy: e.clientY, wx, wy }; useCache = true; cacheValid = false; break;
    }
    case 'text': {
      e.preventDefault();
      const h = hitTest(wx, wy, 4 / v.s, 'text');
      openEditor(h ? { item: h } : { x: wx, y: wy }); break;
    }
    case 'math': {
      e.preventDefault();
      const h = hitTest(wx, wy, 4 / v.s, 'math');
      openMathEditor(h ? { item: h } : { x: wx, y: wy - WIDTHS.text.v * 0.6 / v.s }); break;
    }
    case 'compass': act = { type: 'compass', id, C: [wx, wy], P: [wx, wy], r: 0, a0: null, last: 0, sweep: 0, lockR: false }; useCache = true; cacheValid = false; break;
    case 'laser': act = { type: 'laser', id }; laserOn = true; laser.push({ x: wx, y: wy, t: performance.now() }); break;
    case 'select': selectDown(e, wx, wy); break;
    case 'lasso': lassoDown(e, wx, wy); break;
  }
  req();
});

ovC.addEventListener('pointermove', (e) => {
  hover = [e.clientX, e.clientY];
  if (CL.spot) moveSpot(e.clientX, e.clientY);
  if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
    touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (act && act.type === 'pinch') { doPinch(); return; }
  }
  if (!act) {
    drawOverlay();
    if (CL.spot) moveSpot(e.clientX, e.clientY);
    { const [hx, hy] = toWorld(e.clientX, e.clientY), ih = insHit(hx, hy); if (ih) { ovC.style.cursor = ih.part === 'rot' ? 'alias' : 'grab'; return; } else if (ovC.style.cursor === 'grab' && S.tool !== 'hand' && !spaceDown) setCursor(); }
    if (isSelTool(S.tool)) { const hd = handleAt(e.clientX, e.clientY); ovC.style.cursor = hd ? (hd.c === 'nw' || hd.c === 'se' ? 'nwse-resize' : 'nesw-resize') : 'default'; }
    if (S.tool === 'laser') req(); return;
  }
  const v = view();
  if (act.type === 'pan') {
    if (e.pointerId !== act.id) return;
    v.x = act.v0.x + (e.clientX - act.sx); v.y = act.v0.y + (e.clientY - act.sy); cacheValid = false; req(); return;
  }
  if (e.pointerId !== act.id) return;
  if (act.type === 'brushAdj') {
    const dx = e.clientX - act.sx, dy = e.clientY - act.sy, cfg = act.cfg;
    const nw = clamp(Math.round(act.w0 * Math.exp(dx / 140)), cfg.min, cfg.max); // proporcional: fino en tamaños chicos, rápido en grandes
    setWidth(nw, true);
    if (act.o0 !== null) setOpacity(Math.round(clamp(act.o0 - dy / 220, 0.1, 1) * 20) / 20, true);
    drawOverlay(); return;
  }
  if (act.type === 'insMove' || act.type === 'insRot') { const [x, y] = toWorld(e.clientX, e.clientY); insMoveTo(x, y); drawOverlay(); return; }
  if (act.type === 'compass') {
    const [x, y] = toWorld(e.clientX, e.clientY); act.P = [x, y];
    const r = Math.hypot(x - act.C[0], y - act.C[1]), th = Math.atan2(y - act.C[1], x - act.C[0]);
    if (!act.lockR) act.r = r;
    if (act.a0 === null) { if (r * v.s > 10) { act.a0 = th; act.last = th; } }
    else {
      let d = th - act.last; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      act.sweep = clamp(act.sweep + d, -2 * Math.PI, 2 * Math.PI); act.last = th;
      if (Math.abs(act.sweep) > 0.18) act.lockR = true;
    }
    live = act.a0 !== null && Math.abs(act.sweep) > 0.01 ? { t: 'stroke', k: 'marker', c: S.color, w: r2(WIDTHS.shape.v / v.s), pts: compassPoints(act.C, act.r, act.a0, act.sweep), o: S.op } : null;
    req(); return;
  }
  if (act.type === 'gpan') {
    const u = gp.it.u || GRID;
    gp.it.ox = +(act.ox0 + (e.clientX - act.sx) / v.s / u).toFixed(4); gp.it.oy = +(act.oy0 + (e.clientY - act.sy) / v.s / u).toFixed(4);
    gpChanged(); return;
  }
  let evs = e.getCoalescedEvents ? e.getCoalescedEvents() : null; if (!evs || !evs.length) evs = [e];
  const [wx, wy] = toWorld(e.clientX, e.clientY);
  switch (act.type) {
    case 'draw': {
      const f = act.assist ? SMOOTH[S.smooth] : 0;
      for (const ev of evs) {
        let [x, y] = toWorld(ev.clientX, ev.clientY);
        if (act.ruler) [x, y] = rulerProject(x, y, act.ruler.off);
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
    case 'erase':
      for (const ev of evs) {
        const [x, y] = toWorld(ev.clientX, ev.clientY);
        if (act.area) { eraseArea(act.last, [x, y], WIDTHS.eraser.v / 2 / v.s); act.last = [x, y]; } else eraseAt(x, y);
      }
      break;
    case 'shape': {
      let x = wx, y = wy;
      if (live.t === 'plane') { x = Math.round(x / GRID) * GRID; y = Math.round(y / GRID) * GRID; }
      if (e.shiftKey) [x, y] = constrain(live, x, y);
      live.x2 = r2(x); live.y2 = r2(y); break;
    }
    case 'laser': for (const ev of evs) { const [x, y] = toWorld(ev.clientX, ev.clientY); laser.push({ x, y, t: performance.now() }); } break;
    case 'marquee': act.x2 = wx; act.y2 = wy; break;
    case 'lasso': for (const ev of evs) { const [x, y] = toWorld(ev.clientX, ev.clientY), l = act.pts[act.pts.length - 1]; if (Math.hypot(x - l[0], y - l[1]) * v.s > 2) act.pts.push([x, y]); } break;
    case 'resize': {
      if (!act.moved) { snap(); act.moved = true; }
      const it = act.it, sx = act.c.includes('w') ? -1 : 1, sy = act.c.includes('n') ? -1 : 1;
      if (act.group) {
        // Escala proporcional de toda la selección desde la esquina opuesta.
        const f = Math.max(0.05, Math.max((sx * (wx - act.ax)) / act.w0, (sy * (wy - act.ay)) / act.h0));
        S.sel.forEach((item, k) => Object.assign(item, scaledItem(act.orig[k], act.ax, act.ay, f)));
        act.f = f;
      } else if (it.t === 'plane') {
        // Recuadro libre, ajustado a la cuadrícula; el origen de los ejes no se mueve.
        let nx = Math.round(wx / GRID) * GRID, ny = Math.round(wy / GRID) * GRID;
        const minS = GRID * 3;
        if ((nx - act.ax) * sx < minS) nx = act.ax + sx * minS;
        if ((ny - act.ay) * sy < minS) ny = act.ay + sy * minS;
        if (e.shiftKey) { const d = Math.max(Math.abs(nx - act.ax), Math.abs(ny - act.ay)); nx = act.ax + sx * d; ny = act.ay + sy * d; }
        it.x1 = Math.min(act.ax, nx); it.x2 = Math.max(act.ax, nx); it.y1 = Math.min(act.ay, ny); it.y2 = Math.max(act.ay, ny);
        const g = planeGeom({ ...it, ox: 0, oy: 0 }), u = g.u;
        it.ox = +((act.origin[0] - g.ox) / u).toFixed(4); it.oy = +((act.origin[1] - g.oy) / u).toFixed(4);
      } else {
        // Imagen: mantiene la proporción, crece desde la esquina opuesta.
        const w = Math.max(20 / v.s, Math.abs(wx - act.ax), Math.abs(wy - act.ay) / act.ratio), h = w * act.ratio;
        const nx = act.ax + sx * w, ny = act.ay + sy * h;
        it.x1 = r2(Math.min(act.ax, nx)); it.x2 = r2(Math.max(act.ax, nx)); it.y1 = r2(Math.min(act.ay, ny)); it.y2 = r2(Math.max(act.ay, ny));
      }
      cacheValid = false; break;
    }
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
    case 'pan': case 'gpan': case 'insMove': case 'insRot': setCursor(); break;
    case 'brushAdj': {
      setCursor(); const wc = widthCfg(), oc = opCfg();
      if (wc) setWidth(wc.v); if (oc) setOpacity(oc.v);
      if (S.tool === 'pen') { savePresets(); buildPresets(); }
      showSizeGuide(); break;
    }
    case 'compass': {
      const v = view(); live = null; useCache = false;
      if (a.a0 !== null && a.r * v.s > 6 && e.type !== 'pointercancel') {
        const sweep = Math.abs(a.sweep) < 0.09 ? 2 * Math.PI : a.sweep;
        snap(); P().items.push({ t: 'stroke', k: 'marker', c: S.color, w: r2(WIDTHS.shape.v / v.s), pts: compassPoints(a.C, a.r, a.a0, sweep), ...(S.op < 1 ? { o: S.op } : {}) });
      }
      changed(); break;
    }
    case 'draw':
      clearTimeout(holdTimer);
      if (live && live.pts.length && e.type !== 'pointercancel') {
        if (a.assist && S.smooth && a.raw && live.pts.length > 2) {
          const l = live.pts[live.pts.length - 1];
          if (Math.hypot(a.raw[0] - l[0], a.raw[1] - l[1]) > 0.5 / view().s) live.pts.push([r2(a.raw[0]), r2(a.raw[1]), l[2]]);
          smoothPts(live.pts, [0, 1, 2, 4][S.smooth]);
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
      const found = P().items.filter((it) => { if (it.er || it.locked) return false; const b = bbox(it); return b[0] <= r[2] && b[2] >= r[0] && b[1] <= r[3] && b[3] >= r[1]; });
      S.sel = a.add ? [...new Set([...S.sel, ...found])] : found; break;
    }
    case 'move': case 'resize': if (a.moved) changed(); break;
    case 'lasso': finishLasso(a); break;
  }
  req();
}
ovC.addEventListener('pointerup', endPointer);
ovC.addEventListener('pointercancel', endPointer);
ovC.addEventListener('pointerleave', () => { if (!act) { hover = null; req(); } });
ovC.addEventListener('contextmenu', (e) => e.preventDefault());
ovC.addEventListener('dblclick', (e) => onDouble(e.clientX, e.clientY));
let lastTap = { t: 0, x: 0, y: 0 };
function trackTap(e) {
  if (e.pointerType === 'mouse') return false;
  const now = performance.now(), dbl = now - lastTap.t < 320 && Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 30;
  lastTap = dbl ? { t: 0, x: 0, y: 0 } : { t: now, x: e.clientX, y: e.clientY };
  return dbl;
}
function onDouble(cx, cy) {
  if (!isSelTool(S.tool) && S.tool !== 'func' && S.tool !== 'plane' && S.tool !== 'math') return false;
  const [wx, wy] = toWorld(cx, cy);
  const mth = hitTest(wx, wy, 4 / view().s, 'math');
  if (mth && !mth.locked) { act = null; openMathEditor({ item: mth }); return true; }
  const it = hitTest(wx, wy, 4 / view().s, 'plane');
  if (it) { act = null; openGraphPanel(it, false); return true; }
  return false;
}
let gpWheel = 0, sizeWheel = 0;
ovC.addEventListener('wheel', (e) => {
  e.preventDefault();
  const v = view();
  { const [wx, wy] = toWorld(e.clientX, e.clientY), ih = insHit(wx, wy);
    if (ih) { const o = INS[ih.which], [cx, cy] = insCenter(ih.which), step = (e.shiftKey ? 15 : 1) * Math.PI / 180 * Math.sign(e.deltaY || e.deltaX);
      const na = Math.round((o.a + step) * 180 / Math.PI) * Math.PI / 180;
      if (ih.which === 'ruler') { const [dx, dy] = rot(RULER_LEN / 2, RULER_W / 2, na); o.x = cx - dx; o.y = cy - dy; }
      o.a = na; drawOverlay(); return; } }
  if (gp.it && (S.tool === 'func' || S.tool === 'plane')) {
    const [wx, wy] = toWorld(e.clientX, e.clientY);
    if (inPlane(gp.it, wx, wy)) { gpWheel += e.deltaY; if (Math.abs(gpWheel) >= 60) { zoomPlane(gp.it, gpWheel > 0 ? 1 : -1, wx, wy); gpWheel = 0; } return; }
  }
  if (e.ctrlKey || e.metaKey) { zoomAt(Math.exp(-clamp(e.deltaY, -60, 60) * 0.008), e.clientX, e.clientY); return; }
  if (S.wheel === 'zoom' && !e.shiftKey) { zoomAt(Math.exp(-clamp(e.deltaY, -60, 60) * 0.006), e.clientX, e.clientY); return; }
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

/* Goma: corta los trazos de verdad (no pinta encima), así lo borrado sigue borrado al mover o redimensionar. */
const CUTTABLE = ['stroke', 'line', 'arrow', 'rect', 'ellipse', 'triangle', 'poly'];
function asStrokes(it) {
  // Convierte una figura en trazos de puntos para poder cortarla.
  const base = { t: 'stroke', k: 'marker', c: it.c, w: it.w, ct: true };
  const P = (x, y) => [r2(x), r2(y), 0.5];
  if (it.t === 'stroke') return [it];
  if (it.t === 'line') return [{ ...base, pts: [P(it.x1, it.y1), P(it.x2, it.y2)] }];
  if (it.t === 'arrow') {
    const a = Math.atan2(it.y2 - it.y1, it.x2 - it.x1), L = Math.max(10, it.w * 3.5);
    return [{ ...base, pts: [P(it.x1, it.y1), P(it.x2, it.y2)] },
      { ...base, pts: [P(it.x2 - L * Math.cos(a - 0.45), it.y2 - L * Math.sin(a - 0.45)), P(it.x2, it.y2), P(it.x2 - L * Math.cos(a + 0.45), it.y2 - L * Math.sin(a + 0.45))] }];
  }
  if (it.t === 'rect') { const l = Math.min(it.x1, it.x2), r = Math.max(it.x1, it.x2), t = Math.min(it.y1, it.y2), b = Math.max(it.y1, it.y2); return [{ ...base, pts: [P(l, t), P(r, t), P(r, b), P(l, b), P(l, t)] }]; }
  if (it.t === 'triangle') { const q = triPts(it); return [{ ...base, pts: [...q.map(([x, y]) => P(x, y)), P(q[0][0], q[0][1])] }]; }
  if (it.t === 'ellipse') {
    const cx = (it.x1 + it.x2) / 2, cy = (it.y1 + it.y2) / 2, rx = Math.abs(it.x2 - it.x1) / 2, ry = Math.abs(it.y2 - it.y1) / 2, n = 96, pts = [];
    for (let i = 0; i <= n; i++) { const t = (i / n) * Math.PI * 2; pts.push(P(cx + rx * Math.cos(t), cy + ry * Math.sin(t))); }
    return [{ ...base, pts }];
  }
  if (it.t === 'poly') { const pts = it.pts.map(([x, y]) => P(x, y)); if (it.closed) pts.push(P(it.pts[0][0], it.pts[0][1])); return [{ ...base, pts }]; }
  return [it];
}
function densifyPts(pts, maxGap) {
  const out = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i], d = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.ceil(d / maxGap);
    for (let k = 1; k < n; k++) { const t = k / n; out.push([r2(a[0] + (b[0] - a[0]) * t), r2(a[1] + (b[1] - a[1]) * t), (a[2] ?? 0.5) + ((b[2] ?? 0.5) - (a[2] ?? 0.5)) * t]); }
    out.push(b);
  }
  return out;
}
function cutStroke(st, A, B, R) {
  const tol = R + st.w * 0.35;
  const pts = densifyPts(st.pts, Math.max(0.5, Math.min(R, tol) * 0.5));
  const keep = pts.map((p) => segDist(p[0], p[1], A[0], A[1], B[0], B[1]) > tol);
  if (keep.every(Boolean)) return null;
  const runs = []; let cur = [];
  pts.forEach((p, i) => { if (keep[i]) cur.push(p); else { if (cur.length) runs.push(cur); cur = []; } });
  if (cur.length) runs.push(cur);
  return runs.filter((r) => r.length > 1 || st.pts.length === 1).map((r) => ({ ...st, pts: r, ct: true }));
}
function eraseArea(A, B, R, items = P().items, track = true) {
  const minx = Math.min(A[0], B[0]) - R, maxx = Math.max(A[0], B[0]) + R, miny = Math.min(A[1], B[1]) - R, maxy = Math.max(A[1], B[1]) + R;
  let changedAny = false;
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i];
    if (it.er || onBg(it) || !CUTTABLE.includes(it.t)) continue;
    const b = bbox(it); if (b[2] < minx || b[0] > maxx || b[3] < miny || b[1] > maxy) continue;
    const parts = asStrokes(it); let touched = false; const out = [];
    for (const st of parts) { const cut = cutStroke(st, A, B, R); if (cut) { touched = true; out.push(...cut); } else out.push(st); }
    if (!touched) continue;
    if (track && act && !act.did) { snap(); act.did = true; }
    items.splice(i, 1, ...out); changedAny = true;
    if (S.sel.includes(it)) S.sel = S.sel.filter((s) => s !== it);
  }
  if (changedAny) cacheValid = false;
  return changedAny;
}
// Pizarras guardadas con la goma antigua: convierte esas marcas en cortes reales.
function migrateErasers(page) {
  if (!page.items.some((i) => i.er)) return;
  const out = [];
  for (const it of page.items) {
    if (!it.er) { out.push(it); continue; }
    const R = it.w / 2, pts = it.pts;
    if (pts.length === 1) eraseArea(pts[0], pts[0], R, out, false);
    for (let k = 1; k < pts.length; k++) eraseArea(pts[k - 1], pts[k], R, out, false);
  }
  page.items = out;
}
function eraseAt(x, y) {
  const items = P().items, r = WIDTHS.eraser.v / 2 / view().s;
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i].t === 'image' || items[i].t === 'plane' || items[i].locked) continue;
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
    if (a.tool === 'func') { snap(); P().items.push(it); changed(); openGraphPanel(it, true); return; }
  } else if (tiny) { req(); return; }
  snap(); P().items.push(it); changed();
  if (it.t === 'plane') { setTool('select'); S.sel = [it]; setTimeout(() => { updateSelBar(); req(); }, 0); }
}

/* Manijas para cambiar el tamaño de imágenes y gráficas (una sola selección). */
const RESIZABLE = ['image', 'plane'];
const singlePlane = () => S.sel.length === 1 && S.sel[0].t === 'plane';
function selBox() {
  if (singlePlane()) { const it = S.sel[0]; return [Math.min(it.x1, it.x2), Math.min(it.y1, it.y2), Math.max(it.x1, it.x2), Math.max(it.y1, it.y2)]; }
  return unionBox(S.sel);
}
// Escala un elemento (copia original) respecto a un punto fijo (ax, ay).
function scaledItem(o, ax, ay, f) {
  const X = (x) => r2(ax + (x - ax) * f), Y = (y) => r2(ay + (y - ay) * f), n = {};
  if (o.pts) n.pts = o.pts.map((p) => (p.length > 2 ? [X(p[0]), Y(p[1]), p[2]] : [X(p[0]), Y(p[1])]));
  if (o.x1 !== undefined) { n.x1 = X(o.x1); n.x2 = X(o.x2); n.y1 = Y(o.y1); n.y2 = Y(o.y2); }
  if (o.x !== undefined) { n.x = X(o.x); n.y = Y(o.y); }
  if (o.w !== undefined) n.w = r2(Math.max(0.2, o.w * f));
  if (o.size !== undefined) n.size = r2(Math.max(2, o.size * f));
  if (o.t === 'plane') n.u = +((o.u || GRID) * f).toFixed(4);
  return n;
}
function resizeHandles() {
  if (!S.sel.length || S.sel.some((i) => i.locked) || !isSelTool(S.tool)) return [];
  const bx = selBox(); if (!bx) return [];
  const [l, t, r, b] = bx;
  return [['nw', l, t], ['ne', r, t], ['sw', l, b], ['se', r, b]].map(([c, x, y]) => { const [sx, sy] = toScreen(x, y); return { c, sx, sy }; });
}
let lastPtr = 'mouse';
const handleAt = (cx, cy) => resizeHandles().find((h) => Math.hypot(cx - h.sx, cy - h.sy) < (lastPtr === 'mouse' ? 14 : 26)) || null;
const isSelTool = (t) => t === 'select' || t === 'lasso';
/* Selección libre: dibuja un lazo alrededor de lo que quieres seleccionar */
function lassoDown(e, wx, wy) {
  const v = view(), pad = 8 / v.s;
  if (S.sel.length && !e.shiftKey) {
    if (handleAt(e.clientX, e.clientY)) { selectDown(e, wx, wy); return; }
    const b = unionBox(S.sel);
    if (b && !S.sel.some((i) => i.locked) && wx >= b[0] - pad && wx <= b[2] + pad && wy >= b[1] - pad && wy <= b[3] + pad) {
      act = { type: 'move', id: e.pointerId, lx: wx, ly: wy, moved: false }; return;
    }
  }
  if (!e.shiftKey) S.sel = [];
  act = { type: 'lasso', id: e.pointerId, pts: [[wx, wy]], add: e.shiftKey };
}
function pointInPoly(x, y, L) {
  let c = false;
  for (let i = 0, j = L.length - 1; i < L.length; j = i++) {
    const [xi, yi] = L[i], [xj, yj] = L[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}
function finishLasso(a) {
  const L = a.pts, v = view();
  let len = 0; for (let i = 1; i < L.length; i++) len += Math.hypot(L[i][0] - L[i - 1][0], L[i][1] - L[i - 1][1]);
  if (L.length < 3 || len * v.s < 12) {
    // Un toque sin dibujar: selecciona lo que está debajo, como Seleccionar.
    const h = hitTest(L[0][0], L[0][1], 6 / v.s);
    if (h) S.sel = a.add ? [...new Set([...S.sel, h])] : [h];
    req(); return;
  }
  const found = P().items.filter((it) => {
    if (it.er || it.locked) return false;
    if (it.pts && it.pts.length) {
      const step = Math.max(1, Math.floor(it.pts.length / 60)); let inside = 0, n = 0;
      for (let i = 0; i < it.pts.length; i += step) { n++; if (pointInPoly(it.pts[i][0], it.pts[i][1], L)) inside++; }
      return inside / n >= 0.5;
    }
    const b = bbox(it); return pointInPoly((b[0] + b[2]) / 2, (b[1] + b[3]) / 2, L);
  });
  S.sel = a.add ? [...new Set([...S.sel, ...found])] : found;
  if (!found.length && !a.add) toast('No quedó nada dentro del lazo');
  req();
}
function selectDown(e, wx, wy) {
  const v = view(), pad = 8 / v.s;
  const hd = handleAt(e.clientX, e.clientY);
  if (hd) {
    const [l, t, r, b] = selBox();
    const ax = hd.c.includes('w') ? r : l, ay = hd.c.includes('n') ? b : t;
    if (singlePlane()) {
      const it = S.sel[0], g = planeGeom(it);
      act = { type: 'resize', id: e.pointerId, it, c: hd.c, ax, ay, moved: false, origin: [g.ox, g.oy] };
    } else {
      act = { type: 'resize', id: e.pointerId, group: true, c: hd.c, ax, ay, w0: Math.max(1e-6, r - l), h0: Math.max(1e-6, b - t), orig: S.sel.map((i) => JSON.parse(JSON.stringify(i))), moved: false };
    }
    return;
  }
  const b = S.sel.length ? unionBox(S.sel) : null;
  const selLocked = S.sel.some((i) => i.locked);
  if (b && !selLocked && !e.shiftKey && wx >= b[0] - pad && wx <= b[2] + pad && wy >= b[1] - pad && wy <= b[3] + pad) {
    act = { type: 'move', id: e.pointerId, lx: wx, ly: wy, moved: false }; return;
  }
  const h = hitTest(wx, wy, 6 / v.s);
  if (h) {
    if (h.locked) { S.sel = [h]; act = null; return; }
    if (e.shiftKey) S.sel = S.sel.includes(h) ? S.sel.filter((s) => s !== h) : [...S.sel.filter((i) => !i.locked), h];
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
    st = { x: o.item.x, y: o.item.y, c: o.item.c, size: o.item.size, orig: o.item.s, c0: o.item.c, size0: o.item.size, before, idx, o: o.item.o ?? 1 };
  } else {
    const size = r2(WIDTHS.text.v / v.s);
    st = { x: o.x, y: o.y - size * 0.65, c: S.color, size, orig: '', before: null, idx: -1, o: S.op };
  }
  edState = st; ed.value = st.orig; ed.style.color = inkColor(st.c); ed.style.display = 'block';
  cacheValid = false; layoutEditor(); req();
  setTimeout(() => { ed.focus(); ed.setSelectionRange(ed.value.length, ed.value.length); }, 0);
}
function layoutEditor() {
  if (!edState) return;
  const v = view(), [sx, sy] = toScreen(edState.x, edState.y), fs = edState.size * v.s;
  measureX.font = FONT(fs);
  const lines = ed.value.split('\n');
  const w = Math.max(...lines.map((l) => measureX.measureText(l).width)) + fs * 0.8;
  Object.assign(ed.style, { left: sx - 2 + 'px', top: sy - 1 + 'px', fontSize: fs + 'px', lineHeight: fs * 1.25 + 'px', width: Math.max(fs * 1.2, w) + 'px', height: lines.length * fs * 1.25 + 2 + 'px', color: inkColor(edState.c) });
}
function commitEditor() {
  if (!edState) return;
  const st = edState; edState = null; ed.style.display = 'none'; ed.blur();
  const s = ed.value.replace(/\s+$/, ''); const p = P();
  const item = { t: 'text', x: r2(st.x), y: r2(st.y), s, c: st.c, size: st.size };
  if ((st.o ?? 1) < 1) item.o = st.o;
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

/* ---------- Panel de gráfica ---------- */
const gp = { it: null, before: null, playing: new Set(), raf: 0, sliderKey: '' };
const MINI = {
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff: '<path d="M3 3l18 18"/><path d="M10.6 5.1A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.1 4M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7a9.7 9.7 0 0 0 5.4-1.6"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  play: '<path d="M7 4v16l13-8z"/>',
  pause: '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>'
};
const miniIco = (n) => `<svg viewBox="0 0 24 24">${MINI[n]}</svg>`;
for (const id of ['#gpKx', '#gpKy']) $(id).innerHTML = KS.map((k) => `<option value="${k}">${String(k).replace('.', ',')}</option>`).join('');
$('#gpClose').innerHTML = ico('x2'); $('#kpClose').innerHTML = ico('x2'); $('#gpZoomIn').innerHTML = ico('plus'); $('#gpZoomOut').innerHTML = ico('minus');

function openGraphPanel(it, isNew, page = P()) {
  commitEditor(); closePops(); closeHelp();
  if (S.tool !== 'func' && S.tool !== 'plane') { if (gp.it) closeGraphPanel(); setTool('func'); }
  if (gp.it && gp.it !== it) closeGraphPanel();
  if (gp.it !== it) { gp.it = it; gp.page = page; gp.before = isNew ? null : JSON.stringify(page.items); }
  exOf(it);
  if (!it.ex.length) it.ex.push({ e: '', c: FX_COLORS[0] });
  buildGPRows(); syncGPOpts(); updateGPStatus();
  $('#graphPanel').classList.add('show');
  if (page === FPAGE) fpAvoidPanel();
  const inputs = $('#gpRows').querySelectorAll('input[type=text]');
  if (isNew && inputs.length) setTimeout(() => inputs[inputs.length - 1].focus(), 60);
  drawOverlay();
}
function closeGraphPanel() {
  if (!gp.it) return;
  const it = gp.it; gp.playing.clear();
  it.ex = it.ex.filter((r) => r.e.trim());
  const pg = gp.page || P();
  if (gp.before !== null && pg.items.includes(it) && gp.before !== JSON.stringify(pg.items)) { pg.undo.push(gp.before); pg.redo = []; }
  gp.it = null; gp.before = null; gp.page = null;
  $('#graphPanel').classList.remove('show');
  if (fpShifted) { fpShifted = false; fpLayout(); }
  if (document.activeElement && $('#graphPanel').contains(document.activeElement)) document.activeElement.blur();
  changed();
}
// Al terminar una gráfica se vuelve a Seleccionar con ella elegida, para moverla o ajustarla sin crear otra por accidente.
function graphDone() {
  const it = gp.it, pg = gp.page; closeGraphPanel(); setTool('select');
  if (it && pg === P() && P().items.includes(it)) { S.sel = [it]; updateSelBar(); }
  if (pg === FPAGE) fpDraw();
  req();
}
function gpChanged() { cacheValid = false; req(); if (gp.page === FPAGE) fpDraw(); updateGPStatus(); clearTimeout(saveTimer); saveTimer = setTimeout(autosave, 700); dirty = true; }
function buildGPRows() {
  const box = $('#gpRows'); box.textContent = '';
  gp.it.ex.forEach((r, i) => {
    const row = document.createElement('div'); row.className = 'gprow' + (r.hide ? ' hidden' : '');
    const tag = document.createElement('div'); tag.className = 'tag';
    const col = document.createElement('input'); col.type = 'color'; col.value = r.c || FX_COLORS[i % FX_COLORS.length]; col.title = 'Color';
    const inp = document.createElement('input'); inp.type = 'text'; inp.value = r.e; inp.placeholder = i ? 'g(x) = …, A = (1, 2), y > x…' : 'f(x) = x^2 - 2x + 1';
    inp.spellcheck = false; inp.autocomplete = 'off';
    const eye = document.createElement('button'); eye.className = 'mini'; eye.title = r.hide ? 'Mostrar' : 'Ocultar'; eye.innerHTML = miniIco(r.hide ? 'eyeoff' : 'eye');
    const del = document.createElement('button'); del.className = 'mini'; del.title = 'Quitar'; del.innerHTML = miniIco('x');
    const err = document.createElement('div'); err.className = 'err';
    row.append(tag, col, inp, eye, del, err);
    col.oninput = () => { r.c = col.value; gpChanged(); };
    inp.oninput = () => { r.e = inp.value; gpChanged(); };
    inp.onkeydown = (e) => {
      if (e.key === 'Enter') { e.preventDefault(); const next = box.querySelectorAll('input[type=text]')[i + 1]; if (next) next.focus(); else addGPRow(); }
      if (e.key === 'Escape') { e.preventDefault(); graphDone(); }
    };
    eye.onclick = () => { r.hide = !r.hide; buildGPRows(); gpChanged(); };
    del.onclick = () => { gp.it.ex.splice(i, 1); if (!gp.it.ex.length) gp.it.ex.push({ e: '', c: FX_COLORS[0] }); buildGPRows(); gpChanged(); };
    box.appendChild(row);
  });
}
function addGPRow(text = '') {
  const ex = gp.it.ex; const used = new Set(ex.map((r) => r.c));
  ex.push({ e: text, c: FX_COLORS.find((c) => !used.has(c)) || FX_COLORS[ex.length % FX_COLORS.length] });
  buildGPRows(); gpChanged();
  const ins = $('#gpRows').querySelectorAll('input[type=text]'); ins[ins.length - 1].focus();
}
function updateGPStatus() {
  if (!gp.it) return;
  const m = getModel(gp.it);
  $('#gpRows').querySelectorAll('.gprow').forEach((row, i) => {
    const r = m.rows[i]; if (!r) return;
    const bad = r.kind === 'error';
    row.classList.toggle('bad', bad);
    row.querySelector('.err').textContent = bad ? 'No entiendo esta expresión' : '';
    row.querySelector('.tag').textContent =
      r.kind === 'fn' ? (r.auto ? `${r.name}(x)` : 'función') : r.kind === 'ineq' ? 'región' : r.kind === 'vline' ? 'recta vertical' :
      r.kind === 'point' ? 'punto' : r.kind === 'param' ? 'deslizador' : '';
  });
  const key = m.paramNames.join(',');
  if (key !== gp.sliderKey) { gp.sliderKey = key; buildSliders(m); }
  else syncSliders();
}
function setParam(n, v, fromText) {
  const q = gp.it.params[n]; if (!q) return;
  q.v = +(+v).toFixed(4);
  if (!fromText) {
    const idx = gp.it.ex.findIndex((r) => { const pr0 = parseRow(r.e); return pr0.kind === 'param' && pr0.name === n; });
    if (idx >= 0) { gp.it.ex[idx].e = `${n} = ${q.v}`; const inp = $('#gpRows').querySelectorAll('input[type=text]')[idx]; if (inp) inp.value = gp.it.ex[idx].e; }
  }
  gpChanged();
}
function buildSliders(m) {
  const box = $('#gpSliders'); box.textContent = '';
  for (const n of m.paramNames) {
    const q = gp.it.params[n];
    const row = document.createElement('div'); row.className = 'gpslider'; row.dataset.n = n;
    const b = document.createElement('b'); b.textContent = n;
    const rg = document.createElement('input'); rg.type = 'range'; rg.min = q.min; rg.max = q.max; rg.step = q.step; rg.value = q.v;
    const num = document.createElement('input'); num.type = 'number'; num.step = q.step; num.value = q.v;
    const play = document.createElement('button'); play.className = 'mini'; play.title = 'Animar'; play.innerHTML = miniIco(gp.playing.has(n) ? 'pause' : 'play');
    const lims = document.createElement('div'); lims.className = 'lims';
    const mn = document.createElement('input'); mn.type = 'number'; mn.value = q.min; mn.title = 'Mínimo';
    const mx = document.createElement('input'); mx.type = 'number'; mx.value = q.max; mx.title = 'Máximo';
    lims.append(mn, mx);
    row.append(b, rg, num, play, document.createElement('span'), lims);
    rg.oninput = () => { setParam(n, rg.value); num.value = gp.it.params[n].v; };
    num.onchange = () => { const v = parseFloat(num.value); if (isFinite(v)) { if (v < q.min) { q.min = Math.floor(v); rg.min = q.min; mn.value = q.min; } if (v > q.max) { q.max = Math.ceil(v); rg.max = q.max; mx.value = q.max; } setParam(n, v); rg.value = v; } };
    mn.onchange = () => { const v = parseFloat(mn.value); if (isFinite(v) && v < q.max) { q.min = v; rg.min = v; if (q.v < v) setParam(n, v); } };
    mx.onchange = () => { const v = parseFloat(mx.value); if (isFinite(v) && v > q.min) { q.max = v; rg.max = v; if (q.v > v) setParam(n, v); } };
    play.onclick = () => {
      if (gp.playing.has(n)) gp.playing.delete(n); else { gp.playing.add(n); q.dir = q.dir || 1; startPlay(); }
      play.innerHTML = miniIco(gp.playing.has(n) ? 'pause' : 'play');
    };
    box.appendChild(row);
  }
}
function syncSliders() {
  $('#gpSliders').querySelectorAll('.gpslider').forEach((row) => {
    const q = gp.it.params[row.dataset.n]; if (!q) return;
    const [rg, num] = row.querySelectorAll('input'); if (document.activeElement !== num) num.value = q.v; rg.value = q.v;
  });
}
function startPlay() {
  if (gp.raf) return; let last = performance.now();
  const tick = (t) => {
    const dt = Math.min(0.05, (t - last) / 1000); last = t;
    if (!gp.it || !gp.playing.size) { gp.raf = 0; return; }
    for (const n of gp.playing) {
      const q = gp.it.params[n]; if (!q) { gp.playing.delete(n); continue; }
      let v = q.v + q.dir * (q.max - q.min) / 4 * dt;
      if (v >= q.max) { v = q.max; q.dir = -1; } if (v <= q.min) { v = q.min; q.dir = 1; }
      setParam(n, v);
    }
    gp.raf = requestAnimationFrame(tick);
  };
  gp.raf = requestAnimationFrame(tick);
}
function syncGPOpts() {
  const it = gp.it;
  $('#gpGrid').checked = it.grid !== false; $('#gpSp').checked = it.sp !== false; $('#gpCoords').checked = it.coords !== false;
  $('#gpKx').value = String(it.kx || 1); $('#gpKy').value = String(it.ky || 1);
}
$('#gpGrid').onchange = (e) => { gp.it.grid = e.target.checked; gpChanged(); };
$('#gpSp').onchange = (e) => { gp.it.sp = e.target.checked; gpChanged(); };
$('#gpCoords').onchange = (e) => { gp.it.coords = e.target.checked; gpChanged(); };
$('#gpKx').onchange = (e) => { gp.it.kx = +e.target.value; gpChanged(); };
$('#gpKy').onchange = (e) => { gp.it.ky = +e.target.value; gpChanged(); };
$('#gpAdd').onclick = () => addGPRow();
$('#gpClose').onclick = graphDone;
$('#gpCenter').onclick = () => { gp.it.ox = 0; gp.it.oy = 0; gpChanged(); };
const gpCenterPt = () => { const g = planeGeom(gp.it); return [g.x + g.w / 2, g.y + g.h / 2]; };
$('#gpZoomIn').onclick = () => { zoomPlane(gp.it, -1, ...gpCenterPt()); };
$('#gpZoomOut').onclick = () => { zoomPlane(gp.it, 1, ...gpCenterPt()); };
function stepK(k, dir) { let i = KS.findIndex((v) => v >= k - 1e-12); if (i < 0) i = KS.length - 1; return KS[clamp(i + dir, 0, KS.length - 1)]; }
function zoomPlane(it, dir, wx, wy) {
  const g = planeGeom(it), X = fromPX(g, wx), Y = fromPY(g, wy);
  const baseOx = g.ox - (it.ox || 0) * g.u, baseOy = g.oy - (it.oy || 0) * g.u;
  it.kx = stepK(g.kx, dir); it.ky = stepK(g.ky, dir);
  it.ox = +((wx - (X / it.kx) * g.u - baseOx) / g.u).toFixed(4);
  it.oy = +((wy + (Y / it.ky) * g.u - baseOy) / g.u).toFixed(4);
  if (gp.it === it) syncGPOpts();
  gpChanged();
}
const inPlane = (it, wx, wy) => { const g = planeGeom(it); return wx >= g.x && wx <= g.x + g.w && wy >= g.y && wy <= g.y + g.h; };

/* ---------- Fórmulas (LaTeX con MathJax, dibujadas como SVG) ---------- */
let mjState = 'none'; const mjWaiters = [];
function loadMathJax() {
  if (mjState === 'ready') return Promise.resolve();
  return new Promise((res, rej) => {
    mjWaiters.push([res, rej]);
    if (mjState === 'loading') return;
    mjState = 'loading';
    window.MathJax = {
      loader: { load: [] }, startup: { typeset: false, ready: () => { window.MathJax.startup.defaultReady(); mjState = 'ready'; mjWaiters.splice(0).forEach(([r]) => r()); mathCache.clear(); cacheValid = false; req(); } },
      svg: { fontCache: 'none' }, tex: { packages: { '[+]': ['ams', 'cancel', 'color', 'mhchem'] } }
    };
    const sc = document.createElement('script'); sc.src = 'vendor/mathjax/tex-svg-full.js?v=3'; sc.async = true;
    sc.onerror = () => { mjState = 'none'; mjWaiters.splice(0).forEach(([, j]) => j(new Error('mathjax'))); toast('No se pudo cargar el motor de fórmulas'); };
    document.head.appendChild(sc);
  });
}
const mathCache = new Map();
function texToSvg(tex) {
  const node = window.MathJax.tex2svg(tex, { display: true });
  const svg = node.querySelector('svg'); if (!svg) throw new Error('svg');
  const err = node.querySelector('[data-mjx-error]');
  const vb = (svg.getAttribute('viewBox') || '0 0 1000 1000').split(/\s+/).map(Number);
  return { svg, wEm: vb[2] / 1000, hEm: vb[3] / 1000, err: err ? err.getAttribute('data-mjx-error') : '' };
}
function mathEntry(tex, color) {
  if (mjState !== 'ready') { loadMathJax().catch(() => {}); return null; }
  const key = tex + '\u0001' + color;
  let e = mathCache.get(key);
  if (!e) {
    try {
      const { svg, wEm, hEm, err } = texToSvg(tex);
      svg.setAttribute('style', `color:${color}`); svg.setAttribute('width', wEm * 64 + 'px'); svg.setAttribute('height', hEm * 64 + 'px');
      const img = new Image(); img.onload = () => { cacheValid = false; req(); };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
      e = { img, wEm, hEm, err };
    } catch (_) { e = { img: null, wEm: 2, hEm: 1, err: 'error' }; }
    mathCache.set(key, e);
    if (mathCache.size > 300) mathCache.delete(mathCache.keys().next().value);
  }
  return e;
}
function mathBox(it) {
  const e = mathEntry(it.tex, '#000');
  const w = (e ? e.wEm : Math.max(2, it.tex.length * 0.5)) * it.size, h = (e ? e.hEm : 1.2) * it.size;
  return [it.x, it.y, it.x + w, it.y + h];
}
function drawMath(ctx, it) {
  const col = adapt(it.c), e = mathEntry(it.tex, col);
  if (e && e.img && e.img.complete && e.img.naturalWidth) { ctx.save(); ctx.globalAlpha = it.o ?? 1; ctx.drawImage(e.img, it.x, it.y, e.wEm * it.size, e.hEm * it.size); ctx.restore(); return; }
  ctx.save(); ctx.fillStyle = col; ctx.globalAlpha = 0.55; ctx.font = `${it.size * 0.6}px ${'ui-monospace,Consolas,monospace'}`; ctx.textBaseline = 'top';
  ctx.fillText(it.tex, it.x, it.y + it.size * 0.2); ctx.restore();
}

/* Editor de fórmulas */
const MATH_TPL = [
  ['a/b', '\\frac{a}{b}'], ['√', '\\sqrt{x}'], ['ⁿ√', '\\sqrt[n]{x}'], ['xⁿ', 'x^{n}'], ['xᵢ', 'x_{i}'], ['( )', '\\left( x \\right)'],
  ['Σ', '\\sum_{i=1}^{n}'], ['∫', '\\int_{a}^{b} f(x)\\,dx'], ['lím', '\\lim_{x \\to 0}'], ['log', '\\log_{b} x'], ['sen', '\\sin x'], ['cos', '\\cos x'],
  ['±', '\\pm'], ['×', '\\times'], ['÷', '\\div'], ['·', '\\cdot'], ['≠', '\\neq'], ['≈', '\\approx'],
  ['≤', '\\leq'], ['≥', '\\geq'], ['∞', '\\infty'], ['π', '\\pi'], ['θ', '\\theta'], ['α', '\\alpha'],
  ['β', '\\beta'], ['Δ', '\\Delta'], ['°', '^{\\circ}'], ['vec', '\\vec{v}'], ['→', '\\rightarrow'], ['∈', '\\in'],
  ['ℝ', '\\mathbb{R}'], ['[ ]', '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'], ['{', '\\begin{cases} x + y = 1 \\\\ x - y = 3 \\end{cases}'], ['|x|', '\\left| x \\right|'], ['x̄', '\\overline{x}'], ['∠', '\\angle']
];
const mx = { st: null };
function openMathEditor(o) {
  commitEditor(); closePops();
  loadMathJax().then(previewMath).catch(() => {});
  const p = P(), v = view(); let st;
  if (o.item) { st = { item: o.item, before: JSON.stringify(p.items) }; $('#mxInput').value = o.item.tex; }
  else { st = { x: o.x, y: o.y, item: null }; $('#mxInput').value = ''; }
  mx.st = st;
  $('#mxOk').textContent = o.item ? 'Actualizar' : 'Insertar';
  $('#mathPop').classList.add('show');
  previewMath();
  setTimeout(() => { const t = $('#mxInput'); t.focus(); t.setSelectionRange(t.value.length, t.value.length); }, 40);
  void v;
}
function closeMathEditor() { $('#mathPop').classList.remove('show'); mx.st = null; if (document.activeElement && $('#mathPop').contains(document.activeElement)) document.activeElement.blur(); }
function previewMath() {
  const box = $('#mxPreview'), tex = $('#mxInput').value.trim(); box.textContent = '';
  $('#mxErr').textContent = '';
  if (!tex) { box.textContent = 'Vista previa'; box.classList.add('empty'); return; }
  box.classList.remove('empty');
  if (mjState !== 'ready') { box.textContent = 'Cargando el motor de fórmulas…'; return; }
  try { const { svg, err } = texToSvg(tex); svg.style.color = 'var(--ink)'; svg.style.maxWidth = '100%'; box.appendChild(svg); if (err) $('#mxErr').textContent = 'Revisa la fórmula: ' + err; }
  catch (_) { $('#mxErr').textContent = 'No se pudo leer la fórmula'; }
}
function commitMath() {
  const st = mx.st; if (!st) return;
  const tex = $('#mxInput').value.trim();
  const p = P(), v = view();
  if (st.item) {
    if (!tex) { closeMathEditor(); return; }
    if (tex !== st.item.tex) { snap(); st.item.tex = tex; changed(); }
  } else if (tex) {
    snap(); p.items.push({ t: 'math', tex, x: r2(st.x), y: r2(st.y), size: r2(WIDTHS.text.v * 1.25 / v.s), c: S.color, ...(S.op < 1 ? { o: S.op } : {}) }); changed();
  }
  closeMathEditor(); req();
}
function insertTpl(code) {
  const t = $('#mxInput'), a = t.selectionStart, z = t.selectionEnd, sel = t.value.slice(a, z);
  let ins = code;
  if (sel) ins = code.replace(/\{(x|a|v|n)\}/, '{' + sel + '}');
  t.value = t.value.slice(0, a) + ins + t.value.slice(z);
  const pos = a + ins.length; t.focus(); t.setSelectionRange(pos, pos); previewMath();
}

/* ---------- Instrumentos: regla, transportador y compás ---------- */
const INS = { ruler: null, prot: null };
const RULER_LEN = 640, RULER_W = 84, PROT_R = 230, SNAP_PX = 26;
const insDark = () => isDarkBoard(BOARDS[P().board] || BOARDS.white);
function insToggle(which) {
  const v = view(), [cx, cy] = toWorld(W / 2, H / 2);
  if (INS[which]) INS[which] = null;
  else if (which === 'ruler') INS.ruler = { x: cx - RULER_LEN / 2, y: cy - RULER_W / 2, a: 0 };
  else INS.prot = { x: cx, y: cy + PROT_R / 2, a: 0 };
  void v; buildInsPop(); drawOverlay();
}
const rot = (x, y, a) => [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)];
function rulerLocal(wx, wy) { const r = INS.ruler; return rot(wx - r.x, wy - r.y, -r.a); }
function protLocal(wx, wy) { const p = INS.prot; return rot(wx - p.x, wy - p.y, -p.a); }
function insHit(wx, wy) {
  const v = view(), k = 1 / v.s;
  if (INS.prot) {
    const [lx, ly] = protLocal(wx, wy);
    if (Math.hypot(lx - (PROT_R - 34), ly + 18) < 16 * k + 4) return { which: 'prot', part: 'rot' };
    if (Math.hypot(lx, ly) <= PROT_R && ly <= 8) return { which: 'prot', part: 'body' };
  }
  if (INS.ruler) {
    const [lx, ly] = rulerLocal(wx, wy);
    if (Math.hypot(lx - (RULER_LEN - 32), ly - RULER_W * 0.62) < 16 * k + 4) return { which: 'ruler', part: 'rot' };
    if (lx >= 0 && lx <= RULER_LEN && ly >= 0 && ly <= RULER_W) return { which: 'ruler', part: 'body' };
  }
  return null;
}
function snapAngle(a) {
  const deg = (a * 180) / Math.PI, s15 = Math.round(deg / 15) * 15;
  return ((Math.abs(deg - s15) < 2.5 ? s15 : Math.round(deg)) * Math.PI) / 180;
}
function insCenter(which) {
  if (which === 'prot') return [INS.prot.x, INS.prot.y];
  const r = INS.ruler, [dx, dy] = rot(RULER_LEN / 2, RULER_W / 2, r.a); return [r.x + dx, r.y + dy];
}
function insStart(e, wx, wy, h) {
  const o = INS[h.which];
  if (h.part === 'body') act = { type: 'insMove', id: e.pointerId, which: h.which, dx: wx - o.x, dy: wy - o.y };
  else { const [cx, cy] = insCenter(h.which); act = { type: 'insRot', id: e.pointerId, which: h.which, cx, cy, a0: o.a, g0: Math.atan2(wy - cy, wx - cx) }; }
  ovC.style.cursor = h.part === 'body' ? 'grabbing' : 'alias';
}
function insMoveTo(wx, wy) {
  const o = INS[act.which];
  if (act.type === 'insMove') { o.x = wx - act.dx; o.y = wy - act.dy; }
  else {
    const na = snapAngle(act.a0 + Math.atan2(wy - act.cy, wx - act.cx) - act.g0);
    if (act.which === 'ruler') { const [dx, dy] = rot(RULER_LEN / 2, RULER_W / 2, na); o.x = act.cx - dx; o.y = act.cy - dy; }
    o.a = na;
  }
}
// ¿El trazo empieza junto a un borde de la regla? Devuelve el desplazamiento para seguir ese borde.
function rulerSnapFor(wx, wy, w) {
  if (!INS.ruler) return null;
  const v = view(), [lx, ly] = rulerLocal(wx, wy), m = SNAP_PX / v.s;
  if (lx < -m || lx > RULER_LEN + m) return null;
  if (ly < 0 && ly > -m) return { off: -(w / 2 + 1 / v.s) };
  if (ly > RULER_W && ly < RULER_W + m) return { off: RULER_W + w / 2 + 1 / v.s };
  return null;
}
function rulerProject(wx, wy, off) {
  const r = INS.ruler, [lx] = rulerLocal(wx, wy), t = clamp(lx, 0, RULER_LEN), [dx, dy] = rot(t, off, r.a);
  return [r.x + dx, r.y + dy];
}
function drawInstruments(ctx) {
  if (!INS.ruler && !INS.prot) return;
  const v = view(), dark = insDark();
  const body = dark ? 'rgba(58,58,62,.82)' : 'rgba(255,255,255,.80)', edge = dark ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.28)';
  const ink = dark ? '#F5F5F7' : '#1D1D1F', soft = dark ? 'rgba(245,245,247,.6)' : 'rgba(29,29,31,.55)';
  ctx.save(); ctx.setTransform(DPR * v.s, 0, 0, DPR * v.s, DPR * v.x, DPR * v.y);
  ctx.shadowColor = 'rgba(0,0,0,.22)'; ctx.shadowBlur = 18 * v.s; ctx.shadowOffsetY = 6 * v.s;
  if (INS.ruler) {
    const r = INS.ruler; ctx.save(); ctx.translate(r.x, r.y); ctx.rotate(r.a);
    ctx.fillStyle = body; ctx.beginPath(); ctx.roundRect(0, 0, RULER_LEN, RULER_W, 8); ctx.fill();
    ctx.shadowColor = 'transparent'; ctx.strokeStyle = edge; ctx.lineWidth = 1 / v.s; ctx.stroke();
    ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 1.1 / v.s; ctx.beginPath();
    for (let i = 0; i <= RULER_LEN; i += 4) {
      const L = i % 40 === 0 ? 20 : i % 20 === 0 ? 13 : 7;
      ctx.moveTo(i, 0); ctx.lineTo(i, L); ctx.moveTo(i, RULER_W); ctx.lineTo(i, RULER_W - L);
    }
    ctx.stroke();
    ctx.font = '500 11px -apple-system,"Segoe UI",system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let i = 0; i <= RULER_LEN; i += 40) ctx.fillText(String(i / 40), clamp(i, 6, RULER_LEN - 6), 23);
    let deg = Math.round((-r.a * 180) / Math.PI) % 180; if (deg < 0) deg += 180; if (deg > 90) deg = 180 - deg;
    ctx.font = '600 14px -apple-system,"Segoe UI",system-ui,sans-serif'; ctx.textBaseline = 'middle';
    ctx.fillText(`${deg}°`, RULER_LEN / 2, RULER_W * 0.64);
    knob(ctx, RULER_LEN - 32, RULER_W * 0.62, v, ink);
    ctx.restore();
  }
  if (INS.prot) {
    const p = INS.prot; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a);
    ctx.shadowColor = 'rgba(0,0,0,.22)'; ctx.fillStyle = body; ctx.beginPath(); ctx.moveTo(-PROT_R, 0); ctx.arc(0, 0, PROT_R, Math.PI, 2 * Math.PI); ctx.closePath(); ctx.fill();
    ctx.shadowColor = 'transparent'; ctx.strokeStyle = edge; ctx.lineWidth = 1 / v.s; ctx.stroke();
    ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 1.1 / v.s; ctx.beginPath();
    for (let d = 0; d <= 180; d++) {
      const t = (-d * Math.PI) / 180, L = d % 10 === 0 ? 18 : d % 5 === 0 ? 12 : 6, c = Math.cos(t), s = Math.sin(t);
      ctx.moveTo(c * PROT_R, s * PROT_R); ctx.lineTo(c * (PROT_R - L), s * (PROT_R - L));
    }
    ctx.moveTo(-PROT_R, 0); ctx.lineTo(PROT_R, 0); ctx.moveTo(0, 0); ctx.lineTo(0, -16); ctx.moveTo(-8, 0); ctx.lineTo(8, 0); ctx.stroke();
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (let d = 0; d <= 180; d += 10) {
      const t = (-d * Math.PI) / 180, c = Math.cos(t), s = Math.sin(t);
      ctx.font = '600 11px -apple-system,"Segoe UI",system-ui,sans-serif'; ctx.fillStyle = ink; ctx.fillText(String(d), c * (PROT_R - 30), s * (PROT_R - 30));
      ctx.font = '500 9px -apple-system,"Segoe UI",system-ui,sans-serif'; ctx.fillStyle = soft; ctx.fillText(String(180 - d), c * (PROT_R - 46), s * (PROT_R - 46));
    }
    ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fillStyle = '#0071E3'; ctx.fill();
    knob(ctx, PROT_R - 34, -18, v, ink);
    ctx.restore();
  }
  ctx.restore();
}
function knob(ctx, x, y, v, ink) {
  const r = 12 / v.s;
  ctx.save(); ctx.fillStyle = '#0071E3'; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.6 / v.s; ctx.beginPath(); ctx.arc(x, y, r * 0.5, -Math.PI * 0.9, Math.PI * 0.55); ctx.stroke();
  const ex = x + Math.cos(Math.PI * 0.55) * r * 0.5, ey = y + Math.sin(Math.PI * 0.55) * r * 0.5;
  ctx.beginPath(); ctx.moveTo(ex - r * 0.3, ey - r * 0.05); ctx.lineTo(ex, ey); ctx.lineTo(ex + r * 0.05, ey - r * 0.32); ctx.stroke();
  ctx.restore(); void ink;
}
// Compás: punta en el centro, abre el radio y gira para trazar el arco (si apenas giras, hace el círculo completo).
function compassPoints(C, r, a0, sweep) {
  const n = Math.max(24, Math.ceil((Math.abs(sweep) * r) / 2)), out = [];
  for (let i = 0; i <= n; i++) { const t = a0 + (sweep * i) / n; out.push([r2(C[0] + r * Math.cos(t)), r2(C[1] + r * Math.sin(t)), 0.5]); }
  return out;
}
function drawCompassGuide(ctx) {
  if (!act || act.type !== 'compass' || !hover) return;
  const v = view(), [cx, cy] = toScreen(act.C[0], act.C[1]), [px, py] = toScreen(act.P[0], act.P[1]);
  const mx0 = (cx + px) / 2, my0 = (cy + py) / 2, len = Math.hypot(px - cx, py - cy);
  const ax = mx0 + ((cy - py) / (len || 1)) * Math.min(90, 30 + len * 0.35), ay = my0 + ((px - cx) / (len || 1)) * Math.min(90, 30 + len * 0.35);
  ctx.save(); ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.strokeStyle = 'rgba(120,120,128,.85)'; ctx.lineWidth = 3; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(ax, ay); ctx.lineTo(px, py); ctx.stroke();
  ctx.fillStyle = '#0071E3'; ctx.beginPath(); ctx.arc(ax, ay, 5, 0, Math.PI * 2); ctx.fill();
  ctx.setLineDash([5, 5]); ctx.strokeStyle = 'rgba(0,113,227,.6)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#0071E3'; ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill();
  const label = `r = ${fmt2(act.r / GRID)}${act.sweep ? ` · ${Math.round(Math.abs(act.sweep) * 180 / Math.PI)}°` : ''}`;
  ctx.font = '600 13px -apple-system,"Segoe UI",system-ui,sans-serif';
  const tw = ctx.measureText(label).width + 18;
  ctx.fillStyle = 'rgba(28,28,30,.92)'; ctx.beginPath(); ctx.roundRect(px + 12, py + 10, tw, 26, 13); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(label, px + 21, py + 23);
  ctx.restore(); void v;
}

/* ---------- Cortina y foco ---------- */
const CL = { curtain: false, spot: false, spotR: 150, cy: 120 };
const isPhone = () => matchMedia('(max-width: 760px), (max-height: 500px) and (pointer: coarse)').matches;
function setCurtain(on) {
  CL.curtain = on; const c = $('#curtain'); c.hidden = !on;
  if (on) { CL.cy = isPhone() ? 64 : 120; c.style.top = CL.cy + 'px'; paintCurtain(); }
  buildInsPop();
}
function paintCurtain() { const b = BOARDS[P().board] || BOARDS.white; $('#curtain').style.setProperty('--ct-bg', b.bg); }
function setSpot(on) { CL.spot = on; $('#spot').hidden = !on; if (on) moveSpot(hover ? hover[0] : W / 2, hover ? hover[1] : H / 2); buildInsPop(); }
function moveSpot(x, y) {
  const s = $('#spot'); s.style.setProperty('--sx', x + 'px'); s.style.setProperty('--sy', y + 'px'); s.style.setProperty('--sr', CL.spotR + 'px');
}
// Los instrumentos ahora viven en los grupos de la barra (Matemáticas y Presentar).
function buildInsPop() { if ($('#tools .ib')) refreshBar(); }
// Tarjeta de ayuda al pasar el mouse (solo con mouse; en pantallas táctiles no aparece).
let tipEl = null, tipT = 0;
function hideTip() { clearTimeout(tipT); if (tipEl) tipEl.classList.remove('show'); }
function hoverTip(btn, info, side) {
  if (!btn) return;
  btn.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'touch' || !matchMedia('(hover: hover)').matches) return;
    clearTimeout(tipT);
    tipT = setTimeout(() => {
      if (!btn.isConnected) return;
      const { title, key, text } = info();
      if (!tipEl) { tipEl = document.createElement('div'); tipEl.className = 'tipcard'; tipEl.setAttribute('role', 'tooltip'); document.body.appendChild(tipEl); }
      tipEl.replaceChildren();
      const h = document.createElement('div'); h.className = 'tc-head';
      const t = document.createElement('b'); t.textContent = title; h.appendChild(t);
      if (key) { const k = document.createElement('kbd'); k.textContent = key; h.appendChild(k); }
      const p = document.createElement('p'); p.textContent = text;
      tipEl.append(h, p);
      const r = btn.getBoundingClientRect(), w = 250, th = tipEl.offsetHeight || 100;
      let x, y;
      if (side) { // al lado del menú, para no tapar las opciones
        const pr = (btn.closest('.pop') || btn).getBoundingClientRect();
        x = pr.right + 10 + w < innerWidth ? pr.right + 10 : pr.left - w - 10; y = clamp(r.top, 8, innerHeight - th - 8);
      } else {
        x = clamp(r.left + r.width / 2 - w / 2, 8, innerWidth - w - 8);
        y = r.bottom + 10 + th < innerHeight ? r.bottom + 10 : Math.max(8, r.top - 10 - th);
      }
      tipEl.style.left = x + 'px'; tipEl.style.top = y + 'px';
      tipEl.classList.add('show');
    }, 450);
  });
  btn.addEventListener('pointerleave', hideTip);
  btn.addEventListener('pointerdown', hideTip);
}
function updateInsBtn() { buildInsPop(); }


/* ---------- Pizarra flotante: hoja auxiliar para cálculos, encima de todo ---------- */
// Vive en la pantalla (no en la página): sigue visible al moverte, hacer zoom o cambiar de página.
// Con el pin queda fija; sin el pin se arrastra por la barra y se cambia de tamaño por la esquina.
const FP = { open: false, pinned: false, bgo: 1, x: null, y: null, w: 440, h: 320, items: [], undo: [], redo: [], v: { x: 0, y: 0, s: 1 } };
const FPAGE = { get items() { return FP.items; }, get undo() { return FP.undo; }, get redo() { return FP.redo; }, set redo(v) { FP.redo = v; } };
const FP_TYPES = ['stroke', 'line', 'arrow', 'rect', 'ellipse', 'triangle', 'poly', 'plane'];
let fpEl = null, fpC = null, fpX = null, fpAct = null, fpLive = null, fpRaf = 0;
function fpLoadPrefs() {
  try { const q = JSON.parse(localStorage.getItem('mi-pizarra-float') || 'null'); if (q) { for (const k of ['open', 'pinned', 'bgo', 'x', 'y', 'w', 'h']) if (q[k] !== undefined) FP[k] = q[k]; } } catch (_) {}
}
function fpSavePrefs() { try { localStorage.setItem('mi-pizarra-float', JSON.stringify({ open: FP.open, pinned: FP.pinned, bgo: FP.bgo, x: FP.x, y: FP.y, w: FP.w, h: FP.h })); } catch (_) {} }
function fpBuild() {
  if (fpEl) return;
  fpEl = document.createElement('div'); fpEl.id = 'floatPad'; fpEl.className = 'fpad'; fpEl.hidden = true;
  fpEl.innerHTML = `<div class="fp-head"><span class="fp-grip">${ico('grip')}</span><span class="fp-title">Pizarra flotante</span>
    <button class="ib sm" data-f="op" title="Opacidad del fondo">${ico('halfc')}</button>
    <button class="ib sm" data-f="undo" title="Deshacer en la pizarra flotante">${ico('undo')}</button>
    <button class="ib sm" data-f="clear" title="Limpiar la pizarra flotante">${ico('trash')}</button>
    <button class="ib sm" data-f="send" title="Pasar a la pizarra (queda seleccionado para moverlo)">${ico('send')}</button>
    <button class="ib sm" data-f="pin" title="Fijar en su lugar">${ico('pin')}</button>
    <button class="ib sm" data-f="close" title="Cerrar (B)">${ico('close')}</button></div>
    <div class="fp-oprow" hidden><span>Fondo</span><input type="range" min="10" max="100" step="5"><b></b></div>
    <canvas class="fp-canvas"></canvas><div class="fp-resize" title="Cambiar tamaño"></div>`;
  document.body.appendChild(fpEl);
  fpC = fpEl.querySelector('canvas'); fpX = fpC.getContext('2d');
  // Opacidad del fondo: deja ver la pizarra de atrás (lo escrito en la hoja sigue nítido).
  const opR = fpEl.querySelector('.fp-oprow input'), opV = fpEl.querySelector('.fp-oprow b');
  const setBgo = (v) => { FP.bgo = clamp(v / 100, 0.1, 1); opR.value = Math.round(FP.bgo * 100); opV.textContent = Math.round(FP.bgo * 100) + '%'; fpEl.classList.toggle('see', FP.bgo < 1); fpDraw(); };
  opR.oninput = () => setBgo(+opR.value); opR.onchange = () => fpSavePrefs(); setBgo(FP.bgo * 100);
  fpEl.querySelectorAll('[data-f]').forEach((b) => (b.onclick = () => {
    const f = b.dataset.f;
    if (f === 'op') { const r = fpEl.querySelector('.fp-oprow'); r.hidden = !r.hidden; b.classList.toggle('on', !r.hidden); fpLayout(); }
    else if (f === 'undo') fpUndo(); else if (f === 'clear') fpClear(); else if (f === 'send') fpSend();
    else if (f === 'pin') { FP.pinned = !FP.pinned; fpSavePrefs(); fpLayout(); toast(FP.pinned ? 'Pizarra flotante fijada' : 'Ahora puedes moverla'); }
    else if (f === 'close') toggleFloat(false);
  }));
  // Mover por la barra y cambiar tamaño por la esquina (solo sin pin).
  const head = fpEl.querySelector('.fp-head'), grip = fpEl.querySelector('.fp-resize');
  let drag = null;
  const startDrag = (e, kind) => {
    if (FP.pinned || e.target.closest('button')) return;
    drag = { kind, sx: e.clientX, sy: e.clientY, x: FP.x, y: FP.y, w: FP.w, h: FP.h, id: e.pointerId };
    e.currentTarget.setPointerCapture(e.pointerId); e.preventDefault(); e.stopPropagation();
    fpEl.classList.add('dragging');
  };
  const moveDrag = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    if (drag.kind === 'move') { FP.x = drag.x + dx; FP.y = drag.y + dy; } else { FP.w = drag.w + dx; FP.h = drag.h + dy; }
    fpLayout();
  };
  const endDrag = (e) => { if (!drag || e.pointerId !== drag.id) return; drag = null; fpEl.classList.remove('dragging'); fpSavePrefs(); };
  head.addEventListener('pointerdown', (e) => startDrag(e, 'move')); grip.addEventListener('pointerdown', (e) => startDrag(e, 'size'));
  for (const el of [head, grip]) { el.addEventListener('pointermove', moveDrag); el.addEventListener('pointerup', endDrag); el.addEventListener('pointercancel', endDrag); }
  // Dibujo dentro de la hoja.
  fpC.addEventListener('pointerdown', fpDown); fpC.addEventListener('pointermove', fpMove);
  fpC.addEventListener('pointerup', fpUp); fpC.addEventListener('pointercancel', fpUp);
  fpC.addEventListener('contextmenu', (e) => e.preventDefault());
  fpC.addEventListener('pointerleave', () => { if (fpHover) { fpHover = null; fpDraw(); } });
  fpC.addEventListener('wheel', (e) => {
    e.preventDefault(); e.stopPropagation();
    const r = fpC.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top, v = FP.v;
    const wx = (mx - v.x) / v.s, wy = (my - v.y) / v.s;
    if (gp.page === FPAGE && gp.it && !e.ctrlKey && inPlane(gp.it, wx, wy)) { fpWheel += e.deltaY; if (Math.abs(fpWheel) >= 60) { zoomPlane(gp.it, fpWheel > 0 ? 1 : -1, wx, wy); fpWheel = 0; } return; }
    if (e.ctrlKey || e.metaKey) { const f = clamp(Math.exp(-e.deltaY * 0.0025), 0.5, 2), ns = clamp(v.s * f, 0.2, 6), k = ns / v.s; v.x = mx - (mx - v.x) * k; v.y = my - (my - v.y) * k; v.s = ns; }
    else { v.x -= e.shiftKey ? e.deltaY : e.deltaX; v.y -= e.shiftKey ? 0 : e.deltaY; }
    fpDraw();
  }, { passive: false });
  fpEl.addEventListener('pointerdown', (e) => e.stopPropagation());
}
function fpLayout() {
  if (!fpEl) return;
  const mob = matchMedia('(max-width: 760px), (max-height: 500px) and (pointer: coarse)').matches;
  const maxW = innerWidth - 16, maxH = innerHeight - 16;
  FP.w = clamp(FP.w, 240, Math.max(240, maxW)); FP.h = clamp(FP.h, 170, Math.max(170, maxH));
  if (FP.x === null || FP.y === null) { FP.x = Math.max(8, innerWidth - FP.w - 16); FP.y = mob ? 64 : 72; }
  FP.x = clamp(FP.x, 8 - FP.w + 120, innerWidth - 120); FP.y = clamp(FP.y, 8, innerHeight - 48);
  Object.assign(fpEl.style, { left: FP.x + 'px', top: FP.y + 'px', width: FP.w + 'px', height: FP.h + 'px' });
  fpEl.classList.toggle('pinned', FP.pinned);
  const pin = fpEl.querySelector('[data-f=pin]'); pin.classList.toggle('on', FP.pinned); pin.title = FP.pinned ? 'Soltar para moverla' : 'Fijar en su lugar';
  const cw = Math.max(1, fpC.clientWidth), ch = Math.max(1, fpC.clientHeight), d = devicePixelRatio || 1;
  if (fpC.width !== Math.round(cw * d) || fpC.height !== Math.round(ch * d)) { fpC.width = Math.round(cw * d); fpC.height = Math.round(ch * d); }
  fpDraw();
}
function toggleFloat(on = !FP.open) {
  fpBuild(); FP.open = on; fpEl.hidden = !on; fpSavePrefs();
  if (on) fpLayout();
  buildInsPop();
}
function fpDraw() {
  if (fpRaf) return;
  fpRaf = requestAnimationFrame(() => {
    fpRaf = 0; if (!fpEl || fpEl.hidden) return;
    const d = devicePixelRatio || 1, w = fpC.width / d, h = fpC.height / d, v = FP.v, board = BOARDS[P().board] || BOARDS.white;
    const prev = paintBoard; paintBoard = board;
    fpX.setTransform(d, 0, 0, d, 0, 0); fpX.globalAlpha = 1; fpX.globalCompositeOperation = 'source-over';
    fpX.clearRect(0, 0, w, h); fpX.globalAlpha = FP.bgo; fpX.fillStyle = board.bg; fpX.fillRect(0, 0, w, h); fpX.globalAlpha = 1;
    // Cuadrícula de puntos suave, para orientarse al escribir.
    const g = 24 * v.s; if (g > 6) {
      fpX.fillStyle = isDarkBoard(board) ? 'rgba(255,255,255,.16)' : 'rgba(0,0,0,.16)';
      const ox = ((v.x % g) + g) % g, oy = ((v.y % g) + g) % g;
      for (let x = ox; x < w; x += g) for (let y = oy; y < h; y += g) fpX.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
    }
    fpX.setTransform(d * v.s, 0, 0, d * v.s, d * v.x, d * v.y);
    for (const it of FP.items) drawSafe(fpX, it);
    if (fpLive) drawSafe(fpX, fpLive);
    if (gp.page === FPAGE && gp.it && FP.items.includes(gp.it)) {
      const g = planeGeom(gp.it); fpX.strokeStyle = '#0071E3'; fpX.lineWidth = 2 / v.s; fpX.setLineDash([6 / v.s, 4 / v.s]);
      fpX.strokeRect(g.x - 4 / v.s, g.y - 4 / v.s, g.w + 8 / v.s, g.h + 8 / v.s); fpX.setLineDash([]);
    }
    const ring = fpAct && fpAct.type === 'erase' ? fpAct.cur : !fpAct ? fpHover : null;
    if (ring) {
      fpX.setTransform(d, 0, 0, d, 0, 0); fpX.strokeStyle = isDarkBoard(board) ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.45)'; fpX.lineWidth = 1;
      fpX.beginPath(); fpX.arc(ring[0], ring[1], WIDTHS.eraser.v / 2, 0, Math.PI * 2); fpX.stroke();
    }
    paintBoard = prev;
  });
}
function fpPt(e) { const r = fpC.getBoundingClientRect(), v = FP.v; return [(e.clientX - r.left - v.x) / v.s, (e.clientY - r.top - v.y) / v.s, e.clientX - r.left, e.clientY - r.top]; }
function fpSnap() { FP.undo.push(FP.items.slice()); if (FP.undo.length > 60) FP.undo.shift(); FP.redo = []; }
function fpChanged() { fpDraw(); if (typeof changed === 'function') { dirty = true; clearTimeout(saveTimer); saveTimer = setTimeout(idleSave, 700); } }
function fpDown(e) {
  e.stopPropagation(); e.preventDefault();
  if (fpAct) return;
  closePops();
  const [x, y, sx, sy] = fpPt(e);
  fpC.setPointerCapture(e.pointerId);
  // Mano, botón central o derecho: mover el contenido de la hoja.
  if (S.tool === 'hand' || e.button === 1 || e.button === 2 || spaceDown) { fpAct = { type: 'pan', id: e.pointerId, sx: e.clientX, sy: e.clientY, v0: { ...FP.v } }; return; }
  // Goma (o la goma del lápiz digital): corta los trazos de la hoja.
  if (S.tool === 'eraser' || e.button === 5 || (e.buttons & 32)) {
    fpAct = { type: 'erase', id: e.pointerId, last: [x, y], cur: [sx, sy], did: false };
    fpEraseTo(x, y); return;
  }
  const tool = S.tool, s = FP.v.s;
  // Gráficas: con el panel abierto sobre una gráfica de la hoja, arrastrar dentro la recorre y un clic afuera la termina.
  if ((tool === 'func' || tool === 'plane') && gp.page === FPAGE && gp.it) {
    if (inPlane(gp.it, x, y)) { fpAct = { type: 'gpan', id: e.pointerId, sx: e.clientX, sy: e.clientY, ox0: gp.it.ox || 0, oy0: gp.it.oy || 0 }; return; }
    fpC.releasePointerCapture(e.pointerId); graphDone(); return;
  }
  if (tool === 'func') {
    const pl = [...FP.items].reverse().find((i) => i.t === 'plane' && inPlane(i, x, y));
    if (pl) { fpC.releasePointerCapture(e.pointerId); openGraphPanel(pl, false, FPAGE); fpDraw(); return; }
  }
  // Figuras, planos y gráficas: se arrastran igual que en la pizarra.
  if (['line', 'arrow', 'rect', 'ellipse', 'triangle', 'plane', 'func'].includes(tool)) {
    const t = tool === 'func' ? 'plane' : tool;
    let px = x, py = y; if (t === 'plane') { px = Math.round(x / GRID) * GRID; py = Math.round(y / GRID) * GRID; }
    fpLive = { t, x1: px, y1: py, x2: px, y2: py, c: S.color, w: r2(WIDTHS.shape.v / s) };
    if (t !== 'plane' && S.op < 1) fpLive.o = S.op;
    if (t === 'plane') Object.assign(fpLive, { grid: true, ex: [], params: {}, u: GRID, kx: 1, ky: 1, w: Math.max(fpLive.w, 2) });
    fpAct = { type: 'shape', tool, id: e.pointerId, sx: e.clientX, sy: e.clientY, wx: x, wy: y };
    fpDraw(); return;
  }
  // Seleccionar: arrastra lo que tocas; doble clic sobre una gráfica abre sus funciones.
  if (tool === 'select' || tool === 'lasso') {
    const hitIt = [...FP.items].reverse().find((i) => (i.t === 'plane' ? inPlane(i, x, y) : hit(i, x, y, 6 / s)));
    if (!hitIt) { fpAct = { type: 'pan', id: e.pointerId, sx: e.clientX, sy: e.clientY, v0: { ...FP.v } }; return; }
    const now = performance.now();
    if (hitIt.t === 'plane' && fpLastTap.it === hitIt && now - fpLastTap.t < 380) { fpLastTap = { t: 0, it: null }; fpC.releasePointerCapture(e.pointerId); openGraphPanel(hitIt, false, FPAGE); fpDraw(); return; }
    fpLastTap = { t: now, it: hitIt };
    fpAct = { type: 'move', id: e.pointerId, it: hitIt, last: [x, y], sx: e.clientX, sy: e.clientY, moved: false }; return;
  }
  if (tool === 'laser' || tool === 'compass') { fpAct = { type: 'pan', id: e.pointerId, sx: e.clientX, sy: e.clientY, v0: { ...FP.v } }; return; }
  if (tool === 'text' || tool === 'math') { fpC.releasePointerCapture(e.pointerId); toast('Texto y fórmulas van en la pizarra principal; aquí escribe a mano'); return; }
  // Lápices: escribe con el lápiz activo.
  const pre = curPreset(), hl = pre.k === 'hl';
  fpLive = { t: 'stroke', c: pre.c, w: r2(pre.w / s), pts: [[r2(x), r2(y), pr(e)]] };
  if (hl) fpLive.hl = 1; else fpLive.k = pre.k;
  if (e.pointerType === 'pen') fpLive.pr = 1;
  if ((pre.o ?? 1) < 1) fpLive.o = pre.o;
  fpAct = { type: 'draw', id: e.pointerId, sm: [x, y] };
  fpDraw();
}
function fpFinishShape(a, e) {
  const it = fpLive; fpLive = null;
  const tiny = Math.hypot(e.clientX - a.sx, e.clientY - a.sy) < 8;
  if (it.t === 'plane') {
    if (tiny || Math.abs(it.x2 - it.x1) < GRID * 2 || Math.abs(it.y2 - it.y1) < GRID * 2) {
      // Un clic: un plano que quepa en la hoja.
      const d = devicePixelRatio || 1, vw = fpC.width / d / FP.v.s, vh = fpC.height / d / FP.v.s;
      const hw = Math.max(2, Math.min(6, Math.floor((vw * 0.38) / GRID))), hh = Math.max(2, Math.min(4, Math.floor((vh * 0.4) / GRID)));
      const L = -FP.v.x / FP.v.s, T = -FP.v.y / FP.v.s; // lo visible de la hoja: el plano queda adentro
      const cx = Math.round(clamp(a.wx, L + (hw + 1) * GRID, L + vw - (hw + 1) * GRID) / GRID) * GRID;
      const cy = Math.round(clamp(a.wy, T + (hh + 1) * GRID, T + vh - (hh + 1) * GRID) / GRID) * GRID;
      Object.assign(it, { x1: cx - hw * GRID, y1: cy - hh * GRID, x2: cx + hw * GRID, y2: cy + hh * GRID });
    }
    fpSnap(); FP.items = [...FP.items, it]; fpChanged();
    if (a.tool === 'func') openGraphPanel(it, true, FPAGE); else setTool('select');
    fpDraw(); return;
  }
  if (tiny) { fpDraw(); return; }
  fpSnap(); FP.items = [...FP.items, it]; fpChanged();
}
function fpEraseTo(x, y) {
  const R = WIDTHS.eraser.v / 2 / FP.v.s, before = FP.items;
  const items = FP.items.slice();
  // eraseArea trabaja sobre la lista que le pasemos; no toca la página ni su historial.
  const savedSel = S.sel; S.sel = [];
  const did = eraseArea(fpAct.last, [x, y], R, items, false);
  S.sel = savedSel;
  if (did) { if (!fpAct.did) { FP.undo.push(before); FP.redo = []; fpAct.did = true; } FP.items = items; }
  fpAct.last = [x, y];
}
// Mientras se editan las funciones de una gráfica de la hoja, la hoja se corre para no tapar el panel.
let fpShifted = false;
function fpAvoidPanel() {
  const panel = $('#graphPanel'), left = innerWidth - panel.offsetWidth - 16;
  if (!fpEl || FP.x + FP.w <= left - 8) return;
  const nx = Math.max(8, left - FP.w - 12); fpEl.style.left = nx + 'px'; fpShifted = true;
}
let fpHover = null, fpWheel = 0, fpLastTap = { t: 0, it: null };
function fpMove(e) {
  if (!fpAct) { const was = fpHover; fpHover = S.tool === 'eraser' && e.pointerType !== 'touch' ? fpPt(e).slice(2) : null; if (fpHover || was) fpDraw(); return; }
  if (e.pointerId !== fpAct.id) return;
  e.stopPropagation();
  if (fpAct.type === 'pan') { FP.v.x = fpAct.v0.x + e.clientX - fpAct.sx; FP.v.y = fpAct.v0.y + e.clientY - fpAct.sy; fpDraw(); return; }
  let evs = e.getCoalescedEvents ? e.getCoalescedEvents() : null; if (!evs || !evs.length) evs = [e];
  if (fpAct.type === 'erase') { for (const ev of evs) { const [x, y, sx, sy] = fpPt(ev); fpAct.cur = [sx, sy]; fpEraseTo(x, y); } fpDraw(); return; }
  if (fpAct.type === 'shape') {
    let [x, y] = fpPt(e);
    if (fpLive.t === 'plane') { x = Math.round(x / GRID) * GRID; y = Math.round(y / GRID) * GRID; }
    else if (e.shiftKey) [x, y] = constrain(fpLive, x, y);
    fpLive.x2 = x; fpLive.y2 = y; fpDraw(); return;
  }
  if (fpAct.type === 'move') {
    const [x, y] = fpPt(e), dx = x - fpAct.last[0], dy = y - fpAct.last[1];
    if (!fpAct.moved) { if (Math.hypot(e.clientX - fpAct.sx, e.clientY - fpAct.sy) < 3) return; fpSnap(); const c = JSON.parse(JSON.stringify(fpAct.it)); FP.items = FP.items.map((i) => (i === fpAct.it ? c : i)); fpAct.it = c; fpAct.moved = true; }
    moveItem(fpAct.it, dx, dy); fpAct.last = [x, y]; fpDraw(); return;
  }
  if (fpAct.type === 'gpan') {
    const u = gp.it.u || GRID;
    gp.it.ox = +(fpAct.ox0 + (e.clientX - fpAct.sx) / FP.v.s / u).toFixed(4); gp.it.oy = +(fpAct.oy0 + (e.clientY - fpAct.sy) / FP.v.s / u).toFixed(4);
    gpChanged(); return;
  }
  const f = SMOOTH[S.smooth] || 0;
  for (const ev of evs) {
    let [x, y] = fpPt(ev);
    if (f) { fpAct.sm[0] += (x - fpAct.sm[0]) * (1 - f); fpAct.sm[1] += (y - fpAct.sm[1]) * (1 - f); [x, y] = fpAct.sm; }
    const l = fpLive.pts[fpLive.pts.length - 1];
    if (Math.hypot(x - l[0], y - l[1]) < 0.8 / FP.v.s) continue;
    fpLive.pts.push([r2(x), r2(y), pr(ev)]);
  }
  fpDraw();
}
function fpUp(e) {
  if (!fpAct || e.pointerId !== fpAct.id) return;
  e.stopPropagation();
  const a = fpAct; fpAct = null;
  if (a.type === 'draw' && fpLive) { fpSnap(); FP.items = [...FP.items, fpLive]; fpLive = null; fpChanged(); return; }
  if (a.type === 'shape' && fpLive) { fpFinishShape(a, e); return; }
  if (a.type === 'move') { if (a.moved) fpChanged(); return; }
  if (a.type === 'gpan') { fpChanged(); return; }
  if (a.type === 'erase' && a.did) fpChanged(); else fpDraw();
}
function fpUndo() {
  if (gp.page === FPAGE) closeGraphPanel();
  if (!FP.undo.length) { toast('Nada que deshacer en la pizarra flotante'); return; }
  FP.redo.push(FP.items); const prev = FP.undo.pop(); FP.items = typeof prev === 'string' ? JSON.parse(prev) : prev; fpChanged();
}
function fpClear() { if (!FP.items.length) return; if (gp.page === FPAGE) closeGraphPanel(); fpSnap(); FP.items = []; FP.v = { x: 0, y: 0, s: 1 }; fpChanged(); toast('Pizarra flotante limpia · Deshacer la recupera'); }
// Copia lo escrito a la página actual, con el mismo tamaño en pantalla y centrado donde estás mirando.
function fpSend() {
  if (!FP.items.length) { toast('La pizarra flotante está vacía'); return; }
  const b = [Infinity, Infinity, -Infinity, -Infinity];
  for (const it of FP.items) { const q = bbox(it); b[0] = Math.min(b[0], q[0]); b[1] = Math.min(b[1], q[1]); b[2] = Math.max(b[2], q[2]); b[3] = Math.max(b[3], q[3]); }
  // Lo pone en el lado de la pantalla que la pizarra flotante deja libre (si no, quedaría escondido debajo).
  const left = FP.x, right = innerWidth - (FP.x + FP.w);
  const tx = left > right ? Math.max(left / 2, 80) : Math.min(FP.x + FP.w + right / 2, innerWidth - 80);
  const v = view(), k = FP.v.s / v.s, cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2, [wx, wy] = toWorld(tx, H / 2);
  if (gp.page === FPAGE) closeGraphPanel();
  const out = FP.items.map((it) => { const c = JSON.parse(JSON.stringify(it)), n = Object.assign(c, scaledItem(c, cx, cy, k)); moveItem(n, wx - cx, wy - cy); return n; });
  snap(); P().items.push(...out); changed();
  setTool('select'); S.sel = out; updateSelBar(); req();
  toast('Copiado a la pizarra: arrástralo a donde quieras');
}

/* ---------- Abrir PDF como páginas (PDF.js local) ---------- */
function loadPdfJs() {
  if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  return new Promise((res, rej) => {
    const sc = document.createElement('script'); sc.src = 'vendor/pdfjs/pdf.min.js?v=3';
    sc.onload = () => { const L = window.pdfjsLib || window['pdfjs-dist/build/pdf']; if (!L) { rej(new Error('pdfjs')); return; } L.GlobalWorkerOptions.workerSrc = 'vendor/pdfjs/pdf.worker.min.js?v=3'; res(L); };
    sc.onerror = () => rej(new Error('pdfjs'));
    document.head.appendChild(sc);
  });
}
const pdfInput = document.createElement('input'); pdfInput.type = 'file'; pdfInput.accept = 'application/pdf,.pdf'; pdfInput.hidden = true;
document.body.appendChild(pdfInput);
pdfInput.addEventListener('change', () => { const f = pdfInput.files[0]; pdfInput.value = ''; if (f) importPdf(f); });
let pdfBusy = false;
async function importPdf(file) {
  if (pdfBusy) return; pdfBusy = true;
  commitEditor(); if (gp.it) closeGraphPanel();
  try {
    toast('Abriendo PDF…');
    const L = await loadPdfJs();
    const pdf = await L.getDocument({ data: new Uint8Array(await file.arrayBuffer()), standardFontDataUrl: 'vendor/pdfjs/standard_fonts/', isEvalSupported: false }).promise;
    const n = pdf.numPages;
    if (n > 60 && !confirm(`Este PDF tiene ${n} páginas. Importarlas todas puede tardar y ocupar bastante memoria. ¿Continuar?`)) { pdfBusy = false; return; }
    const pages = [];
    for (let i = 1; i <= n; i++) {
      toast(`Importando página ${i} de ${n}…`);
      const page = await pdf.getPage(i), vp1 = page.getViewport({ scale: 1 });
      const sc = Math.min(2.5, 1600 / Math.max(vp1.width, vp1.height)), vp = page.getViewport({ scale: sc });
      const c = document.createElement('canvas'); c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
      const cx = c.getContext('2d'); cx.fillStyle = '#fff'; cx.fillRect(0, 0, c.width, c.height);
      await page.render({ canvasContext: cx, viewport: vp }).promise;
      const src = c.toDataURL('image/jpeg', 0.85);
      const ww = 820, hh = (ww * c.height) / c.width;
      const pg = mkPage(); pg.bg = 'blank'; pg.board = 'white';
      pg.items.push({ t: 'image', src, x1: r2(-ww / 2), y1: r2(-hh / 2), x2: r2(ww / 2), y2: r2(hh / 2), locked: true, pdf: `${file.name} · ${i}` });
      const s = Math.min((W - 80) / ww, (H - 170) / hh, 1.4);
      pg.view = { x: Math.round(W / 2), y: Math.round(H / 2 + 24), s: r2(s) };
      pages.push(pg); if (page.cleanup) page.cleanup();
    }
    if (!P().items.length) doc.pages.splice(cur, 1, ...pages);
    else { doc.pages.splice(cur + 1, 0, ...pages); cur++; }
    afterPageChange(); changed();
    toast(`PDF listo: ${n} página${n === 1 ? '' : 's'}. Escribe encima; la hoja está bloqueada.`);
  } catch (err) {
    console.error(err);
    toast(location.protocol === 'file:' ? 'No se pudo abrir el PDF aquí: usa la versión web o la app instalada' : 'No se pudo abrir ese PDF');
  } finally { pdfBusy = false; }
}

/* ---------- Imágenes ---------- */
const MAX_IMG = 1800;
function fileToDataURL(file) {
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(file), im = new Image();
    im.onload = () => {
      let w = im.naturalWidth, h = im.naturalHeight; const k = Math.min(1, MAX_IMG / Math.max(w, h)); w = Math.round(w * k); h = Math.round(h * k);
      const c = document.createElement('canvas'); c.width = w; c.height = h; c.getContext('2d').drawImage(im, 0, 0, w, h);
      URL.revokeObjectURL(url);
      const png = /png|gif|webp|svg/.test(file.type);
      res({ src: c.toDataURL(png ? 'image/png' : 'image/jpeg', 0.9), w, h });
    };
    im.onerror = () => { URL.revokeObjectURL(url); rej(new Error('img')); };
    im.src = url;
  });
}
async function insertImages(files, at) {
  files = [...files].filter((f) => f && ((f.type && f.type.startsWith('image/')) || /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(f.name || '')));
  if (!files.length) return false;
  commitEditor();
  const v = view(); const added = [];
  let [cx, cy] = at || toWorld(W / 2, H / 2);
  for (const f of files) {
    try {
      const { src, w, h } = await fileToDataURL(f);
      const k = Math.min(1, (W * 0.6) / w, (H * 0.6) / h) / v.s, ww = w * k, hh = h * k;
      added.push({ t: 'image', src, x1: r2(cx - ww / 2), y1: r2(cy - hh / 2), x2: r2(cx + ww / 2), y2: r2(cy + hh / 2) });
      cx += 24 / v.s; cy += 24 / v.s;
    } catch (_) { toast('No se pudo leer la imagen'); }
  }
  if (!added.length) return true;
  snap(); P().items.push(...added);
  setTool('select'); S.sel = added; changed();
  toast(added.length > 1 ? `${added.length} imágenes insertadas` : 'Imagen insertada · arrastra la esquina para cambiar el tamaño');
  return true;
}
const imgInput = document.createElement('input'); imgInput.type = 'file'; imgInput.accept = 'image/*'; imgInput.multiple = true; imgInput.hidden = true;
document.body.appendChild(imgInput);
imgInput.addEventListener('change', () => { insertImages(imgInput.files); imgInput.value = ''; });
let pastePending = 0;
function blobToFile(blob, name) { return blob instanceof File ? blob : new File([blob], name || 'imagen.png', { type: blob.type || 'image/png' }); }
async function urlToFile(url) {
  try { const r = await fetch(url); if (!r.ok) return null; const bl = await r.blob(); return bl.type.startsWith('image/') ? blobToFile(bl) : null; } catch (_) { return null; }
}
async function imagesFromData(dt) {
  if (!dt) return [];
  const out = [];
  for (const it of dt.items || []) if (it.kind === 'file' && it.type.startsWith('image/')) { const f = it.getAsFile(); if (f) out.push(f); }
  if (!out.length) for (const f of dt.files || []) if (f.type.startsWith('image/') || /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(f.name)) out.push(f);
  if (!out.length) {
    const html = dt.getData && dt.getData('text/html');
    const m = html && html.match(/<img[^>]+src=["']([^"']+)["']/i);
    const url = m ? m[1].replace(/&amp;/g, '&') : (dt.getData && /^(https?:|data:image\/)\S+$/i.test((dt.getData('text/plain') || '').trim()) ? dt.getData('text/plain').trim() : null);
    if (url) { const f = await urlToFile(url); if (f) out.push(f); else if (/^https?:/i.test(url)) toast('Esa imagen web no deja copiarse: guárdala y arrástrala aquí'); }
  }
  return out;
}
async function pasteFromClipboardAPI(manual) {
  if (!navigator.clipboard || !navigator.clipboard.read) { if (manual) toast('Tu navegador no permite leer el portapapeles: usa Ctrl+V'); return false; }
  try {
    const items = await navigator.clipboard.read(); const files = [];
    for (const it of items) { const tp = it.types.find((t) => t.startsWith('image/')); if (tp) files.push(blobToFile(await it.getType(tp), 'imagen.' + tp.split('/')[1])); }
    if (files.length) return insertImages(files, hover && !edState ? toWorld(hover[0], hover[1]) : null);
    if (manual) toast('No hay una imagen copiada en el portapapeles');
  } catch (_) { if (manual) toast('Permite el acceso al portapapeles o usa Ctrl+V'); }
  return false;
}
window.addEventListener('paste', async (e) => {
  pastePending = 0;
  if ($('#modalBg').classList.contains('show')) return;
  const t = e.target;
  const editingText = t === ed || (t.tagName === 'INPUT' && t.type === 'text');
  const dt = e.clipboardData;
  const hasImg = dt && ([...(dt.items || [])].some((i) => i.kind === 'file') || (dt.files && dt.files.length) || /<img/i.test(dt.getData('text/html') || ''));
  if (editingText && !hasImg) return;
  e.preventDefault();
  const at = hover && !edState ? toWorld(hover[0], hover[1]) : null;
  const files = hasImg ? await imagesFromData(dt) : [];
  if (files.length) { insertImages(files, at); return; }
  if (clipboard) { paste(); return; }
  if (!(await pasteFromClipboardAPI(false))) toast('No hay una imagen copiada. Copia la imagen (no el archivo) o arrástrala aquí');
});
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'v' && e.target !== ed && !(e.target.tagName === 'INPUT' && e.target.type === 'text')) {
    const id = ++pastePending;
    // Si el navegador no dispara el evento paste, leemos el portapapeles directamente.
    setTimeout(() => { if (pastePending === id) { pastePending = 0; pasteFromClipboardAPI(true).then((ok) => { if (!ok && clipboard) paste(); }); } }, 200);
  }
}, true);

/* ---------- Páginas ---------- */
function afterPageChange() { if (gp.it && gp.page !== FPAGE && !P().items.includes(gp.it)) closeGraphPanel(); syncColorToBoard(); S.sel = []; live = null; act = null; cacheValid = false; updatePageUI(); updateHistoryUI(); updateZoomUI(); updateBgPop(); setTitle(); req(); if (FP.open) fpDraw(); }
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
  paintBoard = BOARDS[p.board] || BOARDS.white;
  drawBg(x1, p, v, cw, ch, 1);
  x1.setTransform(sc, 0, 0, sc, v.x, v.y); drawBgItems(x1, p);
  x2.setTransform(sc, 0, 0, sc, v.x, v.y);
  for (const it of p.items) if (!onBg(it)) drawSafe(x2, it);
  x1.setTransform(1, 0, 0, 1, 0, 0); x1.drawImage(c2, 0, 0);
  paintBoard = BOARDS[P().board] || BOARDS.white;
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
const PICK = { png: { description: 'Imagen PNG', accept: { 'image/png': ['.png'] } }, pdf: { description: 'Documento PDF', accept: { 'application/pdf': ['.pdf'] } }, pizarra: { description: 'Mi Pizarra', accept: { 'application/json': ['.pizarra'] } } };
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
async function exportPDF(onlyCurrent) {
  commitEditor(); toast('Generando PDF…');
  const pages = (onlyCurrent === true ? [P()] : doc.pages).map((p) => { const c = renderPageCanvas(p, 2); return { w: c.width, h: c.height, bytes: b64ToBytes(c.toDataURL('image/jpeg', 0.92).split(',')[1]) }; });
  await deliver(buildPDF(pages), onlyCurrent === true ? `${baseName()}-pagina-${cur + 1}.pdf` : `${baseName()}.pdf`, 'pdf', 'application/pdf');
}
const baseName = () => filePath || 'Mi Pizarra';

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

/* ---------- Bandeja de lápices ---------- */
const zoomCenter = () => (hover ? [hover[0], hover[1]] : [W / 2, H / 2]);
function selectPen(i) {
  S.pi = clamp(i, 0, S.presets.length - 1); const p = S.presets[S.pi];
  if (p.k === 'hl') S.lastHl = S.pi; else S.lastPen = S.pi;
  savePresets(); setTool('pen');
  toast(`${S.pi < 9 ? S.pi + 1 + ' · ' : ''}${KINDS[p.k].name} ${colorName(p.c)} · grosor ${p.w}`);
}
function cyclePen(d) { const n = S.presets.length; selectPen(S.tool === 'pen' ? (S.pi + d + n) % n : S.pi); }
const COLOR_NAMES = { '#1d1d1f': 'negro', '#ffffff': 'blanco', '#e03131': 'rojo', '#1971c2': 'azul', '#2f9e44': 'verde', '#f08c00': 'naranja', '#9c36b5': 'morado', '#fcc419': 'amarillo', '#69db7c': 'verde claro' };
const colorName = (c) => COLOR_NAMES[String(c).toLowerCase()] || '';
function savePresets() { try { localStorage.setItem('mi-pizarra-presets', JSON.stringify({ list: S.presets, i: S.pi })); } catch (_) {} }
const curPreset = () => S.presets[S.pi] || S.presets[0];
function inkColor(c) { return adapt(c, BOARDS[P().board] || BOARDS.white); }
/* ---------- Barra de herramientas en grupos (tú eliges qué fijar en la barra) ---------- */
// Cada herramienta: nombre, tecla, ícono y cómo funciona (sale en la tarjeta al pasar el mouse).
const TL = {
  select: { name: 'Seleccionar y mover', key: 'V', text: 'Haz clic en un elemento o arrastra un rectángulo para elegir varios. Muévelos, cambia su tamaño por las esquinas o usa la barra que aparece encima.' },
  lasso: { name: 'Selección libre', key: 'S', text: 'Dibuja una línea alrededor de lo que quieres seleccionar, como con un lazo.' },
  eraser: { name: 'Borrador', key: 'E', text: 'Borra lo que tocas, como una goma. En Color y grosor puedes cambiarlo a borrar trazos completos.' },
  line: { name: 'Línea', key: 'L', text: 'Arrastra para trazarla. Con Mayús queda perfectamente recta.' },
  arrow: { name: 'Flecha', key: 'A', text: 'Arrastra desde el inicio hasta la punta. Con Mayús queda recta.' },
  rect: { name: 'Rectángulo', key: 'R', text: 'Arrastra de esquina a esquina. Con Mayús sale un cuadrado.' },
  ellipse: { name: 'Elipse o círculo', key: 'O', text: 'Arrastra para dibujarla. Con Mayús sale un círculo perfecto.' },
  triangle: { name: 'Triángulo', key: 'Y', text: 'Arrastra para dibujarlo dentro del rectángulo que marcas.' },
  plane: { name: 'Plano cartesiano', key: 'G', text: 'Arrastra para crear un plano con ejes y cuadrícula. Doble clic encima para agregarle funciones.' },
  func: { name: 'Graficar', key: 'F', text: 'Escribe funciones como y = x² o sin(x), con deslizadores, derivadas, puntos y desigualdades, como en GeoGebra.' },
  math: { name: 'Fórmula', key: 'Q', text: 'Haz clic donde quieras y escríbela en LaTeX: fracciones, raíces, integrales, matrices… Doble clic sobre una fórmula para editarla.' },
  compass: { name: 'Compás', key: 'C', text: 'Presiona en el centro, abre hasta el radio y gira para trazar el arco. Si sueltas sin girar, dibuja el círculo completo.' },
  ruler: { name: 'Regla', toggle: true, on: () => !!INS.ruler, run: () => insToggle('ruler'), text: 'Aparece sobre la pizarra: arrástrala para moverla y gírala con el botón azul o la rueda. Dibuja pegado a su borde y la línea sale recta.' },
  prot: { name: 'Transportador', icon: 'protractor', toggle: true, on: () => !!INS.prot, run: () => insToggle('prot'), text: 'Mide ángulos de 0° a 180° en ambos sentidos. Se arrastra y gira igual que la regla.' },
  text: { name: 'Texto', key: 'T', text: 'Haz clic y escribe. Aparece una barra con símbolos matemáticos (π, √, ≤, ∞…).' },
  laser: { name: 'Puntero láser', key: 'K', text: 'Señala mientras explicas: el trazo brilla un momento y desaparece solo.' },
  float: { name: 'Pizarra flotante', key: 'B', toggle: true, on: () => FP.open, run: () => toggleFloat(), text: 'Hoja auxiliar encima de todo para hacer cálculos aparte. Arrástrala, cámbiale el tamaño o fíjala con el pin.' },
  curtain: { name: 'Cortina', toggle: true, on: () => CL.curtain, run: () => setCurtain(!CL.curtain), text: 'Tapa la página; arrástrala hacia abajo para ir revelando el contenido poco a poco.' },
  spot: { name: 'Foco', toggle: true, on: () => CL.spot, run: () => setSpot(!CL.spot), text: 'Oscurece todo menos un círculo que sigue al puntero, para centrar la atención.' },
  hand: { name: 'Mover', key: 'H', text: 'Arrastra para moverte por la pizarra. También con la barra espaciadora o el botón central del mouse.' }
};
const TGROUPS = [
  { id: 'sel', name: 'Selección', tools: ['select', 'lasso'] },
  { id: 'pens', name: 'Lápices y resaltadores', pens: true },
  { id: 'erase', tools: ['eraser'] },
  { id: 'shapes', name: 'Figuras', tools: ['line', 'arrow', 'rect', 'ellipse', 'triangle'] },
  { id: 'mathg', name: 'Matemáticas', tools: ['plane', 'func', 'math', 'compass', 'ruler', 'prot'] },
  { id: 'write', tools: ['text'] },
  { id: 'present', name: 'Presentar', tools: ['laser', 'float', 'curtain', 'spot'] },
  { id: 'move', tools: ['hand'] }
];
const BAR_DEFAULT = []; // por defecto nada fijado: cada grupo muestra una sola herramienta y la barra queda liviana
// Lápices fijos por defecto: los tres primeros bolígrafos y el primer resaltador.
function defaultPenPins(list) {
  let pens = 0, hl = 0;
  for (const p of list) { const keep = p.k === 'hl' ? hl++ < 1 : pens++ < 3; if (keep) delete p.bar; else p.bar = false; }
}
function resetBar() {
  barPins = new Set(BAR_DEFAULT); saveBarPins(); defaultPenPins(S.presets); savePresets(); buildTools();
  toast('Barra restablecida a como viene por defecto');
}
let barPins = new Set(BAR_DEFAULT), grpOpen = null, prevTool = 'hand';
const groupLast = {};
function loadBarPins() { try { const q = JSON.parse(localStorage.getItem('mi-pizarra-bar') || 'null'); if (Array.isArray(q)) barPins = new Set(q.filter((id) => TL[id])); } catch (_) {} }
function saveBarPins() { try { localStorage.setItem('mi-pizarra-bar', JSON.stringify([...barPins])); } catch (_) {} }
const toolIcon = (id) => TL[id].icon || id;
const toolOn = (id) => (TL[id].toggle ? TL[id].on() : S.tool === id);
const MODE_TOOLS = ['laser', 'compass']; // modos que se apagan al tocarlos otra vez
function runTool(id) {
  const t = TL[id];
  if (t.toggle) t.run();
  else if (S.tool === id && MODE_TOOLS.includes(id)) { setTool(prevTool && prevTool !== id ? prevTool : 'hand'); toast(`${t.name} desactivado`); }
  else setTool(id);
  refreshBar();
}
const tipFor = (id) => () => ({ title: TL[id].name, key: TL[id].key, text: TL[id].text });
const penTitle = (p) => `${KINDS[p.k].name} ${colorName(p.c)}`.trim();
const penTip = (p, i) => () => ({ title: penTitle(p), key: i < 9 ? String(i + 1) : '', text: `Grosor ${p.w}${(p.o ?? 1) < 1 ? ` · opacidad ${Math.round(p.o * 100)}%` : ''}. Tócalo otra vez para cambiar color, grosor y opacidad.` });
function buildTools() {
  hideTip();
  const box = $('#tools'); box.replaceChildren();
  for (const g of TGROUPS) {
    if (g.pens) {
      const pbox = document.createElement('div'); pbox.id = 'presets'; pbox.className = 'group'; box.appendChild(pbox);
      box.appendChild(groupButton(g));
      continue;
    }
    const single = g.tools.length === 1;
    for (const id of g.tools) if (single || barPins.has(id)) box.appendChild(toolButton(id));
    if (!single) box.appendChild(groupButton(g));
  }
  buildPresets(); refreshBar();
}
function toolButton(id) {
  const b = document.createElement('button'); b.className = 'ib'; b.dataset.tool = id; b.setAttribute('aria-label', TL[id].name);
  b.innerHTML = ico(toolIcon(id));
  b.onclick = () => { hideTip(); if (grpOpen) { closePops(); grpOpen = null; } runTool(id); };
  hoverTip(b, tipFor(id));
  return b;
}
// Botón del grupo: muestra la herramienta del grupo que no está fijada (la activa o la última que usaste) y abre su menú.
function groupRep(g) {
  const free = g.tools.filter((id) => !barPins.has(id));
  if (!free.length) return null;
  const act = free.find((id) => toolOn(id) && !TL[id].toggle) || free.find((id) => toolOn(id));
  return act || (free.includes(groupLast[g.id]) ? groupLast[g.id] : free[0]);
}
function groupButton(g) {
  const b = document.createElement('button'); b.className = 'ib tgroup'; b.dataset.group = g.id; if (g.id === 'shapes') b.dataset.tool = 'shapes';
  b.setAttribute('aria-label', g.name);
  // Primer toque: usa la herramienta que muestra el botón; si ya está activa (o el grupo está todo fijado), abre el menú del grupo.
  // La esquina con la flechita siempre abre el menú del grupo.
  let caretHit = false;
  b.addEventListener('pointerdown', (e) => { const q = b.getBoundingClientRect(); caretHit = e.clientX > q.right - 13 && e.clientY > q.bottom - 15; });
  b.onclick = () => {
    hideTip();
    if (grpOpen !== g) { closePops(); grpOpen = null; } // al cambiar de grupo se cierra el menú del anterior
    if (caretHit) { openGroup(g, b); return; } // la flechita siempre abre (o cierra) el menú del grupo
    const r = g.pens ? null : groupRep(g);
    if (r && !TL[r].toggle && S.tool !== r) { groupLast[g.id] = r; runTool(r); return; }
    if (r && MODE_TOOLS.includes(r) && S.tool === r) { runTool(r); return; }
    openGroup(g, b);
  };
  hoverTip(b, () => {
    const r = g.pens ? null : groupRep(g);
    if (r && MODE_TOOLS.includes(r) && S.tool === r) return { title: TL[r].name, key: TL[r].key, text: `Tócalo otra vez (o Esc) para desactivarlo. La flechita de la esquina abre el grupo ${g.name}.` };
    if (r) return { title: TL[r].name, key: TL[r].key, text: `${TL[r].text} Toca otra vez para ver el grupo ${g.name}.` };
    return { title: g.name, key: '', text: 'Toca para ver todo el grupo y elegir cuáles fijar en la barra con el pin.' };
  });
  return b;
}
function paintGroupButton(b, g) {
  if (!g) return;
  let compact, on = false;
  b.classList.remove('preset', 'hl');
  if (g.pens) {
    const free = S.presets.map((p, i) => [p, i]).filter(([p]) => p.bar === false);
    compact = !free.length;
    if (!compact) {
      const [p] = free.find(([, i]) => S.tool === 'pen' && S.pi === i) || free[0];
      b.innerHTML = ico(KINDS[p.k].icon) + `<i class="tip" style="height:4px;background:${inkColor(p.c)}"></i><i class="caret"></i>`;
      b.classList.add('preset'); if (p.k === 'hl') b.classList.add('hl');
      on = S.tool === 'pen' && curPreset().bar === false;
    }
  } else {
    const rep = groupRep(g); compact = !rep;
    if (!compact) { b.innerHTML = ico(toolIcon(rep)) + '<i class="caret"></i>'; on = toolOn(rep); }
  }
  b.classList.toggle('more', compact);
  if (compact) b.innerHTML = ico('chev');
  b.classList.toggle('on', on);
}
function refreshBar() {
  document.querySelectorAll('#tools > .ib[data-tool]:not(.tgroup)').forEach((b) => b.classList.toggle('on', toolOn(b.dataset.tool)));
  document.querySelectorAll('#tools > .tgroup').forEach((b) => paintGroupButton(b, TGROUPS.find((g) => g.id === b.dataset.group)));
  if (grpOpen && $('#grpPop').classList.contains('show')) buildGroupPop(grpOpen);
}
function openGroup(g, anchor) {
  const pop = $('#grpPop'), same = grpOpen === g && pop.classList.contains('show');
  closePops(); if (same) { grpOpen = null; return; }
  buildGroupPop(g); togglePop('#grpPop', anchor); grpOpen = g;
}
function buildGroupPop(g) {
  const pop = $('#grpPop'); hideTip(); pop.replaceChildren();
  const h = document.createElement('h4'); h.textContent = g.name; pop.appendChild(h);
  const row = (icoHtml, name, key, on, pinned, pick, pin, tip) => {
    const r = document.createElement('div'); r.className = 'gi';
    const it = document.createElement('button'); it.className = 'item' + (on ? ' on' : '');
    it.innerHTML = icoHtml; const sp = document.createElement('span'); sp.textContent = name; it.appendChild(sp);
    if (key) { const k = document.createElement('kbd'); k.textContent = key; it.appendChild(k); }
    it.onclick = () => { hideTip(); pick(); }; hoverTip(it, tip, true);
    const pb = document.createElement('button'); pb.className = 'pinb' + (pinned ? ' on' : ''); pb.innerHTML = ico('pin');
    const lab = pinned ? 'Quitar de la barra' : 'Fijar en la barra'; pb.setAttribute('aria-label', lab); pb.title = lab;
    pb.onclick = (e) => { e.stopPropagation(); pin(); };
    r.append(it, pb); pop.appendChild(r);
  };
  if (g.pens) {
    S.presets.forEach((p, i) => row(
      `<span class="pi-ico">${ico(KINDS[p.k].icon)}<i style="background:${inkColor(p.c)};${(p.o ?? 1) < 1 ? `opacity:${p.o}` : ''}"></i></span>`,
      `${penTitle(p)} · ${p.w}`, i < 9 ? String(i + 1) : '', S.tool === 'pen' && S.pi === i, p.bar !== false,
      () => { closePops(); selectPen(i); },
      () => { if (p.bar === false) delete p.bar; else p.bar = false; savePresets(); buildTools(); },
      penTip(p, i)));
    const add = document.createElement('button'); add.className = 'item'; add.innerHTML = ico('plus');
    const t = document.createElement('span'); t.textContent = 'Agregar lápiz'; add.appendChild(t);
    add.onclick = () => {
      if (S.presets.length >= 12) { toast('Máximo 12 lápices'); return; }
      const p = { ...curPreset() }; delete p.bar; S.presets.push(p); S.pi = S.presets.length - 1;
      savePresets(); setTool('pen'); buildTools(); toast('Lápiz agregado: tócalo en la barra para configurarlo');
    };
    pop.appendChild(add);
  } else {
    for (const id of g.tools) row(ico(toolIcon(id)), TL[id].name, toolOn(id) && (TL[id].toggle || MODE_TOOLS.includes(id)) ? 'Quitar' : TL[id].key, toolOn(id), barPins.has(id),
      () => { if (!TL[id].toggle) { closePops(); groupLast[g.id] = id; } runTool(id); },
      () => { if (barPins.has(id)) barPins.delete(id); else barPins.add(id); saveBarPins(); buildTools(); },
      tipFor(id));
    if (g.id === 'present' && CL.spot) {
      const r = document.createElement('div'); r.className = 'row';
      r.innerHTML = `<span>Tamaño del foco</span><div class="seg" id="spotSize"><button data-r="100" class="${CL.spotR === 100 ? 'on' : ''}">S</button><button data-r="150" class="${CL.spotR === 150 ? 'on' : ''}">M</button><button data-r="230" class="${CL.spotR === 230 ? 'on' : ''}">L</button></div>`;
      r.querySelectorAll('button').forEach((b) => (b.onclick = () => { CL.spotR = +b.dataset.r; moveSpot(hover ? hover[0] : W / 2, hover ? hover[1] : H / 2); buildGroupPop(g); }));
      pop.appendChild(r);
    }
  }
}
function buildPresets() {
  const box = $('#presets'); if (!box) return; box.replaceChildren();
  S.presets.forEach((p, i) => {
    if (p.bar === false) return;
    const b = document.createElement('button'); b.className = 'ib preset' + (p.k === 'hl' ? ' hl' : '') + (S.tool === 'pen' && S.pi === i ? ' on' : '');
    b.setAttribute('aria-label', penTitle(p));
    const th = p.k === 'hl' ? 6 : clamp(Math.round(p.w * 0.6), 2, 5);
    b.innerHTML = ico(KINDS[p.k].icon) + `<i class="tip" style="height:${th}px;background:${inkColor(p.c)};${(p.o ?? 1) < 1 ? `opacity:${p.o}` : ''}"></i>`;
    b.onclick = () => {
      hideTip(); if (grpOpen) closePops();
      if (S.tool === 'pen' && S.pi === i) { buildStyle(); togglePop('#stylePop', b); return; }
      S.pi = i; if (p.k === 'hl') S.lastHl = i; else S.lastPen = i; savePresets(); setTool('pen');
    };
    hoverTip(b, penTip(p, i));
    box.appendChild(b);
  });
  const gb = $('#tools > .tgroup[data-group=pens]'); if (gb) paintGroupButton(gb, TGROUPS[1]);
}
function setTool(t) {
  if (t !== 'text') commitEditor();
  if (gp.it && t !== 'func' && t !== 'plane') closeGraphPanel();
  if (mx.st && t !== 'math') commitMath();
  if (SHAPES.some((s) => s[0] === t)) S.lastShape = t;
  if (S.tool !== t && !MODE_TOOLS.includes(S.tool)) prevTool = S.tool;
  S.tool = t; laserOn = false;
  if (!isSelTool(t)) S.sel = [];
  for (const g of TGROUPS) if (g.tools && g.tools.includes(t) && !barPins.has(t)) groupLast[g.id] = t;
  $('#symbols').classList.toggle('show', t === 'text');
  buildPresets(); refreshBar(); buildStyleBtn(); if ($('#stylePop').classList.contains('show')) buildStyle();
  setCursor(); req();
}
function widthCfg() {
  if (S.tool === 'pen') { const p = curPreset(); const cfg = p.k === 'hl' ? WIDTHS.hl : WIDTHS.pen; return { cfg, v: p.w }; }
  const key = WKEY[S.tool]; if (!key) return null;
  return { cfg: WIDTHS[key], v: WIDTHS[key].v };
}
const OP_TOOLS = ['line', 'arrow', 'rect', 'ellipse', 'triangle', 'text', 'math', 'compass', 'select', 'lasso'];
function opCfg() {
  if (S.tool === 'pen') return { v: curPreset().o ?? 1 };
  if (OP_TOOLS.includes(S.tool)) return { v: S.op };
  return null;
}
function setOpacity(o, preview) {
  o = clamp(Math.round(o * 100) / 100, 0.1, 1);
  if (S.tool === 'pen') { const p = curPreset(); if (o >= 1) delete p.o; else p.o = o; savePresets(); }
  else if (OP_TOOLS.includes(S.tool)) S.op = o; else return;
  if (edState) { edState.o = o; layoutEditor(); }
  if (S.sel.length && !preview) {
    snap(); for (const it of S.sel) { if (it.t === 'plane' || it.t === 'image') continue; if (o >= 1) delete it.o; else it.o = o; }
    changed();
  }
  showSizeGuide(); buildStyleBtn();
  if (!preview) { buildPresets(); buildOpacity(); } else { const l = $('#opVal'); if (l) l.textContent = Math.round(o * 100) + '%'; }
}
function buildOpacity() {
  const box = $('#opBox'), oc = opCfg();
  box.hidden = !oc; if (!oc) return;
  const pct = Math.round(oc.v * 100);
  $('#opacityRow').innerHTML = `<input type="range" id="opRange" min="10" max="100" step="5" value="${pct}"><span id="opVal">${pct}%</span>`;
  const r = $('#opRange'); r.oninput = () => setOpacity(+r.value / 100, true); r.onchange = () => setOpacity(+r.value / 100);
}
// Guía de tamaño: círculo con el tamaño, color y opacidad reales al cambiar el grosor.
let sizeGuide = 0;
function showSizeGuide() { sizeGuide = performance.now(); req(); }
function drawSizeGuide(ctx, cx, cy, fade) {
  const wc = widthCfg(); if (!wc) return;
  const v = view(), isEr = S.tool === 'eraser', isText = S.tool === 'text' || S.tool === 'math';
  let d = wc.v; if (S.tool === 'pen' && curPreset().k !== 'hl' && curPreset().k !== 'marker' && curPreset().k !== 'pencil') d = wc.v * 0.95;
  const r = Math.max(2, d / 2), oc = opCfg(), o = (oc ? oc.v : 1) * (S.tool === 'pen' && curPreset().k === 'hl' ? 0.38 : 1);
  ctx.save(); ctx.globalAlpha = fade;
  if (!isEr && !isText) { ctx.fillStyle = inkColor(toolColor()); ctx.globalAlpha = fade * o; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = fade; }
  ctx.lineWidth = 1.5; ctx.strokeStyle = 'rgba(0,0,0,.55)'; ctx.beginPath(); ctx.arc(cx, cy, r + 1, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(cx, cy, r + 2.5, 0, Math.PI * 2); ctx.stroke();
  const label = `${isText ? 'Letra' : 'Tamaño'} ${wc.v}${oc ? ` · Opacidad ${Math.round(oc.v * 100)}%` : ''}`;
  ctx.font = '600 12px -apple-system,"Segoe UI",system-ui,sans-serif';
  const tw = ctx.measureText(label).width + 16, ly = cy + r + 14;
  ctx.fillStyle = 'rgba(28,28,30,.9)'; ctx.beginPath(); ctx.roundRect(cx - tw / 2, ly, tw, 24, 12); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, cx, ly + 12.5);
  ctx.restore(); void v;
}
function buildStyleBtn() {
  const b = $('#btnStyle'); const wc = widthCfg();
  const noColor = ['eraser', 'hand', 'laser'].includes(S.tool);
  b.disabled = !wc && noColor;
  const c = noColor ? 'transparent' : inkColor(toolColor());
  const d = wc ? clamp(Math.round(4 + (wc.v / wc.cfg.pre[wc.cfg.pre.length - 1]) * 8), 4, 12) : 0;
  const oc = opCfg();
  b.innerHTML = `<span class="swatch" style="background:${noColor ? 'var(--fill-strong)' : c};${oc && oc.v < 1 ? `opacity:${0.35 + oc.v * 0.65}` : ''}">${d ? `<i style="width:${d}px;height:${d}px"></i>` : ''}</span>`;
}
function buildStyle() {
  const isPen = S.tool === 'pen';
  $('#kindBox').hidden = !isPen; $('#presetActions').hidden = !isPen;
  $('#colorBox').hidden = ['eraser', 'hand', 'laser'].includes(S.tool);
  $('#widthTitle').textContent = S.tool === 'text' ? 'Tamaño de letra' : S.tool === 'eraser' ? 'Tamaño del borrador' : 'Grosor';
  if (isPen) {
    const p = curPreset();
    $('#kinds').innerHTML = Object.entries(KINDS).map(([k, o]) => `<button data-k="${k}" class="${p.k === k ? 'on' : ''}">${ico(o.icon)}<span>${o.name}</span></button>`).join('');
    $('#kinds').querySelectorAll('button').forEach((b) => (b.onclick = () => {
      const was = p.k; p.k = b.dataset.k;
      if ((was === 'hl') !== (p.k === 'hl')) { p.w = p.k === 'hl' ? 22 : 3; if (p.k === 'hl' && p.c === '#1d1d1f') p.c = '#fcc419'; }
      savePresets(); buildPresets(); buildStyle(); buildStyleBtn();
    }));
    $('#presetDup').innerHTML = ico('copy') + '<span>Duplicar este lápiz</span>';
    $('#presetDel').innerHTML = ico('trash') + '<span>Eliminar este lápiz</span>';
    $('#presetDel').disabled = S.presets.length <= 1; $('#presetDel').style.opacity = S.presets.length <= 1 ? 0.4 : 1;
  }
  buildColors(); buildWidths(); buildOpacity();
}
$('#presetDup').onclick = () => { if (S.presets.length >= 12) { toast('Máximo 12 lápices'); return; } S.presets.splice(S.pi + 1, 0, { ...curPreset() }); S.pi++; savePresets(); buildPresets(); buildStyle(); };
$('#presetDel').onclick = () => { if (S.presets.length <= 1) return; S.presets.splice(S.pi, 1); S.pi = Math.max(0, S.pi - 1); savePresets(); closePops(); setTool('pen'); toast('Lápiz eliminado'); };
$('#btnStyle').onclick = (e) => { buildStyle(); togglePop('#stylePop', e.currentTarget); };
function buildColors() {
  const box = $('#colors'), c = toolColor();
  const inPal = PALETTE.includes(c.toLowerCase());
  box.innerHTML = PALETTE.map((p) => `<button class="sw${p === c ? ' on' : ''}" style="background:${p === AUTO_DARK ? inkColor(p) : p}" data-c="${p}" title="${p}"></button>`).join('') +
    `<label class="sw custom${inPal ? '' : ' on'}" title="Otro color"${inPal ? '' : ` style="background:${c}"`}><input type="color" value="${c}"></label>`;
  box.querySelectorAll('[data-c]').forEach((b) => (b.onclick = () => setColor(b.dataset.c)));
  const inp = box.querySelector('input'); inp.oninput = () => setColor(inp.value, true); inp.onchange = () => setColor(inp.value);
}
function setColor(c, preview) {
  if (S.tool === 'pen') { curPreset().c = c; savePresets(); buildPresets(); }
  else S.color = c;
  if (edState) { edState.c = c; layoutEditor(); }
  if (S.sel.length && !preview) { snap(); for (const it of S.sel) it.c = c; changed(); }
  buildStyleBtn();
  if (!preview) buildColors();
}
// Barra de grosor en escala logarítmica (como Photoshop): la mitad izquierda cubre los tamaños finos.
const toSlider = (v, c) => Math.round((1000 * Math.log(v / c.min)) / Math.log(c.max / c.min));
const fromSlider = (t, c) => Math.max(c.min, Math.round(c.min * Math.pow(c.max / c.min, t / 1000)));
function buildWidths() {
  const box = $('#widths'); const wc = widthCfg();
  if (!wc) { box.innerHTML = '<span class="muted">—</span>'; return; }
  const { cfg, v } = wc; const maxPre = cfg.pre[cfg.pre.length - 1];
  box.innerHTML = cfg.pre.map((w) => { const d = Math.round(4 + (w / maxPre) * 14); return `<button class="wd${w === v ? ' on' : ''}" data-w="${w}" title="${w}"><span style="width:${d}px;height:${d}px"></span></button>`; }).join('') +
    `<input type="range" id="wRange" min="0" max="1000" value="${toSlider(v, cfg)}"><span id="wVal">${v}</span>` +
    (S.tool === 'eraser' ? `<div class="seg"><button data-m="area" class="${S.eraserMode === 'area' ? 'on' : ''}" title="Borra lo que tocas, como una goma">Goma</button><button data-m="stroke" class="${S.eraserMode === 'stroke' ? 'on' : ''}" title="Borra trazos completos">Trazo completo</button></div>` : '');
  box.querySelectorAll('[data-w]').forEach((b) => (b.onclick = () => setWidth(+b.dataset.w)));
  const r = $('#wRange'); r.oninput = () => setWidth(fromSlider(+r.value, cfg), true); r.onchange = () => setWidth(fromSlider(+r.value, cfg));
  box.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => { S.eraserMode = b.dataset.m; buildWidths(); }));
}
// Alt + / Alt − y Alt + rueda: cambia el grosor de la herramienta activa.
const SIZE_NAMES = { eraser: 'Borrador', text: 'Texto', math: 'Fórmula', compass: 'Compás', line: 'Figuras', arrow: 'Figuras', rect: 'Figuras', ellipse: 'Figuras', triangle: 'Figuras', plane: 'Gráfica', func: 'Gráfica', select: 'Selección', lasso: 'Selección' };
function stepSize(dir) {
  const wc = widthCfg();
  if (!wc) { toast('Esta herramienta no tiene grosor'); return; }
  const { cfg, v } = wc, step = Math.max(1, Math.round(v * 0.15));
  const nv = clamp(v + dir * step, cfg.min, cfg.max);
  if (nv === v) { toast(dir > 0 ? 'Ya está en el tamaño máximo' : 'Ya está en el tamaño mínimo'); return; }
  setWidth(nv); drawOverlay();
}
function setWidth(w, preview) {
  showSizeGuide();
  if (S.tool === 'pen') { curPreset().w = w; savePresets(); buildPresets(); }
  else { const key = WKEY[S.tool]; if (!key) return; WIDTHS[key].v = w; }
  if (edState && S.tool === 'text') { edState.size = r2(w / view().s); layoutEditor(); }
  if (S.sel.length && !preview) {
    snap(); const v = view();
    for (const it of S.sel) { if (it.t === 'text') it.size = r2(WIDTHS.text.v / v.s); else if (!(it.t === 'stroke' && it.hl) && it.t !== 'image') it.w = r2(w / v.s); }
    changed();
  }
  buildStyleBtn();
  if (preview) { const wv = $('#wVal'); if (wv) wv.textContent = w; req(); } else buildWidths();
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

function closePops() { document.querySelectorAll('.pop.show').forEach((p) => p.classList.remove('show')); grpOpen = null; }
function togglePop(sel, anchor) {
  const p = $(sel), open = p.classList.contains('show'); closePops(); if (open) return;
  p.style.maxHeight = ''; p.classList.add('show');
  const r = anchor.getBoundingClientRect(), vh = window.innerHeight;
  const below = vh - r.bottom - 16, above = r.top - 16;
  // Si no cabe (laptops pequeñas), el menú se limita al espacio libre y se desplaza con su propia barra.
  const cssMax = parseFloat(getComputedStyle(p).maxHeight) || Infinity; // respeta el límite del diseño móvil
  const down = p.offsetHeight <= below || below >= above, room = Math.min(cssMax, Math.max(120, down ? below : above));
  p.style.maxHeight = room + 'px';
  const ph = p.offsetHeight;
  const top = down ? r.bottom + 8 : r.top - ph - 8;
  p.style.top = clamp(top, 8, Math.max(8, vh - ph - 8)) + 'px';
  p.style.left = clamp(r.left, 8, window.innerWidth - p.offsetWidth - 8) + 'px';
}
document.addEventListener('pointerdown', (e) => { if (!e.target.closest('.pop') && !e.target.closest('#btnMenu,#btnBg,#btnAssist,#btnStyle,.preset,.tgroup')) closePops(); });

function buildMenu() {
  const items = [
    ['file', 'Nueva pizarra', '', newDoc], ['open', 'Abrir…', 'Ctrl+O', openFile], ['save', 'Guardar', 'Ctrl+S', () => save(false)],
    ['save', 'Guardar como…', 'Ctrl+Mayús+S', () => save(true)], null,
    ['pdf', 'Abrir PDF como páginas…', '', () => pdfInput.click()],
    ['imgadd', 'Insertar imagen desde archivo…', '', () => imgInput.click()],
    ['copy', 'Pegar imagen copiada', 'Ctrl+V', () => pasteFromClipboardAPI(true)], null,
    ['image', 'Exportar página como imagen (PNG)', '', exportPNG], ['pdf', 'Exportar esta página a PDF', '', () => exportPDF(true)], ['pdf', 'Exportar todas las páginas a PDF', 'Ctrl+P', () => exportPDF(false)], null,
    ['full', 'Pantalla completa', 'F11', toggleFull], ['present', 'Modo presentación (ocultar barras)', 'Tab', togglePresent], ['help', 'Atajos de teclado', 'F1', showHelp], null,
    ...(isStandalone() ? [] : [['install', 'Instalar Mi Pizarra como app', '', installApp]]),
    ['tools', 'Restablecer barra de herramientas', '', resetBar], ['sparkle', 'Novedades', '', openHistory],
    ['info', 'Acerca de Mi Pizarra', '', openAbout]
  ];
  const m = $('#menuPop'); m.innerHTML = '<h4>Mi Pizarra</h4>';
  for (const it of items) {
    if (!it) { m.appendChild(document.createElement('hr')); continue; }
    const b = document.createElement('button'); b.className = 'item';
    b.innerHTML = `${ico(it[0])}<span>${it[1]}</span>${it[2] ? `<kbd>${it[2]}</kbd>` : ''}`;
    b.onclick = () => { closePops(); it[3](); }; m.appendChild(b);
  }
}
function updateBgPop() {
  const p = P(), m = $('#bgPop');
  m.innerHTML = `<h4>Fondo</h4>` + BGS.map(([id, n]) => `<button class="item${p.bg === id ? ' on' : ''}" data-bg="${id}">${n}</button>`).join('') +
    `<hr><h4>Color de la pizarra</h4><div class="boardsw">` + Object.entries(BOARDS).map(([id, b]) => `<button title="${b.name}" data-board="${id}" class="${p.board === id ? 'on' : ''}" style="background:${b.bg}"></button>`).join('') + `</div>`;
  m.querySelectorAll('[data-bg]').forEach((b) => (b.onclick = () => { P().bg = b.dataset.bg; updateBgPop(); changed(); }));
  m.querySelectorAll('[data-board]').forEach((b) => (b.onclick = () => {
    const old = BOARDS[P().board]; P().board = b.dataset.board; if (FP.open) fpDraw();
    void old; syncColorToBoard(); cacheValid = false;
    buildColors(); updateBgPop(); changed();
  }));
}
function syncColorToBoard() {
  const b = BOARDS[P().board];
  document.body.classList.toggle('dark', P().board === 'chalk' || P().board === 'dark');
  if ($('#presets')) { buildPresets(); buildStyleBtn(); }
  if (CL.curtain) paintCurtain();
  if (['#f6f6ef', '#f5f5f5'].includes(String(S.color).toLowerCase())) S.color = AUTO_DARK;
  void b;
}
/* ---------- App instalable (PWA) ---------- */
let installEvt = null;
const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvt = e; });
window.addEventListener('appinstalled', () => { installEvt = null; buildMenu(); toast('Mi Pizarra quedó instalada ✓'); });
async function installApp() {
  if (installEvt) { installEvt.prompt(); const r = await installEvt.userChoice; installEvt = null; if (r.outcome === 'accepted') buildMenu(); return; }
  if (location.protocol === 'file:') { toast('Para instalarla abre la versión web: lucianomejia.github.io/mi-pizarra'); return; }
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) toast('En iPhone/iPad: botón Compartir → «Agregar a inicio»');
  else if (/Firefox/.test(ua)) toast('Firefox no instala apps web: abre esta página en Chrome o Edge');
  else toast('Usa el ícono de instalar en la barra de direcciones (⊕) o menú ⋮ → Instalar Mi Pizarra');
}
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
if ('launchQueue' in window) {
  window.launchQueue.setConsumer(async (params) => {
    if (!params.files || !params.files.length) return;
    try { const h = params.files[0], f = await h.getFile(); if (loadText(await f.text(), f.name.replace(/\.(pizarra|json)$/i, ''))) fileHandle = h; } catch (_) { toast('No se pudo abrir el archivo'); }
  });
}

function openAbout() { $('#modalBg').classList.add('show'); setTimeout(() => $('#aboutOk').focus(), 50); }
function closeAbout() { $('#modalBg').classList.remove('show'); if (document.activeElement) document.activeElement.blur(); }
$('#aboutOk').onclick = closeAbout;
$('#modalBg').addEventListener('pointerdown', (e) => { if (e.target.id === 'modalBg') closeAbout(); });
function showHelp() {
  const p = $('#keysPanel');
  if (p.classList.contains('show')) { closeHelp(); return; }
  closePops(); if (gp.it) closeGraphPanel();
  p.classList.add('show');
}
function closeHelp() { $('#keysPanel').classList.remove('show'); }
$('#kpClose').onclick = closeHelp;

/* ---------- Teclado ---------- */
/* Barra flotante sobre la selección */
function selAction(kind) {
  const items = P().items; if (!S.sel.length) return;
  if (kind === 'lock') {
    const lockNow = !S.sel.every((i) => i.locked);
    snap(); for (const it of S.sel) { if (lockNow) it.locked = true; else delete it.locked; }
    if (lockNow && gp.it && S.sel.includes(gp.it)) closeGraphPanel();
    toast(lockNow ? 'Bloqueado: no se moverá ni se borrará' : 'Desbloqueado'); changed(); return;
  }
  if (kind === 'dup') { if (S.sel.some((i) => i.locked)) return; clipboard = JSON.stringify(S.sel); paste(20); return; }
  if (kind === 'del') { deleteSel(); return; }
  snap();
  const set = new Set(S.sel), rest = items.filter((i) => !set.has(i)), mine = items.filter((i) => set.has(i));
  P().items = kind === 'front' ? [...rest, ...mine] : [...mine, ...rest];
  changed();
}
function updateSelBar() {
  const bar = $('#selbar');
  if (!isSelTool(S.tool) || !S.sel.length || act || edState) { bar.hidden = true; return; }
  const b = unionBox(S.sel); if (!b) { bar.hidden = true; return; }
  const locked = S.sel.every((i) => i.locked), anyLocked = S.sel.some((i) => i.locked);
  const lb = $('#sbLock'); lb.innerHTML = ico(locked ? 'unlock' : 'lock'); lb.title = locked ? 'Desbloquear' : 'Bloquear (no se mueve ni se borra)'; lb.classList.toggle('on', locked);
  for (const id of ['#sbDup', '#sbFront', '#sbBack', '#sbDel']) $(id).disabled = anyLocked;
  bar.hidden = false;
  const [ax, ay] = toScreen(b[0], b[1]), [bx, by] = toScreen(b[2], b[3]);
  const w = bar.offsetWidth || 220, h = bar.offsetHeight || 48;
  let top = ay - h - 16; if (top < 74) top = by + 16; if (top + h > H - 8) top = Math.max(74, ay + 8);
  bar.style.left = clamp((ax + bx) / 2 - w / 2, 8, W - w - 8) + 'px'; bar.style.top = top + 'px';
}
function deleteSel() {
  if (S.sel.some((i) => i.locked)) { toast('Está bloqueado: desbloquéalo para borrarlo'); return; }
  if (!S.sel.length) return; if (gp.it && S.sel.includes(gp.it)) closeGraphPanel(); snap(); const set = new Set(S.sel); P().items = P().items.filter((i) => !set.has(i)); S.sel = []; changed(); }
function copySel() { if (S.sel.length) { clipboard = JSON.stringify(S.sel); toast('Copiado'); } }
function paste(offset = 30) {
  if (!clipboard) return; const items = JSON.parse(clipboard); const o = offset / view().s;
  for (const it of items) delete it.locked;
  snap(); for (const it of items) { moveItem(it, o, o); P().items.push(it); }
  clipboard = JSON.stringify(items); setTool('select'); S.sel = items; changed();
}
window.addEventListener('keydown', (e) => {
  if ($('#modalBg').classList.contains('show')) { if (e.key === 'Escape' || e.key === 'Enter') closeAbout(); return; }
  if ((e.ctrlKey || e.metaKey) && !e.altKey && ['s', 'o', 'p'].includes(e.key.toLowerCase())) {
    e.preventDefault(); const kk = e.key.toLowerCase();
    if (kk === 's') save(e.shiftKey); else if (kk === 'o') openFile(); else exportPDF(false);
    return;
  }
  if (mx.st && e.target === $('#mxInput')) {
    if (e.key === 'Escape') { e.preventDefault(); closeMathEditor(); }
    else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey || !e.shiftKey)) { e.preventDefault(); commitMath(); }
    return;
  }
  if (mx.st && e.key === 'Escape') { closeMathEditor(); return; }
  if (gp.it && e.key === 'Escape') { graphDone(); return; }
  if (e.key === 'Escape' && $('#keysPanel').classList.contains('show')) { closeHelp(); return; }
  if (e.target === ed) {
    if (e.key === 'Escape' || (e.key === 'Enter' && (e.ctrlKey || e.metaKey))) { e.preventDefault(); commitEditor(); if (e.key === 'Escape') setTool('hand'); }
    return;
  }
  const tg = e.target.tagName;
  if ((tg === 'INPUT' && e.target.type !== 'range') || tg === 'SELECT' || tg === 'TEXTAREA' || e.target.isContentEditable) return;
  if (e.key === '?') { showHelp(); return; }
  const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
  if (e.altKey && !mod) {
    const plus = e.key === '+' || e.key === '=' || e.code === 'NumpadAdd' || e.code === 'Equal';
    const minus = e.key === '-' || e.key === '−' || e.key === '–' || e.code === 'NumpadSubtract' || e.code === 'Minus';
    if (plus || minus) { e.preventDefault(); stepSize(plus ? 1 : -1); return; }
  }
  if (mod) {
    const map = {
      z: () => (e.shiftKey ? redo() : undo()), y: redo, s: () => save(e.shiftKey), o: openFile, p: exportPDF,
      d: () => { if (S.sel.length) { clipboard = JSON.stringify(S.sel); paste(20); } },
      c: copySel, x: () => { copySel(); deleteSel(); }, l: () => selAction('lock'),
      a: () => { setTool('select'); S.sel = P().items.filter((i) => !i.er && !i.locked); req(); },
      '0': () => { const v = view(); zoomAt(1 / v.s, W / 2, H / 2); },
      '=': () => zoomAt(1.2, W / 2, H / 2), '+': () => zoomAt(1.2, W / 2, H / 2), '-': () => zoomAt(1 / 1.2, W / 2, H / 2)
    };
    if (map[k]) { e.preventDefault(); map[k](); }
    return;
  }
  if (e.key === ' ') { e.preventDefault(); if (!spaceDown) { spaceDown = true; setCursor(); } return; }
  if (e.key === 'Delete' || e.key === 'Backspace') { deleteSel(); return; }
  if (e.key === 'Escape') {
    if (document.querySelector('.pop.show')) { closePops(); return; }
    S.sel = []; setTool('hand'); return;
  }
  if (e.key === 'PageDown') { e.preventDefault(); goPage(cur + 1); return; }
  if (e.key === 'PageUp') { e.preventDefault(); goPage(cur - 1); return; }
  if (e.key === 'Tab') { e.preventDefault(); togglePresent(); return; }
  if (e.key === 'F1') { e.preventDefault(); showHelp(); return; }
  if (S.sel.length && !S.sel.some((i) => i.locked) && e.key.startsWith('Arrow')) {
    e.preventDefault(); const d = (e.shiftKey ? 10 : 1) / view().s;
    snap(); for (const it of S.sel) moveItem(it, e.key === 'ArrowLeft' ? -d : e.key === 'ArrowRight' ? d : 0, e.key === 'ArrowUp' ? -d : e.key === 'ArrowDown' ? d : 0); changed(); return;
  }
  if (/^[1-9]$/.test(e.key) && S.presets[+e.key - 1]) { selectPen(+e.key - 1); return; }
  if (e.code === 'Numpad0' || (e.key === '0' && !e.shiftKey)) { const v = view(); zoomAt(1 / v.s, W / 2, H / 2); return; }
  if (e.key === '+' || e.key === '=' || e.code === 'NumpadAdd') { e.preventDefault(); zoomAt(1.25, ...zoomCenter()); return; }
  if (e.key === '-' || e.code === 'NumpadSubtract') { e.preventDefault(); zoomAt(1 / 1.25, ...zoomCenter()); return; }
  if (e.key === '.' || e.code === 'NumpadDecimal') { cyclePen(1); return; }
  if (e.key === ',') { cyclePen(-1); return; }
  if (k === 'p' || k === 'm') {
    const want = k === 'm'; let i = want ? S.lastHl : S.lastPen;
    if (!S.presets[i] || (S.presets[i].k === 'hl') !== want) i = S.presets.findIndex((q) => (q.k === 'hl') === want);
    if (i >= 0) { S.pi = i; setTool('pen'); }
    return;
  }
  if (k === 'b' && !e.altKey) { toggleFloat(); return; }
  const keys = { s: 'lasso', q: 'math', c: 'compass', e: 'eraser', v: 'select', l: 'line', a: 'arrow', r: 'rect', o: 'ellipse', y: 'triangle', g: 'plane', f: 'func', t: 'text', k: 'laser', h: 'hand' };
  if (keys[k] && !e.altKey) { if (MODE_TOOLS.includes(keys[k]) && S.tool === keys[k]) runTool(keys[k]); else setTool(keys[k]); }
});
window.addEventListener('keyup', (e) => { if (e.key === ' ') { e.preventDefault(); spaceDown = false; setCursor(); } });
window.addEventListener('blur', () => { if (spaceDown) { spaceDown = false; setCursor(); } });
// Los botones de las barras no se quedan con el foco: así Espacio o Enter no repiten la última acción (p. ej. Limpiar página).
document.addEventListener('click', (e) => { const b = e.target.closest('.bar button, .pop button'); if (b && b !== document.activeElement?.closest('input')) b.blur(); });
window.addEventListener('resize', () => { resize(); if (FP.open) fpLayout(); });
window.addEventListener('beforeunload', autosave);
document.addEventListener('visibilitychange', () => { if (document.hidden && dirty) autosave(); });
window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', async (e) => { e.preventDefault();
  const pf = [...(e.dataTransfer.files || [])].find((f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name)); if (pf) { importPdf(pf); return; }
  const imgs = await imagesFromData(e.dataTransfer); if (imgs.length && await insertImages(imgs, toWorld(e.clientX, e.clientY))) return; const f = e.dataTransfer.files[0]; if (f && /\.(pizarra|json)$/i.test(f.name)) { fileHandle = null; loadText(await f.text(), f.name.replace(/\.(pizarra|json)$/i, '')); } });

/* ---------- Arranque ---------- */
function wire() {
  $('#btnMenu').innerHTML = ico('menu'); $('#btnBg').innerHTML = ico('bg');
  $('#btnUndo').innerHTML = ico('undo'); $('#btnRedo').innerHTML = ico('redo'); $('#btnClear').innerHTML = ico('clear');
  $('#pgPrev').innerHTML = ico('left'); $('#pgNext').innerHTML = ico('right'); $('#pgAdd').innerHTML = ico('plus');
  $('#pgDup').innerHTML = ico('copy'); $('#pgDel').innerHTML = ico('trash'); $('#zIn').innerHTML = ico('plus'); $('#zOut').innerHTML = ico('minus');
  $('#mxTpl').innerHTML = MATH_TPL.map(([l, c], i) => `<button data-i="${i}" title="${c.replace(/"/g, '&quot;')}">${l}</button>`).join('');
  $('#mxTpl').querySelectorAll('button').forEach((b) => { b.onpointerdown = (e) => e.preventDefault(); b.onclick = () => insertTpl(MATH_TPL[+b.dataset.i][1]); });
  $('#mxInput').addEventListener('input', previewMath);
  $('#mxOk').onclick = commitMath; $('#mxCancel').onclick = closeMathEditor;
  $('#ctClose').onclick = () => setCurtain(false);
  { const ct = $('#curtain'), hd = ct.querySelector('.ct-handle'); let drag = null;
    hd.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; drag = { y0: e.clientY, t0: CL.cy }; hd.setPointerCapture(e.pointerId); e.preventDefault(); });
    hd.addEventListener('pointermove', (e) => { if (!drag) return; CL.cy = clamp(drag.t0 + e.clientY - drag.y0, 60, H - 40); ct.style.top = CL.cy + 'px'; });
    hd.addEventListener('pointerup', () => { drag = null; }); hd.addEventListener('pointercancel', () => { drag = null; }); }
  $('#sbLock').onclick = () => selAction('lock'); $('#sbDup').onclick = () => selAction('dup');
  $('#sbFront').onclick = () => selAction('front'); $('#sbBack').onclick = () => selAction('back'); $('#sbDel').onclick = () => selAction('del');
  $('#sbDup').innerHTML = ico('copy'); $('#sbFront').innerHTML = ico('front'); $('#sbBack').innerHTML = ico('back'); $('#sbDel').innerHTML = ico('trash');
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


/* ---------- Novedades: historial de versiones ----------
   Para publicar una versión nueva, agrega un bloque ARRIBA de la lista (no borres los anteriores).
   Quien se haya saltado versiones verá todas las novedades que se perdió. */
const CHANGELOGS = [
  { v: '1.4.5', items: [
    ['📈', 'Al crear un plano o terminar una gráfica vuelves a Seleccionar con ella elegida: un clic afuera ya no crea otra por accidente.'],
    ['🗒️', 'En la pizarra flotante ahora puedes hacer figuras, planos y gráficas con funciones, y mover lo que hiciste con Seleccionar.'],
    ['🌗', 'Opacidad del fondo de la pizarra flotante, para ver la pizarra de atrás mientras trabajas.'],
    ['↔️', 'Al editar una gráfica de la pizarra flotante, la hoja se corre para no tapar el panel.']
  ] },
  { v: '1.4.4', items: [
    ['🗒️', 'Pizarra flotante: una hoja auxiliar para hacer cálculos aparte, encima de la pizarra (tecla B o Instrumentos).'],
    ['📌', 'Arrástrala por la barra y cambia su tamaño por la esquina; con el pin queda fija y no se mueve.'],
    ['👀', 'Sigue visible aunque te muevas, hagas zoom o cambies de página, y se guarda con tu archivo.'],
    ['⬇️', '“Pasar a la pizarra” copia lo que escribiste a la página, listo para moverlo a donde quieras.'],
    ['🧰', 'Barra en grupos: Selección, Lápices, Figuras, Matemáticas y Presentar. Con el pin decides qué herramientas quedan fijas en la barra.'],
    ['🧹', 'Barra más liviana por defecto; Menú → Restablecer barra de herramientas la deja como viene.'],
    ['💬', 'Al pasar el mouse por cualquier herramienta aparece cómo funciona y su atajo.'],
    ['🔴', 'El puntero láser y el compás se apagan tocándolos otra vez (o con su tecla) y vuelves a la herramienta que tenías.'],
    ['📜', 'En pantallas bajas los menús ya no se cortan: se desplazan con su propia barra.'],
    ['🧭', 'Compás, regla y transportador ahora están en el grupo Matemáticas; cortina, foco y pizarra flotante en Presentar.']
  ] },
  { v: '1.4.3', items: [
    ['🧽', 'La goma ahora borra de verdad: corta los trazos y figuras en vez de pintar encima del color del fondo.'],
    ['↔️', 'Lo que borraste sigue borrado aunque muevas o cambies el tamaño de la selección.'],
    ['🛠️', 'Las pizarras guardadas con la goma anterior se arreglan solas al abrirlas.'],
    ['🎨', 'Opacidad para lápices, figuras, texto y fórmulas; cada lápiz recuerda la suya (menú de estilo).'],
    ['🖌️', 'Como en Photoshop: Alt + clic derecho y arrastra; ← → cambia el tamaño y ↑ ↓ la opacidad (en Mac, Ctrl + Option + arrastrar).'],
    ['⭕', 'Al cambiar el grosor aparece una guía con el tamaño y color reales del lápiz.'],
    ['⚡', 'Mucho más fluida: las circunferencias grandes, escribir mucho y borrar partes de una figura ya no se traban (hasta 50 veces más rápido).'],
    ['✨', 'Los trazos muy gruesos ya no muestran grietas al alejar el zoom.'],
    ['📏', 'Tamaños como en Photoshop: lápices hasta 300, borrador hasta 800, y la barra y el gesto Alt + clic derecho crecen proporcionalmente.']
  ] },
  { v: '1.4.2', items: [
    ['⌨️', 'Alt + y Alt − cambian el grosor del lápiz, borrador, figuras o texto que tengas activo.'],
    ['🖱️', 'Alt + rueda del mouse ajusta el grosor de forma continua; el círculo del borrador muestra el tamaño nuevo.'],
    ['📜', 'Si te saltaste actualizaciones, ahora ves las novedades de todas; y en Menú → Novedades está el historial completo.']
  ] },
  { v: '1.4.1', items: [
    ['➰', 'Selección libre (S): dibuja un lazo alrededor de lo que quieres seleccionar, aunque tenga cualquier forma.'],
    ['✋', 'Con el lazo puedes mover, cambiar el tamaño, bloquear o borrar lo seleccionado sin cambiar de herramienta.'],
    ['➕', 'Mantén Mayús para sumar más cosas a la selección; un toque sin dibujar selecciona lo que está debajo.']
  ] },
  { v: '1.4.0', items: [
    ['📱', 'Mi Pizarra ahora funciona en celulares: la barra de herramientas va abajo y se desliza de lado para ver todo.'],
    ['✌️', 'Dibuja con un dedo; usa dos dedos para moverte y pellizca para hacer zoom.'],
    ['👆', 'Doble toque sobre una fórmula o una gráfica para editarla.'],
    ['🧾', 'Los paneles suben desde abajo como hojas y los menús se abren hacia arriba cuando no caben.']
  ] },
  { v: '1.3.0', items: [
    ['Σ', 'Fórmulas bonitas: herramienta Fórmula (Q) con vista previa y botones para fracciones, raíces, integrales y más.'],
    ['📏', 'Regla y transportador que se mueven y giran; dibuja pegado al borde de la regla y la línea sale recta.'],
    ['🧭', 'Compás (C): marca el centro, abre el radio y gira para trazar arcos o círculos.'],
    ['🎭', 'Cortina para ir revelando la página y foco que ilumina solo donde está el puntero.'],
    ['🔒', 'Bloquear elementos (Ctrl+L): no se mueven, no se borran y quedan debajo de la tinta.'],
    ['📄', 'Abre un PDF como páginas para escribir encima, y exporta solo la página actual a PDF.'],
    ['↔️', 'Cambia el tamaño de trazos, fórmulas, textos, figuras o varios elementos desde las esquinas.']
  ] },
  { v: '1.2.8', items: [
    ['↔️', 'Cambia el tamaño de las gráficas desde sus cuatro esquinas; los ejes se quedan en su lugar.'],
    ['🖼️', 'Las imágenes se pueden redimensionar desde cualquier esquina, manteniendo su proporción.']
  ] },
  { v: '1.2.7', items: [
    ['🆕', 'Aviso de novedades: cada vez que salga una versión nueva verás aquí qué cambió.'],
    ['🎨', 'Lo escrito en negro se ve en tiza blanca en las pizarras verde y oscura, y los colores se aclaran.'],
    ['📈', 'Gráficas: moverte ya no deja rastros, y puedes mover la gráfica completa con Seleccionar.'],
    ['💾', 'Ctrl+S, Ctrl+O y Ctrl+P funcionan también mientras escribes en el panel de gráfica.'],
    ['⌨️', 'Atajos en un panel lateral (F1 o ?), y Esc te devuelve a la mano de mover.']
  ] }
];
const APP_VERSION = CHANGELOGS[0].v;
function cmpVer(a, b) {
  const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number);
  for (let i = 0; i < 3; i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d; }
  return 0;
}
const wn = { timer: 0, versions: [] };
function fillWhatsNew(versions) {
  const list = $('#wnList'); list.textContent = '';
  const multi = versions.length > 1;
  for (const ver of versions) {
    if (multi) { const h = document.createElement('li'); h.className = 'wn-ver'; h.textContent = `Versión ${ver.v}`; list.appendChild(h); }
    for (const [e, t] of ver.items) {
      const li = document.createElement('li'), a = document.createElement('span'), b = document.createElement('span');
      a.className = 'e'; a.textContent = e; b.textContent = t; li.append(a, b); list.appendChild(li);
    }
  }
}
function setWnTitle(open) {
  const title = $('#wnTitle'), vs = wn.versions;
  title.textContent = wn.history ? 'Novedades de Mi Pizarra' : '¡Mi Pizarra se actualizó!';
  const sm = document.createElement('small');
  const label = wn.history ? `Versión actual ${APP_VERSION}` : vs.length > 1 ? `${vs.length} actualizaciones · hasta la ${APP_VERSION}` : `Versión ${APP_VERSION}`;
  sm.textContent = open ? label : `${label} · ver novedades`;
  title.appendChild(sm);
}
function showWhatsNew(versions, { history = false, open = false, since = '' } = {}) {
  const box = $('#whatsNew');
  wn.versions = versions; wn.history = history;
  $('#wnSub').textContent = history ? 'Historial de versiones' : versions.length > 1 ? `Lo que cambió desde tu versión ${since || versions[versions.length - 1].v}` : `Novedades de la versión ${APP_VERSION}`;
  fillWhatsNew(versions);
  box.classList.remove('leaving'); box.classList.toggle('open', open); box.hidden = false;
  $('#wnToggle').setAttribute('aria-expanded', String(open));
  setWnTitle(open);
  clearTimeout(wn.timer);
  if (!open) wn.timer = setTimeout(() => { if (!box.classList.contains('open')) closeWhatsNew(); }, 20000);
}
function closeWhatsNew() { clearTimeout(wn.timer); const box = $('#whatsNew'); box.classList.add('leaving'); setTimeout(() => { box.hidden = true; box.classList.remove('leaving', 'open'); }, 220); }
$('#wnToggle').onclick = () => { clearTimeout(wn.timer); const open = $('#whatsNew').classList.toggle('open'); $('#wnToggle').setAttribute('aria-expanded', String(open)); setWnTitle(open); };
$('#wnClose').onclick = closeWhatsNew;
function openHistory() { closePops(); showWhatsNew(CHANGELOGS, { history: true, open: true }); }
function initWhatsNew() {
  let seen = null, returning = false;
  try { seen = localStorage.getItem('mi-pizarra-version-vista'); returning = !!localStorage.getItem('mi-pizarra-autosave'); localStorage.setItem('mi-pizarra-version-vista', APP_VERSION); } catch (_) { return; }
  if (seen === APP_VERSION) return;
  if (!seen && !returning) return; // primera visita: no es una actualización
  // Todas las versiones que se perdió (si no sabemos desde cuál viene, solo la actual).
  const missed = seen ? CHANGELOGS.filter((c) => cmpVer(c.v, seen) > 0) : [CHANGELOGS[0]];
  if (!missed.length) return;
  showWhatsNew(missed.slice(0, 6), { since: seen });
}

async function init() {
  doc = { pages: [mkPage()] };
  resize(); wire(); loadBarPins(); buildTools(); buildMenu(); buildSymbols();
  try {
    const s = localStorage.getItem('mi-pizarra-autosave');
    if (s) { loadText(s, localStorage.getItem('mi-pizarra-name') || null, true); dirty = false; }
    const o = JSON.parse(localStorage.getItem('mi-pizarra-opts') || '{}');
    if (typeof o.shapeAssist === 'boolean') S.shapeAssist = o.shapeAssist;
    if (o.smooth >= 0 && o.smooth <= 3) S.smooth = o.smooth;
    const pz = JSON.parse(localStorage.getItem('mi-pizarra-presets') || 'null');
    if (pz && Array.isArray(pz.list) && pz.list.length) { S.presets = pz.list.filter((q) => KINDS[q.k] && q.c && q.w > 0).slice(0, 12); S.pi = clamp(pz.i | 0, 0, S.presets.length - 1); }
    if (!S.presets.length) S.presets = DEFAULT_PRESETS.map((q) => ({ ...q }));
    if (!localStorage.getItem('mi-pizarra-bar') && !S.presets.some((q) => 'bar' in q)) defaultPenPins(S.presets);
  } catch (_) {}
  buildAssist();
  syncColorToBoard(); setTool('pen'); afterPageChange();
  initWhatsNew();
  fpLoadPrefs(); if (FP.open) toggleFloat(true);
  try { if (isPhone() && !localStorage.getItem('mi-pizarra-hint-dock')) { localStorage.setItem('mi-pizarra-hint-dock', '1'); setTimeout(() => toast('Desliza la barra de abajo para ver todas las herramientas'), 900); } } catch (_) {}
  { const tb = $('#topbar'); const on = () => tb.classList.toggle('more', tb.scrollWidth - tb.clientWidth - tb.scrollLeft > 8); tb.addEventListener('scroll', on, { passive: true }); window.addEventListener('resize', on); setTimeout(on, 50); }
}
init();
})();
