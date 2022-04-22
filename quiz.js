const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const answersCorrect = ['A', 'A', 'A', 'A']

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  let score = 0
  userAnswers.forEach((userAnswer, index) => {

    if (userAnswer ===  answersCorrect[index]) {
      score += 25
    }
  })
 
  scrollTo(0, 0)

  finalResult.classList.remove('d-none')

  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }
    finalResult.querySelector('span').textContent = `${counter} %`
    counter++
  }, 15)
})
