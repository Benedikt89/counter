import React from 'react';
import style from './SettingsBar.module.css'


class SettingsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        countSetter: 'MIN',
        reductionNumber: 0,
        inputOnNumbers: this.props.minCount,
        alert: false,
        alertMessage: '',
    };

    onInputChange = (e) => {
        let newCount = e.target.value;
        if (this.state.countSetter === 'MIN') {
            newCount >= -999 && newCount <= this.props.maxCount ?
                this.setState({inputOnNumbers: newCount, alert: false}) :
                this.setState({inputOnNumbers: newCount, alert: true, alertMessage: 'count not less -999 or max count'});
        }else if (this.state.countSetter === 'MAX'){
            newCount <= 9999 && newCount >= this.props.minCount ?
                this.setState({inputOnNumbers: newCount, alert: false}) :
                this.setState({inputOnNumbers: newCount, alert: true, alertMessage: 'count not more 9999 or max count'});
        }
    };
    onSetClick = () => {
        if (this.state.countSetter === 'MIN' && !this.state.alert) {
            this.props.setMinBorderOfCount(this.state.inputOnNumbers);
        } else if (this.state.countSetter === 'MAX' && !this.state.alert){
            this.props.setMaxBorderOfCount(this.state.inputOnNumbers)
        } else {
            this.setState({alert: true})
        }
    };

    countSetterChange = () => {
        if (this.state.countSetter === 'MIN') {
            this.setState({countSetter: 'MAX', inputOnNumbers: this.props.maxCount})
        } else {this.setState({countSetter: 'MIN', inputOnNumbers: this.props.minCount})}
    };
    redactionModeChanger = (e) => {
        if (e.target.value < 1 && !this.state.alert) {
            this.props.redactionModeChanger(false);
            this.setState({reductionNumber: 0})
        }else if (e.target.value >= 1) {
            this.props.redactionModeChanger(true);
            this.props.stopTimerThunk();
            this.setState({reductionNumber: 1})
        } else {
            this.setState({alert: true})
        }
    };


    render = () => {
        let classForReductionMode = () =>
            this.props.reductionMode ? style.reductionMode : style.console;
        let classForAlert = () => this.state.alert ? style.alert : '';

        return (
            <div className={classForReductionMode()} onBlur={this.redactionModeChanger}>
                <input className={style.slider}
                       onChange={this.redactionModeChanger}
                       type="range" min={0} max={1} value={this.state.reductionNumber}
                />
                <div className={classForAlert()}>
                    {this.state.alert&&<p><span>{this.state.alertMessage}</span></p>}
                    <p><span>min = {this.props.minCount} </span></p>
                    <p><span>max = {this.props.maxCount} </span></p>
                    <input disabled={!this.props.reductionMode}
                           value={this.state.inputOnNumbers}
                           onChange={this.onInputChange}
                           className={style.text} type="number"/>
                    <button disabled={!this.props.reductionMode||this.state.alert}
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
