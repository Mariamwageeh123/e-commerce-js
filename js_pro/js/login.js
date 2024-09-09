let email=document.querySelector('.email')
let pass=document.querySelector('.pass')
let submit=document.querySelector('.btn')
console.log(localStorage.getItem('email') )
console.log(localStorage.getItem('pass') )
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if(email.value===localStorage.getItem('email') && pass.value===localStorage.getItem('pass')){
        window.location='../html/header.html'
    }
    else{
        if(email.value==='' || pass.value==='')
            alert('fill failed')
    }
})