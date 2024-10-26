(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),l=a.n(r),i=(a(18),a(2));const c=i.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`,s=i.a.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`,d=i.a.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-right: 10px;
`,p=i.a.button`
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3367d6;
  }
`,h=i.a.div`
  width: 100%;
  margin-bottom: 20px;
`,m=i.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
`,x=i.a.button`
  background-color: transparent;
  border: none;
  color: #ff4d4d;
  font-size: 20px;
  cursor: pointer;
`,g=i.a.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`,u=i.a.svg`
  width: 100%;
  height: 100%;
  transform: ${e=>`rotate(${e.rotation}deg)`};
  transition: transform 5s cubic-bezier(0.25, 0.1, 0.25, 1);
`,f=i.a.path`
  fill: ${e=>e.color};
  stroke: white;
  stroke-width: 2;
`,b=i.a.text`
  font-size: ${e=>e.fontSize}px;
  font-weight: bold;
  fill: black;
`,E=i.a.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid black;
`,w=i.a.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #3367d6;
  }
`,k=Object(i.a)(w)`
  background-color: white;
  color: black;
  border: 1px solid #e0e0e0;
  &:hover {
    background-color: #f5f5f5;
  }
`,F=i.a.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`,v=i.a.div`
  margin-top: 20px;
  font-size: 18px;
  font-style: italic;
  text-align: center;
  opacity: ${e=>e.show?1:0};
  transition: opacity 0.5s ease-in-out;
`,y=["#FFB3BA","#BAFFC9","#BAE1FF","#FFFFBA","#FFD8B3","#E0BBE4","#D4F0F0","#FFC6FF"],M=["\u30c1\u30e3\u30f3\u30b9\u306f\u6e96\u5099\u3057\u3066\u3044\u308b\u4eba\u306b\u3060\u3051\u8a2a\u308c\u308b\u3002 - \u30eb\u30a4\u30fb\u30d1\u30b9\u30c4\u30fc\u30eb","\u4eba\u751f\u306b\u5931\u6557\u304c\u306a\u3044\u3068\u3001\u4eba\u751f\u3092\u5931\u6557\u3059\u308b\u3002 - \u658e\u85e4\u8302\u592a","\u6c7a\u65ad\u77ac\u9593\u3092\u5f85\u3063\u3066\u3044\u3066\u306f\u3001\u6c38\u9060\u306b\u6c7a\u65ad\u3067\u304d\u306a\u3044\u3002 - \u5742\u672c\u9f8d\u99ac","\u8ff7\u308f\u305a\u884c\u3051\u3088\u3001\u884c\u3051\u3070\u308f\u304b\u308b\u3055\u3002 - \u5742\u672c\u9f8d\u99ac","\u6c7a\u65ad\u529b\u3068\u306f\u3001\u9069\u5207\u306a\u6642\u671f\u306b\u9069\u5207\u306a\u884c\u52d5\u3092\u3068\u308b\u80fd\u529b\u3067\u3042\u308b\u3002 - \u30c7\u30a3\u30b9\u30ec\u30fc\u30ea","\u6c7a\u65ad\u3053\u305d\u304c\u3001\u3059\u3079\u3066\u306e\u884c\u52d5\u306e\u57fa\u672c\u3067\u3042\u308b\u3002 - \u30da\u30c8\u30ed\u30cb\u30a6\u30b9","\u6c7a\u65ad\u3092\u4e0b\u3059\u306e\u306b\u5b8c\u74a7\u306a\u6642\u671f\u3068\u3044\u3046\u3082\u306e\u306f\u306a\u3044\u3002 - \u30ed\u30a4\u30fb\u30c7\u30a3\u30ba\u30cb\u30fc","\u6c7a\u65ad\u529b\u306f\u6210\u529f\u3078\u306e\u7b2c\u4e00\u6b69\u3067\u3042\u308b\u3002 - \u30d1\u30d6\u30ed\u30fb\u30d4\u30ab\u30bd","\u6c7a\u65ad\u3092\u6050\u308c\u308b\u306a\u3002\u9593\u9055\u3044\u3092\u6050\u308c\u3088\u3002 - \u677e\u4e0b\u5e78\u4e4b\u52a9","\u6c7a\u65ad\u306f\u904b\u547d\u306e\u5206\u304b\u308c\u9053\u3067\u3042\u308b\u3002 - \u30cf\u30fc\u30f4\u30a7\u30a4\u30fb\u30de\u30c3\u30b1\u30a4","\u6c7a\u65ad\u306f\u672a\u6765\u3078\u306e\u6249\u3092\u958b\u304f\u9375\u3067\u3042\u308b\u3002 - \u30de\u30c3\u30af\u30b9\u30fb\u30eb\u30b1\u30fc\u30c9","\u6c7a\u65ad\u4eba\u751f\u306e\u5c90\u8def\u306b\u7acb\u3064\u6642\u306b\u3053\u305d\u91cd\u8981\u3060\u3002 - \u30b3\u30f3\u30d5\u30ad\u30a6\u30b9","\u6c7a\u65ad\u3092\u5148\u5ef6\u3070\u306b\u3059\u308b\u3053\u3068\u306f\u3001\u6700\u60aa\u306e\u6c7a\u65ad\u3067\u3042\u308b\u3002 - \u30b8\u30e7\u30f3\u30fbF\u30fb\u30b1\u30cd\u30c7\u30a3","\u6c7a\u65ad\u306f\u3001\u3042\u306a\u305f\u306e\u4eba\u751f\u3092\u5909\u3048\u308b\u529b\u3092\u6301\u3063\u3066\u3044\u308b\u3002 - \u30c8\u30cb\u30fc\u30fb\u30ed\u30d3\u30f3\u30b9","\u6c7a\u65ad\u306f\u3001\u672a\u6765\u3092\u5275\u9020\u3059\u308b\u884c\u70ba\u3067\u3042\u308b\u3002 - \u30d4\u30fc\u30bf\u30fc\u30fb\u30c9\u30e9\u30c3\u30ab\u30fc","\u6c7a\u65ad\u306b\u306f\u52c7\u6c17\u304c\u5fc5\u8981\u3060\u304c\u3001\u305d\u306e\u52c7\u6c17\u304c\u4eba\u751f\u3092\u5909\u3048\u308b\u3002 - \u30ce\u30fc\u30de\u30f3\u30fb\u30d3\u30f3\u30bb\u30f3\u30c8\u30fb\u30d4\u30fc\u30eb","\u6c7a\u65ad\u306e\u77ac\u9593\u3053\u305d\u3001\u3042\u306a\u305f\u306e\u771f\u4fa1\u304c\u554f\u308f\u308c\u308b\u6642\u3060\u3002 - \u30b8\u30b0\u30fb\u30b0\u30e9\u30fc","\u6c7a\u65ad\u306f\u3001\u53ef\u80fd\u6027\u306e\u6249\u3092\u958b\u304f\u3002 - \u30aa\u30d7\u30e9\u30fb\u30a6\u30a3\u30f3\u30d5\u30ea\u30fc","\u6c7a\u65ad\u306f\u3001\u3042\u306a\u305f\u306e\u904b\u547d\u3092\u5de6\u53f3\u3059\u308b\u3002 - \u30a2\u30f3\u30bd\u30cb\u30fc\u30fb\u30ed\u30d3\u30f3\u30b9","\u6c7a\u65ad\u3053\u305d\u304c\u3001\u6210\u529f\u3078\u306e\u8fd1\u9053\u3067\u3042\u308b\u3002 - \u30ca\u30dd\u30ec\u30aa\u30f3\u30fb\u30d2\u30eb"],$=Object(i.a)(w)`
  background-color: #ff4d4d;
  margin-bottom: 30px; // 30pxに増やしてスペースを確保
  &:hover {
    background-color: #ff3333;
  }
`,z=i.a.p`
  color: #666;
  font-size: 14px;
  margin-top: 10px;
`,B=i.a.h1`
  font-size: 24px;
  font-weight: bold;
  color: #4285f4;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;var C=()=>{const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)(""),[l,i]=Object(n.useState)(0),[C,P]=Object(n.useState)(""),[S,j]=Object(n.useState)(!1),[O,A]=Object(n.useState)(""),I=(e,t)=>{const a=360/t,n=e*a,o=(e+1)*a,r=L(50,50,50,n),l=L(50,50,50,o),i=o-n<=180?"0":"1";return`M 50 50 L ${r.x} ${r.y} A 50 50 0 ${i} 1 ${l.x} ${l.y} Z`},L=(e,t,a,n)=>{const o=(n-90)*Math.PI/180;return{x:e+a*Math.cos(o),y:t+a*Math.sin(o)}},D=e=>e<=4?7:e<=6?6:5,T=(e,t)=>{const a=360/t,n=(e*a+(e+1)*a)/2;return`M${50+20*Math.cos((n-90)*Math.PI/180)},${50+20*Math.sin((n-90)*Math.PI/180)} L${50+45*Math.cos((n-90)*Math.PI/180)},${50+45*Math.sin((n-90)*Math.PI/180)}`};return o.a.createElement(c,null,o.a.createElement(B,null,"\u307e\u3088\u3063\u305f\u3068\u304d\u306e\u30a2\u30ec"),o.a.createElement(s,null,o.a.createElement(d,{type:"text",value:a,onChange:e=>r(e.target.value),placeholder:"\u65b0\u3057\u3044\u9078\u629e\u80a2\u3092\u5165\u529b",maxLength:8}),o.a.createElement(p,{onClick:()=>{""!==a.trim()&&e.length<8&&(t([...e,a.trim().slice(0,8)]),r(""))},disabled:e.length>=8},"\u8ffd\u52a0")),o.a.createElement(z,null,"\u203b\u9078\u629e\u306f8\u6587\u5b57\u307e\u3067\u3067\u3059"),o.a.createElement(h,null,e.map((a,n)=>o.a.createElement(m,{key:n},a,o.a.createElement(x,{onClick:()=>(a=>{t(e.filter((e,t)=>t!==a))})(n)},"\ud83d\uddd1\ufe0f")))),o.a.createElement($,{onClick:()=>{t([])}},"\u5168\u3066\u306e\u9078\u629e\u80a2\u3092\u30af\u30ea\u30a2"),o.a.createElement(g,null,o.a.createElement(u,{rotation:l,viewBox:"0 0 100 100"},o.a.createElement("circle",{cx:"50",cy:"50",r:"50",fill:"white"}),o.a.createElement("defs",null,e.map((t,a)=>o.a.createElement("path",{key:`path-${a}`,id:`textPath-${a}`,d:T(a,e.length)}))),e.map((t,a)=>{const n=(e=>e.length<=3?[e]:e.length<=6?[e.slice(0,3),e.slice(3)]:[e.slice(0,3),e.slice(3,6),e.slice(6)])(t);return o.a.createElement("g",{key:a},o.a.createElement(f,{d:I(a,e.length),color:y[a%y.length]}),o.a.createElement(b,{fontSize:D(e.length)},o.a.createElement("textPath",{href:`#textPath-${a}`,startOffset:"50%",textAnchor:"middle"},n[0],n[1]&&o.a.createElement("tspan",{x:"0",dy:"1.2em"},n[1]),n[2]&&o.a.createElement("tspan",{x:"0",dy:"1.2em"},n[2]))))})),o.a.createElement(E,null)),o.a.createElement("div",null,o.a.createElement(w,{onClick:()=>{j(!1);const t=Math.floor(360*Math.random())+720+l;i(t),setTimeout(()=>{const a=Math.floor((360-t%360)/(360/e.length));P(e[a]),A(M[Math.floor(Math.random()*M.length)]),j(!0)},5e3)}},"\u904b\u547d\u3092\u56de\u3059"),o.a.createElement(k,{onClick:()=>{i(l+360),P(""),j(!1)}},"\u21ba \u30ea\u30bb\u30c3\u30c8")),o.a.createElement(F,null,C&&`\u7d50\u679c: ${C}`),o.a.createElement(v,{show:S},O))};var P=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then(t=>{let{getCLS:a,getFID:n,getFCP:o,getLCP:r,getTTFB:l}=t;a(e),n(e),o(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null))),P()}},[[10,1,2]]]);
//# sourceMappingURL=main.093679a0.chunk.js.map