import './App.css';
import { StateComponent } from './components/StateComponent.js';
import { PersonalInfo } from './components/PersonalInfo.js';
import { ContactInfo } from './components/ContactInfo.js';
import { InterestInfo } from './components/InterestInfo.js';

function App() {
    return (
        <div className="App">
            <StateComponent />
            <div className="right-half">
                <PersonalInfo />
                <ContactInfo />
                <InterestInfo />
            </div>
        </div>
    );
}

export default App;
