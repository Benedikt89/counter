import React from 'react';
import Number from "./Count-number/Number";


let Terminal = function (props) {

    let countDisplay = props.numbers.map( n =>
        <Number number={n} />
    );

    return (
        <div className="terminal">
            {countDisplay}
        </div>
    )
};


export default Terminal;
