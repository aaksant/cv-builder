import Educations from './Educations';
import Experiences from './Experiences';

export default function MainContent({ educations, experiences }) {
  const hasEducations = educations.length > 0;
  const hasExperiences = experiences.length > 0;

  return (
    <main>
      {hasEducations && <Educations educations={educations} />}
      {hasExperiences && <Experiences experiences={experiences} />}
      {!hasEducations && !hasExperiences && (
        <p className="text-light" style={{ textAlign: 'center' }}>
          No entries added yet.
        </p>
      )}
    </main>
  );
}
