"use strict";var NieUrs=function(e){var t={load:function(e){var o=$("#"+e.holder),n=e.holder,a="#"+e.holder,i=a.replace(/#|\./g,""),r="game",s="game.163.com",m="",p="",l="222",c=4,u="https://zc.reg.163.com/regInitialized?pd=game&pkid=VIZHJSP&pkht=game.163.com",g=1,d="\u8bf7\u8f93\u5165\u5e10\u53f7",h="\u8bf7\u8f93\u5165\u5bc6\u7801",f=1e4,y=1e4,N=0,w=0,L=1,b="\u767b \u5f55",v="\u767b \u5f55",S="\u7f51\u6613\u90ae\u7bb1\u5e10\u53f7",T="\u7f51\u6613\u624b\u673a\u5e10\u53f7",U="",x="https://nie.res.netease.com/nie/pc/zj/20200616172746/css/nieurs.css",k=["https://nie.res.netease.com/nie/pc/zj/20200616172746/css/nieurs-unit-1.css","https://nie.res.netease.com/nie/pc/zj/20200616172746/css/nieurs-unit-2.css"],_=["https://nie.res.netease.com/nie/pc/zj/20200616172746/css/custom/example_pc_primary.css","https://nie.res.netease.com/nie/pc/zj/20200616172746/css/custom/example_pc_round.css","https://nie.res.netease.com/nie/pc/zj/20200616172746/css/custom/example_m_primary.css","https://nie.res.netease.com/nie/pc/zj/20200616172746/css/custom/example_m_round.css"],R="https:",z="",D=[x,x],M=0,j=0,C=10,I="\u5341\u5929\u5185\u514d\u767b\u5f55",Q=10,E="\u5341\u5929\u5185\u514d\u767b\u5f55",P=0,F="login",B="163.com",H=0,A="",q="",J=1,O=0,V=1,K=1,W=0,Z="\u90ae\u7bb1\u5e10\u53f7\u6ce8\u518c",G="\u624b\u673a\u5e10\u53f7\u6ce8\u518c",X="\u53bb\u6ce8\u518c",Y="\u53bb\u767b\u5f55",et="\u6ce8 \u518c",tt=[{name:"\u300a\u670d\u52a1\u6761\u6b3e\u300b",url:"https://reg.163.com/agreement.shtml"},{name:"\u300a\u7f51\u6613\u9690\u79c1\u653f\u7b56\u300b",url:"https://reg.163.com/agreement_game.shtml"},{name:"\u300a\u7f51\u6613\u6e38\u620f\u9690\u79c1\u653f\u7b56\u300b",url:"https://unisdk.update.netease.com/html/latest_v90.html"}],ot=[];/Microsoft Internet Explorer/.test(navigator.appName)&&/MSIE7.0/.test(navigator.appVersion)&&(f=3e4,y=3e4),"undefined"!=typeof e.pholder&&(a=e.pholder,i=e.pholder.replace(/#|\./g,"")),"undefined"!=typeof e.product&&(r=e.product),"undefined"!=typeof e.host&&(s=e.host),"undefined"!=typeof e.promark&&(m=e.promark),"undefined"!=typeof e.productkey&&"undefined"!=typeof e.promark&&(p=e.productkey),"undefined"!=typeof e.account&&(d=e.account),"undefined"!=typeof e.pwd&&(h=e.pwd),"undefined"!=typeof e.swidth&&(l=e.swidth),"undefined"!=typeof e.style&&(U=e.style),"undefined"!=typeof e.terms&&(tt=e.terms),e.customStyleSwitch&&((e.customStyle>3||e.customStyle<0)&&(e.customStyle=0),x=_[e.customStyle],D[1]=x),"undefined"!=typeof e.css&&""!=e.css&&(e.customStyleSwitch?D.push(e.css):(x=e.css,D[1]=x)),"undefined"!=typeof e.logintype&&("phone"==e.logintype?(N=1,w=1):"both"==e.logintype&&(N=1,"phone"==e.loginactive&&(w=1),D.push(k[0]))),e.needunlogin&&(M=1,/^(7|10|20|30)$/.test(e.unLoginTime)&&(C=e.unLoginTime,Q=e.unLoginTime,I=e.unLoginTime+"\u5929\u514d\u767b\u5f55",E=e.unLoginTime+"\u5929\u514d\u767b\u5f55"),e.defaultUnLogin&&(j=1,P=1)),"undefined"!=typeof e.cookieDomain&&(B=e.cookieDomain),"undefined"!=typeof e.needQrLogin&&1==e.needQrLogin&&(H=1,D.push(k[1]),e.toolName&&(A=e.toolName),e.toolUrl&&(q=e.toolUrl)),"undefined"!=typeof e.page&&("login"==e.page?F="login":"register"==e.page&&(F="register")),"undefined"!=typeof e.single&&0==e.single&&(J=e.single),"undefined"!=typeof e.law&&(O=e.law?1:0),"undefined"!=typeof e.regagree&&(1==e.regagree?(V=0,K=0,W=1):0==e.regagree&&(V=1,K=1,W=0)),/^\//.test(D[0])&&(D[0]=window.location.protocol+"//"+window.location.host+x);for(var nt=0;nt<tt.length;nt++)ot.push({txt:tt[nt].name,url:tt[nt].url});var at=function(){for(var e=1;e<D.length;e++)/^\//.test(D[e])&&(D[e]="//"+window.location.host+D[e]);var t=x.split("/");if(/https/.test(t[0])||!t[2].split(":")[1])for(var o=1;o<D.length;o++)/^http:\/\/res.[a-z]+.netease.com/.test(D[o])?D[o]=D[o].replace(/^http:\/\/(res).([a-z]+).netease.com/,"//$2.$1.netease.com"):/^http:\/\/test.nie.163.com/.test(D[o])?D[o]=D[o].replace("http://test.nie.163.com","//test.nie.163.com"):/^https:/.test(D[o])&&(D[o]=D[o].replace("https:",""));else if(!/https/.test(t[0])){g=0,R="http:",c=3;for(var o=0;o<D.length;o++)/^https:\/\/nie.res.netease.com/.test(D[o])?D[o]=D[o].replace("https://nie.res.netease.com","//res.nie.netease.com"):/^https:\/\/test.nie.163.com/.test(D[o])?D[o]=D[o].replace("https://test.nie.163.com","//test.nie.163.com"):/^http:/.test(D[o])&&(D[o]=D[o].replace("http:",""))}D[0]=D[0].replace(/^https:|http:/,""),D[0]==D[1]&&D.splice(1,1),z=D.join()};at(),o.html("");var it={goEmailRegTxt:Z,goMbRegTxt:G,gotoRegTextMb:X,gotoLoginTextMb:Y,regMbTxt:et,needMobileReg:1,regCapLazyload:1,regSucCount:0,regDomainSuffixs:"@163.com,@126.com,@yeah.net,@qq.com,@sina.com,@sina.cn,@sohu.com",regPlaceholder:{account:"\u90ae\u7bb1\u5e10\u53f7",pwd:"8-16\u4f4d\u5bc6\u7801\uff0c\u533a\u5206\u5927\u5c0f\u5199"},terms:tt,mbRegTermsList:tt,uniteLogin:{noClauseForce:1,uniteLoginTermsList:tt},mailloginclause:{list:ot},hasIdCard:O,needRegAgreeNoChecked:V,needRegAgreeMbNoChecked:K,newCDN:1,version:c,aiCapBarHeight:23,aiCapPadding:1,isHttps:g,page:F,single:J,bgpTime:f,bgpTime2:y,includeBox:n,product:r,host:s,promark:m,productKey:p,swidth:l,placeholder:{account:d,pwd:h},regUrl:u,cssDomain:R,cssFiles:z,needMobileLogin:N,mobileFirst:w,smsLoginFirst:L,smsBtnTxt:b,mbBtnTxt:v,goEmailLoginTxt:S,goMbLoginTxt:T,style:U,needUnLogin:M,needQrLogin:H,toolName:A,toolUrl:q,regcb:function(o,n){if(1==e.cb||"fur"==e.urstype){var a={username:o,email:t.pinfo(),url:n};t.logSuccess(i,a,e.urstype)}},otherRegSuccess:function(o){window.location.protocol+"//"+window.location.host+"/download/";if(1==e.cb||"fur"==e.urstype){var n={username:o.userName,email:t.pinfo(),url:urls};t.logSuccess(i,n,e.urstype)}},resize:function(){var e={pholder:a,width:o.outerWidth(),height:o.outerHeight()};t.initSuccess(e)}};"163.com"!=B&&(it.cookieDomain=B,0==it.single&&(it.regCookieDomain=B)),"undefined"!=typeof e.unitelogin&&(1==e.unitelogin?(it.uniteLogin.loginTxt="\u767b \u5f55",it.needMobileReg=0):"both"==e.unitelogin&&(it.uniteLogin.loginTxt="\u767b \u5f55",it.uniteLogin.clause=W,it.uniteLogin.needClause=1,it.needMobileReg=1)),e.needunlogin&&(it.mobileUnLoginTime=Q,it.mobileUnLoginTimeTxt=E,/^(7|10|20|30)$/.test(e.unLoginTime)&&(it.unLoginTime=C,it.mobileUnLoginTime=Q,it.unLoginText=I,it.mobileUnLoginTimeTxt=E,it.uniteLogin.unLoginTime=C,it.uniteLogin.unLoginTxt=I),e.defaultUnLogin&&(it.defaultUnLogin=j,it.mobileDefaultUnLogin=P));var rt;URS&&URS.setPkidAndPd({pkid:m,pd:r,mode:1,pathbCallback:function(){st&&(clearTimeout(st),rt=new URS(it),rt.logincb=function(o){if(1==e.cb||"fur"==e.urstype){var n={username:o,email:t.pinfo()};t.logSuccess(i,n,e.urstype)}})}});var st=setTimeout(function(){rt=new URS(it),rt.logincb=function(o){if(1==e.cb||"fur"==e.urstype){var n={username:o,email:t.pinfo()};t.logSuccess(i,n,e.urstype)}}},200)},view:function(e){var o={holder:e.holder.replace(/#|\./g,""),pholder:e.pholder,product:e.product,host:e.host,verification:e.verification,promark:e.promark,productkey:e.productkey,swidth:e.swidth,account:e.user_txt,pwd:e.password_txt,cookieDomain:e.cookieDomain,needQrLogin:e.needQrLogin,toolName:e.toolName,toolUrl:e.toolUrl,logintype:e.logintype,loginactive:e.loginactive,cb:e.cb,css:e.css,style:e.style,needunlogin:e.needunlogin,defaultUnLogin:e.defaultUnLogin,unLoginTime:e.unLoginTime,unLoginText:e.unLoginText,mobileUnLoginTime:e.mobileUnLoginTime,mobileUnLoginTimeTxt:e.mobileUnLoginTimeTxt,mobileDefaultUnLogin:e.mobileDefaultUnLogin,page:e.page,single:e.single,unitelogin:e.unitelogin,law:e.law,regagree:e.regagree,customStyleSwitch:e.customStyleSwitch||!1,customStyle:e.customStyle||0,urstype:e.urstype,terms:e.terms};if("function"==typeof URS)t.load(o);else var n=0,a=setInterval(function(){n+=1,"function"==typeof URS?(clearInterval(a),t.load(o)):25==n&&($("#"+o.holder).html("\u8bf7\u6c42\u8d85\u65f6"),clearInterval(a))},400)},paramName:function(e){var t=window.location.search.toString(),o=new RegExp("[?&]*"+e+"=([^&]+)"),n=t.match(o);return n?decodeURIComponent(n[1]):null},param:function(){var e={holder:"#login-base"};t.paramName("holder")&&(e.pholder=t.paramName("holder")),t.paramName("product")&&(e.product=t.paramName("product")),t.paramName("host")&&(e.host=t.paramName("host")),t.paramName("verification")&&(e.verification=t.paramName("verification")),t.paramName("promark")&&(e.promark=t.paramName("promark")),t.paramName("productkey")&&(e.productkey=t.paramName("productkey")),t.paramName("swidth")&&(e.swidth=t.paramName("swidth")),t.paramName("user_txt")&&(e.user_txt=t.paramName("user_txt")),t.paramName("password_txt")&&(e.password_txt=t.paramName("password_txt")),t.paramName("cookieDomain")&&(e.cookieDomain=t.paramName("cookieDomain")),t.paramName("needQrLogin")&&(e.needQrLogin=t.paramName("needQrLogin")),t.paramName("toolName")&&(e.toolName=t.paramName("toolName")),t.paramName("toolUrl")&&(e.toolUrl=t.paramName("toolUrl")),t.paramName("logintype")&&(e.logintype=t.paramName("logintype")),t.paramName("loginactive")&&(e.loginactive=t.paramName("loginactive")),t.paramName("css")&&(e.css=t.paramName("css")),t.paramName("needunlogin")&&(e.needunlogin=t.paramName("needunlogin")),t.paramName("defaultUnLogin")&&(e.defaultUnLogin=t.paramName("defaultUnLogin")),t.paramName("page")&&(e.page=t.paramName("page")),t.paramName("single")&&(e.single=t.paramName("single")),t.paramName("unitelogin")&&(e.unitelogin=t.paramName("unitelogin")),t.paramName("law")&&(e.law=t.paramName("law")),t.paramName("regagree")&&(e.regagree=t.paramName("regagree")),t.paramName("customStyleSwitch")&&(e.customStyleSwitch=t.paramName("customStyleSwitch")),t.paramName("customStyle")&&(e.customStyle=t.paramName("customStyle")),t.paramName("cb")&&(e.cb=t.paramName("cb")),t.paramName("urstype")&&(e.urstype=t.paramName("urstype")),t.view(e)},initSuccess:function(e){window.parent.postMessage({id:"initSuccess",options:e},"*")},logSuccess:function(e,t,o){"fur"==o?window.parent.postMessage({id:"regSuccess",name:e,options:t},"*"):window.parent.postMessage({id:"loginSuccess",name:e,options:t},"*"),window.location.reload()},pinfo:function(){{var e=$.cookie("P_INFO");new Date}return null!=e&&""!=e?e.split("|")[0]:null}};if("undefined"==typeof URS&&$.include("https://urswebzj.nosdn.127.net/webzj_cdn101/message.js"),e){var o=e;o.pholder=o.holder,o.holder="#login-base",t.view(o)}else t.param()};window.addEventListener("message",function(e){var t=e.origin;if(/.163.com|netease.com|leihuo.net|leihuo.net.cn$|yjwujian.cn$|di.blizzard.cn$/.test(t.split(":")[1])){var o=!1;try{o=JSON.parse(e.data),"login"==o.name&&NieUrs(o)}catch(n){}"login"==e.data&&NieUrs()}},!1);