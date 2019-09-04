import React from 'react';
import style from './SettingsBar.module.css'


class SettingsBar extends React.Component {
    constructor(props) {
        super(props);
        this.changeModeRef = React.createRef();
        this.inputNumbers = React.createRef();
    }

    state = {
        countSetter: 'min',
        reductionNumber: 1,
        inputOnNumbers: this.props.minCount,
    };


    onInputChange = () => {
       let newText = this.inputNumbers.current.value;
       this.setState({inputOnNumbers: newText})
    };
    onSetClick = () => {
        this.props.setBorderOfCount(this.state.inputOnNumbers, this.state.countSetter);
        this.setState({reductionNumber: 1});
        this.props.changeMode(false)
    };
    countSetter = () => {
        this.state.countSetter === 'min' ?
            this.setState({countSetter: 'max', inputOnNumbers: this.props.maxCount}) :
            this.setState({countSetter: 'min', inputOnNumbers: this.props.minCount})
    };
    redactionModeChanger = () => {
        this.setState({reductionNumber: this.changeModeRef.current.value});
        this.changeModeRef.current.value <= 0 ?
            this.props.changeMode(true): this.props.changeMode(false)
    };


    render = () => {
        let classForReductionMode = () =>
            this.props.reductionMode ? style.reductionMode : style.console;

        return (
            <div className={classForReductionMode()}>
                <input className={style.slider}
                       ref={this.changeModeRef}
                       onChange={this.redactionModeChanger}
                       type="range"  min={0} max={1} value={this.state.reductionNumber}
                />
                <div>
                    <input  disabled={!this.props.reductionMode}
                            value={this.state.inputOnNumbers}
                            onChange={this.onInputChange}
                            className={style.text} type="number" ref={this.inputNumbers} />
                    <button disabled={!this.props.reductionMode}
                            className={style.btn} onClick={this.onSetClick}>
                        set
                    </button>
                </div>
                <div>
                    {this.state.countSetter === 'max' && <button
                        disabled={!this.props.reductionMode}
                        className={style.btn} onClick={this.countSetter}
                    >max</button>}
                    {this.state.countSetter === 'min' && <button
                        disabled={!this.props.reductionMode}
                        className={style.btn} onClick={this.countSetter}
                    >min</button>}
                </div>
            </div>
        )
    };
}

export default SettingsBar;
