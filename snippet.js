const LESSON = {
  title:"在房间里", pinyin:"Zài fángjiān lǐ", en:"In the room",
  level:"HSK 1", duration:"120 phút",
  objectives:[
    {vi:"Hiểu và dùng từ vựng về phòng ở và sinh hoạt buổi sáng: thức dậy, rửa mặt, tắm.",
     en:"Understand and use vocabulary about the room and morning routine: get up, wash the face, take a bath."},
    {vi:"Dùng cấu trúc 先……然后…… để diễn tả trình tự các hành động.",
     en:"Use the structure 先… 然后… to describe the sequence of actions."}
  ],
  // ------- TỪ VỰNG (12 từ mới) -------
  words:[
    {id:"w1", han:"房间", py:"fángjiān", pos:"danh từ · n.", vi:"phòng", en:"room",
      ex:{han:"我的房间很大。", py:"Wǒ de fángjiān hěn dà.", vi:"Phòng của tôi rất to.", en:"My room is big."}},
    {id:"w2", han:"床", py:"chuáng", pos:"danh từ · n.", vi:"giường", en:"bed",
      ex:{han:"房间里有一张床。", py:"Fángjiān lǐ yǒu yì zhāng chuáng.", vi:"Trong phòng có một cái giường.", en:"There is a bed in the room."}},
    {id:"w3", han:"起床", py:"qǐchuáng", pos:"động từ · v.", vi:"thức dậy", en:"to get up",
      ex:{han:"我七点起床。", py:"Wǒ qī diǎn qǐchuáng.", vi:"Tôi thức dậy lúc bảy giờ.", en:"I get up at seven."}},
    {id:"w4", han:"里面", py:"lǐmiàn", pos:"danh từ · n.", vi:"bên trong", en:"inside",
      ex:{han:"我在房间里面。", py:"Wǒ zài fángjiān lǐmiàn.", vi:"Tôi ở bên trong phòng.", en:"I am inside the room."}},
    {id:"w5", han:"外面", py:"wàimiàn", pos:"danh từ · n.", vi:"bên ngoài", en:"outside",
      ex:{han:"外面有一个窗户。", py:"Wàimiàn yǒu yí ge chuānghu.", vi:"Bên ngoài có một cửa sổ.", en:"There is a window outside."}},
    {id:"w6", han:"洗", py:"xǐ", pos:"động từ · v.", vi:"rửa", en:"to wash",
      ex:{han:"我洗脸。", py:"Wǒ xǐ liǎn.", vi:"Tôi rửa mặt.", en:"I wash my face."}},
    {id:"w7", han:"洗澡", py:"xǐzǎo", pos:"động từ · v.", vi:"tắm", en:"to take a bath",
      ex:{han:"我先洗澡，然后睡觉。", py:"Wǒ xiān xǐzǎo, ránhòu shuìjiào.", vi:"Tôi tắm trước, sau đó đi ngủ.", en:"I take a bath first, then sleep."}},
    {id:"w8", han:"窗户", py:"chuānghu", pos:"danh từ · n.", vi:"cửa sổ", en:"window",
      ex:{han:"我的房间有一个大窗户。", py:"Wǒ de fángjiān yǒu yí ge dà chuānghu.", vi:"Phòng của tôi có một cửa sổ lớn.", en:"My room has a big window."}},
    {id:"w9", han:"进", py:"jìn", pos:"động từ · v.", vi:"vào", en:"to enter",
      ex:{han:"他先进房间。", py:"Tā xiān jìn fángjiān.", vi:"Anh ấy vào phòng trước.", en:"He enters the room first."}},
    {id:"w10", han:"出来", py:"chūlái", pos:"động từ · v.", vi:"đi ra", en:"to come out",
      ex:{han:"我从房间里出来。", py:"Wǒ cóng fángjiān lǐ chūlái.", vi:"Tôi đi ra từ trong phòng.", en:"I come out of the room."}},
    {id:"w11", han:"脸", py:"liǎn", pos:"danh từ · n.", vi:"mặt", en:"face",
      ex:{han:"我先洗脸。", py:"Wǒ xiān xǐ liǎn.", vi:"Tôi rửa mặt trước.", en:"I wash my face first."}},
    {id:"w12", han:"快", py:"kuài", pos:"tính từ · adj.", vi:"nhanh", en:"fast; quick",
      ex:{han:"快起床！", py:"Kuài qǐchuáng!", vi:"Mau thức dậy đi!", en:"Get up quickly!"}}
  ],
  // ------- HÁN TỰ (16 chữ) · gif=null => hiển thị placeholder. Dán Base64 Data URI để thêm GIF. -------
  chars:[
    {c:"房", py:"fáng", vi:"phòng; nhà", en:"room; house", strokes:8, gif:null},
    {c:"间", py:"jiān", vi:"gian; khoảng", en:"room; between", strokes:7, gif:null},
    {c:"床", py:"chuáng", vi:"giường", en:"bed", strokes:7, gif:null},
    {c:"起", py:"qǐ", vi:"dậy; nổi lên", en:"to rise", strokes:10, gif:null},
    {c:"里", py:"lǐ", vi:"bên trong; dặm", en:"inside", strokes:7, gif:null},
    {c:"面", py:"miàn", vi:"mặt; phía", en:"face; side", strokes:9, gif:null},
    {c:"外", py:"wài", vi:"ngoài", en:"outside", strokes:5, gif:null},
    {c:"洗", py:"xǐ", vi:"rửa; giặt", en:"to wash", strokes:9, gif:null},
    {c:"澡", py:"zǎo", vi:"tắm rửa", en:"to bathe", strokes:16, gif:null},
    {c:"窗", py:"chuāng", vi:"cửa sổ", en:"window", strokes:12, gif:null},
    {c:"户", py:"hù", vi:"cửa; hộ", en:"door; household", strokes:4, gif:null},
    {c:"进", py:"jìn", vi:"vào; tiến", en:"to enter", strokes:7, gif:null},
    {c:"出", py:"chū", vi:"ra", en:"to go out", strokes:5, gif:null},
    {c:"来", py:"lái", vi:"đến; tới", en:"to come", strokes:7, gif:null},
    {c:"脸", py:"liǎn", vi:"mặt", en:"face", strokes:11, gif:null},
    {c:"快", py:"kuài", vi:"nhanh", en:"fast", strokes:7, gif:null}
  ],
  // ------- NGỮ PHÁP -------
  grammar:{
    point:"Cấu trúc 先……然后…… (trước tiên…, sau đó…)",
    intro:"Bài học có điểm ngữ pháp cơ bản: dùng 先……然后…… để nối hai hành động xảy ra theo thứ tự trước – sau.",
    blocks:[
      {h:"1. 先 (xiān)……然后 (ránhòu)…… — trước tiên…, sau đó…",
       body:"Dùng để diễn tả hai hành động xảy ra theo trình tự: 先 đặt trước hành động làm trước, 然后 đặt trước hành động làm sau. Cấu trúc: 先 + Động tác 1，然后 + Động tác 2.",
       formula:[["先 + Động tác 1","làm việc thứ nhất trước"],
                ["然后 + Động tác 2","sau đó làm việc thứ hai"]],
       ex:[{han:"我先起床，然后洗脸。",py:"Wǒ xiān qǐchuáng, ránhòu xǐ liǎn.",vi:"Tôi thức dậy trước, sau đó rửa mặt."},
           {han:"我先洗澡，然后睡觉。",py:"Wǒ xiān xǐzǎo, ránhòu shuìjiào.",vi:"Tôi tắm trước, sau đó đi ngủ."}]},
      {h:"2. Mở rộng — kết hợp với 以后",
       body:"Có thể dùng 以后 (sau khi) để nói một việc xảy ra sau việc khác. Ví dụ: 起床以后 (sau khi thức dậy), 洗澡以后 (sau khi tắm).",
       formula:[["起床以后","sau khi thức dậy"],
                ["洗澡以后","sau khi tắm"],
                ["先……然后……","trước tiên… sau đó…"]],
       ex:[{han:"起床以后，我洗脸。",py:"Qǐchuáng yǐhòu, wǒ xǐ liǎn.",vi:"Sau khi thức dậy, tôi rửa mặt."},
           {han:"他先进房间，然后出来。",py:"Tā xiān jìn fángjiān, ránhòu chūlái.",vi:"Anh ấy vào phòng trước, sau đó đi ra."}]}
    ]
  },
  // ------- BÀI ĐỌC (3 đoạn) -------
  texts:[
    {title:"Hội thoại — 对话", context:"Buổi sáng, hai bạn nói về việc thức dậy và sinh hoạt buổi sáng.",
     lines:[
       {sp:"A", sppy:"A", han:"你几点起床？", py:"Nǐ jǐ diǎn qǐchuáng?", vi:"Bạn thức dậy lúc mấy giờ?"},
       {sp:"B", sppy:"B", han:"我七点起床。", py:"Wǒ qī diǎn qǐchuáng.", vi:"Tôi thức dậy lúc bảy giờ."},
       {sp:"A", sppy:"A", han:"起床以后做什么？", py:"Qǐchuáng yǐhòu zuò shénme?", vi:"Sau khi thức dậy bạn làm gì?"},
       {sp:"B", sppy:"B", han:"我先洗脸，然后洗澡。", py:"Wǒ xiān xǐ liǎn, ránhòu xǐzǎo.", vi:"Tôi rửa mặt trước, sau đó tắm."}
     ]},
    {title:"Hội thoại (tiếp) — 对话", context:"Hai bạn nói tiếp về nơi rửa mặt và việc đi học.",
     lines:[
       {sp:"A", sppy:"A", han:"你在哪儿洗脸？", py:"Nǐ zài nǎr xǐ liǎn?", vi:"Bạn rửa mặt ở đâu?"},
       {sp:"B", sppy:"B", han:"我在房间里面洗脸。", py:"Wǒ zài fángjiān lǐmiàn xǐ liǎn.", vi:"Tôi rửa mặt ở bên trong phòng."},
       {sp:"A", sppy:"A", han:"现在你去哪儿？", py:"Xiànzài nǐ qù nǎr?", vi:"Bây giờ bạn đi đâu?"},
       {sp:"B", sppy:"B", han:"我出来了，我去学校。", py:"Wǒ chūlái le, wǒ qù xuéxiào.", vi:"Tôi ra rồi, tôi đi đến trường."}
     ]},
    {title:"Bài đọc — 我的早上", context:"Đoạn văn ngắn kể về buổi sáng của một bạn học sinh.",
     lines:[
       {sp:"我", sppy:"Wǒ", han:"我每天七点起床。", py:"Wǒ měi tiān qī diǎn qǐchuáng.", vi:"Mỗi ngày tôi thức dậy lúc bảy giờ."},
       {sp:"我", sppy:"Wǒ", han:"我先洗脸，然后洗澡。", py:"Wǒ xiān xǐ liǎn, ránhòu xǐzǎo.", vi:"Tôi rửa mặt trước, sau đó tắm."},
       {sp:"我", sppy:"Wǒ", han:"我的房间里有一张床和一个大窗户。", py:"Wǒ de fángjiān lǐ yǒu yì zhāng chuáng hé yí ge dà chuānghu.", vi:"Trong phòng của tôi có một cái giường và một cửa sổ lớn."},
       {sp:"我", sppy:"Wǒ", han:"洗澡以后，我从房间里出来。", py:"Xǐzǎo yǐhòu, wǒ cóng fángjiān lǐ chūlái.", vi:"Sau khi tắm, tôi đi ra từ trong phòng."},
       {sp:"我", sppy:"Wǒ", han:"然后我去学校。", py:"Ránhòu wǒ qù xuéxiào.", vi:"Sau đó tôi đi đến trường."}
     ]}
  ],
  tongue:[
    {han:"窗前有床，床前有窗。", py:"Chuāng qián yǒu chuáng, chuáng qián yǒu chuāng.", vi:"Trước cửa sổ có giường, trước giường có cửa sổ."},
    {han:"先洗脸，然后洗澡。", py:"Xiān xǐ liǎn, ránhòu xǐzǎo.", vi:"Rửa mặt trước, sau đó tắm."}
  ]
};

