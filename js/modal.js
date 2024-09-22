document.getElementById('votarButton').onclick = function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    document.getElementById('myModal').style.display = 'block';
}

document.getElementById('closeModal').onclick = function () {
    document.getElementById('myModal').style.display = 'none';
}

// Para fechar o modal ao clicar fora dele
window.onclick = function (event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}