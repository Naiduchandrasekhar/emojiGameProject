// Write your code here.
import './index.css'

const Navbar = props => {
  const {topScore, score, isGameEnd} = props

  const navScoreResult =
    isGameEnd || score === 12 ? (
      ''
    ) : (
      <div className="scoreContainer">
        <p className="scoreHeading">Score: {score}</p>
        <p className="topScoreHeading">Top Score: {topScore}</p>
      </div>
    )

  return (
    <div className="bgContainer">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="emojiHeading">Emoji Game</h1>
      </div>
      <div className="scoreContainer">{navScoreResult}</div>
    </div>
  )
}

export default Navbar