/* ============================================================================
   3. CORE — trạng thái, localStorage, TTS, điều hướng, tiến trình, điểm số
   ============================================================================ */
const STORE_KEY = "hsk1_bai1_aixiaoyu_v1";
const DEFAULT_STATE = {
  score:0, maxScore:0,
  learnedWords:{}, reviewWords:{},          // theo id từ
  charStatus:{},                            // char -> 'remembered'|'practice'|'notyet'
  visited:{},                               // section id -> true
  fontScale:1, voiceURI:null, speed:"normal",
  hidePy:false, hideVi:false,                // ẩn pinyin / nghĩa VI để luyện nhớ Hán tự
  uiFont:null                                // phông chữ tiếng Việt do học sinh chọn
};
let STATE = load();

function load(){
  try{ const s = JSON.parse(localStorage.getItem(STORE_KEY)); if(s) return Object.assign({}, DEFAULT_STATE, s); }
  catch(e){}
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}
function save(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(STATE)); }catch(e){} }

/* --------- Điểm số (không cộng trùng nhờ khóa itemKey) --------- */
const scoredKeys = {}; // tránh cộng điểm lặp trong cùng phiên cho cùng câu
function award(itemKey, points, maxPoints){
  if(maxPoints===undefined) maxPoints=points>0?points:1;
  if(!scoredKeys[itemKey]){
    scoredKeys[itemKey]="counted";
    STATE.maxScore += maxPoints;
  }
  if(scoredKeys[itemKey]!=="won" && points>0){
    scoredKeys[itemKey]="won";
    STATE.score += points;
  }
  save(); renderScore(); updateProgress();
}
function renderScore(){ document.getElementById('scoreChip').textContent = "★ "+STATE.score; }

