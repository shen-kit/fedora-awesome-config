var b={speedStep:0.25,slowerKeyCode:"109,189",fasterKeyCode:"107,187",resetKeyCode:"106",displayOption:"FadeInFadeOut",displayPosition:"TopRight",allowMouseWheel:true,rememberSpeed:false,hideSettingButton:false,enableAllVideosButton:true,secSaved:0,};
function c(o){var p=String.fromCharCode(o.keyCode); if(!/[\d\.]$/.test(p)||!/^\d+(\.\d*)?$/.test(o.target.value+p)){o.preventDefault(); o.stopPropagation();}}function e(){var o=document.getElementById("speedStep").value; var p=document.getElementById("slowerKeyInput").value; var q=document.getElementById("fasterKeyInput").value; var r=document.getElementById("resetKeyInput").value; var s=document.getElementById("allowMouseWheel").checked; var t=document.getElementById("rememberSpeed").checked; var u=document.getElementById("hideSettingButton").checked; var v=document.getElementById("enableAllVideosButton").checked; var w; var x=document.getElementsByName("displayOption"); for(var y=0,length=x.length; y<length; y++){if(x[y].checked){w=x[y].value; break;}}var z; var x=document.getElementsByName("displayPosition"); for(var y=0,length=x.length; y<length; y++){if(x[y].checked){z=x[y].value; break;}}o=isNaN(o)?b.speedStep:Number(o); chrome.storage.sync.set({speedStep:o,slowerKeyCode:p,fasterKeyCode:q,resetKeyCode:r,displayOption:w,displayPosition:z,allowMouseWheel:s,rememberSpeed:t,hideSettingButton:u,enableAllVideosButton:v,},function (){var M=document.getElementById("status"); M.textContent="Options saved"; setTimeout(function (){M.textContent="";},1000);});}
function f(){chrome.storage.sync.get(b,function (M){document.getElementById("speedStep").value=M.speedStep.toFixed(2); document.getElementById("slowerKeyInput").value=M.slowerKeyCode; document.getElementById("fasterKeyInput").value=M.fasterKeyCode; document.getElementById("resetKeyInput").value=M.resetKeyCode; document.getElementById(M.displayOption).checked=true; document.getElementById(M.displayPosition).checked=true; document.getElementById("allowMouseWheel").checked=M.allowMouseWheel; document.getElementById("rememberSpeed").checked=M.rememberSpeed; document.getElementById("hideSettingButton").checked=M.hideSettingButton; document.getElementById("enableAllVideosButton").checked=M.enableAllVideosButton;});}
function g(){chrome.storage.sync.set({speedStep:b.speedStep,slowerKeyCode:b.slowerKeyCode,fasterKeyCode:b.fasterKeyCode,resetKeyCode:b.resetKeyCode,displayOption:b.displayOption,displayPosition:b.displayPosition,allowMouseWheel:b.allowMouseWheel,rememberSpeed:b.rememberSpeed,hideSettingButton:b.hideSettingButton,enableAllVideosButton:b.enableAllVideosButton,},function (){f(); var M=document.getElementById("status"); M.textContent="Default options restored"; setTimeout(function (){M.textContent="";},1000);});}
var h=function (o){var p=Math.floor(o/(60*60*24)); var q=Math.floor((o-p*60*60*24)/(60*60)); var r=Math.floor((o-p*60*60*24-q*60*60)/60); var s=o-p*60*60*24-q*60*60-r*60; s=Math.round(s*100)/100; var t=p+" Days "; t+=(q<10?"0"+q:q)+" Hours "; t+=(r<10?"0"+r:r)+" Minutes "; t+=(s<10?"0"+s:s)+" Seconds "; return t;}
;document.addEventListener("DOMContentLoaded",function (){document.getElementById("save").addEventListener("click",e); document.getElementById("restore").addEventListener("click",g); document.getElementById("speedStep").addEventListener("keypress",c); chrome.storage.sync.get(b,function (M){document.getElementById("totalSavedTime").innerText="You have saved "+h(M.secSaved);});}
);window.addEventListener("load",function (){f();});$(document).ready(function (){var o=$("#fasterKeyInput"); var p=$("#slowerKeyInput"); var q=$("#resetKeyInput"); $.getJSON("keycodedict.json",function (M){o.html(""); p.html(""); q.html(""); $.each(M.keycodedict,function (R,S){o.append(new Option(S.input,S.keycode,false,false)); p.append(new Option(S.input,S.keycode,false,false)); q.append(new Option(S.input,S.keycode,false,false));});}); $("#BTCButton").on("click",function (){$("#BTCWallet").addClass("active"); $("#LTCWallet").removeClass("active");}); $("#BTCWalletClose").on("click",function (){$("#BTCWallet").removeClass("active");}); $("#LTCButton").on("click",function (){$("#LTCWallet").addClass("active"); $("#BTCWallet").removeClass("active");}); $("#LTCWalletClose").on("click",function (){$("#LTCWallet").removeClass("active");});}
);