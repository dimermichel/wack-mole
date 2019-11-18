
let arrPos = ['.row.row1 .col.col1', '.row.row1 .col.col2', '.row.row1 .col.col3'
, '.row.row2 .col.col1', '.row.row2 .col.col2', '.row.row2 .col.col3',
'.row.row3 .col.col1', '.row.row3 .col.col2', '.row.row3 .col.col3']

let arrTime = [100, 400, 1000, 1500, 2000, 3000, 3500]
let score = 500
let displayScore = document.querySelector('#score')

let x = setInterval(() => {
    let randomTime = arrTime[Math.floor(Math.random() * arrTime.length)]
    let random = Math.floor(Math.random() * arrPos.length)
    let randomPosition = document.querySelector(arrPos[random])
    if (randomPosition.querySelector('div')) {
        randomPosition.innerHTML = ''
    }
    let mole = document.createElement('div')
    mole.classList.add('mole')
    randomPosition.append(mole)

    mole.onclick = () => {
        score += 100
        randomPosition.innerHTML = ''
        displayScore.innerText = score
        if (score >= 1000) {
            document.querySelector('h1').innerText = 'You Win'
            document.querySelector('h1').classList.add('win')
            stop()
        }
    }
        
    if (score <= 0) {
        document.querySelector('h1').innerText = 'You lose'
        document.querySelector('h1').classList.add('lose')
        stop()
    } else {
        setTimeout(() => {

            if (randomPosition.querySelector('div')) {
                score += -100
                displayScore.innerText = score
            }
            randomPosition.innerHTML = ''
        }, randomTime);
    }

}, 2000);

function stop(){
    clearInterval(x)
}
