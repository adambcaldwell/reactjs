import React from "react";

/**
 * @component functional
 * @name CommentDetail
 * @description Comment detail component
 * @param {Object}  props         - properties of a comment
 * @param {image}   props.avatar  - the author's avatar
 * @param {string}  props.author  - the author of the comment
 * @param {date}    props.time    - the time the comment was posted
 * @param {string}  props.comment - the comment
 */
const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
