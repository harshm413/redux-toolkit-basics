import { useSelector } from 'react-redux';

export function StateComponent() {
    const state = useSelector((state) => state.root);

    return (
        <div className="left-half">
            <div className="personal-info-card">
                <h1>Redux Basics App</h1>
                <p>Project Tutorial</p>
                <p>Edit the form to see changing of state.</p>
            </div>
            <div className="personal-info-card">
                <h1>Personal Information</h1>
                <p>Name: {state.personal.name}</p>
                <p>Age: {state.personal.age}</p>
                <p>Gender: {state.personal.gender}</p>
                <p>
                    DOB:{' '}
                    {state.personal.dob.getDate() +
                        '/' +
                        (state.personal.dob.getMonth() + 1) +
                        '/' +
                        state.personal.dob.getFullYear()}
                </p>
                <p>Nationality: {state.personal.nationality}</p>
            </div>
            <div className="contact-info-card">
                <h1>Contact Information</h1>
                <p>Address: {state.contact.address}</p>
                <p>Phone: {state.contact.phone}</p>
                <p>Email: {state.contact.email}</p>
            </div>
            <div className="interest-info-card">
                <h1>Interest Information</h1>
                <p>
                    Hobbies
                    <br />
                    {state.interest.hobbies.map((hobby) => (
                        <span className="array-item">{hobby}</span>
                    ))}
                </p>
                <p>
                    Favorite Music Genre
                    <br />
                    {state.interest.favMusicGenres.map((favMusicGenre) => (
                        <span className="array-item">{favMusicGenre}</span>
                    ))}
                </p>
                <p>
                    Favorite Movie Genre
                    <br />
                    {state.interest.favMovieGenres.map((favMovieGenre) => (
                        <span className="array-item">{favMovieGenre}</span>
                    ))}
                </p>
            </div>
        </div>
    );
}
