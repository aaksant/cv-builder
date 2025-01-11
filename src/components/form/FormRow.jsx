export default function FormRow({ label, name, type, id, isRequired }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className={!isRequired ? 'optional' : ''}>
        {label}
      </label>
      <input type={type} name={name} id={id} required={isRequired} />
    </div>
  );
}
