import React from 'react';
import './../../App.css';
import style from './Console.module.css'

let Console = function (props) {

    let classForDisabled = () => props.reductionMode ? style.disabled : style.console;

    let check = () => props.count >= props.maxCount ? props.stopTimerThunk(): '';
    check();
    return (
        <div>
            <div className={classForDisabled()}>
                <button disabled={props.reductionMode} onClick={props.increaseCount}>
                    +
                </button>
                <button disabled={props.reductionMode} onClick={()=>{props.resetCount(); props.stopTimerThunk();}}>
                  Reset
                </button>
                <button disabled={props.reductionMode} onClick={props.decreaseCount}>
                    -
                </button>
            </div>
            <div className={classForDisabled()}>
                <button disabled={props.reductionMode} onClick={()=>{props.increaseSpeed(); props.stopTimerThunk();}}>
                  {  "<<="}
                </button>
                <span>{props.timerSpeed / 1000} s</span>
                <button disabled={props.reductionMode} onClick={()=>{props.decreaseSpeed(); props.stopTimerThunk();}}>
                    =>>
                </button>
                {!props.timerOn && <button disabled={props.reductionMode} onClick={props.runTimerThunk}>
                    Start
                </button>}
                {props.timerOn && <button disabled={props.reductionMode} onClick={props.stopTimerThunk}>
                    Stop
                </button>}
            </div>
        </div>
    )
};


export default Console;
