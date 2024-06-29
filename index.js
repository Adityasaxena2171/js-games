
let img = document.querySelector("#diceimg");
let btn = document.querySelector('#dice');
let res = document.querySelector("#reset1");
btn.addEventListener("click", () => {
    let n = Math.floor(Math.random() * 6) + 1;
    if (n === 1) {
        img.src = "1.jpg"
    }
    else if (n === 2) {
        img.src = "2.jpg"
    }
    else if (n === 3) {
        img.src = "3.jpg"
    }
    else if (n === 4) {
        img.src = "4.jpg"
    }
    else if (n === 5) {
        img.src = "5.jpg"
    }
    else if (n === 6) {
        img.src = "6.jpg"
    }
    else {
        img.src = "main image.webp"
    }
    document.querySelector('#result').innerText = "result after roll dice = " + n;

})
res.addEventListener("click", () => {
    img.src = "main image.webp"
    document.querySelector('#result').innerText = "Roll Dice = >";
})
// otp generator code
let btn2 = document.querySelector("#otp");
let res2 = document.querySelector("#reset2")
btn2.addEventListener("click", () => {
    let n = Math.floor(Math.random() * 100000) + 99999;
    document.querySelector("#result2").innerHTML = n;
})
res2.addEventListener("click", () => {
    document.querySelector("#result2").innerHTML = "OTP"

})
// atm pin logic

let btn3 = document.querySelector("#atm");
let res3 = document.querySelector("#reset3")

btn3.addEventListener("click", () => {
    let n = Math.floor(Math.random() * 1000) + 999;
    document.querySelector("#result3").innerHTML = n;

})
res3.addEventListener("click", () => {
    document.querySelector("#result3").innerHTML = "ATM PIN"

})





let password = document.querySelector("#password");
let res4 = document.querySelector("#reset4");
password.addEventListener("click", () => {
    let a = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    let b = "abcdefghijklmnopqrstuvwxyz";
    let c = "1234567890"
    let d = "~!@#$%^&*_+?:><*/";
    let str = ""
    for (let i = 1; i <= 4; i++) {
        let z = Math.floor(Math.random() * (a.length))
        str = str + a[z];
        let x = Math.floor(Math.random() * (b.length));
        str = str + b[x];
        let k = Math.floor(Math.random() * (c.length))
        str = str + c[k];
        let p = Math.floor(Math.random() * (d.length))
        str = str + d[p]
    }
    document.querySelector("#result4").innerHTML = str;
})
res4.addEventListener("click", () => {
    document.querySelector("#result4").innerHTML = "PASSWORD"

})


function game(user) {
    let comp = Math.floor(Math.random() * 3) + 1;
    if (user == comp) {
        document.querySelector("#result5").innerHTML = "match tie"
    }
    if ((user == 1 && comp == 3) || (user === 2 && comp == 1) || (user === 3 && comp == 2)) {
        document.querySelector("#result5").innerHTML = "user winner"
    }
    else {
        document.querySelector("#result5").innerHTML = "computer winner"

    }
}
let res5 = document.querySelector("#reset5");
res5.addEventListener("click", () => {
    document.querySelector("#result5").innerHTML = "WINNER"

})
let url = "https://type.fit/api/quotes";
async function getapi() {
    let n = Math.floor(Math.random() * 15);
    let res = await axios.get(url);
    let quotes = res.data[n].text
    document.querySelector("#result6").innerText = quotes;
}
let btn6 = document.querySelector("#qu");
btn6.addEventListener("click", () => {
    getapi();
})

let res6 = document.querySelector("#reset6");
res6.addEventListener("click", () => {
    document.querySelector("#result6").innerHTML = "QUOTES"

})


