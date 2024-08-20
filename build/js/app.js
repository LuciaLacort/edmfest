document.addEventListener('DOMContentLoaded', function(){
    fixNavigation();
    createGallery();
    highlightLink();
    scrollNav();
})

function fixNavigation(){
    const header = document.querySelector('.header');
    const festival = document.querySelector('.festival'); 
    window.addEventListener('scroll', function(){
        if(festival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
            
        }else{
            header.classList.remove('fixed')
            
        }
    })

}

//Gallery

function createGallery(){
    const totalImages = 16;
    const gallery = document.querySelector('.gallery__images');
    for(let i = 1; i <= totalImages; i++){
        const image = document.createElement('IMG')
        image.src = `src/img/gallery/full/${i}.jpg`
        image.alt = 'Imagen de la galeria'

   
        image.onclick = function(){
            showImage(i) 
        }

    gallery.appendChild(image)
    }   
}

function showImage(i){

    const image = document.createElement('IMG')
    image.src = `src/img/gallery/full/${i}.jpg`
    image.alt = 'Imagen de la galeria'

    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = closeModal

    const closeModalButton = document.createElement('BUTTON')
    closeModalButton.textContent = 'X'
    closeModalButton.classList.add('modal__close')
    closeModalButton.onclick = closeModal
   
    modal.appendChild(image)
    modal.appendChild(closeModalButton)
 

    const body = document.querySelector('body')
    body.classList.add('overflow__hidden')
    body.appendChild(modal);
}

function closeModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fadeout')
    setTimeout(() => {
        modal?.remove()
        const body = document.querySelector('body')
        body.classList.remove('overflow__hidden')
    }, 500)
}

function highlightLink(){
   document.addEventListener('scroll', function(){
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.header__links a')

    let current = ''
    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if(window.scrollY >= (sectionTop - sectionHeight / 3)){
            current = section.id
        }
    })

    navLinks.forEach(link => {
        link.classList.remove('active')
        if(link.getAttribute('href') === '#' + current){
            link.classList.add('active')
        }
    })
   })
}

function scrollNav(){
    const navLinks = document.querySelectorAll('.header__links a')
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const section = document.querySelector(e.target.getAttribute('href'))
            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}
