import React from "react";
import { Button } from "reactstrap";

class Choices extends React.Component {
  handleClick = (e) => {
    this.props.generateProblem();
    this.props.calculateScore(e.target.value);
  };

  render() {
    return (
      <button
        className="answerButton"
        onClick={this.handleClick}
        value={this.props.item}
      >
        {this.props.item}
      </button>
    );
  }
}
export default Choices;
