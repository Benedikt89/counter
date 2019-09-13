import React from 'react';
import style from './SettingsBar.module.css'
import {stopTimerThunkCreator} from "../../Redux/CounterReducer";


class SettingsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        countSetter: 'MIN',
        reductionNumber: 0,
        inputOnNumbers: this.props.minCount,
    };

    onInputChange = (e) => {
        this.setState({inputOnNumbers: e.target.value})
    };

    onSetClick = () => {
        if (this.state.countSetter === 'MIN') {
            this.props.setMinBorderOfCount(this.state.inputOnNumbers);
        } else if (this.state.countSetter === 'MAX'){
            this.props.setMaxBorderOfCount(this.state.inputOnNumbers);
        }
        this.setState({reductionNumber: 0});
        this.props.redactionModeChanger(false);
    };

    countSetterChange = () => {
        if (this.state.countSetter === 'MIN') {
            this.setState({countSetter: 'MAX', inputOnNumbers: this.props.maxCount})
        } else {this.setState({countSetter: 'MIN', inputOnNumbers: this.props.minCount})}
    };
    redactionModeChanger = (e) => {
        if (e.target.value <= 1) {
            this.props.redactionModeChanger(false)
            this.setState({reductionNumber: 0})
        } if (e.target.value >= 1) {
            this.props.redactionModeChanger(true)
            this.props.stopTimerThunk();
            this.setState({reductionNumber: 1})
        }
    };


    render = () => {
        let classForReductionMode = () =>
            this.props.reductionMode ? style.reductionMode : style.console;

        return (
            <div className={classForReductionMode()}>
                <input className={style.slider}
                       onChange={this.redactionModeChanger}
                       type="range" min={0} max={1} value={this.state.reductionNumber}
                />
                <div>
                    <input disabled={!this.props.reductionMode}
                           value={this.state.inputOnNumbers}
                           onChange={this.onInputChange}
                           className={style.text} type="number"/>
                    <button disabled={!this.props.reductionMode}
                            className={style.btn} onClick={this.onSetClick}>
                        set
                    </button>
                </div>
                <div>
                    {this.state.countSetter === 'MAX' && <button
                        disabled={!this.props.reductionMode}
                        className={style.btn} onClick={this.countSetterChange}
                    >max</button>}
                    {this.state.countSetter === 'MIN' && <button
                        disabled={!this.props.reductionMode}
                        className={style.btn} onClick={this.countSetterChange}
                    >min</button>}
                </div>
            </div>
        )
    };
}

export default SettingsBar;
