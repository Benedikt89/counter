import React from 'react';
import Terminal from "./Terminal";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        count: state.counterReducer.count,
        reductionMode: state.counterReducer.reductionMode,
        alertDisplay: state.counterReducer.alertDisplay,
    }
};

const TerminalContainer = connect(mapStateToProps, {})(Terminal);

export default TerminalContainer;
