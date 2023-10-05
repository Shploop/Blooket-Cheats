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
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        if (!location.href.includes("play.blooket.com")) (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"));
        else {
            const cache = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache),
                axios = cache.find((x) => x.exports?.a?.get).exports.a,
                { data: { t } } = await axios.post("https://play.blooket.com/api/playersessions/solo", {
                    gameMode: "Factory",
                    questionSetId: ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(Math.random() * 24)]
                });
            await axios.post("https://play.blooket.com/api/playersessions/landings", { t });
            await axios.get("https://play.blooket.com/api/playersessions/questions", { params: { t } });
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
        }
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/global/getDailyRewards.png?" + Date.now();
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
        if (parseInt(time) <= 1696542129449 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => (img.src = null, cheat());
})();