const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lucy', slot: 'third', selected: true },
]

const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')
const containerArr = [first, second, third]

//create buttons and add heading
slots.forEach((elem) => {
  const heading = document.createElement('h2')
  const leftBtn = document.createElement('button')
  leftBtn.innerHTML = '<'
  const rightBtn = document.createElement('button')
  rightBtn.innerHTML = '>'

  if (elem === 'first') {
    leftBtn.classList.add('firstLeft')
    rightBtn.classList.add('firstRight', 'active')
    first.appendChild(leftBtn)
    first.appendChild(rightBtn)

    heading.innerHTML = 'FIRST'
    first.appendChild(heading)
  }
  if (elem === 'second') {
    leftBtn.classList.add('secondLeft', 'active')
    rightBtn.classList.add('secondRight', 'active')
    second.appendChild(leftBtn)
    second.appendChild(rightBtn)

    heading.innerHTML = 'SECOND'
    second.appendChild(heading)
  }
  if (elem === 'third') {
    leftBtn.classList.add('thirdLeft', 'active')
    rightBtn.classList.add('thirdRight')
    third.appendChild(leftBtn)
    third.appendChild(rightBtn)

    heading.innerHTML = 'THIRD'
    third.appendChild(heading)
  }
})


/*New modified code to keep order of users below*/

//Add everythign in a list and set display none for default view
const setPage = (obj) => {
  slots.forEach((elem) => {
    for (let i = 0; i < obj.length; i++) {
      const createDiv = document.createElement('div')
      const curElem = document.getElementById(elem)
      let objElem = obj[i]
      createDiv.innerHTML = objElem.name
      createDiv.id = objElem.name
      createDiv.classList.add('names')
      createDiv.style.display = 'none'
      curElem.appendChild(createDiv)
    }
  })
}

//run the function to insert the info into the html
setPage(users)

//defaultview
const testing = document.querySelectorAll('.names')
const testName = [...testing]

testing.forEach((elem) => {
  for (let i = 0; i < users.length; i++) {
    if ((users[i].slot === elem.parentElement.id) && (elem.id === users[i].name)) {
      elem.style.display = 'block'
      if (users[i].selected) {
        elem.classList.add(true)
      }
    }
  }
})


testName.forEach((elem) => {
  elem.addEventListener('click', () => {
    if ([...elem.classList].includes('true')) {
      elem.classList.remove('true')
    }
    else if (![...elem.classList].includes('true')) {
      elem.classList.add('true')
    }
  })
})


//button event click setup beings...
const activeButton = document.querySelectorAll('.active')
const btnArr = [...activeButton]

btnArr.forEach((elem) => {
  elem.addEventListener('click', (ev) => {
    const firstRight = document.querySelector('.firstRight')
    const secondLeft = document.querySelector('.secondleft')
    const secondRight = document.querySelector('.secondRight')
    const thirdLeft = document.querySelector('.thirdLeft')

    if (ev.target === firstRight) {
      let selectedArr = [...first.getElementsByClassName('true')]
      for (let i = 0; i < selectedArr.length; i ++) {
        let element = selectedArr[i]
        if (first.querySelector(`#${element.innerHTML}`).style.display === 'block') {
          element.style.display = 'none'
          second.querySelector(`#${element.innerHTML}`).style.display = 'block'
          second.querySelector(`#${element.innerHTML}`).classList.add('true')
        }
      }
    }

    if (ev.target === secondLeft) {
      let selectedArr = [...second.getElementsByClassName('true')]
      for (let i = 0; i < selectedArr.length; i ++) {
        let element = selectedArr[i]
        if (second.querySelector(`#${element.innerHTML}`).style.display === 'block') {
          element.style.display = 'none'
          first.querySelector(`#${element.innerHTML}`).style.display = 'block'
          first.querySelector(`#${element.innerHTML}`).classList.add('true')
        }
      }
    }

    if (ev.target === secondRight) {
      let selectedArr = [...second.getElementsByClassName('true')]
      for (let i = 0; i < selectedArr.length; i ++) {
        let element = selectedArr[i]
        if (second.querySelector(`#${element.innerHTML}`).style.display === 'block') {
          element.style.display = 'none'
          third.querySelector(`#${element.innerHTML}`).style.display = 'block'
          third.querySelector(`#${element.innerHTML}`).classList.add('true')
        }
      }
    }

    if (ev.target === thirdLeft) {
      let selectedArr = [...third.getElementsByClassName('true')]
      for (let i = 0; i < selectedArr.length; i ++) {
        let element = selectedArr[i]
        if (third.querySelector(`#${element.innerHTML}`).style.display === 'block') {
          element.style.display = 'none'
          second.querySelector(`#${element.innerHTML}`).style.display = 'block'
          second.querySelector(`#${element.innerHTML}`).classList.add('true')
        }
      }
    }
  })
})

