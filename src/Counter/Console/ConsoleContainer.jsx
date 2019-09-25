import React from 'react';
import './../../App.css';
import Console from "./Console";
import {
    decreaseCount, decreaseSpeed,
    increaseCount, increaseSpeed,
    resetCount, runTimerThunk,
    stopTimerThunk,
} from "../../Redux/CounterReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        reductionMode: state.counterReducer.reductionMode,
        timerOn: state.counterReducer.timerOn,
        timerSpeed: state.counterReducer.timerSpeed,
    }
};

const ConsoleContainer = connect(mapStateToProps, {
    increaseCount, decreaseCount, increaseSpeed, decreaseSpeed, resetCount, runTimerThunk, stopTimerThunk
})(Console);

export default ConsoleContainer;
