import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Emily Johnson',
    age: 23,
    gender: 'F',
    dob: new Date('2000-05-15'),
    nationality: 'Canadian',
};

const personalSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeAge: (state, action) => {
            state.age = action.payload;
        },
        changeGender: (state, action) => {
            state.gender = action.payload;
        },
        changeDOB: (state, action) => {
            state.dob = action.payload;
        },
        changeNationality: (state, action) => {
            state.nationality = action.payload;
        },
    },
});

export const {
    changeName,
    changeAge,
    changeGender,
    changeDOB,
    changeNationality,
} = personalSlice.actions;

export default personalSlice.reducer;
