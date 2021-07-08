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
      else authString.push(`${authList[i]}, `);
    }
  }

  return (
    <div className="container book">
      {/* heart icon - heart is filled if book is favorited */}
      {
        props.liked ? 
          <button className="btn"><i className="bi bi-suit-heart-fill"></i></button> : 
          <button className="btn"><i className="bi bi-suit-heart"></i></button>
      }
      {/* thumbnail for each book */}
      <div className="thumbnail">
        <img src={props.thumbnail} height="300px"/>
        {/* <style backgroundImage={props.thumbnail}/> */}
      </div>
      {/* book title and author */}
      <h5>{props.title}</h5>
      <h6>{getAuthors(props.authors)}</h6>
    </div>
  )
}

export default Book;