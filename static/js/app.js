const Header = document.querySelector(".header__wrapper");

const Containers = document.querySelectorAll(".container");
const Container1 = Containers[0]
const Container2 = Containers[1]
const Container3 = document.querySelector(".container-ext");

const Blur = document.querySelector(".blur");
const FoutrhContainerText = document.querySelector(".container_4_text");

const Animate = document.querySelectorAll(".c_1_animate");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        Header.style.cssText = `margin-top: -140px; transition: 0.8s;`;
    } else {
        Header.style.cssText = `margin-top: 0px; transition: 0.8s;`;
    }
    if (window.scrollY > 200) {
        for (let elem of Animate) {
            elem.style.cssText = "margin-top: 0px; transition: 0.8s";
        }
    } else {
        for (let elem of Animate) {
            elem.style.cssText = "margin-top: 450px; transition: 0.8s";
        }
    }
    if (1400 < window.scrollY && window.scrollY <= 2500) {
        Container1.style.cssText = "width: 90%; transition: 1s";
    } else {
        Container1.style.cssText = "width: 140%; transition: 1s";
    }
    if (1800 < window.scrollY && window.scrollY <= 2900) {
        Container2.style.cssText = "width: 90%; transition: 1s";
    } else {
        Container2.style.cssText = "width: 140%; transition: 1s";
    }
    if (2200 < window.scrollY && window.scrollY <= 3300) {
        Container3.style.cssText = "width: 90%; transition: 1s";
    } else {
        Container3.style.cssText = "width: 140%; transition: 1s";
    }
    if (800 <= window.scrollY && window.scrollY <= 1700) {
        Blur.style.cssText = "margin-right: -200px; transition: 1s";
        FoutrhContainerText.style.cssText = "left: 80px; transition: 1s";
    } else {
        Blur.style.cssText = "margin-right: -600px; transition: 1s";
        FoutrhContainerText.style.cssText = "left: -100px; transition: 1s";
    }
})

const tryPyBtn = document.querySelector("#try_py");
const chat = document.querySelector(".chat_py");
const strings = document.querySelectorAll(".chat_py .chat_p");

const tryJsBtn = document.querySelector("#try_js");
const chatJs = document.querySelector(".chat_js");
const stringsJs = document.querySelectorAll(".chat_js .chat_p2");

const tryAssBtn = document.querySelector("#try_ass");
const chatAss = document.querySelector(".chat_ass");
const stringsAss = document.querySelectorAll(".chat_ass .chat_p3");

