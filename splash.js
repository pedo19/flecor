document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 5000); // 10000 ms = 10 segundos
});