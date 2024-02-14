window.addEventListener('load', loader);

function loader(){

    const TIMELINE_LOAD = gsap.timeline();

    TIMELINE_LOAD
    .to('.c-preload__images-container', {height: 400, duration: 1.3, delay: 0.4, ease: 'power2.out'})
    .to('.c-preload__text', {height: 'auto', duration: 0.6, ease: 'power2.out'}, '-=0.8')
    .to('.c-preload__text h2', {y: 0, ease: 'power2.out'}, '-=0.6')

    .to('.f2', {y: 0, duration: 0.6, ease: 'power2.out'})
    .add(() => {
        document.querySelector('.flip-img1').style.backgroundImage = "url('https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600')";
    })
    .to('.f2', {y: '-100%'})

    .to('.c-preload', {opacity: 0, duration: 0.8, delay: 0.7})
    .add(() => {
        document.querySelector('.c-preload').style.display = "none";
    })
    .add(() => {
        document.querySelector('video').play()
    }, '-=0.8');

}