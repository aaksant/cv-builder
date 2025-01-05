import FormsContainer from './components/form/FormsContainer';
import Preview from './components/preview/Preview';
import './styles/App.css';

export default function App() {
  return (
    <div className="wrapper">
      <FormsContainer />
      <Preview />
    </div>
  );
}
