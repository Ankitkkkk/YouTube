var ltr_hash="b678e465634ae0c618fde7028edcfd49";var SafariActive="0";var SafariPushId="";var SafariSubURL="https://safari.letreach.com/59aff1df4cd56d01188b45ac";var domname="AdSparxx";var ltr_branding=0;var sbdom="adsparkx";var img="https://cdn.letreach.com/img/logos/b678e465634ae0c618fde7028edcfd49.png";var host="adsparkx.com";var title="Nutralyfe would like to send you free HEALTH TIPS";var subtitle="";var allowbtn="Allow";var closebtn="Don&#039;t Allow";var chicklettxt="Subscribe to Notifications";var suboptinpos="top-right";var suboptinval="true";function ld(){getBrowser();ltr(5)}(function(){if(document.readyState!="loading"){ld()}else{document.addEventListener("DOMContentLoaded",ld,!1)}})();function getQueryVariable(queryurl,variable){if(queryurl.indexOf("?")>-1){var query=queryurl.split("?")[1];var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0]==variable){return pair[1]}}}else{return'Uncategorized'}}
function ltr(opt){window.ltroptin=opt;if(getQueryVariable(window.location.search,"letreachDevelopmentMode")==1&&window.ltrdevmode===undefined){window.ltrdevmode=1;var devjs=document.createElement("script");devjs.type="text/javascript";devjs.src='https://app.letreach.com/scripts/js/main/'+ltr_hash+'.js';document.getElementsByTagName("head")[0].appendChild(devjs);return}
if(window.ltrloaded===undefined){window.ltrloaded=1}else{return}
if(getQueryVariable(window.location.search,"letreachNotification")==1){showLTRBrandingBelow()}
if(!('PushManager' in window)){console.log("Push Messaging not supported")}else{var fs=window.RequestFileSystem||window.webkitRequestFileSystem;if(!fs){loadoptin(opt)}else{fs(window.TEMPORARY,100,function(fs){loadoptin(opt)},function(err){console.log("in incognito")})}}}
function ltr_resubscribe(serviceWorkerRegistration){serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly:!0}).then(function(subscription){var key=subscription.getKey?subscription.getKey('p256dh'):'';key=key?btoa(String.fromCharCode.apply(null,new Uint8Array(key))):'';var auth=subscription.getKey?subscription.getKey('auth'):'';auth=auth?btoa(String.fromCharCode.apply(null,new Uint8Array(auth))):'';console.log("Subscription Successful");subs=endpointWorkaround(subscription);if(window.XMLHttpRequest){var xmlhttp2=new XMLHttpRequest()}else{var xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP")}
xmlhttp2.onreadystatechange=function(){if(xmlhttp2.readyState==4&&xmlhttp2.status==200){console.log(xmlhttp2.responseText);var date=new Date();date.setTime(date.getTime()+(8*60*60*1000));var expires="; expires="+date.toGMTString();document.cookie="ltr_subrefresh=1; expires="+expires+"; path=/"}};xmlhttp2.open("POST","https://api.letreach.com/main/updsubscribe",!0);xmlhttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");if(typeof ltr_category==='undefined'){var ltr_category='Uncategorized'}
xmlhttp2.send("subhash="+getSubscriberhash()+"&subid="+encodeURIComponent(subs)+"&key="+encodeURIComponent(key)+"&auth="+encodeURIComponent(auth))}).catch(function(e){if(Notification.permission==='denied'){}else{console.log("Failed Subscription"+e)}})}
function updateLTRSubscriber(){navigator.serviceWorker.ready.then(function(serviceWorkerRegistration){serviceWorkerRegistration.pushManager.getSubscription().then(function(oldsubscription){if(oldsubscription!==null){oldsubscription.unsubscribe().then(function(){ltr_resubscribe(serviceWorkerRegistration)})}else{ltr_resubscribe(serviceWorkerRegistration)}})})}
function loadoptin(){if(flg==1){console.log("ltr loaded");if(isSubscriber()){if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest()}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}
xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){console.log(xmlhttp.responseText)}};xmlhttp.open("POST","https://api.letreach.com/main/ana",!0);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");if(typeof ltr_category==='undefined'){var ltr_category='Uncategorized'}
xmlhttp.send("subhash="+getSubscriberhash()+"&hash="+ltr_hash+"&category="+ltr_category+"&page="+window.location.href);if(window.ltroptin==5){if(document.cookie.indexOf("ltr_subrefresh")===-1){var manifestjson=document.createElement("LINK");manifestjson.rel="manifest";manifestjson.href='https://'+location.hostname+'/manifest.json';document.getElementsByTagName("head")[0].appendChild(manifestjson);updateLTRSubscriber()}}}else{if(window.ltroptin!=5){var pshcss=document.createElement("LINK");pshcss.rel="stylesheet";pshcss.href='https://cdn.letreach.com/css/push/'+ltr_hash+'.css';document.getElementsByTagName("head")[0].appendChild(pshcss)}
checkInIframe()}}}
function getBrowser(){console.log("browser");var nAgt=navigator.userAgent;var browserName=navigator.appName;if((verOffset=nAgt.indexOf("Opera"))!=-1){browserName="Opera"}else if((verOffset=nAgt.indexOf("MSIE"))!=-1){browserName="Microsoft Internet Explorer"}else if((verOffset=nAgt.indexOf("Chrome"))!=-1){browserName="Chrome";flg=1}else if((verOffset=nAgt.indexOf("Safari"))!=-1){browserName="Safari";flg=1}else if((verOffset=nAgt.indexOf("Firefox"))!=-1){browserName="Firefox";flg=1}
return browserName}
function hideallow(){var date=new Date();date.setTime(date.getTime()+(24*60*60*1000));var expires="; expires="+date.toGMTString();document.cookie="hideallw=1; expires="+expires+"; path=/";document.getElementById("ltrpop").parentNode.removeChild(document.getElementById("ltrpop"))}
function createSubscriber(subhash){console.log("Subscriber Created");createCookie("ltrvid",subhash);localStorage.ltrvid=subhash;if(document.cookie.indexOf('ltrmaino')<0){createCookie("ltrmaino",subhash)}}
function isSubscriber(){if(document.cookie.indexOf('ltrvid')>=0){return 1}else{if(localStorage.ltrvid!==undefined){return 1}else{return 0}}}
function createCookie(name,val){var date=new Date();date.setTime(date.getTime()+(24*60*60*365*1000));var expires="; expires="+date.toGMTString();document.cookie=name+"="+val+"; expires="+expires+"; path=/"}
function getCookie(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length==2)return parts.pop().split(";").shift()}
function getSubscriberhash(){if(document.cookie.indexOf('ltrvid')>=0){return getCookie('ltrvid')}else{if(localStorage.ltrvid!==undefined){return localStorage.ltrvid}else{return 0}}}
function popsub(typ){if(document.getElementById("letreach_post_category")){var ltr_category=document.getElementById("letreach_post_category").value}
if(typeof ltr_category==='undefined'){var ltr_category='Uncategorized'}
if(typ=="push")
var domain="https://"+sbdom+".letreach.com?category="+ltr_category;else var domain='https://letreach.com/subscribe/'+typ+'/'+ltr_hash+'?cat='+ltr_category;var popup=window.open(domain,"_blank","height=400, width=550, status=yes, toolbar=no");if(!popup||popup.closed||typeof popup.closed=='undefined'){popup_blocked()}else{popup.onclose=function(){console.log("popupclosed");startMessageListener()};var myElements=document.querySelectorAll(".ltrpopclass");for(var i=0;i<myElements.length;i++){myElements[i].style.display="none"}}}
function checkInIframe(){var newDiv=document.createElement("div");newDiv.id="ltrpopclass";newDiv.innerHTML='<iframe src="https://'+sbdom+'.letreach.com/ask.html?checkPermission=1" visibility="hidden" style="width: 0px; height: 0px; border: 0px; display: none;"></iframe>';document.getElementsByTagName("body")[0].appendChild(newDiv);startMessageListener()}
function startMessageListener(){if(window.ltroptin==5){SSLSUB()}else{window.addEventListener('message',function(event){if(event.origin=="https://letreach.com"||event.origin=="https://"+sbdom+".letreach.com"||event.origin=="https://"+sbdom+".ltrch.com"){console.log("event "+event.data);if(event.data.length==1){if(event.data==-1){hideallow()}else if(event.data==0||event.data==2){var ua=navigator.userAgent.toLowerCase();if(ua.indexOf('safari')!=-1||ua.indexOf('firefox')!=-1){if(ua.indexOf('chrome')!=-1||ua.indexOf('firefox')!=-1){console.log("Chrome");if(window.ltroptin==1)
optin1();if(window.ltroptin==2)
optin2();if(window.ltroptin==3)
optin3();if(window.ltroptin==4)
optin4();if(window.ltroptin==5)
SSLSUB();if(window.ltroptin==6)
optin6()}}}}else if(event.data.length=="32"){createSubscriber(event.data)}}},!1)}}
function popupCallback(){var iframe=document.getElementById("ltrIframe");if(typeof(iframe)==="undefined"){var newDiv=document.createElement("div");newDiv.id="ltrIframe";newDiv.innerHTML='<iframe src="https://'+sbdom+'.letreach.com/ask.html?checkPermission=1" visibility="hidden" style="width: 0px; height: 0px; border: 0px; display: none;"></iframe>';document.getElementsByTagName("body")[0].appendChild(newDiv)}else{iframe.contentWindow.location.reload()}
startMessageListener()}
function popup_blocked(){var newDiv=document.createElement("div");newDiv.id="popup-blocked-warning";newDiv.innerHTML='<div class="ltr-popup-blocked-modal"><div class="ltr-modal-box"><div class="ltr-image"><img src="https://letreach.com/assets/push/img/chrome-blocked.png"></div><div class="message">Please unblock popups from the browser settings as mentioned in the screenshot!</div></div></div>';document.getElementsByTagName("body")[0].appendChild(newDiv)}
function showLTRBrandingTop(){if(ltr_branding==0){return}
var lb=document.createElement("div");lb.id="ltrbranding";lb.className="ltrbranding";lb.innerHTML='<style>.ltrbranding{z-index:9999999;display:inline-block;position:fixed;top:5px;right:5px;}.ltrbranding .ltr-branding-box{cursor:pointer;display:inline-block;color:#fff;background:rgba(0,0,0,.7);border-radius:2px;padding:3px;font-size:14px}.ltr-branding-box img{width:16px;vertical-align:middle;margin-right:5px}</style><div id="ltrbranding" class="ltrbranding"><a href="https://letreach.com/?utm_source='+location.hostname+'&utm_medum=NotificationBranding&utm_campaign=NotificationBranding" target="_blank"><div class="ltr-branding-box"><img src="https://cdn.letreach.com/img/global/Logo-16x16shadow.png">Notifications Powered by LetReach</div></a></div>';document.getElementsByTagName("body")[0].appendChild(lb)}
function showLTRBrandingBelow(){if(ltr_branding==0){return}
var lb=document.createElement("div");lb.id="ltrbranding";lb.className="ltrbranding";lb.innerHTML='<style>.ltrbranding{z-index:9999999;display:inline-block;position:fixed;bottom:0;right:5px;}.ltrbranding .ltr-branding-box{cursor:pointer;display:inline-block;color:#fff;background:rgba(0,0,0,.7);border-radius:2px;padding:3px;font-size:14px}.ltr-branding-box a{cursor:pointer;color:#fff;font-size:14px;text-decoration: none;}.ltr-branding-box img{width:16px;vertical-align:middle;margin-right:5px}.ltr-unsub-btn{color:#fff;display:block;text-align: center; font-size: 12px !important;margin-bottom: 4px}</style><div class="ltr-branding-box"><a title="Unsubscribe to Notifications" class="ltr-unsub-btn" onclick="ltr_unsubscribe()">Unsubscribe to Notifications</a><a title="Notifications Powered by LetReach" href="https://letreach.com/?utm_source='+location.hostname+'&amp;utm_medum=NotificationBranding&amp;utm_campaign=NotificationBranding" target="_blank"><img src="https://cdn.letreach.com/img/global/Logo-16x16shadow.png">Notifications Powered by LetReach</a></div>';document.getElementsByTagName("body")[0].appendChild(lb)}
function ltr_unsubscribe(){if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest()}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}
xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){console.log(xmlhttp.responseText)}};xmlhttp.open("POST","https://api.letreach.com/main/unsubscribe",!0);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");if(typeof ltr_category==='undefined'){var ltr_category='Uncategorized'}
xmlhttp.send("subhash="+getSubscriberhash()+"&hash="+ltr_hash+"&page="+window.location.href)}
function sendsrv(sub,type,key,auth){if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest()}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}
xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){console.log(xmlhttp.responseText);console.log("POSTED TO SERVR");createSubscriber(xmlhttp.responseText);var date=new Date();date.setTime(date.getTime()+(8*60*60*1000));var expires="; expires="+date.toGMTString();document.cookie="ltr_subrefresh=1; expires="+expires+"; path=/"}};xmlhttp.open("POST","https://api.letreach.com/main/subscribe",!0);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");var ltr_category=document.getElementById("letreach_post_category");if(typeof ltr_category==='undefined'||ltr_category==null){var lcategory='Uncategorized'}else{var lcategory=ltr_category.value}
xmlhttp.send("subid="+sub+"&hash="+ltr_hash+"&key="+encodeURIComponent(key)+"&type="+type+"&page="+encodeURIComponent(window.location.href)+"&category="+encodeURIComponent(lcategory)+"&sua="+encodeURI(navigator.userAgent)+"&ltrmaino="+getCookie("ltrmaino")+"&auth="+encodeURIComponent(auth))}
function endpointWorkaround(pushSubscription){if(pushSubscription.endpoint.indexOf('https://android.googleapis.com/gcm/send')!==0){return pushSubscription.endpoint}
var mergedEndpoint=pushSubscription.endpoint;if(pushSubscription.subscriptionId&&pushSubscription.endpoint.indexOf(pushSubscription.subscriptionId)===-1){mergedEndpoint=pushSubscription.endpoint+'/'+pushSubscription.subscriptionId}
return mergedEndpoint}
function ltr_subscribe(){navigator.serviceWorker.ready.then(function(serviceWorkerRegistration){serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly:!0}).then(function(subscription){var key=subscription.getKey?subscription.getKey('p256dh'):'';key=key?btoa(String.fromCharCode.apply(null,new Uint8Array(key))):'';var auth=subscription.getKey?subscription.getKey('auth'):'';auth=auth?btoa(String.fromCharCode.apply(null,new Uint8Array(auth))):'';console.log("Subscription Successful");subs=endpointWorkaround(subscription);return sendsrv(subs,brw,key,auth,navigator)}).catch(function(e){if(Notification.permission==='denied'){}else{console.log("Failed Subscription"+e)}})})}
function initialiseState(){console.log("InitialState");if(!('showNotification' in ServiceWorkerRegistration.prototype)){console.warn('Notifications aren\'t supported.');return;document.getElementById("ltrbranding").style.display="none"}
if(!('PushManager' in window)){console.warn('Push messaging isn\'t supported.');return;document.getElementById("ltrbranding").style.display="none"}
if(Notification.permission!=="granted"){Notification.requestPermission(function(result){console.log("RequestPermision");if(result==='denied'){console.log("Denied");document.getElementById("ltrbranding").style.display="none"}else if(result==='default'){document.getElementById("ltrbranding").style.display="none"}else{ltr_subscribe();document.getElementById("ltrbranding").style.display="none"}})}
if(Notification.permission==='denied'){push_blocked('chrome','Looks like you have blocked Letreach from sending Push Notifications.','Please Allow by clicking on green lock on top and selecting "Always allow on this site.".');document.getElementById("ltrbranding").style.display="none"}
if(Notification.permission==='granted'){ltr_subscribe();document.getElementById("ltrbranding").style.display="none"}}
function registerSWLTR(sworker){var ua=navigator.userAgent.toLowerCase();if(ua.indexOf('safari')!=-1){if(ua.indexOf('chrome')>-1){brw='c';var fs=window.RequestFileSystem||window.webkitRequestFileSystem;if(!fs){if('serviceWorker' in navigator){showLTRBrandingTop();navigator.serviceWorker.register(sworker).then(initialiseState)}}
fs(window.TEMPORARY,100,function(fs){if('serviceWorker' in navigator){showLTRBrandingTop();navigator.serviceWorker.register(sworker).then(initialiseState)}},function(err){})}else{console.log("safari")}}else{brw='m';if('serviceWorker' in navigator){showLTRBrandingTop();if(sworker.indexOf("service-worker")!==-1){sworker='https://'+location.hostname+'/firefox-worker.js'}
navigator.serviceWorker.register(sworker).then(initialiseState)}else{console.warn('Service workers aren\'t supported in this browser.')}}}
function SSLSUB(){if(isSubscriber()){console.log('Already Subscribed!')}else{if(window.location.protocol=="https:"){var manifestjson=document.createElement("LINK");manifestjson.rel="manifest";manifestjson.href='https://'+location.hostname+'/manifest.json';document.getElementsByTagName("head")[0].appendChild(manifestjson);if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest()}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}
xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){if(xmlhttp.status==200||xmlhttp.status==304){registerSWLTR('https://'+location.hostname+'/sworker.js')}else{registerSWLTR('https://'+location.hostname+'/service-worker.js')}}};xmlhttp.open("GET",'https://'+location.hostname+'/sworker.js',!0);xmlhttp.send()}}}
function chicklet(txt){if(suboptinval=="true"){var newDiv=document.createElement("div");newDiv.id="ltr-right-pop";newDiv.className="ltrpopclass";newDiv.innerHTML='<div class="shr7 shr7-'+suboptinpos+'" onclick="popsub(\'push\')">'+txt+'</div>';document.getElementsByTagName("body")[0].appendChild(newDiv);setTimeout(function(){document.getElementsByClassName("shr7")[0].style.transform="rotate(-90deg)"},1000)}}