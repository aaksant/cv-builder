import { useState } from 'react';
import Forms from './components/form/Forms';
import Preview from './components/preview/Preview';
import './styles/App.css';

export default function App() {
  const [cvData, setCvData] = useState({
    personalDetails: {},
    educations: [],
    experiences: []
  });

  return (
    <div className="wrapper">
      <Forms cvData={cvData} setCvData={setCvData} />
      <Preview cvData={cvData} />
    </div>
  );
}
