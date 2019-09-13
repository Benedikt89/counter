import React from 'react';
import './../../App.css';
import Console from "./Console";
import {
    decreaseCountAC, decreaseSpeedAC,
    increaseCountAC, increaseSpeedAC,
    resetCountAC, runTimerThunkCreator,
    stopTimerThunkCreator,
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
        increaseCount: ()=>{dispatch(increaseCountAC())},
        decreaseCount: ()=>{dispatch(decreaseCountAC())},
        increaseSpeed: ()=>{dispatch(increaseSpeedAC())},
        decreaseSpeed: ()=>{dispatch(decreaseSpeedAC())},
        resetCount: ()=>{dispatch(resetCountAC())},
        runTimerThunk: ()=> {dispatch(runTimerThunkCreator())},
        stopTimerThunk: ()=> {dispatch(stopTimerThunkCreator())}
    }
};

const ConsoleContainer = connect(mapStateToProps, mapDispatchToProps)(Console);

export default ConsoleContainer;
