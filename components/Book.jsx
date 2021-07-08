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
        {/* modal opens upon thumbnail click */}
        <button className="btn" data-toggle="modal" data-target={`#${props.id}-modal`} id={`${props.id}-button`} href="#book-modal">
          <img src={props.thumbnail} height="300px"/>
        </button>
        {/* <style backgroundImage={props.thumbnail}/> */}
      </div>
      {/* book title and author */}
      <h5>{props.title}</h5>
      <h6>{getAuthors(props.authors)}</h6>
      {/* <button className="btn" data-toggle="modal" data-target="#" */}
      {/* modal */} 
      <div className="modal fade" id={`${props.id}-modal`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{props.title}</h4>
              {/* <button type="button" className="btn btn-default close" data-dismiss="modal">&times;</button> */}
            </div>
            <div className="modal-body">
              <p>some text here</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
      {/* <script>
        $(document).ready(function(){
          $("#modal-button").click(function(){
            $("#book-modal").modal({
              show:true,
              closeOnEscape:true,
            });
          })
        });
      </script> */}
    </div>
  )
}

export default Book;