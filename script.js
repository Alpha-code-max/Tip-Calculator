const price = document.querySelector('.input-price')
const percent = document.querySelector('.input-percent')
const person = document.querySelector('.input-person')
const calculate = document.querySelector('.calculate')
const start = document.querySelector('.start-again')
const titleP1 = document.querySelector('.title-p1')
const titleP2 = document.querySelector('.title-p2')
const titleP3 = document.querySelector('.title-p3')
const section = document.querySelector('.section2')

calculate.addEventListener('click', () => {
    if (price.value === '' || !Number(price.value)) {
        titleP1.innerHTML = '<p class="error"> The number must be more than 0</p>'
        setTimeout(function(){
            titleP1.innerHTML = ''
        },2000)
    }else if(percent.value === '' || !Number(percent.value)){
        titleP2.innerHTML = '<p class="error"> The number must be more than 0</p>'
        setTimeout(function(){
            titleP2.innerHTML = ''
        },2000)
    } else if(person.value === '' || !Number(person.value)){
        titleP3.innerHTML = '<p class="error"> The number must be more than 0</p>'
        setTimeout(function(){
            titleP3.innerHTML = ''
        },2000) 
    } else {
        const estimatedTip = Number(price.value*(percent.value/100))
        const totalAmount = Number(price.value) + Number(price.value*(percent.value/100))
        const tipPerHead = estimatedTip/person.value
        const totalPerHead = totalAmount/person.value

        section.style.display = 'block';

        const paraOne = document.querySelector('.section2Pi')
        const paraTwo = document.querySelector('.section2Pii')
        const paraThree = document.querySelector('.section2Piii')
        const paraFour = document.querySelector('.section2Piv')

        paraOne.innerHTML = `<p>&#8358 ${estimatedTip.toFixed(1)}</p>`
        paraTwo.innerHTML = `<p>&#8358 ${totalAmount.toFixed(1)}</p>`
        paraThree.innerHTML = `<p>&#8358 ${tipPerHead.toFixed(1)}</p>`
        paraFour.innerHTML = `<p>&#8358 ${totalPerHead.toFixed(1)}</p>`
        
    }
})

start.addEventListener( 'click', () => {
    titleP1.innerHTML = ''
    titleP2.innerHTML = ''
    titleP3.innerHTML = ''
    price.value = ''
    percent.value = ''
    person.value = ''
    section.style.display = 'none';
})