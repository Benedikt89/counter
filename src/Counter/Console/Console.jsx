import React from 'react';
import './../../App.css';
import style from './Console.module.css'

let Console = function (props) {

    let classForDisabled = () => props.reductionMode ? style.disabled : style.console;

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
                {!props.timerOn && <button disabled={props.reductionMode} onClick={() => {props.startTimer('start')}}>
                    Start
                </button>}
                {props.timerOn && <button disabled={props.reductionMode} onClick={() => {props.startTimer('stop')}}>
                    Stop
                </button>}
            </div>
        </div>
    )
};


export default Console;
