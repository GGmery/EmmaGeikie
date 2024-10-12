document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('content').classList.add('show');
    }, 3000); // Ajusta el tiempo según tus necesidades
});
