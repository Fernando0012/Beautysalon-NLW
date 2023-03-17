//abre e fecha o menu qundo clicar no icone:hamburguer e X  

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um item no menu e esconder ele
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

//Mudar o header da página quando der scroll
   const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){
 
    if (window.scrollY >= navHeight){
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    }
    else{
        //menor que a altura do header
        header.classList.remove('scroll')
    }
}


// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1002: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

//ScrollReveal: Mostrar elementos quando der srcoll na página
const scrollReveal = ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, {interval:100})

// Button back to top
   const backToTopButtton = document.querySelector('.back-to-top')
    const footer = document.querySelector('.footer')


function backToTop(){
 
    if (this.window.scrollY >= 560){
        backToTopButtton.classList.add('show')
    }
    else{
        backToTopButtton.classList.remove('show')
    }
}

//Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for (const section of sections){
        const sectionTop = section.offsetTop
        const sctionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')


        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sctionHeight

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
        }
        else{
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    }
}

//When Scroll

window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activeMenuAtCurrentSection()
})

