function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dd611dd22cmshc32ca56b41a5cd0p1a309ajsn90be0fd9f17e",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  fetch(
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=sky",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const list = data.d;

      list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"> 
        <h2>${name}</h2>
        </li>`;
        document.querySelector(".movies").innerHTML += movie;
      });
    })
    .catch((err) => console.error(err));
}

export default App;