const text = [
    [
        "<span class\"py_1\">d", "<span class\"py_1\">e", "<span class\"py_1\">f" , " ",
        "<span class=\"py_2\">m", "<span class=\"py_2\">a", "<span class=\"py_2\">i", "<span class=\"py_2\">n",
        "<span class=\"py_3\">(", "t", "e", "x", "t", ":", " ", "<span class=\"py_4\">s", "<span class=\"py_4\">t",
        "<span class=\"py_4\">r", "<span class=\"py_3\">)", ":",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_4\">p",
        "<span class=\"py_4\">r", "<span class=\"py_4\">i", "<span class=\"py_4\">n", "<span class=\"py_4\">t",
        "<span class=\"py_3\">(", "<span class=\"py_7\">\"", "<span class=\"py_1\">%", "<span class=\"py_1\">s",
        "<span class=\"py_7\">\"", "&nbsp;", "%", "&nbsp;", "t", "e", "x", "t", "<span class=\"py_3\">)",
    ],
    [
        "",
    ],
    [
        "T", "E", "X", "T", ":", "&nbsp;", "<span class=\"py_4\">s", "<span class=\"py_4\">t", "<span class=\"py_4\">r",
        "&nbsp;", "=", "&nbsp;", "<span class=\"py_7\">\"", "<span class=\"py_7\">H", "<span class=\"py_7\">e",
        "<span class=\"py_7\">l", "<span class=\"py_7\">l", "<span class=\"py_7\">o", "<span class=\"py_7\">,", "&nbsp;",
        "<span class=\"py_7\">w", "<span class=\"py_7\">o", "<span class=\"py_7\">r", "<span class=\"py_7\">l",
        "<span class=\"py_7\">d", "<span class=\"py_7\">!", "<span class=\"py_7\">\"",

    ],
    [
        "",
    ],
    [
        "<span class=\"py_1\">i", "<span class=\"py_1\">f", "&nbsp;", "<span class=\"py_5\">_",
        "<span class=\"py_5\">_", "<span class=\"py_5\">n", "<span class=\"py_5\">a", "<span class=\"py_5\">m",
        "<span class=\"py_5\">e", "<span class=\"py_5\">_", "<span class=\"py_5\">_", "&nbsp;", "=", "=",
        "&nbsp;", "<span class=\"py_7\">\"", "<span class=\"py_7\">_", "<span class=\"py_7\">_", "<span class=\"py_7\">m",
        "<span class=\"py_7\">a", "<span class=\"py_7\">i", "<span class=\"py_7\">n", "<span class=\"py_7\">_",
        "<span class=\"py_7\">_", "<span class=\"py_7\">\"", "<span class=\"py_7\">:",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "m", "a", "i", "n", "<span class=\"py_3\">(",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_6\">t", "<span class=\"py_6\">e",
        "<span class=\"py_6\">x", "<span class=\"py_6\">t", "=", "T", "E", "X", "T",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_3\">)",
    ],
    [
        "",
    ],
    [
        "<span class=\"py_8\">#", "&nbsp;", "<span class=\"py_8\">H", "<span class=\"py_8\">e", "<span class=\"py_8\">l",
        "<span class=\"py_8\">l", "<span class=\"py_8\">o", "<span class=\"py_8\">,", "&nbsp;", "<span class=\"py_8\">w",
        "<span class=\"py_8\">o", "<span class=\"py_8\">r", "<span class=\"py_8\">l", "<span class=\"py_8\">d", "&nbsp;",
        "<span class=\"py_8\">i", "<span class=\"py_8\">n", "&nbsp;" ,"<span class=\"py_8\">P", "<span class=\"py_8\">y", 
        "<span class=\"py_8\">t", "<span class=\"py_8\">h", "<span class=\"py_8\">o", "<span class=\"py_8\">n",
        "<span class=\"py_8\">.",
    ],
]
const text2 = [
    [
        "<span class=\"py_1\">f", "<span class=\"py_1\">u", "<span class=\"py_1\">n", "<span class=\"py_1\">c",
        "<span class=\"py_1\">t", "<span class=\"py_1\">i", "<span class=\"py_1\">o", "<span class=\"py_1\">n",
        "&nbsp;", "<span class=\"py_3\">m", "<span class=\"py_3\">a", "<span class=\"py_3\">i", "<span class=\"py_3\">n",
        "<span class=\"py_3\">(", "t", "e", "x", "t", "<span class=\"py_3\">)", "&nbsp;", "<span class=\"py_3\">{",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_3\">c", "<span class=\"py_3\">o", "<span class=\"py_3\">n",
        "<span class=\"py_3\">s", "<span class=\"py_3\">o", "<span class=\"py_3\">l", "<span class=\"py_3\">e",
        "<span class=\"py_3\">.", "<span class=\"py_3\">l", "<span class=\"py_3\">o", "<span class=\"py_3\">g",
        "<span class=\"py_5\">(", "t", "e", "x", "t", "<span class=\"py_5\">)", "<span class=\"py_1\">;"
    ],
    [
        "<span class=\"py_3\">}", "<span class=\"py_1\">;",
    ],
    [
        "",
    ],
    [
        "<span class=\"py_1\">c", "<span class=\"py_1\">o", "<span class=\"py_1\">n", "<span class=\"py_1\">s",
        "<span class=\"py_1\">t", "&nbsp;", "t", "e", "x", "t", "&nbsp;", "=", "&nbsp;", "<span class=\"py_7\">\"",
        "<span class=\"py_7\">H", "<span class=\"py_7\">e", "<span class=\"py_7\">l", "<span class=\"py_7\">l",
        "<span class=\"py_7\">o", "<span class=\"py_7\">,", "&nbsp;", "<span class=\"py_7\">w", "<span class=\"py_7\">o",
        "<span class=\"py_7\">r", "<span class=\"py_7\">l", "<span class=\"py_7\">d", "<span class=\"py_7\">!",
        "<span class=\"py_7\">\"", "<span class=\"py_1\">;",
        
    ],
    [
        "",
    ],
    [
        "m", "a", "i", "n", "<span class=\"py_5\">(", "t", "e", "x", "t", "=", "t", "e", "x", "t", "<span class=\"py_5\">)",
        "<span class=\"py_1\">;",
    ],
    [
        "",
    ],
    [
        "<span class=\"py_8\">/", "<span class=\"py_8\">/", "&nbsp;", "<span class=\"py_8\">H", "<span class=\"py_8\">e",
        "<span class=\"py_8\">l", "<span class=\"py_8\">l", "<span class=\"py_8\">o", "<span class=\"py_8\">,", "&nbsp;",
        "<span class=\"py_8\">w", "<span class=\"py_8\">o", "<span class=\"py_8\">r", "<span class=\"py_8\">l",
        "<span class=\"py_8\">d", "&nbsp;", "<span class=\"py_8\">i", "<span class=\"py_8\">n", "&nbsp;" ,"<span class=\"py_8\">J",
        "<span class=\"py_8\">a", "<span class=\"py_8\">v", "<span class=\"py_8\">a", "<span class=\"py_8\">s", "<span class=\"py_8\">c",
        "<span class=\"py_8\">r", "<span class=\"py_8\">i", "<span class=\"py_8\">p", "<span class=\"py_8\">t", "<span class=\"py_8\">.",
    ],
]
const text3 = [
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "g", "l", "o", "b", "a", "l", "&nbsp;", "_", "m", "a", "i", "n",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "e", "x", "t", "e", "r", "n", "&nbsp;&nbsp;", "_", "G", "e", "t", "S", "t", "d", "h", "a", "n",
        "d", "l", "e", "@", "<span class=\"py_9\">4",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "e", "x", "t", "e", "r", "n", "&nbsp;", "&nbsp;", "_", "W", "r", "i", "t", "e", "F", "i", "l", "e",
        "@", "<span class=\"py_9\">2", "<span class=\"py_9\">0",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "e", "x", "t", "e", "r", "n", "&nbsp;", "&nbsp;", "_", "E", "x", "i", "t", "P", "r", "o", "c", "e",
        "s", "s", "@", "<span class=\"py_9\">4",
    ],
    [
        "",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "s", "e", "c", "t", "i", "o", "n", "&nbsp;", ".", "t", "e", "x", "t",
    ],
    [
        "_", "m", "a", "i", "n", ":",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_8\">;", "&nbsp;", "<span class=\"py_8\">D", "<span class=\"py_8\">W", "<span class=\"py_8\">O",
        "<span class=\"py_8\">R", "<span class=\"py_8\">D", "&nbsp;", "&nbsp;", "<span class=\"py_8\">b", "<span class=\"py_8\">y",
        "<span class=\"py_8\">t", "<span class=\"py_8\">e", "<span class=\"py_8\">s", "&nbsp;&nbsp;&nbsp;&nbsp;",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "m", "o", "v", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_1\">e", "<span class=\"py_1\">b",
        "<span class=\"py_1\">p", ",", "&nbsp;", "<span class=\"py_1\">e", "<span class=\"py_1\">s", "<span class=\"py_1\">p",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "s", "u", "b", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_1\">e", "<span class=\"py_1\">s",
        "<span class=\"py_1\">p", ",", "&nbsp;", "<span class=\"py_9\">4",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_8\">h", "<span class=\"py_8\">S", "<span class=\"py_8\">t",
        "<span class=\"py_8\">d", "<span class=\"py_8\">O", "<span class=\"py_8\">u", "<span class=\"py_8\">t", "&nbsp;",
        "<span class=\"py_8\">=", "&nbsp;", "<span class=\"py_8\">G", "<span class=\"py_8\">e", "<span class=\"py_8\">t",
        "<span class=\"py_8\">s", "<span class=\"py_8\">t", "<span class=\"py_8\">d", "<span class=\"py_8\">H", "<span class=\"py_8\">a",
        "<span class=\"py_8\">n", "<span class=\"py_8\">d", "<span class=\"py_8\">l", "<span class=\"py_8\">e", "<span class=\"py_8\">(",
        "&nbsp;", "<span class=\"py_8\">S","<span class=\"py_8\">T","<span class=\"py_8\">D","<span class=\"py_8\">_","<span class=\"py_8\">O",
        "<span class=\"py_8\">U","<span class=\"py_8\">T","<span class=\"py_8\">P","<span class=\"py_8\">U","<span class=\"py_8\">T",
        "<span class=\"py_8\">_","<span class=\"py_8\">H","<span class=\"py_8\">A","<span class=\"py_8\">N","<span class=\"py_8\">D",
        "<span class=\"py_8\">L","<span class=\"py_8\">E", "<span class=\"py_8\">)",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "p", "u" , "s", "h", "&nbsp;&nbsp;&nbsp;&nbsp", "-", "<span class=\"py_9\">1", "<span class=\"py_9\">1",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "c", "a", "l", "l", "&nbsp;&nbsp;&nbsp;&nbsp;", "_", "G", "e", "t", "S", "t", "d", "h", "a", "n",
        "d", "l", "e", "@", "<span class=\"py_9\">4",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "m", "o", "v", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_1\">e", "<span class=\"py_1\">b",
        "<span class=\"py_1\">x", ",", "&nbsp;", "<span class=\"py_1\">e", "<span class=\"py_1\">a", "<span class=\"py_1\">x",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_8\">;", "&nbsp;", "<span class=\"py_8\">W", "<span class=\"py_8\">r",
        "<span class=\"py_8\">i", "<span class=\"py_8\">t", "<span class=\"py_8\">e", "<span class=\"py_8\">F", "<span class=\"py_8\">i",
        "<span class=\"py_8\">l", "<span class=\"py_8\">e", "<span class=\"py_8\">(", "&nbsp;", "<span class=\"py_8\">h",
        "<span class=\"py_8\">s", "<span class=\"py_8\">t", "<span class=\"py_8\">d", "<span class=\"py_8\">O", "<span class=\"py_8\">u",
        "<span class=\"py_8\">t", "<span class=\"py_8\">,", "&nbsp;", "<span class=\"py_8\">m", "<span class=\"py_8\">e",
        "<span class=\"py_8\">s", "<span class=\"py_8\">s", "<span class=\"py_8\">a", "<span class=\"py_8\">g", "<span class=\"py_8\">e",
        "<span class=\"py_8\">,", "&nbsp;", "<span class=\"py_8\">l", "<span class=\"py_8\">e", "<span class=\"py_8\">n",
        "<span class=\"py_8\">g", "<span class=\"py_8\">t", "<span class=\"py_8\">h", "<span class=\"py_8\">(", "<span class=\"py_8\">m",
        "<span class=\"py_8\">e", "<span class=\"py_8\">s", "<span class=\"py_8\">s", "<span class=\"py_8\">a", "<span class=\"py_8\">g",
        "<span class=\"py_8\">e", "<span class=\"py_8\">.", "<span class=\"py_8\">.", "<span class=\"py_8\">.",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "p", "u" , "s", "h", "&nbsp;&nbsp;&nbsp;&nbsp", "<span class=\"py_9\">0",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "l", "e" , "a", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp", "<span class=\"py_1\">e",
        "<span class=\"py_1\">a", "<span class=\"py_1\">x", ",", "&nbsp;", "<span class=\"py_2\">[", "<span class=\"py_1\">e",
        "<span class=\"py_1\">b", "<span class=\"py_1\">p", "-", "<span class=\"py_9\">4", "<span class=\"py_2\">]",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "p", "u" , "s", "h", "&nbsp;&nbsp;&nbsp;&nbsp", "<span class=\"py_1\">e",
        "<span class=\"py_1\">a", "<span class=\"py_1\">x",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "p", "u" , "s", "h", "&nbsp;&nbsp;&nbsp;&nbsp", "<span class=\"py_8\">(",
        "m", "e", "s", "s", "a", "g", "e", "_", "e", "n", "d", "&nbsp;", "-", "&nbsp;", "m", "e",
        "s", "s", "a", "g", "e", "<span class=\"py_8\">)",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "p", "u" , "s", "h", "&nbsp;&nbsp;&nbsp;&nbsp", "m", "e", "s", "s", "a", "g", "e"
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "p", "u" , "s", "h", "&nbsp;&nbsp;&nbsp;&nbsp", "<span class=\"py_1\">e",
        "<span class=\"py_1\">b", "<span class=\"py_1\">x",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "c", "a", "l", "l", "&nbsp;&nbsp;&nbsp;&nbsp;", "_", "W", "r", "i", "t", "e", "F",
        "i", "l", "e", "@", "<span class=\"py_9\">2", "<span class=\"py_9\">0",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_8\">;", "&nbsp;", "<span class=\"py_8\">E", "<span class=\"py_8\">x",
        "<span class=\"py_8\">i", "<span class=\"py_8\">t", "<span class=\"py_8\">P", "<span class=\"py_8\">r",
        "<span class=\"py_8\">o", "<span class=\"py_8\">c", "<span class=\"py_8\">e", "<span class=\"py_8\">s",
        "<span class=\"py_8\">s", "<span class=\"py_8\">(", "<span class=\"py_8\">0", "<span class=\"py_8\">)"
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "p", "u", "s", "h", "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_9\">0"
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "c", "a", "l", "l", "&nbsp;&nbsp;&nbsp;&nbsp;", "_", "E", "x", "i", "t", "P", "r", "o", "c", "e",
        "s", "s", "@", "<span class=\"py_9\">4",
    ],
    [
        "",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_8\">;", "&nbsp;", "<span class=\"py_8\">n", "<span class=\"py_8\">e",
        "<span class=\"py_8\">v", "<span class=\"py_8\">e", "<span class=\"py_8\">r", "&nbsp;", "<span class=\"py_8\">h",
        "<span class=\"py_8\">e", "<span class=\"py_8\">r", "<span class=\"py_8\">e",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "h", "l", "t",
    ],
    [
        "m", "e", "s", "s", "a", "g", "e", ":",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "d", "b", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "'", "H", "e", "l", "l", "o", ",",
        "w", "o", "r", "l", "d", "'", ",", "&nbsp;", "<span class=\"py_9\">1", "<span class=\"py_9\">0",
    ],
    [
        "m", "e", "s", "s", "a", "g", "e", "_", "e", "n", "d", ":",
    ],
    [
        "",
    ],
    [
        "&nbsp;&nbsp;&nbsp;&nbsp;", "<span class=\"py_8\">;", "&nbsp;", "<span class=\"py_8\">H", "<span class=\"py_8\">e",
        "<span class=\"py_8\">l", "<span class=\"py_8\">l", "<span class=\"py_8\">o", "<span class=\"py_8\">,", "&nbsp;",
        "<span class=\"py_8\">w", "<span class=\"py_8\">o", "<span class=\"py_8\">r", "<span class=\"py_8\">l",
        "<span class=\"py_8\">d", "&nbsp;", "<span class=\"py_8\">i", "<span class=\"py_8\">n", "&nbsp;", "<span class=\"py_8\">A",
        "<span class=\"py_8\">s", "<span class=\"py_8\">s", "<span class=\"py_8\">e", "<span class=\"py_8\">m", "<span class=\"py_8\">b",
        "<span class=\"py_8\">l", "<span class=\"py_8\">e", "<span class=\"py_8\">r",
    ]
]

