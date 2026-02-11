const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const img    = document.getElementById("mainImg");
const text   = document.getElementById("text");

let lastChoice = null;
let noClicks   = 0;

const imgYes = "./szczurek.jpg";
const imgNo  = "./zmianaZdania.jpg";
const imgNo2 = "./smuteg.jpg";
const sadEmoji = "🥺";

yesBtn.addEventListener("click", () => {
    lastChoice = "tak";
    noClicks = 0;

    img.src = imgYes;
    img.style.display = "block";
    img.style.width = "320px";

    text.textContent = "Gratulacje użytkowniku! Dokonałeś rewelacyjnego wyboru 🤝";

    yesBtn.style.transform = "scale(1)";
    noBtn.style.transform  = "scale(1)";
});

noBtn.addEventListener("click", () => {
    text.textContent = "Nie daj się prosić nooo ";
    if (lastChoice === "nie") {
        img.src = imgNo2;
        noClicks++;

        const scaleImg = 1 + noClicks * 0.2;
        img.style.width = (320 * scaleImg) + "px";

        const scaleNo  = Math.max(0.7 - noClicks * 0.05, 0.3);
        const scaleYes = 1.3 + noClicks * 0.1;

        noBtn.style.transform = `scale(${scaleNo})`;
        yesBtn.style.transform = `scale(${scaleYes})`;
        text.textContent += sadEmoji.repeat(noClicks);

    } else if (lastChoice === "tak" || lastChoice === null) {
        img.src = imgNo;
        img.style.display = "block";
        img.style.width = "320px";

        noBtn.style.transform = "scale(1)";
        yesBtn.style.transform = "scale(1)";

        text.textContent = "Bardzo śmieszne, to teraz zaznacz prawidłową odpowiedź 😾";
        noClicks = 0;

        lastChoice = "nie";
    }});
