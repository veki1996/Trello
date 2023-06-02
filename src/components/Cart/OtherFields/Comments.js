import React, { useState } from "react";
import Clasess from './Comments.module.css'
import Profile from '../../Images/profile.png'
import ReactQuill from "react-quill";
const Comments = () => {
  const [comment, setComment] = useState("");
  const [showHideEditor, setShowHideEditor]=useState(false)
  const handleChange = (event) => {
    setComment(event);
  };

  const handleSubmit = () => {
   
    console.log(comment)
    setComment("");
    setShowHideEditor(false)
  };

  return (
      <div className={Clasess.commentsinput} >
       <img  className={Clasess.portfolioImage} src={Profile} />
        { !showHideEditor&&<input onClick={()=>{setShowHideEditor(true)}} className={Clasess.InputToHide} placeholder="type a comment"/>}
        <div>
       {showHideEditor &&  <ReactQuill className={Clasess.TextEditor}  onChange={handleChange} />}
       {showHideEditor && <button className={Clasess.CommentBtn} onClick={handleSubmit}>Save</button>}
       </div>
      </div> 
  );
};

export default Comments;
