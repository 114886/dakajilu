(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81ddc33c"],{"5a0c":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t=1e3,e=6e4,i=36e5,s="millisecond",n="second",r="minute",a="hour",u="day",o="week",h="month",c="quarter",f="year",d="date",m="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,e,i){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(i)+t},g={s:y,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),s=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+y(s,2,"0")+":"+y(n,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var s=12*(i.year()-e.year())+(i.month()-e.month()),n=e.clone().add(s,h),r=i-n<0,a=e.clone().add(s+(r?-1:1),h);return+(-(s+(i-n)/(r?n-a:a-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:h,y:f,w:o,d:u,D:d,h:a,m:r,s:n,ms:s,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",M={};M[p]=v;var D=function(t){return t instanceof _},w=function(t,e,i){var s;if(!t)return p;if("string"==typeof t)M[t]&&(s=t),e&&(M[t]=e,s=t);else{var n=t.name;M[n]=t,s=n}return!i&&s&&(p=s),s||!i&&p},S=function(t,e){if(D(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new _(i)},b=g;b.l=w,b.i=D,b.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function v(t){this.$L=w(t.locale,null,!0),this.parse(t)}var y=v.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(l);if(s){var n=s[2]-1||0,r=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return b},y.isValid=function(){return!(this.$d.toString()===m)},y.isSame=function(t,e){var i=S(t);return this.startOf(e)<=i&&i<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,i){return b.u(t)?this[e]:this.set(i,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var i=this,s=!!b.u(e)||e,c=b.p(t),m=function(t,e){var n=b.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return s?n:n.endOf(u)},l=function(t,e){return b.w(i.toDate()[t].apply(i.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},$=this.$W,v=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(c){case f:return s?m(1,0):m(31,11);case h:return s?m(1,v):m(0,v+1);case o:var p=this.$locale().weekStart||0,M=($<p?$+7:$)-p;return m(s?y-M:y+(6-M),v);case u:case d:return l(g+"Hours",0);case a:return l(g+"Minutes",1);case r:return l(g+"Seconds",2);case n:return l(g+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var i,o=b.p(t),c="set"+(this.$u?"UTC":""),m=(i={},i[u]=c+"Date",i[d]=c+"Date",i[h]=c+"Month",i[f]=c+"FullYear",i[a]=c+"Hours",i[r]=c+"Minutes",i[n]=c+"Seconds",i[s]=c+"Milliseconds",i)[o],l=o===u?this.$D+(e-this.$W):e;if(o===h||o===f){var $=this.clone().set(d,1);$.$d[m](l),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else m&&this.$d[m](l);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[b.p(t)]()},y.add=function(s,c){var d,m=this;s=Number(s);var l=b.p(c),$=function(t){var e=S(m);return b.w(e.date(e.date()+Math.round(t*s)),m)};if(l===h)return this.set(h,this.$M+s);if(l===f)return this.set(f,this.$y+s);if(l===u)return $(1);if(l===o)return $(7);var v=(d={},d[r]=e,d[a]=i,d[n]=t,d)[l]||1,y=this.$d.getTime()+s*v;return b.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||m;var s=t||"YYYY-MM-DDTHH:mm:ssZ",n=b.z(this),r=this.$H,a=this.$m,u=this.$M,o=i.weekdays,h=i.months,c=function(t,i,n,r){return t&&(t[i]||t(e,s))||n[i].substr(0,r)},f=function(t){return b.s(r%12||12,t,"0")},d=i.meridiem||function(t,e,i){var s=t<12?"AM":"PM";return i?s.toLowerCase():s},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:b.s(u+1,2,"0"),MMM:c(i.monthsShort,u,h,3),MMMM:c(h,u),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,o,2),ddd:c(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:b.s(r,2,"0"),h:f(1),hh:f(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:n};return s.replace($,(function(t,e){return e||l[t]||n.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(s,d,m){var l,$=b.p(d),v=S(s),y=(v.utcOffset()-this.utcOffset())*e,g=this-v,p=b.m(this,v);return p=(l={},l[f]=p/12,l[h]=p,l[c]=p/3,l[o]=(g-y)/6048e5,l[u]=(g-y)/864e5,l[a]=g/i,l[r]=g/e,l[n]=g/t,l)[$]||g,m?p:b.a(p)},y.daysInMonth=function(){return this.endOf(h).$D},y.$locale=function(){return M[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),s=w(t,e,!0);return s&&(i.$L=s),i},y.clone=function(){return b.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},v}(),O=_.prototype;return S.prototype=O,[["$ms",s],["$s",n],["$m",r],["$H",a],["$W",u],["$M",h],["$y",f],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,_,S),t.$i=!0),S},S.locale=w,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=M[p],S.Ls=M,S.p={},S}))},"5d08":function(t,e,i){"use strict";i("82f0")},6246:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h4",{attrs:{id:"mytime"}},[t._v(t._s(t.str))]),i("div",{staticClass:"buttons"},[i("el-button",{attrs:{id:"start",type:"primary",plain:""},on:{click:t.start}},[t._v("开始计时")]),i("el-button",{attrs:{id:"stop",type:"primary",plain:""},on:{click:t.stop}},[t._v("暂停计时")]),i("el-button",{attrs:{id:"reset",type:"primary",plain:""},on:{click:t.reset}},[t._v("重置")]),i("el-button",{attrs:{type:"success",plain:""},on:{click:function(e){return t.getNote()}}},[t._v("保存数据")])],1)])},n=[],r=i("5a0c"),a=i.n(r),u={name:"Miaobiao",data:function(){return{h:0,m:0,s:0,ms:0,a:"",c:"",addtimes:0,time:0,str:"00:00:00",times:"0"}},methods:{getNote:function(){var t=this;this.$prompt("如有备注，请输入","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(e){var i=e.value;t.$message({type:"success",message:"备注成功"}),t.getTime(i)})).catch((function(){t.$message({type:"info",message:"取消输入"})}))},getTime:function(t){var e=this;this.$confirm("此操作将保存计时, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$store.commit("createTime",{timeSecond:+e.times,note:t}),clearInterval(e.time),e.h=0,e.m=0,e.ms=0,e.s=0,e.str="00:00:00",e.$message({type:"success",message:"保存成功!"})})).catch((function(){e.$message({type:"info",message:"已取消保存"})}))},start:function(){document.addEventListener("visibilitychange",this.watchTimes),this.$message({showClose:!0,message:"开始计时",type:"success",center:!0}),this.time=setInterval(this.timer,50)},stop:function(){document.removeEventListener("visibilitychange",this.watchTimes),this.$message({showClose:!0,message:"暂停计时",type:"warning",center:!0}),clearInterval(this.time)},reset:function(){var t=this;this.$confirm("此操作将重新置计时器, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"重置成功!"}),clearInterval(t.time),t.h=0,t.m=0,t.ms=0,t.s=0,t.str="00:00:00"})).catch((function(){t.$message({type:"info",message:"已取消重置"})}))},timer:function(){if("hidden"===document.visibilityState&&(""===this.a&&(this.c=a()(new Date)),this.a="1"),""!==this.a&&"visible"===document.visibilityState){var t=a()(new Date);this.a="",this.addtimes=Math.floor(t.diff(this.c)/1e3)}if(0!==this.addtimes){this.times=this.s+60*this.m+3600*this.h+this.addtimes;var e=Math.floor(this.addtimes/3600),i=Math.floor(this.addtimes/60),s=Math.floor(this.addtimes);this.h+=e,this.addtimes=this.addtimes-36e5*e,this.m+=i,this.addtimes=this.addtimes-6e4*i,this.s+=s,this.str=this.toDub(this.h)+":"+this.toDub(this.m)+":"+this.toDub(this.s),this.addtimes=0}else this.ms=this.ms+50,this.ms>=1e3&&(this.ms=0,this.s=this.s+1),this.s>=60&&(this.s=0,this.m=this.m+1),this.m>=60&&(this.m=0,this.h=this.h+1),this.str=this.toDub(this.h)+":"+this.toDub(this.m)+":"+this.toDub(this.s),this.times=this.s+60*this.m+3600*this.h},toDub:function(t){return t<10?"0"+t:""+t}}},o=u,h=(i("5d08"),i("2877")),c=Object(h["a"])(o,s,n,!1,null,"12c5a4cb",null);e["default"]=c.exports},"82f0":function(t,e,i){}}]);
//# sourceMappingURL=chunk-81ddc33c.d153ef70.js.map