const apiKey = 'a667eefda03f66a1d8a8d832140f690b'; // Coloque sua chave da API do TMDb aqui

const main = document.getElementById('main');
const searchInput = document.getElementById('searchInput');

// Função para buscar filmes com base na consulta do usuário
async function searchMovies(query) {
  main.innerHTML = ''; // Limpa o conteúdo principal
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
  const data = await response.json();
  data.results.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    main.appendChild(movieElement);
  });
}

// Evento de digitação no campo de busca
searchInput.addEventListener('keyup', (e) => {
  const query = e.target.value;
  if (query) {
    searchMovies(query);
  }
});