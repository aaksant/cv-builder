export default function FormRow({ label, name, type, id, isRequired }) {
  return (
    <div className="form-row">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={id} required={isRequired} />
    </div>
  );
}