/* --------- Phông chữ tiếng Việt (học sinh tự chọn) ---------
   Chỉ dùng các phông PHỔ BIẾN đã cài sẵn trên máy → chạy offline, hỗ trợ tốt dấu tiếng Việt. */
const UI_FONTS = [
  {name:'Times New Roman (mặc định)', css:"'Times New Roman', Times, 'Liberation Serif', 'Tinos', serif"},
  {name:'Arial',           css:"Arial, 'Helvetica Neue', Helvetica, 'Liberation Sans', sans-serif"},
  {name:'Tahoma',          css:"Tahoma, Geneva, Verdana, sans-serif"},
  {name:'Verdana',         css:"Verdana, Geneva, Tahoma, sans-serif"},
  {name:'Georgia',         css:"Georgia, 'Times New Roman', serif"},
  {name:'Calibri',         css:"Calibri, 'Segoe UI', Candara, sans-serif"},
  {name:'Segoe UI',        css:"'Segoe UI', 'Segoe UI Variable', Tahoma, sans-serif"},
  {name:'Roboto',          css:"Roboto, 'Noto Sans', 'Droid Sans', sans-serif"},
  {name:'Palatino',        css:"'Palatino Linotype', 'Book Antiqua', Palatino, serif"},
  {name:'Trebuchet MS',    css:"'Trebuchet MS', 'Segoe UI', Tahoma, sans-serif"},
  {name:'Mặc định hệ thống', css:"system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"}
];
function applyFont(css){ document.documentElement.style.setProperty('--ui-font', css || UI_FONTS[0].css); }
function buildFontSelect(){
  const sel=document.getElementById('fontSelect'); if(!sel) return;
  sel.innerHTML='';
  UI_FONTS.forEach(f=>{ const o=document.createElement('option'); o.value=f.css; o.textContent='🔤 '+f.name;
    o.style.fontFamily=f.css; if(STATE.uiFont===f.css) o.selected=true; sel.appendChild(o); });
}

