// console.log("Hello!")
let link_1 = document.querySelector('.link_1');
let link_2 = document.querySelector('.link_2');
let link_3 = document.querySelector('.link_3');
let link_4 = document.querySelector('.link_4');
let image = document.querySelector('.viewer__image')

link_1.addEventListener('click', function(){
    image.src = './img/sj100 air.jpg'
})

link_2.addEventListener('click', function(){
    image.src = './img/sj100 front.jpg'
})

link_3.addEventListener('click', function(){
    image.src = './img/sj100 left.jpg'
})

link_4.addEventListener('click', function(){
    image.src = './img/sj100 top.jpg'
})
