export const initialState = {
    facts: [],
    isLoading: false,
    error: null
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SET_FACTS:
            const {facts} = action.payload
            return {...state, facts}
        case ACTION_TYPES.SET_ERROR:
            const {error} = action.payload
            return {...state, error}
        case ACTION_TYPES.SET_ISLOADING:
            const {isLoading} = action.payload
            return {...state, isLoading}
        default:
            return state
    }
    
}

export const ACTION_TYPES = {
    SET_FACTS: "DOGS/SET_FACTS",
    SET_ERROR: "DOGS/SET_ERROR",
    SET_ISLOADING: "DOGS/IS_LOADING"
}

export const actions = {
    setFacts: (facts) => {
        return {
            type: ACTION_TYPES.SET_FACTS,
            payload: { facts }
        }
    },
    setError: (error) => {
        return {
            type: ACTION_TYPES.SET_ERROR,
            payload: {error}
        }
    },
    setIsLoading: (isLoading) =>{
        return {
            type: ACTION_TYPES.SET_ISLOADING,
            payload: {isLoading}
        }
    }
}