// Write your code here

import {Component} from 'react'

import './index.css'

class Random extends Component {
  state = {count: 0}

  onGenerate = () => {
    this.setState(() => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1>Random Number</h1>
        <p>Generate a random Number in the range of 0 to 100</p>
        <button type="button" onClick={this.onGenerate}>
          Generate
        </button>
        <p>{count}</p>
      </div>
    )
  }
}

export default Random
