import{a as v,D as Xe,_ as b,d as ue,r as M,A as Fe,bJ as Je,c as H,h as w,bK as Qe,al as Ie,a8 as Ye,G as W,x as Ze,aj as X,a4 as Ae,ar as J,a6 as en,ah as Te,u as $e,ab as nn,B as Oe,b as tn,P as C,w as an,t as rn,bL as un,ad as ke,y as ln,ak as on,bM as sn,g as xe,J as cn,aR as dn,F as fn,bp as vn,b6 as mn,K as Ee,L as gn,N as q,M as T,R as te,O as pn,U as hn,Q as bn,bN as Sn,aP as yn,Z as Nn,$ as _n,V as Cn,a2 as wn}from"./index-2860dd7c.js";import{_ as In,F as kn}from"./index-a59f3bf3.js";import{_ as Pe,c as Ue}from"./index-e69dee28.js";import{u as xn}from"./useTaskListStore-19e73313.js";import{W as En,B as Bn}from"./button-e501ff87.js";var Dn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const Vn=Dn;function Be(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),i.forEach(function(o){Mn(t,o,n[o])})}return t}function Mn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ye=function(e,n){var i=Be({},e,n.attrs);return v(Xe,Be({},i,{icon:Vn}),null)};ye.displayName="UpOutlined";ye.inheritAttrs=!1;const Fn=ye;function be(){return typeof BigInt=="function"}function ae(t){var e=t.trim(),n=e.startsWith("-");n&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var i=e||"0",o=i.split("."),f=o[0]||"0",p=o[1]||"0";f==="0"&&p==="0"&&(n=!1);var s=n?"-":"";return{negative:n,negativeStr:s,trimStr:i,integerStr:f,decimalStr:p,fullStr:"".concat(s).concat(i)}}function Ne(t){var e=String(t);return!Number.isNaN(Number(e))&&e.includes("e")}function re(t){var e=String(t);if(Ne(t)){var n=Number(e.slice(e.indexOf("e-")+2)),i=e.match(/\.(\d+)/);return i!=null&&i[1]&&(n+=i[1].length),n}return e.includes(".")&&Ce(e)?e.length-e.indexOf(".")-1:0}function _e(t){var e=String(t);if(Ne(t)){if(t>Number.MAX_SAFE_INTEGER)return String(be()?BigInt(t).toString():Number.MAX_SAFE_INTEGER);if(t<Number.MIN_SAFE_INTEGER)return String(be()?BigInt(t).toString():Number.MIN_SAFE_INTEGER);e=t.toFixed(re(e))}return ae(e).fullStr}function Ce(t){return typeof t=="number"?!Number.isNaN(t):t?/^\s*-?\d+(\.\d+)?\s*$/.test(t)||/^\s*-?\d+\.\s*$/.test(t)||/^\s*-?\.\d+\s*$/.test(t):!1}function Re(t){return!t&&t!==0&&!Number.isNaN(t)||!String(t).trim()}var An=function(){function t(e){if(Ue(this,t),b(this,"origin",""),Re(e)){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return Pe(t,[{key:"negate",value:function(){return new t(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new t(n);var i=Number(n);if(Number.isNaN(i))return this;var o=this.number+i;if(o>Number.MAX_SAFE_INTEGER)return new t(Number.MAX_SAFE_INTEGER);if(o<Number.MIN_SAFE_INTEGER)return new t(Number.MIN_SAFE_INTEGER);var f=Math.max(re(this.number),re(i));return new t(o.toFixed(f))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":_e(this.number):this.origin}}]),t}(),Tn=function(){function t(e){if(Ue(this,t),b(this,"origin",""),Re(e)){this.empty=!0;return}if(this.origin=String(e),e==="-"||Number.isNaN(e)){this.nan=!0;return}var n=e;if(Ne(n)&&(n=Number(n)),n=typeof n=="string"?n:_e(n),Ce(n)){var i=ae(n);this.negative=i.negative;var o=i.trimStr.split(".");this.integer=BigInt(o[0]);var f=o[1]||"0";this.decimal=BigInt(f),this.decimalLen=f.length}else this.nan=!0}return Pe(t,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var i="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(i)}},{key:"negate",value:function(){var n=new t(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new t(n);var i=new t(n);if(i.isInvalidate())return this;var o=Math.max(this.getDecimalStr().length,i.getDecimalStr().length),f=this.alignDecimal(o),p=i.alignDecimal(o),s=(f+p).toString(),h=ae(s),d=h.negativeStr,m=h.trimStr,r="".concat(d).concat(m.padStart(o+1,"0"));return new t("".concat(r.slice(0,-o),".").concat(r.slice(-o)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":ae("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),t}();function O(t){return be()?new Tn(t):new An(t)}function Se(t,e,n){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t==="")return"";var o=ae(t),f=o.negativeStr,p=o.integerStr,s=o.decimalStr,h="".concat(e).concat(s),d="".concat(f).concat(p);if(n>=0){var m=Number(s[n]);if(m>=5&&!i){var r=O(t).add("".concat(f,"0.").concat("0".repeat(n)).concat(10-m));return Se(r.toString(),e,n,i)}return n===0?d:"".concat(d).concat(e).concat(s.padEnd(n,"0").slice(0,n))}return h===".0"?d:"".concat(d).concat(h)}var $n=200,On=600;const Pn=ue({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,n){var i=n.slots,o=n.emit,f=M(),p=function(d,m){d.preventDefault(),o("step",m);function r(){o("step",m),f.value=setTimeout(r,$n)}f.value=setTimeout(r,On)},s=function(){clearTimeout(f.value)};return Fe(function(){s()}),function(){if(Je())return null;var h=e.prefixCls,d=e.upDisabled,m=e.downDisabled,r="".concat(h,"-handler"),D=H(r,"".concat(r,"-up"),b({},"".concat(r,"-up-disabled"),d)),V=H(r,"".concat(r,"-down"),b({},"".concat(r,"-down-disabled"),m)),y={unselectable:"on",role:"button",onMouseup:s,onMouseleave:s},k=i.upNode,$=i.downNode;return v("div",{class:"".concat(r,"-wrap")},[v("span",w(w({},y),{},{onMousedown:function(F){p(F,!0)},"aria-label":"Increase Value","aria-disabled":d,class:D}),[(k==null?void 0:k())||v("span",{unselectable:"on",class:"".concat(h,"-handler-up-inner")},null)]),v("span",w(w({},y),{},{onMousedown:function(F){p(F,!1)},"aria-label":"Decrease Value","aria-disabled":m,class:V}),[($==null?void 0:$())||v("span",{unselectable:"on",class:"".concat(h,"-handler-down-inner")},null)])])}}});function Un(t,e){var n=M(null);function i(){try{var f=t.value,p=f.selectionStart,s=f.selectionEnd,h=f.value,d=h.substring(0,p),m=h.substring(s);n.value={start:p,end:s,value:h,beforeTxt:d,afterTxt:m}}catch{}}function o(){if(t.value&&n.value&&e.value)try{var f=t.value.value,p=n.value,s=p.beforeTxt,h=p.afterTxt,d=p.start,m=f.length;if(f.endsWith(h))m=f.length-n.value.afterTxt.length;else if(f.startsWith(s))m=s.length;else{var r=s[d-1],D=f.indexOf(r,d-1);D!==-1&&(m=D+1)}t.value.setSelectionRange(m,m)}catch(V){Qe(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(V.message))}}return[i,o]}const Rn=function(){var t=M(0),e=function(){Ie.cancel(t.value)};return Fe(function(){e()}),function(n){e(),t.value=Ie(function(){n()})}};var zn=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],De=function(e,n){return e||n.isEmpty()?n.toString():n.toNumber()},Ve=function(e){var n=O(e);return n.isInvalidate()?null:n},ze=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};const qn=ue({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:w(w({},ze()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,n){var i=n.attrs,o=n.slots,f=n.emit,p=n.expose,s=M(),h=M(!1),d=M(!1),m=M(!1),r=M(O(e.value));function D(l){e.value===void 0&&(r.value=l)}var V=function(a,g){if(!g)return e.precision>=0?e.precision:Math.max(re(a),re(e.step))},y=function(a){var g=String(a);if(e.parser)return e.parser(g);var u=g;return e.decimalSeparator&&(u=u.replace(e.decimalSeparator,".")),u.replace(/[^\w.-]+/g,"")},k=M(""),$=function(a,g){if(e.formatter)return e.formatter(a,{userTyping:g,input:String(k.value)});var u=typeof a=="number"?_e(a):a;if(!g){var E=V(u,g);if(Ce(u)&&(e.decimalSeparator||E>=0)){var I=e.decimalSeparator||".";u=Se(u,I,E)}}return u},P=function(){var l=e.value;return r.value.isInvalidate()&&["string","number"].includes(Ye(l))?Number.isNaN(l)?"":l:$(r.value.toString(),!1)}();k.value=P;function F(l,a){k.value=$(l.isInvalidate()?l.toString(!1):l.toString(!a),a)}var U=W(function(){return Ve(e.max)}),x=W(function(){return Ve(e.min)}),N=W(function(){return!U.value||!r.value||r.value.isInvalidate()?!1:U.value.lessEquals(r.value)}),R=W(function(){return!x.value||!r.value||r.value.isInvalidate()?!1:r.value.lessEquals(x.value)}),S=Un(s,h),c=Ze(S,2),B=c[0],ie=c[1],L=function(a){return U.value&&!a.lessEquals(U.value)?U.value:x.value&&!x.value.lessEquals(a)?x.value:null},G=function(a){return!L(a)},j=function(a,g){var u=a,E=G(u)||u.isEmpty();if(!u.isEmpty()&&!g&&(u=L(u)||u,E=!0),!e.readonly&&!e.disabled&&E){var I=u.toString(),A=V(I,g);if(A>=0&&(u=O(Se(I,".",A))),!u.equals(r.value)){var z;D(u),(z=e.onChange)===null||z===void 0||z.call(e,u.isEmpty()?null:De(e.stringMode,u)),e.value===void 0&&F(u,g)}return u}return r.value},Q=Rn(),Y=function l(a){var g;if(B(),k.value=a,!m.value){var u=y(a),E=O(u);E.isNaN()||j(E,!0)}(g=e.onInput)===null||g===void 0||g.call(e,a),Q(function(){var I=a;e.parser||(I=a.replace(/。/g,".")),I!==a&&l(I)})},Z=function(){m.value=!0},le=function(){m.value=!1,Y(s.value.value)},ee=function(a){Y(a.target.value)},ne=function(a){var g,u;if(!(a&&N.value||!a&&R.value)){d.value=!1;var E=O(e.step);a||(E=E.negate());var I=(r.value||O(0)).add(E.toString()),A=j(I,!1);(g=e.onStep)===null||g===void 0||g.call(e,De(e.stringMode,A),{offset:e.step,type:a?"up":"down"}),(u=s.value)===null||u===void 0||u.focus()}},oe=function(a){var g=O(y(k.value)),u=g;g.isNaN()?u=r.value:u=j(g,a),e.value!==void 0?F(r.value,!1):u.isNaN()||F(u,!1)},ve=function(a){var g=a.which;if(d.value=!0,g===J.ENTER){var u;m.value||(d.value=!1),oe(!1),(u=e.onPressEnter)===null||u===void 0||u.call(e,a)}e.keyboard!==!1&&!m.value&&[J.UP,J.DOWN].includes(g)&&(ne(J.UP===g),a.preventDefault())},_=function(){d.value=!1},K=function(a){oe(!1),h.value=!1,d.value=!1,f("blur",a)};return X(function(){return e.precision},function(){r.value.isInvalidate()||F(r.value,!1)},{flush:"post"}),X(function(){return e.value},function(){var l=O(e.value);r.value=l;var a=O(y(k.value));(!l.equals(a)||!d.value||e.formatter)&&F(l,d.value)},{flush:"post"}),X(k,function(){e.formatter&&ie()},{flush:"post"}),X(function(){return e.disabled},function(l){l&&(h.value=!1)}),p({focus:function(){var a;(a=s.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=s.value)===null||a===void 0||a.blur()}}),function(){var l,a=w(w({},i),e),g=a.prefixCls,u=g===void 0?"rc-input-number":g,E=a.min,I=a.max,A=a.step,z=A===void 0?1:A;a.defaultValue,a.value;var se=a.disabled,ce=a.readonly;a.keyboard;var de=a.controls,me=de===void 0?!0:de,fe=a.autofocus;a.stringMode,a.parser,a.formatter,a.precision,a.decimalSeparator,a.onChange,a.onInput,a.onPressEnter,a.onStep;var qe=a.lazy,He=a.class,Le=a.style,Ge=Ae(a,zn),je=o.upHandler,Ke=o.downHandler,we="".concat(u,"-input"),ge={};return qe?ge.onChange=ee:ge.onInput=ee,v("div",{class:H(u,He,(l={},b(l,"".concat(u,"-focused"),h.value),b(l,"".concat(u,"-disabled"),se),b(l,"".concat(u,"-readonly"),ce),b(l,"".concat(u,"-not-a-number"),r.value.isNaN()),b(l,"".concat(u,"-out-of-range"),!r.value.isInvalidate()&&!G(r.value)),l)),style:Le,onKeydown:ve,onKeyup:_},[me&&v(Pn,{prefixCls:u,upDisabled:N.value,downDisabled:R.value,onStep:ne},{upNode:je,downNode:Ke}),v("div",{class:"".concat(we,"-wrap")},[v("input",w(w(w({autofocus:fe,autocomplete:"off",role:"spinbutton","aria-valuemin":E,"aria-valuemax":I,"aria-valuenow":r.value.isInvalidate()?null:r.value.toString(),step:z},Ge),{},{ref:s,class:we,value:k.value,disabled:se,readonly:ce,onFocus:function(We){h.value=!0,f("focus",We)}},ge),{},{onBlur:K,onCompositionstart:Z,onCompositionend:le}),null)])])}}});function pe(t){return t!=null}var Hn=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],Me=ze(),Ln=function(){return w(w({},Me),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:C.any,addonAfter:C.any,prefix:C.any,"onUpdate:value":Me.onChange,valueModifiers:Object})},he=ue({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:Ln(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,n){var i=n.emit,o=n.expose,f=n.attrs,p=n.slots,s=Te(),h=$e("input-number",e),d=h.prefixCls,m=h.size,r=h.direction,D=M(e.value===void 0?e.defaultValue:e.value),V=M(!1);X(function(){return e.value},function(){D.value=e.value});var y=M(null),k=function(){var N;(N=y.value)===null||N===void 0||N.focus()},$=function(){var N;(N=y.value)===null||N===void 0||N.blur()};o({focus:k,blur:$});var P=function(N){e.value===void 0&&(D.value=N),i("update:value",N),i("change",N),s.onFieldChange()},F=function(N){V.value=!1,i("blur",N),s.onFieldBlur()},U=function(N){V.value=!0,i("focus",N)};return function(){var x,N,R,S,c=w(w({},f),e),B=c.class,ie=c.bordered,L=c.readonly,G=c.style,j=c.addonBefore,Q=j===void 0?(x=p.addonBefore)===null||x===void 0?void 0:x.call(p):j,Y=c.addonAfter,Z=Y===void 0?(N=p.addonAfter)===null||N===void 0?void 0:N.call(p):Y,le=c.prefix,ee=le===void 0?(R=p.prefix)===null||R===void 0?void 0:R.call(p):le,ne=c.valueModifiers,oe=ne===void 0?{}:ne,ve=Ae(c,Hn),_=d.value,K=m.value,l=H((S={},b(S,"".concat(_,"-lg"),K==="large"),b(S,"".concat(_,"-sm"),K==="small"),b(S,"".concat(_,"-rtl"),r.value==="rtl"),b(S,"".concat(_,"-readonly"),L),b(S,"".concat(_,"-borderless"),!ie),S),B),a=v(qn,w(w({},Oe(ve,["size","defaultValue"])),{},{ref:y,lazy:!!oe.lazy,value:D.value,class:l,prefixCls:_,readonly:L,onChange:P,onBlur:F,onFocus:U}),{upHandler:function(){return v(Fn,{class:"".concat(_,"-handler-up-inner")},null)},downHandler:function(){return v(nn,{class:"".concat(_,"-handler-down-inner")},null)}}),g=pe(Q)||pe(Z);if(pe(ee)){var u,E=H("".concat(_,"-affix-wrapper"),(u={},b(u,"".concat(_,"-affix-wrapper-focused"),V.value),b(u,"".concat(_,"-affix-wrapper-disabled"),e.disabled),b(u,"".concat(_,"-affix-wrapper-rtl"),r.value==="rtl"),b(u,"".concat(_,"-affix-wrapper-readonly"),L),b(u,"".concat(_,"-affix-wrapper-borderless"),!ie),b(u,"".concat(B),!g&&B),u));a=v("div",{class:E,style:G,onMouseup:function(){return y.value.focus()}},[v("span",{class:"".concat(_,"-prefix")},[ee]),a])}if(g){var I,A="".concat(_,"-group"),z="".concat(A,"-addon"),se=Q?v("div",{class:z},[Q]):null,ce=Z?v("div",{class:z},[Z]):null,de=H("".concat(_,"-wrapper"),A,b({},"".concat(A,"-rtl"),r.value==="rtl")),me=H("".concat(_,"-group-wrapper"),(I={},b(I,"".concat(_,"-group-wrapper-sm"),K==="small"),b(I,"".concat(_,"-group-wrapper-lg"),K==="large"),b(I,"".concat(_,"-group-wrapper-rtl"),r.value==="rtl"),I),B);a=v("div",{class:me,style:G},[v("div",{class:de},[se,a,ce])])}return tn(a,{style:G})}}});const Gn=en(he,{install:function(e){return e.component(he.name,he),e}});var jn=rn("small","default"),Kn=function(){return{id:String,prefixCls:String,size:C.oneOf(jn),disabled:{type:Boolean,default:void 0},checkedChildren:C.any,unCheckedChildren:C.any,tabindex:C.oneOfType([C.string,C.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:C.oneOfType([C.string,C.number,C.looseBool]),checkedValue:C.oneOfType([C.string,C.number,C.looseBool]).def(!0),unCheckedValue:C.oneOfType([C.string,C.number,C.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}},Wn=ue({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:Kn(),slots:["checkedChildren","unCheckedChildren"],setup:function(e,n){var i=n.attrs,o=n.slots,f=n.expose,p=n.emit,s=Te();un(function(){ke(!("defaultChecked"in i),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),ke(!("value"in i),"Switch","`value` is not validate prop, do you mean `checked`?")});var h=M(e.checked!==void 0?e.checked:i.defaultChecked),d=W(function(){return h.value===e.checkedValue});X(function(){return e.checked},function(){h.value=e.checked});var m=$e("switch",e),r=m.prefixCls,D=m.direction,V=m.size,y=M(),k=function(){var c;(c=y.value)===null||c===void 0||c.focus()},$=function(){var c;(c=y.value)===null||c===void 0||c.blur()};f({focus:k,blur:$}),ln(function(){on(function(){e.autofocus&&!e.disabled&&y.value.focus()})});var P=function(c,B){e.disabled||(p("update:checked",c),p("change",c,B),s.onFieldChange())},F=function(c){p("blur",c)},U=function(c){k();var B=d.value?e.unCheckedValue:e.checkedValue;P(B,c),p("click",B,c)},x=function(c){c.keyCode===J.LEFT?P(e.unCheckedValue,c):c.keyCode===J.RIGHT&&P(e.checkedValue,c),p("keydown",c)},N=function(c){var B;(B=y.value)===null||B===void 0||B.blur(),p("mouseup",c)},R=W(function(){var S;return S={},b(S,"".concat(r.value,"-small"),V.value==="small"),b(S,"".concat(r.value,"-loading"),e.loading),b(S,"".concat(r.value,"-checked"),d.value),b(S,"".concat(r.value,"-disabled"),e.disabled),b(S,r.value,!0),b(S,"".concat(r.value,"-rtl"),D.value==="rtl"),S});return function(){var S;return v(En,{insertExtraNode:!0},{default:function(){return[v("button",w(w(w({},Oe(e,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),i),{},{id:(S=e.id)!==null&&S!==void 0?S:s.id.value,onKeydown:x,onClick:U,onBlur:F,onMouseup:N,type:"button",role:"switch","aria-checked":h.value,disabled:e.disabled||e.loading,class:[i.class,R.value],ref:y}),[v("div",{class:"".concat(r.value,"-handle")},[e.loading?v(sn,{class:"".concat(r.value,"-loading-icon")},null):null]),v("span",{class:"".concat(r.value,"-inner")},[d.value?xe(o,e,"checkedChildren"):xe(o,e,"unCheckedChildren")])])]}})}}});const Xn=an(Wn);const Jn=t=>(Nn("data-v-8fd44744"),t=t(),_n(),t),Qn={class:"panel"},Yn=Jn(()=>Cn("sub",null,"越小对网络压力越大",-1)),Zn=ue({__name:"globalSetting",setup(t){const e=cn(new dn(-1,0,0,"throw")),n=fn(),i=xn(),{user:o}=vn(n),f=async()=>{await e.pushAction(Sn).res,o.value=void 0,yn.info("登出成功")};return(p,s)=>{const h=Xn,d=In,m=Gn,r=mn("logout-outlined"),D=Bn,V=kn;return Ee(),gn("div",Qn,[v(V,null,{default:q(()=>[v(d,{label:"使用缩略图预览"},{default:q(()=>[v(h,{checked:T(n).enableThumbnail,"onUpdate:checked":s[0]||(s[0]=y=>T(n).enableThumbnail=y)},null,8,["checked"])]),_:1}),v(d,{label:"轮询间隔"},{default:q(()=>[v(m,{value:T(i).pollInterval,"onUpdate:value":s[1]||(s[1]=y=>T(i).pollInterval=y),min:.5,disabled:!T(i).queue.isIdle},null,8,["value","min","disabled"]),te(" (s) "),Yn]),_:1}),v(d,{label:"网格缩略图宽度"},{default:q(()=>[v(m,{value:T(n).gridThumbnailSize,"onUpdate:value":s[2]||(s[2]=y=>T(n).gridThumbnailSize=y),min:256,max:1024},null,8,["value"]),te(" (px) ")]),_:1}),v(d,{label:"大尺寸网格缩略图宽度"},{default:q(()=>[v(m,{value:T(n).largeGridThumbnailSize,"onUpdate:value":s[3]||(s[3]=y=>T(n).largeGridThumbnailSize=y),min:256,max:1024},null,8,["value"]),te(" (px) ")]),_:1}),T(o)?(Ee(),pn(d,{key:0,label:"百度云已登录用户"},{default:q(()=>[te(hn(T(o).username)+" ",1),v(D,{onClick:f,loading:!e.isIdle},{icon:q(()=>[v(r)]),default:q(()=>[te(" 登出 ")]),_:1},8,["loading"])]),_:1})):bn("",!0)]),_:1})])}}});const it=wn(Zn,[["__scopeId","data-v-8fd44744"]]);export{it as default};
