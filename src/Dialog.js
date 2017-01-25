import React, {Component} from 'react';

class Dialog extends Component {

  state = {
    timeOpened: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({timeOpened: this.state.timeOpened + 1})
    }, 1000);
  }

  componentWillUnmount() {
    this.setState({timeOpened: 0});
    clearInterval(this.interval);
  }

  render() {
    const {closeDialog} = this.props;
    const {timeOpened} = this.state;

    return (
      <div className="dialog">
      <span>I am a dialog!</span> <br />
      <span>Opened time: {timeOpened}</span> <br />
      <button onClick={closeDialog}>Close the dialog!</button>
      </div>
    )
  }
}

export default Dialog;
