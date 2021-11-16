
// define actions types and their payloads (define operations on the states)
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'ICREASE_AGE';
export const GET_CITIES = 'GET_CITIES';

const api_url = 'https://mocki.io/v1/5cf1b94d-6b82-459c-93f1-c1106e0b441b';

export const getCities = () => {
    try {
        return async dispatch => {
            const result = await fetch(api_url, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            const json = await result.json();
            if (json){
                dispatch({
                    type: GET_CITIES,
                    payload: json
                });
            } else {
                console.log('Unable to fetch');
            }
        }
    } catch (error) {
        console.log(error);
    }
}



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