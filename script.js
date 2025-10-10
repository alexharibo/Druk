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
    "1: Den største svagdrikker!",
    "2: Den der bliver gift først!",
    "3: Den der har den bedste røv!",
    "4: Den der er mest min type!",
    "5: Den der er bedst til at sutte pik!",
    "6: Den der kunne falde i søvn under sex!",
    "7: Den der har de flotteste øjne!",
    "8: Den der bliver mest fuld i aften!",
    "9: Den mest selvsikre!",
    "10: Den sjoveste!",
    // ... resten af listen ...
    "101: Den der har onaneret det mærkeligste sted!"
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
