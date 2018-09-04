import React from 'react';
import moment from 'moment';

export const PostItem = (props) => {
  //console.log(moment(1536063114011).format());
  let t = moment(parseInt(props.time)).format();
  
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{t}</p>
      <p>{props.text}</p>
    </div>
  );
}
