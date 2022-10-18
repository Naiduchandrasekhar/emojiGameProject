// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickStartGameAgain} = props

  const result =
    score === 12 ? (
      <h1 className="winLose">You Won</h1>
    ) : (
      <h1 className="winLose">You Lose</h1>
    )
  const srcImage =
    score === 12 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="logoImg"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="logoImg"
      />
    )

  const bestOrScore = score === 12 ? <p>Best Score</p> : <p>Score</p>

  const startGame = () => {
    onClickStartGameAgain()
  }
  return (
    <div className="cardContainer">
      <div className="scoreButtonContainer">
        {result}
        <h2 className="scoreHeader">{bestOrScore}</h2>
        <p className="showScore">{score}/12</p>
        <button type="button" className="buttons" onClick={startGame}>
          Play Again
        </button>
      </div>
      <div>{srcImage}</div>
    </div>
  )
}

export default WinOrLoseCard
