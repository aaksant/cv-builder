import Form from './Form';
import formsConfig from '../../formsConfig';
import '../../styles/FormsContainer.css';

export default function FormsContainer() {
  return (
    <section className="forms-container">
      {formsConfig.map(({ title, id, fields }, index) => (
        <Form title={title} fields={fields} key={id} formId={index + 1} />
      ))}
    </section>
  );
}
