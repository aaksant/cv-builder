import Experience from './Experience';

export default function Experiences({ experiences }) {
  return (
    <section className="main-content experiences">
      {experiences.length > 0 && (
        <h3 className="main-content__title">Experiences</h3>
      )}
      {experiences.map((experience) => (
        <Experience {...experience} key={experience.id} />
      ))}
    </section>
  );
}
