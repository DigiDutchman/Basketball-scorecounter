// standard variables//
// scores//
const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')

// increment btns//
const incrementOneHome = document.getElementById('increment-one-home')
const incrementTwoHome = document.getElementById('increment-two-home')
const incrementThreeHome = document.getElementById('increment-three-home')

const incrementOneGuest = document.getElementById('increment-one-guest')
const incrementTwoGuest = document.getElementById('increment-two-guest')
const incrementThreeGuest = document.getElementById('increment-three-guest')

// RESET BTN // 
const resetBtn = document.getElementById('reset-btn')

// standard values//
let homeNum = 0
let guestNum = 0


function render(){
  homeScore.textContent = homeNum
  guestScore.textContent = guestNum
}


// functions//
// home increment btns//

incrementOneHome.addEventListener('click', function(){
homeNum += 1
render()
})
incrementTwoHome.addEventListener('click', function(){
homeNum += 2
render()
})
incrementThreeHome.addEventListener('click', function(){
homeNum += 3
render()
})

// guest increment btns//
incrementOneGuest.addEventListener('click', function(){
  guestNum += 1
  render()
  })
incrementTwoGuest.addEventListener('click', function(){
  guestNum += 2
  render()
  })
incrementThreeGuest.addEventListener('click', function(){
  guestNum += 3
  render()
  })

  // RESET function//
resetBtn.addEventListener('click',function(){
  guestNum = 0
  homeNum = 0
  render()
})