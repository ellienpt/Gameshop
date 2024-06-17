const input = document.getElementById("search-input");
const searchIcon = document.getElementById("searchIcon");
let currentGenre = "";

const getGenreList = async () => {
  try {
    const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/genres`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log("error", error.message);
  }
};

const renderGenreList = async () => {
  try {
    const data = await getGenreList();
    const genreList = document.querySelector(".categoryItem");
    genreList.innerHTML = "";
    data.forEach((genre) => {
      const x = document.createElement("li");
      x.innerHTML = `${genre.name}`;
      x.onclick = () => {
        currentGenre = genre.name;
        renderGamelist();
      };
      genreList.appendChild(x);
    });
  } catch (error) {
    console.log("error", error.message);
  }
};
renderGenreList();

const getGamelist = async () => {
  // const getGamelist = async () (searchQuery = "") => {
  try {
    let url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games?`;
    if (currentGenre) url += `genres=${currentGenre}`; //&;
    //if (searchQuery) url += `search=${searchQuery}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log("error", error.message);
  }
};

const renderGamelist = async () => {
  try {
    const Listofgame = await getGamelist();
    const Gamelist = document.querySelector(".gamecards");
    Gamelist.innerHTML = "";

    Listofgame.forEach((game) => {
      const div = document.createElement("div");
      div.innerHTML = `<div class = "Gametitle">
                      <div>${game.name}</div>
                      <img src="${game.header_image}"/>
                     <p>${game.price}</p>
                      </div>`;
      div.onclick = async () => await renderGameinfo(game.appid);
      Gamelist.appendChild(div);
    });
  } catch (error) {
    console.log("error", error.message);
  }
};
renderGamelist();

const getGameinfo = async (appId) => {
  try {
    const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/single-game/${appId}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log("error", error.message);
  }
};
const res = document.getElementById("Gametitle");

const renderGameinfo = async (appId) => {
  try {
    const data = await getGameinfo(appId);
    const gameinfo = document.querySelector(".gamecards");
    gameinfo.innerHTML = "";
    gameinfo.innerHTML = `<div class = "ten">
    <img src=${data.header_image} </img>
    <h2> ${data.name}</h2></div>`;
  } catch (error) {
    console.log("error", error.message);
  }
};

Gamedetail.forEach((game) => {
  const div = document.createElement("div");
  div.innerHTML = `<div class = "Gametitle">
<div>${game.name} </div>
<img src="${game.header_image}"/>
 <p>${data.description}</p>
 <p><${game.categories}</p></div>
 </div>
</div>`;
  div.onclick = async () => await renderGamedetail(game.appid);
  Gamedetail.appendChild(div);
});

// tìm kiếm

const getGamedetaildisplay = async (searchInput) => {
  try {
    let url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games`;
    if (searchInput) url += `?q= ${searchInput}`; //&;
    //if (searchQuery) url += `search=${searchQuery}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log("error", error.message);
  }
};

const renderGamedetaildisplay = async (searchInput) => {
  try {
    const Listofgame = await getGamelist();
    const Gamelist = document.querySelector(".gamecards");
    Gamelist.innerHTML = "";

    Listofgame.forEach((game) => {
      const div = document.createElement("div");
      div.innerHTML = `<div class = "Gametitle">
                      <div>${game.name}</div>
                      <img src="${game.header_image}"/>
                     <p>${game.price}</p>
                      </div>`;
      div.onclick = async () => await renderGameinfo(game.appid);
      Gamelist.appendChild(div);
    });
  } catch (error) {
    console.log("error", error.message);
  }
};
renderGamedetaildisplay();

searchIcon.onclick = () => {
  const value = searchInput.value;
  console.log("onclick");
};
