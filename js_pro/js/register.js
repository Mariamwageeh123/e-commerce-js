let fn = document.querySelector('.fn');
let ln = document.querySelector('.ln');
let email = document.querySelector('.email');
let pass = document.querySelector('.pass');
let submit = document.querySelector('.submitbtn');
console.log(fn.value)
submit.addEventListener('click',(e)=>{
e.preventDefault()
if (fn.value==='' ||  ln.value==='' || email.value==='' || pass.value==='') {
    alert('must fill')
} 
else{
    localStorage.setItem('fn',fn.value)
    localStorage.setItem('ln',ln.value)
    localStorage.setItem('email',email.value)
    localStorage.setItem('pass',pass.value)
    setTimeout(() => {
        window.location='../html/login.html'
    }, 1000);
}


})

