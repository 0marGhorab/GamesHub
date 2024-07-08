const description = document.getElementById("description");
const descPage = document.getElementById("detailed");

const ID = window.location.search.split("=")[1];

const fetchDesc = async () => {
  const descURL =
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + ID;

  const headers = {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "7889c0992amsh2d36e458183c68ap1c195fjsnc6c298fd99d6",
  };

  try {
    const req = await fetch(descURL, { headers });
    const descData = await req.json();
    return descData;
  } catch (err) {
    console.log(err.json);
  }
};

const displayData = async () => {
  const descData = await fetchDesc();
  console.log(descData);
  let descartona = `<div class="col-md-4">
            <h2>Game Details</h2>
            <div class="image">
              <img src="${descData.thumbnail}" alt="${descData.title}" class="w-100" />
            </div>
          </div>
          <div class="col-md-8">
            <h2>
              Title :
              ${descData.title}
            </h2>
            <h5>
              Category :
              <div class="badge bg-primary footerbadge">${descData.genre}</div>
            </h5>
            <h5>
              Platform :
              <div class="badge bg-primary footerbadge">${descData.platform}</div>
            </h5>
            <h5>
              Status :
              <div class="badge bg-primary footerbadge">${descData.status}</div>
            </h5>
            <p>
              ${descData.description}
            </p>
            <a class="btn btn-outline-warning" href="${descData.game_url}">Show Game</a>
          </div>`;

  detailedSection.innerHTML = descartona;
};


displayData();