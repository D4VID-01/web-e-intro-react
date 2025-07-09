


export const Tweet = ({tweet, onLike }) => {
  return (
    <div>
        <p>{tweet.text}</p>
        <button onClick={() => onLike(tweet.id)}>♥️ {tweet.likes}</button>
    </div>
  )
}
