// find button
// add event listener for click
// on click change the text
// when button says finished, record time of breath in breath log 



function buttonClicked() {
  let clicks = 0
  const button = document.querySelector('#button')
  const instructions = document.querySelector('#instructions')
  if (clicks === 0) {
    button.innerText = 'START INHALE'
    clicks = 1
  } else if (clicks === 1) {
    button.innerText = 'INHALE COMPLETE'
    clicks = 2
  } else if (clicks === 2) {
    button.innerText = 'START EXHALE'
    clicks = 3
  } else (clicks === 3) {
    button.innerText = 'FINISHED'
    clicks = 0
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