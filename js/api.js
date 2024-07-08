const URL = "https://free-to-play-games-database.p.rapidapi.com/api/games";

const fetchGames = async (category = "mmorpg") => {
  const query = new URLSearchParams({
    category,
  });
  const headers = {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "7889c0992amsh2d36e458183c68ap1c195fjsnc6c298fd99d6",
  };

  const url = URL + "?" + query.toString();

  try {
    const res = await fetch(url, {
      headers,
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.json);
  }
};