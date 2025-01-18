export default function FormRow({
  isInput,
  label,
  name,
  type,
  id,
  isRequired,
  defaultValue
}) {
  return (
    <div className="form-row">
      <label htmlFor={name}>{label}</label>
      {isInput ? (
        <input
          type={type}
          name={name}
          id={id}
          required={isRequired}
          defaultValue={defaultValue}
        />
      ) : (
        <textarea name={name} id={id} defaultValue={defaultValue}></textarea>
      )}
    </div>
  );
}
