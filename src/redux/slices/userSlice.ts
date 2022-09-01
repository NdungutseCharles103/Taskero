import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        error: null,
        token: null,
    },
    reducers: {
        setUser: (state: any, action: any) => {
            state.user = action.payload;
        }
    }
} as any);

export const { setUser } = userSlice.actions;
export default userSlice.reducer;