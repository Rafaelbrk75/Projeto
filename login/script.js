/*if(localStorage.getItem("token") == null) {
    alert("Você previsa estar logado para acessar essa página");
    window.location.href = "./index.html";
}*/


const mode = document.getElementById('mode_icon');


function handleCredentialResponse(response) {

}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "208715294338-vrm1aj95ieoec4v9anrke9hi00674tgt.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.prompt(); n
}



mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;