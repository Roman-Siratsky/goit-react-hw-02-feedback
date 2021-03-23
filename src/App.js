// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Component } from 'react';
import Statistic from './components/Statistic'
import Buttons from './components/Buttons'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleVote = (e) => {
    switch (e.currentTarget.textContent) {
      case 'Good':
        this.setState(prevState => ({ good: prevState.good + 1 }))
        break
      case 'Neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
        break
      case 'Bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }))
        break
      default:
        return
    }
  }
  // handleIncrement = () => {
  //   this.setState(prevState => ({good: prevState.good + 1}))
  // }

  // handleDecrement = () => {
  //   this.setState(prevState => ({bad: prevState.bad + 1}))
  // }

  // handleNeutral = () => {
  //   this.setState(prevState => ({neutral: prevState.neutral + 1}))
  // }

  totalCounter() {
    const {good, neutral, bad} = this.state
    return good + neutral + bad;
  }

  positiveFeedbackCounter() {
    const { good } = this.state
    switch (this.totalCounter()) {
      case 0:
        return 0;
      default:
        return Math.ceil((good / this.totalCounter()) * 100)
    }
  }

  render() {
    return (
      <div>
        <h2>Please Leave Feedback</h2>
        <Buttons
          handleVote={this.handleVote}
        />
        <Statistic
          totalCounter={this.totalCounter.bind(this)}
          positiveFeedbackCounter={this.positiveFeedbackCounter.bind(this)}
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
        />
      </div>
    )
  }
}

export default App;
