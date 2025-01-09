import '../../styles/Preview.css';
import Header from './Header';

export default function Preview({ personalDetails }) {
  return (
    <section className="preview-container">
      <Header personalDetails={personalDetails} />
      <main></main>
    </section>
  );
}
