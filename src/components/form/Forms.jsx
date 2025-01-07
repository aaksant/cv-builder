import SingleEntryForm from './SingleEntryForm';
import MultipleEntriesForm from './MultipleEntriesForm';
import formsConfig from '../../formsConfig';
import '../../styles/Forms.css';

export default function Forms() {
  const objectStateForm = formsConfig.filter((form) => form.state === 'object');
  const arrayStateForm = formsConfig.filter((form) => form.state !== 'object');

  return (
    <section className="forms">
      {objectStateForm.map(({ title, id, fields }) => (
        <SingleEntryForm title={title} fields={fields} key={id} />
      ))}
      {arrayStateForm.map(({ title, id, fields }) => (
        <MultipleEntriesForm id={id} title={title} fields={fields} key={id} />
      ))}
    </section>
  );
}
