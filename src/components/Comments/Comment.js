import React ,{useState} from "react";

import Reply from "./Reply";
import Loader from "../Layouts/Loader";

import useApi from "../../service/api";
import { Button, Col, Row } from "react-bootstrap";
import classes from "./Comment.module.css"

const Comment = (props)=>{
  const api = useApi()
    const {comment} = props;
    const [reply, setReply] = useState([]);
    const [text ,setText] = useState("")
    const [viewReply ,setViewReply] = useState(null);
    const [replyComment ,setReplyComment] = useState(false)
    const [isLoading ,setIsLoading] = useState(false);

    const replyClickHandler  = (id)=>{
        return async()=>{
            setIsLoading(true)
            try {
              console.log(id)
              const response = await api.post(`/api/comment/${id}/reply`,{text:text});
              const replyObj = response.data.reply;
              setReply([...reply , replyObj]);
              setIsLoading(false)
            } catch (err) {
              setIsLoading(false)
              console.log(err)
            }
          }
    }
    const closeReplyInputField = (e)=>{
      
      if(e.target.className == ""){
        setReplyComment(false)
      }
    }

    if(isLoading)return <Loader/>

    return (
        <Row className={classes.comment} onClick={closeReplyInputField}>
            <Col><p><strong>{comment.userId.name}</strong>: {comment.text}</p></Col>
            <Col><Button onClick={()=>{setReplyComment((prevValue)=>!prevValue)}}> {replyComment ?"cancel" :"reply"}</Button></Col>
            {comment.replies.length > 0&& <Col><button onClick={()=>{setViewReply(viewReply ?null :comment._id)}} className="btn">{viewReply ?"hide reply":"view reply"}</button></Col>}
            {viewReply && <Reply commentId={comment._id}/>}
            {replyComment && <div className="reply-box">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Reply to this comment"
              />
              <Button onClick={replyClickHandler(comment._id)}>Reply</Button>
            </div>
            }
          </Row>
    )
}

export default Comment;