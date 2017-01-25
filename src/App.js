import React, {Component} from 'react';
import friends from 'friends.json';
import FriendsList from 'FriendsList';
import 'css/app.css';
import Dialog from 'Dialog';

class App extends Component {
  state = {
    dialogOpen: false,
    scrollPosition: 0
  }

  element;

  onWindowScroll = event => {
    this.setState({scrollPosition: event.srcElement.scrollTop});
  }

  componentDidMount() {
    this.element.addEventListener("scroll", this.onWindowScroll);
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
          <div>Scroll: {scrollPosition}</div>
          <hr />
          <button onClick={this.openDialog}> Open dialog</button>
          <FriendsList friends={friends}/>
          {dialogOpen && <Dialog closeDialog={this.closeDialog}/>}
        </div>
      </div>
    )
  }
}

export default App;
