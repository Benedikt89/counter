import React from 'react';
import SettingsBar from "./SettingsBar";
import {setMaxBorderOfCountAction, changeModeAction, setMinBorderOfCountAction} from "../../Redux/CounterReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        minCount: state.counterReducer.minCount,
        maxCount: state.counterReducer.maxCount,
        reductionMode: state.counterReducer.reductionMode,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setMaxBorderOfCount: (numbers) => {dispatch(setMaxBorderOfCountAction(numbers))},
        setMinBorderOfCount: (numbers) => {dispatch(setMinBorderOfCountAction(numbers))},
        redactionModeChanger: (text) => {dispatch(changeModeAction(text))},
    }
};
const SettingsBarContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsBar);

export default SettingsBarContainer;
