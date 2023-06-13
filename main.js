$('.brand').owlCarousel({
    loop:true,
	autoplay:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let hamburger = document.querySelector('.mobile-nav')
let nav = document.querySelector('.nav-sec')

hamburger.addEventListener('click', () => {
    console.log('clicked');
    nav.classList.toggle('active')
})

 let navLinks = document.querySelectorAll('.nav-sec ul li')

navLinks.forEach(e => {
    e.addEventListener('click', () =>{
        nav.classList.remove('active')

       document.querySelector('.active')?.classList.remove('active')
       e.classList.add('active')
    })
})

// let sec = document.querySelectorAll('section')

// window.addEventListener('scroll', () => {
//     let length = sec.length;
//     while(--length && window.scrollY  < sec[length].offsetTop){
//         navLinks.forEach(e => e.classList.remove('active'))
//         navLinks[length].classList.add('active')
//         // console.log(length);
//     }
// })