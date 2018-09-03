import React from 'react';

export const PostItem = (props) => (
    <div>
      <h1>{props.title}</h1>
      <p>{props.time}</p>
      <p>{props.text}</p>
    </div>
)