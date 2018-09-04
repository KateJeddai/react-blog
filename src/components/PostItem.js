import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const PostItem = (props) => {
  let t = moment(parseInt(props.time)).format();
  
  return (
    <Link to={`/edit/${props.id}`}>
      <h1>{props.title}</h1>
      <p>{t}</p>
      <p>{props.text}</p>
    </Link>
  );
}
