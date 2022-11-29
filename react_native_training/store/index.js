import {configureStore} from "@reduxjs/toolkit"
import * as counter from "./counter.reducer"
import * as dogs from "./dogs.reducer"

const store = configureStore({
    reducer: {
        counter: counter.reducer,
        dogs: dogs.reducer
    }
})

export default store