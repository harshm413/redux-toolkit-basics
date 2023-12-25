import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hobbies: ['Reading', 'Sports'],
    favMusicGenres: ['Electronic', 'Classical'],
    favMovieGenres: ['Comedy', 'Romance'],
};

const interestSlice = createSlice({
    name: 'interest',
    initialState,
    reducers: {
        changeHobbies: (state, action) => {
            if (action.payload.checked) {
                state.hobbies.push(action.payload.value);
            } else {
                let newArray = state.hobbies.filter(
                    (hobby) => hobby !== action.payload.value
                );
                state.hobbies = [...newArray];
            }
        },
        changeFavMusicGenres: (state, action) => {
            if (action.payload.checked) {
                state.favMusicGenres.push(action.payload.value);
            } else {
                let newArray = state.favMusicGenres.filter(
                    (favMusicGenre) => favMusicGenre !== action.payload.value
                );
                state.favMusicGenres = [...newArray];
            }
        },
        changeFavMovieGenres: (state, action) => {
            if (action.payload.checked) {
                state.favMovieGenres.push(action.payload.value);
            } else {
                let newArray = state.favMovieGenres.filter(
                    (favMovieGenre) => favMovieGenre !== action.payload.value
                );
                state.favMovieGenres = [...newArray];
            }
        },
    },
});
export const {
    changeHobbies,
    changeFavMusicGenres,
    changeFavMovieGenres,
} = interestSlice.actions;

export default interestSlice.reducer;
