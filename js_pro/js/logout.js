let logout=document.querySelector('.logout')
logout.addEventListener('click',function(){
    localStorage.clear()
    window.location.reload()
})