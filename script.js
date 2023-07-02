const navMenu = document.getElementById("navMenu");
const open = document.getElementById("open");
const close = document.getElementById("close");

close.style.display = 'none';
function showMenu(){
    navMenu.style.top= "3em";
    open.style.display = 'none';
    close.style.display = 'inline-block';
}
function hideMenu(){
    navMenu.style.top= "";
    close.style.display = 'none';
    open.style.display = 'inline-block';
}
navMenu.addEventListener('click', cancelMenu)

function cancelMenu(e){
    const trigger = e.target;
    if(trigger.classList[0] === 'navlinks'){
        navMenu.style.top= "";
        close.style.display = 'none';
        open.style.display = 'inline-block';
    }
}