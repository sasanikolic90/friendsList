import React from 'react';

class Toggle extends Component{
  state = {
    isActive: false
  }

toggleActive = () => {
  const currentValue = !this.state.isActive;
  this.setState({isActive: currentValue});
}

render() {
  const {isActive} = this.state;
  return (
      <div>
        <button onClick={this.toggleActive}>
          Toggle Active
        </button>
        <div>
          { isActive ? 'Active' : `Not active`}
        </div>
      </div>
    )
}
}

export default Toggle;
