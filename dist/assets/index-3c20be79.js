(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function Lr(){}function gc(s){return s()}function Ro(){return Object.create(null)}function Vr(s){s.forEach(gc)}function _c(s){return typeof s=="function"}function Qu(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}let $r;function Io(s,t){return $r||($r=document.createElement("a")),$r.href=t,s===$r.href}function th(s){return Object.keys(s).length===0}function Fo(s){return s??""}function Ot(s,t){s.appendChild(t)}function xc(s,t,e){s.insertBefore(t,e||null)}function lo(s){s.parentNode&&s.parentNode.removeChild(s)}function eh(s,t){for(let e=0;e<s.length;e+=1)s[e]&&s[e].d(t)}function Me(s){return document.createElement(s)}function wr(s){return document.createTextNode(s)}function Cn(){return wr(" ")}function Oa(s,t,e,n){return s.addEventListener(t,e,n),()=>s.removeEventListener(t,e,n)}function Yt(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function nh(s){return Array.from(s.childNodes)}function Ms(s,t){t=""+t,s.wholeText!==t&&(s.data=t)}let Dr;function Tr(s){Dr=s}function ih(){if(!Dr)throw new Error("Function called outside component initialization");return Dr}function rh(s){ih().$$.on_mount.push(s)}const Ui=[],Oo=[],Ss=[],No=[],sh=Promise.resolve();let Na=!1;function ah(){Na||(Na=!0,sh.then(vc))}function za(s){Ss.push(s)}const Ys=new Set;let bi=0;function vc(){if(bi!==0)return;const s=Dr;do{try{for(;bi<Ui.length;){const t=Ui[bi];bi++,Tr(t),oh(t.$$)}}catch(t){throw Ui.length=0,bi=0,t}for(Tr(null),Ui.length=0,bi=0;Oo.length;)Oo.pop()();for(let t=0;t<Ss.length;t+=1){const e=Ss[t];Ys.has(e)||(Ys.add(e),e())}Ss.length=0}while(Ui.length);for(;No.length;)No.pop()();Na=!1,Ys.clear(),Tr(s)}function oh(s){if(s.fragment!==null){s.update(),Vr(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(za)}}const lh=new Set;function ch(s,t){s&&s.i&&(lh.delete(s),s.i(t))}function uh(s,t,e,n){const{fragment:i,after_update:r}=s.$$;i&&i.m(t,e),n||za(()=>{const o=s.$$.on_mount.map(gc).filter(_c);s.$$.on_destroy?s.$$.on_destroy.push(...o):Vr(o),s.$$.on_mount=[]}),r.forEach(za)}function hh(s,t){const e=s.$$;e.fragment!==null&&(Vr(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function fh(s,t){s.$$.dirty[0]===-1&&(Ui.push(s),ah(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function dh(s,t,e,n,i,r,o,a=[-1]){const c=Dr;Tr(s);const l=s.$$={fragment:null,ctx:[],props:r,update:Lr,not_equal:i,bound:Ro(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ro(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=e?e(s,t.props||{},(h,d,...m)=>{const g=m.length?m[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&fh(s,h)),d}):[],l.update(),u=!0,Vr(l.before_update),l.fragment=n?n(l.ctx):!1,t.target){if(t.hydrate){const h=nh(t.target);l.fragment&&l.fragment.l(h),h.forEach(lo)}else l.fragment&&l.fragment.c();t.intro&&ch(s.$$.fragment),uh(s,t.target,t.anchor,t.customElement),vc()}Tr(c)}class ph{$destroy(){hh(this,1),this.$destroy=Lr}$on(t,e){if(!_c(e))return Lr;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!th(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Pn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function yc(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Be={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zi={duration:.5,overwrite:!1,delay:0},co,de,Jt,$e=1e8,Ft=1/$e,Ua=Math.PI*2,mh=Ua/4,gh=0,Mc=Math.sqrt,_h=Math.cos,xh=Math.sin,oe=function(t){return typeof t=="string"},qt=function(t){return typeof t=="function"},Fn=function(t){return typeof t=="number"},uo=function(t){return typeof t>"u"},vn=function(t){return typeof t=="object"},Ee=function(t){return t!==!1},Sc=function(){return typeof window<"u"},Zr=function(t){return qt(t)||oe(t)},bc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pe=Array.isArray,ka=/(?:-?\.?\d|\.)+/gi,wc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,js=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Tc=/[+-]=-?[.\d]+/,Ec=/[^,'"\[\]\s]+/gi,vh=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Xe,Ba,ho,Ge={},As={},Ac,Cc=function(t){return(As=xi(t,Ge))&&Ve},fo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Cs=function(t,e){return!e&&console.warn(t)},Pc=function(t,e){return t&&(Ge[t]=e)&&As&&(As[t]=e)||Ge},Rr=function(){return 0},yh={suppressEvents:!0,isStart:!0,kill:!1},bs={suppressEvents:!0,kill:!1},Mh={suppressEvents:!0},po={},Xn=[],Ga={},Lc,ze={},$s={},zo=30,ws=[],mo="",go=function(t){var e=t[0],n,i;if(vn(e)||qt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ws.length;i--&&!ws[i].targetTest(e););n=ws[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Jc(t[i],n)))||t.splice(i,1);return t},pi=function(t){return t._gsap||go(Ze(t))[0]._gsap},Dc=function(t,e,n){return(n=t[e])&&qt(n)?t[e]():uo(n)&&t.getAttribute&&t.getAttribute(e)||n},Ae=function(t,e){return(t=t.split(",")).forEach(e)||t},jt=function(t){return Math.round(t*1e5)/1e5||0},le=function(t){return Math.round(t*1e7)/1e7||0},Hi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Sh=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ps=function(){var t=Xn.length,e=Xn.slice(0),n,i;for(Ga={},Xn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Rc=function(t,e,n,i){Xn.length&&!de&&Ps(),t.render(e,n,i||de&&e<0&&(t._initted||t._startAt)),Xn.length&&!de&&Ps()},Ic=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ec).length<2?e:oe(t)?t.trim():t},Fc=function(t){return t},Je=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},bh=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},xi=function(t,e){for(var n in e)t[n]=e[n];return t},Uo=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=vn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ls=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Er=function(t){var e=t.parent||Vt,n=t.keyframes?bh(pe(t.keyframes)):Je;if(Ee(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},wh=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Oc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ns=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},$n=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},mi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Th=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Va=function(t,e,n,i){return t._startAt&&(de?t._startAt.revert(bs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Eh=function s(t){return!t||t._ts&&s(t.parent)},ko=function(t){return t._repeat?Ki(t._tTime,t=t.duration()+t._rDelay)*t:0},Ki=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ds=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zs=function(t){return t._end=le(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ft)||0))},Us=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zs(t),n._dirty||mi(n,t)),t},Nc=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Ds(t.rawTime(),e),(!e._dur||Wr(0,e.totalDuration(),n)-e._tTime>Ft)&&e.render(n,!0)),mi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ft}},mn=function(t,e,n,i){return e.parent&&$n(e),e._start=le((Fn(n)?n:n||t!==Vt?qe(t,n,e):t._time)+e._delay),e._end=le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Oc(t,e,"_first","_last",t._sort?"_start":0),Wa(e)||(t._recent=e),i||Nc(t,e),t._ts<0&&Us(t,t._tTime),t},zc=function(t,e){return(Ge.ScrollTrigger||fo("scrollTrigger",e))&&Ge.ScrollTrigger.create(e,t)},Uc=function(t,e,n,i,r){if(xo(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!de&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Lc!==ke.frame)return Xn.push(t),t._lazy=[r,i],1},Ah=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Wa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ch=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Ah(t)&&!(!t._initted&&Wa(t))||(t._ts<0||t._dp._ts<0)&&!Wa(t))?0:1,a=t._rDelay,c=0,l,u,h;if(a&&t._repeat&&(c=Wr(0,t._tDur,e),u=Ki(c,a),t._yoyo&&u&1&&(o=1-o),u!==Ki(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||de||i||t._zTime===Ft||!e&&t._zTime){if(!t._initted&&Uc(t,e,i,n,c))return;for(h=t._zTime,t._zTime=e||(n?Ft:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&Va(t,e,n,!0),t._onUpdate&&!n&&Ke(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Ke(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&$n(t,1),!n&&!de&&(Ke(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ph=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ji=function(t,e,n,i){var r=t._repeat,o=le(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:le(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Us(t,t._tTime=t._tDur*a),t.parent&&zs(t),n||mi(t.parent,t),t},Bo=function(t){return t instanceof Te?mi(t):Ji(t,t._dur)},Lh={_start:0,endTime:Rr,totalDuration:Rr},qe=function s(t,e,n){var i=t.labels,r=t._recent||Lh,o=t.duration()>=$e?r.endTime(!1):t._dur,a,c,l;return oe(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(pe(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},Ar=function(t,e,n){var i=Fn(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Ee(c.vars.inherit)&&c.parent;o.immediateRender=Ee(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Qt(e[0],o,e[r+1])},Jn=function(t,e){return t||t===0?e(t):e},Wr=function(t,e,n){return n<t?t:n>e?e:n},fe=function(t,e){return!oe(t)||!(e=vh.exec(t))?"":e[1]},Dh=function(t,e,n){return Jn(n,function(i){return Wr(t,e,i)})},Ha=[].slice,kc=function(t,e){return t&&vn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&vn(t[0]))&&!t.nodeType&&t!==Xe},Rh=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return oe(i)&&!e||kc(i,1)?(r=n).push.apply(r,Ze(i)):n.push(i)})||n},Ze=function(t,e,n){return Jt&&!e&&Jt.selector?Jt.selector(t):oe(t)&&!n&&(Ba||!Qi())?Ha.call((e||ho).querySelectorAll(t),0):pe(t)?Rh(t,n):kc(t)?Ha.call(t,0):t?[t]:[]},qa=function(t){return t=Ze(t)[0]||Cs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ze(e,n.querySelectorAll?n:n===t?Cs("Invalid scope")||ho.createElement("div"):t)}},Bc=function(t){return t.sort(function(){return .5-Math.random()})},Gc=function(t){if(qt(t))return t;var e=vn(t)?t:{each:t},n=gi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,u=i,h=i;return oe(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(d,m,g){var f=(g||e).length,p=o[f],x,M,_,v,S,E,C,y,b;if(!p){if(b=e.grid==="auto"?0:(e.grid||[1,$e])[1],!b){for(C=-$e;C<(C=g[b++].getBoundingClientRect().left)&&b<f;);b--}for(p=o[f]=[],x=c?Math.min(b,f)*u-.5:i%b,M=b===$e?0:c?f*h/b-.5:i/b|0,C=0,y=$e,E=0;E<f;E++)_=E%b-x,v=M-(E/b|0),p[E]=S=l?Math.abs(l==="y"?v:_):Mc(_*_+v*v),S>C&&(C=S),S<y&&(y=S);i==="random"&&Bc(p),p.max=C-y,p.min=y,p.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(b>f?f-1:l?l==="y"?f/b:b:Math.max(b,f/b))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=fe(e.amount||e.each)||0,n=n&&f<0?$c(n):n}return f=(p[d]-p.min)/p.max||0,le(p.b+(n?n(f):f)*p.v)+p.u}},Xa=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=le(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Fn(n)?0:fe(n))}},Vc=function(t,e){var n=pe(t),i,r;return!n&&vn(t)&&(i=n=t.radius||$e,t.values?(t=Ze(t.values),(r=!Fn(t[0]))&&(i*=i)):t=Xa(t.increment)),Jn(e,n?qt(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=$e,u=0,h=t.length,d,m;h--;)r?(d=t[h].x-a,m=t[h].y-c,d=d*d+m*m):d=Math.abs(t[h]-a),d<l&&(l=d,u=h);return u=!i||l<=i?t[u]:o,r||u===o||Fn(o)?u:u+fe(o)}:Xa(t))},Wc=function(t,e,n,i){return Jn(pe(t)?!e:n===!0?!!(n=0):!i,function(){return pe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ih=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Fh=function(t,e){return function(n){return t(parseFloat(n))+(e||fe(n))}},Oh=function(t,e,n){return qc(t,e,0,1,n)},Hc=function(t,e,n){return Jn(n,function(i){return t[~~e(i)]})},Nh=function s(t,e,n){var i=e-t;return pe(t)?Hc(t,s(0,t.length),e):Jn(n,function(r){return(i+(r-t)%i)%i+t})},zh=function s(t,e,n){var i=e-t,r=i*2;return pe(t)?Hc(t,s(0,t.length-1),e):Jn(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Ir=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Ec:ka),n+=t.substr(e,i-e)+Wc(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},qc=function(t,e,n,i,r){var o=e-t,a=i-n;return Jn(r,function(c){return n+((c-t)/o*a||0)})},Uh=function s(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var o=oe(t),a={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(pe(t)&&!pe(e)){for(u=[],h=t.length,d=h-2,l=1;l<h;l++)u.push(s(t[l-1],t[l]));h--,r=function(g){g*=h;var f=Math.min(d,~~g);return u[f](g-f)},n=e}else i||(t=xi(pe(t)?[]:{},t));if(!u){for(c in e)_o.call(a,t,c,"get",e[c]);r=function(g){return Mo(g,a)||(o?t.p:t)}}}return Jn(n,r)},Go=function(t,e,n){var i=t.labels,r=$e,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},Ke=function(t,e,n){var i=t.vars,r=i[e],o=Jt,a=t._ctx,c,l,u;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Xn.length&&Ps(),a&&(Jt=a),u=c?r.apply(l,c):r.call(l),Jt=o,u},xr=function(t){return $n(t),t.scrollTrigger&&t.scrollTrigger.kill(!!de),t.progress()<1&&Ke(t,"onInterrupt"),t},Vi,kh=function(t){t=!t.name&&t.default||t;var e=t.name,n=qt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Rr,render:Mo,add:_o,kill:ef,modifier:tf,rawVars:0},o={targetTest:0,get:0,getSetter:yo,aliases:{},register:0};if(Qi(),t!==i){if(ze[e])return;Je(i,Je(Ls(t,r),o)),xi(i.prototype,xi(r,Ls(t,o))),ze[i.prop=e]=i,t.targetTest&&(ws.push(i),po[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Pc(e,i),t.register&&t.register(Ve,i,Ce)},It=255,vr={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},Zs=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*It+.5|0},Xc=function(t,e,n){var i=t?Fn(t)?[t>>16,t>>8&It,t&It]:0:vr.black,r,o,a,c,l,u,h,d,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),vr[t])i=vr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&It,i&It,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&It,t&It]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(ka),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Zs(c+1/3,r,o),i[1]=Zs(c,r,o),i[2]=Zs(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(wc),n&&i.length<4&&(i[3]=1),i}else i=t.match(ka)||vr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/It,o=i[1]/It,a=i[2]/It,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?c=l=0:(m=h-d,l=u>.5?m/(2-h-d):m/(h+d),c=h===r?(o-a)/m+(o<a?6:0):h===o?(a-r)/m+2:(r-o)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yc=function(t){var e=[],n=[],i=-1;return t.split(Yn).forEach(function(r){var o=r.match(Gi)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Vo=function(t,e,n){var i="",r=(t+i).match(Yn),o=e?"hsla(":"rgba(",a=0,c,l,u,h;if(!r)return t;if(r=r.map(function(d){return(d=Xc(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Yc(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(Yn,"1").split(Gi),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=t.split(Yn),h=l.length-1;a<h;a++)i+=l[a]+r[a];return i+l[h]},Yn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in vr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Bh=/hsl[a]?\(/,jc=function(t){var e=t.join(" "),n;if(Yn.lastIndex=0,Yn.test(e))return n=Bh.test(e),t[1]=Vo(t[1],n),t[0]=Vo(t[0],n,Yc(t[1])),!0},Fr,ke=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,u,h,d,m,g=function f(p){var x=s()-i,M=p===!0,_,v,S,E;if(x>t&&(n+=x-e),i+=x,S=i-n,_=S-o,(_>0||M)&&(E=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,o+=_+(_>=r?4:r-_),v=1),M||(c=l(f)),v)for(m=0;m<a.length;m++)a[m](S,d,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Ac&&(!Ba&&Sc()&&(Xe=Ba=window,ho=Xe.document||{},Ge.gsap=Ve,(Xe.gsapVersions||(Xe.gsapVersions=[])).push(Ve.version),Cc(As||Xe.GreenSockGlobals||!Xe.gsap&&Xe||{}),u=Xe.requestAnimationFrame),c&&h.sleep(),l=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Fr=1,g(2))},sleep:function(){(u?Xe.cancelAnimationFrame:clearTimeout)(c),Fr=0,l=Rr},lagSmoothing:function(p,x){t=p||1/0,e=Math.min(x||33,t)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,x,M){var _=x?function(v,S,E,C){p(v,S,E,C),h.remove(_)}:p;return h.remove(p),a[M?"unshift":"push"](_),Qi(),_},remove:function(p,x){~(x=a.indexOf(p))&&a.splice(x,1)&&m>=x&&m--},_listeners:a},h}(),Qi=function(){return!Fr&&ke.wake()},Et={},Gh=/^[\d.\-M][\d.\-,\s]/,Vh=/["']/g,Wh=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(Vh,"").trim():+l,i=c.substr(a+1).trim();return e},Hh=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},qh=function(t){var e=(t+"").split("("),n=Et[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Wh(e[1])]:Hh(t).split(",").map(Ic)):Et._CE&&Gh.test(t)?Et._CE("",t):n},$c=function(t){return function(e){return 1-t(1-e)}},Zc=function s(t,e){for(var n=t._first,i;n;)n instanceof Te?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},gi=function(t,e){return t&&(qt(t)?t:Et[t]||qh(t))||e},Si=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Ae(t,function(a){Et[a]=Ge[a]=r,Et[o=a.toLowerCase()]=n;for(var c in r)Et[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Et[a+"."+c]=r[c]}),r},Kc=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ks=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Ua*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*xh((u-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Kc(a);return r=Ua/r,c.config=function(l,u){return s(t,l,u)},c},Js=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Kc(n);return i.config=function(r){return s(t,r)},i};Ae("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Si(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Et.Linear.easeNone=Et.none=Et.Linear.easeIn;Si("Elastic",Ks("in"),Ks("out"),Ks());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Si("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Si("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Si("Circ",function(s){return-(Mc(1-s*s)-1)});Si("Sine",function(s){return s===1?1:-_h(s*mh)+1});Si("Back",Js("in"),Js("out"),Js());Et.SteppedEase=Et.steps=Ge.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Ft;return function(a){return((i*Wr(0,o,a)|0)+r)*n}}};Zi.ease=Et["quad.out"];Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return mo+=s+","+s+"Params,"});var Jc=function(t,e){this.id=gh++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Dc,this.set=e?e.getSetter:yo},tr=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ji(this,+e.duration,1,1),this.data=e.data,Jt&&(this._ctx=Jt,Jt.data.push(this)),Fr||ke.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ji(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qi(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Us(this,n),!r._dp||r.parent||Nc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ft||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ko(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ko(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ki(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Ft?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ds(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ft?0:this._rts,this.totalTime(Wr(-this._delay,this._tDur,i),!0),zs(this),Th(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ft&&(this._tTime-=Ft)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ee(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ds(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Mh);var i=de;return de=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),de=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bo(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bo(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qe(this,n),Ee(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ee(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ft:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ft,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ft)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=qt(n)?n:Fc,a=function(){var l=i.then;i.then=null,qt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){xr(this)},s}();Je(tr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ft,_prom:0,_ps:!1,_rts:1});var Te=function(s){yc(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ee(n.sortChildren),Vt&&mn(n.parent||Vt,Pn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&zc(Pn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Ar(0,arguments,this),this},e.from=function(i,r,o){return Ar(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Ar(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Er(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Qt(i,r,qe(this,o),1),this},e.call=function(i,r,o){return mn(this,Qt.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Qt(i,o,qe(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,u){return o.runBackwards=1,Er(o).immediateRender=Ee(o.immediateRender),this.staggerTo(i,r,o,a,c,l,u)},e.staggerFromTo=function(i,r,o,a,c,l,u,h){return a.startAt=o,Er(a).immediateRender=Ee(a.immediateRender),this.staggerTo(i,r,a,c,l,u,h)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:le(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,m,g,f,p,x,M,_,v,S,E,C;if(this!==Vt&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,_=this._ts,x=!_,h&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=le(u%p),u===c?(f=this._repeat,d=l):(f=~~(u/p),f&&f===u/p&&(d=l,f--),d>l&&(d=l)),S=Ki(this._tTime,p),!a&&this._tTime&&S!==f&&(S=f),E&&f&1&&(d=l-d,C=1),f!==S&&!this._lock){var y=E&&S&1,b=y===(E&&f&1);if(f<S&&(y=!y),a=y?0:l,this._lock=1,this.render(a||(C?0:le(f*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&Ke(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,b&&(this._lock=2,a=y?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Zc(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Ph(this,le(a),le(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&(Ke(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,o),d!==this._time||!this._ts&&!x){M=0,g&&(u+=this._zTime=-Ft);break}}m=g}else{m=this._last;for(var P=i<0?i:d;m;){if(g=m._prev,(m._act||P<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,o||de&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!x){M=0,g&&(u+=this._zTime=P?-Ft:Ft);break}}m=g}}if(M&&!r&&(this.pause(),M.render(d>=a?0:-Ft)._zTime=d>=a?1:-1,this._ts))return this._start=v,zs(this),this.render(i,r,o);this._onUpdate&&!r&&Ke(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&$n(this,1),!r&&!(i<0&&!a)&&(u||a||!c)&&(Ke(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Fn(r)||(r=qe(this,r,i)),!(i instanceof tr)){if(pe(i))return i.forEach(function(a){return o.add(a,r)}),this;if(oe(i))return this.addLabel(i,r);if(qt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?mn(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-$e);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Qt?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return oe(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(Ns(this,i),i===this._recent&&(this._recent=this._last),mi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=le(ke.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=qe(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Qt.delayedCall(0,r||Rr,o);return a.data="isPause",this._hasPause=1,mn(this,a,qe(this,i))},e.removePause=function(i){var r=this._first;for(i=qe(this,i);r;)r._start===i&&r.data==="isPause"&&$n(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Gn!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Ze(i),c=this._first,l=Fn(r),u;c;)c instanceof Qt?Sh(c._targets,a)&&(l?(!Gn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(u=c.getTweensOf(a,r)).length&&o.push.apply(o,u),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=qe(o,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,m,g=Qt.to(o,Je({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Ft,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==p&&Ji(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Je({startAt:{time:qe(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Go(this,qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Go(this,qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ft)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return mi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mi(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=$e,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,mn(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;Ji(o,o===Vt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Vt._ts&&(Rc(Vt,Ds(i,Vt)),Lc=ke.frame),ke.frame>=zo){zo+=Be.autoSleep||120;var r=Vt._first;if((!r||!r._ts)&&Be.autoSleep&&ke._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ke.sleep()}}},t}(tr);Je(Te.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xh=function(t,e,n,i,r,o,a){var c=new Ce(this._pt,t,e,0,1,ru,null,r),l=0,u=0,h,d,m,g,f,p,x,M;for(c.b=n,c.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=Ir(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(js)||[];h=js.exec(i);)g=h[0],f=i.substring(l,h.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:f||u===1?f:",",s:p,c:g.charAt(1)==="="?Hi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=js.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Tc.test(i)||x)&&(c.e=0),this._pt=c,c},_o=function(t,e,n,i,r,o,a,c,l,u){qt(i)&&(i=i(r||0,t,o));var h=t[e],d=n!=="get"?n:qt(h)?l?t[e.indexOf("set")||!qt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,m=qt(h)?l?Kh:nu:vo,g;if(oe(i)&&(~i.indexOf("random(")&&(i=Ir(i)),i.charAt(1)==="="&&(g=Hi(d,i)+(fe(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Ya)return!isNaN(d*i)&&i!==""?(g=new Ce(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?Qh:iu,0,m),l&&(g.fp=l),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&fo(e,i),Xh.call(this,t,e,d,i,m,c||Be.stringFilter,l))},Yh=function(t,e,n,i,r){if(qt(t)&&(t=Cr(t,r,e,n,i)),!vn(t)||t.style&&t.nodeType||pe(t)||bc(t))return oe(t)?Cr(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Cr(t[a],r,e,n,i);return o},Qc=function(t,e,n,i,r,o){var a,c,l,u;if(ze[t]&&(a=new ze[t]).init(r,a.rawVars?e[t]:Yh(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new Ce(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Vi))for(l=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Gn,Ya,xo=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,d=i.runBackwards,m=i.yoyoEase,g=i.keyframes,f=i.autoRevert,p=t._dur,x=t._startAt,M=t._targets,_=t.parent,v=_&&_.data==="nested"?_.vars.targets:M,S=t._overwrite==="auto"&&!co,E=t.timeline,C,y,b,P,z,B,R,D,k,V,Y,G,Z;if(E&&(!g||!r)&&(r="none"),t._ease=gi(r,Zi.ease),t._yEase=m?$c(gi(m===!0?r:m,Zi.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(D=M[0]?pi(M[0]).harness:0,G=D&&i[D.prop],C=Ls(i,po),x&&(x._zTime<0&&x.progress(1),e<0&&d&&a&&!f?x.render(-1,!0):x.revert(d&&p?bs:yh),x._lazy=0),o){if($n(t._startAt=Qt.set(M,Je({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!x&&Ee(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:h,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(de||!a&&!f)&&t._startAt.revert(bs),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&p&&!x){if(e&&(a=!1),b=Je({overwrite:!1,data:"isFromStart",lazy:a&&!x&&Ee(c),immediateRender:a,stagger:0,parent:_},C),G&&(b[D.prop]=G),$n(t._startAt=Qt.set(M,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(de?t._startAt.revert(bs):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ft,Ft);else if(!e)return}for(t._pt=t._ptCache=0,c=p&&Ee(c)||c&&!p,y=0;y<M.length;y++){if(z=M[y],R=z._gsap||go(M)[y]._gsap,t._ptLookup[y]=V={},Ga[R.id]&&Xn.length&&Ps(),Y=v===M?y:v.indexOf(z),D&&(k=new D).init(z,G||C,t,Y,v)!==!1&&(t._pt=P=new Ce(t._pt,z,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function($){V[$]=P}),k.priority&&(B=1)),!D||G)for(b in C)ze[b]&&(k=Qc(b,C,t,Y,z,v))?k.priority&&(B=1):V[b]=P=_o.call(t,z,b,"get",C[b],Y,v,0,i.stringFilter);t._op&&t._op[y]&&t.kill(z,t._op[y]),S&&t._pt&&(Gn=t,Vt.killTweensOf(z,V,t.globalTime(e)),Z=!t.parent,Gn=0),t._pt&&c&&(Ga[R.id]=1)}B&&su(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!Z,g&&e<=0&&E.render($e,!0,!0)},jh=function(t,e,n,i,r,o,a){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,u,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(l=h[d][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return Ya=1,t.vars[e]="+=0",xo(t,a),Ya=0,1;c.push(l)}for(d=c.length;d--;)u=c[d],l=u._pt||u,l.s=(i||i===0)&&!r?i:l.s+(i||0)+o*l.c,l.c=n-l.s,u.e&&(u.e=jt(n)+fe(u.e)),u.b&&(u.b=l.s+fe(u.b))},$h=function(t,e){var n=t[0]?pi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=xi({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Zh=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(pe(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Cr=function(t,e,n,i,r){return qt(t)?t.call(e,n,i,r):oe(t)&&~t.indexOf("random(")?Ir(t):t},tu=mo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",eu={};Ae(tu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return eu[s]=1});var Qt=function(s){yc(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Er(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,m=c.overwrite,g=c.keyframes,f=c.defaults,p=c.scrollTrigger,x=c.yoyoEase,M=i.parent||Vt,_=(pe(n)||bc(n)?Fn(n[0]):"length"in i)?[n]:Ze(n),v,S,E,C,y,b,P,z;if(a._targets=_.length?go(_):Cs("GSAP target "+n+" not found. https://greensock.com",!Be.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||d||Zr(l)||Zr(u)){if(i=a.vars,v=a.timeline=new Te({data:"nested",defaults:f||{},targets:M&&M.data==="nested"?M.vars.targets:_}),v.kill(),v.parent=v._dp=Pn(a),v._start=0,d||Zr(l)||Zr(u)){if(C=_.length,P=d&&Gc(d),vn(d))for(y in d)~tu.indexOf(y)&&(z||(z={}),z[y]=d[y]);for(S=0;S<C;S++)E=Ls(i,eu),E.stagger=0,x&&(E.yoyoEase=x),z&&xi(E,z),b=_[S],E.duration=+Cr(l,Pn(a),S,b,_),E.delay=(+Cr(u,Pn(a),S,b,_)||0)-a._delay,!d&&C===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),v.to(b,E,P?P(S,b,_):0),v._ease=Et.none;v.duration()?l=u=0:a.timeline=0}else if(g){Er(Je(v.vars.defaults,{ease:"none"})),v._ease=gi(g.ease||i.ease||"none");var B=0,R,D,k;if(pe(g))g.forEach(function(V){return v.to(_,V,">")}),v.duration();else{E={};for(y in g)y==="ease"||y==="easeEach"||Zh(y,g[y],E,g.easeEach);for(y in E)for(R=E[y].sort(function(V,Y){return V.t-Y.t}),B=0,S=0;S<R.length;S++)D=R[S],k={ease:D.e,duration:(D.t-(S?R[S-1].t:0))/100*l},k[y]=D.v,v.to(_,k,B),B+=k.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||a.duration(l=v.duration())}else a.timeline=0;return m===!0&&!co&&(Gn=Pn(a),Vt.killTweensOf(_),Gn=0),mn(M,Pn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!g&&a._start===le(M._time)&&Ee(h)&&Eh(Pn(a))&&M.data!=="nested")&&(a._tTime=-Ft,a.render(Math.max(0,-u)||0)),p&&zc(Pn(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Ft&&!u?c:i<Ft?0:i,d,m,g,f,p,x,M,_,v;if(!l)Ch(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,_=this.timeline,this._repeat){if(f=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,o);if(d=le(h%f),h===c?(g=this._repeat,d=l):(g=~~(h/f),g&&g===h/f&&(d=l,g--),d>l&&(d=l)),x=this._yoyo&&g&1,x&&(v=this._yEase,d=l-d),p=Ki(this._tTime,f),d===a&&!o&&this._initted)return this._tTime=h,this;g!==p&&(_&&this._yEase&&Zc(_,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=o=1,this.render(le(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(Uc(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(d/l),this._from&&(this.ratio=M=1-M),d&&!a&&!r&&(Ke(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;_&&_.render(i<0?i:!d&&x?-Ft:_._dur*_._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Va(this,i,r,o),Ke(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Ke(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Va(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&$n(this,1),!r&&!(u&&!a)&&(h||a||x)&&(Ke(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a){Fr||ke.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||xo(this,c),l=this._ease(c/this._dur),jh(this,i,r,o,a,l,c)?this.resetTo(i,r,o,a):(Us(this,0),this.parent||Oc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?xr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gn&&Gn.vars.overwrite!==!0)._first||xr(this),this.parent&&o!==this.timeline.totalDuration()&&Ji(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Ze(i):a,l=this._ptLookup,u=this._pt,h,d,m,g,f,p,x;if((!r||r==="all")&&wh(a,c))return r==="all"&&(this._pt=0),xr(this);for(h=this._op=this._op||[],r!=="all"&&(oe(r)&&(f={},Ae(r,function(M){return f[M]=1}),r=f),r=$h(a,r)),x=a.length;x--;)if(~c.indexOf(a[x])){d=l[x],r==="all"?(h[x]=r,g=d,m={}):(m=h[x]=h[x]||{},g=r);for(f in g)p=d&&d[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Ns(this,p,"_pt"),delete d[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&xr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ar(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Ar(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Vt.killTweensOf(i,r,o)},t}(tr);Je(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ae("staggerTo,staggerFrom,staggerFromTo",function(s){Qt[s]=function(){var t=new Te,e=Ha.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var vo=function(t,e,n){return t[e]=n},nu=function(t,e,n){return t[e](n)},Kh=function(t,e,n,i){return t[e](i.fp,n)},Jh=function(t,e,n){return t.setAttribute(e,n)},yo=function(t,e){return qt(t[e])?nu:uo(t[e])&&t.setAttribute?Jh:vo},iu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Qh=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ru=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Mo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},tf=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},ef=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ns(this,e,"_pt"):e.dep||(n=1),e=i;return!n},nf=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},su=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Ce=function(){function s(e,n,i,r,o,a,c,l,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||iu,this.d=c||this,this.set=l||vo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=nf,this.m=n,this.mt=r,this.tween=i},s}();Ae(mo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return po[s]=1});Ge.TweenMax=Ge.TweenLite=Qt;Ge.TimelineLite=Ge.TimelineMax=Te;Vt=new Te({sortChildren:!1,defaults:Zi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Be.stringFilter=jc;var er=[],Ts={},rf=[],Wo=0,Qs=function(t){return(Ts[t]||rf).map(function(e){return e()})},ja=function(){var t=Date.now(),e=[];t-Wo>2&&(Qs("matchMediaInit"),er.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=Xe.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),Qs("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Wo=t,Qs("matchMedia"))},au=function(){function s(e,n){this.selector=n&&qa(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){qt(n)&&(r=i,i=n,n=qt);var o=this,a=function(){var l=Jt,u=o.selector,h;return l&&l!==o&&l.data.push(o),r&&(o.selector=qa(r)),Jt=o,h=i.apply(o,arguments),qt(h)&&o._r.push(h),Jt=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===qt?a(o):n?o[n]=a:a},t.ignore=function(n){var i=Jt;Jt=null,n(this),Jt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return o.splice(o.indexOf(l),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof tr)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,r)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var a=er.indexOf(this);~a&&er.splice(a,1)}},t.revert=function(n){this.kill(n||{})},s}(),sf=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(n,i,r){vn(n)||(n={matches:n});var o=new au(0,r||this.scope),a=o.conditions={},c,l,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Xe.matchMedia(n[l]),c&&(er.indexOf(o)<0&&er.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(ja):c.addEventListener("change",ja)));return u&&i(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Rs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return kh(i)})},timeline:function(t){return new Te(t)},getTweensOf:function(t,e){return Vt.getTweensOf(t,e)},getProperty:function(t,e,n,i){oe(t)&&(t=Ze(t)[0]);var r=pi(t||{}).get,o=n?Fc:Ic;return n==="native"&&(n=""),t&&(e?o((ze[e]&&ze[e].get||r)(t,e,n,i)):function(a,c,l){return o((ze[a]&&ze[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=Ze(t),t.length>1){var i=t.map(function(u){return Ve.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var o=ze[e],a=pi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(u){var h=new o;Vi._pt=0,h.init(t,n?u+n:u,Vi,0,[t]),h.render(1,h),Vi._pt&&Mo(1,Vi)}:a.set(t,c);return o?l:function(u){return l(t,c,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,r=Ve.to(t,xi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return r.resetTo(e,c,l,u)};return o.tween=r,o},isTweening:function(t){return Vt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=gi(t.ease,Zi.ease)),Uo(Zi,t||{})},config:function(t){return Uo(Be,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ze[a]&&!Ge[a]&&Cs(e+" effect requires "+a+" plugin.")}),$s[e]=function(a,c,l){return n(Ze(a),Je(c||{},r),l)},o&&(Te.prototype[e]=function(a,c,l){return this.add($s[e](a,vn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Et[t]=gi(e)},parseEase:function(t,e){return arguments.length?gi(t,e):Et},getById:function(t){return Vt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Te(t),i,r;for(n.smoothChildTiming=Ee(t.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=r;return mn(Vt,n,0),n},context:function(t,e){return t?new au(t,e):Jt},matchMedia:function(t){return new sf(t)},matchMediaRefresh:function(){return er.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ja()},addEventListener:function(t,e){var n=Ts[t]||(Ts[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ts[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Nh,wrapYoyo:zh,distribute:Gc,random:Wc,snap:Vc,normalize:Oh,getUnit:fe,clamp:Dh,splitColor:Xc,toArray:Ze,selector:qa,mapRange:qc,pipe:Ih,unitize:Fh,interpolate:Uh,shuffle:Bc},install:Cc,effects:$s,ticker:ke,updateRoot:Te.updateRoot,plugins:ze,globalTimeline:Vt,core:{PropTween:Ce,globals:Pc,Tween:Qt,Timeline:Te,Animation:tr,getCache:pi,_removeLinkedListItem:Ns,reverting:function(){return de},context:function(t){return t&&Jt&&(Jt.data.push(t),t._ctx=Jt),Jt},suppressOverwrites:function(t){return co=t}}};Ae("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Rs[s]=Qt[s]});ke.add(Te.updateRoot);Vi=Rs.to({},{duration:0});var af=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},of=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=af(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},ta=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(oe(r)&&(c={},Ae(r,function(u){return c[u]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}of(a,r)}}}},Ve=Rs.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)de?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ta("roundProps",Xa),ta("modifiers"),ta("snap",Vc))||Rs;Qt.version=Te.version=Ve.version="3.11.4";Ac=1;Sc()&&Qi();Et.Power0;Et.Power1;Et.Power2;Et.Power3;Et.Power4;Et.Linear;Et.Quad;Et.Cubic;Et.Quart;Et.Quint;Et.Strong;Et.Elastic;Et.Back;Et.SteppedEase;Et.Bounce;Et.Sine;Et.Expo;Et.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ho,Vn,qi,So,hi,qo,bo,lf=function(){return typeof window<"u"},On={},oi=180/Math.PI,Xi=Math.PI/180,wi=Math.atan2,Xo=1e8,wo=/([A-Z])/g,cf=/(left|right|width|margin|padding|x)/i,uf=/[\s,\(]\S/,Rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$a=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},hf=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ff=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},df=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ou=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},lu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},pf=function(t,e,n){return t.style[e]=n},mf=function(t,e,n){return t.style.setProperty(e,n)},gf=function(t,e,n){return t._gsap[e]=n},_f=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},xf=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},vf=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Wt="transform",on=Wt+"Origin",yf=function(t,e){var n=this,i=this.target,r=i.style;if(t in On){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Rn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ln(i,o)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Ln(i,t)),this.props.indexOf(Wt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(on,e,"")),t=Wt}(r||e)&&this.props.push(t,e,r[t])},cu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Mf=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(wo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=bo(),r&&!r.isStart&&!n[Wt]&&(cu(n),i.uncache=1)}},uu=function(t,e){var n={target:t,props:[],revert:Mf,save:yf};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},hu,Za=function(t,e){var n=Vn.createElementNS?Vn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vn.createElement(t);return n.style?n:Vn.createElement(t)},_n=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(wo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,nr(e)||e,1)||""},Yo="O,Moz,ms,Ms,Webkit".split(","),nr=function(t,e,n){var i=e||hi,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Yo[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Yo[o]:"")+t},Ka=function(){lf()&&window.document&&(Ho=window,Vn=Ho.document,qi=Vn.documentElement,hi=Za("div")||{style:{}},Za("div"),Wt=nr(Wt),on=Wt+"Origin",hi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hu=!!nr("perspective"),bo=Ve.core.reverting,So=1)},ea=function s(t){var e=Za("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(qi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),qi.removeChild(e),this.style.cssText=r,o},jo=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},fu=function(t){var e;try{e=t.getBBox()}catch{e=ea.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ea||(e=ea.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+jo(t,["x","cx","x1"])||0,y:+jo(t,["y","cy","y1"])||0,width:0,height:0}:e},du=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&fu(t))},Or=function(t,e){if(e){var n=t.style;e in On&&e!==on&&(e=Wt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(wo,"-$1").toLowerCase())):n.removeAttribute(e)}},Wn=function(t,e,n,i,r,o){var a=new Ce(t._pt,e,n,0,1,o?lu:ou);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},$o={deg:1,rad:1,turn:1},Sf={grid:1,flex:1},Zn=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=hi.style,c=cf.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",m=i==="%",g,f,p,x;return i===o||!r||$o[i]||$o[o]?r:(o!=="px"&&!d&&(r=s(t,e,n,"px")),x=t.getCTM&&du(t),(m||o==="%")&&(On[e]||~e.indexOf("adius"))?(g=x?t.getBBox()[c?"width":"height"]:t[u],jt(m?r/g*h:r/100*g)):(a[c?"width":"height"]=h+(d?o:i),f=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,x&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Vn||!f.appendChild)&&(f=Vn.body),p=f._gsap,p&&m&&p.width&&c&&p.time===ke.time&&!p.uncache?jt(r/p.width*h):((m||o==="%")&&!Sf[_n(f,"display")]&&(a.position=_n(t,"position")),f===t&&(a.position="static"),f.appendChild(hi),g=hi[u],f.removeChild(hi),a.position="absolute",c&&m&&(p=pi(f),p.time=ke.time,p.width=f[u]),jt(d?g*r/h:g&&r?h/g*r:0))))},Ln=function(t,e,n,i){var r;return So||Ka(),e in Rn&&e!=="transform"&&(e=Rn[e],~e.indexOf(",")&&(e=e.split(",")[0])),On[e]&&e!=="transform"?(r=zr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Fs(_n(t,on))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Is[e]&&Is[e](t,e,n)||_n(t,e)||Dc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zn(t,e,r,n)+n:r},bf=function(t,e,n,i){if(!n||n==="none"){var r=nr(e,t,1),o=r&&_n(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=_n(t,"borderTopColor"))}var a=new Ce(this._pt,t.style,e,0,1,ru),c=0,l=0,u,h,d,m,g,f,p,x,M,_,v,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=_n(t,e)||i,t.style[e]=n),u=[n,i],jc(u),n=u[0],i=u[1],d=n.match(Gi)||[],S=i.match(Gi)||[],S.length){for(;h=Gi.exec(i);)p=h[0],M=i.substring(c,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(f=d[l++]||"")&&(m=parseFloat(f)||0,v=f.substr((m+"").length),p.charAt(1)==="="&&(p=Hi(m,p)+v),x=parseFloat(p),_=p.substr((x+"").length),c=Gi.lastIndex-_.length,_||(_=_||Be.units[e]||v,c===i.length&&(i+=_,a.e+=_)),v!==_&&(m=Zn(t,e,f,_)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:m,c:x-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?lu:ou;return Tc.test(i)&&(a.e=0),this._pt=a,a},Zo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wf=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Zo[n]||n,e[1]=Zo[i]||i,e.join(" ")},Tf=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],On[a]&&(c=1,a=a==="transformOrigin"?on:Wt),Or(n,a);c&&(Or(n,Wt),o&&(o.svg&&n.removeAttribute("transform"),zr(n,1),o.uncache=1,cu(i)))}},Is={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Ce(t._pt,e,n,0,0,Tf);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Nr=[1,0,0,1,0,0],pu={},mu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ko=function(t){var e=_n(t,Wt);return mu(e)?Nr:e.substr(7).match(wc).map(jt)},To=function(t,e){var n=t._gsap||pi(t),i=t.style,r=Ko(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Nr:r):(r===Nr&&!t.offsetParent&&t!==qi&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(l=1,a=t.nextElementSibling,qi.appendChild(t)),r=Ko(t),c?i.display=c:Or(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):qi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ja=function(t,e,n,i,r,o){var a=t._gsap,c=r||To(t,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,m=c[0],g=c[1],f=c[2],p=c[3],x=c[4],M=c[5],_=e.split(" "),v=parseFloat(_[0])||0,S=parseFloat(_[1])||0,E,C,y,b;n?c!==Nr&&(C=m*p-g*f)&&(y=v*(p/C)+S*(-f/C)+(f*M-p*x)/C,b=v*(-g/C)+S*(m/C)-(m*M-g*x)/C,v=y,S=b):(E=fu(t),v=E.x+(~_[0].indexOf("%")?v/100*E.width:v),S=E.y+(~(_[1]||_[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&a.smooth?(x=v-l,M=S-u,a.xOffset=h+(x*m+M*f)-x,a.yOffset=d+(x*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[on]="0px 0px",o&&(Wn(o,a,"xOrigin",l,v),Wn(o,a,"yOrigin",u,S),Wn(o,a,"xOffset",h,a.xOffset),Wn(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},zr=function(t,e){var n=t._gsap||new Jc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=_n(t,on)||"0",u,h,d,m,g,f,p,x,M,_,v,S,E,C,y,b,P,z,B,R,D,k,V,Y,G,Z,$,it,O,K,Q,F;return u=h=d=f=p=x=M=_=v=0,m=g=1,n.svg=!!(t.getCTM&&du(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Wt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Wt]!=="none"?c[Wt]:"")),i.scale=i.rotate=i.translate="none"),C=To(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),l=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Ja(t,Y||l,!!Y||n.originIsAbsolute,n.smooth!==!1,C)),S=n.xOrigin||0,E=n.yOrigin||0,C!==Nr&&(z=C[0],B=C[1],R=C[2],D=C[3],u=k=C[4],h=V=C[5],C.length===6?(m=Math.sqrt(z*z+B*B),g=Math.sqrt(D*D+R*R),f=z||B?wi(B,z)*oi:0,M=R||D?wi(R,D)*oi+f:0,M&&(g*=Math.abs(Math.cos(M*Xi))),n.svg&&(u-=S-(S*z+E*R),h-=E-(S*B+E*D))):(F=C[6],K=C[7],$=C[8],it=C[9],O=C[10],Q=C[11],u=C[12],h=C[13],d=C[14],y=wi(F,O),p=y*oi,y&&(b=Math.cos(-y),P=Math.sin(-y),Y=k*b+$*P,G=V*b+it*P,Z=F*b+O*P,$=k*-P+$*b,it=V*-P+it*b,O=F*-P+O*b,Q=K*-P+Q*b,k=Y,V=G,F=Z),y=wi(-R,O),x=y*oi,y&&(b=Math.cos(-y),P=Math.sin(-y),Y=z*b-$*P,G=B*b-it*P,Z=R*b-O*P,Q=D*P+Q*b,z=Y,B=G,R=Z),y=wi(B,z),f=y*oi,y&&(b=Math.cos(y),P=Math.sin(y),Y=z*b+B*P,G=k*b+V*P,B=B*b-z*P,V=V*b-k*P,z=Y,k=G),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,x=180-x),m=jt(Math.sqrt(z*z+B*B+R*R)),g=jt(Math.sqrt(V*V+F*F)),y=wi(k,V),M=Math.abs(y)>2e-4?y*oi:0,v=Q?1/(Q<0?-Q:Q):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!mu(_n(t,Wt)),Y&&t.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=jt(m),n.scaleY=jt(g),n.rotation=jt(f)+a,n.rotationX=jt(p)+a,n.rotationY=jt(x)+a,n.skewX=M+a,n.skewY=_+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[on]=Fs(l)),n.xOffset=n.yOffset=0,n.force3D=Be.force3D,n.renderTransform=n.svg?Af:hu?gu:Ef,n.uncache=0,n},Fs=function(t){return(t=t.split(" "))[0]+" "+t[1]},na=function(t,e,n){var i=fe(e);return jt(parseFloat(e)+parseFloat(Zn(t,"x",n+"px",i)))+i},Ef=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,gu(t,e)},ni="0deg",ur="0px",ii=") ",gu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,x=n.force3D,M=n.target,_=n.zOrigin,v="",S=x==="auto"&&t&&t!==1||x===!0;if(_&&(h!==ni||u!==ni)){var E=parseFloat(u)*Xi,C=Math.sin(E),y=Math.cos(E),b;E=parseFloat(h)*Xi,b=Math.cos(E),o=na(M,o,C*b*-_),a=na(M,a,-Math.sin(E)*-_),c=na(M,c,y*b*-_+_)}p!==ur&&(v+="perspective("+p+ii),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(S||o!==ur||a!==ur||c!==ur)&&(v+=c!==ur||S?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+ii),l!==ni&&(v+="rotate("+l+ii),u!==ni&&(v+="rotateY("+u+ii),h!==ni&&(v+="rotateX("+h+ii),(d!==ni||m!==ni)&&(v+="skew("+d+", "+m+ii),(g!==1||f!==1)&&(v+="scale("+g+", "+f+ii),M.style[Wt]=v||"translate(0, 0)"},Af=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,x=n.yOffset,M=n.forceCSS,_=parseFloat(o),v=parseFloat(a),S,E,C,y,b;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Xi,l*=Xi,S=Math.cos(c)*h,E=Math.sin(c)*h,C=Math.sin(c-l)*-d,y=Math.cos(c-l)*d,l&&(u*=Xi,b=Math.tan(l-u),b=Math.sqrt(1+b*b),C*=b,y*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),S*=b,E*=b)),S=jt(S),E=jt(E),C=jt(C),y=jt(y)):(S=h,y=d,E=C=0),(_&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(_=Zn(m,"x",o,"px"),v=Zn(m,"y",a,"px")),(g||f||p||x)&&(_=jt(_+g-(g*S+f*C)+p),v=jt(v+f-(g*E+f*y)+x)),(i||r)&&(b=m.getBBox(),_=jt(_+i/100*b.width),v=jt(v+r/100*b.height)),b="matrix("+S+","+E+","+C+","+y+","+_+","+v+")",m.setAttribute("transform",b),M&&(m.style[Wt]=b)},Cf=function(t,e,n,i,r){var o=360,a=oe(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?oi:1),l=c-i,u=i+l+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*Xo)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*Xo)%o-~~(l/o)*o)),t._pt=d=new Ce(t._pt,e,n,i,l,hf),d.e=u,d.u="deg",t._props.push(n),d},Jo=function(t,e){for(var n in e)t[n]=e[n];return t},Pf=function(t,e,n){var i=Jo({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,d,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Wt]=e,a=zr(n,1),Or(n,Wt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Wt],o[Wt]=e,a=zr(n,1),o[Wt]=l);for(c in On)l=i[c],u=a[c],l!==u&&r.indexOf(c)<0&&(m=fe(l),g=fe(u),h=m!==g?Zn(n,c,l,g):parseFloat(l),d=parseFloat(u),t._pt=new Ce(t._pt,a,c,h,d-h,$a),t._pt.u=g||0,t._props.push(c));Jo(a,i)};Ae("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Is[t>1?"border"+s:s]=function(a,c,l,u,h){var d,m;if(arguments.length<4)return d=o.map(function(g){return Ln(a,g,l)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},o.forEach(function(g,f){return m[g]=d[f]=d[f]||d[(f-1)/2|0]}),a.init(c,m,h)}});var _u={name:"css",register:Ka,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,u,h,d,m,g,f,p,x,M,_,v,S,E,C,y;So||Ka(),this.styles=this.styles||uu(t),y=this.styles.props,this.tween=n;for(f in e)if(f!=="autoRound"&&(u=e[f],!(ze[f]&&Qc(f,e,n,i,t,r)))){if(m=typeof u,g=Is[f],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ir(u)),g)g(this,t,f,u,n)&&(C=1);else if(f.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(f)+"").trim(),u+="",Yn.lastIndex=0,Yn.test(l)||(p=fe(l),x=fe(u)),x?p!==x&&(l=Zn(t,f,l,x)+x):p&&(u+=p),this.add(a,"setProperty",l,u,i,r,0,0,f),o.push(f),y.push(f,0,a[f]);else if(m!=="undefined"){if(c&&f in c?(l=typeof c[f]=="function"?c[f].call(n,i,t,r):c[f],oe(l)&&~l.indexOf("random(")&&(l=Ir(l)),fe(l+"")||(l+=Be.units[f]||fe(Ln(t,f))||""),(l+"").charAt(1)==="="&&(l=Ln(t,f))):l=Ln(t,f),d=parseFloat(l),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),f in Rn&&(f==="autoAlpha"&&(d===1&&Ln(t,"visibility")==="hidden"&&h&&(d=0),y.push("visibility",0,a.visibility),Wn(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=Rn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),_=f in On,_){if(this.styles.save(f),v||(S=t._gsap,S.renderTransform&&!e.parseTransform||zr(t,e.parseTransform),E=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new Ce(this._pt,a,Wt,0,1,S.renderTransform,S,0,-1),v.dep=1),f==="scale")this._pt=new Ce(this._pt,S,"scaleY",S.scaleY,(M?Hi(S.scaleY,M+h):h)-S.scaleY||0,$a),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){y.push(on,0,a[on]),u=wf(u),S.svg?Ja(t,u,0,E,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==S.zOrigin&&Wn(this,S,"zOrigin",S.zOrigin,x),Wn(this,a,f,Fs(l),Fs(u)));continue}else if(f==="svgOrigin"){Ja(t,u,1,E,0,this);continue}else if(f in pu){Cf(this,S,f,d,M?Hi(d,M+u):u);continue}else if(f==="smoothOrigin"){Wn(this,S,"smooth",S.smooth,u);continue}else if(f==="force3D"){S[f]=u;continue}else if(f==="transform"){Pf(this,u,t);continue}}else f in a||(f=nr(f)||f);if(_||(h||h===0)&&(d||d===0)&&!uf.test(u)&&f in a)p=(l+"").substr((d+"").length),h||(h=0),x=fe(u)||(f in Be.units?Be.units[f]:p),p!==x&&(d=Zn(t,f,l,x)),this._pt=new Ce(this._pt,_?S:a,f,d,(M?Hi(d,M+h):h)-d,!_&&(x==="px"||f==="zIndex")&&e.autoRound!==!1?df:$a),this._pt.u=x||0,p!==x&&x!=="%"&&(this._pt.b=l,this._pt.r=ff);else if(f in a)bf.call(this,t,f,l,M?M+u:u);else if(f in t)this.add(t,f,l||t[f],M?M+u:u,i,r);else if(f!=="parseTransform"){fo(f,u);continue}_||(f in a?y.push(f,0,a[f]):y.push(f,1,l||t[f])),o.push(f)}}C&&su(this)},render:function(t,e){if(e.tween._time||!bo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ln,aliases:Rn,getSetter:function(t,e,n){var i=Rn[e];return i&&i.indexOf(",")<0&&(e=i),e in On&&e!==on&&(t._gsap.x||Ln(t,"x"))?n&&qo===n?e==="scale"?_f:gf:(qo=n||{})&&(e==="scale"?xf:vf):t.style&&!uo(t.style[e])?pf:~e.indexOf("-")?mf:yo(t,e)},core:{_removeProperty:Or,_getMatrix:To}};Ve.utils.checkPrefix=nr;Ve.core.getStyleSaver=uu;(function(s,t,e,n){var i=Ae(s+","+t+","+e,function(r){On[r]=1});Ae(t,function(r){Be.units[r]="deg",pu[r]=1}),Rn[i[13]]=s+","+t,Ae(n,function(r){var o=r.split(":");Rn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Be.units[s]="px"});Ve.registerPlugin(_u);var xu=Ve.registerPlugin(_u)||Ve;xu.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="150",Lf=0,Qo=1,Df=2,vu=1,Rf=2,yr=3,Kn=0,Pe=1,Hn=2,jn=0,Yi=1,Qa=2,tl=3,el=4,If=5,ki=100,Ff=101,Of=102,nl=103,il=104,Nf=200,zf=201,Uf=202,kf=203,yu=204,Mu=205,Bf=206,Gf=207,Vf=208,Wf=209,Hf=210,qf=0,Xf=1,Yf=2,to=3,jf=4,$f=5,Zf=6,Kf=7,Su=0,Jf=1,Qf=2,In=0,td=1,ed=2,nd=3,id=4,rd=5,bu=300,ir=301,rr=302,eo=303,no=304,ks=306,io=1e3,sn=1001,ro=1002,Se=1003,rl=1004,ia=1005,Ye=1006,sd=1007,Ur=1008,vi=1009,ad=1010,od=1011,wu=1012,ld=1013,fi=1014,di=1015,kr=1016,cd=1017,ud=1018,ji=1020,hd=1021,an=1023,fd=1024,dd=1025,_i=1026,sr=1027,pd=1028,md=1029,gd=1030,_d=1031,xd=1033,ra=33776,sa=33777,aa=33778,oa=33779,sl=35840,al=35841,ol=35842,ll=35843,vd=36196,cl=37492,ul=37496,hl=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,_l=37814,xl=37815,vl=37816,yl=37817,Ml=37818,Sl=37819,bl=37820,wl=37821,la=36492,yd=36283,Tl=36284,El=36285,Al=36286,yi=3e3,zt=3001,Md=3200,Sd=3201,bd=0,wd=1,dn="srgb",Br="srgb-linear",Tu="display-p3",ca=7680,Td=519,Cl=35044,Pl="300 es",so=1035;class or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,Ll=180/Math.PI;function Hr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[s&255]+ue[s>>8&255]+ue[s>>16&255]+ue[s>>24&255]+"-"+ue[t&255]+ue[t>>8&255]+"-"+ue[t>>16&15|64]+ue[t>>24&255]+"-"+ue[e&63|128]+ue[e>>8&255]+"-"+ue[e>>16&255]+ue[e>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function Ed(s,t){return(s%t+t)%t}function ha(s,t,e){return(1-e)*s+e*t}function Dl(s){return(s&s-1)===0&&s!==0}function Ad(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kr(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class be{constructor(){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],f=i[0],p=i[3],x=i[6],M=i[1],_=i[4],v=i[7],S=i[2],E=i[5],C=i[8];return r[0]=o*f+a*M+c*S,r[3]=o*p+a*_+c*E,r[6]=o*x+a*v+c*C,r[1]=l*f+u*M+h*S,r[4]=l*p+u*_+h*E,r[7]=l*x+u*v+h*C,r[2]=d*f+m*M+g*S,r[5]=d*p+m*_+g*E,r[8]=d*x+m*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,m=l*r-o*c,g=e*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=h*f,t[1]=(i*l-u*n)*f,t[2]=(a*n-i*o)*f,t[3]=d*f,t[4]=(u*e-i*c)*f,t[5]=(i*r-a*e)*f,t[6]=m*f,t[7]=(n*c-l*e)*f,t[8]=(o*e-n*r)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new be;function Eu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}class qr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],f=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(h!==f||c!==d||l!==m||u!==g){let p=1-a;const x=c*d+l*m+u*g+h*f,M=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const S=Math.sqrt(_),E=Math.atan2(S,x*M);p=Math.sin(p*E)/S,a=Math.sin(a*E)/S}const v=a*M;if(c=c*p+d*v,l=l*p+m*v,u=u*p+g*v,h=h*p+f*v,p===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*m-l*d,t[e+1]=c*g+u*d+l*h-a*m,t[e+2]=l*g+u*m+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-r*i,h=c*i+r*n-o*e,d=-r*e-o*n-a*i;return this.x=l*c+d*-r+u*-a-h*-o,this.y=u*c+d*-o+h*-r-l*-a,this.z=h*c+d*-a+l*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new U,Rl=new qr;function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Cd=new be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Pd=new be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),qn=new U;function Ld(s){return s.convertSRGBToLinear(),qn.set(s.r,s.g,s.b).applyMatrix3(Pd),s.setRGB(qn.x,qn.y,qn.z)}function Dd(s){return qn.set(s.r,s.g,s.b).applyMatrix3(Cd),s.setRGB(qn.x,qn.y,qn.z).convertLinearToSRGB()}const Rd={[Br]:s=>s,[dn]:s=>s.convertSRGBToLinear(),[Tu]:Ld},Id={[Br]:s=>s,[dn]:s=>s.convertLinearToSRGB(),[Tu]:Dd},ve={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Br},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Rd[t],i=Id[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let Ti;class Au{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Gr("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Cu{constructor(t=null){this.isSource=!0,this.uuid=Hr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ma(i[o].image)):r.push(ma(i[o]))}else r=ma(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ma(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Au.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fd=0;class Le extends or{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=sn,i=sn,r=Ye,o=Ur,a=an,c=vi,l=Le.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Hr(),this.name="",this.source=new Cu(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case io:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case io:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=bu;Le.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],f=c[2],p=c[6],x=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(m+1)/2,S=(x+1)/2,E=(u+d)/4,C=(h+f)/4,y=(g+p)/4;return _>v&&_>S?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=C/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=y/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=y/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-f)/M,this.z=(d-u)/M,this.w=Math.acos((l+m+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mi extends or{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ye,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pu extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Se,this.minFilter=Se,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Od extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Se,this.minFilter=Se,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],d=t[c+2];u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),d=t.getZ(c);u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)ri.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ri)}else n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox),ga.applyMatrix4(t.matrixWorld),this.union(ga);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Jr.subVectors(this.max,hr),Ei.subVectors(t.a,hr),Ai.subVectors(t.b,hr),Ci.subVectors(t.c,hr),zn.subVectors(Ai,Ei),Un.subVectors(Ci,Ai),si.subVectors(Ei,Ci);let e=[0,-zn.z,zn.y,0,-Un.z,Un.y,0,-si.z,si.y,zn.z,0,-zn.x,Un.z,0,-Un.x,si.z,0,-si.x,-zn.y,zn.x,0,-Un.y,Un.x,0,-si.y,si.x,0];return!_a(e,Ei,Ai,Ci,Jr)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,Ei,Ai,Ci,Jr))?!1:(Qr.crossVectors(zn,Un),e=[Qr.x,Qr.y,Qr.z],_a(e,Ei,Ai,Ci,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new U,new U,new U,new U,new U,new U,new U,new U],ri=new U,ga=new Xr,Ei=new U,Ai=new U,Ci=new U,zn=new U,Un=new U,si=new U,hr=new U,Jr=new U,Qr=new U,ai=new U;function _a(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ai.fromArray(s,r);const a=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Nd=new Xr,fr=new U,xa=new U;class Bs{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(xa)),this.expandByPoint(fr.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new U,va=new U,ts=new U,kn=new U,ya=new U,es=new U,Ma=new U;class Lu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){va.copy(t).add(e).multiplyScalar(.5),ts.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(va);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ts),a=kn.dot(this.direction),c=-kn.dot(ts),l=kn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const f=1/u;h*=f,d*=f,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(va).addScaledVector(ts,d),m}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,i,r){ya.subVectors(e,t),es.subVectors(n,t),Ma.crossVectors(ya,es);let o=this.direction.dot(Ma),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const c=a*this.direction.dot(es.crossVectors(kn,es));if(c<0)return null;const l=a*this.direction.dot(ya.cross(kn));if(l<0||c+l>o)return null;const u=-a*kn.dot(Ma);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,c,l,u,h,d,m,g,f,p){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=d,x[3]=m,x[7]=g,x[11]=f,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,m=o*h,g=a*u,f=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=d-f*l,e[9]=-a*c,e[2]=f-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,m=c*h,g=l*u,f=l*h;e[0]=d+f*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=f+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,m=c*h,g=l*u,f=l*h;e[0]=d-f*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=f-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,m=o*h,g=a*u,f=a*h;e[0]=c*u,e[4]=g*l-m,e[8]=d*l+f,e[1]=c*h,e[5]=f*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,f=a*l;e[0]=c*u,e[4]=f-d*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+g,e[10]=d-f*h}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,f=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+f,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=f*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,Ud)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Bn.crossVectors(n,Oe),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Bn.crossVectors(n,Oe)),Bn.normalize(),ns.crossVectors(Oe,Bn),i[0]=Bn.x,i[4]=ns.x,i[8]=Oe.x,i[1]=Bn.y,i[5]=ns.y,i[9]=Oe.y,i[2]=Bn.z,i[6]=ns.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],f=n[6],p=n[10],x=n[14],M=n[3],_=n[7],v=n[11],S=n[15],E=i[0],C=i[4],y=i[8],b=i[12],P=i[1],z=i[5],B=i[9],R=i[13],D=i[2],k=i[6],V=i[10],Y=i[14],G=i[3],Z=i[7],$=i[11],it=i[15];return r[0]=o*E+a*P+c*D+l*G,r[4]=o*C+a*z+c*k+l*Z,r[8]=o*y+a*B+c*V+l*$,r[12]=o*b+a*R+c*Y+l*it,r[1]=u*E+h*P+d*D+m*G,r[5]=u*C+h*z+d*k+m*Z,r[9]=u*y+h*B+d*V+m*$,r[13]=u*b+h*R+d*Y+m*it,r[2]=g*E+f*P+p*D+x*G,r[6]=g*C+f*z+p*k+x*Z,r[10]=g*y+f*B+p*V+x*$,r[14]=g*b+f*R+p*Y+x*it,r[3]=M*E+_*P+v*D+S*G,r[7]=M*C+_*z+v*k+S*Z,r[11]=M*y+_*B+v*V+S*$,r[15]=M*b+_*R+v*Y+S*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],f=t[7],p=t[11],x=t[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*m-n*c*m)+f*(+e*c*m-e*l*d+r*o*d-i*o*m+i*l*u-r*c*u)+p*(+e*l*h-e*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+x*(-i*a*u-e*c*h+e*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],f=t[13],p=t[14],x=t[15],M=h*p*l-f*d*l+f*c*m-a*p*m-h*c*x+a*d*x,_=g*d*l-u*p*l-g*c*m+o*p*m+u*c*x-o*d*x,v=u*f*l-g*h*l+g*a*m-o*f*m-u*a*x+o*h*x,S=g*h*c-u*f*c-g*a*d+o*f*d+u*a*p-o*h*p,E=e*M+n*_+i*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=M*C,t[1]=(f*d*r-h*p*r-f*i*m+n*p*m+h*i*x-n*d*x)*C,t[2]=(a*p*r-f*c*r+f*i*l-n*p*l-a*i*x+n*c*x)*C,t[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*m-n*c*m)*C,t[4]=_*C,t[5]=(u*p*r-g*d*r+g*i*m-e*p*m-u*i*x+e*d*x)*C,t[6]=(g*c*r-o*p*r-g*i*l+e*p*l+o*i*x-e*c*x)*C,t[7]=(o*d*r-u*c*r+u*i*l-e*d*l-o*i*m+e*c*m)*C,t[8]=v*C,t[9]=(g*h*r-u*f*r-g*n*m+e*f*m+u*n*x-e*h*x)*C,t[10]=(o*f*r-g*a*r+g*n*l-e*f*l-o*n*x+e*a*x)*C,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*m-e*a*m)*C,t[12]=S*C,t[13]=(u*f*i-g*h*i+g*n*d-e*f*d-u*n*p+e*h*p)*C,t[14]=(g*a*i-o*f*i-g*n*c+e*f*c+o*n*p-e*a*p)*C,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,m=r*u,g=r*h,f=o*u,p=o*h,x=a*h,M=c*l,_=c*u,v=c*h,S=n.x,E=n.y,C=n.z;return i[0]=(1-(f+x))*S,i[1]=(m+v)*S,i[2]=(g-_)*S,i[3]=0,i[4]=(m-v)*E,i[5]=(1-(d+x))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(g+_)*C,i[9]=(p-M)*C,i[10]=(1-(d+f))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Pi.set(i[0],i[1],i[2]).length();const o=Pi.set(i[4],i[5],i[6]).length(),a=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],en.copy(this);const l=1/r,u=1/o,h=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-r),h=(e+t)*c,d=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new U,en=new ae,zd=new U(0,0,0),Ud=new U(1,1,1),Bn=new U,ns=new U,Oe=new U,Il=new ae,Fl=new qr;class Gs{constructor(t=0,e=0,n=0,i=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Il,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kd=0;const Ol=new U,Li=new qr,Tn=new ae,is=new U,dr=new U,Bd=new U,Gd=new qr,Nl=new U(1,0,0),zl=new U(0,1,0),Ul=new U(0,0,1),Vd={type:"added"},kl={type:"removed"};class De extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new U,e=new Gs,n=new qr,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new be}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?is.copy(t):is.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(dr,is,this.up):Tn.lookAt(is,dr,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Tn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(kl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}De.DEFAULT_UP=new U(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new U,En=new U,Sa=new U,An=new U,Di=new U,Ri=new U,Bl=new U,ba=new U,wa=new U,Ta=new U;class Dn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),nn.subVectors(t,e),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){nn.subVectors(i,e),En.subVectors(n,e),Sa.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(En),c=nn.dot(Sa),l=En.dot(En),u=En.dot(Sa),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,An),c.set(0,0),c.addScaledVector(r,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c}static isFrontFacing(t,e,n,i){return nn.subVectors(n,e),En.subVectors(t,e),nn.cross(En).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Dn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Di.subVectors(i,n),Ri.subVectors(r,n),ba.subVectors(t,n);const c=Di.dot(ba),l=Ri.dot(ba);if(c<=0&&l<=0)return e.copy(n);wa.subVectors(t,i);const u=Di.dot(wa),h=Ri.dot(wa);if(u>=0&&h<=u)return e.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Di,o);Ta.subVectors(t,r);const m=Di.dot(Ta),g=Ri.dot(Ta);if(g>=0&&m<=g)return e.copy(r);const f=m*l-c*g;if(f<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ri,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Bl.subVectors(r,i),a=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Bl,a);const x=1/(p+f+d);return o=f*x,a=d*x,e.copy(n).addScaledVector(Di,o).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Wd=0;class Yr extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Yi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yu,this.blendDst=Mu,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function Ea(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ve.workingColorSpace){if(t=Ed(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ea(o,r,t+1/3),this.g=Ea(o,r,t),this.b=Ea(o,r,t-1/3)}return ve.toWorkingColorSpace(this,i),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ve.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ve.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ve.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ve.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=Ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return ve.fromWorkingColorSpace(he.copy(this),t),Ue(he.r*255,0,255)<<16^Ue(he.g*255,0,255)<<8^Ue(he.b*255,0,255)<<0}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(he.copy(this),e);const n=he.r,i=he.g,r=he.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(he.copy(this),e),t.r=he.r,t.g=he.g,t.b=he.b,t}getStyle(t=dn){ve.fromWorkingColorSpace(he.copy(this),t);const e=he.r,n=he.g,i=he.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(rn),rn.h+=t,rn.s+=e,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rn),t.getHSL(rs);const n=ha(rn.h,rs.h,e),i=ha(rn.s,rs.s,e),r=ha(rn.l,rs.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const he=new Ut;Ut.NAMES=Ru;class Iu extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kt=new U,ss=new kt;class xn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fu extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ou extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ln extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hd=0;const He=new ae,Aa=new De,Ii=new U,Ne=new Xr,pr=new Xr,se=new U;class Mn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?Ou:Fu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new be().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(se.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(se),se.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(se)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(se.addVectors(Ne.min,pr.min),Ne.expandByPoint(se),se.addVectors(Ne.max,pr.max),Ne.expandByPoint(se)):(Ne.expandByPoint(pr.min),Ne.expandByPoint(pr.max))}Ne.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)se.fromBufferAttribute(a,l),c&&(Ii.fromBufferAttribute(t,l),se.add(Ii)),i=Math.max(i,n.distanceToSquared(se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let P=0;P<a;P++)l[P]=new U,u[P]=new U;const h=new U,d=new U,m=new U,g=new kt,f=new kt,p=new kt,x=new U,M=new U;function _(P,z,B){h.fromArray(i,P*3),d.fromArray(i,z*3),m.fromArray(i,B*3),g.fromArray(o,P*2),f.fromArray(o,z*2),p.fromArray(o,B*2),d.sub(h),m.sub(h),f.sub(g),p.sub(g);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(R),M.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(R),l[P].add(x),l[z].add(x),l[B].add(x),u[P].add(M),u[z].add(M),u[B].add(M))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let P=0,z=v.length;P<z;++P){const B=v[P],R=B.start,D=B.count;for(let k=R,V=R+D;k<V;k+=3)_(n[k+0],n[k+1],n[k+2])}const S=new U,E=new U,C=new U,y=new U;function b(P){C.fromArray(r,P*3),y.copy(C);const z=l[P];S.copy(z),S.sub(C.multiplyScalar(C.dot(z))).normalize(),E.crossVectors(y,z);const R=E.dot(u[P])<0?-1:1;c[P*4]=S.x,c[P*4+1]=S.y,c[P*4+2]=S.z,c[P*4+3]=R}for(let P=0,z=v.length;P<z;++P){const B=v[P],R=B.start,D=B.count;for(let k=R,V=R+D;k<V;k+=3)b(n[k+0]),b(n[k+1]),b(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),f=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,f),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(f,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)se.fromBufferAttribute(t,e),se.normalize(),t.setXYZ(e,se.x,se.y,se.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let f=0,p=c.length;f<p;f++){a.isInterleavedBufferAttribute?m=c[f]*a.data.stride+a.offset:m=c[f]*u;for(let x=0;x<u;x++)d[g++]=l[m++]}return new xn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new ae,fn=new Lu,as=new Bs,Vl=new U,mr=new U,gr=new U,_r=new U,Ca=new U,os=new U,ls=new kt,cs=new kt,us=new kt,Pa=new U,hs=new U;class gn extends De{constructor(t=new Mn,e=new Iu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){os.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ca.fromBufferAttribute(h,t),o?os.addScaledVector(Ca,u):os.addScaledVector(Ca.sub(e),u))}e.add(os)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),fn.copy(t.ray).recast(t.near),as.containsPoint(fn.origin)===!1&&(fn.intersectSphere(as,Vl)===null||fn.origin.distanceToSquared(Vl)>(t.far-t.near)**2))||(Gl.copy(r).invert(),fn.copy(t.ray).applyMatrix4(Gl),n.boundingBox!==null&&fn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const f=h[m],p=i[f.materialIndex],x=Math.max(f.start,d.start),M=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let _=x,v=M;_<v;_+=3){const S=a.getX(_),E=a.getX(_+1),C=a.getX(_+2);o=fs(this,p,t,fn,l,u,S,E,C),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let f=m,p=g;f<p;f+=3){const x=a.getX(f),M=a.getX(f+1),_=a.getX(f+2);o=fs(this,i,t,fn,l,u,x,M,_),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const f=h[m],p=i[f.materialIndex],x=Math.max(f.start,d.start),M=Math.min(c.count,Math.min(f.start+f.count,d.start+d.count));for(let _=x,v=M;_<v;_+=3){const S=_,E=_+1,C=_+2;o=fs(this,p,t,fn,l,u,S,E,C),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let f=m,p=g;f<p;f+=3){const x=f,M=f+1,_=f+2;o=fs(this,i,t,fn,l,u,x,M,_),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}}}function qd(s,t,e,n,i,r,o,a){let c;if(t.side===Pe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Kn,a),c===null)return null;hs.copy(a),hs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(hs);return l<e.near||l>e.far?null:{distance:l,point:hs.clone(),object:s}}function fs(s,t,e,n,i,r,o,a,c){s.getVertexPosition(o,mr),s.getVertexPosition(a,gr),s.getVertexPosition(c,_r);const l=qd(s,t,e,n,mr,gr,_r,Pa);if(l){i&&(ls.fromBufferAttribute(i,o),cs.fromBufferAttribute(i,a),us.fromBufferAttribute(i,c),l.uv=Dn.getUV(Pa,mr,gr,_r,ls,cs,us,new kt)),r&&(ls.fromBufferAttribute(r,o),cs.fromBufferAttribute(r,a),us.fromBufferAttribute(r,c),l.uv2=Dn.getUV(Pa,mr,gr,_r,ls,cs,us,new kt));const u={a:o,b:a,c,normal:new U,materialIndex:0};Dn.getNormal(mr,gr,_r,u.normal),l.face=u}return l}class jr extends Mn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(h,2));function g(f,p,x,M,_,v,S,E,C,y,b){const P=v/C,z=S/y,B=v/2,R=S/2,D=E/2,k=C+1,V=y+1;let Y=0,G=0;const Z=new U;for(let $=0;$<V;$++){const it=$*z-R;for(let O=0;O<k;O++){const K=O*P-B;Z[f]=K*M,Z[p]=it*_,Z[x]=D,l.push(Z.x,Z.y,Z.z),Z[f]=0,Z[p]=0,Z[x]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(O/C),h.push(1-$/y),Y+=1}}for(let $=0;$<y;$++)for(let it=0;it<C;it++){const O=d+it+k*$,K=d+it+k*($+1),Q=d+(it+1)+k*($+1),F=d+(it+1)+k*$;c.push(O,K,F),c.push(K,Q,F),G+=6}a.addGroup(m,G,b),m+=G,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ye(s){const t={};for(let e=0;e<s.length;e++){const n=ar(s[e]);for(const i in n)t[i]=n[i]}return t}function Xd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nu(s){return s.getRenderTarget()===null&&s.outputEncoding===zt?dn:Br}const Yd={clone:ar,merge:ye};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=Xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zu extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class je extends zu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ll*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ua*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class Zd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new je(Fi,Oi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new je(Fi,Oi,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new je(Fi,Oi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new je(Fi,Oi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new je(Fi,Oi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new je(Fi,Oi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,d=t.xr.enabled;t.toneMapping=In,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Uu extends Le{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kd extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Uu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new jr(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:jn});r.uniforms.tEquirect.value=e;const o=new gn(i,r),a=e.minFilter;return e.minFilter===Ur&&(e.minFilter=Ye),new Zd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const La=new U,Jd=new U,Qd=new be;class li{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=La.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qd.getNormalMatrix(t),i=this.coplanarPoint(La).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Bs,ds=new U;class ku{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,o=new li){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],f=n[11],p=n[12],x=n[13],M=n[14],_=n[15];return e[0].setComponents(a-i,h-c,f-d,_-p).normalize(),e[1].setComponents(a+i,h+c,f+d,_+p).normalize(),e[2].setComponents(a+r,h+l,f+m,_+x).normalize(),e[3].setComponents(a-r,h-l,f-m,_-x).normalize(),e[4].setComponents(a-o,h-u,f-g,_-M).normalize(),e[5].setComponents(a+o,h+u,f+g,_+M).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ds.x=i.normal.x>0?t.max.x:t.min.x,ds.y=i.normal.y>0?t.max.y:t.min.y,ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tp(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,m=u.updateRange;s.bindBuffer(h,l),m.count===-1?s.bufferSubData(h,0,d):(e?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Ao extends Mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,d=e/c,m=[],g=[],f=[],p=[];for(let x=0;x<u;x++){const M=x*d-o;for(let _=0;_<l;_++){const v=_*h-r;g.push(v,-M,0),f.push(0,0,1),p.push(_/a),p.push(1-x/c)}}for(let x=0;x<c;x++)for(let M=0;M<a;M++){const _=M+l*x,v=M+l*(x+1),S=M+1+l*(x+1),E=M+1+l*x;m.push(_,v,E),m.push(v,S,E)}this.setIndex(m),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(f,3)),this.setAttribute("uv",new ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.width,t.height,t.widthSegments,t.heightSegments)}}var ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op="vec3 transformed = vec3( position );",lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Zp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,mm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ym=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$m=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Km=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mt={alphamap_fragment:ep,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:rp,aomap_fragment:sp,aomap_pars_fragment:ap,begin_vertex:op,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:up,bumpmap_pars_fragment:hp,clipping_planes_fragment:fp,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:_p,color_pars_vertex:xp,color_vertex:vp,common:yp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:bp,displacementmap_vertex:wp,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ep,encodings_fragment:Ap,encodings_pars_fragment:Cp,envmap_fragment:Pp,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:Hp,envmap_vertex:Ip,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:Np,fog_pars_fragment:zp,gradientmap_pars_fragment:Up,lightmap_fragment:kp,lightmap_pars_fragment:Bp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Xp,lights_phong_fragment:Yp,lights_phong_pars_fragment:jp,lights_physical_fragment:$p,lights_physical_pars_fragment:Zp,lights_fragment_begin:Kp,lights_fragment_maps:Jp,lights_fragment_end:Qp,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:rm,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphcolor_vertex:um,morphnormal_vertex:hm,morphtarget_pars_vertex:fm,morphtarget_vertex:dm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:xm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:bm,output_fragment:wm,packing:Tm,premultiplied_alpha_fragment:Em,project_vertex:Am,dithering_fragment:Cm,dithering_pars_fragment:Pm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Im,shadowmap_vertex:Fm,shadowmask_pars_fragment:Om,skinbase_vertex:Nm,skinning_pars_vertex:zm,skinning_vertex:Um,skinnormal_vertex:km,specularmap_fragment:Bm,specularmap_pars_fragment:Gm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Wm,transmission_fragment:Hm,transmission_pars_fragment:qm,uv_pars_fragment:Xm,uv_pars_vertex:Ym,uv_vertex:jm,uv2_pars_fragment:$m,uv2_pars_vertex:Zm,uv2_vertex:Km,worldpos_vertex:Jm,background_vert:Qm,background_frag:tg,backgroundCube_vert:eg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:rg,depth_vert:sg,depth_frag:ag,distanceRGBA_vert:og,distanceRGBA_frag:lg,equirect_vert:cg,equirect_frag:ug,linedashed_vert:hg,linedashed_frag:fg,meshbasic_vert:dg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:_g,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:yg,meshphong_vert:Mg,meshphong_frag:Sg,meshphysical_vert:bg,meshphysical_frag:wg,meshtoon_vert:Tg,meshtoon_frag:Eg,points_vert:Ag,points_frag:Cg,shadow_vert:Pg,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Rg},nt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new be},uv2Transform:{value:new be},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new be}}},pn={basic:{uniforms:ye([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:ye([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:ye([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:ye([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:ye([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:ye([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:ye([nt.points,nt.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:ye([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:ye([nt.common,nt.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:ye([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:ye([nt.sprite,nt.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:ye([nt.common,nt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:ye([nt.lights,nt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};pn.physical={uniforms:ye([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new kt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const ps={r:0,b:0,g:0};function Ig(s,t,e,n,i,r,o){const a=new Ut(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(p,x){let M=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_));const v=s.xr,S=v.getSession&&v.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?f(a,c):_&&_.isColor&&(f(_,1),M=!0),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ks)?(u===void 0&&(u=new gn(new jr(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ar(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_.encoding!==zt,(h!==_||d!==_.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,m=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new gn(new Ao(2,2),new Nn({name:"BackgroundMaterial",uniforms:ar(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=_.encoding!==zt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function f(p,x){p.getRGB(ps,Nu(s)),n.buffers.color.setClear(ps.r,ps.g,ps.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(p,x=1){a.set(p),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,f(a,c)},render:g}}function Fg(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,u=!1;function h(D,k,V,Y,G){let Z=!1;if(o){const $=f(Y,V,k);l!==$&&(l=$,m(l.object)),Z=x(D,Y,V,G),Z&&M(D,Y,V,G)}else{const $=k.wireframe===!0;(l.geometry!==Y.id||l.program!==V.id||l.wireframe!==$)&&(l.geometry=Y.id,l.program=V.id,l.wireframe=$,Z=!0)}G!==null&&e.update(G,34963),(Z||u)&&(u=!1,y(D,k,V,Y),G!==null&&s.bindBuffer(34963,e.get(G).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function f(D,k,V){const Y=V.wireframe===!0;let G=a[D.id];G===void 0&&(G={},a[D.id]=G);let Z=G[k.id];Z===void 0&&(Z={},G[k.id]=Z);let $=Z[Y];return $===void 0&&($=p(d()),Z[Y]=$),$}function p(D){const k=[],V=[],Y=[];for(let G=0;G<i;G++)k[G]=0,V[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:Y,object:D,attributes:{},index:null}}function x(D,k,V,Y){const G=l.attributes,Z=k.attributes;let $=0;const it=V.getAttributes();for(const O in it)if(it[O].location>=0){const Q=G[O];let F=Z[O];if(F===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(F=D.instanceColor)),Q===void 0||Q.attribute!==F||F&&Q.data!==F.data)return!0;$++}return l.attributesNum!==$||l.index!==Y}function M(D,k,V,Y){const G={},Z=k.attributes;let $=0;const it=V.getAttributes();for(const O in it)if(it[O].location>=0){let Q=Z[O];Q===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const F={};F.attribute=Q,Q&&Q.data&&(F.data=Q.data),G[O]=F,$++}l.attributes=G,l.attributesNum=$,l.index=Y}function _(){const D=l.newAttributes;for(let k=0,V=D.length;k<V;k++)D[k]=0}function v(D){S(D,0)}function S(D,k){const V=l.newAttributes,Y=l.enabledAttributes,G=l.attributeDivisors;V[D]=1,Y[D]===0&&(s.enableVertexAttribArray(D),Y[D]=1),G[D]!==k&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),G[D]=k)}function E(){const D=l.newAttributes,k=l.enabledAttributes;for(let V=0,Y=k.length;V<Y;V++)k[V]!==D[V]&&(s.disableVertexAttribArray(V),k[V]=0)}function C(D,k,V,Y,G,Z){n.isWebGL2===!0&&(V===5124||V===5125)?s.vertexAttribIPointer(D,k,V,G,Z):s.vertexAttribPointer(D,k,V,Y,G,Z)}function y(D,k,V,Y){if(n.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const G=Y.attributes,Z=V.getAttributes(),$=k.defaultAttributeValues;for(const it in Z){const O=Z[it];if(O.location>=0){let K=G[it];if(K===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const Q=K.normalized,F=K.itemSize,ct=e.get(K);if(ct===void 0)continue;const ot=ct.buffer,ut=ct.type,ht=ct.bytesPerElement;if(K.isInterleavedBufferAttribute){const _t=K.data,bt=_t.stride,Tt=K.offset;if(_t.isInstancedInterleavedBuffer){for(let Rt=0;Rt<O.locationSize;Rt++)S(O.location+Rt,_t.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Rt=0;Rt<O.locationSize;Rt++)v(O.location+Rt);s.bindBuffer(34962,ot);for(let Rt=0;Rt<O.locationSize;Rt++)C(O.location+Rt,F/O.locationSize,ut,Q,bt*ht,(Tt+F/O.locationSize*Rt)*ht)}else{if(K.isInstancedBufferAttribute){for(let _t=0;_t<O.locationSize;_t++)S(O.location+_t,K.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _t=0;_t<O.locationSize;_t++)v(O.location+_t);s.bindBuffer(34962,ot);for(let _t=0;_t<O.locationSize;_t++)C(O.location+_t,F/O.locationSize,ut,Q,F*ht,F/O.locationSize*_t*ht)}}else if($!==void 0){const Q=$[it];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(O.location,Q);break;case 3:s.vertexAttrib3fv(O.location,Q);break;case 4:s.vertexAttrib4fv(O.location,Q);break;default:s.vertexAttrib1fv(O.location,Q)}}}}E()}function b(){B();for(const D in a){const k=a[D];for(const V in k){const Y=k[V];for(const G in Y)g(Y[G].object),delete Y[G];delete k[V]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;const k=a[D.id];for(const V in k){const Y=k[V];for(const G in Y)g(Y[G].object),delete Y[G];delete k[V]}delete a[D.id]}function z(D){for(const k in a){const V=a[k];if(V[D.id]===void 0)continue;const Y=V[D.id];for(const G in Y)g(Y[G].object),delete Y[G];delete V[D.id]}}function B(){R(),u=!0,l!==c&&(l=c,m(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:v,disableUnusedAttributes:E}}function Og(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,u,h),e.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Ng(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),f=s.getParameter(34921),p=s.getParameter(36347),x=s.getParameter(36348),M=s.getParameter(36349),_=d>0,v=o||t.has("OES_texture_float"),S=_&&v,E=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:E}}function zg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new li,a=new be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,f=h.clipIntersection,p=h.clipShadows,x=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,_=M*4;let v=x.clippingState||null;c.value=v,v=u(g,d,_,m);for(let S=0;S!==_;++S)v[S]=e[S];x.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,g){const f=h!==null?h.length:0;let p=null;if(f!==0){if(p=c.value,g!==!0||p===null){const x=m+f*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<x)&&(p=new Float32Array(x));for(let _=0,v=m;_!==f;++_,v+=4)o.copy(h[_]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function Ug(s){let t=new WeakMap;function e(o,a){return a===eo?o.mapping=ir:a===no&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===eo||a===no)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Kd(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class kg extends zu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wi=4,Wl=[.125,.215,.35,.446,.526,.582],ui=20,Da=new kg,Hl=new Ut;let Ra=null;const ci=(1+Math.sqrt(5))/2,zi=1/ci,ql=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ci,zi),new U(0,ci,-zi),new U(zi,0,ci),new U(-zi,0,ci),new U(ci,zi,0),new U(-ci,zi,0)];class Xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ra=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ra),t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ra=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:kr,format:an,encoding:yi,depthBuffer:!1},i=Yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bg(r)),this._blurMaterial=Gg(r,t,e)}return i}_compileMaterial(t){const e=new gn(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,i){const a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Hl),u.toneMapping=In,u.autoClear=!1;const m=new Iu({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new gn(new jr,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(Hl),f=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):M===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const _=this._cubeSize;ms(i,M*_,x>2?_:0,_,_),u.setRenderTarget(i),f&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ir||t.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ms(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ql[(i-1)%ql.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new gn(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ui-1),f=r/g,p=isFinite(r)?1+Math.floor(u*f):ui;p>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const x=[];let M=0;for(let C=0;C<ui;++C){const y=C/f,b=Math.exp(-y*y/2);x.push(b),C===0?M+=b:C<p&&(M+=2*b)}for(let C=0;C<x.length;C++)x[C]=x[C]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const v=this._sizeLods[i],S=3*v*(i>_-Wi?i-_+Wi:0),E=4*(this._cubeSize-v);ms(e,S,E,3*v,2*v),c.setRenderTarget(e),c.render(h,Da)}}function Bg(s){const t=[],e=[],n=[];let i=s;const r=s-Wi+1+Wl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Wi?c=Wl[o-s+Wi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,f=3,p=2,x=1,M=new Float32Array(f*g*m),_=new Float32Array(p*g*m),v=new Float32Array(x*g*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,y=E>2?0:-1,b=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];M.set(b,f*g*E),_.set(d,p*g*E);const P=[E,E,E,E,E,E];v.set(P,x*g*E)}const S=new Mn;S.setAttribute("position",new xn(M,f)),S.setAttribute("uv",new xn(_,p)),S.setAttribute("faceIndex",new xn(v,x)),t.push(S),i>Wi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yl(s,t,e){const n=new Mi(s,t,e);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Gg(s,t,e){const n=new Float32Array(ui),i=new U(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function jl(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function $l(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===eo||c===no,u=c===ir||c===rr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Xl(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Xl(s));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hg(s,t,e,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const f=m[g];for(let p=0,x=f.length;p<x;p++)t.update(f[p],34962)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let f=0;if(m!==null){const M=m.array;f=m.version;for(let _=0,v=M.length;_<v;_+=3){const S=M[_+0],E=M[_+1],C=M[_+2];d.push(S,E,E,C,C,S)}}else{const M=g.array;f=g.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const S=_+0,E=_+1,C=_+2;d.push(S,E,E,C,C,S)}}const p=new(Eu(d)?Ou:Fu)(d,1);p.version=f;const x=r.get(h);x&&t.remove(x),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function qg(s,t,e,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){s.drawElements(r,m,a,d*c),e.update(m,r,1)}function h(d,m,g){if(g===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,a,d*c,g),e.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Xg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Yg(s,t){return s[0]-t[0]}function jg(s,t){return Math.abs(t[1])-Math.abs(s[1])}function $g(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ce,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==f){let k=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),S===!0&&(b=3);let P=u.attributes.position.count*b,z=1;P>t.maxTextureSize&&(z=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const B=new Float32Array(P*z*4*f),R=new Pu(B,P,z,f);R.type=di,R.needsUpdate=!0;const D=b*4;for(let V=0;V<f;V++){const Y=E[V],G=C[V],Z=y[V],$=P*z*4*V;for(let it=0;it<Y.count;it++){const O=it*D;_===!0&&(o.fromBufferAttribute(Y,it),B[$+O+0]=o.x,B[$+O+1]=o.y,B[$+O+2]=o.z,B[$+O+3]=0),v===!0&&(o.fromBufferAttribute(G,it),B[$+O+4]=o.x,B[$+O+5]=o.y,B[$+O+6]=o.z,B[$+O+7]=0),S===!0&&(o.fromBufferAttribute(Z,it),B[$+O+8]=o.x,B[$+O+9]=o.y,B[$+O+10]=o.z,B[$+O+11]=Z.itemSize===4?o.w:1)}}p={count:f,texture:R,size:new kt(P,z)},r.set(u,p),u.addEventListener("dispose",k)}let x=0;for(let _=0;_<d.length;_++)x+=d[_];const M=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let f=n[u.id];if(f===void 0||f.length!==g){f=[];for(let v=0;v<g;v++)f[v]=[v,0];n[u.id]=f}for(let v=0;v<g;v++){const S=f[v];S[0]=v,S[1]=d[v]}f.sort(jg);for(let v=0;v<8;v++)v<g&&f[v][1]?(a[v][0]=f[v][0],a[v][1]=f[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Yg);const p=u.morphAttributes.position,x=u.morphAttributes.normal;let M=0;for(let v=0;v<8;v++){const S=a[v],E=S[0],C=S[1];E!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+v)!==p[E]&&u.setAttribute("morphTarget"+v,p[E]),x&&u.getAttribute("morphNormal"+v)!==x[E]&&u.setAttribute("morphNormal"+v,x[E]),i[v]=C,M+=C):(p&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),x&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const _=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",_),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Zg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);return i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Gu=new Le,Vu=new Pu,Wu=new Od,Hu=new Uu,Zl=[],Kl=[],Jl=new Float32Array(16),Ql=new Float32Array(9),tc=new Float32Array(4);function lr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Zl[i];if(r===void 0&&(r=new Float32Array(i),Zl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function te(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Vs(s,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Kg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;s.uniform2fv(this.addr,t),ee(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(te(e,t))return;s.uniform3fv(this.addr,t),ee(e,t)}}function t_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;s.uniform4fv(this.addr,t),ee(e,t)}}function e_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;tc.set(n),s.uniformMatrix2fv(this.addr,!1,tc),ee(e,n)}}function n_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;Ql.set(n),s.uniformMatrix3fv(this.addr,!1,Ql),ee(e,n)}}function i_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;Jl.set(n),s.uniformMatrix4fv(this.addr,!1,Jl),ee(e,n)}}function r_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function s_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;s.uniform2iv(this.addr,t),ee(e,t)}}function a_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;s.uniform3iv(this.addr,t),ee(e,t)}}function o_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;s.uniform4iv(this.addr,t),ee(e,t)}}function l_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function c_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;s.uniform2uiv(this.addr,t),ee(e,t)}}function u_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;s.uniform3uiv(this.addr,t),ee(e,t)}}function h_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;s.uniform4uiv(this.addr,t),ee(e,t)}}function f_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Gu,i)}function d_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Wu,i)}function p_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hu,i)}function m_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vu,i)}function g_(s){switch(s){case 5126:return Kg;case 35664:return Jg;case 35665:return Qg;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return r_;case 35667:case 35671:return s_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return l_;case 36294:return c_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(s,t){s.uniform1fv(this.addr,t)}function x_(s,t){const e=lr(t,this.size,2);s.uniform2fv(this.addr,e)}function v_(s,t){const e=lr(t,this.size,3);s.uniform3fv(this.addr,e)}function y_(s,t){const e=lr(t,this.size,4);s.uniform4fv(this.addr,e)}function M_(s,t){const e=lr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function S_(s,t){const e=lr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function b_(s,t){const e=lr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function w_(s,t){s.uniform1iv(this.addr,t)}function T_(s,t){s.uniform2iv(this.addr,t)}function E_(s,t){s.uniform3iv(this.addr,t)}function A_(s,t){s.uniform4iv(this.addr,t)}function C_(s,t){s.uniform1uiv(this.addr,t)}function P_(s,t){s.uniform2uiv(this.addr,t)}function L_(s,t){s.uniform3uiv(this.addr,t)}function D_(s,t){s.uniform4uiv(this.addr,t)}function R_(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);te(n,r)||(s.uniform1iv(this.addr,r),ee(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Gu,r[o])}function I_(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);te(n,r)||(s.uniform1iv(this.addr,r),ee(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Wu,r[o])}function F_(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);te(n,r)||(s.uniform1iv(this.addr,r),ee(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Hu,r[o])}function O_(s,t,e){const n=this.cache,i=t.length,r=Vs(e,i);te(n,r)||(s.uniform1iv(this.addr,r),ee(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Vu,r[o])}function N_(s){switch(s){case 5126:return __;case 35664:return x_;case 35665:return v_;case 35666:return y_;case 35674:return M_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return w_;case 35667:case 35671:return T_;case 35668:case 35672:return E_;case 35669:case 35673:return A_;case 5125:return C_;case 36294:return P_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}class z_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=g_(e.type)}}class U_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=N_(e.type)}}class k_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function ec(s,t){s.seq.push(t),s.map[t.id]=t}function B_(s,t,e){const n=s.name,i=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),o=Ia.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ec(e,l===void 0?new z_(a,s,t):new U_(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new k_(a),ec(e,h)),e=h}}}class Es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);B_(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function nc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let G_=0;function V_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function W_(s){switch(s){case yi:return["Linear","( value )"];case zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function ic(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+V_(s.getShaderSource(t),o)}else return i}function H_(s,t){const e=W_(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function q_(s,t){let e;switch(t){case td:e="Linear";break;case ed:e="Reinhard";break;case nd:e="OptimizedCineon";break;case id:e="ACESFilmic";break;case rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function X_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function Y_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function j_(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Mr(s){return s!==""}function rc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(s){return s.replace($_,Z_)}function Z_(s,t){const e=Mt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ao(e)}const K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(s){return s.replace(K_,J_)}function J_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function oc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Q_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yr&&(t="SHADOWMAP_TYPE_VSM"),t}function t0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ir:case rr:t="ENVMAP_TYPE_CUBE";break;case ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function n0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Su:t="ENVMAP_BLENDING_MULTIPLY";break;case Jf:t="ENVMAP_BLENDING_MIX";break;case Qf:t="ENVMAP_BLENDING_ADD";break}return t}function i0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function r0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Q_(e),l=t0(e),u=e0(e),h=n0(e),d=i0(e),m=e.isWebGL2?"":X_(e),g=Y_(r),f=i.createProgram();let p,x,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Mr).join(`
`),p.length>0&&(p+=`
`),x=[m,g].filter(Mr).join(`
`),x.length>0&&(x+=`
`)):(p=[oc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),x=[m,oc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Mt.tonemapping_pars_fragment:"",e.toneMapping!==In?q_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Mt.encodings_pars_fragment,H_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),o=ao(o),o=rc(o,e),o=sc(o,e),a=ao(a),a=rc(a,e),a=sc(a,e),o=ac(o),a=ac(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=M+p+o,v=M+x+a,S=nc(i,35633,_),E=nc(i,35632,v);if(i.attachShader(f,S),i.attachShader(f,E),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),s.debug.checkShaderErrors){const b=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(S).trim(),z=i.getShaderInfoLog(E).trim();let B=!0,R=!0;if(i.getProgramParameter(f,35714)===!1){B=!1;const D=ic(i,S,"vertex"),k=ic(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+b+`
`+D+`
`+k)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(P===""||z==="")&&(R=!1);R&&(this.diagnostics={runnable:B,programLog:b,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:x}})}i.deleteShader(S),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new Es(i,f)),C};let y;return this.getAttributes=function(){return y===void 0&&(y=j_(i,f)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=G_++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=E,this}let s0=0;class a0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new o0(t),e.set(t,n)),n}}class o0{constructor(t){this.id=s0++,this.code=t,this.usedTimes=0}}function l0(s,t,e,n,i,r,o){const a=new Du,c=new a0,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y,b,P,z,B){const R=z.fog,D=B.geometry,k=y.isMeshStandardMaterial?z.environment:null,V=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),Y=V&&V.mapping===ks?V.image.height:null,G=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,$=Z!==void 0?Z.length:0;let it=0;D.morphAttributes.position!==void 0&&(it=1),D.morphAttributes.normal!==void 0&&(it=2),D.morphAttributes.color!==void 0&&(it=3);let O,K,Q,F;if(G){const bt=pn[G];O=bt.vertexShader,K=bt.fragmentShader}else O=y.vertexShader,K=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),F=c.getFragmentShaderID(y);const ct=s.getRenderTarget(),ot=y.alphaTest>0,ut=y.clearcoat>0,ht=y.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:y.type,vertexShader:O,fragmentShader:K,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:F,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:d,outputEncoding:ct===null?s.outputEncoding:ct.isXRRenderTarget===!0?ct.texture.encoding:yi,map:!!y.map,matcap:!!y.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:Y,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===wd,tangentSpaceNormalMap:y.normalMapType===bd,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===zt,clearcoat:ut,clearcoatMap:ut&&!!y.clearcoatMap,clearcoatRoughnessMap:ut&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ut&&!!y.clearcoatNormalMap,iridescence:ht,iridescenceMap:ht&&!!y.iridescenceMap,iridescenceThicknessMap:ht&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Yi,alphaMap:!!y.alphaMap,alphaTest:ot,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:it,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:In,useLegacyLights:s.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Hn,flipSided:y.side===Pe,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(x(b,y),M(b,y),b.push(s.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.specularIntensityMap&&a.enable(15),b.specularColorMap&&a.enable(16),b.transmission&&a.enable(17),b.transmissionMap&&a.enable(18),b.thicknessMap&&a.enable(19),b.sheen&&a.enable(20),b.sheenColorMap&&a.enable(21),b.sheenRoughnessMap&&a.enable(22),b.decodeVideoTexture&&a.enable(23),b.opaque&&a.enable(24),y.push(a.mask)}function _(y){const b=g[y.type];let P;if(b){const z=pn[b];P=Yd.clone(z.uniforms)}else P=y.uniforms;return P}function v(y,b){let P;for(let z=0,B=l.length;z<B;z++){const R=l[z];if(R.cacheKey===b){P=R,++P.usedTimes;break}}return P===void 0&&(P=new r0(s,b,y,r),l.push(P)),P}function S(y){if(--y.usedTimes===0){const b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),y.destroy()}}function E(y){c.remove(y)}function C(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:_,acquireProgram:v,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:C}}function c0(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function u0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function lc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,m,g,f,p){let x=s[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:f,group:p},s[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=f,x.group=p),t++,x}function a(h,d,m,g,f,p){const x=o(h,d,m,g,f,p);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):e.push(x)}function c(h,d,m,g,f,p){const x=o(h,d,m,g,f,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):e.unshift(x)}function l(h,d){e.length>1&&e.sort(h||u0),n.length>1&&n.sort(d||lc),i.length>1&&i.sort(d||lc)}function u(){for(let h=t,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function h0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new cc,s.set(n,[o])):i>=r.length?(o=new cc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function f0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ut};break;case"SpotLight":e={position:new U,direction:new U,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function d0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let p0=0;function m0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function g0(s,t){const e=new f0,n=d0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,o=new ae,a=new ae;function c(u,h){let d=0,m=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,x=0,M=0,_=0,v=0,S=0,E=0,C=0,y=0;u.sort(m0);const b=h===!0?Math.PI:1;for(let z=0,B=u.length;z<B;z++){const R=u[z],D=R.color,k=R.intensity,V=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=D.r*k*b,m+=D.g*k*b,g+=D.b*k*b;else if(R.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],k);else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){const Z=R.shadow,$=n.get(R);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=R.shadow.matrix,v++}i.directional[f]=G,f++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(D).multiplyScalar(k*b),G.distance=V,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[x]=G;const Z=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,Z.updateMatrices(R),R.castShadow&&y++),i.spotLightMatrix[x]=Z.matrix,R.castShadow){const $=n.get(R);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=Y,E++}x++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(D).multiplyScalar(k),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=G,M++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*b),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Z=R.shadow,$=n.get(R);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[p]=$,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=R.shadow.matrix,S++}i.point[p]=G,p++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(k*b),G.groundColor.copy(R.groundColor).multiplyScalar(k*b),i.hemi[_]=G,_++}}M>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==M||P.hemiLength!==_||P.numDirectionalShadows!==v||P.numPointShadows!==S||P.numSpotShadows!==E||P.numSpotMaps!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=M,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+C-y,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=y,P.directionalLength=f,P.pointLength=p,P.spotLength=x,P.rectAreaLength=M,P.hemiLength=_,P.numDirectionalShadows=v,P.numPointShadows=S,P.numSpotShadows=E,P.numSpotMaps=C,i.version=p0++)}function l(u,h){let d=0,m=0,g=0,f=0,p=0;const x=h.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){const v=u[M];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),d++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),g++}else if(v.isRectAreaLight){const S=i.rectArea[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(x),a.identity(),o.copy(v.matrixWorld),o.premultiply(x),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),f++}else if(v.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(x),m++}else if(v.isHemisphereLight){const S=i.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(x),p++}}}return{setup:c,setupView:l,state:i}}function uc(s,t){const e=new g0(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _0(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new uc(s,t),e.set(r,[c])):o>=a.length?(c=new uc(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class x0 extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class v0 extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S0(s,t,e){let n=new ku;const i=new kt,r=new kt,o=new ce,a=new x0({depthPacking:Sd}),c=new v0,l={},u=e.maxTextureSize,h={[Kn]:Pe,[Pe]:Kn,[Hn]:Hn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:y0,fragmentShader:M0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new gn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu,this.render=function(v,S,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const C=s.getRenderTarget(),y=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),P=s.state;P.setBlending(jn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let z=0,B=v.length;z<B;z++){const R=v[z],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const k=D.getFrameExtents();if(i.multiply(k),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/k.x),i.x=r.x*k.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/k.y),i.y=r.y*k.y,D.mapSize.y=r.y)),D.map===null){const Y=this.type!==yr?{minFilter:Se,magFilter:Se}:{};D.map=new Mi(i.x,i.y,Y),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const V=D.getViewportCount();for(let Y=0;Y<V;Y++){const G=D.getViewport(Y);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),P.viewport(o),D.updateMatrices(R,Y),n=D.getFrustum(),_(S,E,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===yr&&x(D,E),D.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(C,y,b)};function x(v,S){const E=t.update(f);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Mi(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(S,null,E,d,f,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(S,null,E,m,f,null)}function M(v,S,E,C,y,b){let P=null;const z=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(z!==void 0)P=z;else if(P=E.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const B=P.uuid,R=S.uuid;let D=l[B];D===void 0&&(D={},l[B]=D);let k=D[R];k===void 0&&(k=P.clone(),D[R]=k),P=k}return P.visible=S.visible,P.wireframe=S.wireframe,b===yr?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:h[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=C,P.farDistance=y),P}function _(v,S,E,C,y){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===yr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const z=t.update(v),B=v.material;if(Array.isArray(B)){const R=z.groups;for(let D=0,k=R.length;D<k;D++){const V=R[D],Y=B[V.materialIndex];if(Y&&Y.visible){const G=M(v,Y,C,E.near,E.far,y);s.renderBufferDirect(E,null,z,G,v,V)}}}else if(B.visible){const R=M(v,B,C,E.near,E.far,y);s.renderBufferDirect(E,null,z,R,v,null)}}const P=v.children;for(let z=0,B=P.length;z<B;z++)_(P[z],S,E,C,y)}}function b0(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const H=new ce;let J=null;const st=new ce(0,0,0,0);return{setMask:function(lt){J!==lt&&!L&&(s.colorMask(lt,lt,lt,lt),J=lt)},setLocked:function(lt){L=lt},setClear:function(lt,Nt,ie,_e,un){un===!0&&(lt*=_e,Nt*=_e,ie*=_e),H.set(lt,Nt,ie,_e),st.equals(H)===!1&&(s.clearColor(lt,Nt,ie,_e),st.copy(H))},reset:function(){L=!1,J=null,st.set(-1,0,0,0)}}}function r(){let L=!1,H=null,J=null,st=null;return{setTest:function(lt){lt?ot(2929):ut(2929)},setMask:function(lt){H!==lt&&!L&&(s.depthMask(lt),H=lt)},setFunc:function(lt){if(J!==lt){switch(lt){case qf:s.depthFunc(512);break;case Xf:s.depthFunc(519);break;case Yf:s.depthFunc(513);break;case to:s.depthFunc(515);break;case jf:s.depthFunc(514);break;case $f:s.depthFunc(518);break;case Zf:s.depthFunc(516);break;case Kf:s.depthFunc(517);break;default:s.depthFunc(515)}J=lt}},setLocked:function(lt){L=lt},setClear:function(lt){st!==lt&&(s.clearDepth(lt),st=lt)},reset:function(){L=!1,H=null,J=null,st=null}}}function o(){let L=!1,H=null,J=null,st=null,lt=null,Nt=null,ie=null,_e=null,un=null;return{setTest:function(Xt){L||(Xt?ot(2960):ut(2960))},setMask:function(Xt){H!==Xt&&!L&&(s.stencilMask(Xt),H=Xt)},setFunc:function(Xt,We,hn){(J!==Xt||st!==We||lt!==hn)&&(s.stencilFunc(Xt,We,hn),J=Xt,st=We,lt=hn)},setOp:function(Xt,We,hn){(Nt!==Xt||ie!==We||_e!==hn)&&(s.stencilOp(Xt,We,hn),Nt=Xt,ie=We,_e=hn)},setLocked:function(Xt){L=Xt},setClear:function(Xt){un!==Xt&&(s.clearStencil(Xt),un=Xt)},reset:function(){L=!1,H=null,J=null,st=null,lt=null,Nt=null,ie=null,_e=null,un=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,f=[],p=null,x=!1,M=null,_=null,v=null,S=null,E=null,C=null,y=null,b=!1,P=null,z=null,B=null,R=null,D=null;const k=s.getParameter(35661);let V=!1,Y=0;const G=s.getParameter(7938);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=Y>=2);let Z=null,$={};const it=s.getParameter(3088),O=s.getParameter(2978),K=new ce().fromArray(it),Q=new ce().fromArray(O);function F(L,H,J){const st=new Uint8Array(4),lt=s.createTexture();s.bindTexture(L,lt),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let Nt=0;Nt<J;Nt++)s.texImage2D(H+Nt,0,6408,1,1,0,6408,5121,st);return lt}const ct={};ct[3553]=F(3553,3553,1),ct[34067]=F(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ot(2929),c.setFunc(to),we(!1),ge(Qo),ot(2884),me(jn);function ot(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function ut(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function ht(L,H){return m[L]!==H?(s.bindFramebuffer(L,H),m[L]=H,n&&(L===36009&&(m[36160]=H),L===36160&&(m[36009]=H)),!0):!1}function _t(L,H){let J=f,st=!1;if(L)if(J=g.get(H),J===void 0&&(J=[],g.set(H,J)),L.isWebGLMultipleRenderTargets){const lt=L.texture;if(J.length!==lt.length||J[0]!==36064){for(let Nt=0,ie=lt.length;Nt<ie;Nt++)J[Nt]=36064+Nt;J.length=lt.length,st=!0}}else J[0]!==36064&&(J[0]=36064,st=!0);else J[0]!==1029&&(J[0]=1029,st=!0);st&&(e.isWebGL2?s.drawBuffers(J):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function bt(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const Tt={[ki]:32774,[Ff]:32778,[Of]:32779};if(n)Tt[nl]=32775,Tt[il]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(Tt[nl]=L.MIN_EXT,Tt[il]=L.MAX_EXT)}const Rt={[Nf]:0,[zf]:1,[Uf]:768,[yu]:770,[Hf]:776,[Vf]:774,[Bf]:772,[kf]:769,[Mu]:771,[Wf]:775,[Gf]:773};function me(L,H,J,st,lt,Nt,ie,_e){if(L===jn){x===!0&&(ut(3042),x=!1);return}if(x===!1&&(ot(3042),x=!0),L!==If){if(L!==M||_e!==b){if((_!==ki||E!==ki)&&(s.blendEquation(32774),_=ki,E=ki),_e)switch(L){case Yi:s.blendFuncSeparate(1,771,1,771);break;case Qa:s.blendFunc(1,1);break;case tl:s.blendFuncSeparate(0,769,0,1);break;case el:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:s.blendFuncSeparate(770,771,1,771);break;case Qa:s.blendFunc(770,1);break;case tl:s.blendFuncSeparate(0,769,0,1);break;case el:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,S=null,C=null,y=null,M=L,b=_e}return}lt=lt||H,Nt=Nt||J,ie=ie||st,(H!==_||lt!==E)&&(s.blendEquationSeparate(Tt[H],Tt[lt]),_=H,E=lt),(J!==v||st!==S||Nt!==C||ie!==y)&&(s.blendFuncSeparate(Rt[J],Rt[st],Rt[Nt],Rt[ie]),v=J,S=st,C=Nt,y=ie),M=L,b=!1}function Qe(L,H){L.side===Hn?ut(2884):ot(2884);let J=L.side===Pe;H&&(J=!J),we(J),L.blending===Yi&&L.transparent===!1?me(jn):me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const st=L.stencilWrite;l.setTest(st),st&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ot(32926):ut(32926)}function we(L){P!==L&&(L?s.frontFace(2304):s.frontFace(2305),P=L)}function ge(L){L!==Lf?(ot(2884),L!==z&&(L===Qo?s.cullFace(1029):L===Df?s.cullFace(1028):s.cullFace(1032))):ut(2884),z=L}function Ht(L){L!==B&&(V&&s.lineWidth(L),B=L)}function Bt(L,H,J){L?(ot(32823),(R!==H||D!==J)&&(s.polygonOffset(H,J),R=H,D=J)):ut(32823)}function cn(L){L?ot(3089):ut(3089)}function tn(L){L===void 0&&(L=33984+k-1),Z!==L&&(s.activeTexture(L),Z=L)}function A(L,H,J){J===void 0&&(Z===null?J=33984+k-1:J=Z);let st=$[J];st===void 0&&(st={type:void 0,texture:void 0},$[J]=st),(st.type!==L||st.texture!==H)&&(Z!==J&&(s.activeTexture(J),Z=J),s.bindTexture(L,H||ct[L]),st.type=L,st.texture=H)}function w(){const L=$[Z];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(L){K.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function dt(L){Q.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function Lt(L,H){let J=h.get(H);J===void 0&&(J=new WeakMap,h.set(H,J));let st=J.get(L);st===void 0&&(st=s.getUniformBlockIndex(H,L.name),J.set(L,st))}function Gt(L,H){const st=h.get(H).get(L);u.get(H)!==st&&(s.uniformBlockBinding(H,st,L.__bindingPointIndex),u.set(H,st))}function ne(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Z=null,$={},m={},g=new WeakMap,f=[],p=null,x=!1,M=null,_=null,v=null,S=null,E=null,C=null,y=null,b=!1,P=null,z=null,B=null,R=null,D=null,K.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ot,disable:ut,bindFramebuffer:ht,drawBuffers:_t,useProgram:bt,setBlending:me,setMaterial:Qe,setFlipSided:we,setCullFace:ge,setLineWidth:Ht,setPolygonOffset:Bt,setScissorTest:cn,activeTexture:tn,bindTexture:A,unbindTexture:w,compressedTexImage2D:q,compressedTexImage3D:tt,texImage2D:ft,texImage3D:vt,updateUBOMapping:Lt,uniformBlockBinding:Gt,texStorage2D:j,texStorage3D:xt,texSubImage2D:et,texSubImage3D:rt,compressedTexSubImage2D:pt,compressedTexSubImage3D:at,scissor:gt,viewport:dt,reset:ne}}function w0(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,w){return x?new OffscreenCanvas(A,w):Gr("canvas")}function _(A,w,q,tt){let et=1;if((A.width>tt||A.height>tt)&&(et=tt/Math.max(A.width,A.height)),et<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const rt=w?Ad:Math.floor,pt=rt(et*A.width),at=rt(et*A.height);f===void 0&&(f=M(pt,at));const j=q?M(pt,at):f;return j.width=pt,j.height=at,j.getContext("2d").drawImage(A,0,0,pt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+pt+"x"+at+")."),j}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return Dl(A.width)&&Dl(A.height)}function S(A){return a?!1:A.wrapS!==sn||A.wrapT!==sn||A.minFilter!==Se&&A.minFilter!==Ye}function E(A,w){return A.generateMipmaps&&w&&A.minFilter!==Se&&A.minFilter!==Ye}function C(A){s.generateMipmap(A)}function y(A,w,q,tt,et=!1){if(a===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=w;return w===6403&&(q===5126&&(rt=33326),q===5131&&(rt=33325),q===5121&&(rt=33321)),w===33319&&(q===5126&&(rt=33328),q===5131&&(rt=33327),q===5121&&(rt=33323)),w===6408&&(q===5126&&(rt=34836),q===5131&&(rt=34842),q===5121&&(rt=tt===zt&&et===!1?35907:32856),q===32819&&(rt=32854),q===32820&&(rt=32855)),(rt===33325||rt===33326||rt===33327||rt===33328||rt===34842||rt===34836)&&t.get("EXT_color_buffer_float"),rt}function b(A,w,q){return E(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Se&&A.minFilter!==Ye?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){return A===Se||A===rl||A===ia?9728:9729}function z(A){const w=A.target;w.removeEventListener("dispose",z),R(w),w.isVideoTexture&&g.delete(w)}function B(A){const w=A.target;w.removeEventListener("dispose",B),k(w)}function R(A){const w=n.get(A);if(w.__webglInit===void 0)return;const q=A.source,tt=p.get(q);if(tt){const et=tt[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&D(A),Object.keys(tt).length===0&&p.delete(q)}n.remove(A)}function D(A){const w=n.get(A);s.deleteTexture(w.__webglTexture);const q=A.source,tt=p.get(q);delete tt[w.__cacheKey],o.memory.textures--}function k(A){const w=A.texture,q=n.get(A),tt=n.get(w);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)s.deleteFramebuffer(q.__webglFramebuffer[et]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[et]);else{if(s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let et=0;et<q.__webglColorRenderbuffer.length;et++)q.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[et]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let et=0,rt=w.length;et<rt;et++){const pt=n.get(w[et]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(w[et])}n.remove(w),n.remove(A)}let V=0;function Y(){V=0}function G(){const A=V;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),V+=1,A}function Z(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function $(A,w){const q=n.get(A);if(A.isVideoTexture&&cn(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(q,A,w);return}}e.bindTexture(3553,q.__webglTexture,33984+w)}function it(A,w){const q=n.get(A);if(A.version>0&&q.__version!==A.version){ut(q,A,w);return}e.bindTexture(35866,q.__webglTexture,33984+w)}function O(A,w){const q=n.get(A);if(A.version>0&&q.__version!==A.version){ut(q,A,w);return}e.bindTexture(32879,q.__webglTexture,33984+w)}function K(A,w){const q=n.get(A);if(A.version>0&&q.__version!==A.version){ht(q,A,w);return}e.bindTexture(34067,q.__webglTexture,33984+w)}const Q={[io]:10497,[sn]:33071,[ro]:33648},F={[Se]:9728,[rl]:9984,[ia]:9986,[Ye]:9729,[sd]:9985,[Ur]:9987};function ct(A,w,q){if(q?(s.texParameteri(A,10242,Q[w.wrapS]),s.texParameteri(A,10243,Q[w.wrapT]),(A===32879||A===35866)&&s.texParameteri(A,32882,Q[w.wrapR]),s.texParameteri(A,10240,F[w.magFilter]),s.texParameteri(A,10241,F[w.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),(A===32879||A===35866)&&s.texParameteri(A,32882,33071),(w.wrapS!==sn||w.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,P(w.magFilter)),s.texParameteri(A,10241,P(w.minFilter)),w.minFilter!==Se&&w.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Se||w.minFilter!==ia&&w.minFilter!==Ur||w.type===di&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===kr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function ot(A,w){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",z));const tt=w.source;let et=p.get(tt);et===void 0&&(et={},p.set(tt,et));const rt=Z(w);if(rt!==A.__cacheKey){et[rt]===void 0&&(et[rt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),et[rt].usedTimes++;const pt=et[A.__cacheKey];pt!==void 0&&(et[A.__cacheKey].usedTimes--,pt.usedTimes===0&&D(w)),A.__cacheKey=rt,A.__webglTexture=et[rt].texture}return q}function ut(A,w,q){let tt=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=35866),w.isData3DTexture&&(tt=32879);const et=ot(A,w),rt=w.source;e.bindTexture(tt,A.__webglTexture,33984+q);const pt=n.get(rt);if(rt.version!==pt.__version||et===!0){e.activeTexture(33984+q),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const at=S(w)&&v(w.image)===!1;let j=_(w.image,at,!1,u);j=tn(w,j);const xt=v(j)||a,ft=r.convert(w.format,w.encoding);let vt=r.convert(w.type),gt=y(w.internalFormat,ft,vt,w.encoding,w.isVideoTexture);ct(tt,w,xt);let dt;const Lt=w.mipmaps,Gt=a&&w.isVideoTexture!==!0,ne=pt.__version===void 0||et===!0,L=b(w,j,xt);if(w.isDepthTexture)gt=6402,a?w.type===di?gt=36012:w.type===fi?gt=33190:w.type===ji?gt=35056:gt=33189:w.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_i&&gt===6402&&w.type!==wu&&w.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=fi,vt=r.convert(w.type)),w.format===sr&&gt===6402&&(gt=34041,w.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ji,vt=r.convert(w.type))),ne&&(Gt?e.texStorage2D(3553,1,gt,j.width,j.height):e.texImage2D(3553,0,gt,j.width,j.height,0,ft,vt,null));else if(w.isDataTexture)if(Lt.length>0&&xt){Gt&&ne&&e.texStorage2D(3553,L,gt,Lt[0].width,Lt[0].height);for(let H=0,J=Lt.length;H<J;H++)dt=Lt[H],Gt?e.texSubImage2D(3553,H,0,0,dt.width,dt.height,ft,vt,dt.data):e.texImage2D(3553,H,gt,dt.width,dt.height,0,ft,vt,dt.data);w.generateMipmaps=!1}else Gt?(ne&&e.texStorage2D(3553,L,gt,j.width,j.height),e.texSubImage2D(3553,0,0,0,j.width,j.height,ft,vt,j.data)):e.texImage2D(3553,0,gt,j.width,j.height,0,ft,vt,j.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Gt&&ne&&e.texStorage3D(35866,L,gt,Lt[0].width,Lt[0].height,j.depth);for(let H=0,J=Lt.length;H<J;H++)dt=Lt[H],w.format!==an?ft!==null?Gt?e.compressedTexSubImage3D(35866,H,0,0,0,dt.width,dt.height,j.depth,ft,dt.data,0,0):e.compressedTexImage3D(35866,H,gt,dt.width,dt.height,j.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(35866,H,0,0,0,dt.width,dt.height,j.depth,ft,vt,dt.data):e.texImage3D(35866,H,gt,dt.width,dt.height,j.depth,0,ft,vt,dt.data)}else{Gt&&ne&&e.texStorage2D(3553,L,gt,Lt[0].width,Lt[0].height);for(let H=0,J=Lt.length;H<J;H++)dt=Lt[H],w.format!==an?ft!==null?Gt?e.compressedTexSubImage2D(3553,H,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(3553,H,gt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(3553,H,0,0,dt.width,dt.height,ft,vt,dt.data):e.texImage2D(3553,H,gt,dt.width,dt.height,0,ft,vt,dt.data)}else if(w.isDataArrayTexture)Gt?(ne&&e.texStorage3D(35866,L,gt,j.width,j.height,j.depth),e.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,ft,vt,j.data)):e.texImage3D(35866,0,gt,j.width,j.height,j.depth,0,ft,vt,j.data);else if(w.isData3DTexture)Gt?(ne&&e.texStorage3D(32879,L,gt,j.width,j.height,j.depth),e.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,ft,vt,j.data)):e.texImage3D(32879,0,gt,j.width,j.height,j.depth,0,ft,vt,j.data);else if(w.isFramebufferTexture){if(ne)if(Gt)e.texStorage2D(3553,L,gt,j.width,j.height);else{let H=j.width,J=j.height;for(let st=0;st<L;st++)e.texImage2D(3553,st,gt,H,J,0,ft,vt,null),H>>=1,J>>=1}}else if(Lt.length>0&&xt){Gt&&ne&&e.texStorage2D(3553,L,gt,Lt[0].width,Lt[0].height);for(let H=0,J=Lt.length;H<J;H++)dt=Lt[H],Gt?e.texSubImage2D(3553,H,0,0,ft,vt,dt):e.texImage2D(3553,H,gt,ft,vt,dt);w.generateMipmaps=!1}else Gt?(ne&&e.texStorage2D(3553,L,gt,j.width,j.height),e.texSubImage2D(3553,0,0,0,ft,vt,j)):e.texImage2D(3553,0,gt,ft,vt,j);E(w,xt)&&C(tt),pt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ht(A,w,q){if(w.image.length!==6)return;const tt=ot(A,w),et=w.source;e.bindTexture(34067,A.__webglTexture,33984+q);const rt=n.get(et);if(et.version!==rt.__version||tt===!0){e.activeTexture(33984+q),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const pt=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,j=[];for(let H=0;H<6;H++)!pt&&!at?j[H]=_(w.image[H],!1,!0,l):j[H]=at?w.image[H].image:w.image[H],j[H]=tn(w,j[H]);const xt=j[0],ft=v(xt)||a,vt=r.convert(w.format,w.encoding),gt=r.convert(w.type),dt=y(w.internalFormat,vt,gt,w.encoding),Lt=a&&w.isVideoTexture!==!0,Gt=rt.__version===void 0||tt===!0;let ne=b(w,xt,ft);ct(34067,w,ft);let L;if(pt){Lt&&Gt&&e.texStorage2D(34067,ne,dt,xt.width,xt.height);for(let H=0;H<6;H++){L=j[H].mipmaps;for(let J=0;J<L.length;J++){const st=L[J];w.format!==an?vt!==null?Lt?e.compressedTexSubImage2D(34069+H,J,0,0,st.width,st.height,vt,st.data):e.compressedTexImage2D(34069+H,J,dt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(34069+H,J,0,0,st.width,st.height,vt,gt,st.data):e.texImage2D(34069+H,J,dt,st.width,st.height,0,vt,gt,st.data)}}}else{L=w.mipmaps,Lt&&Gt&&(L.length>0&&ne++,e.texStorage2D(34067,ne,dt,j[0].width,j[0].height));for(let H=0;H<6;H++)if(at){Lt?e.texSubImage2D(34069+H,0,0,0,j[H].width,j[H].height,vt,gt,j[H].data):e.texImage2D(34069+H,0,dt,j[H].width,j[H].height,0,vt,gt,j[H].data);for(let J=0;J<L.length;J++){const lt=L[J].image[H].image;Lt?e.texSubImage2D(34069+H,J+1,0,0,lt.width,lt.height,vt,gt,lt.data):e.texImage2D(34069+H,J+1,dt,lt.width,lt.height,0,vt,gt,lt.data)}}else{Lt?e.texSubImage2D(34069+H,0,0,0,vt,gt,j[H]):e.texImage2D(34069+H,0,dt,vt,gt,j[H]);for(let J=0;J<L.length;J++){const st=L[J];Lt?e.texSubImage2D(34069+H,J+1,0,0,vt,gt,st.image[H]):e.texImage2D(34069+H,J+1,dt,vt,gt,st.image[H])}}}E(w,ft)&&C(34067),rt.__version=et.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function _t(A,w,q,tt,et){const rt=r.convert(q.format,q.encoding),pt=r.convert(q.type),at=y(q.internalFormat,rt,pt,q.encoding);n.get(w).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,at,w.width,w.height,w.depth,0,rt,pt,null):e.texImage2D(et,0,at,w.width,w.height,0,rt,pt,null)),e.bindFramebuffer(36160,A),Bt(w)?d.framebufferTexture2DMultisampleEXT(36160,tt,et,n.get(q).__webglTexture,0,Ht(w)):(et===3553||et>=34069&&et<=34074)&&s.framebufferTexture2D(36160,tt,et,n.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function bt(A,w,q){if(s.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let tt=33189;if(q||Bt(w)){const et=w.depthTexture;et&&et.isDepthTexture&&(et.type===di?tt=36012:et.type===fi&&(tt=33190));const rt=Ht(w);Bt(w)?d.renderbufferStorageMultisampleEXT(36161,rt,tt,w.width,w.height):s.renderbufferStorageMultisample(36161,rt,tt,w.width,w.height)}else s.renderbufferStorage(36161,tt,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const tt=Ht(w);q&&Bt(w)===!1?s.renderbufferStorageMultisample(36161,tt,35056,w.width,w.height):Bt(w)?d.renderbufferStorageMultisampleEXT(36161,tt,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,A)}else{const tt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0;et<tt.length;et++){const rt=tt[et],pt=r.convert(rt.format,rt.encoding),at=r.convert(rt.type),j=y(rt.internalFormat,pt,at,rt.encoding),xt=Ht(w);q&&Bt(w)===!1?s.renderbufferStorageMultisample(36161,xt,j,w.width,w.height):Bt(w)?d.renderbufferStorageMultisampleEXT(36161,xt,j,w.width,w.height):s.renderbufferStorage(36161,j,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function Tt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);const tt=n.get(w.depthTexture).__webglTexture,et=Ht(w);if(w.depthTexture.format===_i)Bt(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,et):s.framebufferTexture2D(36160,36096,3553,tt,0);else if(w.depthTexture.format===sr)Bt(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,et):s.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function Rt(A){const w=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Tt(w.__webglFramebuffer,A)}else if(q){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]=s.createRenderbuffer(),bt(w.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),bt(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function me(A,w,q){const tt=n.get(A);w!==void 0&&_t(tt.__webglFramebuffer,A,A.texture,36064,3553),q!==void 0&&Rt(A)}function Qe(A){const w=A.texture,q=n.get(A),tt=n.get(w);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=w.version,o.memory.textures++);const et=A.isWebGLCubeRenderTarget===!0,rt=A.isWebGLMultipleRenderTargets===!0,pt=v(A)||a;if(et){q.__webglFramebuffer=[];for(let at=0;at<6;at++)q.__webglFramebuffer[at]=s.createFramebuffer()}else{if(q.__webglFramebuffer=s.createFramebuffer(),rt)if(i.drawBuffers){const at=A.texture;for(let j=0,xt=at.length;j<xt;j++){const ft=n.get(at[j]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Bt(A)===!1){const at=rt?w:[w];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let j=0;j<at.length;j++){const xt=at[j];q.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(36161,q.__webglColorRenderbuffer[j]);const ft=r.convert(xt.format,xt.encoding),vt=r.convert(xt.type),gt=y(xt.internalFormat,ft,vt,xt.encoding,A.isXRRenderTarget===!0),dt=Ht(A);s.renderbufferStorageMultisample(36161,dt,gt,A.width,A.height),s.framebufferRenderbuffer(36160,36064+j,36161,q.__webglColorRenderbuffer[j])}s.bindRenderbuffer(36161,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,tt.__webglTexture),ct(34067,w,pt);for(let at=0;at<6;at++)_t(q.__webglFramebuffer[at],A,w,36064,34069+at);E(w,pt)&&C(34067),e.unbindTexture()}else if(rt){const at=A.texture;for(let j=0,xt=at.length;j<xt;j++){const ft=at[j],vt=n.get(ft);e.bindTexture(3553,vt.__webglTexture),ct(3553,ft,pt),_t(q.__webglFramebuffer,A,ft,36064+j,3553),E(ft,pt)&&C(3553)}e.unbindTexture()}else{let at=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?at=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,tt.__webglTexture),ct(at,w,pt),_t(q.__webglFramebuffer,A,w,36064,at),E(w,pt)&&C(at),e.unbindTexture()}A.depthBuffer&&Rt(A)}function we(A){const w=v(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,et=q.length;tt<et;tt++){const rt=q[tt];if(E(rt,w)){const pt=A.isWebGLCubeRenderTarget?34067:3553,at=n.get(rt).__webglTexture;e.bindTexture(pt,at),C(pt),e.unbindTexture()}}}function ge(A){if(a&&A.samples>0&&Bt(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,tt=A.height;let et=16384;const rt=[],pt=A.stencilBuffer?33306:36096,at=n.get(A),j=A.isWebGLMultipleRenderTargets===!0;if(j)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xt,36161,null),e.bindFramebuffer(36160,at.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xt,3553,null,0);e.bindFramebuffer(36008,at.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,at.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){rt.push(36064+xt),A.depthBuffer&&rt.push(pt);const ft=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(ft===!1&&(A.depthBuffer&&(et|=256),A.stencilBuffer&&(et|=1024)),j&&s.framebufferRenderbuffer(36008,36064,36161,at.__webglColorRenderbuffer[xt]),ft===!0&&(s.invalidateFramebuffer(36008,[pt]),s.invalidateFramebuffer(36009,[pt])),j){const vt=n.get(w[xt]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,vt,0)}s.blitFramebuffer(0,0,q,tt,0,0,q,tt,et,9728),m&&s.invalidateFramebuffer(36008,rt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),j)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xt,36161,at.__webglColorRenderbuffer[xt]);const ft=n.get(w[xt]).__webglTexture;e.bindFramebuffer(36160,at.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xt,3553,ft,0)}e.bindFramebuffer(36009,at.__webglMultisampledFramebuffer)}}function Ht(A){return Math.min(h,A.samples)}function Bt(A){const w=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function cn(A){const w=o.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function tn(A,w){const q=A.encoding,tt=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===so||q!==yi&&(q===zt?a===!1?t.has("EXT_sRGB")===!0&&tt===an?(A.format=so,A.minFilter=Ye,A.generateMipmaps=!1):w=Au.sRGBToLinear(w):(tt!==an||et!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),w}this.allocateTextureUnit=G,this.resetTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=it,this.setTexture3D=O,this.setTextureCube=K,this.rebindTextures=me,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Bt}function T0(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===vi)return 5121;if(r===cd)return 32819;if(r===ud)return 32820;if(r===ad)return 5120;if(r===od)return 5122;if(r===wu)return 5123;if(r===ld)return 5124;if(r===fi)return 5125;if(r===di)return 5126;if(r===kr)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===hd)return 6406;if(r===an)return 6408;if(r===fd)return 6409;if(r===dd)return 6410;if(r===_i)return 6402;if(r===sr)return 34041;if(r===so)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===pd)return 6403;if(r===md)return 36244;if(r===gd)return 33319;if(r===_d)return 33320;if(r===xd)return 36249;if(r===ra||r===sa||r===aa||r===oa)if(o===zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ra)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sl||r===al||r===ol||r===ll)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===sl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===al)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ol)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ll)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===cl||r===ul)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===cl)return o===zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ul)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hl||r===fl||r===dl||r===pl||r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===Ml||r===Sl||r===bl||r===wl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ml)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_l)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ml)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wl)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===la)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===la)return o===zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===yd||r===Tl||r===El||r===Al)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===la)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Tl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===El)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Al)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class E0 extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}let gs=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}};const A0={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),x=this._getHandJoint(l,f);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class C0 extends Le{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:_i,u!==_i&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_i&&(n=fi),n===void 0&&u===sr&&(n=ji),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Se,this.minFilter=c!==void 0?c:Se,this.flipY=!1,this.generateMipmaps=!1}}class P0 extends or{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const f=e.getContextAttributes();let p=null,x=null;const M=[],_=[],v=new Set,S=new Map,E=new je;E.layers.enable(1),E.viewport=new ce;const C=new je;C.layers.enable(2),C.viewport=new ce;const y=[E,C],b=new E0;b.layers.enable(1),b.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let K=M[O];return K===void 0&&(K=new Fa,M[O]=K),K.getTargetRaySpace()},this.getControllerGrip=function(O){let K=M[O];return K===void 0&&(K=new Fa,M[O]=K),K.getGripSpace()},this.getHand=function(O){let K=M[O];return K===void 0&&(K=new Fa,M[O]=K),K.getHandSpace()};function B(O){const K=_.indexOf(O.inputSource);if(K===-1)return;const Q=M[K];Q!==void 0&&Q.dispatchEvent({type:O.type,data:O.inputSource})}function R(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",D);for(let O=0;O<M.length;O++){const K=_[O];K!==null&&(_[O]=null,M[O].disconnect(K))}P=null,z=null,t.setRenderTarget(p),m=null,d=null,h=null,i=null,x=null,it.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",R),i.addEventListener("inputsourceschange",D),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:m}),x=new Mi(m.framebufferWidth,m.framebufferHeight,{format:an,type:vi,encoding:t.outputEncoding,stencilBuffer:f.stencil})}else{let K=null,Q=null,F=null;f.depth&&(F=f.stencil?35056:33190,K=f.stencil?sr:_i,Q=f.stencil?ji:fi);const ct={colorFormat:32856,depthFormat:F,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(ct),i.updateRenderState({layers:[d]}),x=new Mi(d.textureWidth,d.textureHeight,{format:an,type:vi,depthTexture:new C0(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const ot=t.properties.get(x);ot.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(O){for(let K=0;K<O.removed.length;K++){const Q=O.removed[K],F=_.indexOf(Q);F>=0&&(_[F]=null,M[F].disconnect(Q))}for(let K=0;K<O.added.length;K++){const Q=O.added[K];let F=_.indexOf(Q);if(F===-1){for(let ot=0;ot<M.length;ot++)if(ot>=_.length){_.push(Q),F=ot;break}else if(_[ot]===null){_[ot]=Q,F=ot;break}if(F===-1)break}const ct=M[F];ct&&ct.connect(Q)}}const k=new U,V=new U;function Y(O,K,Q){k.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(Q.matrixWorld);const F=k.distanceTo(V),ct=K.projectionMatrix.elements,ot=Q.projectionMatrix.elements,ut=ct[14]/(ct[10]-1),ht=ct[14]/(ct[10]+1),_t=(ct[9]+1)/ct[5],bt=(ct[9]-1)/ct[5],Tt=(ct[8]-1)/ct[0],Rt=(ot[8]+1)/ot[0],me=ut*Tt,Qe=ut*Rt,we=F/(-Tt+Rt),ge=we*-Tt;K.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ge),O.translateZ(we),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Ht=ut+we,Bt=ht+we,cn=me-ge,tn=Qe+(F-ge),A=_t*ht/Bt*Ht,w=bt*ht/Bt*Ht;O.projectionMatrix.makePerspective(cn,tn,A,w,Ht,Bt)}function G(O,K){K===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(K.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;b.near=C.near=E.near=O.near,b.far=C.far=E.far=O.far,(P!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,z=b.far);const K=O.parent,Q=b.cameras;G(b,K);for(let ct=0;ct<Q.length;ct++)G(Q[ct],K);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),O.matrix.copy(b.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const F=O.children;for(let ct=0,ot=F.length;ct<ot;ct++)F[ct].updateMatrixWorld(!0);Q.length===2?Y(b,E,C):b.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.getPlanes=function(){return v};let Z=null;function $(O,K){if(u=K.getViewerPose(l||o),g=K,u!==null){const Q=u.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let F=!1;Q.length!==b.cameras.length&&(b.cameras.length=0,F=!0);for(let ct=0;ct<Q.length;ct++){const ot=Q[ct];let ut=null;if(m!==null)ut=m.getViewport(ot);else{const _t=h.getViewSubImage(d,ot);ut=_t.viewport,ct===0&&(t.setRenderTargetTextures(x,_t.colorTexture,d.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(x))}let ht=y[ct];ht===void 0&&(ht=new je,ht.layers.enable(ct),ht.viewport=new ce,y[ct]=ht),ht.matrix.fromArray(ot.transform.matrix),ht.projectionMatrix.fromArray(ot.projectionMatrix),ht.viewport.set(ut.x,ut.y,ut.width,ut.height),ct===0&&b.matrix.copy(ht.matrix),F===!0&&b.cameras.push(ht)}}for(let Q=0;Q<M.length;Q++){const F=_[Q],ct=M[Q];F!==null&&ct!==void 0&&ct.update(F,K,l||o)}if(Z&&Z(O,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let Q=null;for(const F of v)K.detectedPlanes.has(F)||(Q===null&&(Q=[]),Q.push(F));if(Q!==null)for(const F of Q)v.delete(F),S.delete(F),n.dispatchEvent({type:"planeremoved",data:F});for(const F of K.detectedPlanes)if(!v.has(F))v.add(F),S.set(F,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:F});else{const ct=S.get(F);F.lastChangedTime>ct&&(S.set(F,F.lastChangedTime),n.dispatchEvent({type:"planechanged",data:F}))}}g=null}const it=new Bu;it.setAnimationLoop($),this.setAnimationLoop=function(O){Z=O},this.dispose=function(){}}}function L0(s,t){function e(f,p){p.color.getRGB(f.fogColor.value,Nu(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,x,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),l(f,p)):p.isMeshStandardMaterial?(i(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,_)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?a(f,p,x,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Pe&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Pe&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uv2Transform.value.copy(_.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function a(f,p,x,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=M*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function l(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Pe&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function D0(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function c(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function l(M,_){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",p));const S=_.program;n.updateUBOMapping(M,S);const E=t.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function u(M){const _=h();M.__bindingPointIndex=_;const v=s.createBuffer(),S=M.__size,E=M.usage;return s.bindBuffer(35345,v),s.bufferData(35345,S,E),s.bindBuffer(35345,null),s.bindBufferBase(35345,_,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=i[M.id],v=M.uniforms,S=M.__cache;s.bindBuffer(35345,_);for(let E=0,C=v.length;E<C;E++){const y=v[E];if(m(y,E,S)===!0){const b=y.__offset,P=Array.isArray(y.value)?y.value:[y.value];let z=0;for(let B=0;B<P.length;B++){const R=P[B],D=f(R);typeof R=="number"?(y.__data[0]=R,s.bufferSubData(35345,b+z,y.__data)):R.isMatrix3?(y.__data[0]=R.elements[0],y.__data[1]=R.elements[1],y.__data[2]=R.elements[2],y.__data[3]=R.elements[0],y.__data[4]=R.elements[3],y.__data[5]=R.elements[4],y.__data[6]=R.elements[5],y.__data[7]=R.elements[0],y.__data[8]=R.elements[6],y.__data[9]=R.elements[7],y.__data[10]=R.elements[8],y.__data[11]=R.elements[0]):(R.toArray(y.__data,z),z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,b,y.__data)}}s.bindBuffer(35345,null)}function m(M,_,v){const S=M.value;if(v[_]===void 0){if(typeof S=="number")v[_]=S;else{const E=Array.isArray(S)?S:[S],C=[];for(let y=0;y<E.length;y++)C.push(E[y].clone());v[_]=C}return!0}else if(typeof S=="number"){if(v[_]!==S)return v[_]=S,!0}else{const E=Array.isArray(v[_])?v[_]:[v[_]],C=Array.isArray(S)?S:[S];for(let y=0;y<E.length;y++){const b=E[y];if(b.equals(C[y])===!1)return b.copy(C[y]),!0}}return!1}function g(M){const _=M.uniforms;let v=0;const S=16;let E=0;for(let C=0,y=_.length;C<y;C++){const b=_[C],P={boundary:0,storage:0},z=Array.isArray(b.value)?b.value:[b.value];for(let B=0,R=z.length;B<R;B++){const D=z[B],k=f(D);P.boundary+=k.boundary,P.storage+=k.storage}if(b.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=v,C>0){E=v%S;const B=S-E;E!==0&&B-P.boundary<0&&(v+=S-E,b.__offset=v)}v+=P.storage}return E=v%S,E>0&&(v+=S-E),M.__size=v,M.__cache={},this}function f(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){const _=M.target;_.removeEventListener("dispose",p);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function x(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:x}}function R0(){const s=Gr("canvas");return s.style.display="block",s}function Po(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:R0(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yi,this.useLegacyLights=!0,this.toneMapping=In,this.toneMappingExposure=1;const f=this;let p=!1,x=0,M=0,_=null,v=-1,S=null;const E=new ce,C=new ce;let y=null,b=t.width,P=t.height,z=1,B=null,R=null;const D=new ce(0,0,b,P),k=new ce(0,0,b,P);let V=!1;const Y=new ku;let G=!1,Z=!1,$=null;const it=new ae,O=new U,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return _===null?z:1}let F=e;function ct(T,N){for(let W=0;W<T.length;W++){const I=T[W],X=t.getContext(I,N);if(X!==null)return X}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eo}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",dt,!1),F===null){const N=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&N.shift(),F=ct(N,T),F===null)throw ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ot,ut,ht,_t,bt,Tt,Rt,me,Qe,we,ge,Ht,Bt,cn,tn,A,w,q,tt,et,rt,pt,at,j;function xt(){ot=new Wg(F),ut=new Ng(F,ot,s),ot.init(ut),pt=new T0(F,ot,ut),ht=new b0(F,ot,ut),_t=new Xg,bt=new c0,Tt=new w0(F,ot,ht,bt,ut,pt,_t),Rt=new Ug(f),me=new Vg(f),Qe=new tp(F,ut),at=new Fg(F,ot,Qe,ut),we=new Hg(F,Qe,_t,at),ge=new Zg(F,we,Qe,_t),tt=new $g(F,ut,Tt),A=new zg(bt),Ht=new l0(f,Rt,me,ot,ut,at,A),Bt=new L0(f,bt),cn=new h0,tn=new _0(ot,ut),q=new Ig(f,Rt,me,ht,ge,u,o),w=new S0(f,ge,ut),j=new D0(F,_t,ut,ht),et=new Og(F,ot,_t,ut),rt=new qg(F,ot,_t,ut),_t.programs=Ht.programs,f.capabilities=ut,f.extensions=ot,f.properties=bt,f.renderLists=cn,f.shadowMap=w,f.state=ht,f.info=_t}xt();const ft=new P0(f,F);this.xr=ft,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(b,P,!1))},this.getSize=function(T){return T.set(b,P)},this.setSize=function(T,N,W=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=T,P=N,t.width=Math.floor(T*z),t.height=Math.floor(N*z),W===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(b*z,P*z).floor()},this.setDrawingBufferSize=function(T,N,W){b=T,P=N,z=W,t.width=Math.floor(T*W),t.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,N,W,I){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,N,W,I),ht.viewport(E.copy(D).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,N,W,I){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,N,W,I),ht.scissor(C.copy(k).multiplyScalar(z).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){ht.setScissorTest(V=T)},this.setOpaqueSort=function(T){B=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(T=!0,N=!0,W=!0){let I=0;T&&(I|=16384),N&&(I|=256),W&&(I|=1024),F.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),cn.dispose(),tn.dispose(),bt.dispose(),Rt.dispose(),me.dispose(),ge.dispose(),at.dispose(),j.dispose(),Ht.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",J),ft.removeEventListener("sessionend",st),$&&($.dispose(),$=null),lt.stop()};function vt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=_t.autoReset,N=w.enabled,W=w.autoUpdate,I=w.needsUpdate,X=w.type;xt(),_t.autoReset=T,w.enabled=N,w.autoUpdate=W,w.needsUpdate=I,w.type=X}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Lt(T){const N=T.target;N.removeEventListener("dispose",Lt),Gt(N)}function Gt(T){ne(T),bt.remove(T)}function ne(T){const N=bt.get(T).programs;N!==void 0&&(N.forEach(function(W){Ht.releaseProgram(W)}),T.isShaderMaterial&&Ht.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,W,I,X,mt){N===null&&(N=K);const yt=X.isMesh&&X.matrixWorld.determinant()<0,St=$u(T,N,W,I,X);ht.setMaterial(I,yt);let wt=W.index,Dt=1;I.wireframe===!0&&(wt=we.getWireframeAttribute(W),Dt=2);const At=W.drawRange,Ct=W.attributes.position;let $t=At.start*Dt,Re=(At.start+At.count)*Dt;mt!==null&&($t=Math.max($t,mt.start*Dt),Re=Math.min(Re,(mt.start+mt.count)*Dt)),wt!==null?($t=Math.max($t,0),Re=Math.min(Re,wt.count)):Ct!=null&&($t=Math.max($t,0),Re=Math.min(Re,Ct.count));const Sn=Re-$t;if(Sn<0||Sn===1/0)return;at.setup(X,I,St,W,wt);let Qn,Zt=et;if(wt!==null&&(Qn=Qe.get(wt),Zt=rt,Zt.setIndex(Qn)),X.isMesh)I.wireframe===!0?(ht.setLineWidth(I.wireframeLinewidth*Q()),Zt.setMode(1)):Zt.setMode(4);else if(X.isLine){let Pt=I.linewidth;Pt===void 0&&(Pt=1),ht.setLineWidth(Pt*Q()),X.isLineSegments?Zt.setMode(1):X.isLineLoop?Zt.setMode(2):Zt.setMode(3)}else X.isPoints?Zt.setMode(0):X.isSprite&&Zt.setMode(4);if(X.isInstancedMesh)Zt.renderInstances($t,Sn,X.count);else if(W.isInstancedBufferGeometry){const Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ws=Math.min(W.instanceCount,Pt);Zt.renderInstances($t,Sn,Ws)}else Zt.render($t,Sn)},this.compile=function(T,N){function W(I,X,mt){I.transparent===!0&&I.side===Hn&&I.forceSinglePass===!1?(I.side=Pe,I.needsUpdate=!0,We(I,X,mt),I.side=Kn,I.needsUpdate=!0,We(I,X,mt),I.side=Hn):We(I,X,mt)}d=tn.get(T),d.init(),g.push(d),T.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(f.useLegacyLights),T.traverse(function(I){const X=I.material;if(X)if(Array.isArray(X))for(let mt=0;mt<X.length;mt++){const yt=X[mt];W(yt,T,I)}else W(X,T,I)}),g.pop(),d=null};let L=null;function H(T){L&&L(T)}function J(){lt.stop()}function st(){lt.start()}const lt=new Bu;lt.setAnimationLoop(H),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(T){L=T,ft.setAnimationLoop(T),T===null?lt.stop():lt.start()},ft.addEventListener("sessionstart",J),ft.addEventListener("sessionend",st),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(N),N=ft.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,N,_),d=tn.get(T,g.length),d.init(),g.push(d),it.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(it),Z=this.localClippingEnabled,G=A.init(this.clippingPlanes,Z),h=cn.get(T,m.length),h.init(),m.push(h),Nt(T,N,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(B,R),G===!0&&A.beginShadows();const W=d.state.shadowsArray;if(w.render(W,T,N),G===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(h,T),d.setupLights(f.useLegacyLights),N.isArrayCamera){const I=N.cameras;for(let X=0,mt=I.length;X<mt;X++){const yt=I[X];ie(h,T,yt,yt.viewport)}}else ie(h,T,N);_!==null&&(Tt.updateMultisampleRenderTarget(_),Tt.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(f,T,N),at.resetDefaultState(),v=-1,S=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Nt(T,N,W,I){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){I&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(it);const yt=ge.update(T),St=T.material;St.visible&&h.push(T,yt,St,W,O.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==_t.render.frame&&(T.skeleton.update(),T.skeleton.frame=_t.render.frame),!T.frustumCulled||Y.intersectsObject(T))){I&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(it);const yt=ge.update(T),St=T.material;if(Array.isArray(St)){const wt=yt.groups;for(let Dt=0,At=wt.length;Dt<At;Dt++){const Ct=wt[Dt],$t=St[Ct.materialIndex];$t&&$t.visible&&h.push(T,yt,$t,W,O.z,Ct)}}else St.visible&&h.push(T,yt,St,W,O.z,null)}}const mt=T.children;for(let yt=0,St=mt.length;yt<St;yt++)Nt(mt[yt],N,W,I)}function ie(T,N,W,I){const X=T.opaque,mt=T.transmissive,yt=T.transparent;d.setupLightsView(W),G===!0&&A.setGlobalState(f.clippingPlanes,W),mt.length>0&&_e(X,N,W),I&&ht.viewport(E.copy(I)),X.length>0&&un(X,N,W),mt.length>0&&un(mt,N,W),yt.length>0&&un(yt,N,W),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function _e(T,N,W){const I=ut.isWebGL2;$===null&&($=new Mi(1024,1024,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")?kr:vi,minFilter:Ur,samples:I&&r===!0?4:0}));const X=f.getRenderTarget();f.setRenderTarget($),f.clear();const mt=f.toneMapping;f.toneMapping=In,un(T,N,W),f.toneMapping=mt,Tt.updateMultisampleRenderTarget($),Tt.updateRenderTargetMipmap($),f.setRenderTarget(X)}function un(T,N,W){const I=N.isScene===!0?N.overrideMaterial:null;for(let X=0,mt=T.length;X<mt;X++){const yt=T[X],St=yt.object,wt=yt.geometry,Dt=I===null?yt.material:I,At=yt.group;St.layers.test(W.layers)&&Xt(St,N,W,wt,Dt,At)}}function Xt(T,N,W,I,X,mt){T.onBeforeRender(f,N,W,I,X,mt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(f,N,W,I,T,mt),X.transparent===!0&&X.side===Hn&&X.forceSinglePass===!1?(X.side=Pe,X.needsUpdate=!0,f.renderBufferDirect(W,N,I,X,T,mt),X.side=Kn,X.needsUpdate=!0,f.renderBufferDirect(W,N,I,X,T,mt),X.side=Hn):f.renderBufferDirect(W,N,I,X,T,mt),T.onAfterRender(f,N,W,I,X,mt)}function We(T,N,W){N.isScene!==!0&&(N=K);const I=bt.get(T),X=d.state.lights,mt=d.state.shadowsArray,yt=X.state.version,St=Ht.getParameters(T,X.state,mt,N,W),wt=Ht.getProgramCacheKey(St);let Dt=I.programs;I.environment=T.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(T.isMeshStandardMaterial?me:Rt).get(T.envMap||I.environment),Dt===void 0&&(T.addEventListener("dispose",Lt),Dt=new Map,I.programs=Dt);let At=Dt.get(wt);if(At!==void 0){if(I.currentProgram===At&&I.lightsStateVersion===yt)return hn(T,St),At}else St.uniforms=Ht.getUniforms(T),T.onBuild(W,St,f),T.onBeforeCompile(St,f),At=Ht.acquireProgram(St,wt),Dt.set(wt,At),I.uniforms=St.uniforms;const Ct=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=A.uniform),hn(T,St),I.needsLights=Ku(T),I.lightsStateVersion=yt,I.needsLights&&(Ct.ambientLightColor.value=X.state.ambient,Ct.lightProbe.value=X.state.probe,Ct.directionalLights.value=X.state.directional,Ct.directionalLightShadows.value=X.state.directionalShadow,Ct.spotLights.value=X.state.spot,Ct.spotLightShadows.value=X.state.spotShadow,Ct.rectAreaLights.value=X.state.rectArea,Ct.ltc_1.value=X.state.rectAreaLTC1,Ct.ltc_2.value=X.state.rectAreaLTC2,Ct.pointLights.value=X.state.point,Ct.pointLightShadows.value=X.state.pointShadow,Ct.hemisphereLights.value=X.state.hemi,Ct.directionalShadowMap.value=X.state.directionalShadowMap,Ct.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ct.spotShadowMap.value=X.state.spotShadowMap,Ct.spotLightMatrix.value=X.state.spotLightMatrix,Ct.spotLightMap.value=X.state.spotLightMap,Ct.pointShadowMap.value=X.state.pointShadowMap,Ct.pointShadowMatrix.value=X.state.pointShadowMatrix);const $t=At.getUniforms(),Re=Es.seqWithValue($t.seq,Ct);return I.currentProgram=At,I.uniformsList=Re,At}function hn(T,N){const W=bt.get(T);W.outputEncoding=N.outputEncoding,W.instancing=N.instancing,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function $u(T,N,W,I,X){N.isScene!==!0&&(N=K),Tt.resetTextureUnits();const mt=N.fog,yt=I.isMeshStandardMaterial?N.environment:null,St=_===null?f.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:yi,wt=(I.isMeshStandardMaterial?me:Rt).get(I.envMap||yt),Dt=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,At=!!I.normalMap&&!!W.attributes.tangent,Ct=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,Re=!!W.morphAttributes.color,Sn=I.toneMapped?f.toneMapping:In,Qn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Zt=Qn!==void 0?Qn.length:0,Pt=bt.get(I),Ws=d.state.lights;if(G===!0&&(Z===!0||T!==S)){const Ie=T===S&&I.id===v;A.setState(I,T,Ie)}let re=!1;I.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ws.state.version||Pt.outputEncoding!==St||X.isInstancedMesh&&Pt.instancing===!1||!X.isInstancedMesh&&Pt.instancing===!0||X.isSkinnedMesh&&Pt.skinning===!1||!X.isSkinnedMesh&&Pt.skinning===!0||Pt.envMap!==wt||I.fog===!0&&Pt.fog!==mt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==A.numPlanes||Pt.numIntersection!==A.numIntersection)||Pt.vertexAlphas!==Dt||Pt.vertexTangents!==At||Pt.morphTargets!==Ct||Pt.morphNormals!==$t||Pt.morphColors!==Re||Pt.toneMapping!==Sn||ut.isWebGL2===!0&&Pt.morphTargetsCount!==Zt)&&(re=!0):(re=!0,Pt.__version=I.version);let ti=Pt.currentProgram;re===!0&&(ti=We(I,N,X));let Lo=!1,cr=!1,Hs=!1;const xe=ti.getUniforms(),ei=Pt.uniforms;if(ht.useProgram(ti.program)&&(Lo=!0,cr=!0,Hs=!0),I.id!==v&&(v=I.id,cr=!0),Lo||S!==T){if(xe.setValue(F,"projectionMatrix",T.projectionMatrix),ut.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,cr=!0,Hs=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Ie=xe.map.cameraPosition;Ie!==void 0&&Ie.setValue(F,O.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&xe.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||X.isSkinnedMesh)&&xe.setValue(F,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){xe.setOptional(F,X,"bindMatrix"),xe.setOptional(F,X,"bindMatrixInverse");const Ie=X.skeleton;Ie&&(ut.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),xe.setValue(F,"boneTexture",Ie.boneTexture,Tt),xe.setValue(F,"boneTextureSize",Ie.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qs=W.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0&&ut.isWebGL2===!0)&&tt.update(X,W,ti),(cr||Pt.receiveShadow!==X.receiveShadow)&&(Pt.receiveShadow=X.receiveShadow,xe.setValue(F,"receiveShadow",X.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ei.envMap.value=wt,ei.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),cr&&(xe.setValue(F,"toneMappingExposure",f.toneMappingExposure),Pt.needsLights&&Zu(ei,Hs),mt&&I.fog===!0&&Bt.refreshFogUniforms(ei,mt),Bt.refreshMaterialUniforms(ei,I,z,P,$),Es.upload(F,Pt.uniformsList,ei,Tt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Es.upload(F,Pt.uniformsList,ei,Tt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&xe.setValue(F,"center",X.center),xe.setValue(F,"modelViewMatrix",X.modelViewMatrix),xe.setValue(F,"normalMatrix",X.normalMatrix),xe.setValue(F,"modelMatrix",X.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Ie=I.uniformsGroups;for(let Xs=0,Ju=Ie.length;Xs<Ju;Xs++)if(ut.isWebGL2){const Do=Ie[Xs];j.update(Do,ti),j.bind(Do,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function Zu(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Ku(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(T,N,W){bt.get(T.texture).__webglTexture=N,bt.get(T.depthTexture).__webglTexture=W;const I=bt.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const W=bt.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,W=0){_=T,x=N,M=W;let I=!0,X=null,mt=!1,yt=!1;if(T){const wt=bt.get(T);wt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(36160,null),I=!1):wt.__webglFramebuffer===void 0?Tt.setupRenderTarget(T):wt.__hasExternalTextures&&Tt.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);const Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(yt=!0);const At=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=At[N],mt=!0):ut.isWebGL2&&T.samples>0&&Tt.useMultisampledRTT(T)===!1?X=bt.get(T).__webglMultisampledFramebuffer:X=At,E.copy(T.viewport),C.copy(T.scissor),y=T.scissorTest}else E.copy(D).multiplyScalar(z).floor(),C.copy(k).multiplyScalar(z).floor(),y=V;if(ht.bindFramebuffer(36160,X)&&ut.drawBuffers&&I&&ht.drawBuffers(T,X),ht.viewport(E),ht.scissor(C),ht.setScissorTest(y),mt){const wt=bt.get(T.texture);F.framebufferTexture2D(36160,36064,34069+N,wt.__webglTexture,W)}else if(yt){const wt=bt.get(T.texture),Dt=N||0;F.framebufferTextureLayer(36160,36064,wt.__webglTexture,W||0,Dt)}v=-1},this.readRenderTargetPixels=function(T,N,W,I,X,mt,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){ht.bindFramebuffer(36160,St);try{const wt=T.texture,Dt=wt.format,At=wt.type;if(Dt!==an&&pt.convert(Dt)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ct=At===kr&&(ot.has("EXT_color_buffer_half_float")||ut.isWebGL2&&ot.has("EXT_color_buffer_float"));if(At!==vi&&pt.convert(At)!==F.getParameter(35738)&&!(At===di&&(ut.isWebGL2||ot.has("OES_texture_float")||ot.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-I&&W>=0&&W<=T.height-X&&F.readPixels(N,W,I,X,pt.convert(Dt),pt.convert(At),mt)}finally{const wt=_!==null?bt.get(_).__webglFramebuffer:null;ht.bindFramebuffer(36160,wt)}}},this.copyFramebufferToTexture=function(T,N,W=0){const I=Math.pow(2,-W),X=Math.floor(N.image.width*I),mt=Math.floor(N.image.height*I);Tt.setTexture2D(N,0),F.copyTexSubImage2D(3553,W,0,0,T.x,T.y,X,mt),ht.unbindTexture()},this.copyTextureToTexture=function(T,N,W,I=0){const X=N.image.width,mt=N.image.height,yt=pt.convert(W.format),St=pt.convert(W.type);Tt.setTexture2D(W,0),F.pixelStorei(37440,W.flipY),F.pixelStorei(37441,W.premultiplyAlpha),F.pixelStorei(3317,W.unpackAlignment),N.isDataTexture?F.texSubImage2D(3553,I,T.x,T.y,X,mt,yt,St,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(3553,I,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,yt,N.mipmaps[0].data):F.texSubImage2D(3553,I,T.x,T.y,yt,St,N.image),I===0&&W.generateMipmaps&&F.generateMipmap(3553),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,N,W,I,X=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=T.max.x-T.min.x+1,yt=T.max.y-T.min.y+1,St=T.max.z-T.min.z+1,wt=pt.convert(I.format),Dt=pt.convert(I.type);let At;if(I.isData3DTexture)Tt.setTexture3D(I,0),At=32879;else if(I.isDataArrayTexture)Tt.setTexture2DArray(I,0),At=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,I.flipY),F.pixelStorei(37441,I.premultiplyAlpha),F.pixelStorei(3317,I.unpackAlignment);const Ct=F.getParameter(3314),$t=F.getParameter(32878),Re=F.getParameter(3316),Sn=F.getParameter(3315),Qn=F.getParameter(32877),Zt=W.isCompressedTexture?W.mipmaps[0]:W.image;F.pixelStorei(3314,Zt.width),F.pixelStorei(32878,Zt.height),F.pixelStorei(3316,T.min.x),F.pixelStorei(3315,T.min.y),F.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(At,X,N.x,N.y,N.z,mt,yt,St,wt,Dt,Zt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(At,X,N.x,N.y,N.z,mt,yt,St,wt,Zt.data)):F.texSubImage3D(At,X,N.x,N.y,N.z,mt,yt,St,wt,Dt,Zt),F.pixelStorei(3314,Ct),F.pixelStorei(32878,$t),F.pixelStorei(3316,Re),F.pixelStorei(3315,Sn),F.pixelStorei(32877,Qn),X===0&&I.generateMipmaps&&F.generateMipmap(At),ht.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Tt.setTextureCube(T,0):T.isData3DTexture?Tt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Tt.setTexture2DArray(T,0):Tt.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){x=0,M=0,_=null,ht.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Po.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(s){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!s}}});class I0 extends Po{}I0.prototype.isWebGL1Renderer=!0;class F0 extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class qu extends Yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const hc=new ae,oo=new Lu,_s=new Bs,xs=new U;class O0 extends De{constructor(t=new Mn,e=new qu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=r,t.ray.intersectsSphere(_s)===!1)return;hc.copy(i).invert(),oo.copy(t.ray).applyMatrix4(hc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,f=m;g<f;g++){const p=l.getX(g);xs.fromBufferAttribute(h,p),fc(xs,p,c,i,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,f=m;g<f;g++)xs.fromBufferAttribute(h,g),fc(xs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fc(s,t,e,n,i,r,o){const a=oo.distanceSqToPoint(s);if(a<e){const c=new U;oo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Os extends Mn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new U,d=new U,m=[],g=[],f=[],p=[];for(let x=0;x<=n;x++){const M=[],_=x/n;let v=0;x==0&&o==0?v=.5/e:x==n&&c==Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){const E=S/e;h.x=-t*Math.cos(i+E*r)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(i+E*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),f.push(d.x,d.y,d.z),p.push(E+v,1-_),M.push(l++)}u.push(M)}for(let x=0;x<n;x++)for(let M=0;M<e;M++){const _=u[x][M+1],v=u[x][M],S=u[x+1][M],E=u[x+1][M+1];(x!==0||o>0)&&m.push(_,v,E),(x!==n-1||c<Math.PI)&&m.push(v,S,E)}this.setIndex(m),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(f,3)),this.setAttribute("uv",new ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const dc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class N0{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const z0=new N0;class Xu{constructor(t){this.manager=t!==void 0?t:z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class U0 extends Xu{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=dc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Gr("img");function c(){u(),dc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class k0 extends Xu{constructor(t){super(t)}load(t,e,n,i){const r=new Le,o=new U0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);var Pr={Linear:{None:function(s){return s}},Quadratic:{In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}},Cubic:{In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}},Quartic:{In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}},Quintic:{In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}},Sinusoidal:{In:function(s){return 1-Math.cos(s*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.cos(Math.PI*s))}},Exponential:{In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}},Circular:{In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}},Elastic:{In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}},Back:{In:function(s){var t=1.70158;return s*s*((t+1)*s-t)},Out:function(s){var t=1.70158;return--s*s*((t+1)*s+t)+1},InOut:function(s){var t=2.5949095;return(s*=2)<1?.5*(s*s*((t+1)*s-t)):.5*((s-=2)*s*((t+1)*s+t)+2)}},Bounce:{In:function(s){return 1-Pr.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?Pr.Bounce.In(s*2)*.5:Pr.Bounce.Out(s*2-1)*.5+.5}}},Sr;typeof self>"u"&&typeof process<"u"&&process.hrtime?Sr=function(){var s=process.hrtime();return s[0]*1e3+s[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Sr=self.performance.now.bind(self.performance):Date.now!==void 0?Sr=Date.now:Sr=function(){return new Date().getTime()};var Bi=Sr,B0=function(){function s(){this._tweens={},this._tweensAddedDuringUpdate={}}return s.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},s.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},s.prototype.update=function(t,e){t===void 0&&(t=Bi()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],o=!e;r&&r.update(t,o)===!1&&!e&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},s}(),br={Linear:function(s,t){var e=s.length-1,n=e*t,i=Math.floor(n),r=br.Utils.Linear;return t<0?r(s[0],s[1],n):t>1?r(s[e],s[e-1],e-n):r(s[i],s[i+1>e?e:i+1],n-i)},Bezier:function(s,t){for(var e=0,n=s.length-1,i=Math.pow,r=br.Utils.Bernstein,o=0;o<=n;o++)e+=i(1-t,n-o)*i(t,o)*s[o]*r(n,o);return e},CatmullRom:function(s,t){var e=s.length-1,n=e*t,i=Math.floor(n),r=br.Utils.CatmullRom;return s[0]===s[e]?(t<0&&(i=Math.floor(n=e*(1+t))),r(s[(i-1+e)%e],s[i],s[(i+1)%e],s[(i+2)%e],n-i)):t<0?s[0]-(r(s[0],s[0],s[1],s[1],-n)-s[0]):t>1?s[e]-(r(s[e],s[e],s[e-1],s[e-1],n-e)-s[e]):r(s[i?i-1:0],s[i],s[e<i+1?e:i+1],s[e<i+2?e:i+2],n-i)},Utils:{Linear:function(s,t,e){return(t-s)*e+s},Bernstein:function(s,t){var e=br.Utils.Factorial;return e(s)/e(t)/e(s-t)},Factorial:function(){var s=[1];return function(t){var e=1;if(s[t])return s[t];for(var n=t;n>1;n--)e*=n;return s[t]=e,e}}(),CatmullRom:function(s,t,e,n,i){var r=(e-s)*.5,o=(n-t)*.5,a=i*i,c=i*a;return(2*t-2*e+r+o)*c+(-3*t+3*e-2*r-o)*a+r*i+t}}},Yu=function(){function s(){}return s.nextId=function(){return s._nextId++},s._nextId=0,s}(),ju=new B0,vs=function(){function s(t,e){e===void 0&&(e=ju),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Pr.Linear.None,this._interpolationFunction=br.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Yu.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.to=function(t,e){return this._valuesEnd=Object.create(t),e!==void 0&&(this._duration=e),this},s.prototype.duration=function(t){return this._duration=t,this},s.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var e in this._valuesStartRepeat)this._swapEndStartRepeatValues(e),this._valuesStart[e]=this._valuesStartRepeat[e]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t!==void 0?typeof t=="string"?Bi()+parseFloat(t):t:Bi(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},s.prototype._setupProperties=function(t,e,n,i){for(var r in n){var o=t[r],a=Array.isArray(o),c=a?"array":typeof o,l=!a&&Array.isArray(n[r]);if(!(c==="undefined"||c==="function")){if(l){var u=n[r];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),n[r]=[o].concat(u)}if((c==="object"||a)&&o&&!l){e[r]=a?[]:{};for(var h in o)e[r][h]=o[h];i[r]=a?[]:{},this._setupProperties(o,e[r],n[r],i[r])}else typeof e[r]>"u"&&(e[r]=o),a||(e[r]*=1),l?i[r]=n[r].slice().reverse():i[r]=e[r]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},s.prototype.pause=function(t){return t===void 0&&(t=Bi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},s.prototype.resume=function(t){return t===void 0&&(t=Bi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},s.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},s.prototype.group=function(t){return this._group=t,this},s.prototype.delay=function(t){return this._delayTime=t,this},s.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},s.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},s.prototype.yoyo=function(t){return this._yoyo=t,this},s.prototype.easing=function(t){return this._easingFunction=t,this},s.prototype.interpolation=function(t){return this._interpolationFunction=t,this},s.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},s.prototype.onStart=function(t){return this._onStartCallback=t,this},s.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},s.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},s.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},s.prototype.onStop=function(t){return this._onStopCallback=t,this},s.prototype.update=function(t,e){if(t===void 0&&(t=Bi()),e===void 0&&(e=!0),this._isPaused)return!0;var n,i,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>r)return!1;e&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(t-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var o=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,c=this._chainedTweens.length;a<c;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(t,e,n,i){for(var r in n)if(e[r]!==void 0){var o=e[r]||0,a=n[r],c=Array.isArray(t[r]),l=Array.isArray(a),u=!c&&l;u?t[r]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(t[r],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[r]=o+(a-o)*i))}},s.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},s.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},s}();Yu.nextId;var yn=ju;yn.getAll.bind(yn);yn.removeAll.bind(yn);yn.add.bind(yn);yn.remove.bind(yn);var G0=yn.update.bind(yn);const V0="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1);}",W0="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.3,0.3)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",H0="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,0.9);}",q0="varying vec3 vertexNormal;void main(){float intensity=pow(0.6-dot(vertexNormal,vec3(0,0,1.0)),2.0);gl_FragColor=vec4(0.3,0.3,0.3,1.0)*intensity;}",X0="/assets/globe-6886fa78.jpg",Y0="/assets/jupiter-6b835ddd.jpg",j0="/assets/mars-e7d49b89.jpg",$0="/assets/mercury-5e1c8607.jpg",Z0="/assets/neptune-cb42ea82.jpg",K0="/assets/saturn-7bc7b51a.jpg",J0="/assets/uranus-d15239d4.jpg",Q0="/assets/venus-b125eacd.jpg",tx="/assets/earth-21ec0634.png",ex="/assets/jupiter-b8df7f47.png",nx="/assets/mars-bf206899.png",ix="/assets/mercury-6784ab07.png",rx="/assets/neptune-65397c7b.png",sx="/assets/saturn-d009a5db.png",ax="/assets/uranus-6fa04468.png",ox="/assets/venus-eba47eae.png",lx=[{name:"Mercury",text:"Mercury is the smallest planet in the Solar System, named after the Roman god Mercurius. It has a short orbit of 87.97 Earth days and can only be seen near the horizon at twilight, showing phases similar to Venus and the Moon.",funFact:"Despite being the closest planet to the Sun, Mercury is not the hottest planet in the Solar System. That title goes to Venus, which has a thick atmosphere that traps heat, making it hotter than Mercury."},{name:"Venus",text:"Venus, named after the Roman goddess of love and beauty, is the second planet from the Sun and the brightest natural object in Earth's night sky after the Moon. Its synodic day length is 117 Earth days, it rotates in the opposite direction to most planets, and it has no moons.",funFact:"Venus has the longest rotation period of any planet in the Solar System, taking 243 Earth days to complete a single rotation. Additionally, Venus rotates in the opposite direction to most planets, with the Sun rising in the west and setting in the east."},{name:"Earth",text:"Earth is the third planet from the Sun and the only known planet with life. It has a solid iron inner core, a liquid outer core that generates its magnetic field, and a convective mantle that drives plate tectonics.",funFact:"The Earth is the only planet known to have liquid water on its surface, which is essential for life as we know it."},{name:"Mars",text:"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It is often referred to as the 'Red Planet' due to the iron oxide prevalent on its surface, which gives it a distinctive reddish appearance.",funFact:"Mars is home to the tallest mountain in the solar system, Olympus Mons, which is three times the height of Mount Everest!"},{name:"Jupiter",text:"Jupiter is the largest planet in the Solar System, fifth from the Sun, and is named after the Roman king of the gods. With a mass more than two and a half times that of all other planets combined, it is also the third-brightest natural object in the Earth's night sky.",funFact:"Jupiter has at least 79 moons, the four largest of which are called the Galilean moons and were first observed by Galileo Galilei in 1610."},{name:"Saturn",text:"Saturn, the sixth planet from the Sun, is the second-largest planet in the Solar System and is a gas giant with an average radius almost 10 times that of Earth. Its astronomical symbol is a Greek kappa-rho with a cross-bar, which evolved from the earlier symbol representing the Greek god Cronus.",funFact:"Saturn's most recognizable feature is its prominent ring system, which is made up of nine continuous main rings and three discontinuous arcs. The rings are composed of millions of individual particles, ranging in size from tiny grains of dust to large boulders."},{name:"Uranus",text:"Uranus is the seventh planet from the Sun, and is classified as an 'ice giant' due to its bulk chemical composition. It has the coldest planetary atmosphere in the Solar System, and its interior is mainly composed of ices and rock.",funFact:"Uranus is the only planet in the solar system whose equator is nearly at a right angle to its orbit, meaning it essentially orbits on its side. This gives it a very unique appearance and rotation."},{name:"Neptune",text:"Neptune is the farthest-known Solar planet from the Sun, and it is the fourth-largest and third-most-massive planet in the Solar System. It is named after the Roman god of the sea, and it has a symbol ♆ that represents the god Neptune's trident.",funFact:"Neptune is the only planet in the Solar System that was discovered through mathematical prediction rather than empirical observation. Its discovery was the result of irregularities observed in the orbit of Uranus, which led astronomers to predict the existence of an eighth planet."}];function pc(s,t,e){const n=s.slice();return n[16]=t[e],n}function mc(s){let t,e,n,i,r,o,a,c=s[16].name+"",l,u,h,d,m;function g(){return s[6](s[16])}return{c(){var f;t=Me("li"),e=Me("button"),n=Me("img"),o=Cn(),a=Me("p"),l=wr(c),u=Cn(),Io(n.src,i=s[16].icon)||Yt(n,"src",i),Yt(n,"alt",r=s[16].name),Yt(n,"class","svelte-17gkw7v"),Yt(e,"class","svelte-17gkw7v"),Yt(a,"class","svelte-17gkw7v"),Yt(t,"class",h=Fo(((f=s[0])==null?void 0:f.name)===s[16].name?"selected":"")+" svelte-17gkw7v")},m(f,p){xc(f,t,p),Ot(t,e),Ot(e,n),Ot(t,o),Ot(t,a),Ot(a,l),Ot(t,u),d||(m=Oa(e,"click",g),d=!0)},p(f,p){var x;s=f,p&2&&!Io(n.src,i=s[16].icon)&&Yt(n,"src",i),p&2&&r!==(r=s[16].name)&&Yt(n,"alt",r),p&2&&c!==(c=s[16].name+"")&&Ms(l,c),p&3&&h!==(h=Fo(((x=s[0])==null?void 0:x.name)===s[16].name?"selected":"")+" svelte-17gkw7v")&&Yt(t,"class",h)},d(f){f&&lo(t),d=!1,m()}}}function cx(s){var R,D,k;let t,e,n,i,r,o,a,c,l,u,h=((R=s[0])==null?void 0:R.name)+"",d,m,g,f=((D=s[0])==null?void 0:D.text)+"",p,x,M,_,v,S=((k=s[0])==null?void 0:k.funFact)+"",E,C,y,b,P,z=s[1],B=[];for(let V=0;V<z.length;V+=1)B[V]=mc(pc(s,z,V));return{c(){t=Me("main"),e=Me("div"),n=Me("button"),n.innerHTML='<i class="fa-solid fa-chevron-up"></i>',i=Cn(),r=Me("ul");for(let V=0;V<B.length;V+=1)B[V].c();o=Cn(),a=Me("button"),a.innerHTML='<i class="fa-solid fa-chevron-down"></i>',c=Cn(),l=Me("div"),u=Me("h1"),d=wr(h),m=Cn(),g=Me("p"),p=wr(f),x=Cn(),M=Me("p"),M.textContent="fun fact:",_=Cn(),v=Me("p"),E=wr(S),C=Cn(),y=Me("div"),y.innerHTML="<canvas></canvas>",Yt(n,"class","svelte-17gkw7v"),Yt(r,"class","svelte-17gkw7v"),Yt(a,"class","svelte-17gkw7v"),Yt(e,"class","planet-legend svelte-17gkw7v"),Yt(u,"class","svelte-17gkw7v"),Yt(g,"class","info-text svelte-17gkw7v"),Yt(M,"class","fun-fact-label svelte-17gkw7v"),Yt(v,"class","fun-fact svelte-17gkw7v"),Yt(l,"class","text-wall svelte-17gkw7v"),Yt(y,"class","planet-preview svelte-17gkw7v"),Yt(y,"id","canvas-container"),Yt(t,"class","svelte-17gkw7v")},m(V,Y){xc(V,t,Y),Ot(t,e),Ot(e,n),Ot(e,i),Ot(e,r);for(let G=0;G<B.length;G+=1)B[G].m(r,null);Ot(e,o),Ot(e,a),Ot(t,c),Ot(t,l),Ot(l,u),Ot(u,d),Ot(l,m),Ot(l,g),Ot(g,p),Ot(l,x),Ot(l,M),Ot(l,_),Ot(l,v),Ot(v,E),Ot(t,C),Ot(t,y),b||(P=[Oa(n,"click",s[5]),Oa(a,"click",s[7])],b=!0)},p(V,[Y]){var G,Z,$;if(Y&19){z=V[1];let it;for(it=0;it<z.length;it+=1){const O=pc(V,z,it);B[it]?B[it].p(O,Y):(B[it]=mc(O),B[it].c(),B[it].m(r,null))}for(;it<B.length;it+=1)B[it].d(1);B.length=z.length}Y&1&&h!==(h=((G=V[0])==null?void 0:G.name)+"")&&Ms(d,h),Y&1&&f!==(f=((Z=V[0])==null?void 0:Z.text)+"")&&Ms(p,f),Y&1&&S!==(S=(($=V[0])==null?void 0:$.funFact)+"")&&Ms(E,S)},i:Lr,o:Lr,d(V){V&&lo(t),eh(B,V),b=!1,Vr(P)}}}const ys=1500;function ux(s,t,e){const n=Pr.Elastic.Out;let i,r=[...lx];r.map(_=>{_.name==="Earth"&&(_.texture=X0,_.icon=tx),_.name==="Jupiter"&&(_.texture=Y0,_.icon=ex),_.name==="Mars"&&(_.texture=j0,_.icon=nx),_.name==="Mercury"&&(_.texture=$0,_.icon=ix),_.name==="Neptune"&&(_.texture=Z0,_.icon=rx),_.name==="Saturn"&&(_.texture=K0,_.icon=sx),_.name==="Uranus"&&(_.texture=J0,_.icon=ax),_.name==="Venus"&&(_.texture=Q0,_.icon=ox)}),rh(()=>{o(),e(0,i=r.find(_=>_.name==="Earth")),e(1,r)});function o(){const _=document.querySelector("#canvas-container"),v=new F0,S=a(_),E=c(_);let C,y=!1;const b={x:void 0,y:void 0};l(v),r.forEach(z=>{z.mesh=new gn(new Os(5,50,50),new Nn({vertexShader:V0,fragmentShader:W0,uniforms:{globeTexture:{value:new k0().load(z.texture)}}}));const B=new gn(new Os(5,50,50),new Nn({vertexShader:H0,fragmentShader:q0,blending:Qa,side:Pe}));B.scale.set(1.1,1.1,1.1),z.mesh.add(B),z.name!="Earth"&&(z.mesh.position.y+=20),v.add(z.mesh)}),_.addEventListener("mouseover",()=>{C=i.mesh.rotation.y,y=!0}),_.addEventListener("mouseout",()=>y=!1),_.addEventListener("mousemove",z=>{b.x=z.clientX/innerWidth*2-1,b.y=-(z.clientY/innerHeight)*2+1});function P(){requestAnimationFrame(P),E.render(v,S),G0(),i&&e(0,i.mesh.rotation.y+=.001,i),y&&xu.to(i==null?void 0:i.mesh.rotation,{x:-b.y*.3,y:C+b.x*.5,duration:2})}P()}function a(_){const v=new je(75,_.offsetWidth/_.offsetHeight,.1,1e3);return v.position.z=15,v}function c(_){const v=new Po({antialias:!0,canvas:_.querySelector("canvas")});return v.setSize(_.offsetWidth,_.offsetHeight),v.setPixelRatio(window.devicePixelRatio),v}function l(_){const v=new Mn,S=new qu({color:16777215}),E=[];for(let y=0;y<1e4;y++){const b=(Math.random()-.5)*2e3,P=(Math.random()-.5)*2e3,z=-Math.random()*2e3;E.push(b,P,z)}v.setAttribute("position",new ln(E,3));const C=new O0(v,S);_.add(C)}function u(){let v=r.findIndex(S=>S.name===i.name)-1;v<0&&(v=r.length-1),g(i,r[v]),f(r[v])}function h(){let _=r.findIndex(E=>E.name===i.name),v=r.length-1,S=_+1;S>v&&(S=0),m(i,r[S]),f(r[S])}function d(_){if(i===_)return;let v=0,S=0;for(let E=0;E<r.length;E++)r[E].name===i.name&&(v=E),r[E].name===_.name&&(S=E);v>S?g(i,_):m(i,_),f(_)}function m(_,v){v.mesh.position.y=-20,new vs(_.mesh.position).to({y:20},ys).easing(n).start(),new vs(v.mesh.position).to({y:0},ys).easing(n).start()}function g(_,v){v.mesh.position.y=20,new vs(_.mesh.position).to({y:-20},ys).easing(n).start(),new vs(v.mesh.position).to({y:0},ys).easing(n).start()}function f(_){const v=document.querySelector(".text-wall");v.style.opacity="0",v.addEventListener("transitionend",()=>{e(0,i=_),v.style.opacity="1"},{once:!0})}return[i,r,u,h,d,()=>u(),_=>d(_),()=>h()]}class hx extends ph{constructor(t){super(),dh(this,t,ux,cx,Qu,{})}}new hx({target:document.getElementById("app")});
