import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    address: '456 Oak Avenue, Townsville, CA, USA',
    phone: 5557890123,
    email: 'emily.johnson@emai.com',
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        changeAddress: (state, action) => {
            state.address = action.payload;
        },
        changePhone: (state, action) => {
            state.phone = action.payload;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        },
    },
});
export const { changeAddress, changePhone, changeEmail } = contactSlice.actions;

export default contactSlice.reducer;
