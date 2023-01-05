const regForm= document.querySelector('form')
const inputField= document.querySelectorAll('input')
const subButton= document.getElementById('button')
const userName= document.getElementById('name')
const userNumber= document.getElementById('number')
const month= document.getElementById('month')
const year= document.getElementById('year')
const cvc= document.getElementById('cvc')
const thankYou= document.querySelector('.thanks-card')
const cardError= document.querySelector('.error-two')
const monthError=document.querySelector('.error-three')
const cvcError= document.querySelector('.error-five')
const validInputs= {
    name: /^([a-z]+)$/i,
    number: /^\d{16}$/,
    month: /^0[1-9]|1[012]$/,
    year: /^\d{2}$/,
    cvc: /^\d{3}$/
}

function validate(field, regex){
    if(regex.test(field.value)){
        field.className= 'success'
        
    }else{
        field.className= 'invalid'
    }
}
inputField.forEach((input)=>{
input.addEventListener('keyup', (e)=>{
     validate(e.target, validInputs[e.target.attributes.name.value])
     const number= validInputs['number'].test(userNumber.value)
     const year= validInputs['month'].test(month.value)
     const cvs= validInputs['cvc'].test(cvc.value)
     if(!number){
        cardError.textContent= 'Wrong format, numbers only'
     }
     if(!year){
        monthError.textContent= "Can't be blank"
     }
     if(!cvs){
        cvcError.textContent= "Can't be blank"
     }
})
})

regForm.addEventListener('submit', (e)=>{
e.preventDefault()
const submitInputs= validInputs['name'].test(userName.value) && validInputs['number'].test(userNumber.value) && validInputs['month'].test(month.value) && validInputs['cvc'].test(cvc.value) && validInputs['year'].test(year.value)
if(submitInputs){
thankYou.style.display= 'flex'
regForm.style.display= 'none'
console.log('hello')
}else{
    regForm.className= 'invalid'
}
})