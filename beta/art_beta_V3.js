/* =====================================================================================
   🎨 小狗的家｜美術檔 art.js　版本 V1
   這個檔案由「美術對話」負責。遊戲主程式（index.html）只透過下面的名稱使用美術，
   所以【名稱與參數不能改、不能刪】，只能改畫法或新增。
   -------------------------------------------------------------------------------------
   【提供給主程式的名稱（合約）】
     L2                     圖示共用外框線屬性字串
     IC                     介面圖示表：IC.名稱 = 48×48 的 SVG 內容（不含 <svg>）
     icon(name, cls)        回傳 <svg viewBox="0 0 48 48">…</svg>
     ii(name)               行內小圖示 <span class="ii">…</span>
     pupSVG(stage, opts)    主角小狗，viewBox 0 0 120 110。stage 1 寶寶／2 小狗（有圍巾）／3 大狗
                            opts: {pose:'stand'|'sit'|'lie'|'sleep'|'eat'|'belly', happy, sad, dirty, yawn, look:{coat,clip}}
     COATS, CLIPS, recolor(svg, look)   毛色與髮夾顏色
     wordPic(pic)           英文單字圖：'c:#色碼' 'n:數字' 'b:eye|ear|nose|mouth' 'a:run|jump|sit|sleep|eat|sing'
                            'j:big|small|happy|sad' 'i:圖示名'，其他字串當成 emoji
     ART                    畫室塗色圖：ART.house / flower / fish = {ic, rg:[每一塊可塗色的 SVG 形狀]}
     NOTE_COL, ARR, noteSVG(a)          跳舞節奏音符（a = 'L' 'U' 'D' 'R'）
     K                      繪本共用外框線屬性字串
     SK                     繪本角色與道具：SK.girl/queen/prince/person/animal/wolf/goat/house/castle/… (x, y, …)
     SCN(bg, ground, inner) 繪本畫面，viewBox 0 0 320 200
     CASTLE, FOREST, GRASS, FLOOR       繪本常用背景色
     FRIENDS                活動中心的朋友：{cloud, hedge, chick} = {name, svg()}
     DOGART                 {version, css}：版本與本檔附帶的動畫樣式
   【畫圖規格】
     1. 外框線一律 #5A3E4B、3～4 px、圓角接頭（stroke-linejoin:round）。
     2. 調色盤：粉 #FF9EC4、深粉 #E0567F、黃 #FFD86B、橘 #FFB86B、薄荷 #8FDCC0、天藍 #8CC8F0、紫 #C9B3F5、
        米白 #FFF3E2、小狗毛色 #F9BF8C／#F2A773。可以加顏色，但要柔和、同一張圖不超過 6 色。
     3. 繪本角色：腳底中心在 (x, y)，面向左；畫面 320×200，地面線在 y=150。
     4. 動畫只用本檔最下面 CSS 裡的 class（an-bob、an-sway、an-walk、an-shake、an-pop、an-float、an-glow、an-knock、wa-*）。
        要新增動畫就把 @keyframes 加到 DOGART.css。
     5. 有 transform="translate(…)" 的元素不能直接加動畫 class，動畫要放在裡面那層 <g class="…">，
        否則 CSS 動畫會蓋掉位置，角色會跑到畫面左上角。
     6. 不畫任何既有的卡通、動畫、遊戲角色；公共領域童話要避開電影版的造型與配色。
     7. 6 歲孩子不識字：圖要一看就懂，重點放大，不要小字。
   【改完以後】把檔名改成 art_beta_V下一版.js，並更新下面的 DOGART.version。
   ===================================================================================== */