/* --------- Ẩn/hiện pinyin & nghĩa tiếng Việt (luyện nhớ Hán tự) --------- */
function applyHideModes(){
  document.body.classList.toggle('hide-py', !!STATE.hidePy);
  document.body.classList.toggle('hide-vi', !!STATE.hideVi);
  const on=(b,active,onLbl,offLbl)=>{ if(!b)return; b.textContent=active?onLbl:offLbl;
    b.style.background=active?'#fff':''; b.style.color=active?'var(--brand)':''; b.style.borderColor=active?'#fff':''; b.style.fontWeight=active?'800':''; };
  on(document.getElementById('btnHidePy'), STATE.hidePy, '拼 Hiện pinyin', '拼 Pinyin');
  on(document.getElementById('btnHideVi'), STATE.hideVi, '🇻🇳 Hiện nghĩa', '🇻🇳 Nghĩa');
}

/* --------- Cỡ chữ --------- */
function setFont(scale){
  STATE.fontScale = Math.min(1.6, Math.max(0.8, scale));
  document.documentElement.style.setProperty('--fs', STATE.fontScale);
  save();
}
/* --------- Toast --------- */
let toastT;
function toast(msg){
  const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),2200);
}

/* ---------------------------------------------------------------------------
   TTS — Speech Synthesis, CHỈ dùng giọng tiếng Trung tự nhiên
   --------------------------------------------------------------------------- */
