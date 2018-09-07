import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import '../css/postItem.scss';

export const PostItem = (props) => {
  let t = moment(parseInt(props.time)).format();
  let today = moment().format('x'),
      diff = today - props.time,
      day = 86400000;
 /* let  binaryData = [];
       binaryData.push(props.file);

  let imgurl = URL.createObjectURL(new Blob(binaryData));    
      imgurl = imgurl.substr(5);
   */
  let imgUrl = props.img;   
      console.log(imgUrl);
  
  return ( 
    <div>
      <Link className="post-item" to={`/edit/${props.id}`}>
        <div>
          <div className="post-title">
             <h1>{props.title}</h1>
             {diff < day && <p className="badge">new!</p>}
          </div>   
          <div className="post-content">
            <div className="post-image">
                <img src={imgUrl} />
            </div>
            <div className="post-text">
               <p>{t}</p>
               <p>{props.text}</p>
            </div> 
         </div>
        </div>  
      </Link>
      <LikeButton />        
    </div>
    
  );
}
