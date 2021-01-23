//Made by FSanchir
//변수
if($F_HP !== undefined) {
    location.reload();
}
function reload() {
    document.write("Reloading..!");
    location.reload();
}
function restart() {
    document.querySelector("a.ui-stats-restart.btn-blue.btn-darken.menu-option").click()
    document.querySelector("#btn-start-battle").click()
}
function gamestarted() {
    var $temp_started = document.querySelector("#ui-health-depleted").style.display == "block";
    return $temp_started
}
function reportkiller() {
    if(document.querySelector(".ui-stats-player-spectate.ui-stats-player-spectate-red.game-battle-result-btn-darkened") != null) {
        return "Battle Finished or Killer is dead!"
    }
    document.querySelector(".ui-stats-player-spectate.ui-stats-player-spectate-red").click()
    document.querySelector("#btn-report-option").click()
    document.querySelector("#btn-confirm-report").click()
    document.querySelector("#btn-spectate-view-stats").click()
    return "Reported!";
}
function msg(msg) {
    document.querySelector("#FiReport").innerHTML = "msg";
}
var $F_HP, $F_ADREN, $ELEMENT_HP, $FRegion, $regionele, $_FiRegame, $_FiReport;
$_FiRegame = document.createElement("a");
$_FiRegame.className = "ui-stats-restart btn-blue btn-darken menu-option"
$_FiRegame.style.left = "240px";
$_FiRegame.innerHTML = "ReGame";
$_FiRegame.id = "FiReGame";
$_FiRegame.addEventListener("click", function() {restart();});

$_FiReport = document.createElement("a");
$_FiReport.className = "ui-stats-find-killer btn-blue btn-darken menu-option"
$_FiReport.style.left = "-30px";
$_FiReport.innerHTML = "Report Killer";
$_FiReport.id = "FiReport";
$_FiReport.addEventListener("click", function() {msg(reportkiller());});



d = setInterval(function() {
//    if(document.getElementById("ui-stats-options") !== null && document.getElementById("ui-stats-options").innerHTML != "" && document.querySelector("#ui-health-depleted").style.display == "block") {
    if(document.getElementById("ui-stats-options") !== null && document.getElementById("ui-stats-options").innerHTML != "") {
        if(document.getElementById("FiReGame") == null && document.getElementById("FiReport") == null) {
            document.querySelectorAll(".ui-stats-find-killer.btn-blue.btn-darken.menu-option")[0].style.left = "-570px"; //270px 차이. -570px & -300px & -30px & 240px
            document.querySelectorAll(".ui-stats-restart.btn-blue.btn-darken.menu-option")[0].style.left = "-300px";
            document.getElementById("ui-stats-options").appendChild($_FiRegame);
            document.getElementById("ui-stats-options").appendChild($_FiReport);
        }
    }
}, 1500)
//document.getElementById("ui-stats-options").appendChild($_FiRegame);
$ELEMENT_HP = document.createElement("span");
$FRegion = document.createElement("style");
$regionele = document.createElement("span");
$ELEMENT_HP.style.color = "green";
$ELEMENT_HP.id = "FS_ELEMENT_HP";
$ELEMENT_HP.style.backgroundColor = "lightgreen";
document.getElementById("ui-health-actual").appendChild($ELEMENT_HP);


$FRegion.innerHTML = ".topright { position: absolute;top: 8px;right: 16px;font-size: 18px;}";
document.head.appendChild($FRegion);
$regionele.id = "FS_REGION";
$regionele.className = "topright";

document.body.appendChild($regionele);


