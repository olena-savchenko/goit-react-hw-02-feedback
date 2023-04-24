import { Component } from 'react';
// import { FeedbackBox } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / totalFeedback);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <ul>
          {options.map(option => {
            return (
              <li key={option}>
                <button
                  type="button"
                  name={option}
                  onClick={this.leaveFeedback}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>

        <p>Statistics</p>
        <ul>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
          <li>
            <p>Total: {total && total}</p>
          </li>
          <li>
            <p>Positive feedback: {total && positiveFeedback}</p>
          </li>
        </ul>
      </div>
    );
  }
}