const TTS = {
  voices:[], zhVoices:[], current:null, ready:false,
  speeds:{slow:0.7, normal:0.9, fast:1.1},
  init(){
    if(!('speechSynthesis' in window)){ this.showWarn(true); return; }
    this.refresh();
    window.speechSynthesis.onvoiceschanged = ()=>this.refresh();
    // một số trình duyệt cần vài lần thử
    let tries=0; const iv=setInterval(()=>{ this.refresh(); if(this.zhVoices.length||++tries>8) clearInterval(iv); },400);
  },
  refresh(){
    this.voices = window.speechSynthesis.getVoices()||[];
    // Lọc CHỈ giọng tiếng Trung (zh). Không hiển thị giọng khác.
    this.zhVoices = this.voices.filter(v=>/^zh(\b|-|_)/i.test(v.lang)||/chinese|中文|普通话|國語|国语|mandarin/i.test(v.name));
    // Ưu tiên: zh-CN > enhanced/premium/natural > nữ
    const rank=(v)=>{
      let s=0; const lang=(v.lang||'').toLowerCase(), name=(v.name||'').toLowerCase();
      if(lang.startsWith('zh-cn')||lang==='zh_cn'||lang==='zh') s+=100;
      else if(lang.startsWith('zh')) s+=60;
      if(/enhanced|premium|natural|neural|siri/.test(name)) s+=40;
      if(v.localService) s+=15;              // giọng cài sẵn trên máy → offline
      if(/tingting|meijia|sinji|female|婷婷|美佳|女/.test(name)) s+=8;
      return s;
    };
    this.zhVoices.sort((a,b)=>rank(b)-rank(a));
    this.buildSelect();
    // chọn giọng
    if(this.zhVoices.length){
      let v=null;
      if(STATE.voiceURI) v=this.zhVoices.find(x=>x.voiceURI===STATE.voiceURI);
      this.current = v || this.zhVoices[0];
      this.showWarn(false); this.ready=true;
    }else{
      this.current=null; this.showWarn(true);
    }
  },
  buildSelect(){
    const sel=document.getElementById('voiceSelect');
    if(!sel) return;
    const cur = STATE.voiceURI || (this.current&&this.current.voiceURI);
    sel.innerHTML='';
    if(!this.zhVoices.length){ const o=document.createElement('option'); o.textContent='(Chưa có giọng tiếng Trung)'; sel.appendChild(o); return; }
    this.zhVoices.forEach(v=>{
      const o=document.createElement('option'); o.value=v.voiceURI;
      o.textContent = v.name+' · '+v.lang+(v.localService?' ✓':'');
      if(v.voiceURI===cur) o.selected=true;
      sel.appendChild(o);
    });
  },
  setVoice(uri){ const v=this.zhVoices.find(x=>x.voiceURI===uri); if(v){ this.current=v; STATE.voiceURI=uri; save(); } },
  setSpeed(s){ STATE.speed=s; save(); },
  showWarn(show){
    let w=document.getElementById('voiceWarn');
    if(w) w.classList.toggle('show', show);
  },
  speak(text, opts){
    opts=opts||{};
    if(!('speechSynthesis' in window)){ toast('Trình duyệt không hỗ trợ phát âm.'); return; }
    if(!this.current){ this.refresh(); if(!this.current){ toast('Chưa có giọng tiếng Trung. Xem hướng dẫn cài giọng.'); this.showWarn(true); return; } }
    window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.voice=this.current; u.lang=this.current.lang||'zh-CN';
    u.rate = opts.rate || this.speeds[STATE.speed] || 0.9;
    u.pitch = 1;
    if(opts.onend) u.onend=opts.onend;
    if(opts.onstart) u.onstart=opts.onstart;
    window.speechSynthesis.speak(u);
    return u;
  },
  stop(){ if('speechSynthesis' in window) window.speechSynthesis.cancel(); }
};

/* --------- Điều hướng & tiến trình --------- */
const SECTIONS = [
  {id:"intro", n:1, label:"Giới thiệu", build:buildIntro},
  {id:"vocab", n:2, label:"Từ vựng", build:buildVocab},
  {id:"hanzi", n:3, label:"Hán tự", build:buildHanzi},
  {id:"flash", n:4, label:"Flashcards", build:buildFlash},
  {id:"vpractice", n:5, label:"Luyện từ vựng", build:buildVocabPractice},
  {id:"grammar", n:6, label:"Ngữ pháp", build:buildGrammar},
  {id:"reading", n:7, label:"Bài đọc", build:buildReading},
  {id:"comp", n:8, label:"Đọc hiểu", build:buildComprehension},
  {id:"listen", n:9, label:"Luyện nghe", build:buildListening},
  {id:"writing", n:10, label:"Luyện viết", build:buildWriting},
  {id:"speaking", n:11, label:"Luyện nói", build:buildSpeaking},
  {id:"review", n:12, label:"Củng cố", build:buildReview},
  {id:"quiz", n:13, label:"Quiz tổng hợp", build:buildQuiz}
];
let currentSection = "intro";

function buildNav(){
  const nav=document.getElementById('nav'); nav.innerHTML='';
  SECTIONS.forEach(s=>{
    const b=document.createElement('button'); b.dataset.id=s.id;
    b.innerHTML='<span class="n">'+s.n+'</span><span>'+s.label+'</span>';
    b.onclick=()=>goto(s.id);
    nav.appendChild(b);
  });
}
function goto(id){
  TTS.stop();
  currentSection=id;
  STATE.visited[id]=true; save();
  document.querySelectorAll('.section').forEach(el=>el.classList.toggle('active', el.id==='sec-'+id));
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('active', b.dataset.id===id));
  updateNavDone();
  updateProgress();
  window.scrollTo({top:0, behavior:'smooth'});
}
function updateNavDone(){
  document.querySelectorAll('#nav button').forEach(b=>{
    if(STATE.visited[b.dataset.id]) b.classList.add('done');
  });
}
function updateProgress(){
  const visited=Object.keys(STATE.visited).filter(k=>STATE.visited[k]).length;
  const secPct = visited/SECTIONS.length;
  const words = LESSON.words.length;
  const wl = Object.keys(STATE.learnedWords).filter(k=>STATE.learnedWords[k]).length;
  const cs = Object.keys(STATE.charStatus).length;
  // Tiến trình = trung bình có trọng số của: phần đã xem, từ đã nhớ, chữ đã đánh giá, điểm đạt
  const wordPct = words? wl/words : 0;
  const charPct = LESSON.chars.length? cs/LESSON.chars.length : 0;
  const scorePct = STATE.maxScore? Math.min(1, STATE.score/STATE.maxScore) : 0;
  const pct = Math.round((secPct*0.4 + wordPct*0.25 + charPct*0.15 + scorePct*0.2)*100);
  document.getElementById('progFill').style.width=pct+'%';
  document.getElementById('progTxt').textContent='Tiến trình học tập: '+pct+'%  ·  Từ đã nhớ '+wl+'/'+words+'  ·  Hán tự đã luyện '+cs+'/'+LESSON.chars.length;
}

