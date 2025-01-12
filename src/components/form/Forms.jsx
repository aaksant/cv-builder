import SingleEntryForm from './SingleEntryForm';
import MultipleEntriesForm from './MultipleEntriesForm';
import formsConfig from '../../formsConfig';
import '../../styles/Form.css';

export default function Forms({ cvData, setCvData }) {
  const { personalDetails, educations, experiences } = cvData;

  const objectStateForm = formsConfig.filter((form) => form.state === 'object');
  const arrayStateForm = formsConfig.filter((form) => form.state !== 'object');

  return (
    <section className="forms">
      {objectStateForm.map(({ title, id, fields }) => (
        <SingleEntryForm
          personalDetails={personalDetails}
          setCvData={setCvData}
          title={title}
          fields={fields}
          key={id}
        />
      ))}
      {arrayStateForm.map(({ title, id, fields }) => (
        <MultipleEntriesForm
          entries={title === 'Educations' ? educations : experiences}
          setCvData={setCvData}
          title={title}
          fields={fields}
          sectionKey={title.toLowerCase()}
          key={id}
        />
      ))}
    </section>
  );
}
