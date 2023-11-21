let neW = document.getElementsByClassName('newCard')[0]
let del = document.getElementsByClassName('delCard')[0]
let create = document.getElementsByClassName('createDiv')[0]
let save = document.getElementsByClassName('save')[0]
let close = document.getElementsByClassName('close')[0]
let mainDiv = document.getElementsByClassName('mainDiv')[0]
let allCards = document.getElementsByClassName('allCards')[0]
let quesInp = document.getElementsByClassName('quesInp')[0]
let answInp = document.getElementsByClassName('answInp')[0]
let nextDiv = document.getElementsByClassName('nextDiv')

del.addEventListener('click', () => {
    create.style.display = "none"
})

neW.addEventListener('click', () => {
    create.style.display = "block"
})

save.addEventListener('click', () => {
    let nextDiv = document.createElement('div')
    let para = document.createElement('h2')
    let para1 = document.createElement('h2')
    let button = document.createElement('button')
    let btn = document.createElement('button')
    btn.className = "bb"

    nextDiv.className = "nextDiv"
    button.className = "cross"
    button.innerHTML = "x"
    para1.className = "answer"
    nextDiv.appendChild(para)
    nextDiv.appendChild(button)
    nextDiv.appendChild(para1)
    para.innerHTML = quesInp.value
    para1.innerHTML = answInp.value
    create.style.display = "none"
    allCards.appendChild(nextDiv)
    quesInp.value = ""
    answInp.value = ""

    nextDiv.addEventListener('click', () => {
        if (para1.style.display == "none") {
            para1.style.display = "block"
            para.style.display = "none"
        } else {
            para1.style.display = "none"
            para.style.display = "block"
        }
    })

    button.addEventListener('click', (e) => {
        e.target.parentNode.remove()
    })
})
close.addEventListener('click', () => {
    create.style.display = "none"
})

