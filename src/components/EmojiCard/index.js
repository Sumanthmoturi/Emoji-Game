// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card-item">
      <button
        type="button"
        className="emoji-card-btn"
        onClick={onClickEmojiCard}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-icon-img" />
      </button>
    </li>
  )
}

export default EmojiCard
