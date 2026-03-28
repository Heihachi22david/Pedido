function aceitar(event) {
    event.stopPropagation();
    document.getElementById('check').style.display = 'inline';
    
    // Pequeno delay para ela ver o "check" antes de mudar de página
    setTimeout(() => {
        window.location.href = "TeAmo.html";
    }, 800);
}