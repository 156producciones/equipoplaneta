// Elementos DOM
const banner = document.getElementById('banner');
const rightBtn = document.getElementById('banner-r')
const leftBtn = document.getElementById('banner-l')

// Valores
const scrollIncrement = 0.5; // Incremento para mover el fondo
let intervalId; // Variable para almacenar el ID del intervalo

// Movimiento del banner hacia la derecha
rightBtn.addEventListener('mouseover', () => {
    clearInterval(intervalId); // Detener el intervalo si ya estaba en ejecución
    intervalId = setInterval(() => {
        let currentPosition = parseFloat(getComputedStyle(banner).getPropertyValue('background-position').split(' ')[0].replace('%', ''));
        let arielPosition = (parseInt(getComputedStyle(document.getElementById('ariel')).getPropertyValue('left')) / banner.clientWidth) * 100
        console.log(arielPosition)
        if (currentPosition + scrollIncrement <= 100) {
            banner.style.backgroundPosition = `${currentPosition + scrollIncrement}% 50%`;
            document.getElementById('ariel').style.left = `${arielPosition - scrollIncrement}%`
        } else {
            clearInterval(intervalId);
        }
    }, 14); // Se busca que sean aproximadamente 60 FPS (1000 ms / 60 ≈ 16), pero se percibe cierto parpadeo que es posible eliminar con valores entre 10 y 14
});

rightBtn.addEventListener('mouseout', () => {
    clearInterval(intervalId); // Detener el intervalo cuando el ratón sale del elemento
});

// Movimiento del banner hacia la izquierda
leftBtn.addEventListener('mouseover', () => {
    clearInterval(intervalId); // Detener el intervalo si ya estaba en ejecución
    intervalId = setInterval(() => {
        let currentPosition = parseFloat(getComputedStyle(banner).getPropertyValue('background-position').split(' ')[0].replace('%', ''));
        let arielPosition = (parseInt(getComputedStyle(document.getElementById('ariel')).getPropertyValue('left')) / banner.clientWidth) * 100
        if (currentPosition - scrollIncrement >= 0) {
            banner.style.backgroundPosition = `${currentPosition - scrollIncrement}% 50%`;
            document.getElementById('ariel').style.left = `${arielPosition + scrollIncrement}%`
        } else {
            clearInterval(intervalId);
        }
    }, 14); // Se busca que sean aproximadamente 60 FPS (1000 ms / 60 ≈ 16), pero se percibe cierto parpadeo que es posible eliminar con valores entre 10 y 14
});

leftBtn.addEventListener('mouseout', () => {
    clearInterval(intervalId); // Detener el intervalo cuando el ratón sale del elemento
});