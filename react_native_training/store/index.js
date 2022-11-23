import {configureStore} from "@reduxjs/toolkit"
import * as counter from "./counter.reducer"

const store = configureStore({
    reducer: {
        counter: counter.reducer
    }
})

export default store