function pupSVG(stage,m={}){
  const pose=m.pose||'stand',closed=pose==='sleep';
  const eyes=m.yawn?'<path d="M121 70q9 8 18 0M161 70q9 8 18 0" fill="none" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round"/>':m.happy&&!closed?'<path d="M121 73q9 -10 18 0M161 73q9 -10 18 0" fill="none" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round"/>':closed?'<path d="M122 70q8 7 16 0M162 70q8 7 16 0" fill="none" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round"/>'
    :'<ellipse cx="130" cy="68" rx="5" ry="7.5" fill="#5A3E4B"/><ellipse cx="170" cy="68" rx="5" ry="7.5" fill="#5A3E4B"/><circle cx="131.5" cy="64.5" r="1.8" fill="#fff"/><circle cx="171.5" cy="64.5" r="1.8" fill="#fff"/>';
  const mouth=m.yawn?'<ellipse cx="150" cy="96" rx="11" ry="13" fill="#E0567F" stroke="#5A3E4B" stroke-width="3.5"/><ellipse cx="150" cy="102" rx="6" ry="4" fill="#FF9EC4"/>':m.sad?'<path d="M142 95 Q150 88 158 95" fill="none" stroke="#5A3E4B" stroke-width="3" stroke-linecap="round"/><path d="M120 54l16 5M180 54l-16 5" stroke="#5A3E4B" stroke-width="3.5" stroke-linecap="round"/>'
    :pose==='eat'?'<ellipse cx="150" cy="94" rx="8" ry="6" fill="#E0567F" stroke="#5A3E4B" stroke-width="3"/>'
    :closed?'<path d="M145 92 Q150 95 155 92" fill="none" stroke="#5A3E4B" stroke-width="3" stroke-linecap="round"/>'
    :'<path d="M142 90 Q150 97 158 90" fill="none" stroke="#5A3E4B" stroke-width="3" stroke-linecap="round"/>';
  const rnd=(a,b)=>(a+Math.random()*(b-a)).toFixed(2);
  const headIn=`<g class="ear ear-l" style="transform-origin:120px 58px;animation-duration:${rnd(6,9)}s"><path d="M112 62 L100 22 L134 44 Z" fill="#F2A773" stroke="#5A3E4B" stroke-width="5" stroke-linejoin="round"/><path d="M110 58 L104 34 L124 46 Z" fill="#FFB9C9"/></g>
    <g class="ear ear-r" style="transform-origin:180px 58px;animation-duration:${rnd(7,11)}s"><path d="M188 62 L200 22 L166 44 Z" fill="#F2A773" stroke="#5A3E4B" stroke-width="5" stroke-linejoin="round"/><path d="M190 58 L196 34 L176 46 Z" fill="#FFB9C9"/></g>
    <ellipse cx="150" cy="72" rx="52" ry="42" fill="#F9BF8C" stroke="#5A3E4B" stroke-width="5"/>
    <ellipse cx="150" cy="86" rx="30" ry="22" fill="#FFF3E2"/><g class="eyes" style="transform-origin:150px 68px;animation-duration:${rnd(3.5,5.5)}s;animation-delay:-${rnd(0,3)}s">${eyes}</g>
    <ellipse cx="150" cy="80" rx="5" ry="3.6" fill="#5A3E4B"/>${mouth}
    <ellipse cx="116" cy="84" rx="10" ry="6" fill="#FF9EC4" opacity=".75"/><ellipse cx="184" cy="84" rx="10" ry="6" fill="#FF9EC4" opacity=".75"/>
    <path d="M178 36c-4-8-16-4-11 5l11 10 11-10c5-9-7-13-11-5z" fill="#FF9EC5" stroke="#5A3E4B" stroke-width="4" stroke-linejoin="round"/>
    ${stage>=3?`<path d="M122 34 L128 8 L142 24 L150 2 L158 24 L172 8 L178 34 Z" fill="#FFD24A" stroke="#5A3E4B" stroke-width="5" stroke-linejoin="round"/><circle cx="150" cy="22" r="5" fill="#FF9EC4"/>`:''}`;
  const HP={stand:[84,40,0],sit:[70,30,0],lie:[60,52,0],sleep:[60,55,4],belly:[90,76,-18],eat:[98,80,26],sniff:[98,72,14]}[pose]||[84,40,0];
  const head=`<g class="head"><g transform="translate(${HP[0]} ${HP[1]}) rotate(${HP[2]}) scale(.52) translate(-150 -72)">${headIn}</g></g>`;
  const tail=(d,o)=>`<g class="tail" style="transform-origin:${o}"><path d="${d}" fill="none" stroke="#5A3E4B" stroke-width="10" stroke-linecap="round"/><path d="${d}" fill="none" stroke="#F9BF8C" stroke-width="5" stroke-linecap="round"/></g>`;
  const leg=(x,y,h)=>`<rect x="${x-6}" y="${y}" width="12" height="${h}" rx="6" fill="#F2A773" stroke="#5A3E4B" stroke-width="4"/>`;
  const paw=(x,y)=>`<ellipse cx="${x}" cy="${y}" rx="11" ry="5.5" fill="#F2A773" stroke="#5A3E4B" stroke-width="4"/>`;
  const scarf=(dx,dy)=>stage>=2?`<g transform="translate(${dx} ${dy})"><path d="M66 54 q16 14 34 2 l2 8 q-18 12 -36 -2z" fill="#FF8FB8" stroke="#5A3E4B" stroke-width="3" stroke-linejoin="round"/><path d="M78 64 l-4 14 l9 -4z" fill="#FF8FB8" stroke="#5A3E4B" stroke-width="3" stroke-linejoin="round"/></g>`:'';
  const dirt=(dx,dy)=>m.dirty?`<g transform="translate(${dx} ${dy})" fill="#A8805F" opacity=".55"><ellipse cx="38" cy="68" rx="6" ry="4"/><ellipse cx="62" cy="82" rx="5" ry="3.5"/><ellipse cx="74" cy="64" rx="4" ry="3"/></g>`:'';
  let body;
  if(pose==='sit'){
    // A：側面正確坐姿（背斜、大腿圓、前腳筆直撐地、尾巴貼地）
    body=tail('M28 102q-18 0-20-12','28px 102px')
      +`<path d="M30 102c-8-18-2-46 26-58l18 4c4 18 2 40-4 54z" fill="#F9BF8C" stroke="#5A3E4B" stroke-width="4" stroke-linejoin="round"/>`
      +`<circle cx="40" cy="86" r="17" fill="#F9BF8C" stroke="#5A3E4B" stroke-width="4"/>`+paw(54,103)
      +`<path d="M60 62c8 4 10 16 8 30" fill="none" stroke="#FFF3E2" stroke-width="10" stroke-linecap="round"/>`
      +leg(67,70,34)+leg(79,70,34)+scarf(-14,-10)+dirt(2,16);
  }else if(pose==='lie'||pose==='sleep'){
    // C：麻糬窩（縮成一團、只露兩隻前腳掌，頭朝前）
    body=tail('M98 96q16-4 14-22','98px 96px')
      +`<g class="bodyg" style="transform-origin:60px 104px"><path d="M18 104c0-22 18-36 42-36s42 14 42 36z" fill="#F9BF8C" stroke="#5A3E4B" stroke-width="4" stroke-linejoin="round"/><path d="M40 104c0-10 9-16 20-16s20 6 20 16" fill="#FFF3E2"/>${dirt(0,22)}</g>`
      +`<ellipse cx="50" cy="103" rx="9" ry="5.5" fill="#F2A773" stroke="#5A3E4B" stroke-width="4"/><ellipse cx="70" cy="103" rx="9" ry="5.5" fill="#F2A773" stroke="#5A3E4B" stroke-width="4"/>`
      +scarf(-24,10);
  }else if(pose==='belly'){
    body=tail('M24 92q-14 4-20-8','24px 92px')+[34,48,66,80].map(x=>`<rect x="${x-6}" y="50" width="12" height="24" rx="6" fill="#F2A773" stroke="#5A3E4B" stroke-width="4"/>`).join('')
      +`<ellipse cx="56" cy="84" rx="38" ry="18" fill="#F9BF8C" stroke="#5A3E4B" stroke-width="4"/><ellipse cx="56" cy="76" rx="27" ry="9" fill="#FFF3E2"/><circle cx="56" cy="78" r="2" fill="#E8B9A0"/>`+dirt(0,12);
  }else{
    const lg=(x,c)=>`<g class="leg ${c}" style="transform-origin:${x}px 84px">${leg(x,80,24)}</g>`;
    body=tail('M24 64q-16-10-10-26','22px 62px')+`<g class="legs">${lg(30,'a')+lg(44,'b')+lg(62,'b')+lg(76,'a')}</g>`
      +`<g class="bodyg"><ellipse cx="52" cy="72" rx="36" ry="24" fill="#F9BF8C" stroke="#5A3E4B" stroke-width="4"/><ellipse cx="56" cy="80" rx="20" ry="10" fill="#FFF3E2"/>${scarf(0,0)}${dirt(0,0)}</g>`;
  }
  return recolor(`<svg viewBox="0 0 120 110" aria-hidden="true">${body}${head}</svg>`,m.look);
}
const COATS={aka:['#F9BF8C','#F2A773','#FFF3E2','赤'],cream:['#FBE3C2','#EFCB9C','#FFF9F0','奶油'],sesame:['#D7B18C','#B38B69','#FFF3E2','芝麻'],kuro:['#7A6470','#5E4C56','#F6E2CF','黑'],shiro:['#FFFDF8','#EFE4D8','#FFFFFF','白']};
const CLIPS=['#FF9EC4','#8CC8F0','#FFD86B','#8FDCC0','#C9B3F5'];
function recolor(svg,look){const L0=look||(typeof S!=='undefined'&&S.pet&&S.pet.look)||{};const c=COATS[L0.coat]||COATS.aka,clip=CLIPS.includes(L0.clip)?L0.clip:CLIPS[0];
  return svg.replace(/#F9BF8C/g,c[0]).replace(/#F2A773/g,c[1]).replace(/#FFF3E2/g,c[2]).replace(/#FF9EC5/g,clip)}
const L2='stroke="#5A3E4B" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
const petal=(cx,cy,r,f)=>[0,72,144,216,288].map(a=>`<circle cx="${(cx+r*Math.cos((a-90)*Math.PI/180)).toFixed(1)}" cy="${(cy+r*Math.sin((a-90)*Math.PI/180)).toFixed(1)}" r="${r*.78}" fill="${f}" ${L2}/>`).join('');
const IC={
 bowl:`<circle cx="17" cy="22" r="5" fill="#D49A6A" ${L2}/><circle cx="26" cy="19" r="5" fill="#D49A6A" ${L2}/><circle cx="33" cy="23" r="5" fill="#D49A6A" ${L2}/><path d="M5 26h38l-6 14H11z" fill="#8CC8F0" ${L2}/>`,
 heart:`<path d="M24 41C10 31 5 24 5 17a9.5 9.5 0 0 1 19-3 9.5 9.5 0 0 1 19 3c0 7-5 14-19 24z" fill="#FF9EC4" ${L2}/>`,
 bolt:`<path d="M27 4L9 27h13l-3 17 20-25H26z" fill="#FFD86B" ${L2}/>`,
 ticket:`<path d="M5 14h38v7a4 4 0 0 0 0 7v8H5v-8a4 4 0 0 0 0-7z" fill="#FFD86B" ${L2}/><path d="M18 15v20" stroke="#5A3E4B" stroke-width="2.5" stroke-dasharray="3 3"/>`,
 ball:`<circle cx="24" cy="24" r="17" fill="#C8EB6B" ${L2}/><path d="M10 16c8 3 11 11 8 22M38 32c-8-3-11-11-8-22" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`,
 bath:`<path d="M5 24h38v4a12 12 0 0 1-12 12H17A12 12 0 0 1 5 28z" fill="#BBE1F8" ${L2}/><path d="M10 24V12a5 5 0 0 1 9-3" fill="none" ${L2}/><circle cx="27" cy="15" r="5" fill="#fff" ${L2}/><circle cx="36" cy="10" r="3.5" fill="#fff" ${L2}/><circle cx="37" cy="19" r="3" fill="#fff" ${L2}/><path d="M13 40l-2 4M35 40l2 4" ${L2}/>`,
 map:`<path d="M5 11l12-5 14 5 12-5v31l-12 5-14-5-12 5z" fill="#C9EFE0" ${L2}/><path d="M17 6v31M31 11v31" fill="none" ${L2}/><path d="M38 18c0 4-5 9-5 9s-5-5-5-9a5 5 0 0 1 10 0z" fill="#FF9EC4" ${L2}/>`,
 gift:`<rect x="8" y="20" width="32" height="22" rx="3" fill="#FFD6E7" ${L2}/><rect x="5" y="14" width="38" height="9" rx="3" fill="#FF9EC4" ${L2}/><path d="M24 14v28" ${L2}/><path d="M24 14c-4-8-14-7-10-1 2 2 10 1 10 1zM24 14c4-8 14-7 10-1-2 2-10 1-10 1z" fill="#FFD86B" ${L2}/>`,
 home:`<path d="M5 23L24 7l19 16" fill="none" ${L2}/><path d="M10 20v21h28V20" fill="#FFD6E7" ${L2}/><rect x="20" y="29" width="8" height="12" fill="#FFD86B" ${L2}/>`,
 zzz:`<path d="M7 14h12L7 30h12M25 8h9l-9 12h9M31 29h8l-8 10h8" fill="none" stroke="#8C7CC8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
 kibble:`<circle cx="15" cy="22" r="5" fill="#D49A6A" ${L2}/><circle cx="24" cy="18" r="5" fill="#C98B55" ${L2}/><circle cx="33" cy="22" r="5" fill="#D49A6A" ${L2}/><circle cx="24" cy="25" r="5" fill="#E2B48C" ${L2}/><path d="M4 27h40l-6 14H10z" fill="#FFC6DD" ${L2}/>`,
 bone:`<g transform="rotate(-30 24 24)"><circle cx="11" cy="19" r="5.5" fill="#FFF3E2" ${L2}/><circle cx="11" cy="29" r="5.5" fill="#FFF3E2" ${L2}/><circle cx="37" cy="19" r="5.5" fill="#FFF3E2" ${L2}/><circle cx="37" cy="29" r="5.5" fill="#FFF3E2" ${L2}/><rect x="11" y="19.5" width="26" height="9" fill="#FFF3E2" ${L2}/><rect x="9" y="21" width="30" height="6" fill="#FFF3E2"/></g>`,
 cake:`<path d="M8 25h32v15H8z" fill="#FFD6E7" ${L2}/><path d="M8 25c4 4 8-3 12 0s8-3 12 0 6-2 8 0v-6H8z" fill="#fff" ${L2}/><path d="M24 19v-7" ${L2}/><path d="M24 4c3 3 3 5 0 7-3-2-3-4 0-7z" fill="#FFB86B" ${L2}/><circle cx="16" cy="33" r="2.2" fill="#FF8FB8"/><circle cx="32" cy="33" r="2.2" fill="#FF8FB8"/><circle cx="24" cy="35" r="2.2" fill="#8CC8F0"/>`,
 flower:`${petal(24,24,10,'#FFC6DD')}<circle cx="24" cy="24" r="6" fill="#FFD86B" ${L2}/>`,
 flower2:`${petal(24,24,10,'#DCCBFF')}<circle cx="24" cy="24" r="6" fill="#FFF3B0" ${L2}/>`,
 star:`<path d="M24 4l6 13 14 1.5-10.5 9.5 3 14L24 35l-12.5 7 3-14L4 18.5 18 17z" fill="#FFD86B" ${L2}/>`,
 starOff:`<path d="M24 4l6 13 14 1.5-10.5 9.5 3 14L24 35l-12.5 7 3-14L4 18.5 18 17z" fill="#EEE" stroke="#C9B6BF" stroke-width="3" stroke-linejoin="round"/>`,
 up:`<path d="M24 8l14 18H30v14H18V26H10z" fill="#8FDCC0" ${L2}/>`,
 down:`<path d="M24 40L10 22h8V8h12v14h8z" fill="#FFB3C7" ${L2}/>`,
 lock:`<rect x="11" y="21" width="26" height="20" rx="4" fill="#FFD86B" ${L2}/><path d="M16 21v-6a8 8 0 0 1 16 0v6" fill="none" ${L2}/><circle cx="24" cy="30" r="3" fill="#5A3E4B"/>`,
 sponge:`<rect x="8" y="14" width="32" height="22" rx="8" fill="#FFE38F" ${L2}/><circle cx="17" cy="22" r="2" fill="#E2B48C"/><circle cx="27" cy="27" r="2.5" fill="#E2B48C"/><circle cx="33" cy="20" r="1.8" fill="#E2B48C"/><circle cx="38" cy="10" r="4" fill="#fff" ${L2}/><circle cx="10" cy="9" r="3" fill="#fff" ${L2}/>`,
 soap:`<circle cx="24" cy="24" r="16" fill="#CDE8FA" ${L2}/><path d="M15 19a10 10 0 0 1 8-7" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
 trees:`<circle cx="16" cy="20" r="10" fill="#8FDCC0" ${L2}/><circle cx="31" cy="16" r="11" fill="#7ED6A7" ${L2}/><path d="M16 30v11M31 27v14" ${L2}/>`,
 books:`<rect x="7" y="12" width="10" height="29" rx="2" fill="#8CC8F0" ${L2}/><rect x="19" y="7" width="10" height="34" rx="2" fill="#FF9EC4" ${L2}/><rect x="31" y="13" width="10" height="28" rx="2" fill="#FFD86B" ${L2} transform="rotate(8 36 27)"/>`,
 palette:`<path d="M24 6C12 6 5 14 5 23s7 17 16 17c3 0 4-2 3-4s0-4 3-4h5c6 0 11-4 11-10C43 13 35 6 24 6z" fill="#FFF3E2" ${L2}/><circle cx="15" cy="20" r="3.5" fill="#FF9EC4"/><circle cx="23" cy="13" r="3.5" fill="#8CC8F0"/><circle cx="32" cy="15" r="3.5" fill="#FFD86B"/><circle cx="35" cy="24" r="3.5" fill="#8FDCC0"/>`,
 music:`<path d="M18 34V11l20-5v24" fill="none" ${L2}/><ellipse cx="13" cy="35" rx="6" ry="5" fill="#C9B3F5" ${L2}/><ellipse cx="33" cy="31" rx="6" ry="5" fill="#C9B3F5" ${L2}/>`,
 abc:`<rect x="4" y="23" width="19" height="19" rx="4" fill="#FFD86B" ${L2}/><rect x="25" y="23" width="19" height="19" rx="4" fill="#8CC8F0" ${L2}/><rect x="14" y="4" width="19" height="19" rx="4" fill="#FF9EC4" ${L2}/><text x="23.5" y="19" text-anchor="middle" font-size="13" font-weight="900" fill="#5A3E4B">A</text><text x="13.5" y="38" text-anchor="middle" font-size="13" font-weight="900" fill="#5A3E4B">B</text><text x="34.5" y="38" text-anchor="middle" font-size="13" font-weight="900" fill="#5A3E4B">C</text>`,
 pot:`<path d="M8 20h32v13a9 9 0 0 1-9 9H17a9 9 0 0 1-9-9z" fill="#BBE1F8" ${L2}/><rect x="6" y="16" width="36" height="7" rx="3.5" fill="#8CC8F0" ${L2}/><path d="M2 26h6M40 26h6" ${L2}/><path d="M18 11c-2-3 2-5 0-8M30 11c-2-3 2-5 0-8" fill="none" stroke="#C9B6BF" stroke-width="2.5" stroke-linecap="round"/>`,
 plate:`<ellipse cx="24" cy="30" rx="21" ry="9" fill="#fff" ${L2}/><ellipse cx="24" cy="29" rx="12" ry="4.5" fill="#FFE3EF"/><path d="M10 14l4 6M24 10v7M38 14l-4 6" stroke="#FFD86B" stroke-width="3" stroke-linecap="round"/>`,
 spoon:`<ellipse cx="35" cy="12" rx="7" ry="10" transform="rotate(40 35 12)" fill="#FFE38F" ${L2}/><path d="M30 19L8 42" stroke="#5A3E4B" stroke-width="8" stroke-linecap="round"/><path d="M30 19L8 42" stroke="#E2B48C" stroke-width="3.5" stroke-linecap="round"/>`,
 stir:`<path d="M24 6a18 18 0 1 1-17 12" fill="none" stroke="#F27BA6" stroke-width="5" stroke-linecap="round" stroke-dasharray="6 7"/><path d="M2 12l5 8 8-4" fill="none" stroke="#F27BA6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
 plus:`<path d="M24 10v28M10 24h28" stroke="#C9B6BF" stroke-width="6" stroke-linecap="round"/>`,
 bulbOn:`<circle cx="24" cy="20" r="13" fill="#FFE38F" ${L2}/><path d="M19 32h10v6H19z" fill="#C9B6BF" ${L2}/><path d="M24 2v-0M8 6l3 3M40 6l-3 3" stroke="#FFB86B" stroke-width="3" stroke-linecap="round"/><path d="M20 20l4 4 4-4" fill="none" stroke="#FFB86B" stroke-width="2.5" stroke-linecap="round"/>`,
 bulbOff:`<circle cx="24" cy="20" r="13" fill="#DDD3E8" ${L2}/><path d="M19 32h10v6H19z" fill="#C9B6BF" ${L2}/><path d="M33 7a9 9 0 1 0 6 12 7 7 0 0 1-6-12z" fill="#FFF3B0" ${L2} transform="translate(2 -6) scale(.7)"/>`,
 rice:`<path d="M6 24h36a18 15 0 0 1-36 0z" fill="#FFC6DD" ${L2}/><path d="M9 24c0-8 7-12 15-12s15 4 15 12z" fill="#fff" ${L2}/><path d="M18 18h2M26 16h2M30 20h2M14 21h2" stroke="#E8DCC8" stroke-width="2" stroke-linecap="round"/>`,
 meat:`<path d="M27 6c9 0 14 7 12 15-2 7-10 10-17 7l-7 8a4.5 4.5 0 1 1-5.5-1.5A4.5 4.5 0 1 1 8 28l8-7c-3-8 2-15 11-15z" fill="#E2A07A" ${L2}/><path d="M24 12c4-2 9 0 10 4" fill="none" stroke="#F4C7A8" stroke-width="3" stroke-linecap="round"/>`,
 carrot:`<path d="M10 42L32 16l6 6z" fill="#FFB86B" ${L2}/><path d="M18 34l4 2M24 27l4 2" stroke="#E08A3C" stroke-width="2.5" stroke-linecap="round"/><path d="M34 16c-1-6 2-11 8-11 0 6-3 9-8 11zM34 16c-5-2-7-7-4-12 4 3 5 7 4 12z" fill="#8FDCC0" ${L2}/>`,
 pumpkin:`<ellipse cx="24" cy="28" rx="18" ry="14" fill="#FFB86B" ${L2}/><path d="M24 15v27M15 17c-3 7-3 15 0 22M33 17c3 7 3 15 0 22" fill="none" stroke="#E08A3C" stroke-width="2.5"/><path d="M24 15c0-5 3-9 7-9" fill="none" stroke="#7ED6A7" stroke-width="4" stroke-linecap="round"/>`,
 milk:`<path d="M17 4h14v7l5 7v26H12V18l5-7z" fill="#fff" ${L2}/><path d="M12 24h24v10H12z" fill="#BBE1F8"/><path d="M12 18h24M12 24h24M12 34h24" fill="none" ${L2}/>`,
 egg:`<ellipse cx="24" cy="26" rx="13" ry="16" fill="#FFF8EC" ${L2}/><ellipse cx="19" cy="20" rx="3" ry="5" fill="#fff"/>`,
 flour:`<path d="M11 15h26l4 28H7z" fill="#fff" ${L2}/><path d="M11 15l4-8h18l4 8" fill="#FFF3E2" ${L2}/><path d="M24 24v14M24 28l-4-3M24 28l4-3M24 33l-4-3M24 33l4-3" stroke="#E2B48C" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
 strawberry:`<path d="M24 43C11 35 9 24 11 18c3-6 23-6 26 0 2 6 0 17-13 25z" fill="#FF8FB8" ${L2}/><path d="M15 15l4 4 5-6 5 6 4-4-3-5H18z" fill="#8FDCC0" ${L2}/><g fill="#FFF3B0"><circle cx="19" cy="25" r="1.6"/><circle cx="28" cy="24" r="1.6"/><circle cx="23" cy="32" r="1.6"/><circle cx="30" cy="31" r="1.6"/></g>`,
 chocolate:`<rect x="10" y="8" width="28" height="33" rx="3" fill="#8A5A44" ${L2}/><path d="M10 19h28M10 30h28M24 8v33" stroke="#6B4334" stroke-width="2.5"/>`,
 grape:`<g fill="#B79AEB" ${L2}><circle cx="17" cy="18" r="6"/><circle cx="29" cy="18" r="6"/><circle cx="23" cy="27" r="6"/><circle cx="13" cy="28" r="5.5"/><circle cx="33" cy="28" r="5.5"/><circle cx="23" cy="37" r="5.5"/></g><path d="M23 12c0-4 2-7 6-8" fill="none" stroke="#7ED6A7" stroke-width="3.5" stroke-linecap="round"/>`,
 onion:`<path d="M24 8c-2 7-15 12-15 23a15 12 0 0 0 30 0c0-11-13-16-15-23z" fill="#EBD8F4" ${L2}/><path d="M24 8V3" ${L2}/><path d="M17 30c2 6 12 6 14 0M24 20v20" fill="none" stroke="#C9A3D9" stroke-width="2.5" stroke-linecap="round"/>`,
 riceBowl:`<path d="M5 24h38a19 16 0 0 1-38 0z" fill="#FFC6DD" ${L2}/><path d="M8 24c0-9 7-13 16-13s16 4 16 13z" fill="#fff" ${L2}/><rect x="13" y="13" width="11" height="7" rx="3" fill="#E2A07A" ${L2}/><circle cx="30" cy="16" r="4" fill="#FFB86B" ${L2}/><circle cx="35" cy="21" r="2.5" fill="#8FDCC0"/>`,
 soup:`<path d="M5 22h38a19 17 0 0 1-38 0z" fill="#FFF3E2" ${L2}/><ellipse cx="24" cy="22" rx="19" ry="5" fill="#FFB86B" ${L2}/><circle cx="18" cy="21" r="2" fill="#fff"/><circle cx="29" cy="22" r="1.8" fill="#8FDCC0"/><path d="M17 13c-2-3 2-5 0-8M25 13c-2-3 2-5 0-8M33 13c-2-3 2-5 0-8" fill="none" stroke="#C9B6BF" stroke-width="2.5" stroke-linecap="round"/>`,
 pancake:`<ellipse cx="24" cy="38" rx="20" ry="5" fill="#fff" ${L2}/><ellipse cx="24" cy="33" rx="16" ry="5" fill="#F7C98E" ${L2}/><ellipse cx="24" cy="27" rx="16" ry="5" fill="#F7C98E" ${L2}/><ellipse cx="24" cy="21" rx="16" ry="5" fill="#F7C98E" ${L2}/><path d="M14 20c4 3 16 3 20 0l-2 6c-2-1-4 0-4 2" fill="#E2A07A" opacity=".6"/><path d="M24 17C17 13 17 7 19 5c2-2 8-2 10 0 2 3 1 8-5 12z" fill="#FF8FB8" ${L2}/>`,
 calendar:`<rect x="6" y="10" width="36" height="32" rx="5" fill="#fff" ${L2}/><path d="M6 19h36" ${L2}/><rect x="6" y="10" width="36" height="9" rx="4" fill="#FF9EC4" ${L2}/><path d="M15 6v8M33 6v8" ${L2}/><circle cx="16" cy="27" r="3" fill="#FFD86B"/><circle cx="24" cy="27" r="3" fill="#8CC8F0"/><circle cx="32" cy="34" r="3" fill="#8FDCC0"/>`,
 moonS:`<path d="M30 6a17 17 0 1 0 12 26 14 14 0 0 1-12-26z" fill="#FFF3B0" ${L2}/>`,
 eraser:`<path d="M8 32l16-18 14 12-14 16H14z" fill="#FFC6DD" ${L2}/><path d="M17 23l13 11" ${L2}/><path d="M24 42h18" ${L2}/>`,
 scissors:`<circle cx="14" cy="34" r="7" fill="#FFC6DD" ${L2}/><circle cx="34" cy="34" r="7" fill="#FFC6DD" ${L2}/><path d="M19 29L34 6M29 29L14 6" ${L2}/><circle cx="24" cy="22" r="2" fill="#5A3E4B"/>`,
 arrowL:`<path d="M30 8L12 24l18 16v-9h8V17h-8z" fill="#FF9EC4" ${L2}/>`,
 arrowR:`<path d="M18 8l18 16-18 16v-9h-8V17h8z" fill="#8CC8F0" ${L2}/>`,
 arrowU:`<path d="M8 30L24 12l16 18h-9v8H17v-8z" fill="#FFD86B" ${L2}/>`,
 arrowD:`<path d="M8 18l16 18 16-18h-9v-8H17v8z" fill="#8FDCC0" ${L2}/>`,
 box:`<rect x="7" y="18" width="34" height="24" rx="4" fill="#FFD6E7" ${L2}/><rect x="4" y="12" width="40" height="9" rx="3" fill="#FF9EC4" ${L2}/><path d="M24 12v30" stroke="#FFD86B" stroke-width="5"/><path d="M21.5 12v30M26.5 12v30" fill="none" stroke="#5A3E4B" stroke-width="1.5"/>`,
 bag:`<path d="M12 18h24l3 24H9z" fill="#C9EFE0" ${L2}/><path d="M17 18v-3a7 7 0 0 1 14 0v3" fill="none" ${L2}/><rect x="18" y="26" width="12" height="8" rx="3" fill="#FFD86B" ${L2}/>`,
 paper:`<path d="M11 5h20l8 8v30H11z" fill="#fff" ${L2}/><path d="M31 5v8h8" fill="#EDE3E8" ${L2}/><path d="M16 21h16M16 28h16M16 35h10" stroke="#C9B6BF" stroke-width="3" stroke-linecap="round"/><text x="34" y="44" font-size="13" font-weight="900" fill="#E0567F" text-anchor="middle">100</text>`,
 capsule:`<circle cx="24" cy="25" r="17" fill="#fff" ${L2}/><path d="M7 25a17 17 0 0 1 34 0z" fill="#FF9EC4" ${L2}/><circle cx="17" cy="16" r="3" fill="#fff" opacity=".8"/>`,
 sparkle:`<path d="M24 4l4.5 14.5L43 24l-14.5 5.5L24 44l-4.5-14.5L5 24l14.5-5.5z" fill="#FFD86B" ${L2}/>`,
 paw:`<ellipse cx="24" cy="32" rx="10" ry="8" fill="#E2B48C" ${L2}/><g fill="#E2B48C" ${L2}><circle cx="11" cy="20" r="4.5"/><circle cx="19" cy="12" r="4.5"/><circle cx="29" cy="12" r="4.5"/><circle cx="37" cy="20" r="4.5"/></g>`,
 mail:`<rect x="5" y="11" width="38" height="27" rx="5" fill="#fff" ${L2}/><path d="M6 13l18 14 18-14" fill="none" ${L2}/><path d="M24 23c-2-3-6-2-5 1l5 4 5-4c1-3-3-4-5-1z" fill="#FF9EC4"/>`,
 speaker:`<path d="M7 18h8l12-10v32l-12-10H7z" fill="#8CC8F0" ${L2}/><path d="M33 17a9 9 0 0 1 0 14M38 12a16 16 0 0 1 0 24" fill="none" ${L2}/>`,
 medal:`<path d="M15 3h8l3 13h-8zM33 3h-8l-3 13h8z" fill="#FF9EC4" ${L2}/><circle cx="24" cy="30" r="13" fill="#FFD86B" ${L2}/><path d="M24 23l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z" fill="#fff"/>`,
 clock:`<circle cx="24" cy="26" r="17" fill="#fff" ${L2}/><path d="M24 16v10l7 5" fill="none" ${L2}/><path d="M9 10l5-4M39 10l-5-4" ${L2}/>`,
 undo:`<path d="M17 10L7 20l10 10" fill="none" ${L2}/><path d="M8 20h18a10 10 0 0 1 0 20h-8" fill="none" ${L2}/>`,
 cloud:`<path d="M14 37a9 9 0 0 1-1-18 12 12 0 0 1 23 3 7.5 7.5 0 0 1-1 15z" fill="#BBE1F8" ${L2}/>`,
 phone:`<rect x="14" y="5" width="20" height="38" rx="5" fill="#fff" ${L2}/><circle cx="24" cy="37" r="2" fill="#5A3E4B"/>`,
 alert:`<path d="M24 6L44 41H4z" fill="#FFD86B" ${L2}/><path d="M24 18v11" ${L2}/><circle cx="24" cy="35" r="2" fill="#5A3E4B"/>`,
 gear:`<path d="M24 5l3.5 5.5 6.3-1.4 1.1 6.4 5.6 3.2-3 5.3 3 5.3-5.6 3.2-1.1 6.4-6.3-1.4L24 43l-3.5-5.5-6.3 1.4-1.1-6.4-5.6-3.2 3-5.3-3-5.3 5.6-3.2 1.1-6.4 6.3 1.4z" fill="#C9B3F5" ${L2}/><circle cx="24" cy="24" r="6" fill="#fff" ${L2}/>`,
 pen:`<path d="M10 37l3-10 20-20 7 7-20 20z" fill="#FFD86B" ${L2}/><path d="M28 12l7 7M10 37l10-3" fill="none" ${L2}/><path d="M6 44h22" stroke="#C9B6BF" stroke-width="3" stroke-linecap="round"/>`,
 check:`<circle cx="24" cy="24" r="18" fill="#8FDCC0" ${L2}/><path d="M15 24l6 6 12-13" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`,
 cart:`<path d="M4 9h6l6 21h21l4-15H13" fill="none" ${L2}/><path d="M13 15h28l-4 15H16z" fill="#FFE38F" ${L2}/><circle cx="19" cy="38" r="3.5" fill="#fff" ${L2}/><circle cx="34" cy="38" r="3.5" fill="#fff" ${L2}/>`,
 camera:`<rect x="5" y="14" width="38" height="26" rx="6" fill="#C9EFE0" ${L2}/><path d="M17 14l3-5h8l3 5" fill="#fff" ${L2}/><circle cx="24" cy="27" r="8" fill="#fff" ${L2}/><circle cx="24" cy="27" r="3" fill="#8CC8F0"/>`,
 eye:`<path d="M4 24c6-10 13-14 20-14s14 4 20 14c-6 10-13 14-20 14S10 34 4 24z" fill="#fff" ${L2}/><circle cx="24" cy="24" r="7" fill="#8CC8F0" ${L2}/><circle cx="24" cy="24" r="2.5" fill="#5A3E4B"/>`,
 go:`<path d="M8 24h28M24 12l12 12-12 12" fill="none" stroke="#F27BA6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
 party:`<path d="M8 42L18 14l16 16z" fill="#FFD86B" ${L2}/><path d="M28 10c3-3 7-2 8 1M36 19c3-2 6 0 6 3M33 5l1-3M42 13l3-1" fill="none" stroke="#FF9EC4" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="30" r="2" fill="#FF9EC4"/><circle cx="16" cy="38" r="2" fill="#8CC8F0"/>`,
 backspace:`<path d="M16 10h26v28H16L5 24z" fill="#fff" ${L2}/><path d="M23 18l12 12M35 18L23 30" ${L2}/>`,
 rainbow:`<path d="M5 37a19 19 0 0 1 38 0" fill="none" stroke="#FF9EC4" stroke-width="5"/><path d="M11 37a13 13 0 0 1 26 0" fill="none" stroke="#FFD86B" stroke-width="5"/><path d="M17 37a7 7 0 0 1 14 0" fill="none" stroke="#8CC8F0" stroke-width="5"/>`,
 bee:`<ellipse cx="18" cy="13" rx="8" ry="6" fill="#E3F2FD" ${L2}/><ellipse cx="30" cy="13" rx="8" ry="6" fill="#E3F2FD" ${L2}/><ellipse cx="24" cy="28" rx="15" ry="11" fill="#FFD86B" ${L2}/><path d="M19 18v20M27 18v20" stroke="#5A3E4B" stroke-width="4"/><circle cx="36" cy="25" r="2" fill="#5A3E4B"/><path d="M8 28l-5 2" ${L2}/>`,
 butterfly:`<path d="M24 24C18 8 4 8 6 20c2 8 12 6 18 4zM24 24c6-16 20-16 18-4-2 8-12 6-18 4zM24 24c-6 4-14 12-8 16 4 2 8-6 8-16zM24 24c6 4 14 12 8 16-4 2-8-6-8-16z" fill="#C9B3F5" ${L2}/><path d="M24 14v22" ${L2}/>`,
 retry:`<path d="M38 24a14 14 0 1 1-5-10.7" fill="none" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round"/><path d="M34 6l1 9-9 1" fill="none" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
 search:`<circle cx="20" cy="20" r="12" fill="#fff" ${L2}/><path d="M29 29l12 12" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round"/>`,
 unlock:`<rect x="11" y="21" width="26" height="20" rx="4" fill="#C9EFE0" ${L2}/><path d="M16 21v-6a8 8 0 0 1 15-4" fill="none" ${L2}/><circle cx="24" cy="30" r="3" fill="#5A3E4B"/>`,
 petHead:`<path d="M12 18L9 3l12 8zM36 18l3-15-12 8z" fill="#F2A773" ${L2}/><circle cx="24" cy="26" r="16" fill="#F9BF8C" ${L2}/><ellipse cx="24" cy="32" rx="9" ry="6.5" fill="#FFF3E2"/><ellipse cx="18" cy="23" rx="2" ry="2.8" fill="#5A3E4B"/><ellipse cx="30" cy="23" rx="2" ry="2.8" fill="#5A3E4B"/><ellipse cx="24" cy="29" rx="2.4" ry="1.8" fill="#5A3E4B"/>`,
 noBee:`<g transform="translate(4 4) scale(.84)"><ellipse cx="18" cy="13" rx="8" ry="6" fill="#E3F2FD" ${L2}/><ellipse cx="30" cy="13" rx="8" ry="6" fill="#E3F2FD" ${L2}/><ellipse cx="24" cy="28" rx="15" ry="11" fill="#FFD86B" ${L2}/><path d="M19 18v20M27 18v20" stroke="#5A3E4B" stroke-width="4"/></g><path d="M8 8l32 32M40 8L8 40" stroke="#E53935" stroke-width="6" stroke-linecap="round"/>`,
 slowPud:`<ellipse cx="24" cy="32" rx="20" ry="10" fill="#B79AEB" stroke="#7E57C2" stroke-width="3"/><path d="M14 22c0-7 6-11 12-9 5 2 6 8 2 10-3 2-6-1-4-3" fill="none" stroke="#5A3E4B" stroke-width="3" stroke-linecap="round"/><path d="M10 26h22" stroke="#5A3E4B" stroke-width="3" stroke-linecap="round"/><circle cx="34" cy="16" r="2" fill="#5A3E4B"/><path d="M34 16l-2-6M36 17l3-5" stroke="#5A3E4B" stroke-width="2" stroke-linecap="round"/>`,
 hall:`<path d="M5 22L24 9l19 13v19H5z" fill="#E5D9FB" ${L2}/><rect x="19" y="28" width="10" height="13" fill="#FFD86B" ${L2}/><path d="M24 9V2" ${L2}/><path d="M24 2h9l-2 3 2 3h-9" fill="#FF9EC4" ${L2}/>`,
};
const ii=k=>`<span class="ii" aria-hidden="true">${icon(k)}</span>`;
const icon=(k,cls='')=>`<svg viewBox="0 0 48 48" aria-hidden="true"${cls?` class="${cls}"`:''}>${IC[k]}</svg>`;
function wordPic(p){const m=/^([cnbaji]):(.*)$/.exec(p);if(!m)return `<span class="emo">${p}</span>`;const[,k,v]=m,ol='stroke="#5A3E4B" stroke-width="3"';
  if(k==='c')return `<svg viewBox="0 0 48 48"><path d="M24 5c9 0 17 6 18 15 1 11-7 22-18 22C12 42 4 33 6 21 7 12 15 5 24 5z" fill="${v}" ${ol}/><ellipse cx="17" cy="15" rx="5" ry="3" fill="#fff" opacity=".55"/></svg>`;
  if(k==='n'){const n=+v,pts=[];for(let i=0;i<n;i++){const r=n<=5?0:Math.floor(i/5),c=n<=5?i:i%5,cols=n<=5?n:5;pts.push([34-(cols-1)*6+c*12,n<=5?24:16+r*16])}
    return `<svg viewBox="0 0 68 48"><rect x="3" y="3" width="62" height="42" rx="8" fill="#fff" ${ol}/>${pts.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4.6" fill="#FF8FB8" stroke="#5A3E4B" stroke-width="2"/>`).join('')}</svg>`}
  if(k==='b'){const at={eye:[46,52],ear:[30,22],nose:[60,66],mouth:[60,80]}[v];
    return `<svg viewBox="0 0 120 110"><path d="M30 40L22 8l26 18zM90 40l8-32-26 18z" fill="#F2A773" ${ol}/><circle cx="60" cy="60" r="36" fill="#F9BF8C" ${ol}/><ellipse cx="60" cy="74" rx="20" ry="14" fill="#FFF3E2"/>
      <ellipse cx="46" cy="52" rx="4" ry="6" fill="#5A3E4B"/><ellipse cx="74" cy="52" rx="4" ry="6" fill="#5A3E4B"/><ellipse cx="60" cy="66" rx="5" ry="3.6" fill="#5A3E4B"/><path d="M52 79q8 7 16 0" fill="none" ${ol} stroke-linecap="round"/>
      <circle cx="${at[0]}" cy="${at[1]}" r="14" fill="none" stroke="#E0567F" stroke-width="5" stroke-dasharray="7 5"/></svg>`}
  const pup=(st,m,x,y,w)=>pupSVG(st,m).replace('<svg viewBox="0 0 120 110" aria-hidden="true">',`<svg x="${x}" y="${y}" width="${w}" height="${w*110/120}" viewBox="0 0 120 110">`);
  if(k==='a'){ // 動作：會動的圖，一看就懂
    const P={run:`<g class="wa-run">${pup(1,{pose:'stand'},20,10,96)}</g><path class="wa-lines" d="M4 46h20M0 60h18M6 74h16" stroke="#8CC8F0" stroke-width="5" stroke-linecap="round"/>`,
      jump:`<ellipse class="wa-shadow" cx="70" cy="112" rx="26" ry="4" fill="#5A3E4B" opacity=".18"/><g class="wa-jump">${pup(1,{pose:'stand',happy:true},22,10,96)}</g>`,
      sit:`<g>${pup(1,{pose:'sit'},26,6,92)}</g><path d="M118 30v40" stroke="#F27BA6" stroke-width="5" stroke-linecap="round"/><path d="M110 62l8 10 8-10" fill="none" stroke="#F27BA6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
      sleep:`<g>${pup(1,{pose:'sleep'},14,14,100)}</g><text class="wa-z" x="104" y="40" font-size="24" font-weight="900" fill="#9B6BD6">Z</text><text class="wa-z2" x="118" y="24" font-size="16" font-weight="900" fill="#9B6BD6">z</text>`,
      eat:`<g class="wa-eat">${pup(1,{pose:'eat'},10,10,100)}</g><g transform="translate(92 80) scale(.8)">${IC.kibble}</g>`,
      sing:`<g class="wa-sing">${pup(1,{pose:'stand',happy:true},12,10,100)}</g><g class="wa-note"><path d="M116 22v24M116 22l14-4v22" fill="none" stroke="#9B6BD6" stroke-width="4" stroke-linecap="round"/><circle cx="112" cy="46" r="5" fill="#9B6BD6"/><circle cx="126" cy="40" r="5" fill="#9B6BD6"/></g>`}[v];
    return `<svg viewBox="0 0 140 118" class="wanim">${P}</svg>`}
  if(k==='j'){ // 形容詞：大小用「兩個比較、圈出答案」，心情用大表情
    if(v==='big'||v==='small'){const hiBig=v==='big';
      return `<svg viewBox="0 0 140 118">${pup(1,{},4,14,84)}${pup(1,{},94,70,42)}<circle cx="${hiBig?46:115}" cy="${hiBig?60:90}" r="${hiBig?52:30}" fill="none" stroke="#E0567F" stroke-width="5" stroke-dasharray="9 6" class="wa-ring"/></svg>`}
    if(v==='happy')return `<svg viewBox="0 0 120 110" class="wanim"><circle cx="60" cy="55" r="46" fill="#FFD86B" stroke="#5A3E4B" stroke-width="4"/><path d="M36 46q8-10 16 0M68 46q8-10 16 0" fill="none" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round"/><path d="M34 64q26 30 52 0z" fill="#E0567F" stroke="#5A3E4B" stroke-width="4" stroke-linejoin="round"/><ellipse cx="30" cy="62" rx="7" ry="4" fill="#FF9EC4"/><ellipse cx="90" cy="62" rx="7" ry="4" fill="#FF9EC4"/></svg>`;
    return `<svg viewBox="0 0 120 110" class="wanim"><circle cx="60" cy="55" r="46" fill="#BBE1F8" stroke="#5A3E4B" stroke-width="4"/><path d="M36 42l14 6M84 42l-14 6" stroke="#5A3E4B" stroke-width="4" stroke-linecap="round"/><ellipse cx="44" cy="54" rx="4" ry="5" fill="#5A3E4B"/><ellipse cx="76" cy="54" rx="4" ry="5" fill="#5A3E4B"/><path d="M42 82q18-16 36 0" fill="none" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round"/><path class="wa-tear" d="M78 62c-3 5-5 8-5 11a5 5 0 0 0 10 0c0-3-2-6-5-11z" fill="#4A90E2" stroke="#5A3E4B" stroke-width="2"/></svg>`}
  return `<svg viewBox="0 0 48 48">${IC[v]||''}</svg>`}
