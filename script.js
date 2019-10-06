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



//insert the divs containing the info from the users
const setPage = (obj) => {
  for (let i = 0; i < users.length; i++) {
    const elem = obj[i]
    const createDiv = document.createElement('div')
    if (elem.slot === 'first') {
      // const createDiv = document.createElement('div')
      createDiv.textContent = elem.name
      createDiv.id = elem.name
      createDiv.classList.add('names')
      first.appendChild(createDiv)
    }
    else if (elem.slot === 'second') {
      // const createDiv = document.createElement('div')
      createDiv.textContent = elem.name
      createDiv.id = elem.name
      createDiv.classList.add('names')
      second.appendChild(createDiv)
    }
    else if (elem.slot === 'third') {
      // const createDiv = document.createElement('div')
      createDiv.id = elem.name
      createDiv.textContent = elem.name
      createDiv.classList.add('names')
      if (elem.selected) {
        createDiv.classList.add(elem.selected)
        third.appendChild(createDiv)
      }
      else {
        third.appendChild(createDiv)
      }
    }
  }
}

//run the function to insert the info into the html
setPage(users)

//Change the colors when clicked on
const moe = document.getElementById('moe')
const larry = document.getElementById('larry')
const curly = document.getElementById('curly')
const lucy = document.getElementById('lucy')
const arrName = [moe, larry, curly, lucy]

arrName.forEach((elem) => {
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

//loop through each button and add the click event
btnArr.forEach((elem) => {
  //in each click event grab all elements with class within the container and append
  elem.addEventListener('click', (ev) => {
    const firstRight = document.querySelector('.firstRight')
    const secondLeft = document.querySelector('.secondleft')
    const secondRight = document.querySelector('.secondRight')
    const thirdLeft = document.querySelector('.thirdLeft')

    if (ev.target === firstRight) {
      let selectedArr = [...first.getElementsByClassName('true')]
      for (let i = 0; i < selectedArr.length; i++) {
        second.appendChild(selectedArr[i])
      }
    }
    if (ev.target === secondLeft) {
      let selectedArr = [...second.getElementsByClassName('true')]
      for (let i = 0; i < selectedArr.length; i++) {
        first.appendChild(selectedArr[i])
      }
    }
    if (ev.target === secondRight) {
      let selectedArr = [...second.getElementsByClassName('true')]
      for (let i = 0; i < selectedArr.length; i++) {
        third.appendChild(selectedArr[i])
      }
    }
    if (ev.target === thirdLeft) {
      let selectedArr = [...third.getElementsByClassName('true')]
      for (let i = 0; i < selectedArr.length; i++) {
        second.appendChild(selectedArr[i])
      }
    }
  })
})
