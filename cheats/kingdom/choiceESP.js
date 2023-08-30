/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) 05Konz 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/05Konz/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(() => {
    const cheat = (async () => {
        let stats = ['materials', 'people', 'happiness', 'gold'];
        let elements = Object.fromEntries([...document.querySelectorAll('[class^=styles__statContainer]')].map((container, i) => [stats[i], container]));
        let { guest: data, phase } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state;
        if (phase == "choice") {
            Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
            Object.entries(data.yes || {}).forEach(x => {
                if (x[0] == 'msg' || !stats.includes(x[0])) return;
                let element = document.createElement('div');
                element.className = 'choiceESP';
                element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                element.innerText = String(x[1])
                elements[x[0]].appendChild(element);
            })
            Object.entries(data.no || {}).forEach(x => {
                if (x[0] == 'msg' || !stats.includes(x[0])) return;
                let element = document.createElement('div');
                element.className = 'choiceESP';
                element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                element.innerText = String(x[1])
                elements[x[0]].appendChild(element);
            })
        }
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/kingdom/choiceESP.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        const [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);
        if (parseInt(time) <= 1693429947507 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => (img.src = null, cheat());
})();