setInterval(function() {
var $temp_started = document.querySelector("#ui-health-depleted").style.display == "block";
if($temp_started) {
document.getElementById("FS_REGION").style.display = "inline";
var $region = document.querySelectorAll("optgroup>option")[4].innerHTML.replace("Region | ", "");
document.getElementById("FS_REGION").style.color = "green"
if($region == "South Korea") {
document.getElementById("FS_REGION").style.color = "skyblue";
}
document.getElementById("FS_REGION").innerHTML = "Region: "+$region;
}
else {
    document.getElementById("FS_REGION").style.display = "none";
}
}, 2000);
setInterval(function() {
    $F_HP = Math.round(document.getElementById("ui-health-actual").style.width.slice(0,-1));
    
    document.getElementById("FS_ELEMENT_HP").innerHTML = $F_HP + "/100";
    //document.getElementById("FS_ELEMENT_ADREN").innerHTML = $F_ADREN + "/100";
    if($F_HP == 0) {
        document.getElementById("FS_ELEMENT_HP").style.color = "red";
        document.getElementById("FS_ELEMENT_HP").style.backgroundColor = "black";
        document.getElementById("FS_ELEMENT_HP").className = "";
    }
    if($F_HP < 40) {
        if($F_HP > 0) {
        document.getElementById("FS_ELEMENT_HP").style.color = "red";
        document.getElementById("FS_ELEMENT_HP").style.backgroundColor = "#0B0000";
        document.getElementById("FS_ELEMENT_HP").className = "icon-pulse";
        }
    }
    if($F_HP > 40) {
        if($F_HP < 65) {
        document.getElementById("FS_ELEMENT_HP").style.color = "yellow";
        document.getElementById("FS_ELEMENT_HP").style.backgroundColor = "orange"
        document.getElementById("FS_ELEMENT_HP").className = "";
        }
    }
    if($F_HP > 65) {
        document.getElementById("FS_ELEMENT_HP").style.color = "green";
        document.getElementById("FS_ELEMENT_HP").style.backgroundColor = "lightgreen";
        document.getElementById("FS_ELEMENT_HP").className = "";
    }
}, 10);
var first = true;
(function() {
    const times = [];
    let fps;

    function refreshLoop() {
        window.requestAnimationFrame(() => {
            const now = performance.now();
            while (times.length > 0 && times[0] <= now - 1000) {
                times.shift();
            }
            times.push(now);
            fps = times.length;
            if (first) {
                var obj = document.createElement("P");
                var text = document.createTextNode(Math.round(fps).toString() + " FPS");
                obj.appendChild(text);
                obj.setAttribute("id", "fps");
                document.getElementById("ui-top-left").appendChild(obj);
                var credit = document.createElement("P");
                var txt = document.createTextNode("Tool by FSanchir");
                credit.appendChild(txt);
                document.getElementById("ui-top-left").appendChild(credit);
                first = false;
            } else {
                document.getElementById("fps").innerHTML = Math.round(fps).toString() + " FPS";
            }
            refreshLoop();
        });
    }
    refreshLoop();
});

killloginterval = setInterval(function() {
    var step;
    for(step = 0; step < 6; step++) {
        if(document.querySelector("#ui-killfeed-"+step+">.killfeed-text") !== null && document.querySelector("#ui-killfeed-"+step+">.killfeed-text").innerHTML !== null) {
            if(document.querySelector("#ui-killfeed-"+step+">.killfeed-text").style.color != "yellow") {
                var killlogtext;
                killlogtext = document.querySelector("#ui-killfeed-"+step+">.killfeed-text").innerHTML;
                killlogtext = killlogtext.replace(/\s/g, '');
                killlogtext = killlogtext.split("with")[0]
                killlogtext = killlogtext.split("killed")
                if(killlogtext[0]==killlogtext[1]) {
                    document.querySelector("#ui-killfeed-"+step+">.killfeed-text").style.color = "yellow";
                }
            }
            else {
                var killlogtext;
                killlogtext = document.querySelector("#ui-killfeed-"+step+">.killfeed-text").innerHTML;
                killlogtext = killlogtext.replace(/\s/g, '');
                killlogtext = killlogtext.split("with")[0]
                killlogtext = killlogtext.split("killed")
                if(killlogtext[0]!=killlogtext[1]) {
                    document.querySelector("#ui-killfeed-"+step+">.killfeed-text").style.color = "rgb(239, 238, 238)";
                }
            }
        }
    }
}, 200);
document.querySelector("title").innerHTML = "surviv.io - 2d battle royale game | Fi's Tools";
/*
document.querySelectorAll(".ui-weapon-name")[0].innerHTML 1번 무기
document.querySelectorAll(".ui-armor-level")[0].innerHTML 헬멧 레밸
document.querySelectorAll(".ui-loot-count")[0].innerHTML - 0 붕대 1 구급상자 6 소다 8 알약 12 노란총알 14 파총 16 빨총 18 초총
document.getElementById("ui-gas-timer").innerHTML 남은 시간 
document.querySelector(".js-ui-map-hidden.js-ui-hud-show.icon-pulse") 줄어드는 중 
document.querySelector(".js-ui-map-hidden.js-ui-hud-show") 아님

$ELEMENT_HP.style = "bottom:218px;left:82px;height:36px;width:100px";
document.getElementById("ui-map-container").appendChild($ELEMENT_HP);



document.querySelector("#btn-start-battle").click()
*/
