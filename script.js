const categories = {
  klassisk: [
    "Tag 2 slurke!",
    "Den yngste drikker!",
    "Den ælste drikker!",
    "Drik hvis du før har fået under 02!",
    "Drik hvis du ikke er jomfru!",
    "Fællesskål",
    "Hvis du før har knækket dig 2 gange på en aften, så drikker du!",
    "Drik hvis du har sendt en snap i dag!",
    "Den med flest instagram følgere drikker!"
  ],
  sandhed: [
    "Sandhed: Hvem var din sidste crush?",
    "Sandhed: Har du nogensinde løjet for en ven?",
    "Sandhed: Hvem i rummet vil du mindst kysse?",
    "Sandhed: Hvad er din største hemmelighed?"
  ],
  vovet: [
    "Giv en kompliment til personen til højre!",
    "Lav et shot, eller tag 3 slurke!",
    "Giv et kys på kinden til en du vælger!",
    "Spank din venstre sidemand!",
    "Fortæl en pinlig historie, eller drik!"
  ],
 jatak: [
  "1: Hvem er den største svagdrikker?",
  "2: Hvem bliver gift først?",
  "3: Hvem har den bedste røv?",
  "4: Hvem i dette rum er mest din type? (Forklar hvorfor)",
  "5: Hvem er bedst til at sutte pik?",
  "6: Hvem kunne finde på at falde i søvn under sex?",
  "7: Hvem har de flotteste øjne?",
  "8: Hvem bliver mest fuld i aften?",
  "9: Hvem er mest selvsikker?",
  "10: Hvem er sjovest?",
  "11: Hvem har den bedste krop?",
  "12: Hvem scorer flest?",
  "13: Hvem har sidst haft sex?",
  "14: Hvem drikker mest?",
  "15: Hvem kysser bedst? (Kys personen)",
  "16: Hvem har haft sex det mærkeligste sted?",
  "17: Hvem er pænest?",
  "18: Hvem har haft en trekant?",
  "19: Hvem brækker sig altid til fester?",
  "20: Hvem her er det bedste kærestepotentiale?",
  "21: Hvem er mest tilbøjelig til at have en bolleven?",
  "22: Hvem har gjort det mest vanvittige i en brandert?",
  "23: Hvem afviser mest?",
  "24: Hvem tror selv de er sjovest?",
  "25: Hvem stønner højest?",
  "26: Hvem tager længst tid om at gøre sig klar inden en fest?",
  "27: Hvem scorer bedst?",
  "28: Hvem har haft flest orgasmer?",
  "29: Hvem forandrer sig mest når de drikker?",
  "30: Hvem har haft sex med flest?",
  "31: Hvem er mest uskyldig?",
  "32: Hvem er mest optaget af sit eget udseende?",
  "33: Hvem er mest akavet?",
  "34: Hvem kan bedst lide hård sex?",
  "35: Hvem har kysset med flest fra dette lokale? (Nævn)",
  "36: Hvem har det flotteste smil?",
  "37: Hvem bliver pænest når de bliver ældre?",
  "38: Hvem er mest jaloux?",
  "39: Hvem kunne finde på at få den i røven?",
  "40: Hvem er bedst i sengen?",
  "41: Hvem har den største pik?",
  "42: Hvem er bedst til at slikke?",
  "43: Hvem har de vildeste sexfantasier?",
  "44: Hvem har de flotteste ben?",
  "45: Hvem er mest tilbøjelig til at have sexsygdomme?",
  "46: Hvem er mest fløde?",
  "47: Hvem scorer aldrig, men bliver scoret?",
  "48: Hvem får børn først?",
  "49: Hvem dufter bedst?",
  "50: Hvem bruger Snapchat mest?",
  "51: Hvem kunne finde på at have sex under menstruation?",
  "52: Hvem ser mest porno?",
  "53: Hvem er den største kælling?",
  "54: Hvem er mest svisk?",
  "55: Hvem har det bedste scoreblik?",
  "56: Hvem er den værste til at køre bil?",
  "57: Hvem er den største Instagrammer?",
  "58: Hvem giver den bedste lapdance?",
  "59: Hvem har de flotteste bryster?",
  "60: Hvem er mest tilbøjelig til at have en kæreste?",
  "61: Hvem er mest følsom?",
  "62: Hvem kunne man få de flotteste børn med?",
  "63: Hvem er mest pumpet?",
  "64: Hvem har det flotteste smil?",
  "65: Hvem har det sjoveste grin?",
  "66: Hvem har flest humørsvingninger?",
  "67: Hvem er mest dominerende i sengen?",
  "68: Hvem er mest tilbøjelig til at deltage i reality?",
  "69: Hvem er mest liderlig?",
  "70: Hvem kan bedst lide madsex?",
  "71: Hvem er oftest forsinket?",
  "72: Hvem har det sødeste grin?",
  "73: Hvem har brugt mest falsk ID?",
  "74: Hvem tager mest snus?",
  "75: Hvem er mest kærestekedelig?",
  "76: Hvem er mest sporty?",
  "77: Hvem er den største fitness-babe?",
  "78: Hvem har aldrig penge på kontoen?",
  "79: Hvem her er altid alene?",
  "80: Hvem her sender flest nudes?",
  "81: Hvem her bruger flest penge på sin kæreste?",
  "82: Hvem griner mest?",
  "83: Hvem er mest tilbøjelig til at bo på gaden?",
  "84: Hvem er mest ansvarlig?",
  "85: Hvem snorker mest?",
  "86: Hvem er mest tilbøjelig til at lave et sextape?",
  "87: Hvem er mest tilbøjelig til at droppe ud af gymnasiet?",
  "88: Hvem er mest kold?",
  "89: Hvem er mest tilbøjelig til at være utro?",
  "90: Hvem er værst til at bruge beskyttelse?",
  "91: Hvem køber mest tøj?",
  "92: Hvem lyver mest?",
  "93: Hvem har gået længst tid uden sex? (Siden sidst)",
  "94: Hvem lyver mest for deres forældre?",
  "95: Hvem har den største guldske i røven?",
  "96: Hvem har bedst tøjstil?",
  "97: Hvem er den største dramaqueen?",
  "98: Hvem er mest tilbøjelig til at knuse ens hjerte? (Forklar)",
  "99: Hvem kigger sig mest i spejlet?",
  "100: Hvem ville gøre de sygeste ting for penge?",
  "101: Hvem har onaneret det mærkeligste sted?",
     "102: Hvem her skal bestemme, hvem der må vælge en, som skal slå sten saks papir om 5 slurke?"
],

  egen: []
};

