import React, {useState} from 'react'
import video from "../data/video.js";
import CommentCard from './CommentCard.js';

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [searchVal, setSearchVal] = useState("")
  const [comments, setComments] = useState(video.comments)

  const handleUpvote = () => {
    setUpvotes((upvotes) => (upvotes + 1))
  }

  const handleDownvote = () => {
    if (downvotes > 0) {
      setDownvotes(downvotes - 1)
    }
  }

  const getDeletedCommentId = (id) => {
    console.log(id)
    let updatedComments =  comments.filter((comment) => {
      return comment.id !== id
    })
    setComments(updatedComments)
  }

  const filterCommentsBySearch = () => {
    return comments.filter((commentObj) => {
      return commentObj.user.toLowerCase().includes(searchVal.toLowerCase())
    })
  }

  const renderCommentCards = () => {
    return filterCommentsBySearch().map((comment) => {
      return <CommentCard {...comment} getDeletedCommentId={getDeletedCommentId}/>
    })
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Updated {video.createdAt}</p>
      <button onClick={handleUpvote}>{upvotes}👍</button>
      <button onClick={handleDownvote}>{downvotes}👎</button>
      <hr/>
      <p>
        <strong>{comments.length} {comments.length === 1 ? "Comment" : "Comments"}</strong>
      </p>
      <input
          type="text"
          className="input"
          id="searchInput"
          onChange={(evt) => {setSearchVal(evt.target.value)}}
          value={searchVal}
          placeholder="search comments..."
      />
      {renderCommentCards()}
    </div>
  );
}

export default App;