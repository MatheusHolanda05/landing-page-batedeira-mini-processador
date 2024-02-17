window.onload = function() {
    var title = document.querySelector('h1');
    title.style.opacity = 0;
    title.style.transition = 'opacity 2s';
    setTimeout(function() {
        title.style.opacity = 1;
    }, 500);
};