function OpenMenubar(){
    const menuList=document.getElementById('menu-items');
    menuList.style.width='80vw';
}
function CloseSideBar(){
    const menuList=document.getElementById('menu-items');
    menuList.style.width='0px';
}
const menu=document.getElementById('menubar');  
menu.addEventListener('click',OpenMenubar);
const sidebar=document.getElementById('close-sidebar');  
sidebar.addEventListener('click',CloseSideBar);
