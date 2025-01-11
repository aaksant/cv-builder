import SingleEntryForm from './SingleEntryForm';
import MultipleEntriesForm from './MultipleEntriesForm';
import formsConfig from '../../formsConfig';
import '../../styles/Form.css';

export default function Forms({ personalDetails, setPersonalDetails }) {
  const objectStateForm = formsConfig.filter((form) => form.state === 'object');
  const arrayStateForm = formsConfig.filter((form) => form.state !== 'object');

  return (
    <section className="forms">
      {objectStateForm.map(({ title, id, fields }) => (
        <SingleEntryForm
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          title={title}
          fields={fields}
          key={id}
        />
      ))}
      {arrayStateForm.map(({ title, id, fields }) => (
        <MultipleEntriesForm id={id} title={title} fields={fields} key={id} />
      ))}
    </section>
  );
}
