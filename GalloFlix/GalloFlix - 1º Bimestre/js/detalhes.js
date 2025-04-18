const params = news URLSearchParams(windows.location.search);
const id = params.get('id');
const media = params.get('media');

//Ao carregar a pagina executa as funções de buscar ps dados
document.addEventListener("DOMContentLoaded", async () => {
    //buscar filmes
    getMovie();
    toggleloading();
});

async function getMovie() {
    let movie;
    await fetch(`https://api.themoviedb.org/3/${media}/${id}?language=pt-BR`, options)
    .then(res => res.json())
    .then(res => movie = res)
    .catch(err => console.error (err));
    //console.log(movie);

    // Poster
    document.querySelector('.poster').src= movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` :

    // Detalhes do Filme
    let detalhes = document.getElementById('detalhes');
    detalhes.innerHTML =`
                <h1 class="fs-1 text-danger">${movie.title ?? movie.name}</h1>
                <h4 class="mb-4 fw-bold">Titulo Original: ${movie.orignal_title ?? movie.orignal_name}</h4>
                <p class='mb-3'>Data de Estreia: ${formatDate}`
}