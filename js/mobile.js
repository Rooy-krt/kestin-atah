/* ------------------------------
   MOBILE HERO MODAL
-------------------------------*/

// Open
document.getElementById("readMoreBtn")?.addEventListener("click", () => {
    document.getElementById("mobileHeroModal").style.display = "flex";
});

// Close
document.getElementById("closeBubbleBtn")?.addEventListener("click", () => {
    document.getElementById("mobileHeroModal").style.display = "none";
});

// Close when clicking background
document.getElementById("mobileHeroModal")?.addEventListener("click", (e) => {
    if (e.target.id === "mobileHeroModal") {
        document.getElementById("mobileHeroModal").style.display = "none";
    }
});


/* ------------------------------
   MOBILE NAV ANIMATIONS
-------------------------------*/
const mobileBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");
const mobileOverlay = document.getElementById("mobileNavOverlay");
const mobileClose = document.getElementById("mobileNavClose");

mobileBtn?.addEventListener("click", () => {
    mobileNav.style.right = "0";
    mobileOverlay.style.display = "block";
});

mobileClose?.addEventListener("click", closeMobileNav);
mobileOverlay?.addEventListener("click", closeMobileNav);

function closeMobileNav() {
    mobileNav.style.right = "-100%";
    mobileOverlay.style.display = "none";
}



/* ------------------------------
   EXTRA MOBILE ANIMATIONS 
   (Scroll-based)
-------------------------------*/

if (window.innerWidth < 768) {
    const animatedItems = document.querySelectorAll(".wow, .feature-content, img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "0.6s";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.opacity = "1";
            }
        });
    }, { threshold: 0.15 });

    animatedItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        observer.observe(item);
    });
}
