(function(){
    console.log('Début du carrousel') 

    const carrousel__ouvrir = document.querySelector('.carrousel__ouvrir')
    const carrousel = document.querySelector('.carrousel')
    const carrousel__x = document.querySelector('.carrousel__x')
    const carrousel__figure = document.querySelector('.carrousel__figure')
 
    const galerie = document.querySelector('.galerie')
    const galerie__img = galerie.querySelectorAll('img')
 
    carrousel__ouvrir.addEventListener('mousedown', function(){
       carrousel.classList.add('carrousel--activer')
       ajouter_les_images_de_galerie()
    })
 
    carrousel__x.addEventListener('mousedown', function(){
       carrousel.classList.remove('carrousel--activer')
    })
 
 function ajouter_les_images_de_galerie()
 {
    for (const elem of galerie__img){
       const img = document.createElement('img')
       img.classList.add('carrousel__img')
       img.src = elem.src
       // console.log(img.src)
       carrousel__figure.appendChild(img);
    }
 }


 })()