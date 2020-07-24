import React from "react";
import Choices from "./Choices";
import "./style.css";
import Result from "./Result";
class Main extends React.Component {
  state = {
    array: [],
    score: 0,
    answer: null,
    q1: null,
    q2: null,
    time: 20,
    showTime: false,
    enable: true,
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
  };

  buttonClick = () => {
    this.stop = setInterval(() => {
      if (this.state.time <= 1) {
        clearInterval(this.stop);
      }
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));
    }, 1000);

    this.generateProblem();
    this.setState({
      showTime: true,
      enable: false,
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

  restartGame = (score, bool, time) => {
    this.setState({
      score: score,
      enable: bool,
      time: time,
    });
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

    return (
      <div className="containerStyle">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {this.state.showTime ? (
            <div className="displayScore">Score: {this.state.score} </div>
          ) : null}
          {this.state.showTime ? (
            <div className="displayScore">
              Remaining time: {this.state.time} secs
            </div>
          ) : null}
        </div>

        <div className="flex">
          <div className="questionStyle">
            {this.state.q1} X {this.state.q2}
          </div>

          <p className="para">Click on the right answer</p>

          <div className="answerStyle">{one}</div>

          {this.state.enable ? (
            <div className="buttonStyle">
              <button onClick={this.buttonClick} className="button">
                Start the game
              </button>
            </div>
          ) : null}

          {this.state.time <= 0 ? (
            <Result
              score={this.state.score}
              restartGame={this.restartGame}
              buttonClick={this.buttonClick}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Main;