//------------------------------------------------------------------------------------------------------------

/*Original code below does not keep the format of the list of users to match that of the users object*/

// //insert the divs containing the info from the users
// const setPage = (obj) => {
//   for (let i = 0; i < users.length; i++) {
//     const elem = obj[i]
//     const createDiv = document.createElement('div')
//     if (elem.slot === 'first') {
//       createDiv.textContent = elem.name
//       createDiv.id = elem.name
//       createDiv.classList.add('names')
//       first.appendChild(createDiv)
//     }
//     else if (elem.slot === 'second') {
//       createDiv.textContent = elem.name
//       createDiv.id = elem.name
//       createDiv.classList.add('names')
//       second.appendChild(createDiv)
//     }
//     else if (elem.slot === 'third') {
//       createDiv.id = elem.name
//       createDiv.textContent = elem.name
//       createDiv.classList.add('names')
//       if (elem.selected) {
//         createDiv.classList.add(elem.selected)
//         third.appendChild(createDiv)
//       }
//       else {
//         third.appendChild(createDiv)
//       }
//     }
//   }
// }



// //run the function to insert the info into the html
// setPage(users)

// //Change the colors when clicked on
// const moe = document.getElementById('moe')
// const larry = document.getElementById('larry')
// const curly = document.getElementById('curly')
// const lucy = document.getElementById('lucy')
// const arrName = [moe, larry, curly, lucy]

// arrName.forEach((elem) => {
//   elem.addEventListener('click', () => {
//     if ([...elem.classList].includes('true')) {
//       elem.classList.remove('true')
//     }
//     else if (![...elem.classList].includes('true')) {
//       elem.classList.add('true')
//     }
//   })
// })

// //button event click setup beings...
// const activeButton = document.querySelectorAll('.active')
// const btnArr = [...activeButton]

// //loop through each button and add the click event
// btnArr.forEach((elem) => {
//   //in each click event grab all elements with class within the container and append
//   elem.addEventListener('click', (ev) => {
//     const firstRight = document.querySelector('.firstRight')
//     const secondLeft = document.querySelector('.secondleft')
//     const secondRight = document.querySelector('.secondRight')
//     const thirdLeft = document.querySelector('.thirdLeft')

//     if (ev.target === firstRight) {
//       let selectedArr = [...first.getElementsByClassName('true')]
//       for (let i = 0; i < selectedArr.length; i++) {
//         second.appendChild(selectedArr[i])
//       }
//     }
//     if (ev.target === secondLeft) {
//       let selectedArr = [...second.getElementsByClassName('true')]
//       for (let i = 0; i < selectedArr.length; i++) {
//         first.appendChild(selectedArr[i])
//       }
//     }
//     if (ev.target === secondRight) {
//       let selectedArr = [...second.getElementsByClassName('true')]
//       for (let i = 0; i < selectedArr.length; i++) {
//         third.appendChild(selectedArr[i])
//       }
//     }
//     if (ev.target === thirdLeft) {
//       let selectedArr = [...third.getElementsByClassName('true')]
//       for (let i = 0; i < selectedArr.length; i++) {
//         second.appendChild(selectedArr[i])
//       }
//     }
//   })
// })
