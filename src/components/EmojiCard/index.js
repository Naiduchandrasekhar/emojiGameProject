// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachOne, onClickEachEmoji} = props
  const {id} = eachOne

  const clickEmoji = () => {
    onClickEachEmoji(id)
  }

  return (
    <li className="card">
      <button type="button" onClick={clickEmoji} className="button">
        <img
          className="emojiPic"
          src={eachOne.emojiUrl}
          alt={eachOne.emojiName}
        />
      </button>
    </li>
  )
}

export default EmojiCard
