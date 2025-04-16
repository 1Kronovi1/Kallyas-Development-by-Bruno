const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const close = document.getElementById('close');

hamburger.addEventListener('click', () => {
    sidebar.style.transition = "none"; // Desativa a transição enquanto ajusta a posição
    sidebar.style.left = "0"; // Move a sidebar para a posição visível
    sidebar.style.opacity = "1"; // Torna a sidebar visível
    sidebar.classList.add('show');

    setTimeout(() => {
        sidebar.style.transition = "left 0.3s ease, opacity 0.3s ease"; // Reativa a transição suave
      }, 50); // Tempo suficiente para o navegador aplicar as mudanças de layout
});

close.addEventListener('click', () => {
    sidebar.style.transition = "none"; // Desativa a transição enquanto ajusta a posição
    sidebar.style.left = "-250px"; // Move a sidebar para fora da tela
    sidebar.style.opacity = "0"; // Torna a sidebar invisível
    sidebar.classList.remove('show');

    setTimeout(() => {
        sidebar.style.transition = "left 0.3s ease, opacity 0.3s ease"; // Reativa a transição suave
      }, 50); // Tempo suficiente para o navegador aplicar as mudanças de layout
});