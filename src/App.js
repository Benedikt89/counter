import React from 'react';
import './App.css';
import Terminal from "./Counter/Terminal/Terminal";
import Console from "./Counter/Console/Console";
import SettingsBar from "./Counter/SettingsBar/SettingsBar";

class App extends React.Component {

    state = {
        numbers: [
            0,
            0,
            0,
            0,
        ],
        count: 0,
        timerOn: false,
        maxCount: 500,
        minCount: -999,
        timerSpeed: 500,
        reductionMode: false,
        alertDisplay: false,
    };

    increaseCount = () => {
        let newCount = this.state.count + 1;
        if (newCount <= this.state.maxCount) {
            this.showCount(newCount);
            this.setState({alertDisplay: false})
        } else {
            this.setState({alertDisplay: true})
        }
    };
    decreaseCount = () => {
        let newCount = this.state.count - 1;
        if (newCount >= this.state.minCount) {
            this.showCount(newCount);
            this.setState({alertDisplay: false});
        } else {
            this.setState({alertDisplay: true});
        }
    };

    changeMode = (number) => {
        this.setState({reductionMode: number});
        console.log(this.state.reductionMode)
    };
    resetCount = () => {
        this.showCount(0);
    };

    increaseSpeed = () => {
        let newSpeed = this.state.timerSpeed / 2;
        this.setState({timerSpeed: newSpeed});
        this.startTimer('stop');
    };
    decreaseSpeed = () => {
        let newSpeed = this.state.timerSpeed * 2;
        this.setState({timerSpeed: newSpeed, timerOn: true});
        this.startTimer('stop');
    };

    setBorderOfCount = (count, dir) => {
        if ( dir === 'min') {
            this.setState({minCount: count});
        } else if (dir === 'max') {
            this.setState({maxCount: count});
        }
    };
    showCount = (newCount) => {
        let newNumbers = [];
        let totalCount = Array.from(newCount.toString()).map(n=>n);
            for (let i = 0; i < totalCount.length; i++) {
                newNumbers.push(totalCount[i]);
            }
        if (totalCount.length <= 3) {
            newNumbers.unshift('0');
        }
        if (totalCount.length <= 2) {
            newNumbers.unshift('0');
        }
        if (totalCount.length <= 1) {
            newNumbers.unshift('0');
        }
        this.setState({numbers: newNumbers, count: newCount});
    };

    startTimer = (action) => {
        if (action === 'start') {
            this.counterIntervalId = setInterval(this.increaseCount, this.state.timerSpeed);
            this.setState({timerOn: true})
        } else if (action === 'stop') {
        clearInterval(this.counterIntervalId);
        this.setState({timerOn: false});
        }
    };

    render = () => {

        return (
            <div className="App">
                <header className="App-header">
                    <span><h1>Counter by Benedikt</h1></span>
                </header>

                <Terminal
                    alertDisplay={this.state.alertDisplay}
                    numbers={this.state.numbers}
                    reductionMode={this.state.reductionMode}
                />

                <Console
                    reductionMode={this.state.reductionMode}
                    increaseCount={this.increaseCount}
                    decreaseCount={this.decreaseCount}
                    startTimer={this.startTimer}
                    timerOn={this.state.timerOn}
                    increaseSpeed={this.increaseSpeed}
                    timerSpeed={this.state.timerSpeed}
                    decreaseSpeed={this.decreaseSpeed}
                    resetCount={this.resetCount}
                />

                <SettingsBar
                    changeMode={this.changeMode}
                    reductionMode={this.state.reductionMode}
                    setBorderOfCount={this.setBorderOfCount}
                    minCount={this.state.minCount}
                    maxCount={this.state.maxCount}

                />
            </div>
        )
    };
}

export default App;
