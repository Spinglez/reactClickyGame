import React from 'react'

const Styles = {
  cardStyles: {
    width: '18rem'
  },
  imgStyles: {
    width: '15rem',
    height: '15rem'
  }
}

function Cards(props) {
    return (
      <div className="card mt-3 mb-3 mx-auto rounded" style={Styles.cardStyles}>
        <img style={Styles.imgStyles} src={props.image} className="card-img-top" alt={props.name}></img>
      </div>
    )}

export default Cards
