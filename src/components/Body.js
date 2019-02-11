import React from 'react'
import Cards from './Cards'
import images from '../images.json'

const styles = {
  BodyStyles: {
    height: "10rem"
  },
  CardBoxStyle:{
    margin: 'auto'
  }
};


class Body extends React.Component {
  state = {
    images
  }

  render(){
    return (
      <>
        <div style={styles.BodyStyles} className="bg-dark">
          <div className="col">
            <div className="row align-items mt-3">
              <h1 className="text-light m-auto">Here's some sample content</h1>
            </div>
          </div>
        </div>
        <div className="container bg-warning mt-3">
          <div style={styles.CardBoxStyle} className="row">
          {this.state.images.map(image =>(
            <Cards
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              />
          ))}
          </div>
        </div>
      </>
    )
  }
};

// const Body = (props) => {
//   return (
//     <>
//       <div style={styles.BodyStyles} className="bg-dark">
//         <div className="row">
//           <div className="col mt-3">
//             <h1 className="text-light">Here's some sample content</h1>
//           </div>
//         </div>
//       </div>
//       <div className="container bg-warning mt-3">
//         <div className="row">
//         {this.state.images.map(image =>(
//           <Cards
//             id={image.id}
//             key={image.id}
//             image={image.image}
//             />
//         ))}
//         </div>
//       </div>
//     </>
//   )
// }


export default Body
