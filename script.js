document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");
    const dropdowns = document.querySelectorAll(".dropdown > a");

    // Toggle Mobile Menu
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Open/close menu
    });

    // Toggle Dropdown Menus in Mobile View
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent link from navigating
            this.parentElement.classList.toggle("active"); // Toggle dropdown
        });
    });
});

        let index = 0;
        const slides = document.querySelector(".carousel");
        const totalSlides = slides.children.length;

        function showSlide(n) {
            if (n >= totalSlides) index = 0;
            else if (n < 0) index = totalSlides - 1;
            else index = n;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() { showSlide(index + 1); }
        function prevSlide() { showSlide(index - 1); }

        setInterval(() => { nextSlide(); }, 3000);
        document.querySelector(".next").addEventListener("click", nextSlide);
        document.querySelector(".prev").addEventListener("click", prevSlide);
        showSlide(index); // Show the first slide initially
        document.getElementById('orgStructureLink').addEventListener('click', function (e) {
            e.preventDefault();
            window.open('Upload/Organization-Structure.pdf', '_blank');
          });

          document.getElementById('orgRevenueLink').addEventListener('click', function (e) {
            e.preventDefault();
            window.open('Upload/SOP-for-Enlistig-AIS140-Certified-VLTD-Manufacturers-C.pdf', '_blank');
          });  
          document.getElementById('orgNumberofVehiclesLink').addEventListener('click', function (e) {
            e.preventDefault();
            window.open('Upload/Number-of-vehicles.pdf', '_blank');
          }); 
          document.getElementById('orgBCILink').addEventListener('click', function (e) {
            e.preventDefault();
            window.open('Upload/Border-checkpoint-information.pdf', '_blank');
          });          
            
    
          