// find button
// add event listener for click
// on click change the text
// when button says finished, record time of breath in breath log 

let clicks = 0
const buttonText = [
  'START INHALE',
  'INHALE COMPLETE',
  'START EXHALE',
  'FINISHED',
]
// const instructionsText = {
  
// }

console.log(buttonText)

function buttonClicked() {
  const button = document.querySelector('#button')
  const instructions = document.querySelector('#instructions')
  for (i = 0; i < 4; i++) {
    button.innerText = buttonText[clicks]
    clicks = clicks + 1
  }

}

button.addEventListener('click', buttonClicked)


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