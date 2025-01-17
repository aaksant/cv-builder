import '../../styles/Preview.css';
import Header from './Header';
import MainContent from './MainContent';

export default function Preview({ cvData }) {
  const { personalDetails, educations, experiences } = cvData;

  return (
    <section className="preview-container">
      <Header personalDetails={personalDetails} />
      <MainContent educations={educations} experiences={experiences} />
    </section>
  );
}
