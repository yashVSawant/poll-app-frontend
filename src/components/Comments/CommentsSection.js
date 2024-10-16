import React, { useState ,useEffect} from 'react';

import useApi from '../../service/api';
import Loader from '../Layouts/Loader';

import Comment from './Comment';
import classes from "./Comment.module.css"

const CommentsSection = (props) => {
  const api = useApi();
  const [newComment, setNewComment] = useState('');
  const [comments ,setComments] = useState([]);
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
      const response = await api.post(`/api/comment/${props.pollId}` ,{text:newComment});
      const postedComment = response.data.comment;
      setComments([...comments ,postedComment]);
      setNewComment('');
    } catch (err) {
      console.log(err)
      alert('something went wrong!')
    }
  }

  if(isLoading)return<Loader/>

  return (
    <div className={classes["comment-section"]}>
      <h3>Comments</h3>
      <div>
        {comments.map(c => (
          <Comment key={c._id} comment={c}/>
        ))}
      </div>
      
      <div>
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
