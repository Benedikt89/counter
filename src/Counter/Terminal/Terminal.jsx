import React from 'react';
import Number from "./Count-number/Number";
import style from './Terminal.module.css'


let Terminal = function (props) {

    let countDisplay = props.numbers.map( n =>
        <Number number={n} reductionMode={props.reductionMode} alertDisplay={props.alertDisplay}/>
    );

    return (
        <div className={style.terminal}>
            {countDisplay}
        </div>
    )
};


export default Terminal;
