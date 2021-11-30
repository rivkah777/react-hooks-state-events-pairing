function CommentCard(props) {

    const handleRemoveComment = () => {
        props.getDeletedCommentId(props.id)
    }

    return (
        <div className="CommentCard">
            <p><strong>{props.user}</strong></p>
            <p>{props.comment}</p>
            <button onClick={handleRemoveComment}>x</button>
        </div>
    )
}

export default CommentCard