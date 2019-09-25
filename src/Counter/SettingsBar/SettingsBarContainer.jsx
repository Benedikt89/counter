import React from 'react';
import SettingsBar from "./SettingsBar";
import {
    changeMode,
    setMaxBorderOfCount, setMinBorderOfCount, stopTimerThunk
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

const SettingsBarContainer = connect(mapStateToProps, {
    changeMode, setMaxBorderOfCount, setMinBorderOfCount, stopTimerThunk
})(SettingsBar);

export default SettingsBarContainer;
