
document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.custom-navbar');
    const stickyPoint = 120; // scroll distance in px

    window.addEventListener('scroll', () => {
        if (window.scrollY > stickyPoint) {
            navbar.classList.add('sticky');
            document.body.classList.add('nav-fixed');
        } else {
            navbar.classList.remove('sticky');
            document.body.classList.remove('nav-fixed');
        }
    });

});

const counters = document.querySelectorAll('.counter');
let started = false;

window.addEventListener('scroll', () => {
    const section = document.querySelector('.counter-section');
    const sectionTop = section.offsetTop - window.innerHeight + 100;

    if (window.scrollY > sectionTop && !started) {
        counters.forEach(counter => {
            let count = 0;
            const target = +counter.dataset.target;
            const speed = target / 100;

            const update = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target + '+';
                }
            };
            update();
        });
        started = true;
    }
});




// document.querySelectorAll('.property-slider').forEach(slider => {

//     const track = slider.querySelector('.property-track');
//     const cards = slider.querySelectorAll('.card');
//     const nextBtn = slider.querySelector('.next');
//     const prevBtn = slider.querySelector('.prev');

//     let index = 0;
//     const total = cards.length;
//     const delay = slider.dataset.delay || 6000;

//     function updateSlide() {
//         track.style.transform = `translateX(-${index * 100}%)`;
//     }

//     nextBtn.addEventListener('click', () => {
//         index = (index + 1) % total;
//         updateSlide();
//     });

//     prevBtn.addEventListener('click', () => {
//         index = (index - 1 + total) % total;
//         updateSlide();
//     });

//     // 🔁 Auto scroll
//     setInterval(() => {
//         index = (index + 1) % total;
//         updateSlide();
//     }, delay);

// });
document.querySelectorAll('.property-slider').forEach(slider => {

    const track = slider.querySelector('.property-track');
    const cards = slider.querySelectorAll('.property-card');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');

    
    if (!track || cards.length <= 1 || !nextBtn || !prevBtn) return;

    let index = 0;
    const total = cards.length;
    const delay = slider.dataset.delay || 6000;
    let autoSlide;

    function updateSlide() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % total;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + total) % total;
        updateSlide();
    });

    // ▶️ Start Auto Slide
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            index = (index + 1) % total;
            updateSlide();
        }, delay);
    }

    // ⏸️ Stop Auto Slide
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // 🔁 Init
    startAutoSlide();

    // 🖱️ Hover pause
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

});

