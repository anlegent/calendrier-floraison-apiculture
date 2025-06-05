let main = document.querySelector("main");
const form = document.querySelector("form");
const infoDate = document.querySelector("#calendar-date");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = app();
  let article = document.createElement("section");
  main.appendChild(article);
  for (let i = 0; i < data.length; i++) {
    createFlower(data[i].image);
    console.log(infoDate.value);
    console.log(app());
  }
});

async function app() {
  const response = await fetch(
    `http://10.69.0.17:3002/v1/flowers?page=0&pageSize=100&date=${infoDate.value}`,
    { method: "GET" }
  );
  const data = await response.json();
  console.log(data);
}

function createFlower(
  melliferous,
  image,
  name,
  startDate,
  endDate,
  description,
  propolis,
  nectar,
  pollen
) {
  let flowerAside = document.createElement("aside");
  article.appendChild(flowerAside);
  let flowerImg = document.createElement("img");
  flowerImg.src = image;
  flowerAside.appendChild(flowerImg);
  let flowerName = document.createElement("h3");
  flowerName.className = "flower-title";
  flowerName.textContent = name;
  article.appendChild(flowerName);
  let growthInfo = document.createElement("div");
  growthInfo.className = "growth-info";
  article.appendChild(growthInfo);
  let growthTitle = document.createElement("p");
  growthTitle.className = "floraison";
  growthTitle.textContent = "floraison";
  growthInfo.appendChild(growthTitle);
  let growthDate = document.createElement("p");
  growthDate.className = "date";
  growthDate.textContent = startDate + "-" + endDate;
  growthInfo.appendChild(growthDate);
  let desc = document.createElement("p");
  desc.className = "description";
  desc.textContent = description;
  article.appendChild(desc);

  let flowerInfos = document.createElement("div");
  flowerInfos.className = "flower-infos";
  article.appendChild(flowerInfos);

  let infoPropolisDiv = document.createElement("div");
  infoPropolisDiv.id = "info-propolis";
  flowerInfos.appendChild(infoPropolisDiv);

  let infoPropolisTitle = document.createElement("p");
  infoPropolisTitle.className = "info-title";
  infoPropolisTitle.textContent = "Propolis";
  infoPropolisDiv.appendChild(infoPropolisTitle);

  let infoNectarDiv = document.createElement("div");
  infoNectarDiv.id = "info-nectar";
  flowerInfos.appendChild(infoNectarDiv);

  let infoNectarTitle = document.createElement("p");
  infoNectarTitle.className = "info-title";
  infoNectarTitle.textContent = "Nectar";
  infoNectarDiv.appendChild(infoNectarTitle);

  let infoNectarStat = document.createElement("img");
  infoNectarStat.textContent = nectar;
  infoNectarDiv.appendChild(infoNectarStat);

  let infoPollenDiv = document.createElement("div");
  infoPollenDiv.id = "info-pollen";
  flowerInfos.appendChild(infoPollenDiv);

  let infoPollenTitle = document.createElement("p");
  infoPollenTitle.className = "info-title";
  infoPollenTitle.textContent = "Pollen";
  infoPollenDiv.appendChild(infoPollenTitle);

  let infoPollenStat = document.createElement("img");
  infoPollenStat.textContent = pollen;
  infoPollenDiv.appendChild(infoPollenStat);
}
let searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {});
