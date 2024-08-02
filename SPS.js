function cpuPlay(){
    const option = ['stone','paper','scissor'];
    const random = Math.ceil(Math.random() * 3) - 1 
    return option[random]
}

function logic(playerSelection,cpuSelection){
    // stone > scissor
    // scissor > paper
    // paper > stone

    if(playerSelection == cpuSelection){
        return 'DRAW'
    } else if(playerSelection == 'stone' && cpuSelection == 'paper') {
        return 'CPU wins'
    } else if(playerSelection == 'paper' && cpuSelection == 'scissor') {
        return 'CPU wins'
    } else if(playerSelection == 'scissor' && cpuSelection == 'stone'){
        return 'CPU wins'
    } else {
        return 'PLAYER wins'
    }
}



window.onload = () => {
    const stone  = document.querySelector('#stone');
    const paper  = document.querySelector('#paper');
    const scissor  = document.querySelector('#scissor');
    const playerSelection = document.querySelector('#playerSelection')
    const cpuSelection = document.querySelector('#cpuSelection')
    const resultTag = document.querySelector('#result')

    stone.addEventListener('click',() => {
         playerSelection.innerHTML = '<img src="./assets/stone.png">'
         const cpu = cpuPlay()
         cpuSelection.innerHTML = `<img src="./assets/${cpu}.png">`
         const result = logic('stone',cpu)
         resultTag.innerHTML = result
    })

    paper.addEventListener('click',() => {
        playerSelection.innerHTML = '<img src="./assets/paper.png">'
        const cpu = cpuPlay()
        cpuSelection.innerHTML = `<img src="./assets/${cpu}.png">`
        const result = logic('paper',cpu)
        resultTag.innerHTML = result
   })

   scissor.addEventListener('click',() => {
    playerSelection.innerHTML = '<img src="./assets/scissor.png">'
    const cpu = cpuPlay()
    cpuSelection.innerHTML = `<img src="./assets/${cpu}.png">`
    const result = logic('scissor',cpu)
    resultTag.innerHTML = result
})
}