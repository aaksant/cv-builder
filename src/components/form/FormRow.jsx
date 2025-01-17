export default function FormRow({
  isInput,
  label,
  name,
  type,
  id,
  isRequired
}) {
  return (
    <div className="form-row">
      <label htmlFor={name}>{label}</label>
      {isInput ? (
        <input type={type} name={name} id={id} required={isRequired} />
      ) : (
        <textarea name={name} id={id}></textarea>
      )}
    </div>
  );
}
