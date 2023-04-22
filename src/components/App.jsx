import { Component } from 'react';
import { FeedbackBox } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    // console.log(c);
    // const targetValue = event.target;
    this.setState(prevState => {
      console.log('Значення prevState: ', prevState);
      console.log('event.target.name: ', [event.target]);
      console.log(
        'prevState[event.target.] + 1: ',
        prevState[event.target] + 1
      );
      return { [event.target]: prevState[event.target] + 1 };
    });
  };

  render() {
    return (
      <FeedbackBox>
        <p>Please leave feedback</p>
        <button
          type="button"
          name={this.state.good}
          onClick={this.handleIncrement}
        >
          Good
        </button>
        <button
          type="button"
          name={this.state.neutral}
          onClick={this.handleIncrement}
        >
          Neutral
        </button>
        <button
          type="button"
          name={this.state.bad}
          onClick={this.handleIncrement}
        >
          Bad
        </button>
        <p>Statistics</p>
        <div>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
        </div>
      </FeedbackBox>
    );
  }
}
