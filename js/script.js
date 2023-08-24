let box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let BoxWidth = box.clientWidth
    let BoxHeight = box.clientHeight
    let moveX = (x - BoxWidth/2)
    let moveY = (y - BoxHeight/2)
    box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
})
box.addEventListener('mouseout', (e) => {
    box.style.transform = ``;
})