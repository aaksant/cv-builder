import Educations from './Educations';

export default function MainContent({ educations }) {
  return (
    <main>
      <Educations educations={educations} />
    </main>
  );
}
