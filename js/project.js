const half_arrow = [
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const zuo3 = [
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
const you4 = [
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,0,1,0,0,0,0,0,0,0,1,0,0],
    [0,1,0,0,1,0,0,0,0,0,0,0,1,0,0],
    [1,0,0,0,1,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],
];
const zhuan3 = [
    [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [1,1,1,1,1,1,0,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,1,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,1,0,0,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,0,0,0,0,0,0,0,1,0],
    [1,1,1,1,0,0,0,0,1,0,0,0,1,0,0],
    [0,1,0,1,0,0,0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
]
const xiang4 = [
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,1,1,1,1,1,0,0,0,1,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],
    [0,1,0,0,0,1,1,1,1,1,0,0,0,1,0],
    [0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],
];
const qian2 = [
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0],
    [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0],
    [0,0,1,1,1,1,1,0,0,1,0,0,1,0,0],
    [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0],
    [0,0,1,0,0,0,1,0,0,1,0,0,1,0,0],
    [0,0,1,1,1,1,1,0,0,1,0,0,1,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,0,1,0,0],
    [0,0,1,0,1,0,1,0,0,0,1,0,1,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,1,0,0,0],
];
const hou4 = [
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,1,0,0],
    [0,1,0,0,0,1,0,0,0,0,0,0,1,0,0],
    [1,0,0,0,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
];
const zhu4 = [
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,1,1,1,1,1,1,1,1,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [1,1,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,1,0,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
const yi4 = [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,1,0,0,0,1,0,0,0,0,0,1,0],
    [0,1,0,1,0,0,0,1,0,0,0,1,0,0,1],
    [1,0,0,1,0,0,0,0,0,0,0,1,0,0,1],
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
];
const sha1 = [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
    [0,1,1,0,0,0,1,0,0,0,0,0,0,1,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
    [0,0,0,1,0,1,0,0,0,0,1,0,0,1,0],
    [0,0,1,0,0,0,1,0,0,0,1,0,0,1,0],
    [0,1,0,0,1,0,0,1,0,0,1,0,0,1,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,1,1,0,1,0,0,1,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
    [0,0,1,0,1,0,1,0,0,0,1,0,0,1,0],
    [0,0,1,0,1,0,0,1,0,0,1,0,0,1,0],
    [0,1,0,0,1,0,0,0,1,0,1,0,0,1,0],
    [1,0,0,0,1,0,0,0,1,0,0,0,0,1,0],
    [0,0,1,0,1,0,0,0,0,0,0,1,0,1,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0],
];
const che1 = [
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
];

// zuo3 + zhuan3
var zuo3zhuan3 = [];
var zuo3zhuan3Compact = [];
for(var i = 0; i < 16; i++) {
    var zuo3zhuan3Line = [];
    zuo3zhuan3Line = zuo3zhuan3Line.concat(zuo3[i]);
    zuo3zhuan3Line = zuo3zhuan3Line.concat(0);
    zuo3zhuan3Line = zuo3zhuan3Line.concat(zhuan3[i]);
    zuo3zhuan3.push(zuo3zhuan3Line);
    var zuo3zhuan3LineCompact = []
    zuo3zhuan3LineCompact = zuo3zhuan3LineCompact.concat(zuo3[i]);
    zuo3zhuan3LineCompact = zuo3zhuan3LineCompact.concat(zhuan3[i]);
    zuo3zhuan3Compact.push(zuo3zhuan3LineCompact);
}

// you4 + zhuan3
var you4zhuan3 = [];
var you4zhuan3Compact = [];
for(var i = 0; i < 16; i++) {
    var you4zhuan3Line = [];
    you4zhuan3Line = you4zhuan3Line.concat(you4[i]);
    you4zhuan3Line = you4zhuan3Line.concat(0);
    you4zhuan3Line = you4zhuan3Line.concat(zhuan3[i]);
    you4zhuan3.push(you4zhuan3Line);
    var you4zhuan3LineCompact = [];
    you4zhuan3LineCompact = you4zhuan3LineCompact.concat(you4[i]);
    you4zhuan3LineCompact = you4zhuan3LineCompact.concat(zhuan3[i]);
    you4zhuan3Compact.push(you4zhuan3LineCompact);
}

// zhu4 + yi4
var zhu4yi4 = [];
var zhu4yi4Compact = [];
for(var i = 0; i < 16; i++) {
    var zhu4yi4Line = [];
    zhu4yi4Line = zhu4yi4Line.concat(zhu4[i]);
    zhu4yi4Line = zhu4yi4Line.concat(0);
    zhu4yi4Line = zhu4yi4Line.concat(yi4[i]);
    zhu4yi4.push(zhu4yi4Line);
    var zhu4yi4LineCompact = [];
    zhu4yi4LineCompact = zhu4yi4LineCompact.concat(zhu4[i]);
    zhu4yi4LineCompact = zhu4yi4LineCompact.concat(yi4[i]);
    zhu4yi4Compact.push(zhu4yi4LineCompact);
}

// sha1 + che1
var sha1che1 = [];
var sha1che1Compact = [];
for(var i = 0; i < 16; i++) {
    var sha1che1Line = [];
    sha1che1Line = sha1che1Line.concat(sha1[i]);
    sha1che1Line = sha1che1Line.concat(0);
    sha1che1Line = sha1che1Line.concat(che1[i]);
    sha1che1.push(sha1che1Line);
    var sha1che1LineCompact = [];
    sha1che1LineCompact = sha1che1LineCompact.concat(sha1[i]);
    sha1che1LineCompact = sha1che1LineCompact.concat(che1[i]);
    sha1che1Compact.push(sha1che1LineCompact);
}



var timeReload = 180;
// timeRefresh of Bus is 400 
var timeRefresh = 400;
var bitFixed = 3;
setTimeout(function(){location.reload()}, timeReload * 1000);
console.log("The page will refresh " + Math.ceil(timeReload * (1000 / timeRefresh)) + " times and will reload in " + timeReload + "s.");


var ifShow = 0, time = 0;

if(localStorage.ifLeft == undefined) {
    localStorage.ifLeft = 0;
}
var ifLeft = localStorage.ifLeft;
if(localStorage.ifRight == undefined) {
    localStorage.ifRight = 0;
}
var ifRight = localStorage.ifRight;
if(localStorage.ifForward == undefined) {
    localStorage.ifForward = 0;
}
var ifForward = localStorage.ifForward;
if(localStorage.ifBackward == undefined) {
    localStorage.ifBackward = 0;
}
var ifBackward = localStorage.ifBackward;
if(localStorage.ifTurnLeft == undefined) {
    localStorage.ifTurnLeft = 0;
}
var ifTurnLeft = localStorage.ifTurnLeft;
if(localStorage.ifTurnRight == undefined) {
    localStorage.ifTurnRight = 0;
}
var ifTurnRight = localStorage.ifTurnRight;
if(localStorage.ifMoveForward == undefined) {
    localStorage.ifMoveForward = 0;
}
var ifMoveForward = localStorage.ifMoveForward;
if(localStorage.ifMoveBackward == undefined) {
    localStorage.ifMoveBackward = 0;
}
var ifMoveBackward = localStorage.ifMoveBackward;

function turnShow() {
    ifLeft = localStorage.ifLeft;
    ifRight = localStorage.ifRight;
    ifForward = localStorage.ifForward;
    ifBackward = localStorage.ifBackward;
    ifTurnLeft = localStorage.ifTurnLeft;
    ifTurnRight = localStorage.ifTurnRight;
    ifMoveForward = localStorage.ifMoveForward;
    ifMoveBackward = localStorage.ifMoveBackward;
    // ifShow  = 0;
}
function turnHide() {
    // 新刹车隐藏左右上下箭头 || 旧刹车隐藏上下箭头
    if((ifAttention == 1 && ((ifLeft == 1 || ifRight == 1)/*  || (ifForward == 1 || ifBackward == 1) */)) || (ifBrakeCenter == 1 && (ifForward == 1 || ifBackward == 1))) {
        ifLeft = 0;
        ifRight = 0;
        ifForward = 0;
        ifBackward = 0;
    }else {
        ifShow = 0;
    }

    ifTurnLeft = 0;
    ifTurnRight = 0;
    ifMoveForward = 0;
    ifMoveBackward = 0;
}

var ifAttention = 0;
var ifBrakeRight = 0;
var ifBrakeCenter = 0;
document.getElementById("brakeBut").onmousedown = function () {
    ifAttention = 1;
    ifBrakeRight = 1;
    turnHide();
};
document.getElementById("brakeBut").onmouseup = function () {
    ifAttention = 0;
    ifBrakeRight = 0;
    turnShow();
};
document.getElementById("brakeBut").onmouseout = function () {
    ifAttention = 0;
    ifBrakeRight = 0;
    turnShow();
};
document.getElementById("brakeOldBut").onmousedown = function () {
    ifBrakeCenter = 1;
    turnHide();
};
document.getElementById("brakeOldBut").onmouseup = function () {
    ifBrakeCenter = 0;
    turnShow();
};
document.getElementById("brakeOldBut").onmouseout = function () {
    ifBrakeCenter = 0;
    turnShow();
};


function printTail() {
    if(ifShow == 1) {
        ifShow = 0;
        console.log(time.toFixed(bitFixed), ifShow);
    } else {
        ifShow = 1;
        console.log(time.toFixed(bitFixed), ifShow, Number(ifLeft), Number(ifRight), Number(ifForward), Number(ifBackward), Number(ifTurnLeft), Number(ifTurnRight), Number(ifMoveForward), Number(ifMoveBackward), Number(ifBrakeCenter), Number(ifAttention), Number(ifBrakeRight));
    }
    
    var tailHTML = "";
    // 每行
    for(var i = 0; i < 16; i++) {
        var tailHTMLLine = "";
        // 每列
        for(var j = 0; j < 72; j++) {
            if(j >=0 && j < 24) {
                if(ifLeft == 1 && i >= 2 && i < 8 && j >= 4 && j < 20 && half_arrow[i - 2][j - 4] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifLeft == 1 && i >= 8 && i < 14 && j >= 4 && j < 20 && half_arrow[15 - i - 2][j - 4] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifTurnRight == 1 && you4zhuan3[i][j] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if((ifMoveForward == 1 || ifMoveBackward == 1) && j >= 9 && xiang4[i][j - 9] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifAttention == 1 && zhu4yi4[i][j] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifBrakeCenter == 1 && j >= 21 && sha1che1Compact[i][j - 21] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else {
                    tailHTMLLine = tailHTMLLine + "<div class='off-yellow'></div>";
                }
            } else if(j >= 24 && j < 48) {
                if(ifTurnRight == 1 && j < 31 && you4zhuan3[i][j] == 1){
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifTurnLeft == 1 && j >= 41 && zuo3zhuan3[i][j - 41] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifForward == 1 && j >= 30 && j < 36&& half_arrow[j - 30][i] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifForward == 1 && j >= 36 && j < 42 && half_arrow[41 - j][i] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifBackward == 1 && j >= 30 && j < 36 &&  half_arrow[j - 30][15 - i] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifBackward == 1 && j >= 36 && j < 42 &&  half_arrow[41 - j][15 - i] == 1 && ifShow == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifAttention == 1 && j < 31 && zhu4yi4[i][j] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifBrakeRight == 1 && j >= 41 && sha1che1[i][j - 41] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else if(ifBrakeCenter == 1 && sha1che1Compact[i][j - 21] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-red'></div>";
                } else {
                    tailHTMLLine = tailHTMLLine + "<div class='off-red'></div>";
                }
            } else if(j >= 48 && j < 72) {
                if(ifRight == 1 && ifShow == 1 && i >= 2 && i < 8 && j >= 52 && j < 68  && half_arrow[i - 2][71 - j - 4] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifRight == 1 && ifShow == 1 && i >= 8 && i < 14 && j >= 52 && j < 68  && half_arrow[15 - i - 2][71 - j - 4] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifTurnLeft == 1 && zuo3zhuan3[i][j - 41] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifMoveForward == 1 && j < 63 && qian2[i][j - 48] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifMoveBackward == 1 && j < 63 && hou4[i][j - 48] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifBrakeRight == 1 && sha1che1[i][j - 41] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else if(ifBrakeCenter == 1 && j < 51 && sha1che1Compact[i][j - 21] == 1) {
                    tailHTMLLine = tailHTMLLine + "<div class='on-yellow'></div>";
                } else {
                    tailHTMLLine = tailHTMLLine + "<div class='off-yellow'></div>";
                }
            }
        }
        tailHTML = tailHTML + "<div class='line'>" + tailHTMLLine + "</div>";
    }
    document.getElementById("tailOut").innerHTML = tailHTML;
    time = time + (timeRefresh / 1000);
}

for(var x = 0; x < timeReload * (1000 / timeRefresh); x++) {
    setTimeout(printTail, x * timeRefresh);
    // console.log("Registering: Run printTail() at " + (x * 0.5).toFixed(bitFixed) + "s.");
}

function setTurn(left, right, forward, backward, turnLeft, turnRight, moveForward, moveBackward) {
    if(left == 1) {
        ifLeft = 1;
    } else {
        ifLeft = 0;
    }
    localStorage.ifLeft = ifLeft;

    if(right == 1) {
        ifRight = 1;
    } else {
        ifRight = 0;
    }
    localStorage.ifRight = ifRight;
    
    if(forward == 1) {
        ifForward = 1;
    } else {
        ifForward = 0;
    }
    localStorage.ifForward = ifForward;

    if(backward == 1) {
        ifBackward = 1;
    } else {
        ifBackward = 0;
    }
    localStorage.ifBackward = ifBackward;

    if(turnLeft == 1) {
        ifTurnLeft = 1;
    } else {
        ifTurnLeft = 0;
    }
    localStorage.ifTurnLeft = ifTurnLeft;

    if(turnRight == 1) {
        ifTurnRight = 1;
    } else {
        ifTurnRight = 0;
    }
    localStorage.ifTurnRight = ifTurnRight;

    if(moveForward == 1) {
        ifMoveForward = 1;
    } else {
        ifMoveForward = 0;
    }
    localStorage.ifMoveForward = ifMoveForward;

    if(moveBackward == 1) {
        ifMoveBackward = 1;
    } else {
        ifMoveBackward = 0;
    }
    localStorage.ifMoveBackward = ifMoveBackward;

    // ifShow = 0;
}