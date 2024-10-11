import React, { useState } from 'react';

const CommentsSection = () => {
  const comments = [{_id:101,text:"hello" ,user:{name:"yash"} ,replies:[]} ,{_id:101,text:"hello",user:{name:"kajal"},replies:[]}]
  const [newComment, setNewComment] = useState('');
  const [reply, setReply] = useState({});


  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <div>
        {comments.map(comment => (
          <div key={comment._id} className="comment">
            <p><strong>{comment.user.name}</strong>: {comment.text}</p>
            {comment.replies.map(reply => (
              <div key={reply._id} className="reply">
                <p><strong>{reply.user.name}</strong>: {reply.text}</p>
              </div>
            ))}
            <div className="reply-box">
              <input
                type="text"
                value={reply[comment._id] || ''}
                onChange={(e) => setReply({ ...reply, [comment._id]: e.target.value })}
                placeholder="Reply to this comment"
              />
              <button>Reply</button>
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
        <button>Comment</button>
      </div>
    </div>
  );
};

export default CommentsSection;
