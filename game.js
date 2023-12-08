let intervalId;

let fishSpecies = [
  {"Name": "マグロ",
  "Explanation": "レジェンドアングラーや！！",
  "Rarity": "★★★★★"},
  {"Name": "鮭",
  "Explanation": "とにかくおいしい",
  "Rarity": "★★★★☆"},
  {"Name": "イカ",
  "Explanation": "ビギナークラス！！",
  "Rarity": "★★★☆☆"},
  {"Name": "アジ",
  "Explanation": "おいしいけどたくさん釣れる",
  "Rarity": "★★☆☆☆"},
  {"Name": "長靴",
  "Explanation": "食べれないこともない...？",
  "Rarity": "★☆☆☆☆"}
]

function startGame() {
  intervalId = setInterval(showPushText, 3000);
  document.addEventListener("keydown", handleKeyDown);
}

function showPushText() {
  const pushTextElement = document.getElementById("push-text");
  pushTextElement.innerText = "push";
  setTimeout(clearPushText, 1000);
}

function clearPushText() {
  const pushTextElement = document.getElementById("push-text");
  pushTextElement.innerText = "";
}

function handleKeyDown(event) {
  if (event.key === " " && isPushTextVisible()) {
    fishCaughtComment();
  }
}

function fishCaughtComment() {
  const randomFish = getRandomFish();
  alert("釣れた魚: " + randomFish);
  const commentBox = document.createElement("section");
  commentBox.id = "comment-box";
  const fishImg = document.createElement("img");
  fishImg.id = "fish-img";
  const getFish = document.createElement("div");
  getFish.id = "fish-species";
  const fishName = document.createElement("h2");
  fishName.id = "fish-name";
  const rarity = document.createElement("div");
  rarity.id = "rarity";
  const comment = document.createElement("div");
  comment.id = "comment";
  const bodyTag = document.getElementsByTagName("body")[0];
  const commentBoxChild = bodyTag.appendChild(commentBox);
  const fishImgChild = commentBoxChild.appendChild(fishImg);
  const getFishChild = commentBoxChild.appendChild(getFish);
  const fishNameChild = getFishChild.appendChild(fishName);
  const rarityChild = getFishChild.appendChild(rarity);
  const commentChild = getFishChild.appendChild(comment);
  for (let i = 0; i < fishSpecies.length; i++) {
    if(fishSpecies[i].Name === randomFish) {
      fishImg.src = "./" + i + ".jpg";
      fishName.innerText = "釣れた魚：" + fishSpecies[i].Name;
      rarity.innerText = "レア度：" + fishSpecies[i].Rarity;
      comment.innerText = "コメント：" + fishSpecies[i].Explanation;
    }
  }
}

function getRandomFish() {
  const randomIndex = Math.floor(Math.random() * fishSpecies.length);
  return fishSpecies[randomIndex].Name;
}

function isPushTextVisible() {
  const pushTextElement = document.getElementById("push-text");
  return pushTextElement.innerText === "push";
}


startGame();
