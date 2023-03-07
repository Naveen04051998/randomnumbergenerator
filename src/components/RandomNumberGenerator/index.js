import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChangeSearchInput = event => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Random Number</h1>
        <p className="para">
          Generate a random number in the range of 0 to 100
        </p>
        <div>
          <button className="button" onClick={this.onChangeSearchInput}>
            Generate
          </button>
        </div>
        <p className="count-value">{count}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
