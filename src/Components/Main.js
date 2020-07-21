import React from "react";
import Choices from "./Choices";
import Timer from "./Timer";

class Main extends React.Component {
  state = {
    array: [],
    score: 0,
    answer: null,
    q1: null,
    q2: null,
    showTime: false,
  };

  generate = (choices) => {
    let one = choices;
    console.log(one);
    var ctr = one.length,
      temp,
      index;

    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = one[ctr];
      one[ctr] = one[index];
      one[index] = temp;
    }

    this.setState({
      array: one,
    });
  };

  generateRandomNumber = (max) => {
    return 1 + Math.floor(Math.random() * max);
  };

  generateNumber = (max) => {
    return (
      (1 + Math.round(max * Math.random())) *
      (1 + Math.round(max * Math.random()))
    );
  };
  generateProblem = () => {
    const a = this.generateRandomNumber(9);
    const b = this.generateRandomNumber(9 - a);
    this.setState({
      q1: a,
      q2: b,
    });
    this.getChoices(a, b);
    this.setState({
      showTime: true,
    });
  };

  getChoices = (a, b) => {
    const result = a * b;
    const choices = [result];
    this.setState({
      answer: result,
    });

    while (choices.length < 4) {
      const choice = this.generateNumber(9);
      if (!choices.includes(choice)) {
        choices.push(choice);
      }
    }
    this.generate(choices);
  };

  calculateScore = (val) => {
    if (val == this.state.answer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };

  render() {
    const one = this.state.array.map((item) => {
      return (
        <Choices
          item={item}
          generateProblem={this.generateProblem}
          array={this.state.array}
          calculateScore={this.calculateScore}
        />
      );
    });

    const containerStyle = {
      height: "450px",
      width: "650px",
      border: "1px solid",
      margin: "auto",
      padding: "30px",
      marginTop: "80px",
    };

    const flex = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };

    const questionStyle = {
      height: "140px",
      width: "450px",
      border: "1px solid",
      lineHeight: "140px",
      fontSize: "60px",
    };

    const answerStyle = {
      height: "120px",
      width: "450px",
      // border: "1px solid",
    };

    const buttonStyle = {
      height: "70px",
      width: "400px",
      // border: "1px solid",
      marginTop: "30px",
    };

    const displayScore = {
      height: "40px",
      width: "90px",
      // border: "1px solid",
      fontSize: "17px",
      marginLeft: "-20px",
      textAlign: "left",
      lineHeight: "40px",
    };

    const button = {
      padding: "5px",
      height: "50px",
      width: "100px",
    };

    return (
      <div style={containerStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid",
          }}
        >
          {this.state.showTime ? (
            <div style={displayScore}>Score: {this.state.score} </div>
          ) : null}

          <Timer showTime={this.state.showTime} />
        </div>

        <div style={flex}>
          <div style={questionStyle}>
            {this.state.q1} X {this.state.q2}
          </div>
          <h3>Click on the right answer</h3>
          <div style={answerStyle}>{one}</div>
          <div style={buttonStyle}>
            <button onClick={this.generateProblem} style={button}>
              Start
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
