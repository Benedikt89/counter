import React from 'react';
import SettingsBar from "./SettingsBar";
import {
    changeModeAC,
    setMaxBorderOfCountAC, setMinBorderOfCountAC, stopTimerThunkCreator
} from "../../Redux/CounterReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        minCount: state.counterReducer.minCount,
        maxCount: state.counterReducer.maxCount,
        reductionMode: state.counterReducer.reductionMode,
        count: state.counterReducer.count,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setMaxBorderOfCount: (numbers) => {dispatch(setMaxBorderOfCountAC(numbers))},
        setMinBorderOfCount: (numbers) => {dispatch(setMinBorderOfCountAC(numbers))},
        redactionModeChanger: (text) => {dispatch(changeModeAC(text))},
        stopTimerThunk: ()=> {dispatch(stopTimerThunkCreator())}
    }
};
const SettingsBarContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsBar);

export default SettingsBarContainer;
