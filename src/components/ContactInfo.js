import { useSelector, useDispatch } from 'react-redux';
import {
    changeAddress,
    changePhone,
    changeEmail,
} from '../features/contactSlice.js';

export function ContactInfo() {
    const state = useSelector((state) => state.root.contact);
    const dispatch = useDispatch();

    return (
        <div className="form-card">
            <h1>Contact Information Form</h1>
            <form>
                <label className="long-info">
                    Address:
                    <br />
                    <input
                        value={state.address}
                        placeholder="Address"
                        onChange={(e) =>
                            dispatch(changeAddress(e.target.value))
                        }
                    />
                </label>
                <br />
                <label className="long-info">
                    Phone:
                    <br />
                    <input
                        type="number"
                        value={state.phone}
                        min={0}
                        placeholder="Phone"
                        onChange={(e) => dispatch(changePhone(e.target.value))}
                    />
                </label>
                <br />
                <label className="long-info">
                    Email:
                    <br />
                    <input
                        value={state.email}
                        placeholder="Email"
                        onChange={(e) => dispatch(changeEmail(e.target.value))}
                    />
                </label>
            </form>
        </div>
    );
}
