/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20120527
 */
(function(da){function P(P,ca){function m(a){return function(c){var d=this._t;return!d||!d._a?null:a.call(this,c)}}this.flashVersion=8;this.debugFlash=this.debugMode=!1;this.consoleOnly=this.useConsole=!0;this.waitForWindowLoad=!1;this.bgColor="#ffffff";this.useHighPerformance=!1;this.html5PollingInterval=this.flashPollingInterval=null;this.flashLoadTimeout=1E3;this.wmode=null;this.allowScriptAccess="always";this.useFlashBlock=!1;this.useHTML5Audio=!0;this.html5Test=/^(probably|maybe)$/i;this.preferFlash=
!0;this.noSWFCache=!1;this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,
onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.movieID="sm2-container";this.id=ca||"sm2movie";
this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20120527";this.movieURL=this.version=null;this.url=P||null;this.altURL=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};var ea;try{ea="undefined"!==typeof Audio&&
"undefined"!==typeof(new Audio).canPlayType}catch(Wa){ea=!1}this.hasHTML5=ea;this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var za,c=this,i=null,Q,q=navigator.userAgent,h=da,fa=h.location.href.toString(),l=document,ga,ha,j,v=[],I=!1,J=!1,o=!1,r=!1,ia=!1,K,s,ja,A,B,C,Aa,ka,R,S,D,la,ma,na,T,E,Ba,oa,Ca,U,Da,L=null,pa=null,F,qa,G,V,W,ra,p,M=!1,sa=!1,Ea,Fa,Ga,X=0,N=null,Y,t=null,Ha,Z,O,w,ta,ua,Ia,k,Ra=Array.prototype.slice,y=!1,n,va,Ja,u,Ka,$=q.match(/(ipad|iphone|ipod)/i),
Sa=q.match(/firefox/i),x=q.match(/msie/i),Ta=q.match(/webkit/i),wa=q.match(/safari/i)&&!q.match(/chrome/i),Ua=q.match(/opera/i),aa=q.match(/(mobile|pre\/|xoom)/i)||$,La=!fa.match(/usehtml5audio/i)&&!fa.match(/sm2\-ignorebadua/i)&&wa&&!q.match(/silk/i)&&q.match(/OS X 10_6_([3-7])/i),xa="undefined"!==typeof l.hasFocus?l.hasFocus():null,ba=wa&&("undefined"===typeof l.hasFocus||!l.hasFocus()),Ma=!ba,Na=/(mp3|mp4|mpa)/i,ya=l.location?l.location.protocol.match(/http/i):null,Oa=!ya?"http://":"",Pa=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|mp4v|3gp|3g2)\s*(?:$|;)/i,
Qa="mpeg4,aac,flv,mov,mp4,m4v,f4v,m4a,mp4v,3gp,3g2".split(","),Va=RegExp("\\.("+Qa.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!ya;this._global_a=null;if(aa&&(c.useHTML5Audio=!0,c.preferFlash=!1,$))y=c.ignoreFlash=!0;this.supported=this.ok=function(){return t?o&&!r:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(a){return Q(a)||l[a]||h[a]};this.createSound=function(a,e){function d(){b=V(b);c.sounds[f.id]=new za(f);c.soundIDs.push(f.id);
return c.sounds[f.id]}var b=null,g=null,f=null;if(!o||!c.ok())return ra(void 0),!1;"undefined"!==typeof e&&(a={id:a,url:e});b=s(a);b.url=Y(b.url);f=b;if(p(f.id,!0))return c.sounds[f.id];if(Z(f))g=d(),g._setup_html5(f);else{if(8<j&&null===f.isMovieStar)f.isMovieStar=f.serverURL||(f.type?f.type.match(Pa):!1)||f.url.match(Va);f=W(f,void 0);g=d();if(8===j)i._createSound(f.id,f.loops||1,f.usePolicyFile);else if(i._createSound(f.id,f.url,f.usePeakData,f.useWaveformData,f.useEQData,f.isMovieStar,f.isMovieStar?
f.bufferTime:!1,f.loops||1,f.serverURL,f.duration||null,f.autoPlay,!0,f.autoLoad,f.usePolicyFile),!f.serverURL)g.connected=!0,f.onconnect&&f.onconnect.apply(g);!f.serverURL&&(f.autoLoad||f.autoPlay)&&g.load(f)}!f.serverURL&&f.autoPlay&&g.play();return g};this.destroySound=function(a,e){if(!p(a))return!1;var d=c.sounds[a],b;d._iO={};d.stop();d.unload();for(b=0;b<c.soundIDs.length;b++)if(c.soundIDs[b]===a){c.soundIDs.splice(b,1);break}e||d.destruct(!0);delete c.sounds[a];return!0};this.load=function(a,
e){return!p(a)?!1:c.sounds[a].load(e)};this.unload=function(a){return!p(a)?!1:c.sounds[a].unload()};this.onposition=this.onPosition=function(a,e,d,b){return!p(a)?!1:c.sounds[a].onposition(e,d,b)};this.clearOnPosition=function(a,e,d){return!p(a)?!1:c.sounds[a].clearOnPosition(e,d)};this.start=this.play=function(a,e){var d=!1;if(!o||!c.ok())return ra("soundManager.play(): "+F(!o?"notReady":"notOK")),d;if(!p(a)){e instanceof Object||(e={url:e});if(e&&e.url)e.id=a,d=c.createSound(e).play();return d}return c.sounds[a].play(e)};
this.setPosition=function(a,e){return!p(a)?!1:c.sounds[a].setPosition(e)};this.stop=function(a){return!p(a)?!1:c.sounds[a].stop()};this.stopAll=function(){for(var a in c.sounds)c.sounds.hasOwnProperty(a)&&c.sounds[a].stop()};this.pause=function(a){return!p(a)?!1:c.sounds[a].pause()};this.pauseAll=function(){var a;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].pause()};this.resume=function(a){return!p(a)?!1:c.sounds[a].resume()};this.resumeAll=function(){var a;for(a=c.soundIDs.length-1;0<=
a;a--)c.sounds[c.soundIDs[a]].resume()};this.togglePause=function(a){return!p(a)?!1:c.sounds[a].togglePause()};this.setPan=function(a,e){return!p(a)?!1:c.sounds[a].setPan(e)};this.setVolume=function(a,e){return!p(a)?!1:c.sounds[a].setVolume(e)};this.mute=function(a){var e=0;"string"!==typeof a&&(a=null);if(a)return!p(a)?!1:c.sounds[a].mute();for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(a){"string"!==typeof a&&
(a=null);if(a)return!p(a)?!1:c.sounds[a].unmute();for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(a){return!p(a)?!1:c.sounds[a].toggleMute()};this.getMemoryUse=function(){var a=0;i&&8!==j&&(a=parseInt(i._getMemoryUse(),10));return a};this.disable=function(a){var e;"undefined"===typeof a&&(a=!1);if(r)return!1;r=!0;for(e=c.soundIDs.length-1;0<=e;e--)Ca(c.sounds[c.soundIDs[e]]);K(a);k.remove(h,"load",
B);return!0};this.canPlayMIME=function(a){var e;c.hasHTML5&&(e=O({type:a}));!e&&t&&(e=a&&c.ok()?!!(8<j&&a.match(Pa)||a.match(c.mimePattern)):null);return e};this.canPlayURL=function(a){var e;c.hasHTML5&&(e=O({url:a}));!e&&t&&(e=a&&c.ok()?!!a.match(c.filePattern):null);return e};this.canPlayLink=function(a){return"undefined"!==typeof a.type&&a.type&&c.canPlayMIME(a.type)?!0:c.canPlayURL(a.href)};this.getSoundById=function(a){if(!a)throw Error("soundManager.getSoundById(): sID is null/undefined");return c.sounds[a]};
this.onready=function(a,c){var d=!1;if("function"===typeof a)c||(c=h),ja("onready",a,c),A();else throw F("needFunction","onready");return!0};this.ontimeout=function(a,c){var d=!1;if("function"===typeof a)c||(c=h),ja("ontimeout",a,c),A({type:"ontimeout"});else throw F("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=function(){var a,e;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].destruct();try{if(x)pa=i.innerHTML;
L=i.parentNode.removeChild(i)}catch(d){}pa=L=t=null;c.enabled=ma=o=M=sa=I=J=r=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};i=null;for(a in v)if(v.hasOwnProperty(a))for(e=v[a].length-1;0<=e;e--)v[a][e].fired=!1;h.setTimeout(c.beginDelayedInit,20)};this.getMoviePercent=function(){return i&&"undefined"!==typeof i.PercentLoaded?i.PercentLoaded():null};this.beginDelayedInit=function(){ia=!0;D();setTimeout(function(){if(sa)return!1;T();S();return sa=!0},20);C()};this.destruct=function(){c.disable(!0)};za=function(a){var e,
d,b=this,g,f,z,H,h,l,m=!1,k=[],o=0,q,r,n=null;e=null;d=null;this.sID=a.id;this.url=a.url;this._iO=this.instanceOptions=this.options=s(a);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(a){var c=null;if("undefined"!==typeof a)b._iO=s(a,b.options),b.instanceOptions=b._iO;else if(a=b.options,b._iO=a,b.instanceOptions=b._iO,n&&n!==b.url)b._iO.url=b.url,b.url=null;if(!b._iO.url)b._iO.url=b.url;b._iO.url=Y(b._iO.url);
if(b._iO.url===b.url&&0!==b.readyState&&2!==b.readyState)return 3===b.readyState&&b._iO.onload&&b._iO.onload.apply(b,[!!b.duration]),b;a=b._iO;n=b.url;b.loaded=!1;b.readyState=1;b.playState=0;if(Z(a)){if(c=b._setup_html5(a),!c._called_load)b._html5_canplay=!1,b._a.autobuffer="auto",b._a.preload="auto",c._called_load=!0,a.autoPlay?b.play():c.load()}else try{b.isHTML5=!1,b._iO=W(V(a)),a=b._iO,8===j?i._load(b.sID,a.url,a.stream,a.autoPlay,a.whileloading?1:0,a.loops||1,a.usePolicyFile):i._load(b.sID,
a.url,!!a.stream,!!a.autoPlay,a.loops||1,!!a.autoLoad,a.usePolicyFile)}catch(e){E({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}return b};this.unload=function(){0!==b.readyState&&(b.isHTML5?(H(),b._a&&(b._a.pause(),ta(b._a))):8===j?i._unload(b.sID,"about:blank"):i._unload(b.sID),g());return b};this.destruct=function(a){if(b.isHTML5){if(H(),b._a)b._a.pause(),ta(b._a),y||z(),b._a._t=null,b._a=null}else b._iO.onfailure=null,i._destroySound(b.sID);a||c.destroySound(b.sID,!0)};this.start=this.play=function(a,
c){var e,d,f;d=null;c="undefined"===typeof c?!0:c;a||(a={});b._iO=s(a,b._iO);b._iO=s(b._iO,b.options);b._iO.url=Y(b._iO.url);b.instanceOptions=b._iO;if(b._iO.serverURL&&!b.connected)return b.getAutoPlay()||b.setAutoPlay(!0),b;Z(b._iO)&&(b._setup_html5(b._iO),h());if(1===b.playState&&!b.paused)(e=b._iO.multiShot)||(d=b);if(null!==d)return d;if(!b.loaded)0===b.readyState?b.isHTML5?$&&b.load(b._iO):(b._iO.autoPlay=!0,b.load(b._iO)):2===b.readyState&&(d=b);if(null!==d)return d;if(!b.isHTML5&&9===j&&0<
b.position&&b.position===b.duration)a.position=0;if(b.paused&&b.position&&0<b.position)b.resume();else{b._iO=s(a,b._iO);if(null!==b._iO.from&&null!==b._iO.to&&0===b.instanceCount&&0===b.playState&&!b._iO.serverURL){e=function(){b._iO=s(a,b._iO);b.play(b._iO)};if(b.isHTML5&&!b._html5_canplay)b.load({_oncanplay:e}),d=!1;else if(!b.isHTML5&&!b.loaded&&(!b.readyState||2!==b.readyState))b.load({onload:e}),d=!1;if(null!==d)return d;b._iO=r()}(!b.instanceCount||b._iO.multiShotEvents||!b.isHTML5&&8<j&&!b.getAutoPlay())&&
b.instanceCount++;b._iO.onposition&&0===b.playState&&l(b);b.playState=1;b.paused=!1;b.position="undefined"!==typeof b._iO.position&&!isNaN(b._iO.position)?b._iO.position:0;if(!b.isHTML5)b._iO=W(V(b._iO));b._iO.onplay&&c&&(b._iO.onplay.apply(b),m=!0);b.setVolume(b._iO.volume,!0);b.setPan(b._iO.pan,!0);b.isHTML5?(h(),d=b._setup_html5(),b.setPosition(b._iO.position),d.play()):f=i._start(b.sID,b._iO.loops||1,9===j?b._iO.position:b._iO.position/1E3,b._iO.multiShot);9===j&&!f&&b._iO.onplayerror&&b._iO.onplayerror.apply(b)}return b};
this.stop=function(a){var c=b._iO;if(1===b.playState){b._onbufferchange(0);b._resetOnPosition(0);b.paused=!1;if(!b.isHTML5)b.playState=0;q();c.to&&b.clearOnPosition(c.to);if(b.isHTML5){if(b._a)a=b.position,b.setPosition(0),b.position=a,b._a.pause(),b.playState=0,b._onTimer(),H()}else i._stop(b.sID,a),c.serverURL&&b.unload();b.instanceCount=0;b._iO={};c.onstop&&c.onstop.apply(b)}return b};this.setAutoPlay=function(a){b._iO.autoPlay=a;b.isHTML5||(i._setAutoPlay(b.sID,a),a&&!b.instanceCount&&1===b.readyState&&
b.instanceCount++)};this.getAutoPlay=function(){return b._iO.autoPlay};this.setPosition=function(a){"undefined"===typeof a&&(a=0);var c=b.isHTML5?Math.max(a,0):Math.min(b.duration||b._iO.duration,Math.max(a,0));b.position=c;a=b.position/1E3;b._resetOnPosition(b.position);b._iO.position=c;if(b.isHTML5){if(b._a&&b._html5_canplay&&b._a.currentTime!==a)try{b._a.currentTime=a,(0===b.playState||b.paused)&&b._a.pause()}catch(e){}}else a=9===j?b.position:a,b.readyState&&2!==b.readyState&&i._setPosition(b.sID,
a,b.paused||!b.playState,b._iO.multiShot);b.isHTML5&&b.paused&&b._onTimer(!0);return b};this.pause=function(a){if(b.paused||0===b.playState&&1!==b.readyState)return b;b.paused=!0;b.isHTML5?(b._setup_html5().pause(),H()):(a||"undefined"===typeof a)&&i._pause(b.sID,b._iO.multiShot);b._iO.onpause&&b._iO.onpause.apply(b);return b};this.resume=function(){var a=b._iO;if(!b.paused)return b;b.paused=!1;b.playState=1;b.isHTML5?(b._setup_html5().play(),h()):(a.isMovieStar&&!a.serverURL&&b.setPosition(b.position),
i._pause(b.sID,a.multiShot));!m&&a.onplay?(a.onplay.apply(b),m=!0):a.onresume&&a.onresume.apply(b);return b};this.togglePause=function(){if(0===b.playState)return b.play({position:9===j&&!b.isHTML5?b.position:b.position/1E3}),b;b.paused?b.resume():b.pause();return b};this.setPan=function(a,c){"undefined"===typeof a&&(a=0);"undefined"===typeof c&&(c=!1);b.isHTML5||i._setPan(b.sID,a);b._iO.pan=a;if(!c)b.pan=a,b.options.pan=a;return b};this.setVolume=function(a,e){"undefined"===typeof a&&(a=100);"undefined"===
typeof e&&(e=!1);if(b.isHTML5){if(b._a)b._a.volume=Math.max(0,Math.min(1,a/100))}else i._setVolume(b.sID,c.muted&&!b.muted||b.muted?0:a);b._iO.volume=a;if(!e)b.volume=a,b.options.volume=a;return b};this.mute=function(){b.muted=!0;if(b.isHTML5){if(b._a)b._a.muted=!0}else i._setVolume(b.sID,0);return b};this.unmute=function(){b.muted=!1;var a="undefined"!==typeof b._iO.volume;if(b.isHTML5){if(b._a)b._a.muted=!1}else i._setVolume(b.sID,a?b._iO.volume:b.options.volume);return b};this.toggleMute=function(){return b.muted?
b.unmute():b.mute()};this.onposition=this.onPosition=function(a,c,e){k.push({position:parseInt(a,10),method:c,scope:"undefined"!==typeof e?e:b,fired:!1});return b};this.clearOnPosition=function(b,a){var c,b=parseInt(b,10);if(isNaN(b))return!1;for(c=0;c<k.length;c++)if(b===k[c].position&&(!a||a===k[c].method))k[c].fired&&o--,k.splice(c,1)};this._processOnPosition=function(){var a,c;a=k.length;if(!a||!b.playState||o>=a)return!1;for(a-=1;0<=a;a--)if(c=k[a],!c.fired&&b.position>=c.position)c.fired=!0,
o++,c.method.apply(c.scope,[c.position]);return!0};this._resetOnPosition=function(b){var a,c;a=k.length;if(!a)return!1;for(a-=1;0<=a;a--)if(c=k[a],c.fired&&b<=c.position)c.fired=!1,o--;return!0};r=function(){var a=b._iO,c=a.from,e=a.to,d,f;f=function(){b.clearOnPosition(e,f);b.stop()};d=function(){if(null!==e&&!isNaN(e))b.onPosition(e,f)};if(null!==c&&!isNaN(c))a.position=c,a.multiShot=!1,d();return a};l=function(){var a,c=b._iO.onposition;if(c)for(a in c)if(c.hasOwnProperty(a))b.onPosition(parseInt(a,
10),c[a])};q=function(){var a,c=b._iO.onposition;if(c)for(a in c)c.hasOwnProperty(a)&&b.clearOnPosition(parseInt(a,10))};h=function(){b.isHTML5&&Ea(b)};H=function(){b.isHTML5&&Fa(b)};g=function(a){a||(k=[],o=0);m=!1;b._hasTimer=null;b._a=null;b._html5_canplay=!1;b.bytesLoaded=null;b.bytesTotal=null;b.duration=b._iO&&b._iO.duration?b._iO.duration:null;b.durationEstimate=null;b.eqData=[];b.eqData.left=[];b.eqData.right=[];b.failures=0;b.isBuffering=!1;b.instanceOptions={};b.instanceCount=0;b.loaded=
!1;b.metadata={};b.readyState=0;b.muted=!1;b.paused=!1;b.peakData={left:0,right:0};b.waveformData={left:[],right:[]};b.playState=0;b.position=null};g();this._onTimer=function(a){var c,f=!1,g={};if(b._hasTimer||a){if(b._a&&(a||(0<b.playState||1===b.readyState)&&!b.paused)){c=b._get_html5_duration();if(c!==e)e=c,b.duration=c,f=!0;b.durationEstimate=b.duration;c=1E3*b._a.currentTime||0;c!==d&&(d=c,f=!0);(f||a)&&b._whileplaying(c,g,g,g,g)}return f}};this._get_html5_duration=function(){var a=b._iO,c=b._a?
1E3*b._a.duration:a?a.duration:void 0;return c&&!isNaN(c)&&Infinity!==c?c:a?a.duration:null};this._apply_loop=function(b,a){b.loop=1<a?"loop":""};this._setup_html5=function(a){var a=s(b._iO,a),e=decodeURI,d=y?c._global_a:b._a,i=e(a.url),h=d&&d._t?d._t.instanceOptions:null,z;if(d){if(d._t){if(!y&&i===e(n))z=d;else if(y&&h.url===a.url&&(!n||n===h.url))z=d;if(z)return b._apply_loop(d,a.loops),z}y&&d._t&&d._t.playState&&a.url!==h.url&&d._t.stop();g(h.url?a.url===h.url:n?n===a.url:!1);d.src=a.url;n=b.url=
a.url;d._called_load=!1}else if(d=new Audio(a.url),d._called_load=!1,y)c._global_a=d;b.isHTML5=!0;b._a=d;d._t=b;f();b._apply_loop(d,a.loops);a.autoLoad||a.autoPlay?b.load():(d.autobuffer=!1,d.preload="none",aa||b.load());return d};f=function(){if(b._a._added_events)return!1;var a;b._a._added_events=!0;for(a in u)u.hasOwnProperty(a)&&b._a&&b._a.addEventListener(a,u[a],!1);return!0};z=function(){var a;b._a._added_events=!1;for(a in u)u.hasOwnProperty(a)&&b._a&&b._a.removeEventListener(a,u[a],!1)};this._onload=
function(a){a=!!a;b.loaded=a;b.readyState=a?3:2;b._onbufferchange(0);b._iO.onload&&b._iO.onload.apply(b,[a]);return!0};this._onbufferchange=function(a){if(0===b.playState||a&&b.isBuffering||!a&&!b.isBuffering)return!1;b.isBuffering=1===a;b._iO.onbufferchange&&b._iO.onbufferchange.apply(b);return!0};this._onsuspend=function(){b._iO.onsuspend&&b._iO.onsuspend.apply(b);return!0};this._onfailure=function(a,c,e){b.failures++;if(b._iO.onfailure&&1===b.failures)b._iO.onfailure(b,a,c,e)};this._onfinish=function(){var a=
b._iO.onfinish;b._onbufferchange(0);b._resetOnPosition(0);if(b.instanceCount){b.instanceCount--;if(!b.instanceCount)q(),b.playState=0,b.paused=!1,b.instanceCount=0,b.instanceOptions={},b._iO={},H();(!b.instanceCount||b._iO.multiShotEvents)&&a&&a.apply(b)}};this._whileloading=function(a,c,e,d){var f=b._iO;b.bytesLoaded=a;b.bytesTotal=c;b.duration=Math.floor(e);b.bufferLength=d;if(f.isMovieStar)b.durationEstimate=b.duration;else if(b.durationEstimate=f.duration?b.duration>f.duration?b.duration:f.duration:
parseInt(b.bytesTotal/b.bytesLoaded*b.duration,10),"undefined"===typeof b.durationEstimate)b.durationEstimate=b.duration;3!==b.readyState&&f.whileloading&&f.whileloading.apply(b)};this._whileplaying=function(a,c,e,d,f){var g=b._iO;if(isNaN(a)||null===a)return!1;b.position=a;b._processOnPosition();if(!b.isHTML5&&8<j){if(g.usePeakData&&"undefined"!==typeof c&&c)b.peakData={left:c.leftPeak,right:c.rightPeak};if(g.useWaveformData&&"undefined"!==typeof e&&e)b.waveformData={left:e.split(","),right:d.split(",")};
if(g.useEQData&&"undefined"!==typeof f&&f&&f.leftEQ&&(a=f.leftEQ.split(","),b.eqData=a,b.eqData.left=a,"undefined"!==typeof f.rightEQ&&f.rightEQ))b.eqData.right=f.rightEQ.split(",")}1===b.playState&&(!b.isHTML5&&8===j&&!b.position&&b.isBuffering&&b._onbufferchange(0),g.whileplaying&&g.whileplaying.apply(b));return!0};this._oncaptiondata=function(a){b.captiondata=a;b._iO.oncaptiondata&&b._iO.oncaptiondata.apply(b)};this._onmetadata=function(a,c){var e={},d,f;for(d=0,f=a.length;d<f;d++)e[a[d]]=c[d];
b.metadata=e;b._iO.onmetadata&&b._iO.onmetadata.apply(b)};this._onid3=function(a,c){var e=[],d,f;for(d=0,f=a.length;d<f;d++)e[a[d]]=c[d];b.id3=s(b.id3,e);b._iO.onid3&&b._iO.onid3.apply(b)};this._onconnect=function(a){a=1===a;if(b.connected=a)b.failures=0,p(b.sID)&&(b.getAutoPlay()?b.play(void 0,b.getAutoPlay()):b._iO.autoLoad&&b.load()),b._iO.onconnect&&b._iO.onconnect.apply(b,[a])};this._ondataerror=function(){0<b.playState&&b._iO.ondataerror&&b._iO.ondataerror.apply(b)}};na=function(){return l.body||
l._docElement||l.getElementsByTagName("div")[0]};Q=function(a){return l.getElementById(a)};s=function(a,e){var d={},b,g;for(b in a)a.hasOwnProperty(b)&&(d[b]=a[b]);b="undefined"===typeof e?c.defaultOptions:e;for(g in b)b.hasOwnProperty(g)&&"undefined"===typeof d[g]&&(d[g]=b[g]);return d};k=function(){function a(a){var a=Ra.call(a),b=a.length;d?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(a,e){var h=a.shift(),i=[b[e]];if(d)h[i](a[0],a[1]);else h[i].apply(h,a)}var d=h.attachEvent,
b={add:d?"attachEvent":"addEventListener",remove:d?"detachEvent":"removeEventListener"};return{add:function(){c(a(arguments),"add")},remove:function(){c(a(arguments),"remove")}}}();u={abort:m(function(){}),canplay:m(function(){var a=this._t,c;if(a._html5_canplay)return!0;a._html5_canplay=!0;a._onbufferchange(0);c=!isNaN(a.position)?a.position/1E3:null;if(a.position&&this.currentTime!==c)try{this.currentTime=c}catch(d){}a._iO._oncanplay&&a._iO._oncanplay()}),load:m(function(){var a=this._t;a.loaded||
(a._onbufferchange(0),a._whileloading(a.bytesTotal,a.bytesTotal,a._get_html5_duration()),a._onload(!0))}),ended:m(function(){this._t._onfinish()}),error:m(function(){this._t._onload(!1)}),loadeddata:m(function(){var a=this._t,c=a.bytesTotal||1;if(!a._loaded&&!wa)a.duration=a._get_html5_duration(),a._whileloading(c,c,a._get_html5_duration()),a._onload(!0)}),loadedmetadata:m(function(){}),loadstart:m(function(){this._t._onbufferchange(1)}),play:m(function(){this._t._onbufferchange(0)}),playing:m(function(){this._t._onbufferchange(0)}),
progress:m(function(a){var c=this._t,d,b=0,g=a.target.buffered;d=a.loaded||0;var f=a.total||1;if(c.loaded)return!1;if(g&&g.length){for(d=g.length-1;0<=d;d--)b=g.end(d)-g.start(d);d=b/a.target.duration}isNaN(d)||(c._onbufferchange(0),c._whileloading(d,f,c._get_html5_duration()),d&&f&&d===f&&u.load.call(this,a))}),ratechange:m(function(){}),suspend:m(function(a){var c=this._t;u.progress.call(this,a);c._onsuspend()}),stalled:m(function(){}),timeupdate:m(function(){this._t._onTimer()}),waiting:m(function(){this._t._onbufferchange(1)})};
Z=function(a){return!a.serverURL&&(a.type?O({type:a.type}):O({url:a.url})||c.html5Only)};ta=function(a){if(a)a.src=Sa?"":"about:blank"};O=function(a){function e(a){return c.preferFlash&&n&&!c.ignoreFlash&&"undefined"!==typeof c.flash[a]&&c.flash[a]}if(!c.useHTML5Audio||!c.hasHTML5)return!1;var d=a.url||null,a=a.type||null,b=c.audioFormats,g;if(a&&"undefined"!==typeof c.html5[a])return c.html5[a]&&!e(a);if(!w){w=[];for(g in b)b.hasOwnProperty(g)&&(w.push(g),b[g].related&&(w=w.concat(b[g].related)));
w=RegExp("\\.("+w.join("|")+")(\\?.*)?$","i")}g=d?d.toLowerCase().match(w):null;!g||!g.length?a?(d=a.indexOf(";"),g=(-1!==d?a.substr(0,d):a).substr(6)):d=!1:g=g[1];g&&"undefined"!==typeof c.html5[g]?d=c.html5[g]&&!e(g):(a="audio/"+g,d=c.html5.canPlayType({type:a}),d=(c.html5[g]=d)&&c.html5[a]&&!e(a));return d};Ia=function(){function a(a){var b,d,f=b=!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){for(b=0,d=a.length;b<d&&!f;b++)if(c.html5[a[b]]||e.canPlayType(a[b]).match(c.html5Test))f=
!0,c.html5[a[b]]=!0,c.flash[a[b]]=!(!c.preferFlash||!n||!a[b].match(Na));b=f}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||"undefined"===typeof Audio)return!1;var e="undefined"!==typeof Audio?Ua?new Audio(null):new Audio:null,d,b={},g,f;g=c.audioFormats;for(d in g)if(g.hasOwnProperty(d)&&(b[d]=a(g[d].type),b["audio/"+d]=b[d],c.flash[d]=c.preferFlash&&!c.ignoreFlash&&d.match(Na)?!0:!1,g[d]&&g[d].related))for(f=g[d].related.length-
1;0<=f;f--)b["audio/"+g[d].related[f]]=b[d],c.html5[g[d].related[f]]=b[d],c.flash[g[d].related[f]]=b[d];b.canPlayType=e?a:null;c.html5=s(c.html5,b);return!0};F=function(){};V=function(a){if(8===j&&1<a.loops&&a.stream)a.stream=!1;return a};W=function(a){if(a&&!a.usePolicyFile&&(a.onid3||a.usePeakData||a.useWaveformData||a.useEQData))a.usePolicyFile=!0;return a};ra=function(){};ga=function(){return!1};Ca=function(a){for(var c in a)a.hasOwnProperty(c)&&"function"===typeof a[c]&&(a[c]=ga)};U=function(a){"undefined"===
typeof a&&(a=!1);(r||a)&&c.disable(a)};Da=function(a){var e=null;if(a)if(a.match(/\.swf(\?.*)?$/i)){if(e=a.substr(a.toLowerCase().lastIndexOf(".swf?")+4))return a}else a.lastIndexOf("/")!==a.length-1&&(a+="/");a=(a&&-1!==a.lastIndexOf("/")?a.substr(0,a.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(a+="?ts="+(new Date).getTime());return a};ka=function(){j=parseInt(c.flashVersion,10);if(8!==j&&9!==j)c.flashVersion=j=8;var a=c.debugMode||c.debugFlash?"_debug.swf":".swf";if(c.useHTML5Audio&&!c.html5Only&&
c.audioFormats.mp4.required&&9>j)c.flashVersion=j=9;c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===j?" (AS3/Flash 9)":" (AS2/Flash 8)");8<j?(c.defaultOptions=s(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=s(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+Qa.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==j?"flash9":"flash8"];c.movieURL=(8===j?"soundmanager2.swf":
"soundmanager2_flash9.swf").replace(".swf",a);c.features.peakData=c.features.waveformData=c.features.eqData=8<j};Ba=function(a,c){if(!i)return!1;i._setPolling(a,c)};oa=function(){if(c.debugURLParam.test(fa))c.debugMode=!0};p=this.getSoundById;G=function(){var a=[];c.debugMode&&a.push("sm2_debug");c.debugFlash&&a.push("flash_debug");c.useHighPerformance&&a.push("high_performance");return a.join(" ")};qa=function(){F("fbHandler");var a=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;
if(c.ok()){if(c.oMC)c.oMC.className=[G(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")}else{if(t)c.oMC.className=G()+" movieContainer "+(null===a?"swf_timedout":"swf_error");c.didFlashBlock=!0;A({type:"ontimeout",ignoreInit:!0,error:e});E(e)}};ja=function(a,c,d){"undefined"===typeof v[a]&&(v[a]=[]);v[a].push({method:c,scope:d||null,fired:!1})};A=function(a){a||(a={type:c.ok()?"onready":"ontimeout"});if(!o&&a&&!a.ignoreInit||"ontimeout"===a.type&&(c.ok()||r&&!a.ignoreInit))return!1;
var e={success:a&&a.ignoreInit?c.ok():!r},d=a&&a.type?v[a.type]||[]:[],b=[],g,e=[e],f=t&&c.useFlashBlock&&!c.ok();if(a.error)e[0].error=a.error;for(a=0,g=d.length;a<g;a++)!0!==d[a].fired&&b.push(d[a]);if(b.length)for(a=0,g=b.length;a<g;a++)if(b[a].scope?b[a].method.apply(b[a].scope,e):b[a].method.apply(this,e),!f)b[a].fired=!0;return!0};B=function(){h.setTimeout(function(){c.useFlashBlock&&qa();A();"function"===typeof c.onload&&c.onload.apply(h);c.waitForWindowLoad&&k.add(h,"load",B)},1)};va=function(){if("undefined"!==
typeof n)return n;var a=!1,c=navigator,d=c.plugins,b,g=h.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description&&(a=!0);else if("undefined"!==typeof g){try{b=new g("ShockwaveFlash.ShockwaveFlash")}catch(f){}a=!!b}return n=a};Ha=function(){var a,e;if($&&q.match(/os (1|2|3_0|3_1)/i)){if(c.hasHTML5=!1,c.html5Only=!0,c.oMC)c.oMC.style.display="none"}else if(c.useHTML5Audio)c.hasHTML5=
!c.html5||!c.html5.canPlayType?!1:!0;if(c.useHTML5Audio&&c.hasHTML5)for(e in c.audioFormats)if(c.audioFormats.hasOwnProperty(e)&&(c.audioFormats[e].required&&!c.html5.canPlayType(c.audioFormats[e].type)||c.flash[e]||c.flash[c.audioFormats[e].type]))a=!0;c.ignoreFlash&&(a=!1);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!a;return!c.html5Only};Y=function(a){var e,d,b=0;if(a instanceof Array){for(e=0,d=a.length;e<d;e++)if(a[e]instanceof Object){if(c.canPlayMIME(a[e].type)){b=e;break}}else if(c.canPlayURL(a[e])){b=
e;break}if(a[b].url)a[b]=a[b].url;a=a[b]}return a};Ea=function(a){if(!a._hasTimer)a._hasTimer=!0,!aa&&c.html5PollingInterval&&(null===N&&0===X&&(N=h.setInterval(Ga,c.html5PollingInterval)),X++)};Fa=function(a){if(a._hasTimer)a._hasTimer=!1,!aa&&c.html5PollingInterval&&X--};Ga=function(){var a;if(null!==N&&!X)return h.clearInterval(N),N=null,!1;for(a=c.soundIDs.length-1;0<=a;a--)c.sounds[c.soundIDs[a]].isHTML5&&c.sounds[c.soundIDs[a]]._hasTimer&&c.sounds[c.soundIDs[a]]._onTimer()};E=function(a){a=
"undefined"!==typeof a?a:{};"function"===typeof c.onerror&&c.onerror.apply(h,[{type:"undefined"!==typeof a.type?a.type:null}]);"undefined"!==typeof a.fatal&&a.fatal&&c.disable()};Ja=function(){if(!La||!va())return!1;var a=c.audioFormats,e,d;for(d in a)if(a.hasOwnProperty(d)&&("mp3"===d||"mp4"===d))if(c.html5[d]=!1,a[d]&&a[d].related)for(e=a[d].related.length-1;0<=e;e--)c.html5[a[d].related[e]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(c.swfLoaded)return!1;(new Date).getTime();
c.swfLoaded=!0;ba=!1;La&&Ja();setTimeout(ha,x?100:1)};T=function(a,e){function d(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(I&&J)return!1;if(c.html5Only)return ka(),c.oMC=Q(c.movieID),ha(),J=I=!0,!1;var b=e||c.url,g=c.altURL||b,f;f=na();var h,i,j=G(),k,m=null,m=(m=l.getElementsByTagName("html")[0])&&m.dir&&m.dir.match(/rtl/i),a="undefined"===typeof a?c.id:a;ka();c.url=Da(ya?b:g);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(q.match(/msie 8/i)||
!x&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))c.wmode=null;f={name:a,id:a,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:Oa+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};if(c.debugFlash)f.FlashVars="debug=1";c.wmode||delete f.wmode;if(x)b=l.createElement("div"),i=['<object id="'+a+'" data="'+e+'" type="'+f.type+'" title="'+
f.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+Oa+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",f.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",f.FlashVars):"","</object>"].join("");else for(h in b=l.createElement("embed"),f)f.hasOwnProperty(h)&&b.setAttribute(h,f[h]);oa();j=G();if(f=na())if(c.oMC=Q(c.movieID)||
l.createElement("div"),c.oMC.id){k=c.oMC.className;c.oMC.className=(k?k+" ":"movieContainer")+(j?" "+j:"");c.oMC.appendChild(b);if(x)h=c.oMC.appendChild(l.createElement("div")),h.className="sm2-object-box",h.innerHTML=i;J=!0}else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+j;h=j=null;if(!c.useFlashBlock)if(c.useHighPerformance)j={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else if(j={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},
m)j.left=Math.abs(parseInt(j.left,10))+"px";if(Ta)c.oMC.style.zIndex=1E4;if(!c.debugFlash)for(k in j)j.hasOwnProperty(k)&&(c.oMC.style[k]=j[k]);try{x||c.oMC.appendChild(b);f.appendChild(c.oMC);if(x)h=c.oMC.appendChild(l.createElement("div")),h.className="sm2-object-box",h.innerHTML=i;J=!0}catch(n){throw Error(F("domError")+" \n"+n.toString());}}return I=!0};S=function(){if(c.html5Only)return T(),!1;if(i)return!1;i=c.getMovie(c.id);if(!i)L?(x?c.oMC.innerHTML=pa:c.oMC.appendChild(L),L=null,I=!0):T(c.id,
c.url),i=c.getMovie(c.id);"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};C=function(){setTimeout(Aa,1E3)};Aa=function(){var a,e=!1;if(M)return!1;M=!0;k.remove(h,"load",C);if(ba&&!xa)return!1;o||(a=c.getMoviePercent(),0<a&&100>a&&(e=!0));setTimeout(function(){a=c.getMoviePercent();if(e)return M=!1,h.setTimeout(C,1),!1;!o&&Ma&&(null===a?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&qa():U(!0):0!==c.flashLoadTimeout&&U(!0))},c.flashLoadTimeout)};R=function(){if(xa||
!ba)return k.remove(h,"focus",R),!0;xa=Ma=!0;M=!1;C();k.remove(h,"focus",R);return!0};Ka=function(){var a,e=[];if(c.useHTML5Audio&&c.hasHTML5)for(a in c.audioFormats)c.audioFormats.hasOwnProperty(a)&&e.push(a+": "+c.html5[a]+(!c.html5[a]&&n&&c.flash[a]?" (using flash)":c.preferFlash&&c.flash[a]&&n?" (preferring flash)":!c.html5[a]?" ("+(c.audioFormats[a].required?"required, ":"")+"and no flash support)":""))};K=function(a){if(o)return!1;if(c.html5Only)return o=!0,B(),!0;var e=!0,d;if(!c.useFlashBlock||
!c.flashLoadTimeout||c.getMoviePercent())o=!0,r&&(d={type:!n&&t?"NO_FLASH":"INIT_TIMEOUT"});if(r||a){if(c.useFlashBlock&&c.oMC)c.oMC.className=G()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error");A({type:"ontimeout",error:d,ignoreInit:!0});E(d);e=!1}r||(c.waitForWindowLoad&&!ia?k.add(h,"load",B):B());return e};ha=function(){if(o)return!1;if(c.html5Only){if(!o)k.remove(h,"load",c.beginDelayedInit),c.enabled=!0,K();return!0}S();try{i._externalInterfaceTest(!1),Ba(!0,c.flashPollingInterval||
(c.useHighPerformance?10:50)),c.debugMode||i._disableDebug(),c.enabled=!0,c.html5Only||k.add(h,"unload",ga)}catch(a){return E({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),U(!0),K(),!1}K();k.remove(h,"load",c.beginDelayedInit);return!0};D=function(){if(ma)return!1;ma=!0;oa();if(!n&&c.hasHTML5)c.useHTML5Audio=!0,c.preferFlash=!1;Ia();c.html5.usingFlash=Ha();t=c.html5.usingFlash;Ka();if(!n&&t)c.flashLoadTimeout=1;l.removeEventListener&&l.removeEventListener("DOMContentLoaded",D,!1);S();return!0};ua=function(){"complete"===
l.readyState&&(D(),l.detachEvent("onreadystatechange",ua));return!0};la=function(){ia=!0;k.remove(h,"load",la)};va();k.add(h,"focus",R);k.add(h,"load",C);k.add(h,"load",la);l.addEventListener?l.addEventListener("DOMContentLoaded",D,!1):l.attachEvent?l.attachEvent("onreadystatechange",ua):E({type:"NO_DOM2_EVENTS",fatal:!0});"complete"===l.readyState&&setTimeout(D,100)}var ca=null;if("undefined"===typeof SM2_DEFER||!SM2_DEFER)ca=new P;da.SoundManager=P;da.soundManager=ca})(window);






/**
 *
 * SoundManager 2 Demo: Play MP3 links "in-place"
 * ----------------------------------------------
 *
 * http://schillmania.com/projects/soundmanager2/
 *
 * A simple demo making MP3s playable "inline"
 * and easily styled/customizable via CSS.
 *
 * Requires SoundManager 2 Javascript API.
 *
 */

function InlinePlayer() {
	var self = this;
	var pl = this;
	var sm = soundManager; // soundManager instance
	var isIE = (navigator.userAgent.match(/msie/i));
	this.playableClass = 'inline-playable'; // CSS class for forcing a link to be playable (eg. doesn't have .MP3 in it)
	this.excludeClass = 'inline-exclude'; // CSS class for ignoring MP3 links
	this.links = [];
	this.sounds = [];
	this.soundsByURL = [];
	this.indexByURL = [];
	this.lastSound = null;
	this.soundCount = 0;

	this.config = {
		playNext: false, // stop after one sound, or play through list until end
		autoPlay: false  // start playing the first sound right away
	}

	this.css = {
		// CSS class names appended to link during various states
		sDefault: 'audio_link', // default state
		sLoading: 'audio_loading',
		sPlaying: 'audio_playing',
		sPaused: 'audio_paused'
	}

	this.addEventHandler = (typeof window.addEventListener !== 'undefined' ? function(o, evtName, evtHandler) {
			return o.addEventListener(evtName,evtHandler,false);
		}
		:
		function(o, evtName, evtHandler) {
			o.attachEvent('on'+evtName,evtHandler);
		});

	this.removeEventHandler = (typeof window.removeEventListener !== 'undefined' ?
		function(o, evtName, evtHandler) {
			return o.removeEventListener(evtName,evtHandler,false);
		}
		:
		function(o, evtName, evtHandler) {
			return o.detachEvent('on'+evtName,evtHandler);
		});

	this.classContains = function(o,cStr) {
		return (typeof(o.className)!='undefined'?o.className.match(new RegExp('(\\s|^)'+cStr+'(\\s|$)')):false);
	}

	this.addClass = function(o,cStr) {
		if (!o || !cStr || self.classContains(o,cStr)) return false;
		o.className = (o.className?o.className+' ':'')+cStr;
	}

	this.removeClass = function(o,cStr) {
		if (!o || !cStr || !self.classContains(o,cStr)) return false;
		o.className = o.className.replace(new RegExp('( '+cStr+')|('+cStr+')','g'),'');
	}

	this.getSoundByURL = function(sURL) {
		return (typeof self.soundsByURL[sURL] != 'undefined'?self.soundsByURL[sURL]:null);
	}

	this.isChildOfNode = function(o,sNodeName) {
		if (!o || !o.parentNode) {
		  return false;
		}
		sNodeName = sNodeName.toLowerCase();
		do {
		  o = o.parentNode;
		} while (o && o.parentNode && o.nodeName.toLowerCase() != sNodeName);
		return (o.nodeName.toLowerCase() == sNodeName?o:null);
	}

	this.events = {
		// handlers for sound events as they're started/stopped/played

		play: function() {
		  pl.removeClass(this._data.oLink,this._data.className);
		  this._data.className = pl.css.sPlaying;
		  pl.addClass(this._data.oLink,this._data.className);
		},

		stop: function() {
		  pl.removeClass(this._data.oLink,this._data.className);
		  this._data.className = '';
		},

		pause: function() {
		  pl.removeClass(this._data.oLink,this._data.className);
		  this._data.className = pl.css.sPaused;
		  pl.addClass(this._data.oLink,this._data.className);
		},

		resume: function() {
		  pl.removeClass(this._data.oLink,this._data.className);
		  this._data.className = pl.css.sPlaying;
		  pl.addClass(this._data.oLink,this._data.className);      
		},

		finish: function() {
		  pl.removeClass(this._data.oLink,this._data.className);
		  this._data.className = '';
		  if (pl.config.playNext) {
			var nextLink = (pl.indexByURL[this._data.oLink.href]+1);
			if (nextLink<pl.links.length) {
			  pl.handleClick({'target':pl.links[nextLink]});
			}
		  }
		}

	}

	this.stopEvent = function(e) {
		if (typeof e != 'undefined' && typeof e.preventDefault != 'undefined') {
		  e.preventDefault();
		} else if (typeof event != 'undefined' && typeof event.returnValue != 'undefined') {
		  event.returnValue = false;
		}
		return false;
	}

	this.getTheDamnLink = (isIE)?
		function(e) {
			// I really didn't want to have to do this.
			return (e && e.target?e.target:window.event.srcElement);
		}
		:
		function(e) {
			return e.target;
		}

	this.handleClick = function(e) {
		// a sound link was clicked
		if (typeof e.button != 'undefined' && e.button>1) {
		  // ignore right-click
		  return true;
		}
		var o = self.getTheDamnLink(e);
		if (o.nodeName.toLowerCase() != 'a') {
		  o = self.isChildOfNode(o,'a');
		  if (!o) return true;
		}
		var sURL = o.getAttribute('href');
		if (!o.href || (!sm.canPlayLink(o) && !self.classContains(o,self.playableClass)) || self.classContains(o,self.excludeClass)) {
		  return true; // pass-thru for non-MP3/non-links
		}
		var soundURL = (o.href);
		var thisSound = self.getSoundByURL(soundURL);
		if (thisSound) {
		  // already exists
		  if (thisSound == self.lastSound) {
			// and was playing (or paused)
			thisSound.togglePause();
		  } else {
			// different sound
			sm._writeDebug('sound different than last sound: '+self.lastSound.sID);
			if (self.lastSound) {
			  self.stopSound(self.lastSound);
			}
			thisSound.togglePause(); // start playing current
		  }
		} else {
		  // stop last sound
		  if (self.lastSound) {
			self.stopSound(self.lastSound);
		  }
		  // create sound
		  thisSound = sm.createSound({
		   id:'inlineMP3Sound'+(self.soundCount++),
		   url:soundURL,
		   onplay:self.events.play,
		   onstop:self.events.stop,
		   onpause:self.events.pause,
		   onresume:self.events.resume,
		   onfinish:self.events.finish
		  });
		  // tack on some custom data
		  thisSound._data = {
			oLink: o, // DOM node for reference within SM2 object event handlers
			className: self.css.sPlaying
		  };
		  self.soundsByURL[soundURL] = thisSound;
		  self.sounds.push(thisSound);
		  thisSound.play();
		}

		self.lastSound = thisSound; // reference for next call

		if (typeof e != 'undefined' && typeof e.preventDefault != 'undefined') {
		  e.preventDefault();
		} else {
		  event.returnValue = false;
		}
		return false;
	}

	this.stopSound = function(oSound) {
		soundManager.stop(oSound.sID);
		soundManager.unload(oSound.sID);
	}

	this.init = function() {
		sm._writeDebug('inlinePlayer.init()');
		var oLinks = document.getElementsByTagName('a');
		// grab all links, look for .mp3
		var foundItems = 0;
		for (var i=0, j=oLinks.length; i<j; i++) {
		  if ((sm.canPlayLink(oLinks[i]) || self.classContains(oLinks[i],self.playableClass)) && !self.classContains(oLinks[i],self.excludeClass)) {
			self.addClass(oLinks[i],self.css.sDefault); // add default CSS decoration
			self.links[foundItems] = (oLinks[i]);
			self.indexByURL[oLinks[i].href] = foundItems; // hack for indexing
			foundItems++;
		  }
		}
		if (foundItems>0) {
		  self.addEventHandler(document,'click',self.handleClick);
		  if (self.config.autoPlay) {
			self.handleClick({target:self.links[0],preventDefault:function(){}});
		  }
		}
	sm._writeDebug('inlinePlayer.init(): Found '+foundItems+' relevant items.');
	}

	this.init();

}

var inlinePlayer = null;

soundManager.debugMode = false; // disable or enable debug output

soundManager.preferFlash = false; // use HTML5 audio for MP3/MP4, if available
soundManager.useFlashBlock = true;
soundManager.url = 'swf/'; // path to directory containing SM2 SWF

// optional: enable MPEG-4/AAC support (requires flash 9)
soundManager.flashVersion = 9;

// ----

soundManager.onready(function() {
  // soundManager.createSound() etc. may now be called
  inlinePlayer = new InlinePlayer();
});
















