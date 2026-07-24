// Sayfa tamamen yüklendiğinde animasyonları başlat
window.addEventListener("load", () => {

    // Hero içerik
    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {
        hero.style.transition = "all 1.2s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 300);

    // Sosyal medya kartları
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "all .8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 800 + (index * 250));

    });

});


// Arka plana hafif hareket efekti
window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`;

});
