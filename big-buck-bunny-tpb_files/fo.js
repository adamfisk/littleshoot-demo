//  Copyright (c) 2000-2012 ZEDO Inc. All Rights Reserved.
function U1(){
var z1=navigator.userAgent.toLowerCase();var t5=(z1.indexOf('mac')!=-1);var z7=parseInt(navigator.appVersion);
var q3=(!t5&&(z1.indexOf('opera')==-1)&&(z1.indexOf('msie')!=-1)&&(z7>=4)&&(z1.indexOf('webtv')==-1)&&(z1.indexOf('msie 4')==-1));
if(q3){
document.writeln('<scr'+'ipt language=VBS'+'cript>');
document.writeln('on error resume next');
document.writeln('n0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))');
document.writeln('if(n0<=0)then n0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))');
document.writeln('</scr'+'ipt>');
}
else if(navigator.mimeTypes&&
navigator.mimeTypes["application/x-shockwave-flash"]&&
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var c2=navigator.plugins["Shockwave Flash"].description;
if(parseInt(c2.substring(c2.indexOf(".")-2))>=4){
n0=1;
}}}
var t3=navigator.javaEnabled();var o0=1;
if(t3){o0 |=4;}
if(n0){o0 |=8;}
if(q3){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
o0 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
o0 |=16;
}}}
return o0;
}
function B1(){
var v4=new Array('d1','d2','d3','d4','d5','d6','d7','d8','d9','da','db','dc','dd','de','df');
return v4;
}
var d0=0;var v8='';var y0=0;var y0=0;var zd_passback_networkID;var zd_passback_eventId;var zd_passback_adId;var zd_passback_channelId;var zd_passback_geoLevel;var zd_Pbk='';var z0='0';var e0=0;
var z3='';var zd_$='';var n0=0;var i1='';var e2='';var y2='';var t2="";var c4='';var y4='';var v0=new Array();var q0='';var q6=0;var c3='';var zd_pbvars="";
if(typeof zflag_nid!='undefined'){
d0=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_charset!='undefined'){
v8="charset="+zflag_charset;
zflag_charset="";
}
if(typeof zflag_sid!='undefined'){
y0=zflag_sid;
}
if(typeof zflag_pbnw!='undefined'){
zd_pbvars+="&pn="+zflag_pbnw;
zflag_pbnw=0;
}
if(typeof zflag_6!='undefined'){
zd_pbvars+="&6="+zflag_6;
zflag_6=0;
}
if(typeof zflag_pbad!='undefined'){
zd_pbvars+="&pa="+zflag_pbad;
zflag_pbad=0;
}
if(typeof zflag_pbch!='undefined'){
zd_pbvars+="&pc="+zflag_pbch;
zflag_pbch=0;
}
if(typeof zflag_pbr!='undefined'){
zd_pbvars+="&pr="+zflag_pbr;
zflag_pbr=0;
}
if(typeof zflag_cid!='undefined'){
z0=zflag_cid;
if(z0<0||z0>999999){
z0=0;
}}
if(typeof zflag_chanlimits!='undefined'){
q6=zflag_chanlimits;
zflag_chanlimits=0;
}
if(typeof zflag_sz!='undefined'){
e0=zflag_sz;
if(e0<0||e0>95){
e0=0;
}
zflag_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
z3=escape(zflag_kw);
zflag_kw="";
}
if(typeof zflag_$!='undefined'){
zd_$=zflag_$;
zflag_$='';
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
e2="&gc="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
t2="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=escape(zflag_click);
y2='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_ad_title!='undefined'){
zzTitle=escape(zflag_ad_title);
c3='&t='+zzTitle;
zflag_ad_title="";
}
if(typeof zflag_hasAd!='undefined'){
c4='&y='+zflag_hasAd;
}
if(typeof zflag_num!='undefined'){
y4=zflag_num;
zflag_num=0;
}
if(typeof zflag_ck!='undefined'){
q0='&ck='+zflag_ck;
zflag_ck=0;
}
v0=B1();
for(var i=0;i<v0.length;i++){
if(eval('typeof(zflag_'+v0[i]+')!="undefined"')){
q0=q0+'&'+v0[i]+'='+eval('zflag_'+v0[i]);
eval('zflag_'+v0[i]+'="";');
}}
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=y0;var zzPbNId=zd_passback_networkID;var zzPbEId=zd_passback_eventId;var zzPbAId=zd_passback_adId;var zzPbCId=zd_passback_channelId;var zzPbGeoLvl=zd_passback_geoLevel;
var zzPbk=zd_Pbk;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;var zzNw=0;var zzCh=0;
var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
i1=U1();
if(i1<0||i1>31){
i1=1;
}
r0='<scr'+'ipt language="javascript" src="http://d7.zedo.com/bar/v16-601/d3/jsc/fm.js?c='+z0+'&a='+q6+'&f='+y4+'&n='+d0+'&r='+i1+'&d='+e0+'&q='+z3+'&$='+zd_$+zd_pbvars+'&s='+y0+e2+t2+y2+c4+c3+q0+'&z='+Math.random()+'" '+v8+'></scr'+'ipt>';
document.write(r0);
