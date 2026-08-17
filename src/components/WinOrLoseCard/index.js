// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props

  const gameStatusText = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const gameImgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-lose-card-container">
      <div className="card-text-section">
        <h1 className="game-status-heading">{gameStatusText}</h1>
        <p className="score-label-text">{scoreLabel}</p>
        <p className="final-score-text">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="card-image-section">
        <img src={gameImgUrl} alt="win or lose" className="status-banner-img" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
