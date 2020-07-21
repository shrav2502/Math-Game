import React from "react";

class Choices extends React.Component {
  handleClick = (e) => {
    this.props.generateProblem();
    this.props.calculateScore(e.target.value);
  };

  render() {
    const buttonStyles = {
      height: "90px",
      width: "110px",
      padding: "5px",
      borderRadius: "6px",
      cursor: "pointer",
      // border: "1px solid #999",
      fontSize: "20px",
      marginTop: "10px",
    };
    return (
      <button
        onClick={this.handleClick}
        value={this.props.item}
        style={buttonStyles}
      >
        {this.props.item}
      </button>
    );
  }
}
export default Choices;
