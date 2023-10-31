const menu = document.getElementById('menu');
const divOptionMenu = document.querySelector('.menu-mobile')


function deployMenu() {
    if(divOptionMenu.classList.contains('inactive')) {
        divOptionMenu.classList.remove('inactive');
        divOptionMenu.classList.add('active');

    } else if (divOptionMenu.classList.contains('active')) {
        divOptionMenu.classList.remove('active');
        divOptionMenu.classList.add('inactive');
    }
    
}

menu-mobile.addEventListener('click', () => {
    const result = classes.toggle('active')
})

menu.addEventListener('click', deployMenu);