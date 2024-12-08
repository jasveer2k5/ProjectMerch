document.addEventListener('DOMContentLoaded', function() {
    const watchButtons = document.querySelectorAll('.watch-video');
    watchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const videoUrl = this.getAttribute('data-video');
            window.open(videoUrl, '_blank');
        });
    });

    const shopButtons = document.querySelectorAll('.shop-now');
    shopButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Shopping functionality is not implemented in this demo.');
        });
    });
});