const ART={
 house:{ic:'home',rg:['<rect x="0" y="128" width="200" height="32"/>','<rect x="124" y="36" width="14" height="26"/>','<rect x="50" y="70" width="100" height="58"/>','<path d="M38 74L100 28l62 46z"/>','<rect x="88" y="94" width="24" height="34" rx="3"/>','<rect x="60" y="84" width="20" height="20" rx="2"/>','<rect x="120" y="84" width="20" height="20" rx="2"/>','<circle cx="172" cy="28" r="16"/>']},
 flower:{ic:'flower',rg:['<path d="M70 128h60l-8 28H78z"/>','<rect x="96" y="70" width="8" height="58"/>','<ellipse cx="80" cy="104" rx="16" ry="8" transform="rotate(-30 80 104)"/>','<ellipse cx="120" cy="96" rx="16" ry="8" transform="rotate(30 120 96)"/>',
   ...[0,72,144,216,288].map(a=>`<circle cx="${(100+24*Math.cos((a-90)*Math.PI/180)).toFixed(1)}" cy="${(52+24*Math.sin((a-90)*Math.PI/180)).toFixed(1)}" r="17"/>`),'<circle cx="100" cy="52" r="14"/>']},
 fish:{ic:'fishI',rg:['<path d="M0 140c30-12 50 12 100 0s70-12 100 0v20H0z"/>','<path d="M140 70l40-26v52z"/>','<ellipse cx="96" cy="70" rx="56" ry="36"/>','<path d="M80 36c10-14 30-14 40 0z"/>','<path d="M70 70c10 8 10 18 0 26"/>','<circle cx="60" cy="62" r="9"/>','<circle cx="34" cy="30" r="8"/>','<circle cx="22" cy="12" r="5"/>']}};