let tryPyBtnFunc = (f) => {
    tryPyBtn.removeEventListener("click", tryPyBtnFunc)
    for (let i = 10; i >= 0; i--) {
        let elem = strings[i];
        elem.innerHTML = "";
    }
    addLetterPy(0, 0);
}

let tryJsBtnFunc = (f) => {
    tryJsBtn.removeEventListener("click", tryJsBtnFunc)
    for (let i = 8; i >= 0; i--) {
        let elem = stringsJs[i];
        elem.innerHTML = "";
    }
    addLetterJs(0, 0);
}

let tryAssBtnFunc = (f) => {
    tryAssBtn.removeEventListener("click", tryAssBtnFunc)
    for (let i = 32; i >= 0; i--) {
        let elem = stringsAss[i];
        elem.innerHTML = "";
    }
    addLetterAss(0, 0);
}

tryPyBtn.addEventListener("click", tryPyBtnFunc);
tryJsBtn.addEventListener("click", tryJsBtnFunc);
tryAssBtn.addEventListener("click", tryAssBtnFunc);

function addLetterPy(i, j) {
    setTimeout( () => {
        strings[i].innerHTML += text[i][j];
        if (j < text[i].length-1) {
            j++;
            addLetterPy(i, j);
        } else if (i < text.length-1) {
            i++;
            j = 0;
            addLetterPy(i, j);
        } else {
            tryPyBtn.addEventListener("click", tryPyBtnFunc);
        }
        }, 50)
}

