import React from 'react'
import '../../../src/App.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import IosShareIcon from '@mui/icons-material/IosShare';
function Card({ profileImage, postImage, postDescription,userName }) {
  return (
    <body>
      <div className="container">
        <div className="post">
          <div className="user-info">
            <img style={{ width: '100px', height: '50px' }} src={profileImage} alt="User Profile" className="profile-pic" />
            <div className="user-details">
              <span className="user-name">{userName}</span>
              <span className="post-time">Monday at 11:00 AM</span>
            </div>
          </div>
          <p className="post-content">{postDescription}</p>
         <div className='new'> <img src={postImage}  alt="Facebook Image" class="post-image" /> </div>
          <div className="post-footer">
            <div className="reactions">
              <span className="like-icon">👍</span>
              <span className="love-icon">❤️</span>
              <span className="wow-icon">😮</span>
              <span className="reaction-text">Lorem ipsum and 291 others</span>
            </div>
            <div className="comments">55 comments</div>
          </div>
          <div  className="post-actions">
            <button className="like-btn"><ThumbUpIcon /> Like</button>
            <button className="comment-btn"><CommentIcon /> Comment</button>
            <button className="share-btn"><IosShareIcon /> Share</button>
          </div>
        </div>
      </div>
    </body>


  )
}

export default Card