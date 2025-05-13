function toggleSubMenu(event, submenuId) {
    event.preventDefault();
    var submenu = document.getElementById(submenuId);
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.text');
    let currentTextIndex = 0;
    const backgroundImages = [
        'url("petrol1.jpg")',
        'url("petrol2.jpg")',
        'url("petrol.jpg")',

    
    ];
    let currentBackgroundIndex = 0;

    function showNextText() {
        texts[currentTextIndex].classList.remove('active');
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        texts[currentTextIndex].classList.add('active');
    }

    function changeBackgroundImage() {
        document.body.style.backgroundImage = backgroundImages[currentBackgroundIndex];
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    }

    texts[currentTextIndex].classList.add('active');
    setInterval(showNextText, 7000);
    setInterval(changeBackgroundImage, 7000);
});



document.addEventListener('DOMContentLoaded', function() {
    const panelContents = document.querySelectorAll('.panel-content');

    panelContents.forEach(content => {
        const header = content.querySelector('h2');
        let timeoutId;

        // Başlık üzerine gelindiğinde paragrafı göster
        header.addEventListener('mouseover', () => {
            clearTimeout(timeoutId); // Var olan zamanlayıcıyı temizle
            content.classList.add('active'); // .active sınıfını ekle
        });

        // Başlık üzerinden fare çekildiğinde 3 saniye sonra paragrafı gizle
        header.addEventListener('mouseout', () => {
            timeoutId = setTimeout(() => {
                content.classList.remove('active'); // .active sınıfını çıkar
            }, 3000); // 3 saniye bekle
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');

    function checkScroll() {
        // Check if scrolled near the bottom of the page
        const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
        
        if (scrolledToBottom) {
            footer.classList.add('show'); // Show footer
        } else {
            footer.classList.remove('show'); // Hide footer
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);

    // Initial check in case the user starts at the bottom of the page
    checkScroll();
});
