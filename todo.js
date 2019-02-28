const p = document.querySelectorAll('p');

p.forEach(function(para) {
    if (para.textContent.toLowerCase().includes('get')) {
        para.remove();
    }
})