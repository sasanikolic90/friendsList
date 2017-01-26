import React, {Component} from 'react';
import friends from 'friends.json';
import FriendsList from 'FriendsList';
import 'css/app.css';
import Dialog from 'Dialog';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  state = {
    dialogOpen: false,
    scrollPosition: 0
  }

  element;

  onWindowScroll = event => {
    this.setState({scrollPosition: this.element.scrollTop});
  }

  componentDidMount() {
    this.element.addEventListener("scroll", this.onWindowScroll);
  }

  componentWillUnmount() {
    this.element.removeEventListener("scroll", this.onWindowScroll);
  }

  openDialog = () => {
    this.setState({dialogOpen: true});
  }

  closeDialog = () => {
    this.setState({dialogOpen: false});
  }

  render () {
    const {dialogOpen, scrollPosition} = this.state;

    return (
      <div className="app" ref={element => this.element = element}>
        <div className="content">
          Friend List
          <div className="counter">Scroll: {scrollPosition}</div>
          <hr />
          <button onClick={this.openDialog}> Open dialog</button>
          <FriendsList friends={friends}/>

          <ReactCSSTransitionGroup
          transitionName="fadein"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {dialogOpen && <Dialog closeDialog={this.closeDialog}/>}
        </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default App;
