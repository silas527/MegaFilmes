function toggleLoading() {

    let loader = document.querySelector(".loader");
    
    loader.style.display = loader.style.display = "none"? "block": "none";
    
    }
    
    // Page Scroll
    
    window.addEventListener("scroll", function () {
    
    const navbar = document.querySelector(".navbar");
    
    if (window.scrolly > 50) {
    
    navbar.classList.add("scrolled");
    
    } else {
    
    navbar.classList.remove("scrolled");
    
    }
    
    });