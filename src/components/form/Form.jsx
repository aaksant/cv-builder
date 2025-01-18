import FormRow from './FormRow';
import FormControlButton from './FormControlButton';

export default function Form({
  fields,
  handleSubmit,
  handleCancel,
  initialData
}) {
  return (
    <form action="/" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <FormRow
          {...field}
          key={index}
          defaultValue={initialData ? initialData[field.name] : ''}
        />
      ))}
      <div className="form-control">
        <FormControlButton
          className="cancel"
          text="Cancel"
          onClick={handleCancel}
        />
        <FormControlButton className="submit" text="Submit" type="submit" />
      </div>
    </form>
  );
}