// Elementer
const categoryButtons = document.querySelectorAll(".category");
const categorySelection = document.getElementById("category-selection");
const gameSection = document.getElementById("game");
const cardEl = document.getElementById("card");
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");

const customSetup = document.getElementById("custom-setup");
const customInput = document.getElementById("customInput");
const addQuestionBtn = document.getElementById("addQuestion");
const startCustomBtn = document.getElementById("startCustom");
const backToCategoriesBtn = document.getElementById("backToCategories");
const customCount = document.getElementById("customCount");
const clearQuestionsBtn = document.getElementById("clearQuestions");

// Lykkehjulet
const wheelSection = document.getElementById("wheel-section");
const nameInput = document.getElementById("nameInput");
const addNameBtn = document.getElementById("addName");
const nameList = document.getElementById("nameList");
const spinWheelBtn = document.getElementById("spinWheel");
const backFromWheelBtn = document.getElementById("backFromWheel");
const winnerEl = document.getElementById("winner");
const wheelCanvas = document.getElementById("wheelCanvas");
const ctx = wheelCanvas.getContext("2d");
let names = [];
let currentRotation = 0;
let currentCategory = [];
let questionIndex = 0;

// --- Tegn lykkehjulet ---
function drawWheel() {
  const num = names.length;
  const radius = wheelCanvas.width / 2;
  ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);
  if (num === 0) return;

  for (let i = 0; i < num; i++) {
    const angle = (i / num) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, angle, angle + (2 * Math.PI / num));
    ctx.fillStyle = i % 2 === 0 ? "#ffb347" : "#ff7e5f";
    ctx.fill();
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(angle + Math.PI / num);
    ctx.fillStyle = "white";
    ctx.font = "bold 16px Poppins";
    ctx.fillText(names[i], radius / 2 - names[i].length * 3, 5);
    ctx.restore();
  }
}

