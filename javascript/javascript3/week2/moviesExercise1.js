document.getElementById("button1").addEventListener("click", loadBadMovies);
document
  .getElementById("button2")
  .addEventListener("click", loadBadMoviesSinceYear2000);

//load bad movies
function loadBadMovies() {
  fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  )
    .then((resp) => resp.json())
    .then((movies) => {
      let html = "";
      movies.forEach((film) => {
        if (film.rating < 4) {
          html += ` 
            <li>${film.title}</li>  
            `;
        }
      });
      document.getElementById("result").innerHTML = html;
    });
}

function loadBadMoviesSinceYear2000() {
  fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  )
    .then((resp) => resp.json())
    .then((movies) => {
      let html = "";
      movies.forEach((film) => {
        if (film.rating < 4 && film.year >= 2000) {
          html += ` 
            <li>${film.title}</li>  
            `;
        }
      });
      document.getElementById("result").innerHTML = html;
    });
}
