import React, { useState } from "react";
import Clasess from './Comments.module.css'
import Profile from '../../Images/profile.png'
import ReactQuill from "react-quill";
const Comments = () => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ovdje možete dodati logiku za spremanje komentara
    console.log("Unesen komentar:", comment);
    setComment("");
  };

  return (
      <div className={Clasess.commentsinput} onSubmit={handleSubmit}>
        <img  className={Clasess.portfolioImage} src={Profile} />
        <ReactQuill className={Clasess.TextEditor}  onChange={(value) => { console.log(value) }} />
      </div> 
  );
};

export default Comments;