/* --------- Tiện ích chung --------- */
function el(tag, cls, html){ const e=document.createElement(tag); if(cls)e.className=cls; if(html!==undefined)e.innerHTML=html; return e; }
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function spkBtn(text, label){ const b=el('button','spk','🔊 '+(label||'Nghe')); b.onclick=(e)=>{e.stopPropagation();TTS.speak(text);}; return b; }

/* Nút tốc độ đọc dùng lại nhiều nơi */
function speedControl(){
  const wrap=el('div','speed-seg');
  [['slow','Chậm'],['normal','Bình thường'],['fast','Nhanh']].forEach(([k,lbl])=>{
    const b=el('button',STATE.speed===k?'on':'',lbl);
    b.onclick=()=>{ TTS.setSpeed(k); wrap.querySelectorAll('button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); };
    wrap.appendChild(b);
  });
  return wrap;
}

/* Chỉ dùng phông tiếng Trung (.zh) khi chuỗi THỰC SỰ chứa chữ Hán/ký tự CJK.
   Tránh việc chữ tiếng Việt bị phông tiếng Trung làm hỏng dấu (vd "tạm biệt"). */
function cjk(s){ return /[㐀-鿿豈-﫿　-〿＀-￯]/.test(String(s)); }
function zhSpan(text, tag){ tag=tag||'span'; return '<'+tag+(cjk(text)?' class="zh"':'')+'>'+text+'</'+tag+'>'; }

/* ===== Khung bài tập trắc nghiệm dùng chung ===== */
function makeMCQ(parent, {key, q, qzh, options, correct, explain}){
  const block=el('div','ex-block');
  const qd=el('div','q'); qd.innerHTML=(q||'')+(qzh?' '+zhSpan(qzh):'');
  block.appendChild(qd);
  const opts=el('div','opts');
  let answered=false;
  const order=shuffle(options.map((o,i)=>({o,i})));
  order.forEach(({o,i})=>{
    const btn=el('button','opt'); btn.innerHTML=zhSpan(o);
    btn.onclick=()=>{
      if(answered) return; answered=true;
      opts.querySelectorAll('.opt').forEach(x=>x.classList.add('disabled'));
      const correctText = options[correct];
      if(i===correct){ btn.classList.add('correct'); fb.className='feedback show ok'; fb.innerHTML='✅ Chính xác! '+(explain||''); award(key,1); }
      else{
        btn.classList.add('wrong'); fb.className='feedback show bad';
        fb.innerHTML='❌ Chưa đúng. Đáp án: '+zhSpan(correctText,'b')+'. '+(explain||''); award(key,0);
        opts.querySelectorAll('.opt').forEach(x=>{ if(x.textContent===correctText) x.classList.add('correct'); });
      }
    };
    opts.appendChild(btn);
  });
  block.appendChild(opts);
  const fb=el('div','feedback'); block.appendChild(fb);
  parent.appendChild(block);
  return block;
}

/* ===== Nhập text (điền từ) dùng chung ===== */
function makeFill(parent, {key, q, qzh, accept, explain, placeholder}){
  const block=el('div','ex-block');
  const qd=el('div','q'); qd.innerHTML=(q||'')+(qzh?' '+zhSpan(qzh):''); block.appendChild(qd);
  const row=el('div',''); row.style.display='flex'; row.style.gap='8px'; row.style.flexWrap='wrap';
  const inp=el('input','input'); inp.placeholder=placeholder||'Nhập đáp án…';
  const btn=el('button','btn btn-primary btn-sm','Kiểm tra');
  row.appendChild(inp); row.appendChild(btn); block.appendChild(row);
  const fb=el('div','feedback'); block.appendChild(fb);
  const norm=s=>(s||'').trim().toLowerCase().replace(/[\s，,。!！？?]/g,'');
  let answered=false;
  const check=()=>{
    if(answered) return;
    const val=norm(inp.value);
    const ok=accept.map(norm).includes(val);
    answered=true; inp.disabled=true; btn.disabled=true;
    if(ok){ fb.className='feedback show ok'; fb.innerHTML='✅ Chính xác! '+(explain||''); award(key,1); }
    else{ fb.className='feedback show bad'; fb.innerHTML='❌ Chưa đúng. Đáp án: '+zhSpan(accept[0],'b')+'. '+(explain||''); award(key,0); }
  };
  btn.onclick=check; inp.onkeydown=e=>{ if(e.key==='Enter') check(); };
  parent.appendChild(block);
}

/* nút Làm lại một khu vực: gọi lại hàm build của khu vực đó */
function retryBtn(label, fn){ const b=el('button','btn btn-ghost btn-sm','↻ '+(label||'Làm lại')); b.onclick=fn; return b; }

/* ===== Trò chơi NỐI CẶP dùng chung ===== */
function makeMatch(parent, {key, title, pairs, explain}){
  const block=el('div','ex-block');
  if(title) block.appendChild(el('div','q', title));
  const wrap=el('div',''); wrap.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:10px';
  const colL=el('div','opts'), colR=el('div','opts');
  const lefts=shuffle(pairs.map((p,i)=>({v:p.l,i}))), rights=shuffle(pairs.map((p,i)=>({v:p.r,i})));
  let selL=null, matched=0;
  const fb=el('div','feedback');
  lefts.forEach(p=>{ const b=el('button','opt'); b.innerHTML=zhSpan(p.v); b.dataset.i=p.i;
    b.onclick=()=>{ if(b.classList.contains('correct'))return; colL.querySelectorAll('.opt').forEach(x=>x.style.outline=''); selL=b; b.style.outline='3px solid var(--brand)'; };
    colL.appendChild(b); });
  rights.forEach(p=>{ const b=el('button','opt'); b.innerHTML='<span>'+p.v+'</span>'; b.dataset.i=p.i;
    b.onclick=()=>{ if(!selL||b.classList.contains('correct'))return;
      if(selL.dataset.i===b.dataset.i){ selL.classList.add('correct');selL.classList.add('disabled'); b.classList.add('correct');b.classList.add('disabled'); selL.style.outline=''; selL=null; matched++;
        if(matched===pairs.length){ fb.className='feedback show ok'; fb.innerHTML='✅ Hoàn thành! '+(explain||''); award(key,1);} }
      else{ const s=selL; s.classList.add('wrong'); b.classList.add('wrong'); setTimeout(()=>{s.classList.remove('wrong');b.classList.remove('wrong');s.style.outline='';},600); selL=null; award(key,0); }
    };
    colR.appendChild(b); });
  wrap.appendChild(colL); wrap.appendChild(colR); block.appendChild(wrap); block.appendChild(fb);
  parent.appendChild(block);
}

/* ===== Sắp xếp (thứ tự từ / pinyin) dùng chung ===== */
function makeArrange(parent, {key, q, qzh, tokens, answer, explain}){
  const block=el('div','ex-block');
  const qd=el('div','q'); qd.innerHTML=(q||'')+(qzh?' '+zhSpan(qzh):''); block.appendChild(qd);
  const zone=el('div','drop-zone'); block.appendChild(zone);
  const pool=el('div','chips'); block.appendChild(pool);
  const placed=[];
  shuffle(tokens).forEach(t=>{
    const c=el('button','chip-word zh',t);
    c.onclick=()=>{ if(c.classList.contains('used'))return; c.classList.add('used'); const p=el('button','chip-word zh',t);
      p.onclick=()=>{ p.remove(); c.classList.remove('used'); const k=placed.indexOf(p); if(k>-1)placed.splice(k,1); };
      zone.appendChild(p); placed.push(p); };
    pool.appendChild(c);
  });
  const row=el('div','toolbar');
  const chk=el('button','btn btn-primary btn-sm','Kiểm tra');
  row.appendChild(chk); block.appendChild(row);
  const fb=el('div','feedback'); block.appendChild(fb);
  let done=false;
  chk.onclick=()=>{ if(done)return; const got=placed.map(p=>p.textContent).join('');
    const target=answer.join('');
    if(got===target){ done=true; fb.className='feedback show ok'; fb.innerHTML='✅ Chính xác! <span class="zh">'+answer.join(' ')+'</span> — '+(explain||''); award(key,1); }
    else{ fb.className='feedback show bad'; fb.innerHTML='❌ Chưa đúng. Thử lại. Gợi ý đáp án: <b class="zh">'+answer.join(' ')+'</b>'; award(key,0); }
  };
  parent.appendChild(block);
}

/* ============================================================================
   4. CÁC PHẦN HỌC
   ============================================================================ */

/* ---------- PHẦN 1: GIỚI THIỆU ---------- */
function buildIntro(c){
  c.innerHTML='';
  c.appendChild(secHead('Phần 1','Giới thiệu bài học','Làm quen với mục tiêu, từ vựng và ngữ pháp của bài.'));
  const card=el('div','card');
  card.innerHTML='<div style="text-align:center">'+
    '<div class="hz-big zh" style="color:var(--brand)">'+LESSON.title+'</div>'+
    '<div class="pinyin" style="font-size:1.2em;margin-top:6px">'+LESSON.pinyin+'</div>'+
    '<div style="color:var(--ink-soft)">'+LESSON.en+'</div>'+
    '<div style="margin-top:8px"><span class="tag">'+LESSON.level+'</span> <span class="tag">⏱ '+LESSON.duration+'</span></div></div>';
  const pb=el('div',''); pb.style.textAlign='center'; pb.style.marginTop='10px';
  pb.appendChild(spkBtn(LESSON.title,'Nghe tên bài')); card.appendChild(pb);
  c.appendChild(card);

  const obj=el('div','card');
  obj.appendChild(el('h3','','🎯 Mục tiêu bài học'));
  obj.appendChild(el('p','','Sau bài học, học sinh có thể:'));
  const ul=el('ul','clean'); ul.style.marginTop='6px';
  LESSON.objectives.forEach(o=>{ ul.appendChild(el('li','','<b>'+o.vi+'</b><br><small style="color:var(--muted)">'+o.en+'</small>')); });
  ['Nhận biết và viết Hán tự theo đúng thứ tự nét.','Hiểu nội dung bài đọc và trả lời câu hỏi.','Giao tiếp cơ bản: chào hỏi, cảm ơn, tạm biệt.']
    .forEach(t=>ul.appendChild(el('li','',t)));
  obj.appendChild(ul); c.appendChild(obj);

  const voc=el('div','card');
  voc.appendChild(el('h3','','📚 Từ vựng ('+LESSON.words.length+' từ mới)'));
  const g=el('div','chips'); g.style.marginTop='8px';
  LESSON.words.forEach(w=>{ const t=el('span','chip-word zh'); t.innerHTML=w.han+' <small style="color:var(--muted)">'+w.py+'</small>'; t.style.cursor='pointer'; t.onclick=()=>TTS.speak(w.han); g.appendChild(t); });
  voc.appendChild(g); c.appendChild(voc);

  const gr=el('div','card');
  gr.appendChild(el('h3','','📐 Ngữ pháp trọng tâm'));
  gr.appendChild(el('p','','<b class="zh">您</b> — đại từ kính ngữ, và <b class="zh">们</b> — hậu tố số nhiều.'));
  c.appendChild(gr);
  c.appendChild(navFooter('intro'));
}

function secHead(kicker,title,desc){
  const h=el('div','sec-head');
  h.innerHTML='<div class="kicker">'+kicker+'</div><h2>'+title+'</h2><p>'+desc+'</p>';
  return h;
}
function navFooter(id){
  const idx=SECTIONS.findIndex(s=>s.id===id);
  const f=el('div','footer-nav');
  const prev=el('button','btn btn-ghost', idx>0?'← '+SECTIONS[idx-1].label:'');
  const next=el('button','btn btn-primary', idx<SECTIONS.length-1?SECTIONS[idx+1].label+' →':'Hoàn tất ✓');
  if(idx>0) prev.onclick=()=>goto(SECTIONS[idx-1].id); else prev.style.visibility='hidden';
  next.onclick=()=>{ if(idx<SECTIONS.length-1) goto(SECTIONS[idx+1].id); else { toast('Bạn đã đi hết bài học! 🎉'); goto('review'); } };
  f.appendChild(prev); f.appendChild(next); return f;
}

/* ---------- PHẦN 2: TỪ VỰNG ---------- */
/* Minh hoạ (tranh) cho mỗi từ — dùng emoji để chạy OFFLINE, không cần ảnh ngoài.
   ➜ Muốn dùng ẢNH THẬT? Thay giá trị bằng Data URI (data:image/png;base64,...) hoặc
      mã <svg…>. Hàm wordIllus() sẽ tự nhận diện và hiển thị đúng loại. */
const WORD_IMG = { w1:'🛋️', w2:'🛏️', w3:'⏰', w4:'📥', w5:'🌳', w6:'🧼',
                   w7:'🚿', w8:'🪟', w9:'➡️', w10:'🚶', w11:'😊', w12:'⚡' };
console.log('WORDS',LESSON.words.length);console.log('CHARS',LESSON.chars.length);console.log('TEXTS',LESSON.texts.length);console.log('texts2line0',LESSON.texts[2].lines[0].han);console.log('w11',LESSON.words[11].han);console.log('WORD_IMG keys',Object.keys(WORD_IMG).length);