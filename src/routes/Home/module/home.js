import update from 'react-addons-update';
import constants from "./actionConstants";
/* Const */
const {
    SET_SIZE,
    SET_SIZERESULT
     } = constants;
/***************** ACTIONS **********************/

export function setSize(result) {
    return (dispatch) => {
        dispatch({
            type: SET_SIZE,
            payload: result
        });
    };
}

/**************** HANDLERS ************************/

function handleSetSize(state, action) {
    return update(state, {
        size: {
            $set: action.payload
        }
    })
}
function handleSizeResult(state,action){
    return update(state,{
        sizeresult:{
            $set:action.payload
        }
    })
}
const ACTION_HANDLERS = {
    SET_SIZE: handleSetSize,
    SET_SIZERESULT:handleSizeResult
};
const initialState = { size: {} };

export function HomeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}