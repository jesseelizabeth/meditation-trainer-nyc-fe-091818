// find button
// add event listener for click
// on click change the text
// when button says finished, record time of breath in breath log 

function buttonFunction() {
  const button = document.querySelector('#button')
  const instructions = document.querySelector('#instructions')
  console.log(event)
  for (i = 0; i < 4; i+=4) {
    button.innerText = 'INHALE DONE'
    instructions.innerText = 'In and out, nice and slow'
  }

}

button.addEventListener('click', buttonFunction)


// function buttonFunction() {
//   const input = document.querySelector('#new-breath')
//   const newBreath = input.duration
//   const breathLog = document.querySelector('#breath-log')
//   const listItem = document.createElement('li')
//   listItem.innerText = newBreath
//   breathLog.appendChild(listItem)
  
// }

// const button = document.querySelector('#button')
// button.addEventListener('click', buttonFunction)
// button.innerText = 'INHALE DONE'