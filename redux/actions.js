
// define actions types and their payloads (define operations on the states)
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'ICREASE_AGE';



export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
}


export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
}

export const increaseAge = age => dispatch => {
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    });
}