function updateNameList() {
  nameList.textContent = names.length > 0 ? "Spillere: " + names.join(", ") : "Ingen navne tilføjet endnu.";
  drawWheel();
}

// --- Kategori valg ---
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    if (category === "egen") {
      categorySelection.classList.add("hidden");
      customSetup.classList.remove("hidden");
      updateCustomCount();
      return;
    }
    if (category === "lykkehjul") {
      categorySelection.classList.add("hidden");
      wheelSection.classList.remove("hidden");
      updateNameList();
      return;
    }

    currentCategory = categories[category];
    questionIndex = 0;
    categorySelection.classList.add("hidden");
    gameSection.classList.remove("hidden");
    cardEl.textContent = "Tryk på “Næste” for at starte 🍻";
  });
});

// --- Custom kategori ---
addQuestionBtn.addEventListener("click", () => {
  const question = customInput.value.trim();
  if (question !== "") {
    categories.egen.push(question);
    customInput.value = "";
    updateCustomCount();
  }
});

clearQuestionsBtn.addEventListener("click", () => {
  categories.egen = [];
  updateCustomCount();
});

function updateCustomCount() {
  customCount.textContent = `Antal spørgsmål: ${categories.egen.length}`;
}

startCustomBtn.addEventListener("click", () => {
  if (categories.egen.length === 0) return alert("Tilføj mindst ét spørgsmål før du starter!");
  currentCategory = categories.egen;
  questionIndex = 0;
  customSetup.classList.add("hidden");
  gameSection.classList.remove("hidden");
  cardEl.textContent = "Tryk på “Næste” for at starte 🍻";
});

backBtn.addEventListener("click", () => {
  gameSection.classList.add("hidden");
  categorySelection.classList.remove("hidden");
});

backToCategoriesBtn.addEventListener("click", () => {
  customSetup.classList.add("hidden");
  categorySelection.classList.remove("hidden");
});

// --- Game funktion ---
nextBtn.addEventListener("click", () => {
  if (currentCategory.length === 0) return;
  cardEl.textContent = currentCategory[questionIndex];
  cardEl.style.transform = "scale(1.05)";
  setTimeout(() => cardEl.style.transform = "scale(1)", 200);
  questionIndex = (questionIndex + 1) % currentCategory.length;
});

// --- Lykkehjulet funktioner ---
addNameBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name && !names.includes(name)) {
    names.push(name);
    nameInput.value = "";
    updateNameList();
  }
});

spinWheelBtn.addEventListener("click", () => {
  if (names.length < 2) return alert("Tilføj mindst 2 navne for at spinne!");
  const sliceAngle = 360 / names.length;
  const randomIndex = Math.floor(Math.random() * names.length);
  const spins = Math.floor(Math.random() * 5) + 5;
  const stopAngle = (randomIndex * sliceAngle) + (sliceAngle / 2);
  const rotation = 360 * spins + 90 - stopAngle;
  currentRotation = rotation % 360;
  wheelCanvas.style.transition = "transform 4s ease-out";
  wheelCanvas.style.transform = `rotate(${rotation}deg)`;
  winnerEl.textContent = "";
  setTimeout(() => {
    winnerEl.textContent = `🎉 Vinderen er: ${names[randomIndex]}! 🍻`;
  }, 4000);
});

backFromWheelBtn.addEventListener("click", () => {
  wheelSection.classList.add("hidden");
  categorySelection.classList.remove("hidden");
  winnerEl.textContent = "";
  names = [];
  updateNameList();
});
