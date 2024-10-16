import React, { useState ,useEffect} from 'react';

import useApi from '../../service/api';
import Loader from '../Layouts/Loader';

import Comment from './Comment';

const Reply = (props) => {
  const api = useApi();
  const {commentId} = props;
  const [comments ,setComments] = useState([]);
  const [isLoading ,setIsLoading] = useState(false)

  useEffect(()=>{
    const apiCall = async()=>{
      setIsLoading(true)
      try {
        const response = await api.get(`/api/comment/${commentId}/reply`);
        const commentsArr = response.data.replies;
        setComments(commentsArr);
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        console.log(err)
      }
    }
    apiCall();
  },[])


  if(isLoading)return<Loader/>

  return (
    <React.Fragment>
    {comments.map(c => (
          <Comment key={c._id} comment={c}/>
        ))}
    </React.Fragment>
    )
};

export default Reply;
