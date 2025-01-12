import FormRow from './FormRow';
import FormControlButton from './FormControlButton';

export default function Form({ fields, handleSubmit, handleCancel }) {
  return (
    <form action="/" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <FormRow {...field} key={index} />
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
