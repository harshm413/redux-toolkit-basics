import { useSelector, useDispatch } from 'react-redux';
import {
    changeHobbies,
    changeFavMusicGenres,
    changeFavMovieGenres,
} from '../features/interestSlice.js';

export function InterestInfo() {
    const state = useSelector((state) => state.root.interest);
    const dispatch = useDispatch();

    return (
        <div className="form-card">
            <h1>Interest Information Form</h1>
            <form>
                <div>
                    Hobbies:
                    <div className="checkbox-inline">
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.hobbies.includes('Reading')}
                                onChange={(e) =>
                                    dispatch(
                                        changeHobbies({
                                            checked: e.target.checked,
                                            value: 'Reading',
                                        })
                                    )
                                }
                            />
                            <div>Reading</div>
                        </div>
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.hobbies.includes('Cooking')}
                                onChange={(e) =>
                                    dispatch(
                                        changeHobbies({
                                            checked: e.target.checked,
                                            value: 'Cooking',
                                        })
                                    )
                                }
                            />
                            Cooking
                        </div>
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.hobbies.includes('Gaming')}
                                onChange={(e) =>
                                    dispatch(
                                        changeHobbies({
                                            checked: e.target.checked,
                                            value: 'Gaming',
                                        })
                                    )
                                }
                            />
                            Gaming
                        </div>
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.hobbies.includes('Sports')}
                                onChange={(e) =>
                                    dispatch(
                                        changeHobbies({
                                            checked: e.target.checked,
                                            value: 'Sports',
                                        })
                                    )
                                }
                            />
                            Sports
                        </div>
                    </div>
                </div>
                <div>
                    Favorite Music Genres:
                    <div className="checkbox-inline">
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.favMusicGenres.includes('Rock')}
                                onChange={(e) =>
                                    dispatch(
                                        changeFavMusicGenres({
                                            checked: e.target.checked,
                                            value: 'Rock',
                                        })
                                    )
                                }
                            />
                            Rock
                        </div>
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.favMusicGenres.includes(
                                    'Electronic'
                                )}
                                onChange={(e) =>
                                    dispatch(
                                        changeFavMusicGenres({
                                            checked: e.target.checked,
                                            value: 'Electronic',
                                        })
                                    )
                                }
                            />
                            <div>Electronic</div>
                        </div>
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.favMusicGenres.includes('Jazz')}
                                onChange={(e) =>
                                    dispatch(
                                        changeFavMusicGenres({
                                            checked: e.target.checked,
                                            value: 'Jazz',
                                        })
                                    )
                                }
                            />
                            Jazz
                        </div>
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.favMusicGenres.includes(
                                    'Classical'
                                )}
                                onChange={(e) =>
                                    dispatch(
                                        changeFavMusicGenres({
                                            checked: e.target.checked,
                                            value: 'Classical',
                                        })
                                    )
                                }
                            />
                            Classical
                        </div>
                    </div>
                </div>
                <div>
                    Favorite Movie Genres:
                    <div className="checkbox-inline">
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.favMovieGenres.includes(
                                    'Action'
                                )}
                                onChange={(e) =>
                                    dispatch(
                                        changeFavMovieGenres({
                                            checked: e.target.checked,
                                            value: 'Action',
                                        })
                                    )
                                }
                            />
                            Action
                        </div>
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.favMovieGenres.includes(
                                    'Comedy'
                                )}
                                onChange={(e) =>
                                    dispatch(
                                        changeFavMovieGenres({
                                            checked: e.target.checked,
                                            value: 'Comedy',
                                        })
                                    )
                                }
                            />
                            Comedy
                        </div>
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.favMovieGenres.includes(
                                    'Romance'
                                )}
                                onChange={(e) =>
                                    dispatch(
                                        changeFavMovieGenres({
                                            checked: e.target.checked,
                                            value: 'Romance',
                                        })
                                    )
                                }
                            />
                            Romance
                        </div>
                        <div className="input-and-label">
                            <input
                                type="checkbox"
                                checked={state.favMovieGenres.includes(
                                    'Horror'
                                )}
                                onChange={(e) =>
                                    dispatch(
                                        changeFavMovieGenres({
                                            checked: e.target.checked,
                                            value: 'Horror',
                                        })
                                    )
                                }
                            />
                            Horror
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
