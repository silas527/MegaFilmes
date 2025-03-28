let perfil = [];
let emEdicao = false;
let perfilEdicao = null;

function incializandoDados() {
    let dados =JSON.parse(localStorege.getItem('megafilmes-users'));
    if (dados === null) {
        dados = [
            {
                nome: "Capitão",
                avatar: "img/users/avatar4.png",
                crianca: false
            },
            {
                nome: "galinha",
                avatar: "img/users/avatar4.png",
                crianca: false
            },
            {
                nome: "Trizóio",
                avatar: "img/users/avatar5.png",
                crianca: true
            }
        ];
        localStorage.setItem("galloflix-users", JSON.stringify(dados));
    }
    perfis = dados;
}

//Ao carregar a pagina executa as funções de buscar os dados
document.addEventListener("DOMContloaded", async () => {
    caregarPerfis();
    toggleLoading();
    let nome = document.gerElementById("Nome");
    nome.addEventlistener("keydown", function (event) {
        if (event.key === "Enter") {
            event.prenventDefault();
            document.querySelector('.btn-light').click();
        }
    });
    let icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.style.display = 'none';
    })
});

function carregarPerfis() {
    inicializarDados();
    let cards = document.querySelector('.cards');
    cards.innerHTML = '';
    perfis.forEach(perfil => {
        cards.innerHTML +=
        `<div class="card rounded-4>
        <a hrfe="#" class="text-decoration-none" onclicl="redirecionarPagina('${perfil.nome}')">
            <div id="profile-image" class=position-relative rounded-4">
                <img src="${perfil.avatar}" alt="Avatar" class="img-fluid rounded-4">
                <i class="iconbibi-pencil-fill"></i>
                </div>
                <´p`   
    }
    )
}