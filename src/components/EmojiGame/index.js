/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard/index'
import Navbar from '../NavBar/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojiArray: [],
    isGameEnd: false,
  }

  onClickEachEmoji = id => {
    const {emojiArray} = this.state
    const isPresent = emojiArray.includes(id)

    if (isPresent) {
      this.setState(prevState => ({
        isGameEnd: !prevState.isGameEnd,
      }))
    } else {
      this.setState(prevState => ({
        emojiArray: [...prevState.emojiArray, id],
        score: prevState.score + 1,
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickStartGameAgain = () => {
    const {score, topScore} = this.state
    let resultScore
    if (topScore > score) {
      resultScore = topScore
    } else {
      resultScore = score
    }
    this.setState({
      topScore: resultScore,
      emojiArray: [],
      isGameEnd: false,
      score: 0,
    })
  }

  render() {
    const {score, topScore, isGameEnd} = this.state
    const {emojisList} = this.props
    this.shuffledEmojisList()

    const renderGame =
      isGameEnd || score === 12 ? (
        <WinOrLoseCard
          score={score}
          onClickStartGameAgain={this.onClickStartGameAgain}
        />
      ) : (
        <ul className="emojiContainer">
          {emojisList.map(eachOne => (
            <EmojiCard
              key={eachOne.id}
              eachOne={eachOne}
              onClickEachEmoji={this.onClickEachEmoji}
            />
          ))}
        </ul>
      )

    return (
      <div className="main-container">
        <Navbar score={score} topScore={topScore} isGameEnd={isGameEnd} />
        <div className="bg-container">{renderGame}</div>
      </div>
    )
  }
}

export default EmojiGame
