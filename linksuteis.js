// Este é um exemplo básico de JavaScript para adicionar alguma interatividade ao site

// Altera a cor de fundo do cabeçalho quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('header').style.backgroundColor = '#444';
});

// Adiciona um evento de clique para os links do menu
document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', function() {
        alert('Você clicou em: ' + item.innerText);
    });
});
