import Education from './Education';

export default function Educations({ educations }) {
  return (
    <section className="educations">
      {educations.length > 0 && (
        <h3 className="main-content__title">Educations</h3>
      )}
      {educations.map((education) => (
        <Education {...education} key={education.id} />
      ))}
    </section>
  );
}
