//initialising action
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

//initialising state
const initialState = {
    count: 3,
    timerOn: false,
    maxCount: 500,
    minCount: -999,
    timerSpeed: 500,
    reductionMode: false,
    alertDisplay: false,
};

//reducer
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
            if (state.minCount >= 0){
                return {
                    ...state,
                    count: state.minCount,
                    alertDisplay: false,
                };
            } else if (state.maxCount <= 0){
                return {
                    ...state,
                    count: state.maxCount,
                    alertDisplay: false,
                };
            } else {
                return {
                    ...state,
                    count: 0,
                    alertDisplay: false,
                };
            }
        case SET_COUNT_MIN_BORDER:
            if (action.count >= state.count || action.count >= state.maxCount) {
                return {
                    ...state,
                    minCount: state.count,
                    alertDisplay: true,
                };
            } else {
                return {
                    ...state,
                    minCount: action.count < -998 ? -999 : action.count,
                };
            }
        case SET_COUNT_MAX_BORDER:
            if (action.count <= state.count || action.count <= state.minCount) {
                return {
                    ...state,
                    maxCount: action.count > 9998? 9999 : action.count,
                    alertDisplay: true,
                };
            } else {
                return {
                    ...state,
                    maxCount: action.count > 9998? 9999 : action.count,
                };
            }
        case START_TIMER:
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
            };
        case DECREASE_SPEED:
            newSpeed = state.timerSpeed / 2;
            return {
                ...state,
                timerSpeed: newSpeed
            };
        case INCREASE_COUNT:
            newCount = state.count + 1;
            if (newCount <= state.maxCount && 9999) {
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

export default counterReducer;

//action creators
export const increaseCountAC  = () => ({type: INCREASE_COUNT});
export const decreaseCountAC  = () => ({type: DECREASE_COUNT});
export const changeModeAC  = (boolean) =>
    ({type: CHANGE_MODE, boolean: boolean,});
export const resetCountAC  = () => ({type: RESET_COUNT});
export const increaseSpeedAC  = () => ({type: INCREASE_SPEED});
export const decreaseSpeedAC  = () => ({type: DECREASE_SPEED});
export const setMinBorderOfCountAC  = (text) =>
    ({type: SET_COUNT_MIN_BORDER, count: text,});
export const setMaxBorderOfCountAC  = (text) =>
    ({type: SET_COUNT_MAX_BORDER, count: text,});
export const startTimerAC = () => ({type: START_TIMER});
export const stopTimerAC = () => ({type: STOP_TIMER});


// THUNK CREATORS

let interval;

export const runTimerThunkCreator = () => (dispatch, getState) => {

    const speed = getState().counterReducer.timerSpeed;
    dispatch(startTimerAC());
    interval = setInterval(()=>{
        dispatch(increaseCountAC())
    },speed)
};
export const stopTimerThunkCreator = () => (dispatch) => {
    dispatch(stopTimerAC());
    clearInterval(interval)
};