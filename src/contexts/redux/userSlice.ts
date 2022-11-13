import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { login } = user.actions;
export default user.reducer;