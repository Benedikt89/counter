import React from 'react';
import style from './SettingsBar.module.css'


class SettingsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        countSetter: 'min',
        reductionNumber: 1,
        inputOnNumbers: this.props.minCount,
    };

    onInputChange = (e) => {
        this.setState({inputOnNumbers: e.target.value})
    };

    onSetClick = () => {
        if (this.state.countSetter === 'min') {
            this.props.setMaxBorderOfCount(this.state.inputOnNumbers);
        } else if (this.state.countSetter === 'max'){
            this.props.setMinBorderOfCount(this.state.inputOnNumbers);
        }
        this.setState({reductionNumber: 1});
        this.props.redactionModeChanger(false);
    };

    redactionModeChanger = (e) => {
        this.props.redactionModeChanger(e.target.value)
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
                    {this.state.countSetter === 'max' && <button
                        disabled={!this.props.reductionMode}
                        className={style.btn} onClick={this.props.countSetterChange}
                    >max</button>}
                    {this.state.countSetter === 'min' && <button
                        disabled={!this.props.reductionMode}
                        className={style.btn} onClick={this.props.countSetterChange}
                    >min</button>}
                </div>
            </div>
        )
    };
}

export default SettingsBar;
