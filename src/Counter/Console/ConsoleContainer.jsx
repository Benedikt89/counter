import React from 'react';
import './../../App.css';
import Console from "./Console";
import {
    decreaseCountAction, decreaseSpeedAction,
    increaseCountAction,
    increaseSpeedAction, resetCountAction,
    startTimerAction, stopTimerAction,
} from "../../Redux/CounterReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        reductionMode: state.counterReducer.reductionMode,
        timerOn: state.counterReducer.timerOn,
        timerSpeed: state.counterReducer.timerSpeed,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        increaseCount: ()=>{dispatch(increaseCountAction())},
        decreaseCount: ()=>{dispatch(decreaseCountAction())},
        startTimer: ()=>{dispatch(startTimerAction())},
        stopTimer: ()=>{dispatch(stopTimerAction())},
        increaseSpeed: ()=>{dispatch(increaseSpeedAction())},
        decreaseSpeed: ()=>{dispatch(decreaseSpeedAction())},
        resetCount: ()=>{dispatch(resetCountAction())},
    }
};

const ConsoleContainer = connect(mapStateToProps, mapDispatchToProps)(Console);

export default ConsoleContainer;
