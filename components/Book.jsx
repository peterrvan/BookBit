import React, { useState } from 'react';
import styles from '../prettify.scss';

const Book = props => {
  console.log('book props', props);
  const getAuthors = (authList) => {
    if (authList.length === 1) return `${authList[0]}`;
    if (authList.length === 2) return `${authList[0]} & ${authList[1]}`;

    let authString = '';
    for (let i = 0; i < authList.length; i++) {
      if (i === authList.length - 1) authString.push(`& ${authList[i]}`)
      authString.push(`${authList[i]}, `);
    }
  }

  return (
    <div className="container book">
      <div>
        <img src={props.thumbnail} />
      </div>
      <h4>{props.title}</h4>
      <h5>{getAuthors(props.authors)}</h5>
      {/* thumbnail for each book */}
      Book
      {/* heart icon */}
      <i className="bi bi-suit-heart"></i>
      <i className="bi bi-suit-heart-fill"></i>
    </div>
  )
}

export default Book;