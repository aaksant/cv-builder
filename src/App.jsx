import { useState } from 'react';
import Forms from './components/form/Forms';
import Preview from './components/preview/Preview';
import './styles/App.css';

export default function App() {
  const [personalDetails, setPersonalDetails] = useState({});

  return (
    <div className="wrapper">
      <Forms
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <Preview personalDetails={personalDetails} />
    </div>
  );
}
