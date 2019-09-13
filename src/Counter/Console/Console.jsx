import React from 'react';
import './../../App.css';
import style from './Console.module.css'

let Console = function (props) {

    let timerFunction = () => {
        debugger
            let intervalId;
            if (props.timerOn) {
                debugger
                intervalId = setInterval(props.increaseCount, props.timerSpeed)
            }
            if (!props.timerOn) {
                clearInterval(intervalId);
            }
    };
    let classForDisabled = () => props.reductionMode ? style.disabled : style.console;
    let start = () => {
        debugger
        props.startTimer();
        timerFunction();
    };
    return (
        <div>
            <div className={classForDisabled()}>
                <button disabled={props.reductionMode} onClick={props.increaseCount}>
                    +
                </button>
                <button disabled={props.reductionMode} onClick={props.resetCount}>
                  Reset
                </button>
                <button disabled={props.reductionMode} onClick={props.decreaseCount}>
                    -
                </button>
            </div>
            <div className={classForDisabled()}>
                <button disabled={props.reductionMode} onClick={props.decreaseSpeed}>
                  {  "<<="}
                </button>
                <span>{props.timerSpeed / 1000} s</span>
                <button disabled={props.reductionMode} onClick={props.increaseSpeed}>
                    =>>
                </button>
                {!props.timerOn && <button disabled={props.reductionMode} onClick={start}>
                    Start
                </button>}
                {props.timerOn && <button disabled={props.reductionMode} onClick={props.stopTimer}>
                    Stop
                </button>}
            </div>
        </div>
    )
};


export default Console;
