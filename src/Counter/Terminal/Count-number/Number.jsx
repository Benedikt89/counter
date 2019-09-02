import React from 'react';
import style from './Number.module.css'

let Number = function (props) {

let classForReductionMode = () => {
    if (props.reductionMode === true) {
        return style.redMode
    } else if (props.alertDisplay === true) {
        return style.alertDisplay
    } else {
        return style.number
    }
};

    return (
        <span className={classForReductionMode()}>
            {props.number}
        </span>
    )
};


export default Number;