IC.fishI=`<ellipse cx="22" cy="24" rx="15" ry="10" fill="#8CC8F0" ${L2}/><path d="M36 24l9-7v14z" fill="#8CC8F0" ${L2}/><circle cx="15" cy="22" r="2" fill="#5A3E4B"/>`;
const NOTE_COL={L:'#FF9EC4',U:'#FFD86B',D:'#8FDCC0',R:'#8CC8F0'},LANE_EN={L:'LEFT',U:'UP',D:'DOWN',R:'RIGHT'};
const ARR={L:'M29 13l-9 9 9 9',U:'M15 26l9-9 9 9',D:'M15 17l9 9 9-9',R:'M19 13l9 9-9 9'};
const noteSVG=a=>`<svg viewBox="0 0 48 48"><circle cx="24" cy="25" r="20" fill="${NOTE_COL[a]}" stroke="#5A3E4B" stroke-width="3"/><path d="${ARR[a]}" fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17" cy="36" r="2" fill="#5A3E4B"/><circle cx="31" cy="36" r="2" fill="#5A3E4B"/><path d="M21 39q3 2.5 6 0" fill="none" stroke="#5A3E4B" stroke-width="2" stroke-linecap="round"/><ellipse cx="12" cy="37" rx="3.5" ry="2" fill="#fff" opacity=".6"/><ellipse cx="36" cy="37" rx="3.5" ry="2" fill="#fff" opacity=".6"/></svg>`;
const K='stroke="#5A3E4B" stroke-width="3" stroke-linejoin="round"';
const SK={ // 角色與道具（x,y 是腳底中心）
 girl:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><path d="M-22 0l6-40h32l6 40z" fill="#FF9EC4" ${K}/><path d="M-12-40l12 10 12-10z" fill="#fff" ${K}/><circle cx="0" cy="-54" r="14" fill="#FFE0C7" ${K}/><path d="M-15-54c0-14 8-20 15-20s15 6 15 20c-4-6-8-9-15-9s-11 3-15 9z" fill="#2D2228"/><circle cx="12" cy="-68" r="5" fill="#FFD86B" ${K}/><circle cx="-5" cy="-54" r="2" fill="#2D2228"/><circle cx="5" cy="-54" r="2" fill="#2D2228"/><path d="M-4-48q4 3 8 0" fill="none" stroke="#E0567F" stroke-width="2" stroke-linecap="round"/><ellipse cx="-9" cy="-50" rx="3" ry="2" fill="#FF9EC4"/><ellipse cx="9" cy="-50" rx="3" ry="2" fill="#FF9EC4"/></g></g>`,
 queen:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><path d="M-24 0l8-44h32l8 44z" fill="#9B6BD6" ${K}/><circle cx="0" cy="-58" r="14" fill="#FFE0C7" ${K}/><path d="M-12-70l4-12 4 8 4-10 4 10 4-8 4 12z" fill="#FFD23F" ${K}/><path d="M-8-60l5 2M8-60l-5 2" stroke="#2D2228" stroke-width="2.5" stroke-linecap="round"/><path d="M-5-50h10" stroke="#2D2228" stroke-width="2.5" stroke-linecap="round"/></g></g>`,
 mirror:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><ellipse cx="0" cy="-40" rx="26" ry="36" fill="#FFD23F" ${K}/><ellipse cx="0" cy="-40" rx="18" ry="28" fill="#DDF3FF" ${K} class="an-glow"/><circle cx="-6" cy="-44" r="2.5" fill="#5A3E4B"/><circle cx="6" cy="-44" r="2.5" fill="#5A3E4B"/><path d="M-5-34q5 4 10 0" fill="none" stroke="#5A3E4B" stroke-width="2"/></g></g>`,
 tree:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||'an-sway'}"><rect x="-6" y="-30" width="12" height="30" fill="#B07A52" ${K}/><circle cx="0" cy="-48" r="24" fill="#8FDCC0" ${K}/><circle cx="-12" cy="-40" r="14" fill="#8FDCC0" ${K}/><circle cx="12" cy="-40" r="14" fill="#8FDCC0" ${K}/></g></g>`,
 house:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><rect x="-36" y="-44" width="72" height="44" fill="#FFE9C7" ${K}/><path d="M-44-44L0-76l44 32z" fill="#E85A5A" ${K}/><rect x="-9" y="-24" width="18" height="24" rx="3" fill="#B07A52" ${K}/><rect x="16" y="-34" width="12" height="12" fill="#BBE1F8" ${K}/><rect x="-28" y="-34" width="12" height="12" fill="#BBE1F8" ${K}/></g></g>`,
 dwarf:(x,y,col,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><rect x="-9" y="-20" width="18" height="20" rx="5" fill="${col}" ${K}/><circle cx="0" cy="-28" r="9" fill="#FFE0C7" ${K}/><path d="M-9-31L0-50l9 19z" fill="${col}" ${K}/><path d="M-7-26q7 12 14 0" fill="#fff" ${K}/><circle cx="-3" cy="-30" r="1.5" fill="#2D2228"/><circle cx="3" cy="-30" r="1.5" fill="#2D2228"/></g></g>`,
 oldw:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><path d="M-22 0l8-48h28l8 48z" fill="#7A6E7E" ${K}/><path d="M-14-46c0-20 28-20 28 0z" fill="#5E5462" ${K}/><circle cx="0" cy="-44" r="10" fill="#F2D7C2" ${K}/><circle cx="-3" cy="-45" r="1.5" fill="#2D2228"/><circle cx="3" cy="-45" r="1.5" fill="#2D2228"/></g></g>`,
 apple:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><circle cx="0" cy="0" r="12" fill="#E53935" ${K}/><path d="M0-12q2-8 8-8" fill="none" stroke="#5A3E4B" stroke-width="3"/><path d="M2-14q8-6 12 0q-6 4-12 0z" fill="#5CC46E"/><ellipse cx="-4" cy="-4" rx="3" ry="2" fill="#fff" opacity=".6"/></g></g>`,
 prince:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><rect x="-16" y="-44" width="32" height="44" rx="6" fill="#4A90E2" ${K}/><circle cx="0" cy="-56" r="13" fill="#FFE0C7" ${K}/><path d="M-13-58c0-12 26-12 26 0-6-4-20-4-26 0z" fill="#9A6A4F"/><path d="M-10-68l4-9 6 6 6-6 4 9z" fill="#FFD23F" ${K}/><circle cx="-5" cy="-56" r="2" fill="#2D2228"/><circle cx="5" cy="-56" r="2" fill="#2D2228"/><path d="M-4-50q4 3 8 0" fill="none" stroke="#5A3E4B" stroke-width="2"/></g></g>`,
 goat:(x,y,s,c)=>`<g transform="translate(${x} ${y}) scale(${s||1})"><g class="${c||''}"><ellipse cx="0" cy="-16" rx="20" ry="13" fill="#fff" ${K}/><path d="M-12-6v8M-4-6v8M6-6v8M14-6v8" stroke="#5A3E4B" stroke-width="4" stroke-linecap="round"/><circle cx="20" cy="-30" r="10" fill="#fff" ${K}/><path d="M15-38l-4-8M24-38l3-8" stroke="#C9B6BF" stroke-width="4" stroke-linecap="round"/><path d="M11-32l-6-2M29-32l6-2" stroke="#5A3E4B" stroke-width="3" stroke-linecap="round"/><circle cx="17" cy="-30" r="1.6" fill="#2D2228"/><circle cx="23" cy="-30" r="1.6" fill="#2D2228"/><ellipse cx="20" cy="-25" rx="3" ry="2" fill="#FF9EC4"/></g></g>`,
 wolf:(x,y,c,paw)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><ellipse cx="0" cy="-22" rx="24" ry="16" fill="#9E9AA8" ${K}/><path d="M-14-8v8M14-8v8" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round"/><circle cx="-22" cy="-38" r="13" fill="#9E9AA8" ${K}/><path d="M-30-48l-2-12 9 7M-16-49l4-11 3 11" fill="#9E9AA8" ${K}/><path d="M-34-36h-12l12 6z" fill="#9E9AA8" ${K}/><circle cx="-46" cy="-35" r="2.5" fill="#2D2228"/><circle cx="-24" cy="-41" r="2" fill="#2D2228"/><path d="M24-26q14-4 12-16" fill="none" stroke="#9E9AA8" stroke-width="7" stroke-linecap="round"/>${paw?`<ellipse cx="-30" cy="-2" rx="8" ry="5" fill="${paw}" ${K}/>`:''}</g></g>`,
 door:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><rect x="-26" y="-80" width="52" height="80" rx="4" fill="#B07A52" ${K}/><circle cx="16" cy="-40" r="4" fill="#FFD23F" ${K}/><rect x="-18" y="-70" width="36" height="24" rx="3" fill="#C98B5F" ${K}/></g></g>`,
 clock:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><rect x="-16" y="-90" width="32" height="90" rx="6" fill="#C98B5F" ${K}/><circle cx="0" cy="-70" r="12" fill="#fff" ${K}/><path d="M0-70v-7M0-70l5 3" stroke="#5A3E4B" stroke-width="2.5" stroke-linecap="round"/><rect x="-9" y="-48" width="18" height="36" rx="4" fill="#8A5A44" ${K}/></g></g>`,
 heart:(x,y,c)=>`<g transform="translate(${x} ${y})"><path class="${c||'an-float'}" d="M0 8C-10 1-14-4-14-9a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 5-4 10-14 17z" fill="#FF9EC4" ${K}/></g>`,
 zz:(x,y)=>`<text x="${x}" y="${y}" class="an-float" font-size="22" font-weight="900" fill="#9B6BD6">Zz</text>`,
 // 通用人物：o={body:'dress'|'tail'|'pants',col,hair,style:'long'|'short'|'bun'|'none',hood,crown,hat,wand,wings,beard,nose,s,skin,c}
 person:(x,y,o={})=>{const sk=o.skin||'#FFE0C7',col=o.col||'#FF9EC4',hair=o.hair||'#5A3E2B',sc=o.s||1;
   const body=o.body==='tail'?`<path d="M-11-40h22c0 16-3 26-7 32l14 10c-8 4-14 2-18-2-4 4-10 6-18 2l14-10c-4-6-7-16-7-32z" fill="${col}" ${K}/><path d="M-6-30q6 4 12 0M-5-20q5 4 10 0" fill="none" stroke="#fff" stroke-width="2.5" opacity=".7"/><path d="M-11-42q5-6 10 0q5-6 10 0" fill="#FF9EC4" ${K}/>`
     :o.body==='pants'?`<rect x="-14" y="-40" width="28" height="24" rx="6" fill="${col}" ${K}/><path d="M-8-16v16M8-16v16" stroke="${o.legs||'#4A6FA5'}" stroke-width="9" stroke-linecap="round"/>`
     :`<path d="M-20 0l6-40h28l6 40z" fill="${col}" ${K}/>`;
   const hairB=o.style==='none'?'':o.style==='short'?`<path d="M-14-56c0-12 8-16 14-16s14 4 14 16c-4-5-9-7-14-7s-10 2-14 7z" fill="${hair}"/>`
     :o.style==='bun'?`<path d="M-14-56c0-12 8-16 14-16s14 4 14 16c-4-5-9-7-14-7s-10 2-14 7z" fill="${hair}"/><circle cx="0" cy="-74" r="7" fill="${hair}"/>`
     :`<path d="M-15-54c0-14 8-20 15-20s15 6 15 20v14h-5v-16c-3-3-6-4-10-4s-7 1-10 4v16h-5z" fill="${hair}"/>`;
   const hood=o.hood?`<path d="M-18-48c0-22 36-22 36 0v10h-6v-10c0-12-24-12-24 0v10h-6z" fill="${o.hood}" ${K}/>`:'';
   const nose=o.nose?`<path d="M0-55l${o.nose} 2-${o.nose} 2z" fill="#E2B48C" stroke="#5A3E4B" stroke-width="2" stroke-linejoin="round"/>`:'';
   return `<g transform="translate(${x} ${y}) scale(${sc})"><g class="${o.c||''}">${o.wings?`<ellipse cx="-20" cy="-44" rx="12" ry="18" fill="#E3F2FD" ${K} opacity=".9"/><ellipse cx="20" cy="-44" rx="12" ry="18" fill="#E3F2FD" ${K} opacity=".9"/>`:''}${body}
     <circle cx="0" cy="-56" r="14" fill="${sk}" ${K}/>${hairB}${hood}<circle cx="-5" cy="-56" r="2" fill="#2D2228"/><circle cx="5" cy="-56" r="2" fill="#2D2228"/><path d="M-4-49q4 3 8 0" fill="none" stroke="#C2385F" stroke-width="2" stroke-linecap="round"/>${nose}
     ${o.beard?`<path d="M-12-52q12 22 24 0q-12 6-24 0z" fill="#fff" ${K}/>`:''}${o.crown?`<path d="M-10-70l4-9 6 6 6-6 4 9z" fill="#FFD23F" ${K}/>`:''}${o.hat?`<path d="M-16-66h32l-6-6h-20z" fill="${o.hat}" ${K}/><rect x="-10" y="-82" width="20" height="12" rx="3" fill="${o.hat}" ${K}/>`:''}
     ${o.wand?`<path d="M18-40l14-22" stroke="#5A3E4B" stroke-width="3"/><path d="M32-70l2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" fill="#FFD86B" stroke="#5A3E4B" stroke-width="1.5"/>`:''}</g></g>`},
 basket:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><path d="M-14-6h28l-4 14h-20z" fill="#D9A066" ${K}/><path d="M-10-6c0-12 20-12 20 0" fill="none" stroke="#5A3E4B" stroke-width="3"/><circle cx="-4" cy="-8" r="4" fill="#E53935"/></g></g>`,
 bed:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><rect x="-50" y="-30" width="100" height="30" rx="6" fill="#BBE1F8" ${K}/><rect x="-56" y="-50" width="12" height="50" rx="4" fill="#B07A52" ${K}/><rect x="44" y="-40" width="12" height="40" rx="4" fill="#B07A52" ${K}/></g></g>`,
 castle:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><rect x="-50" y="-70" width="100" height="70" fill="#EDE3F7" ${K}/><rect x="-62" y="-96" width="26" height="96" fill="#E0D2F2" ${K}/><rect x="36" y="-96" width="26" height="96" fill="#E0D2F2" ${K}/><path d="M-66-96l17-22 17 22zM32-96l17-22 17 22z" fill="#9B6BD6" ${K}/><path d="M-12 0v-26a12 12 0 0 1 24 0V0z" fill="#B07A52" ${K}/><rect x="-30" y="-56" width="14" height="16" rx="7" fill="#FFD86B" ${K}/><rect x="16" y="-56" width="14" height="16" rx="7" fill="#FFD86B" ${K}/></g></g>`,
 coach:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><ellipse cx="0" cy="-34" rx="38" ry="30" fill="#FF9A3C" ${K}/><path d="M0-64q-4-10 6-12" fill="none" stroke="#5CC46E" stroke-width="4"/><path d="M-20-58v48M20-58v48" stroke="#E07B1F" stroke-width="3"/><rect x="-12" y="-46" width="24" height="18" rx="8" fill="#FFF3B0" ${K}/><circle cx="-24" cy="-4" r="10" fill="#FFD23F" ${K}/><circle cx="24" cy="-4" r="10" fill="#FFD23F" ${K}/></g></g>`,
 slipper:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||'an-glow'}"><path d="M-18 0h30c6 0 8-6 4-10l-10-6c-4-2-8 2-10 6h-8c-4 0-6 4-6 10z" fill="#DDF3FF" ${K}/><path d="M12 0v6" stroke="#5A3E4B" stroke-width="3"/></g></g>`,
 spindle:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><path d="M0 0v-50" stroke="#B07A52" stroke-width="5" stroke-linecap="round"/><ellipse cx="0" cy="-28" rx="9" ry="14" fill="#C9B3F5" ${K}/><path d="M0-50l0-12" stroke="#5A3E4B" stroke-width="2"/></g></g>`,
 thorns:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||'an-sway'}"><path d="M-40 0c10-30 20-40 40-50 20 10 30 20 40 50" fill="none" stroke="#3E7A4A" stroke-width="6" stroke-linecap="round"/><path d="M-26-22l-8-4M-8-40l-6-8M14-40l6-8M28-22l8-4" stroke="#3E7A4A" stroke-width="4" stroke-linecap="round"/></g></g>`,
 rose:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||'an-pop'}"><circle cx="0" cy="0" r="9" fill="#E85A8A" ${K}/><path d="M-4 0a4 4 0 1 1 8 0" fill="none" stroke="#5A3E4B" stroke-width="2"/></g></g>`,
 broom:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><path d="M0-60V-12" stroke="#B07A52" stroke-width="5" stroke-linecap="round"/><path d="M-12 0l6-14h12l6 14z" fill="#FFD23F" ${K}/></g></g>`,
 ship:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||'an-bob'}"><path d="M-46-14h92l-14 18h-64z" fill="#B07A52" ${K}/><path d="M0-14v-56" stroke="#5A3E4B" stroke-width="4"/><path d="M2-68l34 40H2z" fill="#fff" ${K}/></g></g>`,
 wave:(y)=>`<path d="M0 ${y}q20-10 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0V200H0z" fill="#8CC8F0" opacity=".55"/>`,
 fish:(x,y,s,col,c)=>`<g transform="translate(${x} ${y}) scale(${s||1})"><g class="${c||'an-walk'}"><ellipse cx="0" cy="0" rx="20" ry="12" fill="${col||'#FFB86B'}" ${K}/><path d="M18 0l14-10v20z" fill="${col||'#FFB86B'}" ${K}/><circle cx="-10" cy="-3" r="2.4" fill="#2D2228"/></g></g>`,
 bigfish:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||'an-bob'}"><ellipse cx="0" cy="-40" rx="70" ry="38" fill="#6FA9D6" ${K}/><path d="M66-40l34-26v52z" fill="#6FA9D6" ${K}/><circle cx="-40" cy="-54" r="6" fill="#fff" ${K}/><circle cx="-40" cy="-54" r="2.5" fill="#2D2228"/><path d="M-70-34q20 12 40 0" fill="#5A3E4B" ${K}/></g></g>`,
 stars:(c)=>`<g class="an-glow">${[[40,30],[90,20],[150,34],[230,22],[280,40]].map(([x,y])=>`<path transform="translate(${x} ${y})" d="M0-7l2 5 5 .5-4 3 1 5-4-3-4 3 1-5-4-3 5-.5z" fill="#FFD86B"/>`).join('')}</g>`,
 moonTop:()=>`<circle cx="270" cy="40" r="18" fill="#FFF3B0" ${K}/>`,
 // 動物（面向左、腳底在 0）：k=pig bear fox lion mouse donkey dog cat hare tortoise duck ugly swan hen rooster chick goose
 animal:(x,y,k,sc,c)=>{const E=(cx,cy)=>`<circle cx="${cx}" cy="${cy}" r="2.2" fill="#2D2228"/>`;let g='';
   const quad=(col,head,extra,tail)=>`${tail||''}<path d="M-12-6v8M-4-6v8M6-6v8M14-6v8" stroke="#5A3E4B" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="0" cy="-16" rx="20" ry="13" fill="${col}" ${K}/>${head||`<circle cx="-20" cy="-30" r="11" fill="${col}" ${K}/>`}${E(-24,-32)}${extra||''}`;
   const bird=(col,extra,neck)=>`<path d="M-4 0v-6M4 0v-6" stroke="#FF9A3C" stroke-width="3" stroke-linecap="round"/><ellipse cx="0" cy="-14" rx="14" ry="10" fill="${col}" ${K}/>${neck||''}<circle cx="-12" cy="${neck?-40:-26}" r="8" fill="${col}" ${K}/><path d="M-19 ${neck?-41:-27}l-8 2 8 3z" fill="#FF9A3C" stroke="#5A3E4B" stroke-width="1.5"/>${E(-14,neck?-42:-28)}<path d="M-2-16q8-8 14 2" fill="none" stroke="#5A3E4B" stroke-width="2.5"/>${extra||''}`;
   switch(k){
    case 'pig':g=quad('#FFB3C7','',`<path d="M-27-40l3-8 5 6M-17-40l4-7 3 7" fill="#FFB3C7" ${K}/><ellipse cx="-31" cy="-28" rx="5" ry="4" fill="#FF8FB8" ${K}/><circle cx="-32" cy="-28" r="1" fill="#5A3E4B"/><circle cx="-30" cy="-28" r="1" fill="#5A3E4B"/>`,`<path d="M20-18q8-2 6 4q-4 2-2-4" fill="none" stroke="#5A3E4B" stroke-width="2.5"/>`);break;
    case 'bear':g=quad('#A0704F','',`<circle cx="-28" cy="-39" r="4.5" fill="#A0704F" ${K}/><circle cx="-13" cy="-40" r="4.5" fill="#A0704F" ${K}/><ellipse cx="-27" cy="-26" rx="6" ry="4.5" fill="#D9B08C"/><circle cx="-31" cy="-27" r="2" fill="#2D2228"/>`);break;
    case 'fox':g=quad('#FF9A3C','',`<path d="M-28-38l-2-10 8 6M-15-39l3-10 3 9" fill="#FF9A3C" ${K}/><path d="M-31-28l-8 2 8 4z" fill="#fff" ${K}/>`,`<path d="M18-20q22-6 16-24q-6 10-18 14" fill="#FF9A3C" ${K}/><path d="M30-40l4-4 2 6z" fill="#fff"/>`);break;
    case 'lion':g=quad('#F2C14E',`<circle cx="-20" cy="-30" r="17" fill="#C98B3F" ${K}/><circle cx="-20" cy="-30" r="11" fill="#F2C14E" ${K}/>`,`<ellipse cx="-27" cy="-26" rx="5" ry="3.5" fill="#FFF3E2"/>`,`<path d="M20-18q14-2 12-16" fill="none" stroke="#F2C14E" stroke-width="4"/><circle cx="32" cy="-36" r="4" fill="#C98B3F"/>`);break;
    case 'mouse':g=`<path d="M-6 0v-4M6 0v-4" stroke="#5A3E4B" stroke-width="3" stroke-linecap="round"/><ellipse cx="0" cy="-9" rx="12" ry="8" fill="#B8B0BF" ${K}/><circle cx="-12" cy="-14" r="6" fill="#B8B0BF" ${K}/><circle cx="-13" cy="-21" r="5" fill="#FFC6DD" ${K}/>${E(-15,-15)}<path d="M12-8q12 2 14-8" fill="none" stroke="#5A3E4B" stroke-width="2"/>`;break;
    case 'donkey':g=quad('#A9A2B3',`<ellipse cx="-24" cy="-32" rx="9" ry="13" transform="rotate(30 -24 -32)" fill="#A9A2B3" ${K}/>`,`<path d="M-22-44l-2-14 5 12M-16-42l2-14 2 13" fill="#A9A2B3" ${K}/><ellipse cx="-31" cy="-24" rx="5" ry="4" fill="#D7D0DE"/>`);break;
    case 'cow':g=quad('#FFFFFF','',`<path d="M-27-40l-5-6M-14-40l4-6" stroke="#C9B6BF" stroke-width="3" stroke-linecap="round"/><ellipse cx="-29" cy="-25" rx="7" ry="5" fill="#FFC6DD" ${K}/><ellipse cx="-4" cy="-20" rx="6" ry="4" fill="#3A3A3A"/><ellipse cx="10" cy="-12" rx="5" ry="4" fill="#3A3A3A"/>`,`<path d="M20-18q6 2 4 12" fill="none" stroke="#5A3E4B" stroke-width="2.5"/>`);break;
    case 'dog':g=quad('#D9A066','',`<path d="M-14-38q8 2 6 12" fill="#B07A52" ${K}/><circle cx="-31" cy="-29" r="2.5" fill="#2D2228"/>`,`<path d="M20-20q6-10 2-16" fill="none" stroke="#5A3E4B" stroke-width="3"/>`);break;
    case 'cat':g=quad('#F2A773','',`<path d="M-28-38l-2-9 7 5M-15-39l3-9 3 8" fill="#F2A773" ${K}/><path d="M-34-28h-8M-34-26l-7 3" stroke="#5A3E4B" stroke-width="1.5"/>`,`<path d="M20-20q10-4 8-18" fill="none" stroke="#F2A773" stroke-width="4" stroke-linecap="round"/>`);break;
    case 'hare':g=`<path d="M-8 0v-6M10 0q4-6-2-8" stroke="#5A3E4B" stroke-width="4" stroke-linecap="round" fill="none"/><ellipse cx="0" cy="-14" rx="16" ry="11" fill="#D9B99B" ${K}/><circle cx="16" cy="-16" r="5" fill="#fff" ${K}/><circle cx="-16" cy="-26" r="9" fill="#D9B99B" ${K}/><ellipse cx="-18" cy="-44" rx="3.5" ry="12" fill="#D9B99B" ${K}/><ellipse cx="-11" cy="-44" rx="3.5" ry="12" fill="#D9B99B" ${K}/>${E(-20,-28)}`;break;
    case 'tortoise':g=`<path d="M-14 0v-4M10 0v-4" stroke="#5A3E4B" stroke-width="5" stroke-linecap="round"/><circle cx="-22" cy="-10" r="6" fill="#9ED37A" ${K}/>${E(-25,-11)}<path d="M-18-4a18 16 0 0 1 36 0z" fill="#5CC46E" ${K}/><path d="M-8-4l3-10h10l3 10M0-14v-4" fill="none" stroke="#3E7A4A" stroke-width="2"/>`;break;
    case 'duck':g=bird('#FFD23F');break;
    case 'chick':g=`<g transform="scale(.7)">${bird('#FFE38F')}</g>`;break;
    case 'ugly':g=bird('#9E9AA8');break;
    case 'swan':g=bird('#fff','',`<path d="M-6-20q-10-6-6-20" fill="none" stroke="#5A3E4B" stroke-width="9" stroke-linecap="round"/><path d="M-6-20q-10-6-6-20" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`);break;
    case 'goose':g=bird('#fff','',`<path d="M-8-18q-4-8-4-16" fill="none" stroke="#5A3E4B" stroke-width="8" stroke-linecap="round"/><path d="M-8-18q-4-8-4-16" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>`);break;
    case 'hen':g=bird('#C0582D',`<path d="M-15-34q2-5 5-1q2-5 5 0" fill="#E53935" ${K}/>`);break;
    case 'rooster':g=bird('#fff',`<path d="M-16-34q2-6 5-1q2-6 5 0q2-5 4 1" fill="#E53935" ${K}/><path d="M12-16q10-14 6-22M12-14q14-6 14-18" fill="none" stroke="#5CC46E" stroke-width="4" stroke-linecap="round"/><path d="M12-12q12 0 16-10" fill="none" stroke="#4A90E2" stroke-width="4" stroke-linecap="round"/>`);break}
   return `<g transform="translate(${x} ${y}) scale(${sc||1})"><g class="${c||''}">${g}</g></g>`},
 hut:(x,y,kind,c)=>{const col={straw:'#F2D27A',sticks:'#C98B5F',brick:'#C8553D'}[kind],tex={straw:'<path d="M-30-30l4 26M-20-34l2 30M-8-36l1 32M4-36l-1 32M16-34l-2 30M28-30l-4 26" stroke="#C9A03E" stroke-width="2"/>',sticks:'<path d="M-30-10h60M-30-22h60M-30-34h60" stroke="#8A5A44" stroke-width="3"/>',brick:'<path d="M-30-10h60M-30-20h60M-30-30h60M-15-10v-10M5-10v-10M-5-20v-10M15-20v-10" stroke="#F3D5C8" stroke-width="2"/>'}[kind];
   return `<g transform="translate(${x} ${y})"><g class="${c||''}"><rect x="-32" y="-40" width="64" height="40" fill="${col}" ${K}/>${tex}<path d="M-40-40L0-70l40 30z" fill="${kind==='brick'?'#8A5A44':col}" ${K}/><rect x="-8" y="-22" width="16" height="22" rx="3" fill="#8A5A44" ${K}/></g></g>`},
 bowl:(x,y,sc)=>`<g transform="translate(${x} ${y}) scale(${sc||1})"><path d="M-14-10h28a14 10 0 0 1-28 0z" fill="#8CC8F0" ${K}/><ellipse cx="0" cy="-10" rx="14" ry="3" fill="#FFE38F"/></g>`,
 chair:(x,y,sc,broken)=>`<g transform="translate(${x} ${y}) scale(${sc||1})${broken?' rotate(25)':''}"><rect x="-10" y="-40" width="5" height="40" fill="#B07A52" ${K}/><rect x="-10" y="-20" width="22" height="6" fill="#C98B5F" ${K}/><path d="M10-14v14" stroke="#5A3E4B" stroke-width="4"/></g>`,
 beanstalk:(x,c)=>`<g class="${c||'an-sway'}"><path d="M${x} 200C${x-20} 150 ${x+20} 110 ${x} 60S${x+10} 10 ${x} -10" fill="none" stroke="#3E7A4A" stroke-width="10" stroke-linecap="round"/>${[160,120,80,40].map((yy,i)=>`<ellipse cx="${x+(i%2?14:-14)}" cy="${yy}" rx="12" ry="6" fill="#5CC46E" ${K}/>`).join('')}</g>`,
 cloud:(x,y,sc)=>`<g transform="translate(${x} ${y}) scale(${sc||1})"><path d="M-30 0a14 14 0 0 1 6-24 20 20 0 0 1 36-4 14 14 0 0 1 18 28z" fill="#fff" ${K}/></g>`,
 goldegg:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||'an-glow'}"><ellipse cx="0" cy="-9" rx="7" ry="9" fill="#FFD23F" ${K}/><ellipse cx="-2" cy="-12" rx="2" ry="3" fill="#fff" opacity=".7"/></g></g>`,
 ginger:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||''}"><path d="M-6-44a10 10 0 1 1 12 0h10a5 5 0 0 1 0 10h-8v8l8 22a5 5 0 0 1-9 4l-7-16-7 16a5 5 0 0 1-9-4l8-22v-8h-8a5 5 0 0 1 0-10z" fill="#C98B5F" ${K}/><circle cx="-3" cy="-51" r="1.8" fill="#fff"/><circle cx="3" cy="-51" r="1.8" fill="#fff"/><path d="M-4-46q4 3 8 0" fill="none" stroke="#fff" stroke-width="2"/><circle cx="0" cy="-34" r="2" fill="#E53935"/><circle cx="0" cy="-26" r="2" fill="#5CC46E"/></g></g>`,
 river:()=>`<path d="M0 150q80-12 160 0t160 0V200H0z" fill="#8CC8F0" ${K}/>`,
 net:(x,y)=>`<g transform="translate(${x} ${y})" opacity=".85"><path d="M-40 0L-30-50L30-50L40 0" fill="none" stroke="#8A5A44" stroke-width="3"/>${[-30,-15,0,15,30].map(v=>`<path d="M${v} 0L${v*0.75}-50" stroke="#8A5A44" stroke-width="2"/>`).join('')}${[-10,-25,-40].map(v=>`<path d="M-38 ${v}H38" stroke="#8A5A44" stroke-width="2"/>`).join('')}</g>`,
 wheat:(x,y)=>`<g transform="translate(${x} ${y})" class="an-sway"><path d="M0 0v-40" stroke="#C9A03E" stroke-width="3"/>${[-34,-27,-20].map(v=>`<ellipse cx="-4" cy="${v}" rx="3" ry="5" fill="#F2D27A" ${K}/><ellipse cx="4" cy="${v}" rx="3" ry="5" fill="#F2D27A" ${K}/>`).join('')}</g>`,
 bread:(x,y,c)=>`<g transform="translate(${x} ${y})"><g class="${c||'an-bob'}"><path d="M-22 0v-14a22 14 0 0 1 44 0v14z" fill="#E2A65F" ${K}/><path d="M-8-20l-4 8M4-22l-4 8M14-18l-4 8" stroke="#B87A3A" stroke-width="2.5"/></g></g>`,
 notes:(x,y)=>`<g transform="translate(${x} ${y})"><g class="an-float"><path d="M0 0v20M0 0l12-4v18" fill="none" stroke="#9B6BD6" stroke-width="3.5"/><circle cx="-4" cy="20" r="4.5" fill="#9B6BD6"/><circle cx="8" cy="14" r="4.5" fill="#9B6BD6"/></g></g>`,
};
const SCN=(bg,ground,inner)=>`<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet"><rect width="320" height="200" fill="${bg}"/><rect y="150" width="320" height="50" fill="${ground}"/>${inner}</svg>`;
const CASTLE='#F3EEFF',FOREST='#E3F5E8',GRASS='#BFE8B2',FLOOR='#E8D3BE';
const FRIENDS={cloud:{name:'雲寶',svg:()=>`<svg viewBox="0 0 120 112">${$('helper').querySelector('svg').innerHTML}</svg>`},
 hedge:{name:'刺刺',svg:()=>`<svg viewBox="0 0 120 112"><path d="M20 80c-6-20 4-46 30-54l-4-10 12 6 6-12 6 12 12-6-2 12c18 8 26 28 22 52z" fill="#8FDCC0" stroke="#5A3E4B" stroke-width="4" stroke-linejoin="round"/><ellipse cx="62" cy="80" rx="34" ry="26" fill="#FFF3E2" stroke="#5A3E4B" stroke-width="4"/><ellipse cx="50" cy="76" rx="3.5" ry="5" fill="#5A3E4B"/><ellipse cx="74" cy="76" rx="3.5" ry="5" fill="#5A3E4B"/><circle cx="62" cy="86" r="4" fill="#5A3E4B"/><ellipse cx="42" cy="88" rx="6" ry="3.5" fill="#FF9EC4" opacity=".8"/><ellipse cx="82" cy="88" rx="6" ry="3.5" fill="#FF9EC4" opacity=".8"/><ellipse cx="46" cy="106" rx="9" ry="5" fill="#E2B48C" stroke="#5A3E4B" stroke-width="3.5"/><ellipse cx="78" cy="106" rx="9" ry="5" fill="#E2B48C" stroke="#5A3E4B" stroke-width="3.5"/></svg>`},
 chick:{name:'小黃',svg:()=>`<svg viewBox="0 0 120 112"><path d="M58 14c-4-8 4-12 6-4 2-8 10-4 6 4" fill="#FFD86B" stroke="#5A3E4B" stroke-width="3.5" stroke-linejoin="round"/><ellipse cx="60" cy="62" rx="38" ry="40" fill="#FFE38F" stroke="#5A3E4B" stroke-width="4"/><path d="M22 66c-10 2-14 12-8 16 6 2 10-4 12-8M98 66c10 2 14 12 8 16-6 2-10-4-12-8" fill="#FFD86B" stroke="#5A3E4B" stroke-width="3.5"/><ellipse cx="48" cy="54" rx="4" ry="5.5" fill="#5A3E4B"/><ellipse cx="72" cy="54" rx="4" ry="5.5" fill="#5A3E4B"/><path d="M54 64l6 8 6-8z" fill="#FFB86B" stroke="#5A3E4B" stroke-width="3" stroke-linejoin="round"/><ellipse cx="38" cy="68" rx="6" ry="3.5" fill="#FF9EC4" opacity=".8"/><ellipse cx="82" cy="68" rx="6" ry="3.5" fill="#FF9EC4" opacity=".8"/><path d="M48 102v8M72 102v8" stroke="#FFB86B" stroke-width="5" stroke-linecap="round"/></svg>`}};
