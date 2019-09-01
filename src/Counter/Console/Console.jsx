import React from 'react';
import './../../App.css';
import style from './Console.module.css'

let Console = function (props) {


    return (
        <div className={style.console}>
            <button className={style.btn} onClick={props.increaseCount}>
                +
            </button>
            <button className={style.btn} onClick={props.decreaseCount}>
                -
            </button>
            <button className={style.btn} onClick={() => {props.startTimer('start')}}>
                Start
            </button>
            <button className={style.btn} onClick={() => {props.startTimer('stop')}}>
                Stop
            </button>
        </div>
    )
};


export default Console;
