
const initialState = {
    count: 123,
    timerOn: false,
    maxCount: 500,
    minCount: -999,
    timerSpeed: 1000,
    reductionMode: false,
    alertDisplay: false,
};

let counterReducer = (state = initialState, action) => {
    let newSpeed;
    let newCount;

    switch (action.type) {
        case DECREASE_COUNT :
            let decreasedCount = state.count - 1;
            if (decreasedCount >= state.minCount) {
                return {
                    ...state,
                    count: decreasedCount,
                    alertDisplay: false
                };
            } else {
                return {
                    ...state,
                    alertDisplay: true
                };
            }
        case CHANGE_MODE:
            return {
                ...state,
                reductionMode: action.boolean,
            };
        case RESET_COUNT:
            return {
                ...state,
                count: 0,
            };
        case SET_COUNT_MIN_BORDER:
            return {
                ...state,
                minCount: action.count
            };
        case SET_COUNT_MAX_BORDER:
            return {
                ...state,
                maxCount: action.count
            };
        case START_TIMER:
            debugger
            return {
                ...state,
                timerOn: true
            };
        case STOP_TIMER:
            return {
                ...state,
                timerOn: false
            };
        case INCREASE_SPEED:
            newSpeed = state.timerSpeed * 2;
            return {
                ...state,
                timerSpeed: newSpeed,
                timerOn: false
            };
        case DECREASE_SPEED:
            newSpeed = state.timerSpeed / 2;
            return {
                ...state,
                timerSpeed: newSpeed,
                timerOn: false
            };
        case INCREASE_COUNT:
            newCount = state.count + 1;
            if (newCount <= state.maxCount) {
                return {
                    ...state,
                    count: newCount,
                    alertDisplay: false
                };
            } else {
                return {
                    ...state,
                    alertDisplay: true,
                    timerOn: false,
                };
            }
        default:
            return state;
    }
};

const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT= 'DECREASE_COUNT';
const CHANGE_MODE = 'CHANGE_MODE';
const RESET_COUNT = 'RESET_COUNT';
const INCREASE_SPEED = 'INCREASE_SPEED';
const DECREASE_SPEED = 'DECREASE_SPEED';
const SET_COUNT_MIN_BORDER = 'SET_COUNT_MIN_BORDER';
const SET_COUNT_MAX_BORDER = 'SET_COUNT_MAX_BORDER';
const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';


export default counterReducer;

export const increaseCountAction  = () => ({type: INCREASE_COUNT});
export const decreaseCountAction  = () => ({type: DECREASE_COUNT});
export const changeModeAction  = (boolean) =>
    ({type: CHANGE_MODE, boolean: boolean,});
export const resetCountAction  = () => ({type: RESET_COUNT});
export const increaseSpeedAction  = () => ({type: INCREASE_SPEED});
export const decreaseSpeedAction  = () => ({type: DECREASE_SPEED});
export const setMinBorderOfCountAction  = (text) =>
    ({type: SET_COUNT_MIN_BORDER, text: text,});
export const setMaxBorderOfCountAction  = (text) =>
    ({type: SET_COUNT_MAX_BORDER, text: text,});
export const startTimerAction = () => ({type: START_TIMER});
export const stopTimerAction = () => ({type: STOP_TIMER});
