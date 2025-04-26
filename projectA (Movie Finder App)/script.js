const yearSelect = document.getElementById("year");

function showYears(){
    let year = new Date().getFullYear();
    const option = document.createElement("option");
    option.innerHTML = "---";
    yearSelect.appendChild(option);

    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.innerHTML = year - i;
        yearSelect.appendChild(option);
    }
}

showYears();





const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');
const searchYear = document.getElementById('year');


searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  fetchMovies(query);
});


async function fetchMovies(query) {
  const apiKey = "b742af30";
  const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
  const movies = await response.json();
  console.log(movies);
  if (resultsContainer.innerHTML !== "") {
    resultsContainer.innerHTML = "";
  }

  let year = searchYear.options[searchYear.selectedIndex].text;
  let xValues = [];
  let yValues = [];

  for (const movie of movies.Search) {
    const detail = await fetchMovieDetails(movie.imdbID);

    if (movie.Year === year || year === "---") {
      if (detail.Title.length > 15) {
        xValues.push(detail.Title.substring(0, 15) + "...");
      }
      else {
        xValues.push(detail.Title);
      }
      yValues.push(detail.imdbRating)
      displayMovies(movie, detail);
    }
  }

  displayChart(xValues, yValues);
}

async function fetchMovieDetails(imdbID) {
  const apiKey = "b742af30";
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
  const data = await response.json();
  return data;
}


function displayMovies(movie, detail) {
  let movieDetail = document.createElement("div");
  movieDetail.innerHTML = `
  <div class="movie-info-part">
    <img src="${movie.Poster}" alt="${movie.Title}">
    <div class="movie-info">
      <div class="title">${movie.Title}</div>
      <div class="info-list">
        <div>Year: ${movie.Year}</div>
        <div class="rating">Ratings: ${detail.Rated}</div>
        <div>Released: ${detail.Released}</div>
      </div>
      <div class="infos genre"><b>Genre:</b> ${detail.Genre}</div>
      <div class="infos"><b>Writer:</b> ${detail.Writer}</div>
      <div class="infos"><b>Actors:</b> ${detail.Actors}</div>
      <div class="infos"><b>Plot:</b> ${detail.Plot}</div>
      <div class="language"><b>Language:</b> ${detail.Language}</div>
      <div class="awards"><b>Movie Awards:</b> ${detail.Awards}</div>
    </div>
  </div>
`;
resultsContainer.appendChild(movieDetail);  
}


function displayChart(xValues, yValues) {
  let canva = document.getElementById("canva");
  if (canva.innerHTML !== "") {
    canva.innerHTML = "";
  }
  canva.innerHTML = '<canvas id="myChart" style="display: flex; justify-content: center; max-width: 600px; max-height: 400px" ></canvas>';

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: '#FFA500',
          data: yValues,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            stepSize: 1,
          },
          min: 0,
          max: 10,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "IMDB RATINGS",
        },
        legend: {
          display: false,
        },
      },
    },
  });
}



document.getElementById("button1");
let num = 0;
let interval;

function increment() {
  interval = setInterval(function() {
    button1.innerHTML = num;
    num++;
  }, 1000);
}

button1.addEventListener("mouseover", increment);

button1.addEventListener("mouseout", (e) => {
  clearInterval(interval);
})