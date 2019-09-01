import React from 'react';
import './App.css';
import Terminal from "./Counter/Terminal/Terminal";
import Console from "./Counter/Console/Console";

class App extends React.Component {

  state = {
    numbers: [
      0,
      0,
      0,
      0,
    ],
    count: 122,
  };

  increaseCount = () => {
    let newCount = this.state.count + 1;
    this.showCount(newCount);
  };

  decreaseCount = () => {
    let newCount = this.state.count - 1;
    this.showCount(newCount);
  };

  showCount = (newCount) => {
    let newNumbers = [];
    let totalCount = Array.from(newCount.toString()).map(Number);
    for (let i = 0; i < 3; i++) {
      if (totalCount.length <= 3) {
        newNumbers[0] = 0;
      } else if (totalCount.length <= 2) {
        newNumbers[1] = 0;
      } else if (totalCount.length <= 1) {
        newNumbers[2] = 0;
      }
      newNumbers.push(totalCount[i]);
    }
    this.setState({numbers: newNumbers, count: newCount});
  };


  startTimer = (btnId) => {

      let counterIntervalId = setInterval(this.increaseCount, 500);

    if (btnId === 'stop') {
      clearInterval(counterIntervalId);
      console.log('stop');
    }
};


    render = () => {
        return (
            <div className="App">
                <header className="App-header">
                   <span><h1>Counter by Benedikt</h1></span>
                </header>

              <Terminal numbers={this.state.numbers}/>
              <Console
                  increaseCount={this.increaseCount}
                  decreaseCount={this.decreaseCount}
                  startTimer={this.startTimer}
              />
            </div>
        )
    };
}

export default App;
