function pesquisarLivro() {
    const livros = [
        "Dom Casmurro",
        "O Pequeno Príncipe",
        "1984",
        "O Hobbit",
        "Jogos Vorazes",
        "Maze Runner",
        "É Assim Que Acaba"
    ];

    let pesquisa = document.getElementById("campoPesquisa").value.toLowerCase();
    let resultado = document.getElementById("resultadoPesquisa");

    if (pesquisa.trim() === "") {
        resultado.innerHTML = "Digite o nome de um livro.";
        return;
    }

    let encontrado = livros.some(livro => livro.toLowerCase().includes(pesquisa));

    if (encontrado) {
        resultado.innerHTML = "Livro encontrado!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Livro não encontrado.";
        resultado.style.color = "red";
    }
}
