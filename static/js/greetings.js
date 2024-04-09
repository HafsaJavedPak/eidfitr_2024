const bunny = document.getElementById('bunny');
const grass = document.getElementById('grass');
const textContainer = document.getElementById('text-container');

const animateBunnyGrass = () => {
    anime({
        targets: bunny,
        translateY: 100,  // Bunny moves down 100px
        duration: 1000,
        easing: 'easeInOutSine'
    });

    const grassBlades = grass.querySelectorAll('.grass-blade');
    grassBlades.forEach((blade, index) => {
        anime({
            targets: blade,
            opacity: 0,
            delay: index * 50,  // Stagger opacity change for each blade
            duration: 400,
            easing: 'easeInExpo'
        });
    });

    anime({
        targets: textContainer,
        opacity: 1,  // Reveal text container
        delay: 1400,  // Delay after grass animation
        duration: 500,
        easing: 'easeInOutQuad'
    });
}

window.onload = animateBunnyGrass;  // Run animation on page load