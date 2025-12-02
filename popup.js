document.addEventListener('DOMContentLoaded', () => {
    const displaygif = document.querySelector('.interact');
    const showBtn = document.getElementById('showBtn');

    if (showBtn && displaygif) {
        showBtn.addEventListener('click', () => {
            displaygif.style.display = 'block';
        });
    }
});