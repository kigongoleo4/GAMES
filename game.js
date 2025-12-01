


// 1. Show a welcome message when the page loads
window.addEventListener("load", function () {
    console.log("Welcome to UMU Gaming Zone! JavaScript Loaded Successfully.");
});

// ---------------------------------------------------------

// 2. Highlight Navbar Links When Scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("class");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.href.includes(current)) {
            a.classList.add("active");
        }
    });
});

// ---

// 3. Click to Zoom Image Effect
const galleryImages = document.querySelectorAll(".image-grid img");

galleryImages.forEach(img => {
    img.addEventListener("click", function () {
        img.classList.toggle("zoomed");
    });
});


            // Simple interactive effect
            const header = document.querySelector('header');
            header.addEventListener('mouseover', () => {
                header.style.color = '#ff4500';
            });
            header.addEventListener('mouseout', () => {
                header.style.color = '#ffffff';
            });
        
    