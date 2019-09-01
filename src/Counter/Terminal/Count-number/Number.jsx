import React from 'react';
import style from './Number.module.css'

let Number = function (props) {


    return (
        <span className={style.number}>
            {props.number}
        </span>
    )
};


export default Number;
