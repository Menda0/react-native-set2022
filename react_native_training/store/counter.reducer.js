export const initialState = {
    value: 20
}

// reducer functions executes every time an action is dispatch
// dispatch(actions.incrementCounter())
export const reducer = (state=initialState, action) => {
    console.log("Action executed with type:", action.type)

    switch(action.type){
        case ACTION_TYPES.INCREMENT_COUNTER:
            return {...state, value: state.value + 1}
        case ACTION_TYPES.DECREMENT_COUNTER:
            return {...state, value: state.value - 1}
        default:
            return state
    }   
}

export const ACTION_TYPES = {
    INCREMENT_COUNTER: "COUNTER/INCREMENT_COUNTER",
    DECREMENT_COUNTER: "COUNTER/DECREMENT_COUNTER"
}

export const actions = {
    incrementCounter: () => {
        return {
            type: ACTION_TYPES.INCREMENT_COUNTER
        }
    },
    decrementCounter: () => {
        return {
            type: ACTION_TYPES.DECREMENT_COUNTER
        }
    }
}