import { useSelector, useDispatch } from 'react-redux';
import {
    changeName,
    changeAge,
    changeGender,
    changeDOB,
    changeNationality,
} from '../features/personalSlice.js';

export function PersonalInfo() {
    const state = useSelector((state) => state.root.personal);
    const dispatch = useDispatch();

    return (
        <div className="form-card">
            <h1>Personal Information Form</h1>
            <form>
                <div className="row-one">
                    <label className="long-info">
                        Name:
                        <br />
                        <input
                            value={state.name}
                            placeholder="Name"
                            onChange={(e) =>
                                dispatch(changeName(e.target.value))
                            }
                        />
                    </label>
                </div>
                <div className="row-two">
                    <label>
                        Age:
                        <br />
                        <input
                            type="number"
                            min={0}
                            value={state.age}
                            placeholder="Age"
                            onChange={(e) =>
                                dispatch(changeAge(e.target.value))
                            }
                        />
                    </label>
                    <label>
                        Gender:
                        <br />
                        <input
                            maxlength={1}
                            value={state.gender}
                            placeholder="Gender"
                            onChange={(e) =>
                                dispatch(changeGender(e.target.value))
                            }
                        />
                    </label>
                </div>
                <div className="row-three">
                    <label>
                        DOB:
                        <br />
                        <input
                            type="date"
                            placeholder="DOB"
                            onChange={(e) =>
                                dispatch(changeDOB(new Date(e.target.value)))
                            }
                        />
                    </label>
                    <label>
                        Nationality:
                        <br />
                        <input
                            value={state.nationality}
                            placeholder="Nationality"
                            onChange={(e) =>
                                dispatch(changeNationality(e.target.value))
                            }
                        />
                    </label>
                </div>
            </form>
        </div>
    );
}
