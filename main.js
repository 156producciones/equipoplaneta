
const burguerBtn = document.getElementById('burguer')

burguerBtn.addEventListener('click', () => {
    document.getElementById('menu-container').style.display = 'flex'
    document.getElementById('menu-container').style.animation = 'fadeIn 0.5s'
    document.getElementById('menu').style.animation = 'leftMovement 0.5s'
})

document.getElementById('menu-actions-close').addEventListener('click', () => {
    document.getElementById('menu').style.animation = 'rightMovement 0.5s'
    document.getElementById('menu-container').style.animation = 'fadeOut 0.5s'
    setTimeout(() => {
        document.getElementById('menu-container').style.display = 'none'
    }, 600);
})