import { createSlice } from "@reduxjs/toolkit"

const istate = { isLoggedIn: false, name: "Guest", email: null, usertype: null, id: null }
const authslice = createSlice({
    name: "auth",
    initialState: istate,
    reducers: {
        login(state, action)
        {
            state.isLoggedIn = true
            state.name = action.payload.name
            state.email = action.payload.email
            state.usertype = action.payload.usertype
            state.id = action.payload._id
        },
        LogOut(state, action)
        {
            state.isLoggedIn = false
            state.name = "Guest"
            state.email = null
            state.usertype = null
            state.id = null
        }
    }
})

export const { login, LogOut } = authslice.actions;
export default authslice.reducer

// authslice is a slice in a store  and login , logout are its actions method
// store can have multiple reducer but there is only one store
// u can make multiple js files of reducers like authslice and store it in a store

// In Redux Toolkit:
// ✔️ authslice is the slice
// ✔️ authslice.reducer is the reducer
// ✔️ login and LogOut are action creators, not reducers
// ✔️ The functions inside reducers:{} (login, LogOut) are called case reducers

// authslice.reducer is the main reducer
// login() and LogOut() inside reducers:{} are “case reducers”
// login and LogOut (exported) are action creators

// The main reducer is:
// ✅ authslice.reducer
// authslice = A slice (collection of reducers + actions + initial state)