import React from "react";

class Timer extends React.Component {
  state = {
    time: 20,
  };
  render() {
    return (
      <div>
        {this.props.showTime ? (
          <div>Remaining time: {this.state.time} secs</div>
        ) : null}
      </div>
    );
  }
}
export default Timer;
