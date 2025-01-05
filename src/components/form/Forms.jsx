import Form from './Form';
import formsConfig from '../../formsConfig';
import '../../styles/Forms.css';

export default function Forms() {
  return (
    <section className="forms">
      {formsConfig.map(({ title, id, fields }) => (
        <Form title={title} fields={fields} key={id} />
      ))}
    </section>
  );
}
