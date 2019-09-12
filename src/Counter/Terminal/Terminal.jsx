import React from 'react';
import Number from "./Count-number/Number";
import style from './Terminal.module.css'


class Terminal extends React.Component {

    countDisplay() {
        let newNumbers = Array(4).fill(0);
        let totalCount = Array.from((this.props.count).toString()).reverse();
        newNumbers.forEach((value, index, array) => {
            let v = totalCount[index];
            array[index] = v ? v : 0;
        });
        return newNumbers.reverse();
    }

    render = () => {
        let display = this.countDisplay().map(n =>
            <Number number={n} reductionMode={this.props.reductionMode} alertDisplay={this.props.alertDisplay}/>
        );
        return (
            <div className={style.terminal}>
                {display}
            </div>
        )
    }
}


export default Terminal;
