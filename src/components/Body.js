import React from 'react'
import Cards from './Cards'
import Header from './Header'
import images from '../images.json'

const styles = {
  BodyStyles: {
    height: "14rem"
  },
  titleStyle:  {
    position: 'relative',
    top: "75px"
  },
    pStyle: {
    position: 'relative',
    top: '85px'
  },
  CardBoxStyle:{
    margin: 'auto'
  }
};

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}



class Body extends React.Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    message: 'Click a picture to get started',
    clickedArray : []
  };

  componentDidMount() {
    this.setState({images: shuffle(images)});
  };

  wrongGuess = () => {
    this.setState({message : 'Wrong guess!!'})
    this.setState({score: 0})
    this.setState({clickedArray: []})
    this.setState({images: shuffle(images)})
  };

  rightGuess = () => {
    this.setState({message : 'Correct!'})
    this.scoreEval()
    this.setState({images: shuffle(images)})
  }

  winGame = () => {
    this.setState({message: 'Congratulations you won! Click to play again'})
    this.setState({score: 0})
    this.setState({clickedArray: []})
  }

  scoreEval = () => {
    this.setState((prevState, props) => ({
    score: prevState.score + 1
    }));
    if (this.state.score === 9) {
      this.winGame()
    }
    else if (this.state.score >= this.state.topScore) {
      this.setState((prevState, props) => ({
      topScore: prevState.topScore + 1
      }));
    }
  }

  selectImage = (id) => {
    this.setState({ clickedArray: [...this.state.clickedArray, id] })
    if (this.state.clickedArray.includes(id)) {
      this.wrongGuess();
    }else {
      this.rightGuess();
    }
  }

  render(){
    return (
      <>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div style={styles.BodyStyles} className="bg-dark">
          <div className="col">
            <div style={styles.titleStyle} className="row align-items mt-3">
              <h1 className="text-light m-auto">It's Game Time!</h1>
            </div>
            <div style={styles.pStyle} className="row alight-items">
              <p className="text-light m-auto">Click an image to get started but dont click the same picture twice!</p>
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
              selectImage={this.selectImage}
              />
          ))}
          </div>
        </div>
      </>
    )
  }
};

export default Body
