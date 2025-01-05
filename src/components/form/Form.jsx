import '../../styles/Form.css';

export default function Form({ title, fields, formId }) {
  return (
    <div className="form">
      <div className="form__header">
        <h2>{title}</h2>
        <button type="button">down</button>
      </div>
      <form action="/" id={`form-${formId}`}>
        {fields.map(({ label, type, name, id }, index) => (
          <div className="form-row" key={index}>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={id} />
          </div>
        ))}
      </form>
    </div>
  );
}
