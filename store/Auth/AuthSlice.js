import { createSlice } from "@reduxjs/toolkit";
import { isObj, isServer } from "../../helpers/checkType";

let initialState = {
    accessToken: null,
    loggedIn: false,
    loginError: null,
    signUpError: null,
    user: {
        id: null,
        isOnboarded: null,
        isSeller: null,
        username: null,
        email: null,
    },
};

if (!isServer() && isObj(JSON.parse(localStorage.getItem("auth")))) {
    initialState = {
        ...initialState,
        ...JSON.parse(localStorage.getItem("auth")),
    };
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken(state, action) {
            state.accessToken = action.payload;
            state.loggedIn = !!action.payload;
            localStorage.setItem("auth", state);
        },
    },
    extraReducers: {},
});

export const { setAccessToken } = AuthSlice.actions;

export default AuthSlice.reducer;
