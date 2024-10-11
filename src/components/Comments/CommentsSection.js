import React, { useState ,useEffect} from 'react';

import useApi from '../../service/api';
import Loader from '../Layouts/Loader';

const CommentsSection = (props) => {
  const api = useApi()
  const [newComment, setNewComment] = useState('');
  const [comments ,setComments] = useState([])
  const [reply, setReply] = useState({});
  const [isLoading ,setIsLoading] = useState(false)

  useEffect(()=>{
    const apiCall = async()=>{
      setIsLoading(true)
      try {
        const response = await api.get(`/api/comment/${props.pollId}`);
        const commentsArr = response.data.comments;
        console.log(response.data)
        setComments(commentsArr);
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
      }
    }
    apiCall();
  },[])

  const addCommentHandler = async()=>{
    try {
      await api.post(`/api/comment/${props.pollId}` ,{text:newComment});
      setNewComment('')
    } catch (err) {
      console.log(err)
      alert('something went wrong!')
    }
  }
  const addReplyHandler = async()=>{
    try {
      await api.post(`/api/comment/reply${props.pollId}`,{text:reply});
      setNewComment('');
      setComments([...comments])
    } catch (err) {
      alert('something went wrong!')
    }
  }

  if(isLoading)return<Loader/>

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <div>
        {comments.map(comment => (
          <div key={comment._id} className="comment">
            <p><strong>{comment.userId.name}</strong>: {comment.text}</p>
            {comment.replies.map(reply => (
              <div key={reply._id} className="reply">
                <p><strong>{reply.userId.name}</strong>: {reply.text}</p>
              </div>
            ))}
            <div className="reply-box">
              <input
                type="text"
                value={reply[comment._id] || ''}
                onChange={(e) => setReply({ ...reply, [comment._id]: e.target.value })}
                placeholder="Reply to this comment"
              />
              <button onClick={addReplyHandler}>Reply</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="add-comment">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={addCommentHandler}>Comment</button>
      </div>
    </div>
  );
};

export default CommentsSection;
