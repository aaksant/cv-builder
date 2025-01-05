import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import '../../styles/Form.css';

export default function Form({ title, fields }) {
  const [isFormShown, setIsFormShown] = useState(false);

  function handleFormDropdown() {
    setIsFormShown(!isFormShown);
  }

  return (
    <div className={`form ${isFormShown ? 'active' : ''}`}>
      <div className="form__header" onClick={handleFormDropdown}>
        <h2>{title}</h2>
        <button
          type="button"
          className="form__dropdown-button"
          onClick={handleFormDropdown}
        >
          <SlArrowDown className="icon" />
        </button>
      </div>
      {isFormShown && (
        <form action="/">
          {fields.map(({ label, type, name, id }, index) => (
            <div className="form-row" key={index}>
              <label htmlFor={name}>{label}</label>
              <input type={type} name={name} id={id} />
            </div>
          ))}
        </form>
      )}
    </div>
  );
}