function addLetterJs(i, j) {
    setTimeout( () => {
        stringsJs[i].innerHTML += text2[i][j];
        if (j < text2[i].length-1) {
            j++;
            addLetterJs(i, j);
        } else if (i < text2.length-1) {
            i++;
            j = 0;
            addLetterJs(i, j);
        } else {
            tryJsBtn.addEventListener("click", tryJsBtnFunc);
        }
        }, 50)
}

function addLetterAss(i, j) {
    setTimeout( () => {
        stringsAss[i].innerHTML += text3[i][j];
        if (j < text3[i].length-1) {
            j++;
            addLetterAss(i, j);
        } else if (i < text3.length-1) {
            i++;
            j = 0;
            addLetterAss(i, j);
        } else {
            tryAssBtn.addEventListener("click", tryAssBtnFunc);
        }
        }, 10)
}

const jokeP = document.querySelectorAll(".container_3 p");
const loadingBtn = document.querySelector(".loading_btn");

loadingBtn.addEventListener("click", (f) => {
    f.preventDefault();
})
loadingBtn.addEventListener("mousedown", () => {
    for (elem of jokeP) {
        elem.style.cssText = "display: block";
    }
})
loadingBtn.addEventListener("mouseup", () => {
    for (elem of jokeP) {
        elem.style.cssText = "display: none";
    }
})
