import React from 'react';

const Styles = {
  cardStyles: {
    width: '18rem'
  },
  imgStyles: {
    width: '15rem',
    height: '15rem'
  }
}

const Cards = props => {

    return (
      <div key={props.id} className="card hvr-grow mt-3 mb-3 mx-auto rounded border border-secondary shadow p-3 mb-5 bg-white rounded" style={Styles.cardStyles}>
        <img onClick={() => props.selectImage(props.id)} style={Styles.imgStyles} src={props.image} className="card-img-top" alt={props.name}></img>
      </div>
    )}

export default Cards