const DOGART={version:'V1',css:String.raw`.wa-run{animation:waRun .5s ease-in-out infinite alternate}@keyframes waRun{from{transform:translateX(-6px)}to{transform:translateX(8px)}}
.wa-lines{animation:waLines .5s linear infinite}@keyframes waLines{from{transform:translateX(6px);opacity:.3}to{transform:translateX(-6px);opacity:1}}
.wa-jump{animation:waJump .8s cubic-bezier(.3,0,.5,1) infinite}@keyframes waJump{0%,100%{transform:translateY(8px) scale(1.04,.94)}45%{transform:translateY(-14px)}}
.wa-shadow{transform-origin:70px 112px;animation:waSh .8s infinite}@keyframes waSh{45%{transform:scale(.6)}}
.wa-z{animation:waZ 1.6s ease-in-out infinite}.wa-z2{animation:waZ 1.6s .5s ease-in-out infinite}@keyframes waZ{0%{opacity:0;transform:translate(0,8px)}50%{opacity:1}100%{opacity:0;transform:translate(6px,-8px)}}
.wa-eat{transform-origin:50px 90px;animation:waEat .45s ease-in-out infinite alternate}@keyframes waEat{to{transform:rotate(6deg)}}
.wa-sing{transform-origin:60px 110px;animation:waEat .6s ease-in-out infinite alternate}.wa-note{animation:waZ 1.4s ease-in-out infinite}
.wa-tear{animation:waTear 1.4s ease-in infinite}@keyframes waTear{0%{transform:translateY(-6px);opacity:0}30%{opacity:1}100%{transform:translateY(14px);opacity:0}}
.wa-ring{animation:needpulse 1s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.eng-card .emo{font-size:min(16vw,84px);line-height:1}
.an-bob{animation:anBob 1.6s ease-in-out infinite}@keyframes anBob{50%{transform:translateY(-6px)}}
.an-sway{transform-box:fill-box;transform-origin:50% 100%;animation:anSway 2.4s ease-in-out infinite}@keyframes anSway{50%{transform:rotate(3deg)}}
.an-pop{transform-box:fill-box;transform-origin:center;animation:anPop .6s cubic-bezier(.3,1.6,.5,1) both}@keyframes anPop{from{transform:scale(0)}}
.an-shake{transform-box:fill-box;transform-origin:center;animation:anShake .5s ease-in-out infinite}@keyframes anShake{25%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}}
.an-glow{animation:anGlow 1.2s ease-in-out infinite}@keyframes anGlow{50%{opacity:.4}}
.an-walk{animation:anWalk 3s ease-in-out infinite alternate}@keyframes anWalk{from{transform:translateX(-14px)}to{transform:translateX(14px)}}
.an-float{animation:waZ 2s ease-in-out infinite}
.an-knock{transform-box:fill-box;transform-origin:center;animation:anKnock .9s ease-in-out infinite}@keyframes anKnock{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-5px)}}`};
(function(){try{const st=document.createElement('style');st.id='dogart-css';st.textContent=DOGART.css;document.head.appendChild(st)}catch(e){}})();
window.DOGART=DOGART;
